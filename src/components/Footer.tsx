import { MapPin, Phone, Clock } from "lucide-react";
import pittogramma from "@/assets/pittogramma.svg";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-10">
          <img src={pittogramma} alt="Carinostri" className="h-12" />
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center gap-3">
            <MapPin className="text-primary" size={24} />
            <h3 className="text-background text-sm tracking-widest uppercase">Dove Siamo</h3>
            <p className="text-background/50 text-sm">
              Via Francesco Baracca, 64<br />
              31036 Sala TV
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Clock className="text-primary" size={24} />
            <h3 className="text-background text-sm tracking-widest uppercase">Orari</h3>
            <p className="text-background/50 text-sm">
              Mer–Dom: 18:00 – 23:00
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="text-primary" size={24} />
            <h3 className="text-background text-sm tracking-widest uppercase">Contatti</h3>
            <p className="text-background/50 text-sm">
              +39 06 1234 5678<br />
              info@carinostri.it
            </p>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/30 text-xs">
            © 2026 Carinostri. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
