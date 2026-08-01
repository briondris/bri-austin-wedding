import { features } from "@/config/features";
import ComingSoon from "@/components/ComingSoon";

export default function Schedule() {
  if (!features.schedule) {
    return <ComingSoon pageName="Schedule " />;
  }

  const days = [
    {
      date: "Friday, July 30, 2027",
      events: [
        {
          time: "6:00 PM – 9:00 PM",
          title: "Welcome Party",
          location: "Foxglove Farm Barn",
          address: "Leelanau Peninsula, MI",
          mapUrl:
            "https://maps.google.com/?q=Foxglove+Farm+Leelanau+Peninsula+MI",
          description:
            "Join us the night before for a relaxed dinner with drinks and good company as everyone settles in for the weekend.",
        },
      ],
    },
    {
      date: "Saturday, July 31, 2027",
      events: [
        {
          time: "3:00 PM – 3:30 PM",
          title: "Ceremony",
          location: "The Meadow, Foxglove Farm",
          address: "Leelanau Peninsula, MI",
          mapUrl:
            "https://maps.google.com/?q=Foxglove+Farm+Leelanau+Peninsula+MI",
          description:
            'We\'ll say "I do" in the meadow. Ceremony is on grass, so flat shoes are recommended.',
        },
        {
          time: "3:30 PM – 5:00 PM",
          title: "Cocktail Hour",
          location: "The Orchard, Foxglove Farm",
          address: "Leelanau Peninsula, MI",
          mapUrl:
            "https://maps.google.com/?q=Foxglove+Farm+Leelanau+Peninsula+MI",
          description:
            "Drinks, light bites, and live music while we take photos.",
        },
        {
          time: "5:00 PM – 7:00 PM",
          title: "Dinner & Speeches",
          location: "The Barn, Foxglove Farm",
          address: "Leelanau Peninsula, MI",
          mapUrl:
            "https://maps.google.com/?q=Foxglove+Farm+Leelanau+Peninsula+MI",
          description:
            "Sit-down dinner, toasts from our favorite people, and a few surprises.",
        },
        {
          time: "7:00 PM – 11:00 PM",
          title: "Cake Cutting & Dancing",
          location: "The Barn, Foxglove Farm",
          address: "Leelanau Peninsula, MI",
          mapUrl:
            "https://maps.google.com/?q=Foxglove+Farm+Leelanau+Peninsula+MI",
          description:
            "Cake, dancing, and celebrating until the lights come up.",
        },
      ],
    },
  ];

  return (
    <main className="bg-cream min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="font-sans font-semibold text-base md:text-lg uppercase tracking-[0.3em] text-terracotta mb-4">
          Foxglove Farm
        </p>
        <h1 className="font-display text-6xl md:text-7xl text-stone-800">
          Wedding Day <span className="italic text-rosemary">Schedule</span>
        </h1>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        {days.map((day) => (
          <div key={day.date}>
            <h2 className="font-display text-4xl md:text-5xl text-terracotta text-center mb-12">
              {day.date}
            </h2>

            <div className="flex flex-col gap-16">
              {day.events.map((event) => (
                <div
                  key={event.title}
                  className="grid md:grid-cols-[1fr_auto_1.3fr] gap-6 md:gap-10 items-center"
                >
                  <div className="text-center md:text-right">
                    <h3 className="font-display text-4xl md:text-5xl text-stone-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="font-sans font-semibold text-lg md:text-xl uppercase tracking-widest text-terracotta">
                      {event.time}
                    </p>
                  </div>

                  <div className="hidden md:block w-px bg-rosemary/20 h-full min-h-[100px]" />

                  <div className="text-center md:text-left">
                    <p className="font-sans font-semibold text-xl md:text-2xl text-stone-800">
                      {event.location}
                    </p>
                    <p className="font-sans text-base md:text-lg text-stone-500 mb-4">
                      {event.address}
                    </p>
                    <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      <a
                        href={event.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans font-semibold inline-block bg-rosemary text-cream px-8 py-4 text-base md:text-lg uppercase tracking-wide rounded-sm hover:bg-terracotta transition-colors shadow-md"
                      >
                        View Map →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
