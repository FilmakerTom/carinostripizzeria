import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

/**
 * ⚠️ ATTENZIONE: Questi testi sono modelli indicativi e NON costituiscono consulenza legale.
 * Devono essere revisionati e adattati da un professionista legale/privacy prima della
 * pubblicazione definitiva. Sostituire tutti i placeholder [TESTO] con i dati reali.
 */

const PrivacyPolicy = () => {
  return (
    <>
      <main className="min-h-screen bg-background pt-24 pb-16 px-4">
        <article className="max-w-3xl mx-auto prose prose-sm prose-neutral">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
            <p className="text-xs text-primary font-medium m-0">
              ⚠️ Questo testo è un modello indicativo. Deve essere revisionato da un professionista legale prima della pubblicazione.
            </p>
          </div>

          <h1 className="text-2xl font-semibold text-foreground">Informativa sulla Privacy</h1>
          <p className="text-xs text-muted-foreground">Ultimo aggiornamento: [DATA_AGGIORNAMENTO]</p>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">1. Titolare del trattamento</h2>
            <p className="text-sm text-foreground/80">
              Il Titolare del trattamento dei dati personali è:<br />
              <strong>[NOME_TITOLARE]</strong><br />
              Sede: [INDIRIZZO]<br />
              P.IVA: [P.IVA]<br />
              Email: [EMAIL]<br />
              Telefono: [TELEFONO]
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">2. Dati raccolti</h2>
            <p className="text-sm text-foreground/80">
              I dati personali raccolti dal sito possono includere:
            </p>
            <ul className="text-sm text-foreground/80">
              <li>Dati di navigazione (indirizzo IP, tipo di browser, pagine visitate)</li>
              <li>Dati forniti volontariamente dall'utente (nome, email, telefono tramite form di contatto o prenotazione)</li>
              <li>Cookie e tecnologie di tracciamento (vedi <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">3. Finalità del trattamento</h2>
            <ul className="text-sm text-foreground/80">
              <li><strong>Funzionamento del sito:</strong> garantire la corretta fruizione dei servizi web</li>
              <li><strong>Gestione richieste:</strong> rispondere a messaggi, prenotazioni e richieste di informazioni</li>
              <li><strong>Analisi statistica:</strong> monitorare il traffico e migliorare il sito (previo consenso)</li>
              <li><strong>Marketing:</strong> invio di comunicazioni promozionali (previo consenso esplicito)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">4. Base giuridica</h2>
            <ul className="text-sm text-foreground/80">
              <li><strong>Legittimo interesse:</strong> per il funzionamento tecnico del sito</li>
              <li><strong>Consenso:</strong> per cookie analitici, di marketing e contenuti di terze parti</li>
              <li><strong>Esecuzione contrattuale:</strong> per la gestione di prenotazioni e richieste</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">5. Conservazione dei dati</h2>
            <p className="text-sm text-foreground/80">
              I dati personali sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti, e comunque non oltre [PERIODO_CONSERVAZIONE]. I dati relativi ai cookie sono conservati secondo le durate indicate nella <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">6. Comunicazione e diffusione</h2>
            <p className="text-sm text-foreground/80">
              I dati potranno essere comunicati a:
            </p>
            <ul className="text-sm text-foreground/80">
              <li>Provider di hosting: [HOSTING_PROVIDER]</li>
              <li>[ELENCO_STRUMENTI_TERZI]</li>
            </ul>
            <p className="text-sm text-foreground/80">
              I dati non saranno diffusi né trasferiti a paesi terzi al di fuori dell'UE, salvo quanto specificato.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">7. Diritti dell'interessato</h2>
            <p className="text-sm text-foreground/80">
              Ai sensi degli artt. 15-22 del Regolamento UE 2016/679 (GDPR), l'utente ha diritto di:
            </p>
            <ul className="text-sm text-foreground/80">
              <li>Accedere ai propri dati personali</li>
              <li>Richiederne la rettifica o la cancellazione</li>
              <li>Limitare il trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo al Garante per la protezione dei dati personali</li>
            </ul>
            <p className="text-sm text-foreground/80">
              Per esercitare i tuoi diritti, scrivi a: <strong>[EMAIL]</strong>
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">8. Modifiche alla presente informativa</h2>
            <p className="text-sm text-foreground/80">
              Il Titolare si riserva il diritto di modificare questa informativa in qualsiasi momento. L'utente è invitato a consultare periodicamente questa pagina.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
