export default function CartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M15 20H25L35 65H80L88 35H30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="42" cy="82" r="6" stroke="currentColor" strokeWidth="3" />
      <circle cx="72" cy="82" r="6" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
