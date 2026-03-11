import Footer from "@/components/Footer";
import pattern from "@/assets/pattern.svg";

const pizzeClassiche = [
  { name: "Margherita", description: "Pomodoro San Marzano, fior di latte, basilico fresco, olio EVO", price: "€8" },
  { name: "Marinara", description: "Pomodoro San Marzano, aglio, origano, olio EVO", price: "€7" },
  { name: "Napoli", description: "Acciughe, capperi, olive taggiasche, pomodoro San Marzano, origano", price: "€9" },
  { name: "Diavola", description: "Salame piccante, peperoni arrostiti, mozzarella, olio al peperoncino", price: "€10" },
  { name: "Quattro Stagioni", description: "Carciofi, prosciutto cotto, funghi, olive, mozzarella", price: "€11" },
];

const pizzeSpeciali = [
  { name: "Prosciutto e Rucola", description: "Prosciutto di Parma, rucola selvatica, scaglie di parmigiano, olio al tartufo", price: "€12" },
  { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, fontina, parmigiano reggiano", price: "€11" },
  { name: "Funghi e Tartufo", description: "Funghi misti, crema di tartufo, mozzarella, timo fresco", price: "€13" },
  { name: "Burrata e Pomodorini", description: "Burrata pugliese, pomodorini del Vesuvio, basilico, riduzione di balsamico", price: "€14" },
  { name: "Salsiccia e Friarielli", description: "Salsiccia artigianale, friarielli saltati, provola affumicata", price: "€12" },
];

const antipasti = [
  { name: "Bruschetta Classica", description: "Pomodorini freschi, basilico, aglio, olio EVO", price: "€5" },
  { name: "Tagliere di Salumi", description: "Selezione di salumi italiani con focaccia", price: "€12" },
  { name: "Frittura di Calamari", description: "Calamari fritti con maionese al limone", price: "€9" },
];

const dolci = [
  { name: "Tiramisù", description: "Ricetta della casa con mascarpone e caffè espresso", price: "€6" },
  { name: "Panna Cotta", description: "Con coulis di frutti di bosco", price: "€5" },
  { name: "Nutella Pizza", description: "Pizza dolce con Nutella e granella di nocciole", price: "€7" },
];

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const MenuCategory = ({ title, subtitle, items }: { title: string; subtitle: string; items: MenuItem[] }) => (
  <div className="mb-16">
    <p className="text-primary tracking-[0.3em] uppercase text-xs mb-2">{subtitle}</p>
    <h3 className="text-3xl md:text-4xl font-normal text-foreground mb-2">{title}</h3>
    <div className="w-10 h-px bg-primary mb-8" />
    <div className="space-y-0 divide-y divide-border">
      {items.map((item) => (
        <div key={item.name} className="flex justify-between items-start py-5 group">
          <div className="flex-1 pr-4">
            <h4 className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
              {item.name}
            </h4>
            <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
          </div>
          <span className="text-lg text-primary font-semibold shrink-0">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const MenuPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <img src={pattern} alt="" className="absolute top-0 right-0 w-80 opacity-[0.04] pointer-events-none" />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Dal Nostro Forno
          </p>
          <h1 className="text-5xl md:text-6xl font-normal text-background">Menù</h1>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
        </div>
      </section>

      {/* Menu content */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <MenuCategory title="Pizze Classiche" subtitle="Tradizione" items={pizzeClassiche} />
          <MenuCategory title="Pizze Speciali" subtitle="Le Nostre Creazioni" items={pizzeSpeciali} />
          <MenuCategory title="Antipasti" subtitle="Per Iniziare" items={antipasti} />
          <MenuCategory title="Dolci" subtitle="Per Finire in Dolcezza" items={dolci} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
