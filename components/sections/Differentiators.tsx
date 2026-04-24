import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Cable, Compass, Layers, Users } from "lucide-react";

const pillars = [
  {
    icon: Cable,
    title: "Experiencia multivendor real",
    desc: "Fortinet, Palo Alto, IBM, Cortex, AWS, Azure. Sabemos dónde duele cada stack porque los hemos operado en proyectos concretos.",
  },
  {
    icon: Layers,
    title: "Tres capas en una sola conversación",
    desc: "Red, seguridad y observabilidad se piensan juntas. Evitas el típico pasamanos entre el ingeniero de red, el de firewall y el de monitoreo.",
  },
  {
    icon: Compass,
    title: "Metodología de preventa técnica",
    desc: "Discovery, PoV/PoC, HLD, RFP/RFI. Llegas a la decisión con evidencia técnica documentada, no con promesas de brochure.",
  },
  {
    icon: Users,
    title: "Trato directo",
    desc: "Consultoría boutique: hablas con el ingeniero que diseña, no con capas intermedias. Priorizamos pocos proyectos bien hechos.",
  },
];

export function Differentiators() {
  return (
    <Section
      id="enfoque"
      eyebrow="Enfoque"
      title={
        <>
          No somos una agencia.{" "}
          <span className="text-[color:var(--color-accent)]">Somos ingeniería aplicada.</span>
        </>
      }
      description="Cuatro principios que guían cómo abordamos cada proyecto de redes y seguridad."
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
