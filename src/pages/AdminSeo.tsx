import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { RefreshCw, LogOut } from "lucide-react";

interface Row {
  key: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface Metrics {
  range: { startDate: string; endDate: string };
  totals: { clicks: number; impressions: number; ctr: number; position: number };
  topQueries: Row[];
  topPages: Row[];
}

const fmtInt = (n: number) => new Intl.NumberFormat("it-IT").format(Math.round(n));
const fmtPct = (n: number) => `${(n * 100).toFixed(2)}%`;
const fmtPos = (n: number) => n.toFixed(1);

const AdminSeo = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<Metrics | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = useCallback(async () => {
    setRefreshing(true);
    setError(null);
    const { data: res, error: err } = await supabase.functions.invoke("seo-metrics");
    setRefreshing(false);
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    if (res?.error) {
      setError(res.error);
      return;
    }
    setData(res as Metrics);
  }, []);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data: s }) => {
      if (!s.session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      if (mounted) fetchMetrics();
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/admin/login", { replace: true });
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate, fetchMetrics]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <>
      <SEO title="Dashboard SEO · Carinostri" description="Metriche Search Console." path="/admin/seo" />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="min-h-screen bg-background pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <header className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                Dashboard SEO
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {data
                  ? `Periodo: ${data.range.startDate} → ${data.range.endDate}`
                  : "Ultimi 7 giorni · dati Google Search Console"}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={fetchMetrics} disabled={refreshing}>
                <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
                Aggiorna
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Esci
              </Button>
            </div>
          </header>

          {loading && (
            <p className="text-muted-foreground">Caricamento metriche...</p>
          )}

          {error && (
            <Card className="border-destructive/40">
              <CardContent className="pt-6">
                <p className="text-sm text-destructive">Errore: {error}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Search Console pubblica i dati con 2-3 giorni di ritardo. Se il sito è stato
                  verificato da poco, riprova tra qualche giorno.
                </p>
              </CardContent>
            </Card>
          )}

          {data && (
            <>
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricCard label="Click" value={fmtInt(data.totals.clicks)} />
                <MetricCard label="Impression" value={fmtInt(data.totals.impressions)} />
                <MetricCard label="CTR medio" value={fmtPct(data.totals.ctr)} />
                <MetricCard label="Posizione media" value={fmtPos(data.totals.position)} />
              </section>

              <section className="grid lg:grid-cols-2 gap-6">
                <DataTable title="Top query" rows={data.topQueries} keyLabel="Query" />
                <DataTable title="Top pagine" rows={data.topPages} keyLabel="Pagina" isUrl />
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
};

const MetricCard = ({ label, value }: { label: string; value: string }) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-sans">
        {label}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="font-serif text-3xl text-foreground">{value}</p>
    </CardContent>
  </Card>
);

const DataTable = ({
  title,
  rows,
  keyLabel,
  isUrl,
}: {
  title: string;
  rows: Row[];
  keyLabel: string;
  isUrl?: boolean;
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="font-serif text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nessun dato disponibile.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{keyLabel}</TableHead>
              <TableHead className="text-right">Click</TableHead>
              <TableHead className="text-right">Impr.</TableHead>
              <TableHead className="text-right">CTR</TableHead>
              <TableHead className="text-right">Pos.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.key}>
                <TableCell className="max-w-[240px] truncate" title={r.key}>
                  {isUrl ? r.key.replace(/^https?:\/\/[^/]+/, "") || "/" : r.key}
                </TableCell>
                <TableCell className="text-right">{fmtInt(r.clicks)}</TableCell>
                <TableCell className="text-right">{fmtInt(r.impressions)}</TableCell>
                <TableCell className="text-right">{fmtPct(r.ctr)}</TableCell>
                <TableCell className="text-right">{fmtPos(r.position)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </CardContent>
  </Card>
);

export default AdminSeo;
