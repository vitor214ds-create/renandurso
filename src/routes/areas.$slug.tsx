import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, FileText, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { AREA_ICONS } from "@/components/sections/Areas";
import { Button } from "@/components/ui/button";
import { AREAS, whatsappLink, type PracticeArea } from "@/lib/site";

export const Route = createFileRoute("/areas/$slug")({
  loader: ({ params }): PracticeArea => {
    const area = AREAS.find((item) => item.slug === params.slug);
    if (!area) throw notFound();
    return area;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const title = `${loaderData.title} | Direito da Saúde — Renan Durso`;
    const description = `${loaderData.short} ${loaderData.intro.slice(0, 100)}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/areas/${params.slug}` },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/areas/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: `${loaderData.title} — Advocacia em Direito da Saúde`,
            description: loaderData.intro,
            areaServed: "BR",
            provider: { "@type": "Attorney", name: "Renan Durso Advocacia" },
          }),
        },
      ],
    };
  },
  component: AreaPage,
});

function AreaPage() {
  const area: PracticeArea = Route.useLoaderData();
  const Icon = AREA_ICONS[area.slug];
  const message = `Olá. Encontrei seu site e preciso de orientação sobre ${area.title}.`;
  const others = AREAS.filter((item) => item.slug !== area.slug).slice(0, 3);

  return (
    <>
      <section
        className="relative isolate pt-32 pb-20"
        style={{ background: "var(--gradient-navy)" }}
      >
        <div className="section-shell">
          <Link
            to="/"
            hash="areas"
            className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Todas as áreas de atuação
          </Link>
          <div className="mt-8 flex items-center gap-4">
            {Icon && (
              <span className="glass-panel grid size-14 shrink-0 place-items-center rounded-md text-accent">
                <Icon className="size-6" aria-hidden="true" />
              </span>
            )}
            <h1 className="min-w-0 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {area.title}
            </h1>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {area.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button asChild variant="onNavy" size="xl">
              <Link to="/" hash="contato">
                Quero Atendimento
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Como atuamos</h2>
            <ul className="mt-7 space-y-4">
              {area.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-2">
              {area.bullets.map((bullet) => (
                <span
                  key={bullet}
                  className="rounded-full bg-accent px-4 py-1.5 text-xs text-accent-foreground"
                >
                  {bullet}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-lg border border-border bg-secondary p-7">
              <div className="flex items-center gap-3">
                <FileText className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <h2 className="min-w-0 text-lg font-semibold text-primary">
                  Documentos que ajudam no seu caso
                </h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {area.documents.map((doc) => (
                  <li key={doc} className="border-b border-border pb-3 last:border-0 last:pb-0">
                    {doc}
                  </li>
                ))}
              </ul>
              <Button asChild variant="whatsapp" size="lg" className="mt-7 w-full">
                <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                  Enviar documentos agora
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="section-shell">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Outras áreas</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to="/areas/$slug"
                params={{ slug: item.slug }}
                className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}