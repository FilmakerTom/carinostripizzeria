import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBirthdayEvent } from "@/contexts/BirthdayEventContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BirthdayEvent = () => {
  const { eventVisible } = useBirthdayEvent();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  if (!eventVisible) return null;

  return (
    <section id="compleanno" className="birthday-event py-20 md:py-28 px-4 bg-background" aria-labelledby="birthday-title">
      <div ref={ref} className={`max-w-4xl mx-auto bg-card text-card-foreground rounded-lg shadow-sm overflow-hidden transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <header className="relative isolate px-6 pt-10 md:px-12 md:pt-12 overflow-hidden">
          <span aria-hidden="true" className="absolute inset-x-0 top-4 text-center font-display text-[120px] md:text-[200px] leading-none text-primary/15 pointer-events-none select-none">2026</span>
          <p className="relative text-primary font-body text-xs uppercase tracking-[0.2em] text-center">Venerdì 27 novembre 2026</p>
          <h2 id="birthday-title" className="relative flex flex-col md:flex-row items-center justify-center gap-3 md:gap-7 mt-8 mb-8">
            <span className="font-display text-7xl md:text-8xl font-bold leading-none whitespace-nowrap">15<sup className="text-4xl md:text-5xl align-super">+1</sup></span>
            <span className="font-body font-semibold text-xl md:text-2xl uppercase text-center md:text-left leading-relaxed">Compleanno<br />Carinostri</span>
          </h2>
          <div className="h-px bg-primary/60" />
        </header>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 px-6 py-10 md:px-12 md:py-12 items-center">
          <p className="font-script text-primary text-4xl md:text-5xl leading-relaxed">Sedici anni di forno acceso. Festeggiamo con voi.</p>
          <ol className="space-y-7 border-l border-primary/30 pl-6 font-body">
            <li className="relative"><span aria-hidden="true" className="absolute -left-[29px] top-3 h-2 w-2 rounded-full bg-primary" /><p className="font-display text-3xl mb-1">Dalle 18.00</p><p className="text-sm leading-relaxed text-muted-foreground">aperitivo aperto a tutti per brindare assieme</p></li>
            <li className="relative"><span aria-hidden="true" className="absolute -left-[29px] top-3 h-2 w-2 rounded-full bg-primary" /><p className="font-display text-3xl mb-1">Dalle 20.00</p><p className="text-sm leading-relaxed text-muted-foreground">cena con spiedo cotto a legna</p></li>
            <li className="relative"><span aria-hidden="true" className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-primary" /><p className="text-sm leading-relaxed">Dolce sorpresa finale</p></li>
          </ol>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-6 py-7 md:px-12 bg-primary text-primary-foreground font-body">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><span className="text-lg">Cena <strong className="text-4xl font-bold">20€</strong></span><span className="text-[10px] uppercase tracking-[0.15em]">bevande escluse</span></div>
          <Button asChild variant="secondary" size="lg" className="w-full md:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"><a href="tel:+393406264069" aria-label="Prenota la cena chiamando il 340 6264069"><Phone aria-hidden="true" />Prenota la cena</a></Button>
        </div>
      </div>
    </section>
  );
};

export default BirthdayEvent;