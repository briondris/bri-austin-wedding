export default function MountainIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M10 75L35 30L50 55L60 40L90 75"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="72" cy="25" r="6" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
