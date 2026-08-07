// src/components/icons/SailboatIcon.tsx
export default function SailboatIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <line
        x1="50"
        y1="8"
        x2="50"
        y2="62"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M50 12L78 55H50Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M50 24L30 55H50Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 65H84L73 82H27Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 92C19 85 27 85 38 92C49 99 56 99 67 92C78 85 86 85 90 92"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
