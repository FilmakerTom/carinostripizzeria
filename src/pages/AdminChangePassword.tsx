import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Almeno 8 caratteri" })
      .max(72, { message: "Massimo 72 caratteri" }),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Le password non coincidono",
    path: ["confirm"],
  });

const AdminChangePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/admin/login", { replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/admin/login", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = passwordSchema.safeParse({ password, confirm });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Password aggiornata");
    setPassword("");
    setConfirm("");
    navigate("/admin/seo", { replace: true });
  };

  return (
    <>
      <SEO
        title="Cambia password · Admin"
        description="Area riservata Carinostri: aggiorna in sicurezza la password del tuo account amministratore del sito."
        path="/admin/change-password"
      />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-background px-4 pt-24">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-6 border border-border rounded-lg p-8 bg-card"
        >
          <div className="space-y-1 text-center">
            <h1 className="font-serif text-2xl text-foreground">Cambia password</h1>
            <p className="text-sm text-muted-foreground">
              Imposta una nuova password per il tuo account.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Nuova password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              maxLength={72}
              autoComplete="new-password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Conferma password</Label>
            <Input
              id="confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              minLength={8}
              maxLength={72}
              autoComplete="new-password"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Salvataggio..." : "Aggiorna password"}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            <Link to="/admin/seo" className="underline hover:text-foreground">
              Torna alla dashboard
            </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default AdminChangePassword;
