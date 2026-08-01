"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-09-30T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof getTimeLeft
  > | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-sans font-bold text-5xl md:text-7xl text-terracotta tabular-nums">
            {unit.value}
          </span>
          <span className="font-sans font-semibold text-sm md:text-base uppercase tracking-widest text-stone-600 mt-2">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
