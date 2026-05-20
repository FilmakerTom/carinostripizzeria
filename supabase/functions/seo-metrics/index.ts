import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE = "https://carinostripizzeria.lovable.app/";
const SITE_ENC = encodeURIComponent(SITE);

function ymd(d: Date) {
  return d.toISOString().slice(0, 10);
}

async function gscQuery(body: Record<string, unknown>, lovableKey: string, gscKey: string) {
  const res = await fetch(
    `${GATEWAY}/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gscKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );
  const text = await res.text();
  let data: any = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    throw new Error(
      `GSC gateway returned non-JSON (status ${res.status}): ${text.slice(0, 200)}`,
    );
  }
  if (!res.ok) {
    throw new Error(`GSC ${res.status}: ${JSON.stringify(data)}`);
  }
  return data;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GSC_KEY = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_ANON = Deno.env.get("SUPABASE_PUBLISHABLE_KEY") ??
      Deno.env.get("SUPABASE_ANON_KEY");

    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!GSC_KEY) throw new Error("GOOGLE_SEARCH_CONSOLE_API_KEY is not configured");
    if (!SUPABASE_URL || !SUPABASE_ANON) throw new Error("Supabase env not configured");

    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: userRes, error: userErr } = await supabase.auth.getUser();
    if (userErr || !userRes.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: isAdmin, error: roleErr } = await supabase.rpc("has_role", {
      _user_id: userRes.user.id,
      _role: "admin",
    });
    if (roleErr || !isAdmin) {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // GSC data is delayed ~2-3 days. Use end = today-3, start = end-6 (7-day window).
    const end = new Date();
    end.setUTCDate(end.getUTCDate() - 3);
    const start = new Date(end);
    start.setUTCDate(start.getUTCDate() - 6);
    const startDate = ymd(start);
    const endDate = ymd(end);

    const totals = await gscQuery({ startDate, endDate }, LOVABLE_API_KEY, GSC_KEY);
    const byQuery = await gscQuery({ startDate, endDate, dimensions: ["query"], rowLimit: 10 }, LOVABLE_API_KEY, GSC_KEY);
    const byPage = await gscQuery({ startDate, endDate, dimensions: ["page"], rowLimit: 10 }, LOVABLE_API_KEY, GSC_KEY);

    const totalsRow = totals.rows?.[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0 };

    return new Response(
      JSON.stringify({
        range: { startDate, endDate },
        totals: {
          clicks: totalsRow.clicks ?? 0,
          impressions: totalsRow.impressions ?? 0,
          ctr: totalsRow.ctr ?? 0,
          position: totalsRow.position ?? 0,
        },
        topQueries: (byQuery.rows ?? []).map((r: any) => ({
          key: r.keys?.[0] ?? "",
          clicks: r.clicks,
          impressions: r.impressions,
          ctr: r.ctr,
          position: r.position,
        })),
        topPages: (byPage.rows ?? []).map((r: any) => ({
          key: r.keys?.[0] ?? "",
          clicks: r.clicks,
          impressions: r.impressions,
          ctr: r.ctr,
          position: r.position,
        })),
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("seo-metrics error", err);
    const msg = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
