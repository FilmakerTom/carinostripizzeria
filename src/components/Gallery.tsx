import pizza1 from "@/assets/pizza-1.png";
import pizza2 from "@/assets/pizza-2.png";
import foodDetail from "@/assets/food-detail.jpg";

const gallery = [
  { src: pizza1, alt: "Pizza margherita dal forno a legna" },
  { src: pizza2, alt: "Pizza con salame e radicchio" },
  { src: foodDetail, alt: "Bruschetta con prosciutto e pomodorini" },
];

const Gallery = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">
            Le Nostre Creazioni
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-foreground">
            Galleria
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-sm">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
