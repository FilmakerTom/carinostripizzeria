import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/pittogramma-1.png";
import logoNegative from "@/assets/logo-negative.png";
import { Button } from "@/components/ui/button";

const navLinks: { label: string; to: string; soon?: boolean }[] = [
  { label: "Home", to: "/" },
  { label: "La Nostra Storia", to: "/la-nostra-storia" },
  { label: "Menù", to: "/menu" },
  { label: "Chi Siamo", to: "/chi-siamo" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home page: transparent until scrolled. On other pages: always solid.
  // When the mobile menu is open, force solid style so the close icon stays visible.
  const solid = !isHome || scrolled;
  const solidUi = solid || menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidUi
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/">
          <img
            src={solidUi ? logo : logoNegative}
            alt="Logo Carinostri Pizzeria"
            className="h-8 md:h-10 w-auto transition-all"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs tracking-[0.2em] uppercase transition-colors flex items-center gap-1.5 ${
                location.pathname === link.to
                  ? "text-primary"
                  : solid
                  ? "text-foreground/70 hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              } ${link.soon ? "opacity-70" : ""}`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
              {link.soon && (
                <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full tracking-normal normal-case">
                  soon
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 hover:bg-transparent hover:text-current [&_svg]:size-6 ${solidUi ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-background/[0.98] backdrop-blur-md border-t border-border">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-[0.15em] uppercase py-2 transition-colors flex items-center gap-2 ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                } ${link.soon ? "opacity-70" : ""}`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
                {link.soon && (
                  <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full tracking-normal normal-case">
                    soon
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
