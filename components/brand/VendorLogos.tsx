type Props = { className?: string };

export function IbmLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 72 32"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>IBM</title>
      <text
        x="36"
        y="24"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
        fontWeight="900"
        fontSize="28"
        letterSpacing="-1"
      >
        IBM
      </text>
    </svg>
  );
}

export function AwsLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 72 32"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>AWS</title>
      <text
        x="36"
        y="18"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
        fontWeight="800"
        fontSize="20"
        letterSpacing="-0.5"
      >
        aws
      </text>
      <path
        d="M 14 26 Q 36 32 58 26"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M 55 24 L 60 27 L 57 29 Z" />
    </svg>
  );
}

export function AzureLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 108 32"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Microsoft Azure</title>
      <path d="M 14 4 L 26 24 L 16 24 L 10 14 L 4 24 Z" />
      <text
        x="34"
        y="23"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        fontWeight="600"
        fontSize="20"
        letterSpacing="-0.5"
      >
        Azure
      </text>
    </svg>
  );
}
