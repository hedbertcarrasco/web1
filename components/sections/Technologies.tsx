import { Section } from "@/components/ui/section";
import { technologies } from "@/lib/site-config";

const groups = technologies.reduce<Record<string, string[]>>((acc, t) => {
  if (!acc[t.group]) acc[t.group] = [];
  acc[t.group].push(t.name);
  return acc;
}, {});

export function Technologies() {
  return (
    <Section
      id="tecnologias"
      eyebrow="Tecnologías"
      title="El stack que hemos puesto en producción."
      description="Estas son las tecnologías con experiencia directa — no una lista de logos para llenar espacio."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(groups).map(([group, names]) => (
          <div
            key={group}
            className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/50 p-6 transition-colors hover:border-[color:var(--color-accent)]/40"
          >
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
              {group}
            </p>
            <ul className="flex flex-wrap gap-2">
              {names.map((name) => (
                <li
                  key={name}
                  className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] px-3 py-1.5 font-mono text-xs tracking-wide text-[color:var(--color-text)]"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
