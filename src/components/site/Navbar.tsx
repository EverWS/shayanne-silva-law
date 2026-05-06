import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-shayanne.svg";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-3 md:py-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Página inicial">
          <img src={logo} alt="Logotipo Shayanne Silva Advogada" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
          <div className="hidden sm:block leading-tight">
            <p className={`font-serif text-lg md:text-xl tracking-wide transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"}`}>Shayanne Silva</p>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold">Advogada</p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm uppercase tracking-wider transition-colors duration-300 hover:text-gold relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full ${scrolled ? "text-foreground/80" : "text-white"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className={`hidden lg:inline-flex items-center px-6 py-2.5 text-xs uppercase tracking-[0.2em] border border-gold transition-all duration-500 hover:bg-gold hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
        >
          Agendar Consulta
        </a>

        <button
          aria-label="Abrir menu"
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <ul className="container mx-auto py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm uppercase tracking-wider text-foreground/80 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.2em] border border-gold text-foreground"
            >
              Agendar Consulta
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
