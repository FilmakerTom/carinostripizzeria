import { useState, useEffect } from "react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { cookieCategories, preferencesTexts, CookieCategory } from "@/config/cookie-config";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CookiePreferences = () => {
  const { showPreferences, closePreferences, consent, acceptAll, rejectAll, savePreferences } =
    useCookieConsent();

  const [localPrefs, setLocalPrefs] = useState<Record<CookieCategory, boolean>>({
    necessary: true,
    analytics: false,
    marketing: false,
    thirdParty: false,
  });

  useEffect(() => {
    if (showPreferences && consent) {
      setLocalPrefs({
        necessary: true,
        analytics: consent.analytics,
        marketing: consent.marketing,
        thirdParty: consent.thirdParty,
      });
    } else if (showPreferences) {
      setLocalPrefs({ necessary: true, analytics: false, marketing: false, thirdParty: false });
    }
  }, [showPreferences, consent]);

  const handleToggle = (id: CookieCategory) => {
    if (id === "necessary") return;
    setLocalPrefs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Dialog open={showPreferences} onOpenChange={(open) => !open && closePreferences()}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto" aria-label={preferencesTexts.title}>
        <DialogHeader>
          <DialogTitle className="text-base">{preferencesTexts.title}</DialogTitle>
          <DialogDescription className="text-xs leading-relaxed">
            {preferencesTexts.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 my-2">
          {cookieCategories.map((cat) => (
            <div key={cat.id} className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{cat.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{cat.description}</p>
              </div>
              <div className="shrink-0 pt-0.5">
                {cat.required ? (
                  <span className="text-xs text-primary font-medium">{preferencesTexts.alwaysActive}</span>
                ) : (
                  <Switch
                    checked={localPrefs[cat.id]}
                    onCheckedChange={() => handleToggle(cat.id)}
                    aria-label={`${localPrefs[cat.id] ? "Disattiva" : "Attiva"} cookie ${cat.label}`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <Button size="sm" onClick={acceptAll} className="text-xs">
            {preferencesTexts.acceptAll}
          </Button>
          <Button size="sm" variant="outline" onClick={rejectAll} className="text-xs">
            {preferencesTexts.rejectAll}
          </Button>
          <Button size="sm" variant="secondary" onClick={() => savePreferences(localPrefs)} className="text-xs">
            {preferencesTexts.save}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookiePreferences;
