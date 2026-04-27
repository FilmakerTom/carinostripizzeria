export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

// ── ANTIPASTI & FRITTI ──
export const focaccia: MenuItem[] = [
  { name: "Tradizionale", description: "", price: "€3,50" },
  { name: "Porchetta Carinostri/altro affettato", description: "", price: "€4" },
  { name: "Varietà di Gusti", description: "", price: "€5" },
];

export const taglieri: MenuItem[] = [
  { name: "Porchetta Carinostri", description: "", price: "€7,50" },
  { name: "Prosciutto Crudo Parma 30 mesi", description: "", price: "€9" },
  { name: "Selezione di Formaggi", description: "", price: "€12" },
  { name: "Selezione di Affettati", description: "", price: "€15" },
  { name: "Selezione di Affettati e Formaggi", description: "", price: "€18" },
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
  { name: "Bosciaola", description: "Porchetta, funghi misti, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Rustica", description: "Porchetta, patate al forno, funghi champignon, ricotta affumicata, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Viola e Porchetta", description: "Porchetta, fiordilatte, peperoni pelati, cipolla viola caramellata in agrodolce", price: "€12" },
  { name: "Porchetta Tonnata", description: "Porchetta, salsa tonnata, pomodorini confit, rucola, frutto di cappero", price: "€13" },
];

// ── LE PIZZE – CON IL TONNO ──
export const pizzeTonno: MenuItem[] = [
  { name: "Tonno e Cipolla", description: "Tonno al forno, cipolla viola, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Tonno e Carciofi", description: "Tonno al forno, carciofi stufati a spicchi, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Tonno e Zucchine", description: "Tonno al forno, zucchine grigliate, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Tonno e Leccino", description: "Tonno al forno, olive leccino, salsa di pomodoro, fiordilatte", price: "€10" },
  { name: "Emergency", description: "Tonno, cipolla viola, olive leccino, peperoni pelati, salsa di pomodoro, fiordilatte", price: "€12" },
];

// ── LE PIZZE DI STAGIONE ──
export const pizzeStagione: MenuItem[] = [
  { name: "Speck Carciofi e Burrata", description: "Fiordilatte, carciofi a spiccchi, speck tirolese, burrata pugliese, polvere di perperone di Senise IGP", price: "€15" },
  { name: "Carbonara d'Asparagi", description: "Fiordilatte, asparagi verdi al forno, guanciale, carbocrema, pecorino", price: "€15" },
];

// ── LE PIZZE D.O.C. ──
export const pizzeDoc: MenuItem[] = [
  { name: "La Margherita D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, olio e.v.o. aromatizzato all'aglio, basilico", price: "€9" },
  { name: "La Diavola D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, nduja, capperi, olio e.v.o. aromatizzato all'aglio, basilico", price: "€11" },
  { name: "La Romana D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, acciughe di Sciacca a crudo, capperi, olio e.v.o. aromatizzato all'aglio, basilico", price: "€12" },
  { name: "L'Amatriciana D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, guanciale, pecorino romano, olio e.v.o. aromatizzato all'aglio, basilico", price: "€12" },
  { name: "La Triestina D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, cotto affumicato, noci, olio e.v.o. aromatizzato all'aglio, basilico", price: "€12" },
  { name: "La Melanzane D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, melanzane fritte, finocchiona IGP, olio e.v.o. aromatizzato all'aglio, basilico", price: "€12" },
  { name: "La Ligure D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, pesto alla genovese, patate, pinoli, olio e.v.o. aromatizzato all'aglio, basilico", price: "€13" },
  { name: "La Verdure D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, caponata di verdure, olio e.v.o. aromatizzato all'aglio, basilico", price: "€13" },
  { name: "La Piovra&Patate D.O.C.", description: "Pelati S. Marzano DOP, mozzarella di bufala DOP, piovra al vapore, patate, olio e.v.o. aromatizzato all'aglio, basilico", price: "€13" },
];

// ── LE PIZZE TAGLIATE ──
export const pizzeTagliateClassiche: MenuItem[] = [
  { name: "Marinara", description: "Salsa pomodoro, olio e.v.o., aglio, origano", price: "€5,50" },
  { name: "Margherita", description: "Salsa di pomodoro, fiordilatte", price: "€5,50" },
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
  { name: "Patatosa", description: "Patate fritte, salsa di pomodoro, fiordilatte", price: "€6" },
  { name: "Viennese", description: "Würstel, salsa di pomodoro, fiordilatte", price: "€6" },
  { name: "Prosciutto Cotto", description: "Prosciutto cotto, salsa di pomodoro, fiordilatte", price: "€6" },
  { name: "Anna & Noemi", description: "Porchetta, salsa di pomodoro, fiordilatte", price: "€7" },
];

// ── LE CARENESTRE ──
export const carenestreRosse: MenuItem[] = [
  { name: "Tirolese", description: "Speck tirolese, formaggio Dobbiaco, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Sicilia", description: "Acciughe, capperi, olive leccino, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Francese", description: "Olive leccino, prosciutto crudo 24 mesi, stracchino, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Chef Ramsay", description: "Lardo di colonnata, melanzane, scamorza affumicata, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Parmigiana", description: "Prosciutto crudo di Parma 24 mesi, melanzane, grana, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Barcis", description: "Salsiccia, pomodorini, gorgonzola, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Capri 2", description: "Prosciutto crudo, funghi champignon, carciofi, brie, salsa di pomodoro, fiordilatte", price: "€11" },
  { name: "Fra&Cri", description: "Mozzarella di bufala, pomodori secchi, formaggio Asiago, rucola, salsa di pomodoro", price: "€11" },
];

export const carenestreBianche: MenuItem[] = [
  { name: "Di Magro", description: "Fiordilatte, bietolina al vapore, ricotta fresca dopo cottura, pinoli", price: "€11" },
  { name: "Salsiccia & Friarielli", description: "Fiordilatte, pomodorini confit, salsiccia, friarielli", price: "€12" },
  { name: "Miss Stella", description: "Fiordilatte, zucchine, scalogno, scamorza affumicata, salamino piccante", price: "€12" },
  { name: "Oro Verde", description: "Mozzarella di bufala DOP, zucchine, pomodorini, pesto di pistacchi, basilico", price: "€12" },
  { name: "Cansiglio", description: "Fiordilatte, misto funghi, Asiago DOP, Dobbiaco, noci", price: "€12" },
];

// ── SANDWICHES ──
export const sandwiches: MenuItem[] = [
  { name: "Normale", description: "Prosciutto cotto e mozzarella", price: "€7" },
  { name: "Buono", description: "Porchetta, carciofi, mozzarella", price: "€9" },
  { name: "Classico", description: "Pollo, pancetta arrotolata, mozzarella, frittata, lattuga, pomodoro fresco", price: "€10" },
  { name: "Sir George", description: "Prosciutto affumicato, Asiago, origano, frittata, lattuga, pomodoro fresco", price: "€10" },
  { name: "Carinostri", description: "Porchetta, funghi champignon, bufala (dopo cottura), frittata, lattuga, pomodoro fresco", price: "€11" },
  { name: "Vegetariano", description: "Verdure al forno, mozzarella, frittata, lattuga, pomodoro fresco", price: "€11" },
  { name: "Gustoso", description: "Speck, peperoni, gorgonzola, mozzarella, frittata, lattuga, pomodoro fresco", price: "€11" },
  { name: "Nostro", description: "Porchetta, cipolla caramellata, pomodori secchi, mozzarella, frittata, lattuga, pomodoro fresco", price: "€11" },
  { name: "Tonnato", description: "Salsa tonnata, alici, mozzarella, cipolla viola, lattuga, pomodoro fresco", price: "€12" },
  { name: "Inglese", description: "Roast-beef cotto a bassa temperatura, mozzarella, frittata, lattuga, pomodoro fresco", price: "€12" },
  { name: "Angus, Caprino e Carletti", description: "Pane multicereali, Angus marinato, spalmabile di caprina e carletti, pomodoro fresco", price: "€12" },
];

// ── BIRRE SPECIALI ──
export const birreSpeciali: MenuItem[] = [
  { name: "Tongerlo Brun", description: "Birra Bruna d'Abbazia, stile Belga. 33 cl, 6,5%", price: "€5" },
  { name: "IPA Super 8", description: "Birra Indian Pale Ale. 33 cl, 6%", price: "€5,50" },
];

// ── BEVANDE ──
export const bevande: MenuItem[] = [
  { name: "Acqua 0,65 lt", description: "", price: "€3" },
  { name: "Bibite in bottiglia 0,33 lt", description: "", price: "€3" },
];

// ── BIRRE FORMATI ──
export const birreSpinaFormati: MenuItem[] = [
  { name: "Bicchiere 0,20 lt", description: "", price: "€4" },
  { name: "Bicchiere 0,40 lt", description: "", price: "€6" },
  { name: "Caraffa 1,80 lt", description: "", price: "€22" },
];

export const birreNovita: MenuItem[] = [
  { name: "Rothaus", description: "Bionda Chiara Pils 5,1% – Foresta Nera (GER)", price: "" },
  { name: "Distelhäuser", description: "Bionda Keller 5,4% – Franconia (GER)", price: "€" },
  { name: "Italian Bock", description: "Bock Rossa 6,5% – Roma (ITA) – Progetti Open Hub", price: "" },
];

// ── VINI ──
export const bollicine: MenuItem[] = [
  { name: "Col Fondo Frizzante sui Lieviti Az. Agr. \"Le Valpere\" (TV)", description: "", price: "€2,50 | €14" },
  { name: "Frizzante Col Torront \"Le Bertole\" Valdobbiadene (TV)", description: "", price: "€3 | €16" },
  { name: "Valdobbiadene D.O.C.G. Brut \"Le Bertole\" (TV)", description: "", price: "€3,50 | €21" },
  { name: "Valdobbiadene D.O.C.G. Extra Brut Franco Mill. \"Le Bertole\" (TV)", description: "", price: "€4 | €24" },
  { name: "Oltrepo' Pavese Brut D.O.C.G. Tda metodo classico abbreviato", description: "", price: "€4,50 | €27" },
  { name: "Trento D.O.C. Brut Nature Pedrotti metodo classico (TN)", description: "", price: "€5 | €21" },
];

export const viniBianchi: MenuItem[] = [
  { name: "Sauvignon Collio Doc Ronco Blanchis (GO)", description: "", price: "€3,50 | €21" },
  { name: "Gewürz-Traminer Trentino Doc \"Endrizzi\" (TN)", description: "", price: "€3,50 | €21" },
];

export const viniRossi: MenuItem[] = [
  { name: "Cabernet Frantz V.to. IGT Bosco del Camer, Gorgo al M.no (TV)", description: "", price: "€2,50 | €14" },
  { name: "Falconera Merlot D.O.C. M.llo Loredan Gasparin Venegazzù (TV)", description: "", price: "€3,50 | €21" },
  { name: "Senza Alibi Montepulciano d'Abruzzo Doc Spoltore (PE)", description: "", price: "€3,50 | €21" },
];
