import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo.png";
import { AREAS, CONTACT, NAV_LINKS, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logotipo Renan Durso Advocacia"
              width={44}
              height={44}
              loading="lazy"
              className="size-11 brightness-0 invert"
            />
            <span className="font-display text-lg">Renan Durso</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
            Advocacia especializada em Direito da Saúde e Direito Médico. Atuação técnica, ética e
            humanizada para garantir o acesso ao tratamento.
          </p>
        </div>

        <nav aria-label="Mapa do site">
          <h2 className="text-xs tracking-[0.2em] text-accent uppercase">Mapa do site</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-primary-foreground/75 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Áreas de atuação">
          <h2 className="text-xs tracking-[0.2em] text-accent uppercase">Áreas de atuação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  to="/areas/$slug"
                  params={{ slug: area.slug }}
                  className="text-primary-foreground/75 transition-colors hover:text-accent"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs tracking-[0.2em] text-accent uppercase">Contato</h2>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {CONTACT.address.street}
                <br />
                {CONTACT.address.complement}
                <br />
                {CONTACT.address.district} — {CONTACT.address.city}
                <br />
                {CONTACT.address.zip}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <a href={CONTACT.phoneHref} className="hover:text-accent">
                  {CONTACT.phone}
                </a>
                <br />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  WhatsApp {CONTACT.whatsapp}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-accent">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {CONTACT.name}. Todos os direitos reservados.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Documentos legais">
            <Link to="/politica-de-privacidade" className="hover:text-accent">
              Política de Privacidade
            </Link>
            <Link to="/lgpd" className="hover:text-accent">
              LGPD
            </Link>
            <Link to="/termos-de-uso" className="hover:text-accent">
              Termos de Uso
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}