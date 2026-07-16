Aggiungere una sezione "IN ARRIVO" nel menù, posizionata subito sotto l'avvertenza allergeni e sopra la sezione "Per Iniziare" (Aperitivi).

## Obiettivo
Creare un riquadro graficamente distintivo e molto visibile per promuovere "Le Spicchiate", una novità in arrivo. Il box deve essere riconoscibile, coerente con l'identità del sito, ma diverso dal box delle allergie.

## Posizione nel flusso
In `src/pages/MenuPage.tsx`, inserire il nuovo componente dopo il blocco avvertenza allergeni e prima del div `#antipasti` con la categoria Aperitivi.

## Struttura e contenuti
1. **Intestazione**: label "IN ARRIVO" in uppercase con tracking ampio, come i sottotitoli del menù.
2. **Titolo piatto**: "Le Spicchiate" in GFS Didot, grande e in evidenza.
3. **Descrizione**: testo del piatto fornito dall'utente, in Raleway, con un accento sul "lievito madre" e su "chiedendo al personale di sala".
4. **Elemento decorativo**: un bordo o una fascia laterale in terracotta, un'icona stilizzata di una fetta/pizza o un badge "Novità" per far spiccare la sezione.
5. **Trattamento visivo**: box con sfondo leggermente più caldo rispetto al fondo pagina, bordino spesso o doppio bordo in terracotta, ombra sottile, e un angolo/ribbon "In Arrivo" in charcoal o terracotta per catturare l'occhio.

## Dati
Aggiungere il piatto in `src/data/menuData.ts` in una nuova costante esportata, ad esempio `inArrivo`, così da poter essere riutilizzata e facilmente aggiornata.

## Componente
Creare `src/components/IncomingSection.tsx` con un layout apposito, customizzato e non identico a `MenuCategory`. Utilizzare i design token già presenti (colori HSL, font, spacing) e mantenere il responsive design.

## Verifica
Dopo l'implementazione verificare che:
- il box sia visibile subito sotto l'avvertenza allergeni;
- il testo e la descrizione corrispondano esattamente a quanto richiesto;
- il layout sia responsive e rispetti i token del design system;
- la build passi senza errori.