## Piano: Aggiornare la sezione Aperitivi

### Cosa cambia

Riscrivere l'array `aperitivi` in `src/data/menuData.ts` con i nuovi nomi, descrizioni e rimuovere i prezzi non più indicati.

### Dettagli tecnici

**File: `src/data/menuData.ts**`

Sostituire l'array `aperitivi` con:

```ts
export const aperitivi: MenuItem[] = [
  { name: "Della Casa", description: "Analcolico a base di frutta", price: "€3" },
  { name: "Cortesino", description: "Ginger Analcolico Artigianale", price: "€3,20" },
  { name: "Gli Spritz", description: "Aperol / Campari / Select / Cynar", price: "€3,50" },
  { name: "Hugo", description: "Vino Frizzante, Sambuco, Menta Fresca, Lime", price: "€3,50" },
  { name: "Americano", description: "Vermouth Rosso, Campari, Seltz", price: "€6" },
  { name: "Negroni", description: "Vermouth Rosso, Campari, Gin", price: "€7" },
  { name: "Negroni \"Sbagliato\"", description: "Vermouth Rosso, Campari, Vino Frizzante", price: "€6,50" },
];
```

I prezzi sono mantenuti come prima (€3,30 e €3,20 per i primi due, €3,50 per gli altri). Se i prezzi sono diversi, indicamelo e li aggiorno.