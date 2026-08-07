export default function WaveIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M10 35C20 25 30 25 40 35C50 45 60 45 70 35C80 25 90 25 90 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 55C20 45 30 45 40 55C50 65 60 65 70 55C80 45 90 45 90 55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 75C20 65 30 65 40 75C50 85 60 85 70 75C80 65 90 65 90 75"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
