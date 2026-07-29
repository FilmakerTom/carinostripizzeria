Piano di intervento: correzione colore testo voci menu mobile aperto sopra hero

1. File da modificare: `src/components/Navbar.tsx`.
2. Intervento: nel menu mobile espanso (dopo il bottone hamburger), rendere il colore del testo delle voci "non attive" dipendente dallo stato `solid`:
   - Se `solid === true` (navbar su sfondo chiaro/scuroled): mantenere `text-foreground/70 hover:text-primary`.
   - Se `solid === false` (navbar trasparente sopra la hero, tema scuro): usare `text-primary-foreground/80 hover:text-primary-foreground` (testo bianco/crema).
3. Il link attivo mantiene `text-primary` (terracotta) in entrambi i contesti, perché rimane leggibile.
4. Non modificare il menu desktop, che già reagisce correttamente a `solid`.
5. Verifica finale: build/vite per assicurare assenza di errori di compilazione.

Note:
- I token Tailwind (`text-primary-foreground`) sono già definiti nel tema e rappresentano il bianco/crema del brand, mantenendo coerenza con il resto della UI.
- Non si cambia lo sfondo del menu mobile: si agisce solo sul colore del testo, come richiesto.