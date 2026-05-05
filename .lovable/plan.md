## Modifiche sezione "Birre alla Spina"

### 1. `src/data/menuData.ts`
- Aggiungi campo opzionale `logo?: string` all'interfaccia `MenuItem`.
- Rimuovi l'export `birreSpinaFormati` (categoria "Misure Birre" eliminata).
- Aggiorna `birreNovita` con prezzi a tre valori separati da `|` e logo placeholder per ogni birra:
  - **Rothaus** — `"€4,00 | €6,00 | €22,00"` — logo `/logos/rothaus.png`
  - **Distelhäuser** — `"€4,00 | €6,00 | €22,00"` — logo `/logos/distelhauser.png`
  - **Italian Bock** — `"€4,50 | €6,50 | €24,00"` — logo `/logos/italian-bock.png`

(I prezzi sopra usano i valori finora presenti in `birreSpinaFormati`; se preferisci valori diversi per la Italian Bock, indicalo prima dell'implementazione.)

### 2. `src/pages/MenuPage.tsx` — Nuove icone
Aggiungi tre nuove icone SVG inline coerenti con `WineGlassIcon` / `BottleIcon` (stessi attributi `stroke="currentColor"`, `strokeWidth="1.5"`, viewBox 24×24):
- `BeerSmallIcon` — bicchiere piccolo da birra
- `BeerLargeIcon` — boccale grande
- `BeerJugIcon` — caraffa/pitcher

### 3. Nuovo componente `BeerCategory`
Definito nello stesso file `MenuPage.tsx` (vicino a `MenuCategory`). Layout per riga:

```text
[logo h-10]   Nome                              [🍺 €4 ] [🍺 €6 ] [🍺 €22]
              descrizione (se presente)
```

- Logo a sinistra (`h-10 w-auto`, `shrink-0`, `object-contain`); fallback gestito se `item.logo` mancante (riserva spazio o omette).
- Centro: nome + descrizione, identico stile del `MenuCategory` esistente.
- Destra: parsing di `price.split("|")` con tre valori → renderizza `BeerSmallIcon`, `BeerLargeIcon`, `BeerJugIcon` con il prezzo accanto, stessa struttura visiva delle icone vino.
- Stesso header del `MenuCategory` (subtitle, titolo, linea decorativa, note).
- Sotto la linea decorativa: legenda con le tre icone + etichette **"Piccolo"**, **"Grande"**, **"Caraffa"** (analoga a quella vini).

La logica di `MenuCategory` resta intatta (continua a gestire vini con due valori `|`).

### 4. Sezione "Bibite" in `MenuPage.tsx`
- Rimuovi import e uso di `birreSpinaFormati`.
- Sostituisci la riga corrente di "Birre alla spina" da `<MenuCategory>` a `<BeerCategory>`, mantenendo titolo "Birre alla Spina" e subtitle "DAL BANCO".
- Rimuovi la riga `<MenuCategory title="Misure Birre" ... items={birreSpinaFormati} />`.
- Le altre categorie ("Birre Speciali", "Bevande", vini) restano invariate, così come la legenda vini esistente.

### 5. Loghi birre
Le immagini caricate (`Italian_Bock.png`, `Kellerbier.png`, `Rothaus.png`) verranno copiate in `public/logos/` con i nomi referenziati sopra, così i path placeholder funzionano già al primo render. Potrai poi sostituirli con file definitivi mantenendo gli stessi nomi.

### Note tecniche
- Nessuna modifica a `MenuCategory`, `WineGlassIcon`, `BottleIcon` o ad altre sezioni del menu.
- Tutti i colori restano nei token semantici (`text-primary`, `text-foreground`, `border-border`).
- `BeerCategory` su mobile: logo + testo in riga, prezzi vanno a capo sotto; su `md:` tutto in una riga (layout flex-wrap).
