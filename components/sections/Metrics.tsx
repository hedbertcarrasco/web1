"use client";

import { metrics } from "@/lib/site-config";
import { useEffect, useRef, useState } from "react";

function formatValue(value: number, decimals?: number, format?: "compact") {
  if (format === "compact") {
    return new Intl.NumberFormat("es-CL", { notation: "compact", maximumFractionDigits: 1 }).format(
      value,
    );
  }
  return new Intl.NumberFormat("es-CL", {
    minimumFractionDigits: decimals ?? 0,
    maximumFractionDigits: decimals ?? 0,
  }).format(value);
}

function Counter({
  value,
  decimals,
  format,
  suffix,
  active,
}: {
  value: number;
  decimals?: number;
  format?: "compact";
  suffix: string;
  active: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCurrent(value);
      return;
    }
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setCurrent(value * eased);
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [active, value]);

  return (
    <span>
      {formatValue(current, decimals, format)}
      <span className="text-[color:var(--color-accent)]">{suffix}</span>
    </span>
  );
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40">
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-2">
            <div className="font-mono text-3xl font-semibold tracking-tight text-[color:var(--color-text)] md:text-4xl">
              <Counter
                value={m.value}
                decimals={m.decimals}
                format={m.format}
                suffix={m.suffix}
                active={active}
              />
            </div>
            <p className="text-xs text-[color:var(--color-text-muted)] md:text-sm">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
