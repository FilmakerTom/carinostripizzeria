import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import pattern from "@/assets/pattern.svg";
import dough from "@/assets/dough-2.jpg";

const About = () => {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative py-24 px-4 bg-card overflow-hidden">
      <img
        src={pattern}
        alt=""
        className="absolute top-0 right-0 w-64 opacity-[0.06] pointer-events-none"
      />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          ref={imgRef}
          className={`aspect-[4/5] overflow-hidden rounded-sm transition-all duration-700 ease-out ${
            imgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <img
            src={dough}
            alt="Impasto artigianale"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div
          ref={textRef}
          className={`transition-all duration-700 ease-out delay-200 ${
            textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">
            Chi Siamo
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-card-foreground mb-6">
            La Nostra Storia
          </h2>
          <div className="w-12 h-px bg-primary mb-8" />
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            <h1>
              Da Carinostri ci si siede, si mangia bene e si sta bene.
            </h1>
            Siamo qui dal 2010 e facciamo questo lavoro con passione, attenzione e rispetto.
            Rispetto per gli ingredienti, per l'impasto, e soprattutto per chi viene a trovarci.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Il nostro lievito madre non è solo un metodo: è la radice di tutto quello che facciamo.
            Portate la famiglia, portate gli amici. Noi pensiamo al resto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
