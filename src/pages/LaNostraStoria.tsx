import { Sparkles, Wheat, HeartHandshake, Scale, Clock, Heart, Home, CalendarDays } from "lucide-react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import dough1 from "@/assets/dough-1.jpg";
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
    <span className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/40 text-primary shrink-0">
      <Icon size={18} strokeWidth={1.5} />
    </span>
    <h2 className="text-2xl md:text-3xl font-normal text-foreground leading-tight">{children}</h2>
  </div>
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
    text: "Per il lavoro, per gli ingredienti, e soprattutto per le persone che scelgono di passare del tempo da noi. Il cliente non è un numero — è qualcuno che si fida di noi per qualche ora della sua serata.",
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
        <img src={pattern} alt="" className="absolute bottom-0 left-0 w-64 opacity-[0.04] pointer-events-none" />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">Dal 2010</p>
          <h1 className="text-4xl md:text-6xl font-normal text-background">La Nostra Storia</h1>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 bg-background">
        <div className="max-w-3xl mx-auto space-y-16 md:space-y-20">
          {/* Come tutto è cominciato */}
          <Reveal>
            <SectionTitle icon={CalendarDays}>Come tutto è cominciato</SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Carinostri nasce nel 2010, ma la vera svolta è arrivata prima ancora di aprire — il giorno in cui abbiamo
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
              <img src={dough1} alt="Il lievito madre di Carinostri" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          {/* Lievito madre */}
          <Reveal>
            <SectionTitle icon={Wheat}>Il lievito madre: la nostra radice</SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se c'è una cosa che racconta Carinostri meglio di qualsiasi altra, è il lievito madre.
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
                  <div className="h-full border border-border rounded-md p-6 bg-card">
                    <v.icon size={22} strokeWidth={1.5} className="text-primary mb-3" />
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
              Non pretendiamo di essere perfetti — errori capitano, come in ogni lavoro fatto dagli esseri umani. Ma
              l'impegno a fare bene, quello non è mai mancato, dal primo giorno fino a oggi.
            </p>
          </Reveal>

          {/* Dal 2010 */}
          <Reveal>
            <SectionTitle icon={CalendarDays}>Dal 2010, con la stessa testa</SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Più di dieci anni fa abbiamo iniziato questo percorso, e la cosa che ci sorprende di più, guardandoci
              indietro, è che la bussola non è mai cambiata.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stessa passione, stessa curiosità, stesso rispetto per il lavoro. Siamo cresciuti, abbiamo imparato,
              abbiamo migliorato tante cose — ma i valori da cui siamo partiti sono rimasti intatti.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              E speriamo si sentano, ogni volta che qualcuno entra da Carinostri.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaNostraStoria;
