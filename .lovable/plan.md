## Obiettivo
Aggiungere una dashboard riservata all'admin che mostra le metriche SEO principali di `carinostripizzeria.lovable.app` recuperate da Google Search Console (già connesso).

## Cosa l'utente vedrà

Nuova route **`/admin/seo`**, non collegata al menu pubblico e non indicizzata:

1. **Login** (email + password). Se non autenticato → form di accesso.
2. Dopo il login, la dashboard mostra i dati degli **ultimi 7 giorni**:
   - 4 card con i totali: **Click**, **Impression**, **CTR medio**, **Posizione media**
   - Tabella **Top 10 query** (keyword, click, impression, CTR, posizione)
   - Tabella **Top 10 pagine** (URL, click, impression, CTR, posizione)
   - Pulsante "Aggiorna" e "Logout"
3. Stato vuoto elegante se Search Console non ha ancora dati (le metriche di solito iniziano ad apparire dopo 2-3 giorni dalla verifica).

Stile coerente col brand (terracotta #B65534, charcoal, GFS Didot / Raleway).

## Accesso
- Autenticazione email/password tramite Lovable Cloud.
- **Solo gli utenti con ruolo `admin`** possono vedere la dashboard. Sign-up disabilitato sulla pagina: l'utente admin viene creato manualmente dal pannello Cloud (ti spiego come dopo l'approvazione, è 1 click).
- Route esclusa da `sitemap.xml` e marcata `noindex`.

## Dettagli tecnici

**Database (migrazione):**
- Enum `app_role` (`admin`, `user`) + tabella `user_roles` (user_id, role) con RLS — pattern sicuro contro privilege escalation.
- Funzione SECURITY DEFINER `has_role(uid, role)`.

**Edge function `seo-metrics`** (verify_jwt attivo, richiede sessione):
- Verifica che il chiamante sia `admin` via `has_role`.
- Chiama il gateway connettore Google Search Console:
  - `POST /webmasters/v3/sites/{siteUrl}/searchAnalytics/query` con `startDate`/`endDate` ultimi 7 giorni, una volta senza dimensioni (totali), una con `dimensions:["query"]`, una con `dimensions:["page"]`, `rowLimit: 10`.
- Restituisce `{ totals, topQueries, topPages, range }`.
- Usa `LOVABLE_API_KEY` + `GOOGLE_SEARCH_CONSOLE_API_KEY` (già presenti).

**Frontend:**
- `src/pages/AdminSeo.tsx` — gate auth + ruolo, fetch via `supabase.functions.invoke('seo-metrics')`, render con card shadcn e tabella.
- `src/pages/AdminLogin.tsx` — form login (solo sign-in).
- Route aggiunte in `src/App.tsx`: `/admin/login`, `/admin/seo`.
- `<meta name="robots" content="noindex">` sulle pagine admin tramite il componente `SEO` esistente.

**File toccati:**
- nuova migrazione (enum, `user_roles`, `has_role`)
- nuova edge function `supabase/functions/seo-metrics/index.ts`
- nuovi `src/pages/AdminLogin.tsx`, `src/pages/AdminSeo.tsx`
- nuovo `src/components/admin/MetricCard.tsx`
- modifica `src/App.tsx` (2 route)

## Fuori scopo
- Nessun link pubblico alla dashboard (resta nascosta).
- Niente selettore di intervallo (solo 7 giorni come richiesto).
- Niente grafico trend per ora (solo totali + tabelle).
- Niente sign-up pubblico.
