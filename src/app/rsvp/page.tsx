import RSVPForm from "@/components/RSVPForm";
import { features } from "@/config/features";
import ComingSoon from "@/components/ComingSoon";

export default function RSVP() {
  if (!features.rsvp) {
    return <ComingSoon pageName="RSVP " />;
  }

  return (
    <main className="bg-cream min-h-screen px-6 py-24">
      <div className="max-w-lg mx-auto text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-3">
          Kindly Respond By
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-stone-800 mb-4">
          RSVP
        </h1>
        <p className="text-xl text-stone-600">
          We can&apos;t wait to celebrate with you. Let us know if you&apos;ll
          be joining us at Foxglove Farm.
        </p>
      </div>

      <RSVPForm />
    </main>
  );
}
