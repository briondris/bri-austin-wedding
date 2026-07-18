export default function ThingsToDo() {
  const activities = [
    {
      name: "Sleeping Bear Dunes National Lakeshore",
      tag: "Nature",
      description:
        "35 miles of dune bluffs towering over Lake Michigan — hike the Dune Climb, catch the sunset from the Lake Michigan Overlook, or drive the Pierce Stocking Scenic Drive.",
      url: "https://www.nps.gov/slbe/",
      linkLabel: "Plan Your Visit",
    },
    {
      name: "Downtown Leland (Fishtown)",
      tag: "Shopping & Dining",
      description:
        "Historic fishing shanties turned shops, galleries, and waterside restaurants. Easy walking, good coffee, and a great spot to pick up something small to bring home.",
      url: "https://www.leelanau.com/fishtown",
      linkLabel: "Explore Fishtown",
    },
    {
      name: "Leland Public Beach",
      tag: "Beach Day",
      description:
        "A short walk from Fishtown, with clear water and a quieter local feel than some of the busier stretches nearby. Great for an easy afternoon.",
      url: "https://maps.google.com/?q=Leland+Public+Beach+MI",
      linkLabel: "Get Directions",
    },
    {
      name: "Aurora Cellars",
      tag: "Wine Tasting",
      description:
        "A beautiful vineyard on the peninsula with sweeping views over the rolling hills. Worth planning an afternoon around, especially if the weather's good.",
      url: "https://www.auroracellars.com/",
      linkLabel: "Visit the Vineyard",
    },
  ];

  return (
    <main className="bg-cream min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="font-sans font-semibold text-base md:text-lg uppercase tracking-[0.3em] text-terracotta mb-4">
          Leelanau Peninsula
        </p>
        <h1 className="font-display text-6xl md:text-7xl text-stone-800">
          Things <span className="italic text-rosemary">To Do</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-lg mx-auto mt-6 leading-relaxed">
          If you&apos;re making a weekend of it, here are a few of our favorite
          spots nearby.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {activities.map((activity) => (
          <div
            key={activity.name}
            className="border border-rosemary/30 rounded-sm p-8 bg-white/40 flex flex-col"
          >
            <span className="font-sans font-semibold text-xs uppercase tracking-widest text-terracotta mb-3">
              {activity.tag}
            </span>
            <h2 className="font-display text-3xl text-stone-800 mb-3">
              {activity.name}
            </h2>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-6 flex-1">
              {activity.description}
            </p>
            <a
              href={activity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-semibold inline-block bg-rosemary text-cream px-6 py-3 text-sm uppercase tracking-wide rounded-sm hover:bg-terracotta transition-colors self-start"
            >
              {activity.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
