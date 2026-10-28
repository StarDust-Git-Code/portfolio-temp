export function StarLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* 4 Cardinal Diamond Spikes */}
      <polygon points="16,1 17.8,11.5 16,12.5 14.2,11.5" />
      <polygon points="16,31 17.8,20.5 16,19.5 14.2,20.5" />
      <polygon points="1,16 11.5,17.8 12.5,16 11.5,14.2" />
      <polygon points="31,16 20.5,17.8 19.5,16 20.5,14.2" />
      {/* 4 Diagonal Diamond Spikes */}
      <polygon points="5.4,5.4 12.8,11.5 12.2,12.8 11,12" />
      <polygon points="26.6,5.4 21,12 19.8,12.8 19.2,11.5" />
      <polygon points="5.4,26.6 11,20 12.2,19.2 12.8,20.5" />
      <polygon points="26.6,26.6 19.2,20.5 19.8,19.2 21,20" />
      {/* Central ring */}
      <circle
        cx="16"
        cy="16"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

