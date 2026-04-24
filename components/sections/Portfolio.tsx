import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { Check, ChevronRight } from "lucide-react";

const npmFeatures = [
  "Monitoreo de performance multivendor a escala",
  "Telemetría de flujos, métricas SNMP y streaming",
  "Analítica correlacionada con experiencia de aplicación",
  "Dashboards y alertas listas para NetOps",
];

const sanoFeatures = [
  "SevOne NPM + IBM Rapid Infrastructure Automation",
  "Descubrimiento y onboarding continuo de dispositivos",
  "Workflows de remediación automatizados",
  "Cierra el loop entre insight y acción en producción",
];

const pipeline = ["Descubrimiento", "Monitoreo", "Analítica", "Automatización"];

export function Portfolio() {
  return (
    <section
      id="portafolio"
      className="relative border-y border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]/30"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-col gap-4 md:mb-16">
          <Badge>Portafolio IBM Network Management</Badge>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Somos especialistas en el stack{" "}
            <span className="text-[color:var(--color-accent)]">SevOne NPM + SANO</span>.
          </h2>
          <p className="max-w-2xl text-balance text-base text-[color:var(--color-text-muted)] md:text-lg">
            IBM SevOne entrega insights application-centric para que los equipos NetOps prevengan
            problemas de performance en entornos híbridos, multivendor y a escala.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80 p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[color:var(--color-accent)]/10 blur-3xl" />
            <Badge className="mb-5 border-[color:var(--color-accent)]/30 text-[color:var(--color-accent)]">
              IBM SevOne NPM 7.2
            </Badge>
            <h3 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Network Performance Management application-centric.
            </h3>
            <p className="mb-6 text-[color:var(--color-text-muted)]">
              Monitorea redes empresariales, de comunicaciones y de proveedores de servicios con
              datos en tiempo real. Convierte telemetría en insights accionables para detectar,
              abordar y prevenir problemas de performance.
            </p>
            <ul className="space-y-3">
              {npmFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--color-accent)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-[color:var(--color-accent)]/25 bg-gradient-to-br from-[color:var(--color-surface)] to-[color:var(--color-surface-2)] p-8 md:p-10">
            <div className="absolute -left-16 -bottom-16 h-60 w-60 rounded-full bg-[color:var(--color-accent)]/15 blur-3xl" />
            <Badge className="mb-5 border-[color:var(--color-accent)]/40 text-[color:var(--color-accent)]">
              IBM SevOne SANO
            </Badge>
            <h3 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Automated Network Observability que cierra el loop.
            </h3>
            <p className="mb-6 text-[color:var(--color-text-muted)]">
              SANO combina SevOne NPM con IBM Rapid Infrastructure Automation para transformar
              insights de red en acciones automatizadas, reduciendo MTTR y acelerando la activación
              de servicios.
            </p>
            <ul className="space-y-3">
              {sanoFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--color-accent)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-12 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60 p-6 md:mt-16 md:p-8">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
            Flujo extremo a extremo
          </p>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {pipeline.map((step, i) => (
              <div key={step} className="flex flex-1 items-center gap-3">
                <div className="flex flex-1 items-center gap-3 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] px-4 py-3">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-medium">{step}</span>
                </div>
                {i < pipeline.length - 1 && (
                  <ChevronRight className="hidden h-4 w-4 flex-none text-[color:var(--color-accent)] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
