

## Piano: Carosello Galleria con nuove immagini

### In attesa
Sto aspettando che tu carichi le immagini da usare nel carosello. Una volta ricevute, il piano sarà:

### Cosa cambierà
- La griglia statica 3 colonne verrà sostituita con un **carosello scorrevole** (usando Embla Carousel, già presente nel progetto)
- Tutte le immagini caricate saranno incluse come slide
- Navigazione con frecce laterali e indicatori dot in basso
- Animazione zoom-in mantenuta su ogni immagine
- Layout responsive: 1 immagine su mobile, 3 visibili su desktop

### Dettagli tecnici

**File: `src/components/Gallery.tsx`**
- Importare `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` da `@/components/ui/carousel`
- Sostituire la grid con il componente Carousel
- Aggiungere le nuove immagini all'array `gallery`
- Aggiungere autoplay opzionale con plugin `embla-carousel-autoplay`

**File: `src/assets/`**
- Salvare tutte le immagini caricate dall'utente

**Carica le immagini per procedere.**

