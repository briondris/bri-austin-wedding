import SpotLinks, { Spot } from "./SpotLinks";

export default function StayCard({ spot }: { spot: Spot }) {
  return (
    <div className="border-2 border-rosemary/30 rounded-sm p-6 md:p-8">
      <h3 className="font-display text-3xl md:text-4xl text-stone-800 mb-2">
        {spot.name}
      </h3>
      {spot.description && (
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
          {spot.description}
        </p>
      )}
      <SpotLinks spot={spot} />
    </div>
  );
}
