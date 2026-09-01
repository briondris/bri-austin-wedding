import Countdown from "@/components/Countdown";
import SaveTheDateForm from "@/components/SaveTheDateForm";
import {
  SAVE_THE_DATE_DEADLINE_LABEL,
  SAVE_THE_DATE_DEADLINE,
} from "@/data/saveTheDate";

export default function SaveTheDate() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <div className="px-6 pb-10 md:pb-16">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center pt-8 md:pt-20 pb-3 md:pb-6">
          <p className="font-sans font-semibold text-[10px] md:text-sm uppercase tracking-[0.28em] text-bloodOrange mb-2 md:mb-3">
            Mark Your Calendar
          </p>

          <h1 className="font-display text-4xl md:text-7xl leading-none text-stone-800 mb-3 md:mb-5">
            Save the <span className="italic text-olive">Date</span>
          </h1>

          <p className="font-display text-lg md:text-3xl leading-snug mb-3 md:mb-5">
            <span className="text-stone-800">
              July 31, 2027 · The Foxglove Farm
            </span>
            <br />
            <span className="text-olive">Suttons Bay, MI</span>
          </p>

          <p className="max-w-xl mx-auto font-sans text-xs md:text-lg text-stone-600 leading-relaxed">
            Add your address below by{" "}
            <span className="font-semibold text-bloodOrange">
              {SAVE_THE_DATE_DEADLINE_LABEL}
            </span>{" "}
            so we can mail you the invite!
          </p>
        </div>

        {/* Countdown */}
        <div className="max-w-4xl mx-auto mb-5 md:mb-10">
          <Countdown targetDate={SAVE_THE_DATE_DEADLINE} />
        </div>

        {/* Form intro */}
        <div className="max-w-xl mx-auto text-center border-t border-olive/25 pt-5 md:pt-7 mb-4 md:mb-7">
          <p className="font-sans font-semibold text-[10px] md:text-sm uppercase tracking-[0.2em] text-bloodOrange">
            Enter and save your address below ↓
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <SaveTheDateForm />
        </div>
      </div>
    </main>
  );
}
