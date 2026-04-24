import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[color:var(--color-accent)] text-[#0A0E1A] hover:bg-[color:var(--color-accent-soft)] hover:shadow-[0_10px_40px_-10px_rgba(0,229,199,0.6)]",
        secondary:
          "border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)]/70 text-[color:var(--color-text)] backdrop-blur hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]",
        ghost: "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);
Button.displayName = "Button";
