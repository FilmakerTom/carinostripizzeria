import { Sparkles, Wheat, HeartHandshake, Scale, Clock, Heart, Home, CalendarDays, ImageIcon, UtensilsCrossed, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import dough1 from "@/assets/dough-1.jpg";
import salaCarinostri from "@/assets/sala-carinostri.jpg.asset.json";
import rinfrescoLievito from "@/assets/mattarello-impasto.jpg.asset.json";
import insegnaCarinostri from "@/assets/insegna-carinostri.jpg.asset.json";
import pattern from "@/assets/pattern.svg";

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const SectionTitle = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-primary/40 text-primary shrink-0">
      <Icon size={18} strokeWidth={1.5} />
    </span>
    <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-foreground leading-tight">{children}</h2>
  </div>
);

const PhotoPlaceholder = ({ label }: { label: string }) => (
  <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-dashed border-primary/30 bg-muted flex flex-col items-center justify-center gap-2">
    <img src={pattern} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] pointer-events-none" />
    <ImageIcon size={28} strokeWidth={1.25} className="text-primary/60" aria-hidden="true" />
    <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase">Foto in arrivo</p>
    <p className="text-muted-foreground/80 text-xs px-6 text-center">{label}</p>
  </div>
);

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <Reveal>
    <blockquote className="relative text-center py-2">
      <div className="w-10 h-px bg-primary mx-auto mb-6" />
      <p className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl leading-snug text-foreground px-2">
        “{children}”
      </p>
      <div className="w-10 h-px bg-primary mx-auto mt-6" />
    </blockquote>
  </Reveal>
);

const valori = [
  {
    icon: Sparkles,
    title: "Curiosità",
    text: "Non ci siamo mai fermati alla ricetta sicura. Amiamo scoprire ingredienti nuovi, sperimentare abbinamenti, imparare. È quello che tiene vivo il lavoro — e che speriamo si senta in ogni pizza.",
  },
  {
    icon: Heart,
    title: "Cura",
    text: "Dalla gestione del lievito alla scelta delle materie prime, fino all'attenzione per chi entra da quella porta. Nulla viene fatto di fretta o con superficialità.",
  },
  {
    icon: HeartHandshake,
    title: "Rispetto",
    text: "Per il lavoro, per gli ingredienti, e soprattutto per le persone che scelgono di passare del tempo da noi. Il cliente non è un numero — è qualcuno che si fida di noi per qualche ora.",
  },
  {
    icon: Scale,
    title: "Equilibrio",
    text: "È la parola che forse ci rappresenta di più. L'equilibrio nell'impasto, nell'abbinamento dei sapori, nel rapporto con i clienti. Essere presenti senza essere invadenti, offrire qualità senza fare i professoroni.",
  },
  {
    icon: Clock,
    title: "Tempo",
    text: "Fare le cose bene richiede tempo. Il lievito madre ce lo ha insegnato fin dal primo giorno, e noi lo applichiamo a tutto quello che facciamo.",
  },
];

const tappe = [
  {
    anno: "2010",
    titolo: "L'apertura e l'incontro con il lievito madre",
    text: "Nasce Carinostri a Sala d'Istrana. Il lievito madre diventala radice di ogni impasto.",
  },
  {
    anno: "Negli anni",
    titolo: "Crescita, studio, sperimentazione",
    text: "Nuovi ingredienti, nuovi abbinamenti, tanta pratica: siamo cresciuti senza cambiare abbiettivo.",
  },
  {
    anno: "Oggi",
    titolo: "Stessa passione, stessa cura",
    text: "Le persone al centro, i tempi rispettati, la stessa attenzione del primo giorno.",
  },
];

const LaNostraStoria = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="La Nostra Storia · Carinostri Pizzeria"
        description="Dal 2010: la storia di Carinostri, tra lievito madre, cura quotidiana, equilibrio e rispetto per gli ingredienti e per le persone."
        path="/la-nostra-storia"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <img src={pattern} alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-64 opacity-[0.04] pointer-events-none" />
        <div className="relative z-10 text-center px-5">
          <p className="text-primary-foreground/90 tracking-[0.3em] uppercase text-xs mb-3">Dal 2010</p>
          <h1 className="text-4xl md:text-6xl font-normal text-background">La Nostra Storia</h1>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
        </div>
      </section>

      <section className="py-14 md:py-24 px-5 bg-background">
        <div className="max-w-3xl mx-auto space-y-14 md:space-y-20">
          {/* Come tutto è cominciato */}
          <Reveal>
            <SectionTitle icon={CalendarDays}>Come tutto è cominciato</SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Carinostri nasce nel 2010, ma la vera svolta è arrivata il giorno in cui abbiamo
              incontrato il lievito madre.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Non è stata una scelta di marketing, né una moda del momento. È stata una folgorazione. Capire come
              funziona, imparare a lavorarlo, dargli il tempo che richiede — tutto questo ci ha convinto che la pizza era
              la nostra strada. Da quel momento, non abbiamo più avuto dubbi.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="aspect-[16/9] overflow-hidden rounded-sm">
              <img
                src={dough1}
                alt="Impasto a lievito madre lavorato a mano nella pizzeria Carinostri a Sala d'Istrana"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Lievito madre */}
          <Reveal>
            <SectionTitle icon={Wheat}>Il lievito madre: la nostra radice</SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se c'è una cosa che racconta Carinostri meglio di qualsiasi altra, è il nostro lievito madre.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Non è solo un ingrediente. È il punto di partenza di ogni pizza che esce dal nostro forno, è la disciplina
              che ci ha formati, è il motivo per cui siamo ancora qui dopo tanti anni. Il lievito madre richiede cura
              quotidiana, attenzione costante, rispetto dei tempi. Non si può imbrogliare, non si può affrettare. O lo
              tratti bene, o non funziona.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              E in questo, ci ha insegnato qualcosa che va ben oltre la cucina: che le cose fatte con cura e con pazienza
              hanno un sapore diverso. Sempre.
            </p>
          </Reveal>

          <PullQuote>O lo tratti bene, o non funziona.</PullQuote>

          <Reveal delay={100}>
            <div className="aspect-[16/9] overflow-hidden rounded-sm">
              <img
                src={rinfrescoLievito.url}
                alt="Il rinfresco quotidiano del lievito madre nella pizzeria Carinostri"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Valori */}
          <div>
            <Reveal>
              <SectionTitle icon={Sparkles}>I nostri valori, in parole semplici</SectionTitle>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nel corso degli anni abbiamo capito che ci sono alcune parole che tornano sempre, quando parliamo di
                questo posto e di come vogliamo lavorare.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {valori.map((v, i) => (
                <Reveal key={v.title} delay={i * 90} className={i === valori.length - 1 ? "sm:col-span-2" : ""}>
                  <div className="group h-full border border-border rounded-md p-6 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                    <v.icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-primary mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent"
                    />
                    <h3 className="text-xl font-normal text-card-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Un posto per stare bene */}
          <Reveal>
            <SectionTitle icon={Home}>Un posto per stare bene</SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Carinostri non è un posto dove si viene per essere stupiti o impressionati. È un posto dove si viene per
              stare bene — in famiglia, con gli amici, con chi si vuole.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ci piace pensare che il nostro compito finisca quando il cliente si siede: da quel momento, vogliamo solo
              che passi qualche ora in serenità, senza pensieri. La pizza buona, il servizio attento ma discreto,
              un'atmosfera calda e senza fronzoli. Questo siamo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"\n"}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="aspect-[16/9] overflow-hidden rounded-sm">
              <img
                src={salaCarinostri.url}
                alt="La sala della pizzeria Carinostri durante il servizio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <PullQuote>Le cose fatte con cura e con pazienza hanno un sapore diverso.</PullQuote>

          {/* Dal 2010 + timeline */}
          <Reveal>
            <SectionTitle icon={CalendarDays}>Dal 2010, con la stessa testa</SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Più di dieci anni fa abbiamo iniziato questo percorso, e la cosa che ci sorprende di più, guardandoci
              indietro, è che la direzione non è mai cambiata.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stessa passione, stessa curiosità, stesso rispetto per il lavoro. Siamo cresciuti, abbiamo imparato,
              abbiamo migliorato tante cose — ma i valori da cui siamo partiti sono rimasti intatti.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              E speriamo si sentano, ogni volta che qualcuno entra da Carinostri.
            </p>
          </Reveal>

          <ol className="relative border-l border-border ml-3 space-y-8">
            {tappe.map((t, i) => (
              <Reveal key={t.anno} delay={i * 120}>
                <li className="relative pl-6 sm:pl-8">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                  <p className="text-primary tracking-[0.2em] uppercase text-xs mb-1">{t.anno}</p>
                  <h3 className="text-lg sm:text-xl font-normal text-foreground mb-1">{t.titolo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={100}>
            <div className="aspect-[16/9] overflow-hidden rounded-sm">
              <img
                src={insegnaCarinostri.url}
                alt="L'insegna e l'ingresso della pizzeria Carinostri a Sala d'Istrana"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA finale */}
      <section className="relative bg-card py-16 md:py-20 px-5 overflow-hidden">
        <img src={pattern} alt="" aria-hidden="true" className="absolute top-0 right-0 w-56 opacity-[0.06] pointer-events-none" />
        <Reveal className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">Vi aspettiamo</p>
          <h2 className="text-3xl md:text-4xl font-normal text-card-foreground mb-4">
            Il resto si racconta a tavola
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            Date un'occhiata al nostro menù oppure passate a trovarci: siamo a Sala d'Istrana, dal martedì alla domenica.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/menu">
                <UtensilsCrossed size={18} aria-hidden="true" />
                Guarda il Menù
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/chi-siamo">
                <MapPin size={18} aria-hidden="true" />
                Vieni a Trovarci
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default LaNostraStoria;
