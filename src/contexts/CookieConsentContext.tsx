import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import {
  CookieCategory,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
} from "@/config/cookie-config";

interface ConsentState {
  version: number;
  timestamp: string;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  thirdParty: boolean;
}

interface CookieConsentContextValue {
  consent: ConsentState | null;
  hasConsented: boolean;
  hasConsent: (category: CookieCategory) => boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Partial<Record<CookieCategory, boolean>>) => void;
  showBanner: boolean;
  setShowBanner: (v: boolean) => void;
  showPreferences: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

const defaultConsent: ConsentState = {
  version: CONSENT_VERSION,
  timestamp: "",
  necessary: true,
  analytics: false,
  marketing: false,
  thirdParty: false,
};

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveConsent(state: ConsentState) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage non disponibile — graceful degradation
  }
}

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentState | null>(() => loadConsent());
  const [showBanner, setShowBanner] = useState(!consent);
  const [showPreferences, setShowPreferences] = useState(false);

  const hasConsented = consent !== null;

  const hasConsent = useCallback(
    (category: CookieCategory) => {
      if (category === "necessary") return true;
      return consent?.[category] ?? false;
    },
    [consent],
  );

  const persist = useCallback((state: ConsentState) => {
    const withTimestamp = { ...state, timestamp: new Date().toISOString() };
    setConsent(withTimestamp);
    saveConsent(withTimestamp);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const acceptAll = useCallback(() => {
    persist({ ...defaultConsent, analytics: true, marketing: true, thirdParty: true });
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist({ ...defaultConsent });
  }, [persist]);

  const savePreferences = useCallback(
    (prefs: Partial<Record<CookieCategory, boolean>>) => {
      persist({
        ...defaultConsent,
        analytics: prefs.analytics ?? false,
        marketing: prefs.marketing ?? false,
        thirdParty: prefs.thirdParty ?? false,
      });
    },
    [persist],
  );

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
    setShowBanner(false);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasConsented,
        hasConsent,
        acceptAll,
        rejectAll,
        savePreferences,
        showBanner,
        setShowBanner,
        showPreferences,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}

/** Helper per aprire il pannello preferenze da qualsiasi punto */
export function openCookiePreferencesGlobal() {
  window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
}
