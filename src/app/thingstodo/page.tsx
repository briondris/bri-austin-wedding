import {
  GrapesIcon,
  MountainIcon,
  CityIcon,
  BikeIcon,
  FishIcon,
  WaveIcon,
  SailboatIcon,
} from "@/components/icons";
import SpotLinks from "@/components/thingstodo/SpotLinks";
import SpotRow from "@/components/thingstodo/SpotRow";
import CategoryLabel from "@/components/thingstodo/CategoryLabel";
import {
  jumpLinks,
  wineries,
  suttonsBayGettingAround,
  suttonsBayFood,
  suttonsBaySweets,
  suttonsBayShopping,
  lelandFood,
  lelandSweets,
  lelandBeach,
  traverseCityActivities,
  traverseCityBeach,
  traverseCityFood,
  traverseCitySweets,
  northport,
  hiking,
  glenArborFood,
  glenArborActivities,
} from "@/data/thingstodo";

export default function ThingsToDo() {
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
            {hiking.map((spot) => (
              <div key={spot.name}>
                <h3 className="font-sans font-semibold text-2xl md:text-3xl mb-1">
                  {spot.title}
                </h3>
                <p className="text-lg md:text-xl text-cream/90 leading-relaxed">
                  {spot.description}
                </p>
                <SpotLinks spot={spot} tone="light" />
              </div>
            ))}
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
          <div className="space-y-10">
            <div>
              <CategoryLabel tone="dark">Sights & Activities</CategoryLabel>
              <div className="space-y-5">
                {traverseCityActivities.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>
            <div>
              <CategoryLabel tone="dark">Food</CategoryLabel>
              <div className="space-y-5">
                {traverseCityFood.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>
            <div>
              <CategoryLabel tone="dark">Sweets</CategoryLabel>
              <div className="space-y-5">
                {traverseCitySweets.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>
            <div>
              <CategoryLabel tone="dark">Beach</CategoryLabel>
              <div className="space-y-5">
                {traverseCityBeach.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>
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

      {/* Glen Arbor */}
      <section
        id="glen-arbor"
        className="bg-rosemary text-cream border-t-2 border-terracotta/20 px-6 md:px-16 py-20 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <SailboatIcon className="w-24 h-24 text-cream" />
            <h2 className="font-display text-5xl">Glen Arbor</h2>
            <p className="text-lg text-cream/80 text-center md:text-left">
              Your gateway to Sleeping Bear Dunes — worth planning a full day
              around.
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <CategoryLabel tone="light">Food</CategoryLabel>
              <div className="space-y-5">
                {glenArborFood.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="light" />
                ))}
              </div>
            </div>
            <div>
              <CategoryLabel tone="light">Activities</CategoryLabel>
              <div className="space-y-5">
                {glenArborActivities.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="light" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
