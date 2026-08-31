import portrait from "@/assets/foto_profissional.jpg";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 border border-gold/40 -z-10" />
            <img
              src={portrait}
              alt="Dra. Shayanne Silva, advogada"
              width={1684}
              height={2528}
              loading="lazy"
              className="w-full max-w-[420px] mx-auto aspect-[2/3] object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-gradient-gold p-6 md:p-8 max-w-[220px] shadow-gold">
              <p className="font-serif text-3xl md:text-4xl text-primary">+10</p>
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mt-1">
                anos dedicados à advocacia
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Sobre o Escritório</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-6 gold-line">
            Tradição, ética e atuação estratégica
          </h2>
          <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
            <p>
              Liderado pela <strong className="text-primary">Dra. Shayanne Silva</strong>, o escritório
              foi construído sobre três pilares: rigor técnico, ética inegociável e atendimento
              verdadeiramente personalizado a cada cliente.
            </p>
            <p>
              Acreditamos que o Direito é uma ferramenta poderosa quando exercido com precisão e
              sensibilidade. Por isso, cada caso é conduzido com escuta atenta, análise minuciosa e
              uma estratégia desenhada sob medida.
            </p>
            <p>
              Atuamos nas áreas Criminal, Civil e Trabalhista, oferecendo a tranquilidade de saber
              que sua causa está em mãos preparadas para defendê-la com convicção.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { n: "500+", l: "Casos conduzidos" },
              { n: "98%", l: "Clientes satisfeitos" },
              { n: "24h", l: "Retorno garantido" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-gold pl-4">
                <p className="font-serif text-3xl text-primary">{s.n}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
