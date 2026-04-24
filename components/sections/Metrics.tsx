import { signals } from "@/lib/site-config";

export function Metrics() {
  return (
    <section className="relative border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        {signals.map((s) => (
          <div key={s.k} className="flex flex-col gap-2">
            <div className="font-mono text-2xl font-semibold tracking-tight text-[color:var(--color-accent)] md:text-3xl">
              {s.k}
            </div>
            <p className="text-sm text-[color:var(--color-text-muted)]">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
