import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-background text-center mb-12">
          Visit Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center gap-3">
            <MapPin className="text-accent" size={28} />
            <h3 className="font-display text-lg text-background">Location</h3>
            <p className="text-background/60 font-body text-sm">
              123 Via Roma Street<br />
              Brooklyn, NY 11201
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Clock className="text-accent" size={28} />
            <h3 className="font-display text-lg text-background">Hours</h3>
            <p className="text-background/60 font-body text-sm">
              Mon–Thu: 11am – 10pm<br />
              Fri–Sat: 11am – 11pm<br />
              Sun: 12pm – 9pm
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="text-accent" size={28} />
            <h3 className="font-display text-lg text-background">Contact</h3>
            <p className="text-background/60 font-body text-sm">
              (718) 555-0142<br />
              info@labellapizzeria.com
            </p>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 font-body text-sm">
            © 2026 La Bella Pizzeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
