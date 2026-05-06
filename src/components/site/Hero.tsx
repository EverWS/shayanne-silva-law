import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-law.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Biblioteca jurídica clássica iluminada ao entardecer"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-onyx opacity-90" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, hsla(30,18%,6%,0.55) 0%, hsla(30,18%,6%,0.85) 100%)" }}
      />

      <div className="container mx-auto relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold mb-6"
          >
            Advocacia de Alto Padrão · OAB
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.05] mb-8"
          >
            Defesa que <em className="text-gold not-italic">protege</em>.
            <br />
            Estratégia que <em className="text-gold not-italic">decide</em>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed"
          >
            Atuação ética e personalizada em Direito Criminal, Civil e Trabalhista.
            Cada caso conduzido com rigor técnico, discrição e compromisso com o seu resultado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-primary text-sm uppercase tracking-[0.25em] font-medium hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5"
            >
              Agendar Consulta
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm uppercase tracking-[0.25em] hover:bg-primary-foreground/10 transition-all duration-500"
            >
              Áreas de Atuação
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-[10px] uppercase tracking-[0.3em]"
      >
        Role para descobrir
      </motion.div>
    </section>
  );
};
