export default function CarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M12 60L20 35C22 30 26 27 31 27H69C74 27 78 30 80 35L88 60"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="8"
        y="60"
        width="84"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle cx="28" cy="78" r="8" stroke="currentColor" strokeWidth="3" />
      <circle cx="72" cy="78" r="8" stroke="currentColor" strokeWidth="3" />
      <line
        x1="16"
        y1="50"
        x2="84"
        y2="50"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}
