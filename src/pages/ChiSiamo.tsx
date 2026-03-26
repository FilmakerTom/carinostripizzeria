import Footer from "@/components/Footer";
import pattern from "@/assets/pattern.svg";
import dough1 from "@/assets/dough-1.jpg";
import pizza1 from "@/assets/pizza-1.png";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

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
                text: "Solo ingredienti di prima scelta, selezionati dai migliori produttori italiani.",
              },
              {
                title: "Tradizione",
                text: "Rispettiamo le tecniche centenarie della pizza napoletana, dal forno a legna alla lievitazione naturale.",
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: MapPin, label: "Indirizzo", value: "Via Francesco Baracca, 64\n31036 Sala TV" },
              { icon: Phone, label: "Telefono", value: "+39 06 1234 5678" },
              { icon: Mail, label: "Email", value: "info@carinostri.it" },
              { icon: Clock, label: "Orari", value: "Mer–Dom: 18:00 – 23:00" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-3">
                <c.icon className="text-primary" size={22} />
                <h3 className="text-xs tracking-widest uppercase text-foreground">{c.label}</h3>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSiamo;
