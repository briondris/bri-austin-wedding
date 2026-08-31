import Link from "next/link";
import FadeImage from "@/components/UnrollImage";
import { CalendarIcon, LeafIcon, WaveIcon } from "@/components/icons";
import {
  RetroStripeDividerTop,
  RetroStripeDividerBottom,
} from "@/components/RetroStripeDivider";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="flex h-[75vh] min-h-[450px] w-full flex-col">
        {/* Top 70s stripe stack */}
        <RetroStripeDividerTop />
        <div className="relative min-h-0 flex-1 w-full">
          <FadeImage
            src="/images/engagement/yes.jpg"
            alt="Bri and Austin"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          {/* Quote */}
          <div className="absolute top-10 left-8 right-8 md:right-auto md:top-16 md:left-16 -rotate-3 max-w-[75%] sm:max-w-sm md:max-w-lg">
            <p className="font-script text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white drop-shadow-md leading-snug">
              &quot;If I got you and you got me,
              <br />
              then the rest is history.&quot;
            </p>

            <p className="mt-2 text-xs sm:text-sm text-white/90 drop-shadow-md">
              — CARRTOONS, &quot;Labor Of Love&quot;
            </p>
          </div>

          {/* Names + wedding info */}
          <div className="absolute bottom-10 md:bottom-16 left-4 right-4 flex flex-col items-center text-center">
            <h1 className="font-display text-5xl md:text-5xl text-white drop-shadow-md mb-2">
              Austin &amp; Brianna
            </h1>

            <p className="max-w-4xl text-sm sm:text-xl md:text-2xl tracking-[0.25em] uppercase text-white drop-shadow-md">
              July 31, 2027 · The Foxglove Farm · Suttons Bay, Michigan
            </p>
          </div>
        </div>
        <RetroStripeDividerBottom />
      </section>

      {/* The Details */}
      <section className="bg-apricot px-6 pt-8 pb-0 md:px-16 md:pt-16">
        <div className="mx-auto max-w-6xl border-b border-cream/50 pb-6 md:pb-10">
          <div className="flex items-baseline justify-center gap-4 md:gap-7">
            <h2 className="font-display text-4xl leading-none text-white/90 md:text-5xl">
              The <span className="italic text-bloodOrange">Details</span>
            </h2>

            <Link
              href="/details"
              className="
          border-b border-bloodOrange/70
          pb-1
          font-sans
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.16em]
          text-bloodOrange
          transition-colors
          hover:border-cream
          hover:text-white/90
          md:text-xs
        "
            >
              Learn More →
            </Link>
          </div>

          <div className="mx-auto mt-5 grid max-w-4xl grid-cols-3 md:mt-8">
            <div className="flex items-center justify-center gap-2 px-2 text-center md:gap-4 md:px-6">
              <CalendarIcon className="h-8 w-8 shrink-0 text-bloodOrange md:h-11 md:w-11" />
              <p className="font-sans text-[9px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/90 md:text-xs md:tracking-[0.16em]">
                July 31,
                <br className="sm:hidden" />
                2027
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 border-x border-cream/40 px-2 text-center md:gap-4 md:px-6">
              <LeafIcon className="h-8 w-8 shrink-0 text-mossGreen md:h-11 md:w-11" />
              <p className="font-sans text-[9px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/90 md:text-xs md:tracking-[0.16em]">
                The Foxglove Farm
                <br />
                Suttons Bay, MI
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 px-2 text-center md:gap-4 md:px-6">
              <WaveIcon className="h-8 w-8 shrink-0 text-bloodOrange md:h-11 md:w-11" />
              <p className="font-sans text-[9px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/90 md:text-xs md:tracking-[0.16em]">
                Formal Invitation
                <br />
                To Follow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial 1: How We Met */}
      <section className="px-6 px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <span className="absolute -left-4 top-0 bottom-0 flex items-center [writing-mode:vertical-lr] rotate-180 text-xs tracking-[0.3em] uppercase text-white/90">
              01 / How We Met
            </span>
            <div className="relative ml-6 aspect-[4/5] border-2 border-cream/50 p-2">
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
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6 text-white/90">
              The Story <span className="italic text-bloodOrange">So</span>{" "}
              <span className="italic text-bloodOrange">Far</span>
            </h2>
            <p className="text-base md:text-2xl text-ivory/90 leading-relaxed">
              We were coworkers first in 2021, before we found out we&apos;d
              actually crossed paths years earlier at the same SIGGRAPH
              conference in Japan back in 2018. It was February of 2022 when
              things became official.
            </p>
            <br></br>
            <p className="text-base md:text-2xl text-ivory/90 leading-relaxed mb-8">
              Turns out we both already loved Titanic before we&apos;d even met.
              From there, together we shared movies, like Lady Bird, hiked
              Shenandoah, and went to our first concert as a couple (Washed
              Out). We became best travel buddies, then each other&apos;s rocks.
              One cross-country move to San Francisco later, here we are,
              happily engaged and excited to celebrate with you all!
            </p>
            <Link
              href="/savethedate"
              className="text-md uppercase tracking-widest text-white/90 hover:text-copperTulip transition-colors border-b border-cream hover:border-marigold pb-1"
            >
              Save The Date →
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
          { src: "/images/briAndAustin/hocky.jpeg", alt: "Hockey" },
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

      {/* Editorial 2: Two Become One Big Party */}
      <section className="bg-cream px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-6xl md:text-6xl leading-tight mb-6 text-stone-800">
              Two Become
              <br />
              <span className="italic text-olive">One Big Party</span>
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
              className="text-md uppercase tracking-widest text-olive hover:text-apricot transition-colors border-b border-olive hover:border-apricot pb-1"
            >
              Things to do nearby →
            </Link>
          </div>

          <div className="relative order-1 md:order-2">
            <span className="absolute -right-4 top-0 bottom-0 flex items-center [writing-mode:vertical-lr] text-xs tracking-[0.3em] uppercase text-olive">
              02 / Celebration
            </span>
            <div className="relative mr-6 aspect-[4/5] border-2 border-olive/60 p-3">
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
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <span className="absolute -left-4 top-0 bottom-0 flex items-center [writing-mode:vertical-lr] rotate-180 text-xs tracking-[0.3em] uppercase text-white/90">
              03 / The Proposal
            </span>
            <div className="relative ml-6 aspect-[4/5] border-2 border-cream/50 p-2">
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
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6 text-white/90">
              How We Got Here,
              <br /> With
              <span className="italic text-marigold"> Some Help</span>
            </h2>
            <p className="text-base md:text-2xl text-white/90 leading-relaxed">
              We had it all planned out, well, one of us did. Golden Gate Park
              is basically our backyard, so a walk there didn&apos;t raise any
              alarms, even though Bri knew something was going on. What she
              didn&apos;t know was that her sister and cousin were already
              there, hidden nearby, with Hunter (her cousin-in-law) waiting to
              catch the moment on camera the second we showed up.
            </p>
            <p className="text-base md:text-2xl text-white/90 leading-relaxed mb-8">
              It was quiet, it was ours, and nobody even walked past. We went
              from that little patch of woods to planning a wedding in the woods
              of Michigan, turns out, we really love trees.
            </p>
          </div>
        </div>
      </section>

      {/* Closing section with framed photo and RSVP CTA */}
      <section className="relative w-full h-[50vh] min-h-[350px]">
        <div className="relative w-full h-full py-6">
          <RetroStripeDividerTop />
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
                className="bg-cream text-terracotta px-4 py-2 text-xs sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl uppercase tracking-[0.1em] sm:tracking-[0.2em] hover:bg-marigold hover:text-white transition-colors rounded-sm shadow-lg"
              >
                Click Here to
                <br />
                Save Our Date
              </Link>
            </div>
          </div>
        </div>
        <RetroStripeDividerBottom />
      </section>
    </main>
  );
}
