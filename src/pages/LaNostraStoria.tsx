import Footer from "@/components/Footer";
import dough1 from "@/assets/dough-1.jpg";
import dough2 from "@/assets/dough-2.jpg";
import foodDetail from "@/assets/food-detail.jpg";
import pattern from "@/assets/pattern.svg";

const LaNostraStoria = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <img src={pattern} alt="" className="absolute bottom-0 left-0 w-64 opacity-[0.04] pointer-events-none" />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Dal 2010
          </p>
          <h1 className="text-5xl md:text-6xl font-normal text-background">La Nostra Storia</h1>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
        </div>
      </section>

      {/* Story blocks */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Block 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={dough1} alt="Le origini" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">Le Origini</p>
              <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">Un Sogno Nato dal Fuoco</h2>
              <div className="w-10 h-px bg-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tutto è iniziato con un forno a legna costruito a mano e la passione per la vera pizza napoletana. 
                Nel cuore di Roma, Carinostri ha aperto le sue porte con un unico obiettivo: portare in tavola 
                l'autenticità della tradizione italiana.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ogni impasto viene preparato con farine selezionate di grano italiano e lasciato 
                lievitare per 48 ore, per una pizza leggera e digeribile.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">La Filosofia</p>
              <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">Ingredienti, Non Compromessi</h2>
              <div className="w-10 h-px bg-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Selezioniamo personalmente ogni ingrediente dai migliori produttori locali. 
                Pomodori San Marzano DOP, mozzarella di bufala campana, olio extravergine d'oliva 
                delle colline toscane.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La nostra cucina segue il ritmo delle stagioni: il menu cambia per celebrare 
                i sapori di ogni periodo dell'anno.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm order-1 md:order-2">
              <img src={foodDetail} alt="I nostri ingredienti" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={dough2} alt="Il forno a legna" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">Il Forno</p>
              <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">450°C di Passione</h2>
              <div className="w-10 h-px bg-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Il nostro forno a legna raggiunge i 450°C, la temperatura perfetta per cuocere 
                la pizza in 60-90 secondi, creando quel bordo croccante e soffice che ci rende unici.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ogni sera accendiamo il fuoco con legna di quercia selezionata, un rituale 
                che dà vita al cuore pulsante della nostra pizzeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaNostraStoria;
