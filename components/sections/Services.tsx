import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Activity, BookOpen, GraduationCap, Radar, Shield, Workflow } from "lucide-react";

const services = [
  {
    icon: Radar,
    title: "Observabilidad de red",
    desc: "Instrumentación de infraestructura multivendor, visibilidad end-to-end y correlación de performance con experiencia de aplicación.",
  },
  {
    icon: Activity,
    title: "Implementación IBM SevOne NPM",
    desc: "Deployments y upgrades de SevOne NPM 7.2, modelamiento de inventario, dashboards y alertas operacionales listas para NetOps.",
  },
  {
    icon: Shield,
    title: "NOC 24/7 gestionado",
    desc: "Operación continua con SLA, detección proactiva, triage y coordinación con tus equipos on-call para cerrar incidentes más rápido.",
  },
  {
    icon: BookOpen,
    title: "Consultoría NetOps",
    desc: "Assessment de madurez, diseño de arquitectura de telemetría, definición de KPIs y runbooks para capacidad y disponibilidad.",
  },
  {
    icon: Workflow,
    title: "Automatización con SANO",
    desc: "IBM SevOne Automated Network Observability + Rapid Infrastructure Automation: de insights a acciones en producción.",
  },
  {
    icon: GraduationCap,
    title: "Enablement y capacitación",
    desc: "Transferencia de conocimiento hands-on para tus ingenieros de red y equipos de operaciones, con casos reales.",
  },
];

export function Services() {
  return (
    <Section
      id="servicios"
      eyebrow="Servicios"
      title={
        <>
          Seis capacidades que cubren todo el{" "}
          <span className="text-[color:var(--color-accent)]">lifecycle de observabilidad</span>.
        </>
      }
      description="Desde el primer assessment hasta la operación continua, acompañamos a equipos NetOps de enterprise, telco y MSPs."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <Card key={title} interactive>
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] text-[color:var(--color-accent)] transition-colors group-hover:border-[color:var(--color-accent)]/50">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="text-sm text-[color:var(--color-text-muted)]">{desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
