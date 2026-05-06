import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z.string().trim().min(8, "Telefone inválido").max(20),
  area: z.string().min(1, "Selecione a área"),
  message: z.string().trim().min(10, "Descreva brevemente").max(1000),
});

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Verifique os campos", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Mensagem enviada", description: "Retornaremos em até 24 horas." });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Contato</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-6 gold-line">
            Vamos conversar sobre o seu caso
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
            A primeira consulta é o momento de entendermos sua história. Agende em horário comercial
            ou envie sua mensagem — retornaremos em até 24 horas com total discrição.
          </p>

          <ul className="space-y-6">
            {[
              { icon: Phone, label: "Telefone", value: "(00) 00000-0000" },
              { icon: Mail, label: "E-mail", value: "contato@shayanneadvogada.com.br" },
              { icon: MapPin, label: "Endereço", value: "Av. Principal, 1000 — Sala 1001, Centro" },
            ].map((c) => (
              <li key={c.label} className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center border border-gold/40 text-gold shrink-0">
                  <c.icon size={18} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</p>
                  <p className="text-foreground mt-1">{c.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="bg-cream p-8 md:p-12 shadow-soft border border-border space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field name="name" label="Nome completo" />
              <Field name="email" type="email" label="E-mail" />
              <Field name="phone" label="Telefone / WhatsApp" />
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Área de interesse
                </label>
                <select
                  name="area"
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-0 border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors"
                >
                  <option value="" disabled>Selecione...</option>
                  <option value="criminal">Direito Criminal</option>
                  <option value="civil">Direito Civil</option>
                  <option value="trabalhista">Direito Trabalhista</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={1000}
                className="w-full bg-transparent border-0 border-b border-border focus:border-gold outline-none py-2 text-foreground resize-none transition-colors"
                placeholder="Conte-nos brevemente sobre sua situação..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-[0.25em] hover:bg-gradient-gold hover:text-primary transition-all duration-500 disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({ name, label, type = "text" }: { name: string; label: string; type?: string }) => (
  <div>
    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required
      maxLength={type === "email" ? 255 : 100}
      className="w-full bg-transparent border-0 border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors"
    />
  </div>
);
