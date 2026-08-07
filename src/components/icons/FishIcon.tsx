export default function FishIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M15 50C15 35 35 25 55 25C70 25 85 35 90 50C85 65 70 75 55 75C35 75 15 65 15 50Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M15 50L5 40M15 50L5 60"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="65" cy="42" r="3" fill="currentColor" />
    </svg>
  );
}
