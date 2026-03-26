import Footer from "@/components/Footer";
import pattern from "@/assets/pattern.svg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategoryProps {
  title: string;
  subtitle: string;
  items: MenuItem[];
  note?: string;
}

// ── BIRRE SPECIALI ──
const birreSpeciali: MenuItem[] = [
  { name: "Congerlo Bruin", description: "Birra Bruna d'Abbazia. 33 cl, 5.1%", price: "€3" },
  { name: "IPA Super 8", description: "Birra Doppia Pale Ale. 33 cl, 8%", price: "€5,50" },
];

// ── APERITIVI ──
const aperitivi: MenuItem[] = [
  { name: "Della Casa", description: "", price: "€3,30" },
  { name: "Cortesino", description: "", price: "€3,20" },
  { name: "Gin Spritz", description: "", price: "€3,50" },
  { name: "Aperol / Campari / Select / Italicus", description: "", price: "€3,50" },
  { name: "Hugo", description: "", price: "€3,50" },
  { name: "Vino Frizzante", description: "", price: "€3,50" },
];

// ── VINI ──
const bollicine: MenuItem[] = [
  { name: "Cal Fondo Frizzante sui Livinz – Az. Agr. \"Le Valpere\" (TV)", description: "", price: "€2,50 | €14" },
  { name: "Frizzante Col Foroni \"Le Bertole\" – Valdobbiadene (TV)", description: "", price: "€3 | €16" },
  { name: "Valdobbiadene D.O.C.G Brut – \"Le Bertole\" (TV)", description: "", price: "€3,50 | €21" },
  { name: "Valdobbiadene D.O.C.G Extra Brut Franco Mili. – Le Bertole (TV)", description: "", price: "€4 | €24" },
  { name: "Ortrepo' Pavese Brut D.O.C. metodo classico", description: "", price: "€4,50 | €27" },
  { name: "Treiso D.O.C. Brut Nature Pedroni metodo classico (TN)", description: "", price: "€5 | €21" },
];

const viniBianchi: MenuItem[] = [
  { name: "Sauvignon Collio Doc – Ronco Blanchis (GO)", description: "", price: "€3,50 | €21" },
  { name: "Gewürz-Traminer Trentino Doc – \"Endrizza\" (TN)", description: "", price: "€3,50 | €21" },
];

const viniRossi: MenuItem[] = [
  { name: "Cabernet Frantz V.G. – Bosco del Camer, Gorgo al Monticello (TV)", description: "", price: "€2,50 | €14" },
  { name: "Falcone Merlot D.O.C. – Loredan Gasparini, Venegazzù (TV)", description: "", price: "€3,50 | €21" },
  { name: "Senza Alibi Montepulciano d'Abruzzo Doc – Spallone (PE)", description: "", price: "€3,50 | €21" },
];

// ── ANTIPASTI & FRITTI ──
const focaccia: MenuItem[] = [
  { name: "Focaccia a Spicchi", description: "Salsa pomodoro, aglio e origano", price: "€3,50" },
  { name: "Focaccia Porchetta", description: "Porchetta affettata", price: "€4" },
  { name: "Focaccia Varietà di Gusti", description: "", price: "€5" },
];

const taglieri: MenuItem[] = [
  { name: "Porchetta Carinostri", description: "Servito con pane pizza caldo", price: "€7,50" },
  { name: "Prosciutto Crudo 30gg", description: "Servito con pane pizza caldo", price: "€9" },
  { name: "Selezione di Formaggi", description: "Servito con pane pizza caldo", price: "€12" },
  { name: "Selezione di Affettati", description: "Servito con pane pizza caldo", price: "€15" },
  { name: "Selezione di Affettati e Formaggi", description: "Servito con pane pizza caldo", price: "€18" },
];

const fritti: MenuItem[] = [
  { name: "Polpette di Melanzane e Formaggio", description: "", price: "€5" },
  { name: "Olive Ascolane", description: "", price: "€5" },
  { name: "Mozzarelle Panate", description: "", price: "€5" },
  { name: "Patate Fritte", description: "", price: "€5" },
  { name: "Fritto Misto", description: "", price: "€14" },
  { name: "Aguglia Salsa", description: "", price: "€0,80" },
];

// ── LE PIZZE – CON LA PORCHETTA ──
const pizzePorchetta: MenuItem[] = [
  { name: "Carinostri", description: "Porchetta, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Rivasecca", description: "Porchetta, fiordilatte, pomodoro fresco, cipolla viola, rucola", price: "€11" },
  { name: "Bosciaola", description: "Porchetta, funghi, insalata, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Rustica", description: "Porchetta, patate al forno, funghi champignon, ricotta affumicata, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Valli e Porchetta", description: "Porchetta, fiordilatte, peperoni pelati, cipolla viola candita in agrodolce", price: "€12" },
  { name: "Porchetta Tonnata", description: "Porchetta, salsa tonnata, pomodorini confit, rucola, frutto di cappero", price: "€13" },
];

// ── LE PIZZE – CON IL TONNO ──
const pizzeTonno: MenuItem[] = [
  { name: "Tonno e Cipolla", description: "Tonno al forno, cipolla, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Tonno e Carciofi", description: "Tonno al forno, carciofi, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Tonno e Zucchine", description: "Tonno al forno, zucchine grigliate, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Tonno e Leccino", description: "Tonno al forno, olive leccino, salsa di pomodoro, fiordilatte", price: "€10" },
  { name: "Emergency", description: "Tonno, cipolla viola, olive leccino, peperoni pelati, salsa di pomodoro, fiordilatte", price: "€12" },
];

// ── LE PIZZE DI STAGIONE ──
const pizzeStagione: MenuItem[] = [
  { name: "Agretti Tonno e Peperoni", description: "Fiordilatte, insalata di agretti, tonno, peperoni affumicati, salamino piccante, origano", price: "€14" },
  { name: "Cavolo Nero", description: "Cavolo nero, spaccatello, salamino piccante, mortadella del Grappa, pomodori secchi", price: "€14" },
  { name: "Carbonara d'Asparagi", description: "Fiordilatte, asparagi verdi al forno, guanciale, carbonara, pecorino", price: "€15" },
];

// ── LE PIZZE D.O.C. ──
const pizzeDoc: MenuItem[] = [
  { name: "La Margherita D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, olio e.v.o. aromatizzato all'aglio, basilico", price: "€9" },
  { name: "La Diavola D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, nduja, capperi, olio e.v.o., basilico", price: "€11" },
  { name: "La Romana D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, rigatini di Sciacca, capperi, pomodori secchi, acciughe, basilico", price: "€12" },
  { name: "L'Amatriciana D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, guanciale, pecorino romano, olio e.v.o., basilico", price: "€12" },
  { name: "La Triestina D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, cetriolini, noci, olio e.v.o., basilico", price: "€12" },
  { name: "La Melanzana D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, melanzane fritte, finocchiona IGP, pomodori secchi, basilico", price: "€12" },
  { name: "La Ligure D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, pesto alla genovese, patate, pinoli, basilico", price: "€13" },
  { name: "La Verdure D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, verdure miste, olio e.v.o., basilico", price: "€13" },
  { name: "La PiovraPatatè D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, piovra al vapore, patate, olio e.v.o., basilico", price: "€13" },
];

// ── LE CARENESTRE ──
const carenestreRosse: MenuItem[] = [
  { name: "Tirolese", description: "Speck tirolese, formaggio Dobbiaco, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Sicilia", description: "Acciughe, capperi, olive leccino, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Francese", description: "Olive leccino, prosciutto crudo 24 mesi, stracchino, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Chef Ramsay", description: "Lardo tipo colonnata, melanzana, scamorza affumicata, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Parmigiana", description: "Prosciutto crudo di Parma 24 mesi, melanzane, grana, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Barcis", description: "Salsiccia, pomodorini, gorgonzola, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Capri", description: "Prosciutto crudo, funghi champignon, carciofi, brie, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Fra&Cri", description: "Mozzarella di bufala, pomodori secchi, formaggio Asiago, rucola, salsa di pomodoro", price: "€11" },
];

const carenestreBianche: MenuItem[] = [
  { name: "Di Magro", description: "Fiordilatte, verdure al vapore, ricotta fresca, pinoli", price: "€11" },
  { name: "Salsiccia & Friarielli", description: "Fiordilatte, pomodorini confit, salsiccia, friarielli", price: "€12" },
  { name: "Miss Stella", description: "Fiordilatte, zucchine, scalogno, scamorza affumicata, salamino piccante", price: "€12" },
  { name: "Oro Verde", description: "Mozzarella di bufala DOP, zucchine, pomodorini, pesto di pistacchi, basilico", price: "€12" },
  { name: "Cansiglio", description: "Fiordilatte, misto funghi, Asiago DOP, Dobbiaco, noci", price: "€12" },
];

// ── SANDWICHES ──
const sandwiches: MenuItem[] = [
  { name: "Normale", description: "Prosciutto cotto e mozzarella", price: "€7" },
  { name: "Buono", description: "Porchetta, carciofi, mozzarella", price: "€9" },
  { name: "Classico", description: "Pollo, pancetta, mozzarella, frittata, lattuga, pomodoro fresco", price: "€10" },
  { name: "Sir George", description: "Prosciutto affumicato, Asiago, origano, frittata, lattuga, pomodoro fresco", price: "€10" },
  { name: "Carinostri", description: "Porchetta, funghi champignon, bufala, frittata, lattuga, pomodoro fresco", price: "€11" },
  { name: "Vegetariano", description: "Verdure al forno, mozzarella, frittata, lattuga, pomodoro fresco", price: "€11" },
  { name: "Gustoso", description: "Speck, peperoni, gorgonzola, mozzarella, frittata, lattuga, pomodoro fresco", price: "€11" },
  { name: "Nostro", description: "Porchetta, cipolla caramellata, pomodori secchi, mozzarella, frittata, lattuga, pomodoro fresco", price: "€11" },
  { name: "Tonnato", description: "Porchetta, cipolla caramellata, pomodori secchi, mozzarella, cipolla viola, lattuga, pomodoro fresco", price: "€12" },
  { name: "Inglese", description: "Roast-beef cotto a bassa temperatura, mozzarella, frittata, lattuga, pomodoro fresco", price: "€12" },
];

// ── LE PIZZE TAGLIATE ──
const pizzeTagliateClassiche: MenuItem[] = [
  { name: "Marinara", description: "Salsa pomodoro, olio e.v.o., aglio, origano", price: "€6,50" },
  { name: "Margherita", description: "Salsa di pomodoro, fiordilatte", price: "€6,50" },
  { name: "Pugliese", description: "Salsa di pomodoro, fiordilatte, cipolla di Tropea", price: "€7,50" },
  { name: "Romana", description: "Salsa di pomodoro, fiordilatte, filetti di alici", price: "€8" },
  { name: "Diavola", description: "Salsa di pomodoro, fiordilatte, salame piccante affumicato", price: "€8" },
  { name: "Prosciutto e Funghi", description: "Salsa di pomodoro, fiordilatte, prosciutto cotto, funghi champignon", price: "€8,50" },
  { name: "Capricciosa", description: "Salsa di pomodoro, fiordilatte, prosciutto cotto, funghi champignon, carciofi", price: "€9" },
  { name: "Verdure", description: "Salsa di pomodoro, fiordilatte, verdure miste al forno", price: "€9" },
  { name: "Formaggi", description: "Salsa di pomodoro, fiordilatte, gorgonzola, scamorza affumicata, Asiago", price: "€10" },
];

const pizzeTagliatePiccole: MenuItem[] = [
  { name: "Margherita", description: "Salsa di pomodoro, fiordilatte", price: "€5" },
  { name: "Paratosa", description: "Patate fritte, salsa di pomodoro", price: "€6" },
  { name: "Viennese", description: "Würstel, salsa di pomodoro", price: "€6" },
  { name: "Prosciutto Cotto", description: "Prosciutto cotto, salsa di pomodoro, fiordilatte", price: "€6" },
  { name: "Anna & Noemi", description: "Porchetta, salsa di pomodoro, fiordilatte", price: "€7" },
];

// ── BEVANDE ──
const birreSpinaFormati: MenuItem[] = [
  { name: "Bicchiere 0,20 lt", description: "", price: "€4" },
  { name: "Bicchiere 0,40 lt", description: "", price: "€6" },
  { name: "Caraffa 1,80 lt", description: "", price: "€22" },
];

const birreNovita: MenuItem[] = [
  { name: "Bionda Chiara Pils", description: "5,1% – Foresta Nera (GER)", price: "" },
  { name: "Bionda Keller", description: "5,4% – Franconia (GER)", price: "" },
  { name: "Rock Rossa", description: "6,5% – Roma (ITA) – Progetti Open Hub", price: "" },
];

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
          <p className="text-sm mt-4 text-muted">Coperto: €2,50</p>
        </div>
      </section>

      {/* Menu content */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">

          {/* Birre Speciali */}
          <MenuCategory title="Birre Speciali" subtitle="Dal Fusto" items={birreSpeciali} />

          {/* Aperitivi */}
          <MenuCategory title="Aperitivi" subtitle="Per Iniziare" items={aperitivi} />

          {/* Vini */}
          <MenuCategory title="Bollicine" subtitle="I Nostri Vini" items={bollicine} />
          <MenuCategory title="Vini Bianchi Fermi" subtitle="I Nostri Vini" items={viniBianchi} />
          <MenuCategory title="Rossi" subtitle="I Nostri Vini" items={viniRossi} />

          {/* Antipasti & Fritti */}
          <MenuCategory title="Focaccia a Spicchi" subtitle="Antipasti & Fritti" items={focaccia} />
          <MenuCategory title="Taglieri di Affettati e Formaggi" subtitle="Antipasti & Fritti" items={taglieri} />
          <MenuCategory title="Fritti" subtitle="Antipasti & Fritti" items={fritti} />

          {/* Le Pizze */}
          <MenuCategory title="Con La Porchetta" subtitle="Le Nostre Pizze" items={pizzePorchetta} />
          <MenuCategory title="Con Il Tonno" subtitle="Le Nostre Pizze" items={pizzeTonno} />

          {/* Pizze di Stagione */}
          <MenuCategory title="Le Pizze di Stagione" subtitle="Stagionali" items={pizzeStagione} />

          {/* Pizze D.O.C. */}
          <MenuCategory title="Le Pizze D.O.C." subtitle="D'Eccellenza" items={pizzeDoc} />

          {/* Le Carenestre */}
          <MenuCategory title="Le Carenestre Rosse" subtitle="Le Carenestre" items={carenestreRosse} />
          <MenuCategory title="Le Carenestre Bianche" subtitle="Le Carenestre" items={carenestreBianche} />

          {/* Sandwiches */}
          <MenuCategory
            title="Sandwiches"
            subtitle="Pane Pizza Farcito"
            items={sandwiches}
            note="Il nostro pane pizza farcito servito con patate fritte e salsa rosa"
          />

          {/* Pizze Tagliate */}
          <MenuCategory title="Pizze Tagliate Classiche" subtitle="Le Pizze Tagliate" items={pizzeTagliateClassiche} />
          <MenuCategory title="Pizze Tagliate Piccole" subtitle="Le Pizze Tagliate" items={pizzeTagliatePiccole} />

          {/* Bevande */}
          <MenuCategory title="Birre alla Spina" subtitle="Bevande" items={birreSpinaFormati} />
          <MenuCategory title="Novità" subtitle="Bevande" items={birreNovita} />

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
