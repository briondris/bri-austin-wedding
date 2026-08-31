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
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="mx-auto max-w-2xl px-6 pt-10 pb-6 text-center md:pt-24 md:pb-10">
        <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-bloodOrange md:mb-4 md:text-lg md:tracking-[0.3em]">
          Leelanau Peninsula
        </p>

        <h1 className="font-display text-5xl leading-none text-stone-800 md:text-7xl">
          Things <span className="italic text-olive">To Do</span>
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-stone-600 md:mt-6 md:text-xl">
          If you&apos;re making a weekend of it, here are a few of our favorite
          spots nearby.
        </p>
      </div>

      {/* Jump nav */}
      <nav className="sticky top-0 z-40 mb-2 border-y border-olive/20 bg-cream/95 py-3 backdrop-blur md:mb-4 md:py-4">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-1.5 px-4 md:gap-x-8 md:gap-y-2 md:px-6">
          {jumpLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-600 transition-colors hover:text-bloodOrange md:text-sm md:tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Wineries */}
      <section
        id="wineries"
        className="scroll-mt-20 border-b border-bloodOrange/20 bg-olive px-6 py-10 text-cream md:px-16 md:py-20"
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[2fr_1fr] md:gap-10">
          <div className="order-2 space-y-4 md:order-1 md:space-y-5">
            {wineries.map((spot) => (
              <SpotRow key={spot.name} spot={spot} tone="light" />
            ))}
          </div>

          <div className="order-1 flex flex-col items-center gap-2 md:order-2 md:items-end md:gap-4">
            <GrapesIcon className="h-14 w-14 text-cream md:h-24 md:w-24" />
            <h2 className="font-display text-4xl md:text-5xl">Wineries</h2>
          </div>
        </div>
      </section>

      {/* Hiking */}
      <section
        id="hiking"
        className="scroll-mt-20 border-y border-cream/50 bg-apricot px-6 py-10 text-cream md:px-16 md:py-20"
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_2fr] md:gap-10">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <MountainIcon className="h-14 w-14 text-cream md:h-24 md:w-24" />
            <h2 className="font-display text-4xl md:text-5xl">Hiking</h2>
          </div>

          <div className="space-y-5 md:space-y-8">
            {hiking.map((spot) => (
              <div key={spot.name}>
                <h3 className="mb-1 font-sans text-lg font-semibold md:text-3xl">
                  {spot.title}
                </h3>

                <p className="text-sm leading-relaxed text-cream/90 md:text-xl">
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
        className="scroll-mt-20 border-b border-bloodOrange/20 px-6 py-10 md:px-16 md:py-20"
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[2fr_1fr] md:gap-10">
          <div className="order-2 space-y-7 md:order-1 md:space-y-10">
            <div>
              <CategoryLabel tone="dark">Getting Around</CategoryLabel>
              <div className="space-y-4 md:space-y-5">
                {suttonsBayGettingAround.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>

            <div>
              <CategoryLabel tone="dark">Food &amp; Drink</CategoryLabel>
              <div className="space-y-4 md:space-y-5">
                {suttonsBayFood.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>

            <div>
              <CategoryLabel tone="dark">Sweets</CategoryLabel>
              <div className="space-y-4 md:space-y-5">
                {suttonsBaySweets.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>

            <div>
              <CategoryLabel tone="dark">Shopping</CategoryLabel>
              <div className="space-y-4 md:space-y-5">
                {suttonsBayShopping.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col items-center gap-2 md:order-2 md:items-end md:gap-4">
            <BikeIcon className="h-14 w-14 text-olive md:h-24 md:w-24" />

            <h2 className="font-display text-4xl text-stone-800 md:text-5xl">
              Suttons Bay
            </h2>
          </div>
        </div>
      </section>

      {/* Leland */}
      <section
        id="leland"
        className="scroll-mt-20 border-y border-cream/50 bg-olive px-6 py-10 text-cream md:px-16 md:py-20"
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_2fr] md:gap-10">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <FishIcon className="h-14 w-14 text-cream md:h-24 md:w-24" />
            <h2 className="font-display text-4xl md:text-5xl">Leland</h2>
          </div>

          <div className="space-y-7 md:space-y-10">
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
              <div className="space-y-4 md:space-y-5">
                {lelandFood.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="light" />
                ))}
              </div>
            </div>

            <div>
              <CategoryLabel tone="light">Sweets</CategoryLabel>
              <div className="space-y-4 md:space-y-5">
                {lelandSweets.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="light" />
                ))}
              </div>
            </div>

            <div>
              <CategoryLabel tone="light">Beach</CategoryLabel>

              <div className="space-y-4 md:space-y-5">
                {lelandBeach.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="light" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traverse City */}
      <section
        id="traverse-city"
        className="scroll-mt-20 px-6 py-10 md:px-16 md:py-20"
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_2fr] md:gap-10">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <CityIcon className="h-14 w-14 text-bloodOrange md:h-24 md:w-24" />

            <h2 className="font-display text-4xl text-stone-800 md:text-5xl">
              Traverse City
            </h2>
          </div>

          <div className="space-y-7 md:space-y-10">
            <div>
              <CategoryLabel tone="dark">Sights &amp; Activities</CategoryLabel>

              <div className="space-y-4 md:space-y-5">
                {traverseCityActivities.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>

            <div>
              <CategoryLabel tone="dark">Food</CategoryLabel>

              <div className="space-y-4 md:space-y-5">
                {traverseCityFood.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>

            <div>
              <CategoryLabel tone="dark">Sweets</CategoryLabel>

              <div className="space-y-4 md:space-y-5">
                {traverseCitySweets.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="dark" />
                ))}
              </div>
            </div>

            <div>
              <CategoryLabel tone="dark">Beach</CategoryLabel>

              <div className="space-y-4 md:space-y-5">
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
        className="scroll-mt-20 border-t border-bloodOrange/20 bg-apricot px-6 py-10 text-cream md:px-16 md:py-20"
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[2fr_1fr] md:gap-10">
          <div className="order-2 space-y-4 md:order-1 md:space-y-5">
            {northport.map((spot) => (
              <SpotRow key={spot.name} spot={spot} tone="light" />
            ))}
          </div>

          <div className="order-1 flex flex-col items-center gap-2 md:order-2 md:items-end md:gap-4">
            <WaveIcon className="h-14 w-14 text-cream md:h-24 md:w-24" />
            <h2 className="font-display text-4xl md:text-5xl">Northport</h2>
          </div>
        </div>
      </section>

      {/* Glen Arbor */}
      <section
        id="glen-arbor"
        className="scroll-mt-20 border-t border-bloodOrange/20 bg-olive px-6 py-10 text-cream md:px-16 md:py-20"
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_2fr] md:gap-10">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <SailboatIcon className="h-14 w-14 text-cream md:h-24 md:w-24" />

            <h2 className="font-display text-4xl md:text-5xl">Glen Arbor</h2>

            <p className="max-w-sm text-center text-sm leading-relaxed text-cream/80 md:text-left md:text-lg">
              Your gateway to Sleeping Bear Dunes — worth planning a full day
              around.
            </p>
          </div>

          <div className="space-y-7 md:space-y-10">
            <div>
              <CategoryLabel tone="light">Food</CategoryLabel>

              <div className="space-y-4 md:space-y-5">
                {glenArborFood.map((spot) => (
                  <SpotRow key={spot.name} spot={spot} tone="light" />
                ))}
              </div>
            </div>

            <div>
              <CategoryLabel tone="light">Activities</CategoryLabel>

              <div className="space-y-4 md:space-y-5">
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
