const pizzas = [
  { name: "Margherita", description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil", price: "$14" },
  { name: "Diavola", description: "Spicy salami, roasted peppers, mozzarella, chili oil", price: "$16" },
  { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, fontina, parmigiano-reggiano", price: "$17" },
  { name: "Prosciutto e Rucola", description: "Prosciutto di Parma, wild arugula, shaved parmesan, truffle oil", price: "$18" },
  { name: "Funghi", description: "Mixed wild mushrooms, truffle cream, mozzarella, thyme", price: "$16" },
  { name: "Napoli", description: "Anchovies, capers, olives, San Marzano tomatoes, oregano", price: "$15" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2 font-body">
            From Our Oven
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-card-foreground">
            Our Pizzas
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>
        <div className="space-y-0 divide-y divide-border">
          {pizzas.map((pizza) => (
            <div
              key={pizza.name}
              className="flex justify-between items-start py-6 group"
            >
              <div className="flex-1 pr-4">
                <h3 className="font-display text-xl md:text-2xl text-card-foreground group-hover:text-primary transition-colors">
                  {pizza.name}
                </h3>
                <p className="text-muted-foreground font-body mt-1 text-sm md:text-base">
                  {pizza.description}
                </p>
              </div>
              <span className="font-display text-xl text-primary font-bold shrink-0">
                {pizza.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
