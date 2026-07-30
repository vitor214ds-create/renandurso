import { motion } from "motion/react";
import { Check, MessageCircle } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

const INDICATORS = [
  "Atendimento Humanizado",
  "Atuação Especializada",
  "Medidas Urgentes",
  "Atendimento em Todo o Brasil",
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Médico conversando com paciente em corredor de hospital moderno"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="section-shell flex min-h-[92vh] flex-col justify-center py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.28em] text-accent uppercase"
        >
          Advocacia especializada em Direito da Saúde
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl text-4xl leading-[1.1] font-semibold text-white sm:text-5xl lg:text-6xl"
        >
          A Saúde é um Direito, não um Privilégio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Todos os dias atuamos para garantir que pacientes tenham acesso aos tratamentos,
          medicamentos, cirurgias, home care, terapias e tecnologias indispensáveis à preservação da
          vida e da dignidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button asChild variant="hero" size="xl">
            <a href="#contato">Quero Atendimento</a>
          </Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {INDICATORS.map((item) => (
            <li
              key={item}
              className="glass-panel flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white"
            >
              <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}