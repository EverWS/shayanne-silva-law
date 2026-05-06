import { Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo-shayanne.svg";

export const Footer = () => {
  return (
    <footer className="bg-onyx text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-primary-foreground/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logotipo" className="h-14 w-14 object-contain" />
              <div>
                <p className="font-serif text-xl">Shayanne Silva</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Advogada</p>
              </div>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed max-w-md">
              Advocacia ética, técnica e personalizada nas áreas Criminal, Civil e Trabalhista.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Navegação</p>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li><a href="#areas" className="hover:text-gold transition-colors">Áreas de Atuação</a></li>
              <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre</a></li>
              <li><a href="#diferenciais" className="hover:text-gold transition-colors">Diferenciais</a></li>
              <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Contato</p>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li>(00) 00000-0000</li>
              <li>contato@shayanneadvogada.com.br</li>
              <li>Av. Principal, 1000 — Sala 1001</li>
              <li className="pt-3">OAB/XX 000.000</li>
            </ul>

            <div className="flex gap-3 mt-6">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 hover:bg-gradient-gold hover:text-primary hover:border-transparent transition-all duration-500"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Shayanne Silva Advogada. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.2em]">Conteúdo informativo · Cumpre o Código de Ética da OAB</p>
        </div>
      </div>
    </footer>
  );
};
