// src/components/icons/CalendarIcon.tsx

export default function CalendarIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Calendar body */}
      <rect
        x="16"
        y="23"
        width="68"
        height="62"
        rx="9"
        stroke="currentColor"
        strokeWidth="3.5"
      />

      {/* Header divider */}
      <path
        d="M16 42H84"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Left binder */}
      <rect
        x="27"
        y="14"
        width="9"
        height="20"
        rx="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      />

      {/* Right binder */}
      <rect
        x="64"
        y="14"
        width="9"
        height="20"
        rx="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      />

      {/* Date marks */}
      <path
        d="M29 55H34"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M47.5 55H52.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M66 55H71"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M29 68H34"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M47.5 68H52.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M66 68H71"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
