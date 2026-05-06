import { ShieldCheck, Award, HeartHandshake, Lock, Clock, FileSearch } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: ShieldCheck, title: "Transparência", desc: "Comunicação clara em cada etapa do processo, sem promessas vazias." },
  { icon: Award, title: "Experiência", desc: "Mais de uma década atuando nas áreas Criminal, Civil e Trabalhista." },
  { icon: HeartHandshake, title: "Atendimento Personalizado", desc: "Cada cliente é único. Cada estratégia, sob medida." },
  { icon: Lock, title: "Sigilo Absoluto", desc: "Confidencialidade rigorosa em todas as informações compartilhadas." },
  { icon: Clock, title: "Disponibilidade", desc: "Retorno em até 24 horas e atendimento de urgência quando necessário." },
  { icon: FileSearch, title: "Análise Minuciosa", desc: "Estudo aprofundado do caso antes de qualquer ação processual." },
];

export const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-gradient-onyx text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, hsl(38 55% 55%) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="container mx-auto relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Diferenciais</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight gold-line-center">
              O que nos torna a escolha certa
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="bg-onyx p-8 md:p-10 h-full group hover:bg-primary-foreground/[0.04] transition-colors duration-500">
                <div className="w-12 h-12 mb-6 flex items-center justify-center text-gold border border-gold/40 group-hover:bg-gradient-gold group-hover:text-primary group-hover:border-transparent transition-all duration-500">
                  <it.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-primary-foreground mb-3">{it.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
