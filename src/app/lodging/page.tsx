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
import {
  jumpLinks,
  leland,
  suttonsBayNorthport,
  traverseCity,
  groceries,
} from "@/data/lodging";

export default function Lodging() {
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
        <div className="flex flex-col items-center gap-4 mb-10">
          <FishIcon className="w-20 h-20 text-rosemary" />
          <h2 className="font-display text-5xl text-stone-800 text-center">
            Leland
          </h2>
        </div>
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
        <div className="flex flex-col items-center gap-4 mb-10">
          <WaveIcon className="w-20 h-20 text-rosemary" />
          <h2 className="font-display text-5xl text-stone-800 text-center">
            Suttons Bay & Northport
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {suttonsBayNorthport.map((spot) => (
            <StayCard key={spot.name} spot={spot} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Traverse City */}
      <section
        id="traverse-city"
        className="max-w-5xl mx-auto px-6 md:px-16 scroll-mt-20"
      >
        <div className="flex flex-col items-center gap-4 mb-10">
          <CityIcon className="w-20 h-20 text-terracotta" />
          <h2 className="font-display text-5xl text-stone-800 text-center">
            Traverse City
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-md mx-auto text-center">
            A bit further out, but a good option if Anchor Inn and the peninsula
            towns are full — roughly 30-40 minutes from Foxglove Farm.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {traverseCity.map((spot) => (
            <StayCard key={spot.name} spot={spot} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Logistics: Transportation, Airport, Groceries */}
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

        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start mb-14">
          <div className="flex flex-col items-center md:items-start gap-4">
            <CarIcon className="w-24 h-24 text-terracotta" />
            <h3 className="font-display text-3xl md:text-4xl text-stone-800">
              Getting Around
            </h3>
          </div>
          <div>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-3">
              <span className="font-sans font-semibold text-stone-800">
                Heads up:
              </span>{" "}
              Uber and Lyft are unreliable to nonexistent up here — we&apos;d
              recommend planning around a rental car or a scheduled ride
              instead.
            </p>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
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
