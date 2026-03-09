import pattern from "@/assets/pattern.svg";
import dough from "@/assets/dough-2.jpg";

const About = () => {
  return (
    <section className="relative py-24 px-4 bg-card overflow-hidden">
      <img
        src={pattern}
        alt=""
        className="absolute top-0 right-0 w-64 opacity-[0.06] pointer-events-none"
      />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-sm">
          <img
            src={dough}
            alt="Impasto artigianale"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">
            Chi Siamo
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-card-foreground mb-6">
            La Nostra Storia
          </h2>
          <div className="w-12 h-px bg-primary mb-8" />
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            Da Carinostri, ogni pizza racconta una storia di passione e
            tradizione. Il nostro impasto viene preparato ogni mattina con
            farine selezionate e lasciato lievitare per 48 ore.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Cotto nel nostro forno a legna a 450°C, ogni morso è un viaggio
            nella vera pizza artigianale italiana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
