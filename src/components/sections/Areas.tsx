import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Bone,
  HeartPulse,
  House,
  Microscope,
  Pill,
  ReceiptText,
  Scale,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { AREAS } from "@/lib/site";

export const AREA_ICONS: Record<string, LucideIcon> = {
  "home-care": House,
  "medicamentos-de-alto-custo": Pill,
  "tratamentos-oncologicos": HeartPulse,
  "cirurgias-negadas": Stethoscope,
  "reembolso-medico": ReceiptText,
  "orteses-e-proteses": Bone,
  diabetes: Activity,
  "exames-e-terapias": Microscope,
  "cumprimento-de-decisao-judicial": Scale,
};

export function Areas() {
  return (
    <section id="areas" className="scroll-mt-24 bg-secondary py-24">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
            Áreas de Atuação
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Atuação especializada em cada frente do Direito da Saúde
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Selecione a área relacionada ao seu caso e veja como podemos agir — inclusive com
            pedidos de urgência.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, index) => {
            const Icon = AREA_ICONS[area.slug] ?? Scale;
            return (
              <Reveal key={area.slug} delay={Math.min(index, 5) * 0.05}>
                <Link
                  to="/areas/$slug"
                  params={{ slug: area.slug }}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-primary">{area.title}</h3>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {area.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}.</li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Ver detalhes
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}