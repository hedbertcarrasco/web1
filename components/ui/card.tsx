import { cn } from "@/lib/utils";
import * as React from "react";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }
>(({ className, interactive, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60 p-6 backdrop-blur-sm",
      interactive &&
        "transition-all hover:border-[color:var(--color-accent)]/40 hover:bg-[color:var(--color-surface)] hover:-translate-y-0.5",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";
