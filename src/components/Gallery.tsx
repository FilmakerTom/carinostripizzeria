import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import pizza1 from "@/assets/gallery-1.jpg";
import pizza2 from "@/assets/gallery-2.jpg";
import foodDetail from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const gallery = [
  { src: pizza1, alt: "Pizza margherita dal forno a legna" },
  { src: pizza2, alt: "Pizza con salame e radicchio" },
  { src: foodDetail, alt: "Bruschetta con prosciutto e pomodorini" },
  { src: gallery4, alt: "Decorazioni floreali del locale" },
  { src: gallery5, alt: "Insegna Carinostri Hosteria" },
  { src: gallery6, alt: "Vino Cabernet Franc Bosco del Corner" },
  { src: gallery7, alt: "Lavagna con ricetta pasta madre" },
  { src: gallery8, alt: "Pane artigianale appena sfornato" },
];

const Gallery = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollReveal({ threshold: 0.1 });

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

        <div
          ref={carouselRef}
          className={`transition-all duration-700 ease-out ${
            carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {gallery.map((img, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-full md:basis-1/3"
                >
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

          {/* Dot indicators for mobile */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scorri per vedere</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
