

## Piano: GDPR Cookie Compliance System

### Analisi del progetto
- Sito React + Vite + Tailwind, single-page con routing client-side
- **Nessuno script di terze parti** presente (no GA4, Meta Pixel, YouTube embed, Maps, reCAPTCHA)
- Footer attuale senza link legali
- Palette: primary (terracotta), foreground (scuro), background (crema chiaro)

### File da creare

1. **`src/contexts/CookieConsentContext.tsx`** — Context React per gestire lo stato del consenso
   - Categorie: `necessary` (sempre true), `analytics`, `marketing`, `thirdParty`
   - Salvataggio in `localStorage` con timestamp e versione
   - Helper `hasConsent(category)` esportato globalmente
   - Funzione `openCookiePreferences()` richiamabile ovunque
   - Struttura pronta per migrazione futura a CMP esterna

2. **`src/config/cookie-config.ts`** — File di configurazione centrale
   - Definizione categorie, descrizioni IT, cookie per categoria, provider, durata
   - Facilmente modificabile senza toccare i componenti

3. **`src/components/CookieBanner.tsx`** — Banner compatto in basso
   - Testo breve in italiano
   - 3 pulsanti: "Accetta tutti", "Rifiuta tutti", "Personalizza"
   - Pulsante "X" che chiude senza accettare (solo cookie tecnici)
   - Animazione slide-up soft con fade
   - Non riappare dopo scelta espressa
   - Accessibilità: focus trap, aria-label, navigazione tastiera

4. **`src/components/CookiePreferences.tsx`** — Pannello preferenze (dialog/modal)
   - Toggle per ogni categoria (necessari disabilitato/sempre on)
   - Pulsanti "Accetta tutti", "Rifiuta tutti", "Salva preferenze"
   - Nessuna casella preselezionata per categorie opzionali
   - Descrizioni chiare per ogni categoria

5. **`src/components/CookieButton.tsx`** — Pulsante persistente discreto
   - Piccola pill fissa in basso a sinistra con icona cookie
   - Testo "Preferenze cookie"
   - Visibile solo dopo prima scelta espressa
   - Apre il pannello preferenze

6. **`src/components/ConditionalScript.tsx`** — Helper per script bloccati fino a consenso
   - Componente wrapper che carica script solo dopo opt-in per categoria
   - Placeholder elegante per embed bloccati con pulsante "Abilita contenuto"

7. **`src/pages/PrivacyPolicy.tsx`** — Pagina Privacy Policy
   - Struttura professionale completa
   - Placeholder marcati: `[NOME_TITOLARE]`, `[EMAIL]`, `[INDIRIZZO]`, `[P.IVA]`, ecc.
   - Avviso iniziale: "Testi da revisionare con professionista legale"
   - Sezioni: titolare, dati raccolti, finalità, base giuridica, conservazione, diritti utente

8. **`src/pages/CookiePolicy.tsx`** — Pagina Cookie Policy
   - Cosa sono i cookie, categorie, elenco cookie (da completare), terze parti, durata
   - Istruzioni per revoca/modifica consenso
   - Link al pannello preferenze integrato

### File da modificare

9. **`src/components/Footer.tsx`** — Aggiungere link a:
   - Privacy Policy (`/privacy-policy`)
   - Cookie Policy (`/cookie-policy`)
   - "Preferenze cookie" (apre pannello preferenze)

10. **`src/App.tsx`** — Aggiungere:
    - `CookieConsentProvider` come wrapper
    - `CookieBanner` e `CookieButton` come componenti globali
    - Route `/privacy-policy` e `/cookie-policy`

### Dettagli tecnici

- **Nessun consenso tramite scroll/inattività** — solo click esplicito
- **localStorage** per persistenza consenso con struttura:
  ```json
  { "version": 1, "timestamp": "...", "necessary": true, "analytics": false, "marketing": false, "thirdParty": false }
  ```
- **Script blocking**: helper `useConditionalScript(category, scriptUrl)` che inietta `<script>` solo dopo consenso
- **Nessun dark pattern**: X chiude senza accettare, nessuna preselection
- **Design**: coerente con palette del sito (terracotta/crema), font Raleway, stile minimale
- **Accessibilità**: focus states, aria-label, role="dialog", keyboard navigation

### Struttura routing finale
```
/                    → Home
/menu                → Menu
/chi-siamo           → Chi Siamo
/la-nostra-storia    → Coming Soon
/privacy-policy      → Privacy Policy (NUOVA)
/cookie-policy       → Cookie Policy (NUOVA)
```

