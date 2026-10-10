import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { pizzeStagione } from "@/data/menuData";



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
        <div ref={listRef} className="space-y-4">
          {pizzeStagione.map((pizza, i) =>
          <SeasonalPizzaCard
            key={pizza.name}
            item={pizza}
            className={`transition-all duration-500 ease-out ${
            listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: listVisible ? `${i * 80}ms` : "0ms" }} />
          )}
        </div>
      </div>
    </section>);

};

export default MenuSection;
