import { useEffect } from "react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { CookieCategory } from "@/config/cookie-config";
import { Button } from "@/components/ui/button";

/**
 * Hook per caricare uno script solo dopo consenso per la categoria specificata.
 */
export function useConditionalScript(category: CookieCategory, scriptUrl: string) {
  const { hasConsent } = useCookieConsent();

  useEffect(() => {
    if (!hasConsent(category)) return;

    const existing = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [hasConsent, category, scriptUrl]);
}

/**
 * Placeholder per contenuti bloccati fino a consenso.
 * Mostra un messaggio elegante con pulsante per abilitare la categoria.
 */
interface BlockedContentProps {
  category: CookieCategory;
  title?: string;
  children: React.ReactNode;
}

export const ConditionalContent: React.FC<BlockedContentProps> = ({
  category,
  title = "Contenuto bloccato",
  children,
}) => {
  const { hasConsent, openPreferences } = useCookieConsent();

  if (hasConsent(category)) return <>{children}</>;

  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-muted/50 p-8 text-center">
      <p className="text-sm font-medium text-foreground">{title}</p>
      <p className="text-xs text-muted-foreground max-w-sm">
        Questo contenuto richiede il tuo consenso per i cookie della categoria "{category === "thirdParty" ? "Contenuti esterni" : category === "analytics" ? "Statistici" : "Marketing"}".
      </p>
      <Button size="sm" variant="outline" onClick={openPreferences} className="text-xs">
        Gestisci preferenze
      </Button>
    </div>
  );
};
