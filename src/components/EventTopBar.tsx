import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBirthdayEvent } from "@/contexts/BirthdayEventContext";

const EventTopBar = () => {
  const { barVisible, dismissBar } = useBirthdayEvent();
  const location = useLocation();
  if (!barVisible) return null;

  return (
    <aside aria-label="Serata compleanno Carinostri" className="fixed inset-x-0 top-0 z-[60] h-10 bg-primary text-primary-foreground font-body flex items-center">
      <Link to="/#compleanno" onClick={() => {
        if (location.pathname === "/" && location.hash === "#compleanno") {
          document.getElementById("compleanno")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
        }
      }} className="flex h-full flex-1 items-center justify-center pl-10 pr-2 text-xs tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground">
        <span className="hidden md:inline">27 novembre · Si festeggia il 16° compleanno di Carinostri · Scopri la serata →</span>
        <span className="md:hidden">27/11 · Compleanno Carinostri →</span>
      </Link>
      <Button variant="ghost" size="icon" aria-label="Chiudi barra compleanno" onClick={dismissBar} className="h-10 w-10 shrink-0 rounded-none text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><X aria-hidden="true" /></Button>
    </aside>
  );
};

export default EventTopBar;