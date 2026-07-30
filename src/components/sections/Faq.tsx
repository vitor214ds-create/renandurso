import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-secondary py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
            Perguntas Frequentes
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Dúvidas mais comuns
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Respostas diretas para as questões que mais aparecem no primeiro contato.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}