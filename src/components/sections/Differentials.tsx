import { Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { DIFFERENTIALS } from "@/lib/site";

export function Differentials() {
  return (
    <section className="bg-secondary py-24">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">Diferenciais</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Por que confiar a condução do seu caso
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index, 7) * 0.04}>
              <div className="h-full rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-card)]">
                <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}