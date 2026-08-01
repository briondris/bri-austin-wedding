import Link from "next/link";
import FadeImage from "@/components/UnrollImage";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[450px] w-full bg-terracotta">
        <div className="absolute inset-0 py-6">
          <div className="relative w-full h-full">
            <FadeImage
              src="/images/engagement/yes.jpg"
              alt="Bri and Austin"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Quote block, top-left */}
            <div className="absolute top-10 left-8 md:top-16 md:left-16 -rotate-3 max-w-md md:max-w-lg">
              <p className="font-script text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-cream drop-shadow-md leading-snug">
                Can&apos;t believe how fast the sparks can fly <br /> When the
                stars align
              </p>
              <p className="text-xs sm:text-sm text-white/90 drop-shadow-md mt-2">
                — Washed Out, &quot;Too Late&quot;
              </p>
            </div>

            {/* Names block, bottom-center */}
            <div className="absolute bottom-10 md:bottom-16 left-0 right-0 flex flex-col items-center text-center">
              <h1 className="font-display text-5xl md:text-5xl text-white drop-shadow-md mb-2">
                Austin &amp; Brianna
              </h1>
              <h1 className="tracking-[0.25em] text-2xl uppercase text-white drop-shadow-md mb-2">
                July 31, 2027 · Foxglove Farm, Michigan
              </h1>
            </div>
          </div>

          {/* Top and bottom border lines, overlaid, no layout impact */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-cream/60" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-cream/60" />
        </div>
      </section>

      {/* Editorial 1: How We Met */}
      <section className=" px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <span className="absolute -left-4 top-0 bottom-0 flex items-center [writing-mode:vertical-lr] rotate-180 text-xs tracking-[0.3em] uppercase text-cream">
              01 / How We Met
            </span>
            <div className="relative ml-6 aspect-[4/5] border-2 border-cream/50 p-3">
              <div className="relative w-full h-full">
                <FadeImage
                  src="/images/briAndAustin/earlyDay12.jpg"
                  alt="Bri and Austin early in their relationship"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6 text-cream">
              The Story <span className="italic text-butter">So</span>{" "}
              <span className="italic text-butter">Far</span>
            </h2>
            <p className="text-base md:text-2xl text-cream/90 leading-relaxed">
              We were coworkers first in 2021, before we found out we&apos;d
              actually crossed paths years earlier at the same SIGGRAPH
              conference in Japan back in 2018. It was February of 2022 when
              things became official.
            </p>
            <br></br>
            <p className="text-base md:text-2xl text-cream/90 leading-relaxed mb-8">
              Turns out we both already loved Titanic before we&apos;d even met.
              From there, we showed each other Lady Bird and Fleabag, hiked
              Shenandoah together, and went to our first concert as a couple
              (Washed Out). We became best travel buddies, then each
              other&apos;s rocks. One cross-country move to San Francisco later,
              here we are, happily engaged and excited to celebrate with you
              all!
            </p>
            <Link
              href="/savethedate"
              className="text-md uppercase tracking-widest text-cream hover:text-butter transition-colors border-b border-cream hover:border-butter pb-1"
            >
              Save the date →
            </Link>
          </div>
        </div>
      </section>

      {/* Photo trio strip 1 */}
      <section className="grid grid-cols-3">
        {[
          {
            src: "/images/briAndAustin/winerymi.jpg",
            alt: "Bri and Austin at the vineyard",
          },
          {
            src: "/images/briAndAustin/hocky.jpg",
            alt: "Hockey",
          },
          {
            src: "/images/briAndAustin/bakerbeach.JPEG",
            alt: "Bri and Austin at Baker Beach",
            zoom: "scale-150",
            position: "30% 40%",
          },
        ].map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[3/4] md:aspect-square overflow-hidden"
          >
            <FadeImage
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 33vw, 33vw"
              className={`object-cover ${photo.zoom ?? ""}`}
              style={
                photo.position ? { objectPosition: photo.position } : undefined
              }
            />
          </div>
        ))}
      </section>

      {/* Editorial 2: reversed layout, photo on right */}
      <section className="bg-cream px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-6xl md:text-6xl leading-tight mb-6 text-stone-800">
              Two Become
              <br />
              <span className="italic text-rosemary">One Big Party</span>
            </h2>

            <p className="text-lg md:text-2xl text-stone-600 leading-relaxed mb-6">
              Austin grew up coming to Michigan, and once we got to know the
              landscape together, the beauty of it was impossible to miss. Since
              2023, this stretch of the Leelanau Peninsula has become one of our
              favorite places.
            </p>
            <p className="text-lg md:text-2xl text-stone-600 leading-relaxed mb-8">
              It also happens to sit right in the middle of everyone we love,
              scattered as you all are from the West Coast to the East Coast to
              Texas. Somehow, that made it the easiest choice in the world.
            </p>
            <Link
              href="/thingstodo"
              className="text-md uppercase tracking-widest text-rosemary hover:text-terracotta transition-colors border-b border-rosemary hover:border-terracotta pb-1"
            >
              Things to do nearby →
            </Link>
          </div>

          <div className="relative order-1 md:order-2">
            <span className="absolute -right-4 top-0 bottom-0 flex items-center [writing-mode:vertical-lr] text-xs tracking-[0.3em] uppercase text-rosemary">
              02 / Celebration
            </span>
            <div className="relative mr-6 aspect-[4/5] border-2 border-rosemary/40 p-3">
              <div className="relative w-full h-full">
                <FadeImage
                  src="/images/briAndAustin/biketrailmi.jpg"
                  alt="Bri and Austin together"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo trio strip 2 */}
      <section className="grid grid-cols-3">
        {[
          {
            src: "/images/engagement/happyTogetherBack.jpg",
            alt: "Holding hands",
          },
          {
            src: "/images/engagement/briHandRing.jpg",
            alt: "Engagement ring detail",
          },
          {
            src: "/images/engagement/celebration.jpg",
            alt: "Celebrating together",
          },
        ].map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[3/4] md:aspect-square overflow-hidden"
          >
            <FadeImage
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 33vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* Editorial 3: The Proposal */}
      <section className=" px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <span className="absolute -left-4 top-0 bottom-0 flex items-center [writing-mode:vertical-lr] rotate-180 text-xs tracking-[0.3em] uppercase text-cream">
              03 / The Proposal
            </span>
            <div className="relative ml-6 aspect-[4/5] border-2 border-cream/50 p-3">
              <div className="relative w-full h-full">
                <FadeImage
                  src="/images/engagement/hero.jpg"
                  alt="Austin proposing to Bri in Golden Gate Park"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6 text-cream">
              How We Got Here, With{" "}
              <span className="italic text-butter">Some Help</span>
            </h2>
            <p className="text-base md:text-2xl text-cream/90 leading-relaxed">
              We had it all planned out — well, one of us did. Golden Gate Park
              is basically our backyard, so a walk there didn&apos;t raise any
              alarms, even though Bri knew something was going on. What she
              didn&apos;t know was that her sister and cousin were already
              there, hidden nearby, waiting to catch the moment on camera the
              second we showed up.
            </p>
            <p className="text-base md:text-2xl text-cream/90 leading-relaxed mb-8">
              It was quiet, it was ours, and nobody even walked past. We went
              from that little patch of woods to planning a wedding in the woods
              of Michigan — turns out we really do love the trees.
            </p>
          </div>
        </div>
      </section>

      {/* Closing section with framed photo and RSVP CTA */}
      <section className="relative w-full h-[50vh] min-h-[350px] bg-terracotta">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cream/60" />

        <div className="relative w-full h-full py-6">
          <div className="relative w-full h-full">
            <FadeImage
              src="/images/engagement/knee2.jpg"
              alt="Austin proposing to Bri"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="/savethedate"
                className="bg-cream text-terracotta px-10 py-4 text-3xl uppercase tracking-[0.25em] hover:bg-mustard hover:text-white transition-colors rounded-sm shadow-lg"
              >
                Save the Date
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
