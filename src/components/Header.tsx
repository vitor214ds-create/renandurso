import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Página inicial">
          <img
            src={logo}
            alt="Logotipo Renan Durso Advocacia"
            width={48}
            height={48}
            className={cn(
              "size-11 shrink-0 transition-all",
              scrolled || open ? "" : "brightness-0 invert",
            )}
          />
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display text-base leading-tight font-semibold sm:text-lg",
                scrolled || open ? "text-primary" : "text-white",
              )}
            >
              Renan Durso
            </span>
            <span
              className={cn(
                "block truncate text-[0.65rem] tracking-[0.18em] uppercase",
                scrolled || open ? "text-muted-foreground" : "text-accent",
              )}
            >
              Direito da Saúde
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu principal">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm transition-colors",
                scrolled
                  ? "text-foreground/75 hover:text-primary"
                  : "text-white/80 hover:text-white",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant={scrolled || open ? "default" : "onNavy"}
            size="lg"
            className="hidden sm:inline-flex"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              Atendimento Imediato
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={cn(
              "grid size-11 shrink-0 place-items-center rounded-md border lg:hidden",
              scrolled || open ? "border-border text-primary" : "border-white/30 text-white",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="section-shell flex flex-col py-3" aria-label="Menu mobile">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-foreground/80 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="whatsapp" size="lg" className="mt-4 mb-2">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Atendimento Imediato
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}