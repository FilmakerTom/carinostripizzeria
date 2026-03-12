import { Link } from "react-router-dom";
import logoNegative from "@/assets/logo-negative.png";
import pizza1 from "@/assets/pizza-1.png";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out ${
          loaded ? "scale-100" : "scale-110"
        }`}
        style={{ backgroundImage: `url(${pizza1})` }}
      />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <img
          src={logoNegative}
          alt="Carinostri"
          className={`h-28 md:h-40 mx-auto mb-8 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        />
        <p
          className={`text-primary-foreground/70 tracking-[0.25em] uppercase text-xs md:text-sm mb-10 transition-all duration-700 ease-out delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Pizza Artigianale · Forno a Legna
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-8 py-6 tracking-widest uppercase"
            asChild
          >
            <Link to="/menu">Il Nostro Menu</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 text-sm px-8 py-6 tracking-widest uppercase"
            asChild
          >
            <Link to="/chi-siamo">Chi Siamo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
