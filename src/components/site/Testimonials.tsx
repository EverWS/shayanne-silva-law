import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const quotes = [
  {
    text: "Conduziu meu caso com uma serenidade e domínio impressionantes. Senti-me amparada do início ao fim.",
    author: "M. R.",
    role: "Cliente — Área Civil",
  },
  {
    text: "Profissionalismo e ética acima de qualquer expectativa. Recomendo sem hesitar.",
    author: "C. A.",
    role: "Cliente — Área Trabalhista",
  },
  {
    text: "Estratégia precisa em momento delicado. A clareza nas explicações fez toda a diferença.",
    author: "J. P.",
    role: "Cliente — Área Criminal",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Depoimentos</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight gold-line-center">
              A confiança de quem confiou
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((q, i) => (
            <Reveal key={q.author} delay={i * 0.1}>
              <figure className="bg-background p-8 md:p-10 h-full border border-border hover:border-gold/40 transition-colors duration-500 shadow-soft">
                <Quote className="text-gold mb-6" size={28} strokeWidth={1.5} />
                <blockquote className="font-serif text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-8">
                  “{q.text}”
                </blockquote>
                <figcaption>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">{q.author}</p>
                  <p className="text-xs text-muted-foreground mt-1">{q.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center text-xs text-muted-foreground mt-12 max-w-xl mx-auto">
            * Em cumprimento ao Código de Ética da OAB, depoimentos são compartilhados de forma
            anônima e sem promessa de resultado.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
