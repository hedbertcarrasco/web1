import { cn } from "@/lib/utils";
import type * as React from "react";

export function Badge({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-text-muted)]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function LiveDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-1.5 w-1.5", className)} aria-hidden="true">
      <span className="absolute inset-0 rounded-full bg-[color:var(--color-accent)] opacity-80 pulse-ring" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
    </span>
  );
}
