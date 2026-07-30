import { Reveal } from "@/components/Reveal";
import { STEPS } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="ajudar" className="scroll-mt-24 py-24">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">Como funciona</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Um caminho claro, do primeiro contato à decisão
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={Math.min(index, 5) * 0.06}>
              <li className="h-full rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                <span className="font-display text-3xl text-accent-foreground/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}