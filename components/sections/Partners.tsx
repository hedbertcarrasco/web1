const partners = [
  "IBM",
  "SevOne",
  "Red Hat",
  "Cisco",
  "Juniper",
  "Arista",
  "F5",
  "Palo Alto",
  "Fortinet",
  "VMware",
  "AWS",
  "Azure",
];

export function Partners() {
  return (
    <section className="relative border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)]/30">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--color-text-muted)]">
          Ecosistema de partners y tecnologías soportadas
        </p>
        <div className="mask-fade-x overflow-hidden">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {partners.map((name) => (
              <li
                key={name}
                className="font-mono text-sm tracking-[0.2em] text-[color:var(--color-text-muted)] transition-colors hover:text-[color:var(--color-accent)] md:text-base"
              >
                {name.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
