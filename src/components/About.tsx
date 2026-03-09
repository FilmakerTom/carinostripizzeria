const About = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2 font-body">
          Our Story
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          A Family Tradition
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          Since 1987, La Bella Pizzeria has been serving the neighborhood with 
          love, passion, and the finest ingredients imported straight from Italy. 
          Our dough is made fresh every morning, left to rise for 48 hours, and 
          baked in our wood-fired oven at 900°F.
        </p>
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
          Every pizza tells a story — one of tradition, craftsmanship, and the 
          simple joy of sharing a meal with the people you love.
        </p>
      </div>
    </section>
  );
};

export default About;
