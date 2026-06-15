import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { openCookiePreferencesGlobal } from "@/contexts/CookieConsentContext";
import pittogramma from "@/assets/pittogramma.svg";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-10">
          <img alt="Logo Carinostri Pizzeria" className="h-12 w-auto" src="/lovable-uploads/b6c5eed4-e746-4d86-8129-0c4e19eb789c.png" />
        </div>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          <div className="flex flex-col items-center gap-3">
            <MapPin className="text-primary" size={24} />
            <h3 className="text-background text-sm tracking-widest uppercase">Dove Siamo</h3>
            <p className="text-background/80 text-sm">
              Via Francesco Baracca, 64<br />
              31036 Sala d'Istrana (TV)
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Clock className="text-primary" size={24} />
            <h3 className="text-background text-sm tracking-widest uppercase">Orari</h3>
            <p className="text-background/80 text-sm">
              Mer–Dom: 18:00 – 23:00
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="text-primary" size={24} />
            <h3 className="text-background text-sm tracking-widest uppercase">Contatti</h3>
            <p className="text-background/80 text-sm">
              <a href="tel:0422547305" className="hover:text-primary transition-colors">0422 547305</a><br />
              <a href="mailto:carinostri@gmail.com" className="hover:text-primary transition-colors">carinostri@gmail.com</a>
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-background text-sm tracking-widest uppercase">Social</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1b2Kszp4Gi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Seguici su Facebook" className="text-background/80 hover:text-primary transition-colors">
                <Facebook size={22} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/carinostri?igsh=cnE4bTl2amdweW11&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Seguici su Instagram" className="text-background/80 hover:text-primary transition-colors">
                <Instagram size={22} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-xs">
            <Link to="/privacy-policy" className="text-background/80 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-background/80 hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <button
              onClick={openCookiePreferencesGlobal}
              className="text-background/80 hover:text-primary transition-colors"
            >
              Preferenze cookie
            </button>
          </div>
          <p className="text-background/70 text-xs text-center">
            © 2026 Carinostri. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;
