import Footer from "@/components/Footer";
import pattern from "@/assets/pattern.svg";
import dough1 from "@/assets/dough-1.jpg";
import pizza1 from "@/assets/pizza-1.png";
import { MapPin, Phone, Clock } from "lucide-react";

const ChiSiamo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <img src={pattern} alt="" className="absolute top-0 left-0 w-72 opacity-[0.04] pointer-events-none" />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-body)" }}>
            La Nostra Famiglia
          </p>
          <h1 className="text-5xl md:text-6xl font-normal text-background">Chi Siamo</h1>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={dough1} alt="Il nostro team" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">La Nostra Passione</p>
            <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
              Più di una Pizzeria
            </h2>
            <div className="w-10 h-px bg-primary mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Carinostri non è solo un luogo dove si mangia pizza. È un punto d'incontro 
              dove la tradizione incontra l'innovazione, dove ogni cliente diventa parte 
              della nostra famiglia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il nostro team è composto da professionisti appassionati, dal pizzaiolo che 
              lavora l'impasto al cameriere che vi accoglie con un sorriso. Ognuno contribuisce 
              a rendere la vostra esperienza indimenticabile.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">Cosa Ci Guida</p>
            <h2 className="text-3xl md:text-4xl font-normal text-card-foreground">I Nostri Valori</h2>
            <div className="w-10 h-px bg-primary mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Qualità",
                text: "Usiamo prodotti freschi e di prima qualità per un gusto unico e piacevole",
              },
              {
                title: "Tradizione",
                text: "Portiamo avanti la cura e la lavorazione del lievito madre da decenni",
              },
              {
                title: "Accoglienza",
                text: "Ogni ospite è parte della famiglia. Vi accogliamo con calore e vi facciamo sentire a casa.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="text-xl text-card-foreground mb-3">{v.title}</h3>
                <div className="w-8 h-px bg-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">Vieni a Trovarci</p>
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Contatti</h2>
            <div className="w-10 h-px bg-primary mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-stretch">
            {/* Google Maps */}
            <div className="rounded-sm overflow-hidden aspect-video">
              <iframe
                title="Carinostri - Posizione"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5!2d12.1048!3d45.6483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956c0a0a0a0a1%3A0x1234567890abcdef!2sVia+Francesco+Baracca%2C+64%2C+31036+Istrana+TV!5e0!3m2!1sit!2sit!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info card */}
            <div className="bg-card rounded-sm p-8 flex flex-col justify-center gap-6">
              <h3 className="text-2xl text-card-foreground">Carinostri</h3>
              <div className="w-8 h-px bg-primary" />

              <div className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Via Francesco Baracca, 64<br />31036 Sala TV
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-primary shrink-0 mt-0.5" size={18} />
                <p className="text-muted-foreground text-sm">Mer–Dom: 18:00 – 23:00</p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-primary shrink-0 mt-0.5" size={18} />
                <a href="tel:0422547305" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  0422 547305
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSiamo;
