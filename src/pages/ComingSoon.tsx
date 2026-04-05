import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import pattern from "@/assets/pattern.svg";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative flex-1 flex items-center justify-center bg-foreground overflow-hidden">
        <img src={pattern} alt="" className="absolute bottom-0 left-0 w-64 opacity-[0.04] pointer-events-none" />
        <img src={pattern} alt="" className="absolute top-0 right-0 w-64 opacity-[0.04] pointer-events-none rotate-180" />
        <div className="relative z-10 text-center px-4 py-32">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-body)" }}>
            In Arrivo
          </p>
          <h1 className="text-5xl md:text-6xl font-normal text-background mb-6">La Nostra Storia</h1>
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
          <p className="text-background/60 max-w-md mx-auto mb-10 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Stiamo lavorando a questa sezione.<br />Torna presto per scoprire la nostra storia!
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/">Torna alla Home</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComingSoon;
