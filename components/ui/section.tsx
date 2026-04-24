import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type * as React from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: Props) {
  return (
    <section id={id} className={cn("relative py-16 md:py-24", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={cn(
            "mb-10 flex flex-col gap-4 md:mb-12",
            align === "center" && "items-center text-center",
          )}
        >
          {eyebrow && <Badge>{eyebrow}</Badge>}
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl text-balance text-base text-[color:var(--color-text-muted)] md:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
