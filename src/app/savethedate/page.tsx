import Countdown from "@/components/Countdown";
import SaveTheDateForm from "@/components/SaveTheDateForm";

export default function SaveTheDate() {
  return (
    <main className="bg-cream min-h-screen px-6 pb-16 flex flex-col">
      <div className="max-w-1xl mx-auto text-center pt-24 pb-10">
        <p className="font-sans font-semibold text-xs md:text-lg uppercase tracking-[0.3em] text-terracotta mb-2 md:mb-4">
          Mark Your Calendar
        </p>
        <h1 className="font-display text-4xl md:text-7xl text-stone-800 mb-2 md:mb-4">
          Save the <span className="italic text-rosemary">Date</span>
        </h1>
        <p className="font-display text-xl md:text-4xl text-rosemary mb-2 md:mb-4">
          July 31, 2027 · Foxglove Farm, MI
        </p>
        <p className="font-sans font-bold text-sm md:text-2xl text-stone-600 leading-snug">
          Add your address below by{" "}
          <span className="text-terracotta">September 30</span> so we can mail
          the RSVP to you!
        </p>
      </div>

      <div className="mb-3 md:mb-6">
        <Countdown />
      </div>

      <div className="flex flex-col items-center mb-3 md:mb-8">
        <p className="font-sans font-semibold text-xs md:text-lg uppercase tracking-widest text-terracotta">
          Enter your address below ↓
        </p>
      </div>

      <SaveTheDateForm />
    </main>
  );
}
