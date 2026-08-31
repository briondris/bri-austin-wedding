export interface Spot {
  name: string;
  description?: string;
  website?: string;
  mapQuery?: string;
}

export default function SpotLinks({ spot }: { spot: Spot }) {
  if (!spot.website && !spot.mapQuery) return null;

  return (
    <div className="flex gap-2 mt-3">
      {spot.website && (
        <a
          href={spot.website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs uppercase tracking-wide border border-olive/40 text-olive rounded-full px-3 py-1 hover:bg-olive hover:text-cream transition-colors"
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
          className="font-sans text-xs uppercase tracking-wide border border-olive/40 text-olive rounded-full px-3 py-1 hover:bg-olive hover:text-cream transition-colors"
        >
          Map
        </a>
      )}
    </div>
  );
}
