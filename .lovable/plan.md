## Piano: Sostituire l'immagine hero con un video di sfondo

### Contesto

Attualmente il componente `src/components/Hero.tsx` usa `pizza-hero.jpg` come `background-image` CSS con un overlay scuro (`bg-foreground/70`) e contenuti sopra (logo, titolo, bottoni).

### Obiettivo

Sostituire l'immagine statica con un video da Vimeo o YouTube, in autoplay, muto e loop, mantenendo intatta l'esperienza visuale attuale.

### Implementazione

1. **Raccogliere il link**
  - L'utente fornisce il link Vimeo o YouTube del video.
2. **Adattare `Hero.tsx**`
  - Rimuovere il `<div>` con `backgroundImage`.
  - Inserire un `<iframe>` embed responsive in `position: absolute; inset: 0` come layer di sfondo.
  - Parametri embed: `autoplay=1`, `mute=1` (o `muted=1`), `loop=1`, `controls=0`, `title=0`, `byline=0`, `portrait=0` (Vimeo) oppure `autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0` (YouTube).
  - Aggiungere `pointer-events: none` all'iframe per evitare che interferisca con i click sui bottoni.
3. **Overlay e contenuti**
  - Mantenere il `<div className="absolute inset-0 bg-foreground/50" />` per l'overlay scuro.
  - Mantenere intatti logo, titolo, bottoni e le animazioni CSS di entrata.
4. **Responsive / fallback**
  - L'iframe occuperà il 100% della larghezza e altezza della sezione, con object-fit simile (scale/cover via CSS).
  - Su mobile, verificare che il video continui a funzionare (iOS supporta autoplay muted).

### Note

- Se il video è su **Vimeo**: l'embed è più pulito e permette di nascondere quasi tutta l'UI.
- Se il video è su **YouTube**: l'embed ha qualche limitazione UI, ma con `controls=0` è minimale.
- Se l'utente riesce a fornire un **URL diretto al file MP4** (invece del link embed), si può usare il tag `<video>` nativo (più performante e con maggior controllo). In tal caso il piano si adatta di conseguenza.

### Step successivi

Una volta approvato il piano, chiederò all'utente di fornire il link esatto del video per procedere con la modifica.