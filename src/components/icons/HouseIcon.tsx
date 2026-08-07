export default function HouseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 10L4 48H16V90H84V48H96Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="42"
        y="62"
        width="16"
        height="28"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect
        x="24"
        y="56"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <line
        x1="31"
        y1="56"
        x2="31"
        y2="70"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="24"
        y1="63"
        x2="38"
        y2="63"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
