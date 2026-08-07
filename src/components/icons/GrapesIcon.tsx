export default function GrapesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 20V32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 20C45 15 40 18 42 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="38" cy="40" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="62" cy="40" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="35" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="30" cy="55" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="55" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="70" cy="55" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="40" cy="72" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="60" cy="72" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="86" r="9" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
