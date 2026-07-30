import type { ReactNode } from "react";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="pt-32 pb-14" style={{ background: "var(--gradient-navy)" }}>
        <div className="section-shell">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/75">{intro}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="section-shell max-w-3xl space-y-8 text-sm leading-relaxed text-foreground/80 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-primary [&_li]:ml-5 [&_li]:list-disc">
          {children}
        </div>
      </section>
    </>
  );
}