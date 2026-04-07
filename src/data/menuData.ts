export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

// ── ANTIPASTI & FRITTI ──
export const focaccia: MenuItem[] = [
  { name: "Focaccia a Spicchi", description: "Salsa pomodoro, aglio e origano", price: "€3,50" },
  { name: "Porchetta/altro affettato", description: "Porchetta affettata", price: "€4" },
  { name: "Varietà di Gusti", description: "", price: "€5" },
];

export const taglieri: MenuItem[] = [
  { name: "Porchetta Carinostri", description: "Servito con pane pizza caldo", price: "€7,50" },
  { name: "Prosciutto Crudo 30gg", description: "Servito con pane pizza caldo", price: "€9" },
  { name: "Selezione di Formaggi", description: "Servito con pane pizza caldo", price: "€12" },
  { name: "Selezione di Affettati", description: "Servito con pane pizza caldo", price: "€15" },
  { name: "Selezione di Affettati e Formaggi", description: "Servito con pane pizza caldo", price: "€18" },
];

export const fritti: MenuItem[] = [
  { name: "Polpette di Melanzane e Formaggio", description: "", price: "€5" },
  { name: "Olive Ascolane", description: "", price: "€5" },
  { name: "Mozzarelle Panate", description: "", price: "€5" },
  { name: "Patate Fritte", description: "", price: "€5" },
  { name: "Fritto Misto", description: "", price: "€14" },
  { name: "Aggiunta Salsa", description: "", price: "€0,80" },
];

// ── APERITIVI ──
export const aperitivi: MenuItem[] = [
  { name: "Della Casa", description: "Analcolico a base di frutta", price: "€3" },
  { name: "Cortesino", description: "Ginger Analcolico Artigianale", price: "€3,20" },
  { name: "Gli Spritz", description: "Aperol / Campari / Select / Cynar", price: "€3,50" },
  { name: "Hugo", description: "Vino Frizzante, Sambuco, Menta Fresca, Lime", price: "€3,50" },
  { name: "Americano", description: "Vermouth Rosso, Campari, Seltz", price: "€6" },
  { name: "Negroni", description: "Vermouth Rosso, Campari, Gin", price: "€7" },
  { name: "Negroni \"Sbagliato\"", description: "Vermouth Rosso, Campari, Vino Frizzante", price: "€6,50" },
];

// ── LE PIZZE – CON LA PORCHETTA ──
export const pizzePorchetta: MenuItem[] = [
  { name: "Carinostri", description: "Porchetta, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Rivasecca", description: "Porchetta, fiordilatte, pomodoro fresco, cipolla viola, rucola", price: "€11" },
  { name: "Bosciaola", description: "Porchetta, funghi, insalata, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Rustica", description: "Porchetta, patate al forno, funghi champignon, ricotta affumicata, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Valli e Porchetta", description: "Porchetta, fiordilatte, peperoni pelati, cipolla viola candita in agrodolce", price: "€12" },
  { name: "Porchetta Tonnata", description: "Porchetta, salsa tonnata, pomodorini confit, rucola, frutto di cappero", price: "€13" },
];

// ── LE PIZZE – CON IL TONNO ──
export const pizzeTonno: MenuItem[] = [
  { name: "Tonno e Cipolla", description: "Tonno al forno, cipolla, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Tonno e Carciofi", description: "Tonno al forno, carciofi, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Tonno e Zucchine", description: "Tonno al forno, zucchine grigliate, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Tonno e Leccino", description: "Tonno al forno, olive leccino, salsa di pomodoro, fiordilatte", price: "€10" },
  { name: "Emergency", description: "Tonno, cipolla viola, olive leccino, peperoni pelati, salsa di pomodoro, fiordilatte", price: "€12" },
];

// ── LE PIZZE DI STAGIONE ──
export const pizzeStagione: MenuItem[] = [
  { name: "Agretti Tonno e Peperoni", description: "Fiordilatte, insalata di agretti, tonno, peperoni affumicati, salamino piccante, origano", price: "€14" },
  { name: "Cavolo Nero", description: "Cavolo nero, spaccatello, salamino piccante, mortadella del Grappa, pomodori secchi", price: "€14" },
  { name: "Carbonara d'Asparagi", description: "Fiordilatte, asparagi verdi al forno, guanciale, carbonara, pecorino", price: "€15" },
];

// ── LE PIZZE D.O.C. ──
export const pizzeDoc: MenuItem[] = [
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

// ── LE PIZZE TAGLIATE ──
export const pizzeTagliateClassiche: MenuItem[] = [
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

export const pizzeTagliatePiccole: MenuItem[] = [
  { name: "Margherita", description: "Salsa di pomodoro, fiordilatte", price: "€5" },
  { name: "Paratosa", description: "Patate fritte, salsa di pomodoro", price: "€6" },
  { name: "Viennese", description: "Würstel, salsa di pomodoro", price: "€6" },
  { name: "Prosciutto Cotto", description: "Prosciutto cotto, salsa di pomodoro, fiordilatte", price: "€6" },
  { name: "Anna & Noemi", description: "Porchetta, salsa di pomodoro, fiordilatte", price: "€7" },
];

// ── LE CARENESTRE ──
export const carenestreRosse: MenuItem[] = [
  { name: "Tirolese", description: "Speck tirolese, formaggio Dobbiaco, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Sicilia", description: "Acciughe, capperi, olive leccino, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Francese", description: "Olive leccino, prosciutto crudo 24 mesi, stracchino, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Chef Ramsay", description: "Lardo tipo colonnata, melanzana, scamorza affumicata, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Parmigiana", description: "Prosciutto crudo di Parma 24 mesi, melanzane, grana, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Barcis", description: "Salsiccia, pomodorini, gorgonzola, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Capri", description: "Prosciutto crudo, funghi champignon, carciofi, brie, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Fra&Cri", description: "Mozzarella di bufala, pomodori secchi, formaggio Asiago, rucola, salsa di pomodoro", price: "€11" },
];

export const carenestreBianche: MenuItem[] = [
  { name: "Di Magro", description: "Fiordilatte, verdure al vapore, ricotta fresca, pinoli", price: "€11" },
  { name: "Salsiccia & Friarielli", description: "Fiordilatte, pomodorini confit, salsiccia, friarielli", price: "€12" },
  { name: "Miss Stella", description: "Fiordilatte, zucchine, scalogno, scamorza affumicata, salamino piccante", price: "€12" },
  { name: "Oro Verde", description: "Mozzarella di bufala DOP, zucchine, pomodorini, pesto di pistacchi, basilico", price: "€12" },
  { name: "Cansiglio", description: "Fiordilatte, misto funghi, Asiago DOP, Dobbiaco, noci", price: "€12" },
];

// ── SANDWICHES ──
export const sandwiches: MenuItem[] = [
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

// ── BIRRE SPECIALI ──
export const birreSpeciali: MenuItem[] = [
  { name: "Congerlo Bruin", description: "Birra Bruna d'Abbazia. 33 cl, 5.1%", price: "€3" },
  { name: "IPA Super 8", description: "Birra Doppia Pale Ale. 33 cl, 8%", price: "€5,50" },
];

// ── BEVANDE ──
export const birreSpinaFormati: MenuItem[] = [
  { name: "Bicchiere 0,20 lt", description: "", price: "€4" },
  { name: "Bicchiere 0,40 lt", description: "", price: "€6" },
  { name: "Caraffa 1,80 lt", description: "", price: "€22" },
];

export const birreNovita: MenuItem[] = [
  { name: "Bionda Chiara Pils", description: "5,1% – Foresta Nera (GER)", price: "" },
  { name: "Bionda Keller", description: "5,4% – Franconia (GER)", price: "" },
  { name: "Rock Rossa", description: "6,5% – Roma (ITA) – Progetti Open Hub", price: "" },
];

// ── VINI ──
export const bollicine: MenuItem[] = [
  { name: "Cal Fondo Frizzante sui Livinz – Az. Agr. \"Le Valpere\" (TV)", description: "", price: "€2,50 | €14" },
  { name: "Frizzante Col Foroni \"Le Bertole\" – Valdobbiadene (TV)", description: "", price: "€3 | €16" },
  { name: "Valdobbiadene D.O.C.G Brut – \"Le Bertole\" (TV)", description: "", price: "€3,50 | €21" },
  { name: "Valdobbiadene D.O.C.G Extra Brut Franco Mili. – Le Bertole (TV)", description: "", price: "€4 | €24" },
  { name: "Ortrepo' Pavese Brut D.O.C. metodo classico", description: "", price: "€4,50 | €27" },
  { name: "Treiso D.O.C. Brut Nature Pedroni metodo classico (TN)", description: "", price: "€5 | €21" },
];

export const viniBianchi: MenuItem[] = [
  { name: "Sauvignon Collio Doc – Ronco Blanchis (GO)", description: "", price: "€3,50 | €21" },
  { name: "Gewürz-Traminer Trentino Doc – \"Endrizza\" (TN)", description: "", price: "€3,50 | €21" },
];

export const viniRossi: MenuItem[] = [
  { name: "Cabernet Frantz V.G. – Bosco del Camer, Gorgo al Monticello (TV)", description: "", price: "€2,50 | €14" },
  { name: "Falcone Merlot D.O.C. – Loredan Gasparini, Venegazzù (TV)", description: "", price: "€3,50 | €21" },
  { name: "Senza Alibi Montepulciano d'Abruzzo Doc – Spallone (PE)", description: "", price: "€3,50 | €21" },
];
