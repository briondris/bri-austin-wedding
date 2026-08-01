function MountainIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M10 75L35 30L50 55L60 40L90 75"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="72" cy="25" r="6" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

function BikeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="25" cy="70" r="15" stroke="currentColor" strokeWidth="3" />
      <circle cx="75" cy="70" r="15" stroke="currentColor" strokeWidth="3" />
      <path
        d="M25 70L45 35H60M45 35L60 70H75M45 35L35 25H25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FishIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M15 50C15 35 35 25 55 25C70 25 85 35 90 50C85 65 70 75 55 75C35 75 15 65 15 50Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M15 50L5 40M15 50L5 60"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="65" cy="42" r="3" fill="currentColor" />
    </svg>
  );
}

function CityIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M15 85V40L30 30V85M30 50H15M30 65H15M45 85V25L60 15V85M60 40H45M60 55H45M60 70H45M75 85V50L85 45V85"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GrapesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 20V32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 20C45 15 40 18 42 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="38" cy="40" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="62" cy="40" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="35" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="30" cy="55" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="55" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="70" cy="55" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="40" cy="72" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="60" cy="72" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="86" r="9" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

function WaveIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M10 35C20 25 30 25 40 35C50 45 60 45 70 35C80 25 90 25 90 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 55C20 45 30 45 40 55C50 65 60 65 70 55C80 45 90 45 90 55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 75C20 65 30 65 40 75C50 85 60 85 70 75C80 65 90 65 90 75"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface Spot {
  name: string;
  description?: string;
  website?: string;
  mapQuery?: string;
}

function SpotLinks({ spot, tone }: { spot: Spot; tone: "light" | "dark" }) {
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

function SpotRow({ spot, tone }: { spot: Spot; tone: "light" | "dark" }) {
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

function CategoryLabel({
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

const jumpLinks = [
  { id: "wineries", label: "Wineries" },
  { id: "hiking", label: "Hiking" },
  { id: "suttons-bay", label: "Suttons Bay" },
  { id: "leland", label: "Leland" },
  { id: "traverse-city", label: "Traverse City" },
  { id: "northport", label: "Northport" },
];

export default function ThingsToDo() {
  const wineries: Spot[] = [
    {
      name: "Aurora Winery",
      description:
        "Small but beautiful, with an intimate feel — lawn chairs, forestry all around, and gorgeous vineyard views.",
      website: "https://www.auroracellars.com",
      mapQuery: "Aurora Cellars Leelanau",
    },
    {
      name: "Dune Bird Winery",
      description:
        "Great for kids, with a spacious outdoor area, cornhole, and a small lake on the property that's lovely to sit around.",
      mapQuery: "Dune Bird Winery Leelanau",
    },
    {
      name: "The Ridge at Verterra",
      description:
        "Sweeping lake views from the outdoor patio — one of the prettiest spots on the peninsula for an afternoon glass of wine.",
      mapQuery: "The Ridge at Verterra Leelanau",
    },
  ];

  const suttonsBayGettingAround: Spot[] = [
    {
      name: "Bike Rental",
      description:
        "Suttons Bay Bikes — rentals for the Leelanau Trail, which runs all the way down toward Anchor Inn",
      mapQuery: "Suttons Bay Bikes MI",
    },
  ];

  const suttonsBayFood: Spot[] = [
    {
      name: "Streetside Grille",
      description: "American bar food",
      mapQuery: "Streetside Grille Suttons Bay",
      website: "https://www.streetsideupnorth.com/",
    },
    {
      name: "VI Grill",
      description: "American comfort food",
      mapQuery: "VI Grill Suttons Bay",
      website: "https://vigrill.com/",
    },
    {
      name: "Hop Lot Brewery",
      description: "One of Austin's favorite breweries ever!",
      website: "https://www.hoplotbrewing.com",
      mapQuery: "Hop Lot Brewing Suttons Bay",
    },
  ];

  const suttonsBaySweets: Spot[] = [
    {
      name: "Coffee",
      description: "Hive Coffee Co",
      mapQuery: "Hive Coffee Co Suttons Bay",
    },
    {
      name: "Ice Cream",
      description: "Dalzell Dairy",
      mapQuery: "Dalzell Dairy Suttons Bay",
    },
    {
      name: "Murdick's Fudge Shop",
      description: "Our go-to for chocolate covered cherries when we visit",
      mapQuery: "Murdick's Fudge Suttons Bay",
    },
  ];

  const suttonsBayShopping: Spot[] = [
    {
      name: "Bay Books",
      description: "A cozy little bookshop we love browsing",
      mapQuery: "Bay Books Suttons Bay",
      website: "https://baybooksmi.com/",
    },
  ];

  const lelandFood: Spot[] = [
    {
      name: "Village Cheese Shanty",
      description:
        "Staples Sandwich shop, Austin's favorite is the North Shore",
      mapQuery: "Village Cheese Shanty Leland",
      website: "https://www.thecoveleland.com/",
    },
    {
      name: "The Cove",
      description:
        "Here you can find traditional MI white fish and if you're brave like Bri go for the chubby Mary, it's totally worth it",
      mapQuery: "The Cove Leland MI",
    },
    {
      name: "The Riverside Inn",
      description:
        "If you're looking for American style food with a fine dining experience, this is your spot",
      mapQuery: "The Riverside Inn Leland MI",
      website: "https://theriversideinn.com/",
    },
  ];

  const lelandSweets: Spot[] = [
    {
      name: "Ice Cream",
      description: "Leland Harbor House",
      mapQuery: "Leland Harbor House",
    },
    {
      name: "Coffee",
      description: "Little Boat Coffee",
      mapQuery: "Little Boat Coffee Leland",
    },
  ];

  const lelandBeach: Spot[] = [
    {
      name: "Van's Beach",
      description: "Easy access to Lake Michigan",
      mapQuery: "Van's Beach Leland MI",
    },
  ];

  const traverseCity: Spot[] = [
    {
      name: "Aroma's Coffee & Tea",
      description: "A great coffee stop in Traverse City",
      website: "https://www.aromascoffeeshop.com/",
      mapQuery: "Aroma's Coffee & Tea Traverse City MI",
    },
  ];

  const northport: Spot[] = [
    {
      name: "The Mitten Brewing Company – Northport",
      description: "Good beer and a relaxed spot to grab a bite",
      website: "https://www.mittenbrewing.com/northport/",
      mapQuery: "The Mitten Brewing Company Northport MI",
    },
    {
      name: "New Bohemian Café",
      description: "Cozy café, great for a casual breakfast or lunch",
      website: "https://www.newbohemiancafe.com/#most-popular",
      mapQuery: "New Bohemian Café Northport MI",
    },
    {
      name: "Grand Traverse Lighthouse",
      description:
        "A beautiful historic lighthouse at the tip of the peninsula",
      website: "https://www.grandtraverselighthouse.com/",
      mapQuery: "Grand Traverse Lighthouse Northport MI",
    },
    {
      name: "Hallstedt Homestead Cherries",
      description: "A charming local cherry farm worth the drive",
      website: "https://www.hhcherries.net/",
      mapQuery: "Hallstedt Homestead Cherries Northport MI",
    },
  ];

  return (
    <main className="bg-cream min-h-screen">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center px-6 pt-24 pb-10">
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

      {/* Jump nav */}
      <nav className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-y border-terracotta/20 py-4 mb-4">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 px-6">
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

      {/* Wineries */}
      <section
        id="wineries"
        className="bg-rosemary text-cream border-b-2 border-terracotta/20 px-6 md:px-16 py-20 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 items-start">
          <div className="order-2 md:order-1 space-y-5">
            {wineries.map((spot) => (
              <SpotRow key={spot.name} spot={spot} tone="light" />
            ))}
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 order-1 md:order-2">
            <GrapesIcon className="w-24 h-24 text-cream" />
            <h2 className="font-display text-5xl">Wineries</h2>
          </div>
        </div>
      </section>

      {/* Hiking */}
      <section
        id="hiking"
        className="bg-terracotta text-cream border-y-2 border-cream/60 px-6 md:px-16 py-20 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <MountainIcon className="w-24 h-24 text-cream" />
            <h2 className="font-display text-5xl">Hiking</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-sans font-semibold text-2xl md:text-3xl mb-1">
                Sleeping Bear Dunes
              </h3>
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed">
                Intermediate hike down to a beach on Lake Michigan.
              </p>
              <SpotLinks
                spot={{
                  name: "Sleeping Bear Dunes",
                  website: "https://www.nps.gov/slbe/",
                  mapQuery: "Sleeping Bear Dunes National Lakeshore",
                }}
                tone="light"
              />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-2xl md:text-3xl mb-1">
                Clay Cliffs
              </h3>
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed">
                Easy hike to a lookout point over Lake Michigan.
              </p>
              <SpotLinks
                spot={{
                  name: "Clay Cliffs",
                  mapQuery: "Clay Cliffs Natural Area Leelanau",
                }}
                tone="light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Suttons Bay */}
      <section
        id="suttons-bay"
        className="border-b-2 border-terracotta/20 px-6 md:px-16 py-20 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 items-start">
          <div className="order-2 md:order-1 space-y-10">
            <div>
              <CategoryLabel tone="dark">Getting Around</CategoryLabel>
              <div className="space-y-5">
                {suttonsBayGettingAround.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>
            <div>
              <CategoryLabel tone="dark">Food & Drink</CategoryLabel>
              <div className="space-y-5">
                {suttonsBayFood.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>
            <div>
              <CategoryLabel tone="dark">Sweets</CategoryLabel>
              <div className="space-y-5">
                {suttonsBaySweets.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>
            <div>
              <CategoryLabel tone="dark">Shopping</CategoryLabel>
              <div className="space-y-5">
                {suttonsBayShopping.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 order-1 md:order-2">
            <BikeIcon className="w-24 h-24 text-rosemary" />
            <h2 className="font-display text-5xl text-stone-800">
              Suttons Bay
            </h2>
          </div>
        </div>
      </section>

      {/* Leland */}
      <section
        id="leland"
        className="bg-rosemary text-cream border-y-2 border-cream/60 px-6 md:px-16 py-20 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <FishIcon className="w-24 h-24 text-cream" />
            <h2 className="font-display text-5xl">Leland</h2>
          </div>
          <div className="space-y-10">
            <div>
              <CategoryLabel tone="light">Sights</CategoryLabel>
              <SpotRow
                spot={{
                  name: "Historic Fishtown",
                  description: "Shops, galleries, and waterside charm",
                  website: "https://www.leelanau.com/fishtown",
                  mapQuery: "Historic Fishtown Leland MI",
                }}
                tone="light"
              />
            </div>
            <div>
              <CategoryLabel tone="light">Food</CategoryLabel>
              <div className="space-y-5">
                {lelandFood.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="light" />
                ))}
              </div>
            </div>
            <div>
              <CategoryLabel tone="light">Sweets</CategoryLabel>
              <div className="space-y-5">
                {lelandSweets.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="light" />
                ))}
              </div>
            </div>
            <div>
              <CategoryLabel tone="light">Beach</CategoryLabel>
              {lelandBeach.map((spot) => (
                <SpotRow key={spot.name} spot={spot} tone="light" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traverse City */}
      <section id="traverse-city" className="px-6 md:px-16 py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <CityIcon className="w-24 h-24 text-terracotta" />
            <h2 className="font-display text-5xl text-stone-800">
              Traverse City
            </h2>
          </div>
          <div className="space-y-5">
            {traverseCity.map((spot) => (
              <SpotRow key={spot.name} spot={spot} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Northport */}
      <section
        id="northport"
        className="bg-terracotta text-cream border-t-2 border-terracotta/20 px-6 md:px-16 py-20 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 items-start">
          <div className="order-2 md:order-1 space-y-5">
            {northport.map((spot) => (
              <SpotRow key={spot.name} spot={spot} tone="light" />
            ))}
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 order-1 md:order-2">
            <WaveIcon className="w-24 h-24 text-cream" />
            <h2 className="font-display text-5xl">Northport</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
