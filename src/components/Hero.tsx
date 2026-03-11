import { Link } from "react-router-dom";
import logoNegative from "@/assets/logo-negative.png";
import pizza1 from "@/assets/pizza-1.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pizza1})` }}
      />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <img
          src={logoNegative}
          alt="Carinostri"
          className="h-28 md:h-40 mx-auto mb-8"
        />
        <p className="text-primary-foreground/70 tracking-[0.25em] uppercase text-xs md:text-sm mb-10" style={{ fontFamily: 'var(--font-body)' }}>
          Pizza Artigianale · Forno a Legna
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-8 py-6 tracking-widest uppercase"
          >
            Il Nostro Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-sm px-8 py-6 tracking-widest uppercase"
          >
            Prenota un Tavolo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
