import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBirthdayEvent } from "@/contexts/BirthdayEventContext";

const clamp = (v: number) => Math.min(1, Math.max(0, v));

const BirthdayEvent = () => {
  const { eventVisible } = useBirthdayEvent();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!eventVisible) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setProgress(1);
      const rect = el.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      setProgress(distance > 0 ? clamp(-rect.top / distance) : 1);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [eventVisible]);

  if (!eventVisible) return null;

  const dark = clamp(progress / 0.4);
  const step = (start: number) => {
    const p = clamp((progress - start) / 0.15);
    return { opacity: p, transform: `translateY(${(1 - p) * 24}px)` };
  };

  return (
    <section ref={sectionRef} className="relative h-[320svh] bg-background" aria-labelledby="birthday-title">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-foreground" style={{ opacity: dark }} />
        <div className="relative h-full max-w-4xl mx-auto px-6 flex flex-col justify-center text-background font-body pt-24 pb-4 md:pt-28">
          <div className="relative text-center" style={step(0.4)}>
            <span aria-hidden="true" className="absolute inset-x-0 -top-6 md:-top-10 font-display text-[80px] md:text-[200px] leading-none text-primary/25 pointer-events-none select-none">2026</span>
            <p className="relative text-primary text-xs uppercase tracking-[0.2em]">Venerdì 27 novembre 2026</p>
            <h2 id="birthday-title" className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-7 mt-3 mb-3 md:mt-6 md:mb-6">
              <span className="font-display text-5xl md:text-8xl font-bold leading-none whitespace-nowrap">15<sup className="text-3xl md:text-5xl align-super">+1</sup></span>
              <span className="font-semibold text-lg md:text-2xl uppercase text-center md:text-left leading-relaxed">Compleanno<br className="hidden md:block" /> Carinostri</span>
            </h2>
            <div className="h-px bg-primary/60" />
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-12 py-4 md:py-10 items-center">
            <div className="text-center" style={step(0.55)}>
              <span aria-hidden="true" className="mx-auto block h-px w-16 bg-primary/50" />
              <p className="font-display text-primary text-base md:text-xl uppercase tracking-[0.12em] leading-relaxed py-4 md:py-6"><span className="md:whitespace-nowrap">Sedici anni di forno acceso.</span><br />Festeggiamo con voi.</p>
              <span aria-hidden="true" className="mx-auto block h-px w-16 bg-primary/50" />
            </div>
            <ol className="space-y-2 md:space-y-7 border-l border-primary/40 pl-6" style={step(0.65)}>
              <li className="relative"><span aria-hidden="true" className="absolute -left-[29px] top-3 h-2 w-2 rounded-full bg-primary" /><p className="font-display text-xl md:text-3xl md:mb-1">Dalle 18.00</p><p className="text-sm leading-relaxed text-background/70">aperitivo aperto a tutti per brindare assieme</p></li>
              <li className="relative"><span aria-hidden="true" className="absolute -left-[29px] top-3 h-2 w-2 rounded-full bg-primary" /><p className="font-display text-xl md:text-3xl md:mb-1">Dalle 20.00</p><p className="text-sm leading-relaxed text-background/70">cena con spiedo cotto a legna</p></li>
              <li className="relative"><span aria-hidden="true" className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-primary" /><p className="text-sm leading-relaxed">Dolce sorpresa finale</p></li>
            </ol>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-4 md:py-5 md:px-8 rounded-lg bg-primary text-primary-foreground" style={step(0.75)}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><span className="text-lg">Cena <strong className="text-3xl md:text-4xl font-bold">20€</strong></span><span className="text-[10px] uppercase tracking-[0.15em]">bevande escluse</span></div>
            <Button asChild variant="secondary" size="lg" className="w-full md:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"><a href="tel:+393406264069" aria-label="Prenota la cena chiamando il 340 6264069"><Phone aria-hidden="true" />Prenota la cena</a></Button>
          </div>
        </div>
      </div>
      {/* Scroll target at the end of the animation: fully dark, all info visible. */}
      <div id="compleanno" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[100svh] pointer-events-none" />
    </section>
  );
};

export default BirthdayEvent;
