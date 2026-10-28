/**
 * IA monogram — circuit-trace construction with via pads.
 * Uses currentColor so it adapts to any context.
 */
export function IaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* copper traces */}
      <g
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M13.5 16.9 V48.1" />
        <path d="M31.7 48.6 L45 12 L58.3 48.6" />
        <path d="M35 39.5 H40.2 M49.8 39.5 H55" />
      </g>
      {/* via pads + crossbar test point (glints on parent group-hover) */}
      <g className="via-pads" stroke="currentColor" strokeWidth="3" fill="none">
        <circle cx="13.5" cy="12" r="3.4" />
        <circle cx="13.5" cy="53" r="3.4" />
        <circle cx="30" cy="53" r="3.4" />
        <circle cx="60" cy="53" r="3.4" />
        <circle cx="45" cy="39.5" r="3.2" />
      </g>
    </svg>
  );
}
