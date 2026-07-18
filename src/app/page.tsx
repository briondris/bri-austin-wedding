import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[450px] w-full bg-terracotta">
        <div className="absolute inset-0 py-6">
          <div className="relative w-full h-full">
            <Image
              src="/images/engagement/yes.jpg"
              alt="Bri and Austin"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Quote block, top-left */}
            <div className="absolute top-10 left-8 md:top-16 md:left-16 -rotate-3 max-w-md md:max-w-lg">
              <p className="font-script text-4xl md:text-4xl text-cream drop-shadow-md leading-snug">
                Can&apos;t believe how fast the sparks can fly <br /> When the
                stars align
              </p>
              <p className="text-sm text-white/90 drop-shadow-md mt-2">
                — Washed Out, &quot;Too Late&quot;
              </p>
            </div>

            {/* Names block, bottom-center */}
            <div className="absolute bottom-10 md:bottom-16 left-0 right-0 flex flex-col items-center text-center">
              <h1 className="font-display text-5xl md:text-5xl text-white drop-shadow-md mb-2">
                Bri &amp; Austin
              </h1>
              <h1 className="tracking-[0.25em] text-2xl uppercase text-white drop-shadow-md mb-2">
                July 31, 2027 · Foxglove Farm
              </h1>
            </div>
          </div>

          {/* Top and bottom border lines, overlaid, no layout impact */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-cream/60" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-cream/60" />
        </div>
      </section>

      {/* Editorial 1: The Proposal (framed photo, left) */}
      <section className=" px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <span className="absolute -left-4 top-0 bottom-0 flex items-center [writing-mode:vertical-lr] rotate-180 text-xs tracking-[0.3em] uppercase text-cream">
              01 / The Proposal
            </span>
            <div className="relative ml-6 aspect-[4/5] border-2 border-cream/50 p-3">
              <div className="relative w-full h-full">
                <Image
                  src="/images/engagement/hero.jpg"
                  alt="Austin proposing to Bri"
                  fill
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
            <p className="text-base md:text-3xl text-cream/90 leading-relaxed">
              Every love story has its own pace. Ours found us in Golden Gate
              Park, on a walk that turned into a proposal none of us saw coming
              — except apparently, everyone did.
            </p>
            <p className="text-base md:text-3xl text-cream/90 leading-relaxed mb-8">
              We can&apos;t wait to celebrate the next chapter with the people
              who made this one so good.
            </p>
            <Link
              href="/schedule"
              className="text-md uppercase tracking-widest text-cream hover:text-butter transition-colors border-b border-cream hover:border-butter pb-1"
            >
              See the wedding day timeline →
            </Link>
          </div>
        </div>
      </section>

      {/* Photo trio strip */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {[
          { src: "/images/engagement/hands.jpg", alt: "Holding hands" },
          {
            src: "/images/engagement/briHandRing.jpg",
            alt: "Engagement ring detail",
          },
          {
            src: "/images/engagement/celebration.jpg",
            alt: "Celebrating together",
          },
        ].map((photo) => (
          <div key={photo.src} className="relative aspect-square">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* Wave divider: cream into terracotta */}
      {/* <div className="relative h-20 md:h-28 bg-cream">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,0 480,120 720,88 C960,56 1200,0 1440,64 L1440,120 L0,120 Z"
            fill="var(--color-terracotta)"
          />
        </svg>
      </div> */}

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
              Austin grew up coming to Michigan, and once Bri got to know the
              landscape, the beauty of it was impossible to miss. Since 2023,
              this stretch of the Leelanau Peninsula has become one of our
              favorite places.
            </p>
            <p className="text-lg md:text-2xl text-stone-600 leading-relaxed mb-8">
              It also happens to sit right in the middle of everyone we love,
              scattered as you all are from the West Coast to the East Coast to
              Texas. Somehow, that made it the easiest choice in the world.
            </p>
            <Link
              href="/lodging"
              className="text-md uppercase tracking-widest text-rosemary hover:text-terracotta transition-colors border-b border-rosemary hover:border-terracotta pb-1"
            >
              Where to stay →
            </Link>
          </div>

          <div className="relative order-1 md:order-2">
            <span className="absolute -right-4 top-0 bottom-0 flex items-center [writing-mode:vertical-lr] text-xs tracking-[0.3em] uppercase text-rosemary">
              02 / Celebration
            </span>
            <div className="relative mr-6 aspect-[4/5] border-2 border-rosemary/40 p-3">
              <div className="relative w-full h-full">
                <Image
                  src="/images/engagement/happyTogetherBack.jpg"
                  alt="Bri and Austin together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing section with framed photo and RSVP CTA */}
      <section className="relative w-full h-[50vh] min-h-[350px] bg-terracotta">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cream/60" />

        <div className="relative w-full h-full py-6">
          <div className="relative w-full h-full">
            <Image
              src="/images/engagement/knee2.jpg"
              alt="Austin proposing to Bri"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="/rsvp"
                className="bg-cream text-terracotta px-10 py-4 text-3xl uppercase tracking-[0.25em] hover:bg-mustard hover:text-white transition-colors rounded-sm shadow-lg"
              >
                RSVP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
