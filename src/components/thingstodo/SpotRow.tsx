import SpotLinks, { Spot } from "./SpotLinks";

export default function SpotRow({
  spot,
  tone,
}: {
  spot: Spot;
  tone: "light" | "dark";
}) {
  return (
    <div>
      <p
        className={`text-lg md:text-xl leading-relaxed ${
          tone === "light" ? "text-cream/90" : "text-stone-600"
        }`}
      >
        <span
          className={`font-sans font-semibold ${
            tone === "light" ? "text-cream" : "text-stone-800"
          }`}
        >
          {spot.name}
        </span>
        {spot.description && ` — ${spot.description}`}
      </p>
      <SpotLinks spot={spot} tone={tone} />
    </div>
  );
}
