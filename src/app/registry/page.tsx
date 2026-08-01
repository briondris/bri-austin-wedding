import { features } from "@/config/features";
import ComingSoon from "@/components/ComingSoon";

export default function Registry() {
  if (!features.registry) {
    return <ComingSoon pageName="Registry " />;
  }

  return (
    <main className="bg-terracotta min-h-screen px-6 py-24 flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-script text-4xl md:text-5xl text-cream mb-10 -rotate-2">
          a little honesty
        </p>

        <h1 className="font-display text-5xl md:text-6xl text-cream mb-12 leading-tight">
          We Know Weddings Are{" "}
          <span className="italic text-butter">Expensive</span>
          <br />
          To Attend
        </h1>

        <div className="max-w-2xl mx-auto space-y-8 text-left">
          <p className="text-2xl md:text-3xl text-cream leading-relaxed">
            Just getting to Foxglove Farm is already a gift to us — travel, time
            off, a place to stay, all of it. We don&apos;t take that lightly,
            and your presence is genuinely enough.
          </p>
          <p className="text-2xl md:text-3xl text-cream leading-relaxed">
            If you&apos;re still looking for a way to celebrate with us further,
            we&apos;re not registering for a toaster. We&apos;re saving toward
            our first house — so if you&apos;d like to contribute to that dream,
            it would mean more to us than anything wrapped in paper.
          </p>
        </div>

        <div className="mt-16 border-t-3 border-cream/30 pt-12">
          <p className="font-sans font-semibold text-base md:text-lg uppercase tracking-[0.3em] text-cream mb-6">
            Contribute to the House Fund
          </p>
          <a
            href="#"
            className="inline-block bg-cream text-terracotta px-12 py-5 text-lg md:text-xl font-sans font-semibold uppercase tracking-widest hover:bg-butter transition-colors rounded-sm shadow-lg"
          >
            Give a Gift
          </a>
        </div>
      </div>
    </main>
  );
}
