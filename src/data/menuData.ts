export interface MenuItem {
  name: string;
  description: string;
  price: string;
  logo?: string;
}

// ── NOVITÀ – LE QUADRATE ──
export const leQuadrate: MenuItem[] = [
  { name: "Margherita", description: "Salsa di pomodoro, fiordilatte, origano", price: "€5" },
  { name: "Anna & Noemi", description: "Porchetta, pomodori secchi, salsa di pomodoro, fiordilatte, origano", price: "€7" },
  { name: "Salsiccia & Peperoni", description: "Salsiccia, peperoni pelati, salsa di pomodoro, fiordilatte, origano", price: "€7" },
  { name: "Prosciutto Cotto", description: "Prosciutto cotto, salsa di pomodoro, fiordilatte, origano", price: "€7" },
  { name: "Zola & Cipolla", description: "Gorgonzola, cipolla viola, fiordilatte, origano", price: "€7" },
  { name: "Vegetariana", description: "Verdure miste al forno, parmigiano, origano", price: "€8" },
];

// ── NOVITÀ – INSALATONE & PIATTI FREDDI ──
export const insalatone: MenuItem[] = [
  { name: "Gustosa", description: "Tonno, olive leccino, fiordilatte, insalata, pomodoro fresco, carote", price: "€12" },
  { name: "Saporita", description: "Cubetti di porchetta, cipolla viola, frutto di cappero, insalata, pomodoro fresco, carote", price: "€12" },
  { name: "\"Caesar Salade\"", description: "Versione Carinostri — Pollo a filetti, crostini di pane, Salsa Caesar Carinostri, Grana Padano, insalata, pomodoro fresco, carote", price: "€14" },
  { name: "Roast Beef all'Inglese", description: "Con misticanza e semi di senape", price: "€16" },
  { name: "Tartare di Manzo", description: "Olio e limone — con olive, pomodorini, peperoni sbucciati, basilico e misticanza", price: "€18" },
];

// ── ANTIPASTI & FRITTI ──
export const focaccia: MenuItem[] = [
  { name: "Salsa pomodoro, aglio e origano", description: "", price: "€3,5" },
  { name: "Porchetta Carinostri/altro affettato", description: "", price: "€4" },
  { name: "Varietà di Gusti", description: "", price: "€5" },
];

export const taglieri: MenuItem[] = [
  { name: "Porchetta Carinostri", description: "", price: "€7,5" },
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
  { name: "Aggiunta Salsa", description: "", price: "€0,8" },
];

// ── APERITIVI ──
export const aperitivi: MenuItem[] = [
  { name: "Della Casa", description: "Analcolico a base di frutta", price: "€3" },
  { name: "Cortesino", description: "Ginger Analcolico Artigianale", price: "€3,5" },
  { name: "Gli Spritz", description: "Aperol / Campari / Select / Cynar", price: "€3,5" },
  { name: "Hugo", description: "Vino Frizzante, Sambuco, Menta Fresca, Lime", price: "€3,5" },
  { name: "Americano", description: "Vermouth Rosso, Campari, Seltz", price: "€6" },
  { name: "Negroni", description: "Vermouth Rosso, Campari, Gin", price: "€7" },
  { name: "Negroni \"Sbagliato\"", description: "Vermouth Rosso, Campari, Vino Frizzante", price: "€5,5" },
];

// ── LE PIZZE – CON LA PORCHETTA ──
export const pizzePorchetta: MenuItem[] = [
  { name: "Carinostri", description: "Porchetta, salsa di pomodoro, fiordilatte", price: "€9" },
  { name: "Rivasecca", description: "Porchetta, fiordilatte, pomodoro fresco, cipolla viola, rucola", price: "€11" },
  { name: "Boscaiola", description: "Porchetta, funghi misti, salsa di pomodoro, fiordilatte", price: "€11" },
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
  { name: "Confit Stracchino e Friarielli", description: "Pomodorini confit, friarielli, stracchino, origano, polvere di peperoni, insalatina", price: "€13" },
  { name: "Crudo Pesce e Burrata", description: "Prosciutto crudo 24 mesi, pesche spicchi, burrata pugliese, rucola (disponibile variante con i pomodorini e basilico al posto posto delle pesche)", price: "€13" },
  { name: "Baccalà Mantecato", description: "Baccalà mantecato, chips di mais, pomodori secchi, olive leccino e misticanza", price: "€14" },
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
  { name: "Marinara", description: "Salsa pomodoro, olio e.v.o., aglio, origano", price: "€5,5" },
  { name: "Margherita", description: "Salsa di pomodoro, fiordilatte", price: "€5,5" },
  { name: "Pugliese", description: "Salsa di pomodoro, fiordilatte, cipolla di Tropea", price: "€7,5" },
  { name: "Romana", description: "Salsa di pomodoro, fiordilatte, filetti di alici", price: "€8" },
  { name: "Diavola", description: "Salsa di pomodoro, fiordilatte, salame piccante affumicato", price: "€8" },
  { name: "Prosciutto e Funghi", description: "Salsa di pomodoro, fiordilatte, prosciutto cotto, funghi champignon", price: "€8,5" },
  { name: "Capricciosa", description: "Salsa di pomodoro, fiordilatte, prosciutto cotto, funghi champignon, carciofi", price: "€9" },
  { name: "Verdure", description: "Salsa di pomodoro, fiordilatte, verdure miste al forno", price: "€9" },
  { name: "Formaggi", description: "Salsa di pomodoro, fiordilatte, gorgonzola, scamorza affumicata, Asiago", price: "€10" },
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
  { name: "Salsiccia & Friarielli", description: "Fiordilatte, pomodorini confit, salsiccia, friarielli", price: "€12" },
  { name: "Miss Stella", description: "Fiordilatte, zucchine, scalogno, scamorza affumicata, salamino piccante", price: "€12" },
  { name: "Oro Verde", description: "Mozzarella di bufala DOP, zucchine, pomodorini, pesto di pistacchi, basilico", price: "€12" },
  { name: "Cansiglio", description: "Fiordilatte, misto funghi, Asiago DOP, Dobbiaco, noci", price: "€12" },
  { name: "Mortadella", description: "Fiordilatte, Mortadella IGP Bologna, stracchino, granella di pistacchio, pepe rosa e scorza di limone grattuggiata", price: "€13" },
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
];

// ── BIRRE SPECIALI ──
export const birreSpeciali: MenuItem[] = [
  { name: "Tongerlo Brun", description: "Birra Bruna d'Abbazia, stile Belga. 33 cl, 6,5%", price: "€5", logo: "/logos/tongerlo.png" },
  { name: "IPA Super 8", description: "Birra Indian Pale Ale. 33 cl, 6%", price: "€5,5", logo: "/logos/super-8-ipa.png" },
];

// ── BEVANDE ──
export const bevande: MenuItem[] = [
  { name: "Acqua 0,65 lt", description: "", price: "€3" },
  { name: "Bibite in bottiglia 0,33 lt", description: "", price: "€3" },
];

export const birreNovita: MenuItem[] = [
  { name: "Rothaus", description: "Bionda Chiara Pils 5,1% – Foresta Nera (GER)", price: "€4 | €6 | €22", logo: "/logos/rothaus.png" },
  { name: "Distelhäuser", description: "Bionda Keller 5,4% – Franconia (GER)", price: "€4 | €6 | €22", logo: "/logos/distelhauser.png" },
  { name: "Italian Bock", description: "Bock Rossa 6,5% – Roma (ITA) – Progetti Open Hub", price: "€4 | €6 | €22", logo: "/logos/italian-bock.png" },
];

// ── VINI ──
export const bollicine: MenuItem[] = [
  { name: "Col Fondo Frizzante sui Lieviti Az. Agr. \"Le Valpere\" (TV)", description: "", price: "€2,5 | €14" },
  { name: "Frizzante Col Torront \"Le Bertole\" Valdobbiadene (TV)", description: "", price: "€3 | €16" },
  { name: "Valdobbiadene D.O.C.G. Brut \"Le Bertole\" (TV)", description: "", price: "€3,5 | €21" },
  { name: "Valdobbiadene D.O.C.G. Extra Brut Franco Mill. \"Le Bertole\" (TV)", description: "", price: "€4 | €24" },
  { name: "Oltrepo' Pavese Brut D.O.C.G. Tda metodo classico abbreviato", description: "", price: "€4,5 | €27" },
  { name: "Trento D.O.C. Brut Nature Pedrotti metodo classico (TN)", description: "", price: "€5 | €21" },
];

export const viniBianchi: MenuItem[] = [
  { name: "Sauvignon Collio Doc Ronco Blanchis (GO)", description: "", price: "€3,5 | €21" },
  { name: "Gewürz-Traminer Trentino Doc \"Endrizzi\" (TN)", description: "", price: "€3,5 | €21" },
];

export const viniRossi: MenuItem[] = [
  { name: "Cabernet Frantz V.to. IGT Bosco del Camer, Gorgo al M.no (TV)", description: "", price: "€2,5 | €14" },
  { name: "Falconera Merlot D.O.C. M.llo Loredan Gasparin Venegazzù (TV)", description: "", price: "€3,5 | €21" },
  { name: "Senza Alibi Montepulciano d'Abruzzo Doc Spoltore (PE)", description: "", price: "€3,5 | €21" },
];

// ── DOLCI, GELATO, AMARI E CAFFÈ ──
export const dolci: MenuItem[] = [
  { name: "Tiramisù", description: "", price: "€5" },
  { name: "Crema catalana", description: "", price: "€5" },
  { name: "Tortino al cioccolato", description: "Con cuore morbido e gelato alla nocciola", price: "€7" },
];

export const gelato: MenuItem[] = [
  { name: "Gelato 1 porzione", description: "", price: "€2" },
  { name: "Gelato porzione doppia", description: "", price: "€3,5" },
];

export const dopoCena: MenuItem[] = [
  { name: "Sorbetto", description: "Limone primo fiore, Mandarino, Mango", price: "€4" },
  { name: "Liquori artigianali amalfitani", description: "Limoncello, Finocchietto, Liquirizia, Cioccolato", price: "€4,5" },
  { name: "Campo Amaro", description: "", price: "€5" },
  { name: "Varietà di amari & distillati", description: "", price: "da €5" },
  { name: "Caffè \"Sartoriale\"", description: "Miscela forte, Miscela leggera, Miscela deca", price: "€2" },
];

// ── CUCINA – CARNE ──
export const cucinaCarne: MenuItem[] = [
  { name: "Costata di Manzo 600g", description: "su richiesta servita come la Tagliata", price: "€5,5 all'etto" },
  { name: "Cotoletta di Petto di Pollo", description: "con patate fritte", price: "€12" },
  { name: "Hamburger di Manzo", description: "Fassona Piemontese gr. 200, con patate fritte", price: "€14" },
];

// ── CUCINA – PESCE ──
export const cucinaPesce: MenuItem[] = [
  { name: "Insalata di Piovra", description: "con patate e misticanza", price: "€14" },
  { name: "Insalata di Mare, Pomodorini e Misticanza", description: "Calamaretti, mazzancolle, cozze, seppioline, piovra, sedano, zucchine e peperoni", price: "€15" },
  { name: "Frittura Mista di Pesce", description: "Mazzancolle, calamari, merluzzo, totani, sarde, con carote e zucchine fritte — solo con farina di riso", price: "€18" },
  { name: "Filetto di Branzino al Forno", description: "con pomodorini, olive leccino e timo", price: "€18" },
];

// ── CUCINA – CONTORNI ──
export const cucinaContorni: MenuItem[] = [
  { name: "Patate al Forno", description: "", price: "€5" },
  { name: "Verdure Grigliate", description: "", price: "€5" },
  { name: "Insalata Mista", description: "", price: "€4" },
];
