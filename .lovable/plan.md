## Problema

Nella precedente modifica ho aggiornato `src/data/menuData.ts` (usato dalla pagina Menù), ma `src/components/MenuSection.tsx` — il componente "Le Stagionali" mostrato in homepage — aveva una propria lista hardcoded con le vecchie pizze (Speck Carciofi e Burrata, Carbonara d'Asparagi). Per questo l'homepage non si è aggiornata.

## Soluzione

Rimuovere la lista hardcoded in `MenuSection.tsx` e importare `pizzeStagione` da `@/data/menuData`. Così d'ora in poi qualsiasi modifica alle stagionali si rifletterà automaticamente sia nella pagina Menù che nell'homepage — un'unica fonte di verità.

## Modifiche

**`src/components/MenuSection.tsx`**
- Eliminare l'array `pizzas` hardcoded
- Importare `pizzeStagione` da `@/data/menuData`
- Usare `pizzeStagione.map(...)` nel rendering (stessa struttura `name`/`description`/`price`)

**Memory**
- Aggiornare `mem://features/menu` per ricordare che la homepage importa le stagionali da `menuData.ts` (evita di ricreare duplicati hardcoded in futuro).

Nessun'altra pagina o componente viene toccato.