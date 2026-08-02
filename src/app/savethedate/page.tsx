import Countdown from "@/components/Countdown";
import SaveTheDateForm from "@/components/SaveTheDateForm";

export default function SaveTheDate() {
  return (
    <main className="bg-cream min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="font-sans font-semibold text-base md:text-lg uppercase tracking-[0.3em] text-terracotta mb-4">
          Mark Your Calendar
        </p>
        <h1 className="font-display text-6xl md:text-7xl text-stone-800 mb-6">
          Save the <span className="italic text-rosemary">Date</span>
        </h1>
        <p className="font-display text-3xl md:text-4xl text-rosemary mb-6">
          July 31, 2027 · Foxglove Farm, Michigan
        </p>
        <p className="font-sans text-xl md:text-2xl text-stone-600 leading-relaxed">
          Please save the date by{" "}
          <span className="font-semibold text-terracotta">September 30</span> —
          our official invitation will follow closer to the big day.
        </p>
      </div>

      <div className="mb-20">
        <Countdown />
      </div>

      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-stone-800 mb-4">
          Send Us Your Address
        </h2>
        <p className="font-sans text-lg md:text-xl text-stone-600 leading-relaxed">
          Drop your mailing address below and we&apos;ll make sure your save the
          date and, later, your formal invitation both find their way to you.
        </p>
      </div>

      <SaveTheDateForm />
    </main>
  );
}
