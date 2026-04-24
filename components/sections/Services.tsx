import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Activity, Cable, Cloud, Network, Shield, Sliders } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Arquitectura y diseño de red",
    desc: "Topologías LAN/WAN/DC, enrutamiento dinámico (BGP, OSPF), alta disponibilidad local y geográfica. Diseños documentados en HLD listos para implementación.",
  },
  {
    icon: Shield,
    title: "Seguridad perimetral (NGFW)",
    desc: "Diseño e implementación de Fortinet y Palo Alto: políticas, segmentación, IPS, filtrado web. Hardening alineado con CIS Controls.",
  },
  {
    icon: Cable,
    title: "VPN y conectividad híbrida",
    desc: "VPN sitio a sitio y acceso remoto (IPSec, SSL), interconexión con AWS y Azure, publicación segura de servicios, gestión de HA.",
  },
  {
    icon: Activity,
    title: "Observabilidad de red",
    desc: "Especialización en IBM SevOne NPM y el portafolio IBM Network Management. Casos de uso de visibilidad multivendor y telemetría correlacionada.",
  },
  {
    icon: Sliders,
    title: "Endpoint y detección",
    desc: "EDR/XDR en producción (Cortex XDR), definición de casos de uso, acompañamiento de respuesta a incidentes y ajuste continuo de detecciones.",
  },
  {
    icon: Cloud,
    title: "Asesoría y preventa",
    desc: "Assessments de seguridad, Discovery, PoV/PoC, HLD y soporte RFP/RFI. Traducimos requisitos de negocio en arquitecturas técnicas viables.",
  },
];

export function Services() {
  return (
    <Section
      id="servicios"
      eyebrow="Servicios"
      title={
        <>
          Seis capacidades para proyectos de{" "}
          <span className="text-[color:var(--color-accent)]">red y seguridad</span>.
        </>
      }
      description="Cubrimos el ciclo completo — desde el assessment y el diseño hasta la implementación y el acompañamiento en operación."
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
