/**
 * Configurazione centrale cookie e consenso GDPR.
 * Modifica questo file per aggiungere/rimuovere categorie, cookie e provider.
 * Non è necessario toccare i componenti UI.
 */

export type CookieCategory = "necessary" | "analytics" | "marketing" | "thirdParty";

export interface CookieCategoryConfig {
  id: CookieCategory;
  label: string;
  description: string;
  required: boolean;
  cookies: CookieEntry[];
}

export interface CookieEntry {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
}

export const CONSENT_STORAGE_KEY = "carinostri_cookie_consent";
export const CONSENT_VERSION = 1;

export const cookieCategories: CookieCategoryConfig[] = [
  {
    id: "necessary",
    label: "Necessari",
    description:
      "Cookie essenziali per il funzionamento del sito. Non possono essere disattivati perché il sito non funzionerebbe correttamente senza di essi.",
    required: true,
    cookies: [
      {
        name: "carinostri_cookie_consent",
        provider: "Carinostri",
        purpose: "Salva le preferenze di consenso cookie dell'utente",
        duration: "12 mesi",
      },
    ],
  },
  {
    id: "analytics",
    label: "Statistici / Analytics",
    description:
      "Cookie che ci aiutano a capire come i visitatori interagiscono con il sito, raccogliendo informazioni in forma aggregata e anonima.",
    required: false,
    cookies: [
      // Esempio: aggiungere qui Google Analytics, Matomo, ecc.
      // {
      //   name: "_ga",
      //   provider: "Google Analytics",
      //   purpose: "Distingue gli utenti",
      //   duration: "2 anni",
      // },
    ],
  },
  {
    id: "marketing",
    label: "Marketing / Profilazione",
    description:
      "Cookie utilizzati per tracciare i visitatori sui siti web e mostrare annunci personalizzati. Questi cookie richiedono il tuo consenso esplicito.",
    required: false,
    cookies: [
      // Esempio: Meta Pixel, Google Ads, ecc.
    ],
  },
  {
    id: "thirdParty",
    label: "Contenuti esterni / Terze parti",
    description:
      "Cookie impostati da servizi di terze parti integrati nel sito, come video incorporati, mappe o widget social. Senza questi cookie, tali contenuti potrebbero non essere disponibili.",
    required: false,
    cookies: [
      // Esempio: YouTube, Google Maps, ecc.
    ],
  },
];

export const bannerTexts = {
  title: "Informativa cookie",
  description:
    "Utilizziamo cookie tecnici necessari al funzionamento del sito. Puoi scegliere se abilitare anche cookie statistici, di marketing e di terze parti per migliorare la tua esperienza.",
  acceptAll: "Accetta tutti",
  rejectAll: "Rifiuta tutti",
  customize: "Personalizza",
  close: "Chiudi",
};

export const preferencesTexts = {
  title: "Centro preferenze cookie",
  description:
    "Gestisci le tue preferenze sui cookie. I cookie necessari sono sempre attivi. Per le altre categorie puoi esprimere o revocare il consenso in qualsiasi momento.",
  acceptAll: "Accetta tutti",
  rejectAll: "Rifiuta tutti",
  save: "Salva preferenze",
  alwaysActive: "Sempre attivo",
};
