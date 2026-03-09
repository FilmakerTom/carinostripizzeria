import heroPizza from "@/assets/hero-pizza.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPizza})` }}
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-body text-primary-foreground/80 tracking-[0.3em] uppercase text-sm mb-4">
          Authentic Wood-Fired
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
          La Bella
          <span className="block italic font-normal text-accent">Pizzeria</span>
        </h1>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Handcrafted pizzas baked in our traditional stone oven, using recipes passed down through generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-body tracking-wide"
          >
            View Our Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 font-body tracking-wide"
          >
            Reserve a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
