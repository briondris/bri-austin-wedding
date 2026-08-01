import { features } from "@/config/features";
import ComingSoon from "@/components/ComingSoon";

export default function Details() {
  if (!features.details) {
    return <ComingSoon pageName="Details " />;
  }

  return (
    <main className="bg-cream min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="font-sans font-semibold text-base md:text-lg uppercase tracking-[0.3em] text-terracotta mb-4">
          For Our Guests
        </p>
        <h1 className="font-display text-6xl md:text-7xl text-stone-800">
          Wedding <span className="italic text-rosemary">Details</span>
        </h1>
      </div>

      {/* What to Wear */}
      <section className="max-w-2xl mx-auto mb-24">
        <h2 className="font-display text-4xl md:text-5xl text-stone-800 mb-6 text-center">
          What to Wear
        </h2>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed text-center mb-6">
          Garden formal. Think summer wedding, not black tie — you don&apos;t
          need to buy anything new on our account. Cocktail dresses, floaty
          summer gowns, linen suits, whatever makes you feel good in late-July
          Michigan warmth.
        </p>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed text-center">
          The ceremony is on grass, so flat shoes or wedges are your friend over
          stilettos.
        </p>
      </section>

      {/* Colors */}
      <section className="max-w-2xl mx-auto mb-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-stone-800 mb-4">
          Our Wedding Colors
        </h2>
        <p className="text-lg md:text-xl text-stone-600 max-w-lg mx-auto mb-10 leading-relaxed">
          Not required, but if you&apos;d like your outfit to feel right at home
          in the photos, here&apos;s our palette for the day.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-2xl mx-auto">
          {[
            { name: "Lavender", className: "bg-lavender" },
            { name: "Sage Green", className: "bg-sage" },
            { name: "Rosemary", className: "bg-rosemary" },
            { name: "Mustard", className: "bg-mustard" },
            { name: "Butter Yellow", className: "bg-butter" },
          ].map((color) => (
            <div key={color.name} className="flex flex-col items-center gap-3">
              <div
                className={`w-16 h-16 rounded-full ${color.className} border border-stone-200 shadow-sm`}
              />
              <span className="font-sans text-sm uppercase tracking-wide text-stone-600">
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What to Pack */}
      <section className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-stone-800 mb-6 text-center">
          What to Pack
        </h2>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed text-center mb-10">
          We&apos;re on the Leelanau Peninsula in the middle of summer — sun,
          water, and a little bit of everything. A few things worth throwing in
          your bag:
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl mx-auto text-left">
          {[
            "Bathing suit — beaches and lake days are very on the table",
            "Sunscreen (Michigan sun is stronger than people expect)",
            "A light layer for evenings by the water",
            "Comfortable shoes for walking around Leland",
            "A reusable water bottle",
            "An open mind for wine tasting",
          ].map((item) => (
            <li
              key={item}
              className="text-lg text-stone-600 leading-relaxed flex gap-3"
            >
              <span className="text-terracotta">—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
