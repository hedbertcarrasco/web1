import { Logo } from "@/components/brand/Logo";
import { navLinks, site } from "@/lib/site-config";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const waHref = `https://wa.me/${site.whatsapp}`;

  return (
    <footer className="relative border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:max-w-sm">
          <div className="text-[color:var(--color-accent)]">
            <Logo />
          </div>
          <p className="text-sm text-[color:var(--color-text-muted)]">{site.description}</p>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              aria-label="Correo"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              Navegación
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              Contacto
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[color:var(--color-text)]">
              <li>{site.legalName}</li>
              <li>{site.address}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[color:var(--color-accent)]">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={waHref} className="hover:text-[color:var(--color-accent)]">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[color:var(--color-text-muted)] md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Redes · Ciberseguridad · Observabilidad
          </p>
        </div>
      </div>
    </footer>
  );
}
