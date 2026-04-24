import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hola Lumynar, me gustaría coordinar una conversación sobre un proyecto de red o ciberseguridad.",
  )}`;

  return (
    <section id="contacto" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-accent)]/25 bg-gradient-to-br from-[color:var(--color-surface)] via-[color:var(--color-surface-2)] to-[color:var(--color-surface)] p-8 md:p-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[color:var(--color-accent)]/15 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-[color:var(--color-accent-warm)]/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Cuéntanos el <span className="text-[color:var(--color-accent)]">escenario</span> y
                conversamos.
              </h2>
              <p className="max-w-md text-[color:var(--color-text-muted)]">
                Evaluación inicial sin costo. Revisamos tu caso, te decimos si podemos aportar y
                sugerimos los próximos pasos concretos.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button asChild size="lg">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    "Consulta desde lumynar.cl",
                  )}`}
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={waHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp {site.phone}
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
