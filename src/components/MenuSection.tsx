import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pizzas = [
  { name: "Speck Carciofi e Burrata", description: "Fiordilatte, speck tirolese, carciofi a spicchi, burrata, polvere di peperone di Senise", price: "€14" },
  { name: "", description: "", price: "" },
  { name: "Carbonara d'Asparagi", description: "Fiordilatte, asparagi verdi al forno, guanciale, carbocrema, pecorino", price: "€15" },
];


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