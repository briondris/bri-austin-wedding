"use client";

interface CheckboxProps {
  name?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export default function Checkbox({
  name,
  checked,
  onChange,
  children,
  className = "",
}: CheckboxProps) {
  return (
    <label
      className={`font-sans text-sm md:text-base text-stone-700 flex items-center gap-3 cursor-pointer group ${className}`}
    >
      <span className="relative inline-flex shrink-0 w-5 h-5 md:w-6 md:h-6">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer sr-only"
        />
        <span
          className="absolute inset-0 rounded-sm border-2 border-rosemary/40 bg-white/60
                     peer-checked:border-rosemary
                     peer-focus-visible:ring-2 peer-focus-visible:ring-rosemary/40
                     transition-colors"
        />
        <svg
          className="absolute inset-0 m-auto w-3.5 h-3.5 md:w-4 md:h-4 text-rosemary opacity-0 peer-checked:opacity-100 transition-opacity"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17L4 12" />
        </svg>
      </span>
      <span>{children}</span>
    </label>
  );
}
