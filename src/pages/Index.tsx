import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Carinostri",
  description:
    "Pizzeria artigianale a Sala d'Istrana (TV) con pasta madre viva, lievitazione lunga e ingredienti del territorio.",
  url: "https://carinostripizzeria.lovable.app",
  telephone: "+390422547305",
  email: "carinostri@gmail.com",
  priceRange: "€€",
  servesCuisine: ["Pizza", "Italiana"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Francesco Baracca, 64",
    addressLocality: "Sala d'Istrana",
    addressRegion: "TV",
    postalCode: "31036",
    addressCountry: "IT",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "18:00",
      closes: "23:00",
    },
  ],
  hasMenu: "https://carinostripizzeria.lovable.app/menu",
  sameAs: [
    "https://www.facebook.com/share/1b2Kszp4Gi/?mibextid=wwXIfr",
    "https://www.instagram.com/carinostri",
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Carinostri · Pizzeria con Pasta Madre a Istrana (TV)"
        description="Pizzeria artigianale a Sala d'Istrana (TV) con pasta madre viva, lievitazione lunga, taglieri, birre alla spina e vini selezionati."
        path="/"
        jsonLd={restaurantJsonLd}
      />
      <Hero />
      <MenuSection />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
