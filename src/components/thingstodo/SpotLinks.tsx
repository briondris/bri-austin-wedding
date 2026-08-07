export interface Spot {
  name: string;
  description?: string;
  website?: string;
  mapQuery?: string;
}

export default function SpotLinks({
  spot,
  tone,
}: {
  spot: Spot;
  tone: "light" | "dark";
}) {
  const base =
    tone === "light"
      ? "border-cream/60 text-cream hover:bg-cream hover:text-terracotta"
      : "border-stone-400 text-stone-700 hover:bg-stone-800 hover:text-cream";

  if (!spot.website && !spot.mapQuery) return null;

  return (
    <div className="flex gap-2 mt-1 mb-1">
      {spot.website && (
        <a
          href={spot.website}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-sans text-xs uppercase tracking-wide border rounded-full px-3 py-1 transition-colors ${base}`}
        >
          Website
        </a>
      )}
      {spot.mapQuery && (
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            spot.mapQuery
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-sans text-xs uppercase tracking-wide border rounded-full px-3 py-1 transition-colors ${base}`}
        >
          Map
        </a>
      )}
    </div>
  );
}
