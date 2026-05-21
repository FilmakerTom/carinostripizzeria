## Accordion per la sezione "Classiche" nel Menu

### Obiettivo
Trasformare la sezione **Classiche** (`pizzeTagliateClassiche`) in `MenuPage.tsx` in un accordion collassabile inline, senza creare nuovi componenti.

### Modifiche
1. **Import**: aggiungere `ChevronDown` da `lucide-react`.
2. **Stato**: aggiungere `const [classicheOpen, setClassicheOpen] = useState(false)` nel componente `MenuPage`.
3. **Sostituzione sezione**: sostituire la riga `<MenuCategory title="Classiche" ... />` con un blocco HTML inline che include:
   - Header cliccabile con titolo "Classiche", sottotitolo "LE NOSTRE PIZZE" e linea decorativa.
   - Freccia `ChevronDown` a destra con rotazione `rotate-180` quando aperto.
   - Transizione CSS su `max-height` e `opacity` per espansione fluida.
   - Stili: `border border-border rounded-sm`, `hover:bg-muted/30`, `cursor-pointer`.
   - Lista delle pizze replicata inline con lo stesso markup di `MenuCategory`.

### Vincoli rispettati
- Nessuna libreria esterna, solo React + Tailwind.
- Nessun componente separato, tutto inline in `MenuPage.tsx`.
- Solo la sezione "Classiche" viene modificata.