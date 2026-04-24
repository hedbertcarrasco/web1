import { Badge, LiveDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hola Lumynar, me gustaría coordinar una evaluación de observabilidad de red.",
  )}`;

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-accent)]/25 bg-gradient-to-br from-[color:var(--color-surface)] via-[color:var(--color-surface-2)] to-[color:var(--color-surface)] p-8 md:p-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[color:var(--color-accent)]/15 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-[color:var(--color-accent-warm)]/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <Badge className="mb-5">
                <LiveDot />
                <span>Agendamiento en 48 h</span>
              </Badge>
              <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Evaluemos cómo <span className="text-[color:var(--color-accent)]">observar</span>{" "}
                mejor tu red.
              </h2>
              <p className="max-w-md text-[color:var(--color-text-muted)]">
                Cuéntanos tu escenario y agendamos una sesión técnica con uno de nuestros ingenieros
                NetOps, sin costo y sin compromiso.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button asChild size="lg">
                <a
                  href={`mailto:${site.email}?subject=Quiero%20evaluar%20observabilidad%20de%20red`}
                >
                  <Mail className="h-4 w-4" />
                  Escribir a {site.email}
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={waHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Conversar por WhatsApp
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </a>
              </Button>

              <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-[color:var(--color-border)] pt-6 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                    Ubicación
                  </dt>
                  <dd className="mt-1.5">{site.address}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                    Horario
                  </dt>
                  <dd className="mt-1.5">NOC 24/7 · Oficinas L-V</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
