import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";


const WineGlassIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 2h8l-1.5 9a4.5 4.5 0 0 1-5 0L8 2z" />
    <path d="M12 11v7" />
    <path d="M8 22h8" />
    <path d="M7.5 7h9" />
  </svg>
);

const BottleIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 2h4v3l1.5 3v12a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8L10 5V2z" />
    <path d="M8.5 8h7" />
    <path d="M10 2h4" />
  </svg>
);

const BeerSmallIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 7h7v13a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7z" />
    <path d="M15 10h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
    <path d="M10 11v6" />
    <path d="M12.5 11v6" />
  </svg>
);

const BeerLargeIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 5h9v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5z" />
    <path d="M15 9h2.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H15" />
    <path d="M8.5 9v9" />
    <path d="M11 9v9" />
    <path d="M13 9v9" />
  </svg>
);

const BeerJugIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 6h12v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z" />
    <path d="M15 10h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3" />
    <path d="M3 9h12" />
    <path d="M6 12v6" />
    <path d="M9 12v6" />
    <path d="M12 12v6" />
  </svg>
);
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import pattern from "@/assets/pattern.svg";
import {
  focaccia, taglieri, fritti, aperitivi,
  pizzePorchetta, pizzeTonno, pizzeStagione, pizzeDoc,
  pizzeTagliateClassiche, pizzeTagliatePiccole,
  carenestreRosse, carenestreBianche,
  sandwiches,
  birreSpeciali, birreNovita, bevande,
  bollicine, viniBianchi, viniRossi,
  leQuadrate, insalatone,
} from "@/data/menuData";
import type { MenuItem } from "@/data/menuData";

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Menù Carinostri",
  hasMenuSection: [
    { "@type": "MenuSection", name: "Antipasti" },
    { "@type": "MenuSection", name: "Pizze" },
    { "@type": "MenuSection", name: "Sandwiches" },
    { "@type": "MenuSection", name: "Bibite, Birre e Vini" },
  ],
};

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
            item.price.includes("|") ? (
              <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-4 shrink-0">
                <span className="flex items-center gap-1.5">
                  <WineGlassIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{item.price.split("|")[0].trim()}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <BottleIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{item.price.split("|")[1].trim()}</span>
                </span>
              </div>
              </div>
            ) : (
              <span className="text-lg text-primary font-semibold shrink-0">{item.price}</span>
            )
          )}
        </div>
      ))}
    </div>
  </div>
);

interface CategoryDef {
  id: string;
  label: string;
  subsections?: { id: string; label: string }[];
}

const categories: CategoryDef[] = [
  {
    id: "novita",
    label: "Novità",
    subsections: [
      { id: "le-quadrate", label: "Le Quadrate" },
      { id: "insalatone", label: "Insalatone & Piatti Freddi" },
    ],
  },
  {
    id: "antipasti",
    label: "Antipasti",
    subsections: [
      { id: "aperitivi", label: "Aperitivi" },
      { id: "tradizionale", label: "Tradizionale" },
      { id: "taglieri", label: "Taglieri" },
      { id: "fritti", label: "Fritti" },
    ],
  },
  {
    id: "pizze",
    label: "Pizze",
    subsections: [
      { id: "pizze-stagionali", label: "Stagionali" },
      { id: "pizze-doc", label: "D.O.C." },
      { id: "carenostre", label: "Le Carenostre" },
      { id: "porchetta", label: "Con la Porchetta" },
      { id: "tonno", label: "Con il Tonno" },
      { id: "classiche", label: "Classiche" },
      { id: "tagliate", label: "Pizze Tagliate" },
    ],
  },
  { id: "sandwiches", label: "Sandwiches" },
  {
    id: "bibite",
    label: "Bibite",
    subsections: [
      { id: "birre-spina", label: "Birre alla Spina" },
      { id: "birre-speciali", label: "Birre Speciali" },
      { id: "bevande", label: "Bevande" },
      { id: "bollicine", label: "Bollicine" },
      { id: "vini-bianchi", label: "Vini Bianchi" },
      { id: "vini-rossi", label: "Rossi" },
    ],
  },
];


const BeerCategory = ({ title, subtitle, items, note }: MenuCategoryProps) => {
  const hasMultiFormat = items.some((i) => i.price?.includes("|"));
  return (
    <div className="mb-16">
      <p className="text-primary tracking-[0.3em] uppercase text-xs mb-2">{subtitle}</p>
      <h3 className="text-3xl md:text-4xl font-normal text-foreground mb-2">{title}</h3>
      <div className="w-10 h-px bg-primary mb-6" />
      {hasMultiFormat && (
        <div className="flex items-center gap-6 mb-6 flex-wrap">
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <BeerSmallIcon className="w-4 h-4 text-primary" /> Piccolo
          </span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <BeerLargeIcon className="w-4 h-4 text-primary" /> Grande
          </span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <BeerJugIcon className="w-4 h-4 text-primary" /> Caraffa
          </span>
        </div>
      )}
      {note && <p className="text-muted-foreground text-sm italic mb-6">{note}</p>}
      <div className="space-y-0 divide-y divide-border">
        {items.map((item, i) => {
          const isMulti = item.price?.includes("|");
          const prices = isMulti ? item.price.split("|").map((p) => p.trim()) : [];
          const beerIcons = [BeerSmallIcon, BeerLargeIcon, BeerJugIcon];
          return (
            <div key={`${item.name}-${i}`} className="flex items-start gap-4 py-5 group flex-wrap md:flex-nowrap">
              {item.logo ? (
                <img src={item.logo} alt={item.name} className="h-10 w-auto object-contain shrink-0" />
              ) : (
                <div className="h-10 w-10 shrink-0" aria-hidden="true" />
              )}
              <div className="flex-1 min-w-0 pr-4">
                <h4 className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                )}
              </div>
              {isMulti ? (
                <div className="flex items-center gap-4 shrink-0 flex-wrap">
                  {prices.map((price, idx) => {
                    const Icon = beerIcons[idx] ?? BeerSmallIcon;
                    return (
                      <span key={idx} className="flex items-center gap-1.5">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">{price}</span>
                      </span>
                    );
                  })}
                </div>
              ) : (
                item.price && (
                  <span className="text-lg text-primary font-semibold shrink-0">{item.price}</span>
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("pizze");
  const [classicheOpen, setClassicheOpen] = useState(false);
  const [tagliateOpen, setTagliateOpen] = useState(false);
  const [antipastiOpen, setAntipastiOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);


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
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Menù · Carinostri Pizzeria Istrana"
        description="Esplora il menù di Carinostri: pizze di stagione e D.O.C., antipasti, taglieri, sandwiches, birre alla spina e vini selezionati."
        path="/menu"
        jsonLd={menuJsonLd}
      />
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <img src={pattern} alt="" className="absolute top-0 right-0 w-80 opacity-[0.04] pointer-events-none" />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Dal Nostro Forno
          </p>
          <h1 className="text-5xl md:text-6xl font-normal text-background">Menù</h1>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
          <p className="text-sm mt-4 text-background/80">Coperto: €2,50</p>
        </div>
      </section>

      {/* Sticky category nav */}
      <nav
        ref={navRef}
        className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border"
      >
        <div className="max-w-4xl mx-auto flex md:justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => {
            const hasDropdown = !!cat.subsections && cat.subsections.length > 0;
            const isOpen = openDropdown === cat.id;
            const isActive = activeCategory === cat.id;
            const handleCatClick = () => {
              if (!hasDropdown) {
                setOpenDropdown(null);
                scrollTo(cat.id);
                return;
              }
              if (isOpen) {
                setOpenDropdown(null);
                scrollTo(cat.id);
              } else {
                setOpenDropdown(cat.id);
              }
            };
            return (
              <div
                key={cat.id}
                className="relative shrink-0"
                onMouseEnter={() => hasDropdown && setOpenDropdown(cat.id)}
                onMouseLeave={() => hasDropdown && setOpenDropdown((cur) => (cur === cat.id ? null : cur))}
              >
                <button
                  onClick={handleCatClick}
                  aria-expanded={hasDropdown ? isOpen : undefined}
                  aria-haspopup={hasDropdown ? "menu" : undefined}
                  className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {cat.label}
                  {hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
                {hasDropdown && (
                  <div
                    role="menu"
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[200px] max-w-[calc(100vw-2rem)] transition-all duration-200 origin-top ${
                      isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="bg-background border border-border rounded-md shadow-md py-1">
                      {cat.subsections!.map((sub) => (
                        <button
                          key={sub.id}
                          role="menuitem"
                          onClick={() => {
                            scrollTo(sub.id);
                            setOpenDropdown(null);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>


      {/* Menu content */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">

          {/* Allergen note - top */}
          <div className="mb-12 p-5 bg-card border-l-4 border-primary rounded-sm">
            <p className="text-foreground text-sm leading-relaxed">
              Le informazioni circa la presenza di sostanze o di prodotti che provocano allergie o intolleranze sono disponibili rivolgendosi al personale di servizio.
              Si informa la clientela che, in caso di indisponibilità di prodotti freschi, vengono utilizzati prodotti surgelati di qualità.
            </p>
          </div>

          {/* ── NOVITÀ ── */}
          <div id="novita" className="border border-border/60 rounded-md p-8 md:p-10 mb-16">
            <h2 className="sr-only">Novità</h2>
            <div className="flex items-center justify-between mb-8">
              <p className="text-primary tracking-[0.3em] uppercase text-xs">Novità</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase animate-pulse">
                NOVITÀ
              </span>
            </div>
            <div id="le-quadrate">
              <MenuCategory
                title="Le Quadrate"
                subtitle=""
                items={leQuadrate}
                note="Un impasto semplice, croccante e gustoso"
              />
            </div>
            <hr className="border-border/40 my-8" />
            <div id="insalatone">
              <MenuCategory
                title="Insalatone & Piatti Freddi"
                subtitle=""
                items={insalatone}
              />
            </div>
          </div>

          {/* Macro-category separator */}
          <div className="my-16 flex items-center gap-4" aria-hidden="true">
            <div className="flex-1 h-px bg-border" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="flex-1 h-px bg-border" />
          </div>


          {/* ── ANTIPASTI & APERITIVI ── */}
          <div id="antipasti" className="mb-16 border border-border rounded-sm overflow-hidden">
            <h2 className="sr-only">Benvenuto Carinostri</h2>
            <button
              type="button"
              onClick={() => setAntipastiOpen((v) => !v)}
              aria-expanded={antipastiOpen}
              className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer hover:bg-muted/30 transition-colors"
            >
              <div>
                <p className="text-primary tracking-[0.3em] uppercase text-xs mb-2">PER INIZIARE</p>
                <h3 className="text-3xl md:text-4xl font-normal text-foreground mb-2">Benvenuto Carinostri</h3>
                <div className="w-10 h-px bg-primary" />
              </div>
              <ChevronDown
                className={`w-6 h-6 text-primary shrink-0 transition-transform duration-300 ${antipastiOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${antipastiOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-2">
                  {[
                    { id: "aperitivi", subtitle: "PER INIZIARE", title: "Aperitivi", items: aperitivi, note: undefined as string | undefined },
                    { id: "tradizionale", subtitle: "ANTIPASTI & FRITTI", title: "Focaccia Tradizionale", items: focaccia, note: undefined },
                    { id: "taglieri", subtitle: "ANTIPASTI & FRITTI", title: "Taglieri di Affettati e Formaggi", items: taglieri, note: "Servito con pane pizza caldo" },
                    { id: "fritti", subtitle: "ANTIPASTI & FRITTI", title: "Fritti", items: fritti, note: undefined },
                  ].map((sec, idx) => (
                    <div key={sec.id}>
                      {idx > 0 && <hr className="border-border/40 my-8" />}
                      <div id={sec.id}>
                        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-2">{sec.subtitle}</p>
                        <h3 className="text-2xl md:text-3xl font-normal text-foreground mb-2">{sec.title}</h3>
                        <div className="w-10 h-px bg-primary mb-6" />
                        {sec.note && <p className="text-muted-foreground text-sm italic mb-6">{sec.note}</p>}
                        <div className="space-y-0 divide-y divide-border">
                          {sec.items.map((item, i) => (
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          {/* Macro-category separator */}
          <div className="my-16 flex items-center gap-4" aria-hidden="true">
            <div className="flex-1 h-px bg-border" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* ── PIZZE ── */}
          <div id="pizze">
            <h2 className="sr-only">Pizze</h2>
            <div id="pizze-stagionali">
              <MenuCategory title="Le Pizze di Stagione" subtitle="Stagionali" items={pizzeStagione} />
            </div>
          </div>
          <div id="pizze-doc">
            <MenuCategory title="Le Pizze D.O.C." subtitle="D'Eccellenza" items={pizzeDoc} />
          </div>
          <div id="carenostre">
            <MenuCategory title="Le Carenostre" subtitle="LE CARENOSTRE" items={carenestreRosse} />
            <MenuCategory title="Le Carenostre Bianche" subtitle="LE CARENOSTRE" items={carenestreBianche} />
          </div>
          <div id="porchetta">
            <MenuCategory title="Con La Porchetta" subtitle="Le Nostre Pizze" items={pizzePorchetta} />
          </div>
          <div id="tonno">
            <MenuCategory title="Con Il Tonno" subtitle="Le Nostre Pizze" items={pizzeTonno} />
          </div>

          <div id="classiche" className="mb-16 border border-border rounded-sm overflow-hidden">

            <button
              type="button"
              onClick={() => setClassicheOpen((v) => !v)}
              aria-expanded={classicheOpen}
              className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer hover:bg-muted/30 transition-colors"
            >
              <div>
                <p className="text-primary tracking-[0.3em] uppercase text-xs mb-2">LE NOSTRE PIZZE</p>
                <h3 className="text-3xl md:text-4xl font-normal text-foreground mb-2">Classiche</h3>
                <div className="w-10 h-px bg-primary" />
              </div>
              <ChevronDown
                className={`w-6 h-6 text-primary shrink-0 transition-transform duration-300 ${classicheOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${classicheOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6">
                  <div className="space-y-0 divide-y divide-border">
                    {pizzeTagliateClassiche.map((item, i) => (
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
              </div>
            </div>
          </div>
          <div id="tagliate" className="mb-16 border border-border rounded-sm overflow-hidden">
            <button
              type="button"
              onClick={() => setTagliateOpen((v) => !v)}
              aria-expanded={tagliateOpen}
              className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer hover:bg-muted/30 transition-colors"
            >
              <div>
                <p className="text-primary tracking-[0.3em] uppercase text-xs mb-2">LE NOSTRE PIZZE</p>
                <h3 className="text-3xl md:text-4xl font-normal text-foreground mb-2">Pizze Tagliate</h3>
                <div className="w-10 h-px bg-primary" />
              </div>
              <ChevronDown
                className={`w-6 h-6 text-primary shrink-0 transition-transform duration-300 ${tagliateOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${tagliateOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6">
                  <div className="space-y-0 divide-y divide-border">
                    {pizzeTagliatePiccole.map((item, i) => (
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
              </div>
            </div>
          </div>

          {/* Macro-category separator */}
          <div className="my-16 flex items-center gap-4" aria-hidden="true">
            <div className="flex-1 h-px bg-border" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* ── SANDWICHES ── */}
          <div id="sandwiches">
            <h2 className="sr-only">Sandwiches</h2>
            <MenuCategory
              title="Sandwiches"
              subtitle="Pane Pizza Farcito"
              items={sandwiches}
              note="Il nostro pane pizza farcito servito con patate fritte e salsa rosa"
            />
          </div>

          {/* Macro-category separator */}
          <div className="my-16 flex items-center gap-4" aria-hidden="true">
            <div className="flex-1 h-px bg-border" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* ── BIBITE ── */}
          <div id="bibite">
            <h2 className="sr-only">Bibite, Birre e Vini</h2>
            <div id="birre-spina">
              <BeerCategory title="Birre alla Spina" subtitle="DAL BANCO" items={birreNovita} />
            </div>
          </div>
          <div id="birre-speciali">
            <BeerCategory title="Birre Speciali" subtitle="DAL BANCO" items={birreSpeciali} />
          </div>
          <div id="bevande">
            <MenuCategory title="Bevande" subtitle="DAL BANCO" items={bevande} />
          </div>
          <div className="flex items-center justify-center gap-6 mb-8">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <WineGlassIcon className="w-4 h-4 text-primary" /> Calice
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <BottleIcon className="w-4 h-4 text-primary" /> Bottiglia
            </span>
          </div>
          <div id="bollicine">
            <MenuCategory title="Bollicine" subtitle="I NOSTRI VINI" items={bollicine} />
          </div>
          <div id="vini-bianchi">
            <MenuCategory title="Vini Bianchi Fermi" subtitle="I NOSTRI VINI" items={viniBianchi} />
          </div>
          <div id="vini-rossi">
            <MenuCategory title="Rossi" subtitle="I NOSTRI VINI" items={viniRossi} />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
