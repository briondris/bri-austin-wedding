export default function CityIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M15 85V40L30 30V85M30 50H15M30 65H15M45 85V25L60 15V85M60 40H45M60 55H45M60 70H45M75 85V50L85 45V85"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
