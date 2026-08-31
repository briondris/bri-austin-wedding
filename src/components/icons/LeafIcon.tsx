// src/components/icons/LeafIcon.tsx

export default function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center stem */}
      <path
        d="M50 86V28"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top leaf */}
      <path
        d="M50 30
           C41 22 42 12 50 5
           C58 12 59 22 50 30Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Upper left leaf */}
      <path
        d="M49 45
           C38 43 30 35 29 24
           C40 27 47 34 49 45Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Upper right leaf */}
      <path
        d="M51 45
           C62 43 70 35 71 24
           C60 27 53 34 51 45Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lower left leaf */}
      <path
        d="M49 67
           C35 64 25 54 23 41
           C37 44 46 53 49 67Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lower right leaf */}
      <path
        d="M51 67
           C65 64 75 54 77 41
           C63 44 54 53 51 67Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom left leaf */}
      <path
        d="M50 85
           C37 82 29 74 27 63
           C39 65 47 73 50 85Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom right leaf */}
      <path
        d="M50 85
           C63 82 71 74 73 63
           C61 65 53 73 50 85Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
