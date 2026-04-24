import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Cable, Cloud, GaugeCircle, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Cable,
    title: "Expertise multivendor",
    desc: "Cisco, Juniper, Arista, Huawei, F5, Palo Alto, SD-WAN. Modelamos la heterogeneidad sin atajos.",
  },
  {
    icon: Cloud,
    title: "Híbrido real",
    desc: "Observabilidad que abarca on-premise, colocation y cloud pública. Sin puntos ciegos entre WAN, DC y nube.",
  },
  {
    icon: ShieldCheck,
    title: "Partner IBM",
    desc: "Certificaciones vigentes en SevOne NPM y SANO, alineados con la roadmap oficial del producto.",
  },
  {
    icon: GaugeCircle,
    title: "SLA medibles",
    desc: "Indicadores NetOps claros (MTTD, MTTR, disponibilidad), reportados mensualmente al negocio.",
  },
];

export function Differentiators() {
  return (
    <Section
      id="diferenciadores"
      eyebrow="Por qué Lumynar"
      title={
        <>
          No vendemos herramientas. Operamos{" "}
          <span className="text-[color:var(--color-accent)]">disponibilidad</span>.
        </>
      }
      description="Cuatro pilares que explican por qué grandes operadores confían su red en nosotros."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <Card key={title} interactive className="flex gap-5 p-8">
            <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] text-[color:var(--color-accent)]">
              <Icon className="h-6 w-6" strokeWidth={1.6} />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="text-[color:var(--color-text-muted)]">{desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
