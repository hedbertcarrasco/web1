import { Section } from "@/components/ui/section";
import { Banknote, Building2, Factory, Landmark, Radio, ShoppingBag } from "lucide-react";

const industries = [
  {
    icon: Radio,
    title: "Telco & ISP",
    desc: "Backbones, IP, MPLS, BNG y servicios B2B monitoreados a gran escala.",
  },
  {
    icon: Banknote,
    title: "Banca & seguros",
    desc: "Disponibilidad de canales, compliance y visibilidad de tráfico crítico.",
  },
  {
    icon: Factory,
    title: "Energía & minería",
    desc: "Redes OT/IT, enlaces satelitales, sitios remotos con alta criticidad.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Cientos de tiendas, POS, SD-WAN y experiencia de cliente digital.",
  },
  {
    icon: Landmark,
    title: "Gobierno",
    desc: "Servicios ciudadanos digitales con SLA estrictos y soberanía de datos.",
  },
  {
    icon: Building2,
    title: "Enterprise",
    desc: "Corporativos con DC propios, nube híbrida y operación 24/7.",
  },
];

export function Industries() {
  return (
    <Section
      id="industrias"
      eyebrow="Industrias"
      title="Arquitecturas distintas, exigencia operacional parecida."
      description="Adaptamos la plataforma a la realidad de cada vertical, priorizando los KPIs que mueven la aguja del negocio."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group flex items-start gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 p-5 transition-all hover:border-[color:var(--color-accent)]/40 hover:bg-[color:var(--color-surface)]"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[color:var(--color-surface-2)] text-[color:var(--color-accent)]">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="mb-1 text-base font-semibold">{title}</h3>
              <p className="text-sm text-[color:var(--color-text-muted)]">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
