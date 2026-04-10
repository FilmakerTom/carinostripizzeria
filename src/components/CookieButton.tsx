import { Cookie } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useEffect } from "react";

const CookieButton = () => {
  const { hasConsented, openPreferences } = useCookieConsent();

  // Supporta apertura globale da qualsiasi punto
  useEffect(() => {
    const handler = () => openPreferences();
    window.addEventListener("open-cookie-preferences", handler);
    return () => window.removeEventListener("open-cookie-preferences", handler);
  }, [openPreferences]);

  if (!hasConsented) return null;

  return (
    <button
      onClick={openPreferences}
      aria-label="Gestisci preferenze cookie"
      className="fixed bottom-4 left-4 z-[9998] flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-xs text-muted-foreground shadow-md hover:text-foreground hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Cookie className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Cookie</span>
    </button>
  );
};

export default CookieButton;
