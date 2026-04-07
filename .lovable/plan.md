

## Piano: Sottotitolo "Servito con pane pizza caldo" per i Taglieri

### Cosa cambia
- La frase "Servito con pane pizza caldo" diventa una nota sotto il titolo "Taglieri di Affettati e Formaggi" (usando la prop `note` già supportata dal componente `MenuCategory`)
- Viene rimossa dalla descrizione di ogni singolo prodotto nell'array `taglieri`

### Dettagli tecnici

**1. `src/data/menuData.ts`** — Rimuovere "Servito con pane pizza caldo" da tutte le description dei taglieri, lasciandole vuote (`""`)

**2. `src/pages/MenuPage.tsx`** (riga 164) — Aggiungere `note="Servito con pane pizza caldo"` alla MenuCategory dei taglieri:
```tsx
<MenuCategory title="Taglieri di Affettati e Formaggi" subtitle="Antipasti & Fritti" items={taglieri} note="Servito con pane pizza caldo" />
```

