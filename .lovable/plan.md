

## Piano: Riordinare sezioni pizze nel menù

Spostare le sezioni "Con La Porchetta" e "Con Il Tonno" (subtitle "Le Nostre Pizze") dopo le sezioni "Stagionali", "D'Eccellenza" e "Le Carenostre".

### Ordine attuale (sezione Pizze)
1. Con La Porchetta — Le Nostre Pizze
2. Con Il Tonno — Le Nostre Pizze
3. Le Pizze di Stagione — Stagionali
4. Le Pizze D.O.C. — D'Eccellenza
5. Le Carenostre
6. Le Carenostre Bianche
7. Classiche — LE NOSTRE PIZZE
8. Pizze Tagliate Piccole — LE NOSTRE PIZZE

### Nuovo ordine
1. Le Pizze di Stagione — Stagionali
2. Le Pizze D.O.C. — D'Eccellenza
3. Le Carenostre
4. Le Carenostre Bianche
5. Con La Porchetta — Le Nostre Pizze
6. Con Il Tonno — Le Nostre Pizze
7. Classiche — LE NOSTRE PIZZE
8. Pizze Tagliate Piccole — LE NOSTRE PIZZE

### File da modificare
**`src/pages/MenuPage.tsx`** — Riordinare i componenti `<MenuCategory>` nella sezione pizze, spostando l'anchor `id="pizze"` sulla prima sezione visibile (Stagionali).

