import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/About";
import { Areas } from "@/components/sections/Areas";
import { Contact } from "@/components/sections/Contact";
import { Credibility } from "@/components/sections/Credibility";
import { Differentials } from "@/components/sections/Differentials";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Manifesto } from "@/components/sections/Manifesto";
import { Situations } from "@/components/sections/Situations";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQS } from "@/lib/site";

const TITLE = "Advogado Especialista em Direito da Saúde | Renan Durso";
const DESCRIPTION =
  "Advocacia especializada em Direito da Saúde: home care, medicamentos de alto custo, cirurgias negadas, tratamentos oncológicos e liminares. Atendimento em todo o Brasil.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "direito da saúde, advogado plano de saúde, liminar medicamento, home care, direito médico" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Credibility />
      <About />
      <Manifesto />
      <Areas />
      <HowItWorks />
      <Differentials />
      <Situations />
      <Faq />
      <Testimonials />
      <Contact />
    </>
  );
}
