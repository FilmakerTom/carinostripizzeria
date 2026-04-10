import { X } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { bannerTexts } from "@/config/cookie-config";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const { showBanner, setShowBanner, acceptAll, rejectAll, openPreferences } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label={bannerTexts.title}
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-[9999] animate-in slide-in-from-bottom-4 fade-in duration-500"
    >
      <div className="mx-auto max-w-3xl p-4">
        <div className="rounded-lg border border-border bg-background p-5 shadow-xl">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h2 className="text-sm font-semibold text-foreground">{bannerTexts.title}</h2>
            <button
              onClick={() => setShowBanner(false)}
              aria-label={bannerTexts.close}
              className="shrink-0 rounded-sm p-1 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground mb-4">
            {bannerTexts.description}{" "}
            <Link to="/cookie-policy" className="underline hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </p>

          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={acceptAll} className="text-xs">
              {bannerTexts.acceptAll}
            </Button>
            <Button size="sm" variant="outline" onClick={rejectAll} className="text-xs">
              {bannerTexts.rejectAll}
            </Button>
            <Button size="sm" variant="ghost" onClick={openPreferences} className="text-xs">
              {bannerTexts.customize}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
