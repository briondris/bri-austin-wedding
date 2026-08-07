export default function BikeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="25" cy="70" r="15" stroke="currentColor" strokeWidth="3" />
      <circle cx="75" cy="70" r="15" stroke="currentColor" strokeWidth="3" />
      <path
        d="M25 70L45 35H60M45 35L60 70H75M45 35L35 25H25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
