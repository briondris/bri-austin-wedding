function AnchorIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="20" r="8" stroke="currentColor" strokeWidth="3" />
      <path
        d="M50 28V80"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M30 40H70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 55C20 70 35 82 50 82C65 82 80 70 80 55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HouseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 10L4 48H16V90H84V48H96Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="42"
        y="62"
        width="16"
        height="28"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect
        x="24"
        y="56"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <line
        x1="31"
        y1="56"
        x2="31"
        y2="70"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="24"
        y1="63"
        x2="38"
        y2="63"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function PlaneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 10L58 40L88 50L58 55L50 90L42 55L12 50L42 40L50 10Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon({ className = "" }: { className?: string }) {
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

interface Spot {
  name: string;
  description?: string;
  website?: string;
  mapQuery?: string;
}

function SpotLinks({ spot }: { spot: Spot }) {
  if (!spot.website && !spot.mapQuery) return null;

  return (
    <div className="flex gap-2 mt-3">
      {spot.website && (
        <a
          href={spot.website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs uppercase tracking-wide border border-rosemary/40 text-rosemary rounded-full px-3 py-1 hover:bg-rosemary hover:text-cream transition-colors"
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
          className="font-sans text-xs uppercase tracking-wide border border-rosemary/40 text-rosemary rounded-full px-3 py-1 hover:bg-rosemary hover:text-cream transition-colors"
        >
          Map
        </a>
      )}
    </div>
  );
}

function StayCard({ spot }: { spot: Spot }) {
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

function SectionDivider() {
  return (
    <div className="max-w-5xl mx-auto border-t-2 border-terracotta/20 my-16" />
  );
}

const jumpLinks = [
  { id: "anchor-inn", label: "Anchor Inn" },
  { id: "airbnb", label: "Airbnb & VRBO" },
  { id: "leland", label: "Leland" },
  { id: "suttons-bay", label: "Suttons Bay & Northport" },
  { id: "logistics", label: "Logistics" },
];

export default function Lodging() {
  const leland: Spot[] = [
    {
      name: "Falling Waters Lodge",
      website: "https://www.fallingwaterslodge.com/",
      mapQuery: "Falling Waters Lodge Leland MI",
    },
    {
      name: "The Leland Lodge",
      website: "https://www.lelandlodge.com/",
      mapQuery: "The Leland Lodge Leland MI",
    },
  ];

  const suttonsBayNorthport: Spot[] = [
    {
      name: "Suttons Bay Harbor House",
      website: "https://www.suttonsbayharborhouse.com/",
      mapQuery: "Suttons Bay Harbor House Suttons Bay MI",
    },
    {
      name: "Sunrise Landing",
      website: "http://www.sunriselanding.com/",
      mapQuery: "Sunrise Landing Northport MI",
    },
  ];

  const groceries: Spot[] = [
    {
      name: "Hansen Foods",
      description: "Local grocery store right in Suttons Bay",
      mapQuery: "Hansen Foods Suttons Bay MI",
    },
    {
      name: "Leland Mercantile Co",
      description: "Great local grocery option in Leland",
      mapQuery: "Leland Mercantile Co Leland MI",
    },
    {
      name: "Tom's Food Market — Northport",
      description:
        "Great local grocery, closest to the Suttons Bay / Northport area",
      mapQuery: "Tom's Food Market Northport MI",
    },
    {
      name: "Tom's Food Market — Traverse City",
      description:
        "Beloved local grocer, a Traverse City favorite for over 80 years",
      mapQuery: "Tom's Food Market Traverse City MI",
    },
    {
      name: "Costco — Traverse City",
      description:
        "125 E South Airport Rd — good for stocking up if your group needs bulk supplies",
      mapQuery: "Costco 125 E South Airport Rd Traverse City MI",
    },
  ];

  return (
    <main className="bg-cream min-h-screen">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center px-6 pt-24 pb-10">
        <p className="font-sans font-semibold text-base md:text-lg uppercase tracking-[0.3em] text-terracotta mb-4">
          For Our Guests
        </p>
        <h1 className="font-display text-6xl md:text-7xl text-stone-800">
          Where to <span className="italic text-rosemary">Stay</span>
        </h1>
        <p className="font-sans text-xl md:text-2xl text-stone-600 mt-6 max-w-lg mx-auto leading-relaxed">
          We&apos;ve rounded up our favorite spots on the Leelanau Peninsula,
          all a short drive from Foxglove Farm.
        </p>
      </div>

      {/* Jump nav */}
      <nav className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-y border-terracotta/20 py-4 mb-16">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 px-6">
          {jumpLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-sans font-semibold text-sm uppercase tracking-widest text-stone-600 hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Anchor Inn */}
      <section
        id="anchor-inn"
        className="max-w-5xl mx-auto px-6 md:px-16 scroll-mt-20"
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start border-2 border-terracotta/30 rounded-sm p-8 md:p-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <AnchorIcon className="w-24 h-24 text-terracotta" />
            <h2 className="font-display text-5xl text-stone-800">Anchor Inn</h2>
          </div>
          <div>
            <p className="font-sans font-semibold text-xl md:text-2xl text-terracotta mb-3">
              Our Room Block
            </p>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-4">
              This is where we&apos;ve held a room block for the wedding. Please
              reach out to us directly to check availability before booking —
              space is limited!
            </p>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-4">
              <span className="font-sans font-semibold text-stone-800">
                A heads up:
              </span>{" "}
              our welcome party, after party, and farewell brunch are all being
              planned to launch from this area, and we&apos;re looking into a
              shuttle bus running to and from this location. Staying nearby will
              make the whole weekend easier to get around.
            </p>
            <SpotLinks
              spot={{
                name: "Anchor Inn",
                website: "https://www.anchorinn.net/",
                mapQuery: "Anchor Inn Suttons Bay MI",
              }}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Airbnb / VRBO */}
      <section
        id="airbnb"
        className="max-w-5xl mx-auto px-6 md:px-16 scroll-mt-20"
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <HouseIcon className="w-24 h-24 text-rosemary" />
            <h2 className="font-display text-5xl text-stone-800">
              Airbnb & VRBO
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-4">
              We&apos;d also recommend looking at Airbnb and VRBO — but book
              soon with your group! Houses in the area are limited, especially
              during wedding season.
            </p>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
              Try to book somewhere around the{" "}
              <span className="font-sans font-semibold text-stone-800">
                Suttons Bay or Leland
              </span>{" "}
              area if possible.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Leland */}
      <section
        id="leland"
        className="max-w-5xl mx-auto px-6 md:px-16 scroll-mt-20"
      >
        <h2 className="font-display text-5xl mb-10 text-center text-stone-800">
          Leland
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {leland.map((spot) => (
            <StayCard key={spot.name} spot={spot} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Suttons Bay / Northport */}
      <section
        id="suttons-bay"
        className="max-w-5xl mx-auto px-6 md:px-16 scroll-mt-20"
      >
        <h2 className="font-display text-5xl mb-10 text-center text-stone-800">
          Suttons Bay & Northport
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {suttonsBayNorthport.map((spot) => (
            <StayCard key={spot.name} spot={spot} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Logistics: Airport & Groceries */}
      <section
        id="logistics"
        className="max-w-5xl mx-auto px-6 md:px-16 pb-24 scroll-mt-20"
      >
        <h2 className="font-display text-5xl mb-12 text-center text-stone-800">
          Getting Here &amp; Settling In
        </h2>

        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start mb-14">
          <div className="flex flex-col items-center md:items-start gap-4">
            <PlaneIcon className="w-24 h-24 text-terracotta" />
            <h3 className="font-display text-3xl md:text-4xl text-stone-800">
              Airport
            </h3>
          </div>
          <div>
            <p className="font-sans font-semibold text-xl md:text-2xl text-stone-800">
              Cherry Capital Airport (TVC)
            </p>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
              The closest major airport to Foxglove Farm and the easiest way to
              fly in for the weekend.
            </p>
            <SpotLinks
              spot={{
                name: "Cherry Capital Airport",
                mapQuery: "Cherry Capital Airport TVC",
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <CartIcon className="w-24 h-24 text-terracotta" />
            <h3 className="font-display text-3xl md:text-4xl text-stone-800">
              Groceries
            </h3>
          </div>
          <div className="space-y-6">
            {groceries.map((spot) => (
              <div key={spot.name}>
                <p className="font-sans font-semibold text-xl md:text-2xl text-stone-800">
                  {spot.name}
                </p>
                {spot.description && (
                  <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                    {spot.description}
                  </p>
                )}
                <SpotLinks spot={spot} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
