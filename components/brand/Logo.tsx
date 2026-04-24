import { cn } from "@/lib/utils";

type Props = { className?: string; withWordmark?: boolean };

export function Logo({ className, withWordmark = true }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)} aria-label="Lumynar">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <title>Lumynar</title>
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeOpacity="0.25" />
        <circle cx="16" cy="16" r="9" stroke="currentColor" strokeOpacity="0.5" />
        <circle cx="16" cy="16" r="4.5" fill="currentColor" />
        <circle cx="16" cy="16" r="2" fill="#0A0E1A" />
      </svg>
      {withWordmark && (
        <span className="font-sans text-lg font-semibold tracking-tight">Lumynar</span>
      )}
    </div>
  );
}
