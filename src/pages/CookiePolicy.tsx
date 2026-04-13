import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { cookieCategories } from "@/config/cookie-config";
import { openCookiePreferencesGlobal } from "@/contexts/CookieConsentContext";

/**
 * ⚠️ ATTENZIONE: Questi testi sono modelli indicativi e NON costituiscono consulenza legale.
 * Devono essere revisionati e adattati da un professionista legale/privacy prima della
 * pubblicazione definitiva.
 */

const CookiePolicy = () => {
  return (
    <>
      <main className="min-h-screen bg-background pt-24 pb-16 px-4">
        <article className="max-w-3xl mx-auto prose prose-sm prose-neutral">

          <h1 className="text-2xl font-semibold text-foreground">Cookie Policy</h1>
          <p className="text-xs text-muted-foreground">Ultimo aggiornamento: 13 aprile 2026</p>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">Cosa sono i cookie</h2>
            <p className="text-sm text-foreground/80">
              I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. I cookie possono essere "di sessione" (cancellati alla chiusura del browser) o "persistenti" (conservati per un periodo definito).
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">Categorie di cookie utilizzate</h2>
            <p className="text-sm text-foreground/80 mb-4">
              Questo sito utilizza le seguenti categorie di cookie:
            </p>

            {cookieCategories.map((cat) => (
              <div key={cat.id} className="mb-6 rounded-lg border border-border p-4">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {cat.label} {cat.required && <span className="text-xs text-primary font-normal">(sempre attivi)</span>}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{cat.description}</p>

                {cat.cookies.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 pr-3 font-medium text-foreground">Cookie</th>
                          <th className="text-left py-2 pr-3 font-medium text-foreground">Provider</th>
                          <th className="text-left py-2 pr-3 font-medium text-foreground">Finalità</th>
                          <th className="text-left py-2 font-medium text-foreground">Durata</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.cookies.map((cookie) => (
                          <tr key={cookie.name} className="border-b border-border/50">
                            <td className="py-2 pr-3 text-foreground/80 font-mono">{cookie.name}</td>
                            <td className="py-2 pr-3 text-foreground/80">{cookie.provider}</td>
                            <td className="py-2 pr-3 text-foreground/80">{cookie.purpose}</td>
                            <td className="py-2 text-foreground/80">{cookie.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground italic">
                    {cat.id === 'thirdParty' ? "Google Maps" : "Nessun cookie attualmente configurato per questa categoria."}
                  </p>
                )}
              </div>
            ))}
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">Servizi di terze parti</h2>
            <p className="text-sm text-foreground/80">
              Il sito potrebbe integrare servizi di terze parti che installano cookie propri. Di seguito l'elenco dei servizi utilizzati:
            </p>
            <ul className="text-sm text-foreground/80">
              <li>Google Maps</li>
            </ul>
            <p className="text-sm text-foreground/80">
              Per ciascun servizio, si rimanda alla rispettiva informativa privacy e cookie del fornitore.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">Base giuridica</h2>
            <p className="text-sm text-foreground/80">
              I cookie tecnici/necessari sono installati sulla base del legittimo interesse del Titolare. Per tutte le altre categorie di cookie, la base giuridica è il <strong>consenso dell'utente</strong>, espresso tramite il banner cookie al primo accesso al sito.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">Tempi di conservazione</h2>
            <p className="text-sm text-foreground/80">
              La durata dei cookie varia in base alla tipologia e al fornitore. I dettagli sono riportati nella tabella sopra per ciascun cookie. La preferenza di consenso dell'utente è conservata per 6 mesi.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">Come modificare o revocare il consenso</h2>
            <p className="text-sm text-foreground/80">
              Puoi modificare le tue preferenze cookie in qualsiasi momento tramite il pulsante "Cookie" presente in basso a sinistra su tutte le pagine del sito, oppure cliccando il pulsante qui sotto:
            </p>
            <button
              onClick={openCookiePreferencesGlobal}
              className="mt-2 inline-flex items-center rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Gestisci preferenze cookie
            </button>
            <p className="text-sm text-foreground/80 mt-4">
              Puoi inoltre gestire i cookie direttamente dal tuo browser. Ecco i link alle istruzioni dei principali browser:
            </p>
            <ul className="text-sm text-foreground/80">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">Riferimenti normativi</h2>
            <ul className="text-sm text-foreground/80">
              <li>Regolamento UE 2016/679 (GDPR)</li>
              <li>Direttiva 2002/58/CE (ePrivacy)</li>
              <li>D.Lgs. 196/2003 (Codice Privacy italiano)</li>
              <li>Linee Guida del Garante Privacy italiano sui cookie (10 giugno 2021)</li>
            </ul>
          </section>

          <section className="mt-8 border-t border-border pt-6">
            <p className="text-sm text-foreground/80">
              Per ulteriori informazioni sul trattamento dei tuoi dati, consulta la nostra{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy;
