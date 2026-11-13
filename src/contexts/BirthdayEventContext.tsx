import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { BIRTHDAY_DISMISS_KEY, BIRTHDAY_EXPIRY, isBirthdayVisible } from "@/config/birthday-event";

const BirthdayEventContext = createContext({ eventVisible: isBirthdayVisible(), barVisible: false, dismissBar: () => {} });

export const BirthdayEventProvider = ({ children }: { children: ReactNode }) => {
  const [eventVisible, setEventVisible] = useState(isBirthdayVisible);
  const [dismissed, setDismissed] = useState(() => {
    try { return sessionStorage.getItem(BIRTHDAY_DISMISS_KEY) === "1"; }
    catch { return false; }
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const update = () => {
      clearTimeout(timer);
      setEventVisible(isBirthdayVisible());
      const remaining = BIRTHDAY_EXPIRY - Date.now();
      if (remaining > 0) timer = setTimeout(update, Math.min(remaining, 2_147_483_647));
    };
    update();
    window.addEventListener("focus", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("focus", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const dismissBar = () => {
    setDismissed(true);
    try { sessionStorage.setItem(BIRTHDAY_DISMISS_KEY, "1"); } catch { /* Storage may be blocked. */ }
  };
  const barVisible = eventVisible && !dismissed;

  return (
    <BirthdayEventContext.Provider value={{ eventVisible, barVisible, dismissBar }}>
      <div className={barVisible ? "event-promotion-active" : undefined}>{children}</div>
    </BirthdayEventContext.Provider>
  );
};

export const useBirthdayEvent = () => useContext(BirthdayEventContext);