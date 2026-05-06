import { Card, CardContent } from "@/components/ui/card";
import { Gavel, Scale, Briefcase, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const areas = [
  {
    icon: Gavel,
    title: "Direito Criminal",
    desc: "Defesa técnica em todas as fases do processo penal — do inquérito ao tribunal do júri — com sigilo absoluto e estratégia pautada em garantias constitucionais.",
    items: ["Defesa em inquéritos", "Audiências de custódia", "Tribunal do Júri", "Habeas Corpus"],
  },
  {
    icon: Scale,
    title: "Direito Civil",
    desc: "Soluções consultivas e contenciosas para questões patrimoniais, contratuais e familiares, com foco em acordos eficientes e proteção do seu patrimônio.",
    items: ["Contratos e indenizações", "Família e Sucessões", "Direito do Consumidor", "Imobiliário"],
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    desc: "Atuação consistente para empregados e empregadores, com análise estratégica de riscos, negociação de acordos e defesa robusta perante a Justiça do Trabalho.",
    items: ["Verbas rescisórias", "Assédio moral", "Acordos coletivos", "Defesa empresarial"],
  },
];

export const PracticeAreas = () => {
  return (
    <section id="areas" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Áreas de Atuação</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight gold-line">
              Especialização que se traduz em resultados
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <Card className="group h-full border-border bg-card hover:border-gold/60 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1 rounded-none">
                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 flex items-center justify-center border border-gold/40 text-gold group-hover:bg-gradient-gold group-hover:text-primary transition-all duration-500">
                      <a.icon size={26} strokeWidth={1.4} />
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-muted-foreground group-hover:text-gold group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500"
                    />
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">{a.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{a.desc}</p>

                  <ul className="mt-auto space-y-2 pt-6 border-t border-border">
                    {a.items.map((it) => (
                      <li key={it} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="h-px w-4 bg-gold" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
