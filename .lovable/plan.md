## Obiettivo
Riformattare i prezzi singoli in `src/data/menuData.ts` rimuovendo i decimali superflui:
- Prezzi interi → senza decimali (es. `€8,00` → `€8`)
- Prezzi con decimali → un solo decimale (es. `€3,50` → `€3,5`)

## Regole
- **Non toccare**: prezzi multipli delle Birre alla Spina/Speciali (`€4,00 | €6,00 | €22,00`) e dei Vini (`€2,50 | €14`) — restano invariati.
- Si applica solo ai `price` con valore singolo nelle categorie: focaccia, taglieri, fritti, aperitivi, pizzePorchetta, pizzeTonno, pizzeStagione, pizzeDoc, pizzeTagliateClassiche, pizzeTagliatePiccole, carenestreRosse, carenestreBianche, sandwiches, birreSpeciali (prezzo singolo), bevande.

## Esempi di trasformazione
- `€3,50` → `€3,5`
- `€12,00` → `€12`
- `€0,80` → `€0,8`
- `€5,00` → `€5`

## File toccato
- `src/data/menuData.ts` (solo i valori del campo `price`)
