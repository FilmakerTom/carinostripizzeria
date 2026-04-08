import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import pizza1 from "@/assets/gallery-1.jpg";
import pizza2 from "@/assets/gallery-2.jpg";
import foodDetail from "@/assets/gallery-3.jpg";

const gallery = [
  { src: pizza1, alt: "Pizza margherita dal forno a legna" },
  { src: pizza2, alt: "Pizza con salame e radicchio" },
  { src: foodDetail, alt: "Bruschetta con prosciutto e pomodorini" },
];

const Gallery = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">
            Le Nostre Creazioni
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-foreground">
            Galleria
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <div
              key={i}
              className={`aspect-square overflow-hidden rounded-sm transition-all duration-700 ease-out ${
                gridVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: gridVisible ? `${i * 150}ms` : "0ms" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${i === 0 ? "scale-[1.2] object-[center_40%]" : ""}`}
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
