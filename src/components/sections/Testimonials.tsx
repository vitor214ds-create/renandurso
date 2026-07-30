import { Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">Depoimentos</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Histórias de quem voltou a ter acesso ao tratamento
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((item) => (
                <CarouselItem key={item.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                    <div className="flex gap-1" aria-label="Avaliação 5 de 5 estrelas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-current text-primary"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-5 grow text-sm leading-relaxed text-foreground/80">
                      “{item.text}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span
                        className="grid size-10 shrink-0 place-items-center rounded-full bg-accent font-display text-sm text-accent-foreground"
                        aria-hidden="true"
                      >
                        {item.name.charAt(0)}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-primary">
                          {item.name}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {item.role}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}