

## Piano: Mappa Google Maps + Riquadro Info nella sezione "Vieni a Trovarci"

### Cosa cambia
La sezione "Vieni a Trovarci" nella pagina Chi Siamo verrà riprogettata con un layout a due colonne:
- **Sinistra**: embed di Google Maps che mostra la posizione della pizzeria
- **Destra**: card compatta con nome, indirizzo, orari e telefono

La griglia attuale con 5 colonne (indirizzo, telefono, email, orari, social) verrà sostituita da questo nuovo layout più visivo e immediato.

### Dettagli tecnici

**File: `src/pages/ChiSiamo.tsx`**

1. Sostituire la griglia contatti con un layout `grid md:grid-cols-[2fr_1fr]`:
   - Colonna sinistra: `<iframe>` Google Maps embed centrato su "Via Francesco Baracca 64, Istrana TV" con aspect-ratio 16/9, bordo arrotondato
   - Colonna destra: card con sfondo `bg-card` contenente:
     - Nome "Carinostri" in stile titolo
     - Indirizzo con icona MapPin
     - Orari con icona Clock
     - Telefono con icona Phone (cliccabile con `tel:`)
   - Stile coerente col sito: icone `text-primary`, testo `text-muted-foreground`, separatori sottili

2. Le info rimanenti (email, social) restano nel Footer che è già presente in fondo alla pagina.

