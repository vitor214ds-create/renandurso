import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT, whatsappLink } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo.").max(100),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um telefone válido com DDD.")
    .max(20, "Telefone muito longo."),
  email: z.string().trim().email("Informe um e-mail válido.").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Descreva brevemente o seu caso.")
    .max(1000, "Máximo de 1000 caracteres."),
});

type FormErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = schema.safeParse({
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      message: form.get("message"),
    });

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Verifique os campos destacados.");
      return;
    }

    setErrors({});
    const { name, phone, email, message } = result.data;
    const text = `Olá. Meu nome é ${name}.\nTelefone: ${phone}\nE-mail: ${email}\n\n${message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    toast.success("Mensagem preparada! Conclua o envio no WhatsApp.");
    event.currentTarget.reset();
  }

  return (
    <section id="contato" className="scroll-mt-24 bg-secondary py-24">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">Contato</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
            Fale com quem entende do assunto
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Atendimento online em todo o Brasil e presencial no Itaim Bibi, em São Paulo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="contact-name">Nome</Label>
                  <Input id="contact-name" name="name" autoComplete="name" maxLength={100} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="contact-phone">Telefone</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      placeholder="(11) 90000-0000"
                    />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-email">E-mail</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={255}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-message">Mensagem</Label>
                  <Textarea id="contact-message" name="message" rows={5} maxLength={1000} />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>
                <Button type="submit" size="xl" className="w-full">
                  Enviar mensagem
                </Button>
                <Button asChild variant="whatsapp" size="xl" className="w-full">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle aria-hidden="true" />
                    Prefiro falar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-5">
              <li className="flex gap-4 rounded-lg border border-border bg-card p-6">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0 text-sm">
                  <p className="font-medium text-primary">Escritório</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {CONTACT.address.street}, {CONTACT.address.complement}
                    <br />
                    {CONTACT.address.district} — {CONTACT.address.city}
                    <br />
                    {CONTACT.address.zip}
                  </p>
                </div>
              </li>
              <li className="flex gap-4 rounded-lg border border-border bg-card p-6">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0 text-sm">
                  <p className="font-medium text-primary">Telefone e WhatsApp</p>
                  <p className="mt-1 text-muted-foreground">
                    <a href={CONTACT.phoneHref} className="hover:text-primary">
                      {CONTACT.phone}
                    </a>
                    <br />
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      WhatsApp {CONTACT.whatsapp}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4 rounded-lg border border-border bg-card p-6">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0 text-sm">
                  <p className="font-medium text-primary">E-mail</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block break-all text-muted-foreground hover:text-primary"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-5 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Mapa do escritório no Itaim Bibi, São Paulo"
                src="https://www.google.com/maps?q=Av.%20Pres.%20Juscelino%20Kubitschek%2C%201327%2C%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}