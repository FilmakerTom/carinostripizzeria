import { useState, useEffect } from "react";
import { Wine, GlassWater } from "lucide-react";
import Footer from "@/components/Footer";
import pattern from "@/assets/pattern.svg";
import {
  focaccia, taglieri, fritti, aperitivi,
  pizzePorchetta, pizzeTonno, pizzeStagione, pizzeDoc,
  pizzeTagliateClassiche, pizzeTagliatePiccole,
  carenestreRosse, carenestreBianche,
  sandwiches,
  birreSpeciali, birreSpinaFormati, birreNovita,
  bollicine, viniBianchi, viniRossi,
} from "@/data/menuData";
import type { MenuItem } from "@/data/menuData";

interface MenuCategoryProps {
  title: string;
  subtitle: string;
  items: MenuItem[];
  note?: string;
}

const MenuCategory = ({ title, subtitle, items, note }: MenuCategoryProps) => (
  <div className="mb-16">
    <p className="text-primary tracking-[0.3em] uppercase text-xs mb-2">{subtitle}</p>
    <h3 className="text-3xl md:text-4xl font-normal text-foreground mb-2">{title}</h3>
    <div className="w-10 h-px bg-primary mb-8" />
    {note && <p className="text-muted-foreground text-sm italic mb-6">{note}</p>}
    <div className="space-y-0 divide-y divide-border">
      {items.map((item, i) => (
        <div key={`${item.name}-${i}`} className="flex justify-between items-start py-5 group">
          <div className="flex-1 pr-4">
            <h4 className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
              {item.name}
            </h4>
            {item.description && (
              <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
            )}
          </div>
          {item.price && (
            <span className="text-lg text-primary font-semibold shrink-0">{item.price}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const categories = [
  { id: "antipasti", label: "Antipasti" },
  { id: "pizze", label: "Pizze" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "bibite", label: "Bibite" },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("pizze");

  useEffect(() => {
    const sectionIds = categories.map((c) => c.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // pick the one closest to the top
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveCategory(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // account for sticky nav
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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
          <p className="text-sm mt-4 text-muted">Coperto: €2,50</p>
        </div>
      </section>

      {/* Sticky category nav */}
      <nav className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto flex justify-center gap-2 px-4 py-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Menu content */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">

          {/* ── ANTIPASTI & APERITIVI ── */}
          <div id="antipasti">
            <MenuCategory title="Aperitivi" subtitle="Per Iniziare" items={aperitivi} />
          </div>
          <MenuCategory title="Focaccia a Spicchi" subtitle="Antipasti & Fritti" items={focaccia} />
          <MenuCategory title="Taglieri di Affettati e Formaggi" subtitle="Antipasti & Fritti" items={taglieri} />
          <MenuCategory title="Fritti" subtitle="Antipasti & Fritti" items={fritti} />

          {/* ── PIZZE ── */}
          <div id="pizze">
            <MenuCategory title="Con La Porchetta" subtitle="Le Nostre Pizze" items={pizzePorchetta} />
          </div>
          <MenuCategory title="Con Il Tonno" subtitle="Le Nostre Pizze" items={pizzeTonno} />
          <MenuCategory title="Le Pizze di Stagione" subtitle="Stagionali" items={pizzeStagione} />
          <MenuCategory title="Le Pizze D.O.C." subtitle="D'Eccellenza" items={pizzeDoc} />
          <MenuCategory title="Le Carenostre" subtitle="Le Carenestre" items={carenestreRosse} />
          <MenuCategory title="Le Carenostre Bianche" subtitle="Le Carenestre" items={carenestreBianche} />
          <MenuCategory title="Pizze Tagliate Classiche" subtitle="Le Pizze Tagliate" items={pizzeTagliateClassiche} />
          <MenuCategory title="Pizze Tagliate Piccole" subtitle="Le Pizze Tagliate" items={pizzeTagliatePiccole} />

          {/* ── SANDWICHES ── */}
          <div id="sandwiches">
            <MenuCategory
              title="Sandwiches"
              subtitle="Pane Pizza Farcito"
              items={sandwiches}
              note="Il nostro pane pizza farcito servito con patate fritte e salsa rosa"
            />
          </div>

          {/* ── BIBITE ── */}
          <div id="bibite">
            <MenuCategory title="Birre alla Spina" subtitle="Bevande" items={birreSpinaFormati} />
          </div>
          <MenuCategory title="Novità" subtitle="Bevande" items={birreNovita} />
          <MenuCategory title="Birre Speciali" subtitle="Dal Fusto" items={birreSpeciali} />
          <MenuCategory title="Bollicine" subtitle="I Nostri Vini" items={bollicine} />
          <MenuCategory title="Vini Bianchi Fermi" subtitle="I Nostri Vini" items={viniBianchi} />
          <MenuCategory title="Rossi" subtitle="I Nostri Vini" items={viniRossi} />

          {/* Info */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-xs leading-relaxed max-w-2xl mx-auto">
              Tutte le informazioni circa la presenza di sostanze o di prodotti che provocherebbero allergie o intolleranze sono disponibili al personale di servizio.
              In mancanza di prodotti freschi usiamo prodotti surgelati di qualità.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
