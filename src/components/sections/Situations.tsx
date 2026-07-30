import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { SITUATIONS, whatsappLink } from "@/lib/site";

export function Situations() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
            Situações em que podemos ajudar
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Identifique o seu caso
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Se você se reconhece em alguma das situações abaixo, existe caminho jurídico — e ele
            costuma ser mais rápido do que se imagina.
          </p>
        </Reveal>

        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-lg border border-border">
          {SITUATIONS.map((item) => (
            <li
              key={item.text}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-card px-5 py-5 transition-colors hover:bg-secondary sm:px-7"
            >
              <p className="min-w-0 text-sm text-foreground/85 sm:text-base">{item.text}</p>
              <Button asChild variant="outline" size="sm" className="shrink-0">
                <Link to="/areas/$slug" params={{ slug: item.slug }}>
                  Saiba Mais
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Minha situação é outra — quero falar agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}