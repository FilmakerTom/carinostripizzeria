import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pizzas = [
{ name: "La Trevigiana DOC", description: "morlacco del Grappa, sopressa, Radicchio trevigiano IGP, olio e.v.o.", price: "€13" },
{ name: "Diavola", description: "Salame piccante, peperoni arrostiti, mozzarella, olio al peperoncino", price: "€10" },
{ name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, fontina, parmigiano reggiano", price: "€11" },
{ name: "Prosciutto e Rucola", description: "Prosciutto di Parma, rucola selvatica, scaglie di parmigiano, olio al tartufo", price: "€12" },
{ name: "Funghi", description: "Funghi misti, crema di tartufo, mozzarella, timo fresco", price: "€10" },
{ name: "Napoli", description: "Acciughe, capperi, olive taggiasche, pomodoro San Marzano, origano", price: "€9" }];


const MenuSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: listRef, isVisible: listVisible } = useScrollReveal({ rootMargin: "0px 0px -20px 0px" });

  return (
    <section id="menu" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
          }>
          
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">
            Dal Nostro Forno
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-foreground">Le Stagionali

          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
        </div>
        <div ref={listRef} className="space-y-0 divide-y divide-border">
          {pizzas.map((pizza, i) =>
          <div
            key={pizza.name}
            className={`flex justify-between items-start py-6 group transition-all duration-500 ease-out ${
            listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`
            }
            style={{ transitionDelay: listVisible ? `${i * 80}ms` : "0ms" }}>
            
              <div className="flex-1 pr-4">
                <h3 className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                  {pizza.name}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {pizza.description}
                </p>
              </div>
              <span className="text-xl text-primary font-semibold shrink-0">
                {pizza.price}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default MenuSection;