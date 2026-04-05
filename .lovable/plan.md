

## Piano: Disattivare temporaneamente "La Nostra Storia"

### Cosa faremo
Quando un utente visita `/la-nostra-storia`, vedrà una pagina "Coming Soon" elegante con un messaggio che indica che la pagina è in preparazione. Il link nella navigazione verrà mantenuto ma con uno stile attenuato per indicare che non è ancora disponibile.

### Dettagli tecnici

**1. Creare una pagina ComingSoon (`src/pages/ComingSoon.tsx`)**
- Layout coerente con il sito: hero scuro con pattern, titolo della pagina, messaggio tipo "Stiamo lavorando a questa sezione. Torna presto!"
- Pulsante per tornare alla Home

**2. Aggiornare la rotta in `src/App.tsx`**
- Sostituire `<LaNostraStoria />` con `<ComingSoon />` sulla rotta `/la-nostra-storia`
- Commentare l'import originale per riattivarlo facilmente in futuro

**3. Navbar (opzionale)**
- Aggiungere un piccolo badge "Soon" accanto al link "La Nostra Storia" nella navigazione, per segnalare che la pagina non è ancora pronta

### Come riattivare
Basterà ripristinare l'import e il componente originale in `App.tsx`.

