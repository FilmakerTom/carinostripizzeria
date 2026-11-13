# Compleanno Carinostri — 27 novembre 2026

## Intervento
- Inserire in home, tra l’apertura e le pizze stagionali, il blocco evento richiesto: impaginazione da locandina, programma, prezzo cena e pulsante di chiamata.
- Aggiungere su tutte le pagine una barra sottile cliccabile, con testo distinto per telefono e desktop e chiusura valida nella sessione.
- Spostare la navbar sotto la barra quando visibile, mantenendo l’apertura a tutta altezza e il menu mobile accessibile.
- Aggiungere i dati strutturati Event accanto a quelli Restaurant della home.
- Nascondere blocco, barra e dati Event dalla mezzanotte italiana del 28 novembre 2026, anche se la pagina resta aperta.

## Dettagli tecnici
- Componenti `BirthdayEvent` e `EventTopBar`, con controllo temporale condiviso basato sul fuso `Europe/Rome`.
- Stato condiviso per visibilità della barra e chiusura in `sessionStorage` protetta da try/catch.
- Collegamento `/#compleanno` con scorrimento dopo la navigazione e rispetto delle preferenze di movimento ridotto.
- JSON-LD della home con `@graph` durante la promozione; solo Restaurant dopo la scadenza.
- Nessuna modifica a menu, foto, font, contenuti esistenti o modulo prenotazioni.

## Verifica
- Test della scadenza al confine della mezzanotte italiana, della chiusura per sessione e dei valori dell’evento.
- Controlli su desktop e mobile: collegamento dalla home e da un’altra pagina, chiusura della barra, icona hamburger e assenza di sovrapposizioni.