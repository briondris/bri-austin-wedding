export default function CategoryLabel({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "light" | "dark";
}) {
  return (
    <p
      className={`font-sans font-semibold text-xs uppercase tracking-[0.25em] mb-3 ${
        tone === "light" ? "text-cream/70" : "text-terracotta"
      }`}
    >
      {children}
    </p>
  );
}
