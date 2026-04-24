import { AwsLogo, AzureLogo, IbmLogo } from "@/components/brand/VendorLogos";
import type { ComponentType } from "react";
import { SiCisco, SiFortinet, SiPaloaltonetworks, SiVmware } from "react-icons/si";

type IconProps = { className?: string };
type Vendor = { name: string; Icon: ComponentType<IconProps> };

const vendors: Vendor[] = [
  { name: "IBM", Icon: IbmLogo },
  { name: "Fortinet", Icon: SiFortinet as ComponentType<IconProps> },
  { name: "Palo Alto Networks", Icon: SiPaloaltonetworks as ComponentType<IconProps> },
  { name: "Cisco", Icon: SiCisco as ComponentType<IconProps> },
  { name: "AWS", Icon: AwsLogo },
  { name: "Azure", Icon: AzureLogo },
  { name: "VMware", Icon: SiVmware as ComponentType<IconProps> },
];

function VendorItem({ name, Icon }: Vendor) {
  return (
    <li className="flex shrink-0 items-center gap-3 text-[color:var(--color-text-muted)] transition-colors hover:text-[color:var(--color-accent)]">
      <Icon className="h-8 w-auto" />
      <span className="font-mono text-sm tracking-wide">{name}</span>
    </li>
  );
}

export function VendorsTicker() {
  // Each ul repeats the vendor list 3 times so a single copy is wide
  // enough to span any realistic viewport. Two identical uls side by
  // side then translate by -50% for a seamless loop.
  const innerCopies = [0, 1, 2];

  return (
    <section
      aria-label="Vendors con los que hemos trabajado"
      className="relative border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)]/30"
    >
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <p className="text-center font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--color-text-muted)]">
          Tecnologías que hemos operado
        </p>
      </div>
      <div className="mask-fade-x overflow-hidden py-8">
        <div className="marquee-track flex w-max">
          <ul className="flex shrink-0 items-center gap-16 pr-16">
            {innerCopies.flatMap((c) =>
              vendors.map((v) => (
                <VendorItem key={`a-${c}-${v.name}`} name={v.name} Icon={v.Icon} />
              )),
            )}
          </ul>
          <ul className="flex shrink-0 items-center gap-16 pr-16" aria-hidden="true">
            {innerCopies.flatMap((c) =>
              vendors.map((v) => (
                <VendorItem key={`b-${c}-${v.name}`} name={v.name} Icon={v.Icon} />
              )),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
