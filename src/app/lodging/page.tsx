import {
  AnchorIcon,
  HouseIcon,
  CityIcon,
  PlaneIcon,
  CarIcon,
  CartIcon,
  FishIcon,
  WaveIcon,
} from "@/components/icons";

import SpotLinks from "@/components/lodging/SpotLinks";
import StayCard from "@/components/lodging/StayCard";
import SectionDivider from "@/components/lodging/SectionDivider";
import { RetroStripeDividerTop } from "@/components/RetroStripeDivider";

import {
  jumpLinks,
  leland,
  suttonsBayNorthport,
  traverseCity,
  groceries,
} from "@/data/lodging";

export default function Lodging() {
  return (
    <main className="min-h-screen bg-cream">
      <RetroStripeDividerTop />
      {/* Header */}
      <div className="mx-auto max-w-2xl px-6 pt-10 pb-6 text-center md:pt-24 md:pb-10">
        <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-bloodOrange md:mb-4 md:text-lg md:tracking-[0.3em]">
          For Our Guests
        </p>

        <h1 className="font-display text-5xl leading-none text-stone-800 md:text-7xl">
          Where to <span className="italic text-olive">Stay</span>
        </h1>

        <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-stone-600 md:mt-6 md:text-2xl">
          We&apos;ve rounded up our favorite spots on the Leelanau Peninsula,
          all a short drive from The Foxglove Farm.
        </p>
      </div>

      {/* Jump nav */}
      <nav className="sticky top-0 z-40 mb-8 border-y border-olive/20 bg-cream/95 py-3 backdrop-blur md:mb-16 md:py-4">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-5 gap-y-1.5 px-4 md:gap-x-8 md:gap-y-2 md:px-6">
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

      {/* Anchor Inn */}
      <section
        id="anchor-inn"
        className="mx-auto max-w-5xl scroll-mt-20 px-6 md:px-16"
      >
        <div className="grid gap-6 rounded-sm border border-bloodOrange/30 p-5 md:grid-cols-[1fr_2fr] md:gap-10 md:border-2 md:p-12">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <AnchorIcon className="h-14 w-14 text-bloodOrange md:h-24 md:w-24" />

            <h2 className="font-display text-4xl text-stone-800 md:text-5xl">
              Anchor Inn
            </h2>
          </div>

          <div>
            <p className="mb-2 font-sans text-base font-semibold text-bloodOrange md:mb-3 md:text-2xl">
              Our Room Block
            </p>

            <p className="mb-3 text-sm leading-relaxed text-stone-600 md:mb-4 md:text-xl">
              This is where we&apos;ve held a room block for the wedding. Please
              reach out to us directly to check availability before booking —
              space is limited!
            </p>

            <p className="mb-3 text-sm leading-relaxed text-stone-600 md:mb-4 md:text-xl">
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
        className="mx-auto max-w-5xl scroll-mt-20 px-6 md:px-16"
      >
        <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-10">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <HouseIcon className="h-14 w-14 text-olive md:h-24 md:w-24" />

            <h2 className="font-display text-4xl text-stone-800 md:text-5xl">
              Airbnb &amp; VRBO
            </h2>
          </div>

          <div>
            <p className="mb-3 text-sm leading-relaxed text-stone-600 md:mb-4 md:text-xl">
              We&apos;d also recommend looking at Airbnb and VRBO — but book
              soon with your group! Houses in the area are limited, especially
              during wedding season.
            </p>

            <p className="text-sm leading-relaxed text-stone-600 md:text-xl">
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
        className="mx-auto max-w-5xl scroll-mt-20 px-6 md:px-16"
      >
        <div className="mb-6 flex flex-col items-center gap-2 md:mb-10 md:gap-4">
          <FishIcon className="h-12 w-12 text-olive md:h-20 md:w-20" />

          <h2 className="text-center font-display text-4xl text-stone-800 md:text-5xl">
            Leland
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {leland.map((spot) => (
            <StayCard key={spot.name} spot={spot} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Suttons Bay / Northport */}
      <section
        id="suttons-bay"
        className="mx-auto max-w-5xl scroll-mt-20 px-6 md:px-16"
      >
        <div className="mb-6 flex flex-col items-center gap-2 md:mb-10 md:gap-4">
          <WaveIcon className="h-12 w-12 text-bloodOrange md:h-20 md:w-20" />

          <h2 className="text-center font-display text-4xl text-stone-800 md:text-5xl">
            Suttons Bay &amp; Northport
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {suttonsBayNorthport.map((spot) => (
            <StayCard key={spot.name} spot={spot} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Traverse City */}
      <section
        id="traverse-city"
        className="mx-auto max-w-5xl scroll-mt-20 px-6 md:px-16"
      >
        <div className="mb-6 flex flex-col items-center gap-2 md:mb-10 md:gap-4">
          <CityIcon className="h-12 w-12 text-bloodOrange md:h-20 md:w-20" />

          <h2 className="text-center font-display text-4xl text-stone-800 md:text-5xl">
            Traverse City
          </h2>

          <p className="mx-auto max-w-md text-center text-sm leading-relaxed text-stone-600 md:text-xl">
            A bit further out, but a good option if Anchor Inn and the peninsula
            towns are full — roughly 30–40 minutes from The Foxglove Farm.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {traverseCity.map((spot) => (
            <StayCard key={spot.name} spot={spot} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Logistics */}
      <section
        id="logistics"
        className="mx-auto max-w-5xl scroll-mt-20 px-6 pb-14 md:px-16 md:pb-24"
      >
        <h2 className="mb-8 text-center font-display text-4xl text-stone-800 md:mb-12 md:text-5xl">
          Getting Here &amp; Settling In
        </h2>

        {/* Airport */}
        <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[1fr_2fr] md:gap-10">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <PlaneIcon className="h-14 w-14 text-bloodOrange md:h-24 md:w-24" />

            <h3 className="font-display text-3xl text-stone-800 md:text-4xl">
              Airport
            </h3>
          </div>

          <div>
            <p className="font-sans text-base font-semibold text-stone-800 md:text-2xl">
              Cherry Capital Airport (TVC)
            </p>

            <p className="text-sm leading-relaxed text-stone-600 md:text-xl">
              The closest major airport to The Foxglove Farm and the easiest way
              to fly in for the weekend.
            </p>

            <SpotLinks
              spot={{
                name: "Cherry Capital Airport",
                mapQuery: "Cherry Capital Airport TVC",
              }}
            />
          </div>
        </div>

        {/* Getting Around */}
        <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[1fr_2fr] md:gap-10">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <CarIcon className="h-14 w-14 text-bloodOrange md:h-24 md:w-24" />

            <h3 className="font-display text-3xl text-stone-800 md:text-4xl">
              Getting Around
            </h3>
          </div>

          <div>
            <p className="mb-3 text-sm leading-relaxed text-stone-600 md:text-xl">
              <span className="font-sans font-semibold text-stone-800">
                Heads up:
              </span>{" "}
              Uber and Lyft are unreliable to nonexistent up here — we&apos;d
              recommend planning around a rental car or a scheduled ride
              instead.
            </p>

            <p className="text-sm leading-relaxed text-stone-600 md:text-xl">
              Car rental counters are located directly at the airport. For
              scheduled rides,{" "}
              <span className="font-sans font-semibold text-stone-800">
                Up North Taxi
              </span>{" "}
              offers pre-booked pickups — worth reserving ahead of time.
            </p>

            <SpotLinks
              spot={{
                name: "Up North Taxi",
                mapQuery: "Up North Taxi Traverse City MI",
              }}
            />
          </div>
        </div>

        {/* Groceries */}
        <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:gap-10">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <CartIcon className="h-14 w-14 text-bloodOrange md:h-24 md:w-24" />

            <h3 className="font-display text-3xl text-stone-800 md:text-4xl">
              Groceries
            </h3>
          </div>

          <div className="space-y-4 md:space-y-6">
            {groceries.map((spot) => (
              <div key={spot.name}>
                <p className="font-sans text-base font-semibold text-stone-800 md:text-2xl">
                  {spot.name}
                </p>

                {spot.description && (
                  <p className="text-sm leading-relaxed text-stone-600 md:text-xl">
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
