import { Link } from "react-router-dom";
import logoNegative from "@/assets/logo-negative.png";
import heroPizza from "@/assets/hero-pizza.jpg";
import heroMobileVino from "@/assets/hero-mobile-vino.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(() => window.matchMedia("(min-width: 768px)").matches);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      setShowVideo(media.matches);
      setVideoLoaded(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 transition-transform duration-[1.5s] ease-out overflow-hidden ${
          loaded ? "scale-100" : "scale-110"
        }`}
      >
        <img
          src={showVideo ? heroPizza : heroMobileVino}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {showVideo && <div className={`video-background-wrapper transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"}`}>
          <iframe
            src="https://player.vimeo.com/video/1202835789?background=1&title=0&byline=0&portrait=0"
            style={{ width: "100%", height: "100%", border: "none", pointerEvents: "none" }}
            allow="autoplay; fullscreen"
            title="Carinostri Pizzeria background"
            onLoad={() => setVideoLoaded(true)}
          />
        </div>}
      </div>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <img
          src={logoNegative}
          alt="Logo Carinostri Pizzeria Istrana"
          width={400}
          height={160}
          fetchPriority="high"
          className={`h-28 md:h-40 w-auto mx-auto mb-8 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        />
        <h1
          className={`text-primary-foreground/80 tracking-[0.25em] uppercase text-xs md:text-sm font-normal mb-10 transition-all duration-700 ease-out delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Pizza Artigianale · La bontà della Pasta Madre Viva
        </h1>
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
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 text-sm px-8 py-6 tracking-widest uppercase"
            asChild
          >
            <a href="tel:+393406264069" aria-label="Chiamaci allo 340 6264069">
              <span className="md:hidden">Chiamaci</span>
              <span className="hidden md:inline">Chiamaci · 340 6264069</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
