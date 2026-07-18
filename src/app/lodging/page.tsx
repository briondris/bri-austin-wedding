export default function Lodging() {
  const stays = [
    {
      name: "Whaleback Inn",
      distance: "8 minutes from Foxglove Farm",
      description:
        "Cozy rooms overlooking Lake Michigan, walkable to downtown Leland.",
    },
    {
      name: "Anchor Inn",
      distance: "12 minutes from Foxglove Farm",
      description:
        "Classic lakeside charm with a private dock and quiet, wooded grounds.",
    },
  ];

  return (
    <main className="bg-cream min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-3">
          For Our Guests
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-stone-800">
          Where to <span className="italic text-rosemary">Stay</span>
        </h1>
        <p className="text-lg text-stone-600 mt-6 max-w-lg mx-auto">
          We&apos;ve held room blocks at a couple of our favorite spots on the
          Leelanau Peninsula, both a short drive from Foxglove Farm.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {stays.map((stay) => (
          <div
            key={stay.name}
            className="border border-rosemary/30 rounded-sm p-8 bg-white/40"
          >
            <h2 className="font-display text-3xl text-stone-800 mb-2">
              {stay.name}
            </h2>
            <p className="text-xs uppercase tracking-widest text-terracotta mb-4">
              {stay.distance}
            </p>
            <p className="text-base text-stone-600 leading-relaxed">
              {stay.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
