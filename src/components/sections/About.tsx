import { GraduationCap, MessageCircle, ShieldCheck } from "lucide-react";

import advPhoto from "@/assets/adv-1.png.asset.json";
import advSitting from "@/assets/adv-2.png.asset.json";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

const FORMATION = [
  "Pós-graduado em Direito Empresarial",
  "Pós-graduando em Direito Médico e da Saúde",
  "Pós-graduando em Gestão Hospitalar",
  "Pós-graduando em Auditoria em Documentos da Saúde",
  "Membro da Comissão Especial de Direito Médico e Saúde da OAB/SP",
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-24">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">Sobre</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Conheça o Advogado
          </h2>
          <p className="mt-6 leading-relaxed text-foreground/80">
            Atuação dedicada ao Direito da Saúde e ao Direito Médico, com foco na garantia de acesso
            a tratamentos, medicamentos, cirurgias, home care e terapias. Cada caso é analisado com
            profundidade técnica, respaldo médico e sensibilidade para o momento vivido pela
            família.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            A formação complementar em gestão hospitalar e auditoria de documentos da saúde permite
            compreender a lógica interna dos planos de saúde e das instituições de saúde,
            transformando esse conhecimento em estratégias jurídicas precisas — sempre pautadas pela
            ética, pela transparência e por uma comunicação clara com o cliente.
          </p>

          <ul className="mt-8 space-y-3">
            {FORMATION.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/85">
                <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Falar com o advogado
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#areas">Ver áreas de atuação</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative">
            <div className="overflow-hidden rounded-lg bg-secondary shadow-[var(--shadow-card)]">
              <img
                src={advPhoto.url}
                alt="Renan Durso, advogado especialista em Direito da Saúde"
                width={1067}
                height={1600}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 hidden w-44 overflow-hidden rounded-lg border-4 border-background shadow-[var(--shadow-card)] sm:block">
              <img
                src={advSitting.url}
                alt="Advogado em atendimento no escritório"
                width={1067}
                height={1600}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="mt-10 flex items-center gap-3 rounded-lg border border-border bg-secondary p-4 sm:mt-12">
              <ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="min-w-0 text-sm text-muted-foreground">
                Membro da Comissão Especial de Direito Médico e Saúde da OAB/SP.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}