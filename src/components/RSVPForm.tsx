"use client";

import { useState } from "react";
import { submitRSVP } from "@/actions/rsvp";

export default function RSVPForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    const result = await submitRSVP(formData);
    setStatus(result.success ? "success" : "error");
  }

  if (status === "success") {
    return (
      <p className="text-center text-lg text-rosemary max-w-md mx-auto">
        Thank you! Your RSVP has been received.
      </p>
    );
  }

  return (
    <form
      action={handleSubmit}
      className="max-w-md mx-auto flex flex-col gap-4"
    >
      <input
        name="guest_name"
        placeholder="Full name"
        required
        className="border border-rosemary/30 bg-white/50 rounded-sm px-4 py-3 text-stone-800 placeholder:text-stone-500"
      />
      <label className="flex items-center gap-2 text-stone-700">
        <input type="checkbox" name="attending" defaultChecked />
        Attending
      </label>
      <input
        type="number"
        name="party_size"
        min={1}
        defaultValue={1}
        className="border border-rosemary/30 bg-white/50 rounded-sm px-4 py-3 text-stone-800"
      />
      <input
        name="meal_preference"
        placeholder="Meal preference"
        className="border border-rosemary/30 bg-white/50 rounded-sm px-4 py-3 text-stone-800 placeholder:text-stone-500"
      />
      <input
        name="dietary_restrictions"
        placeholder="Dietary restrictions"
        className="border border-rosemary/30 bg-white/50 rounded-sm px-4 py-3 text-stone-800 placeholder:text-stone-500"
      />
      <textarea
        name="message"
        placeholder="Leave a message (optional)"
        className="border border-rosemary/30 bg-white/50 rounded-sm px-4 py-3 text-stone-800 placeholder:text-stone-500"
      />
      <button
        type="submit"
        className="bg-terracotta text-cream rounded-sm px-4 py-3 text-sm uppercase tracking-widest hover:bg-rosemary transition-colors"
      >
        {status === "submitting" ? "Submitting..." : "Submit RSVP"}
      </button>
      {status === "error" && (
        <p className="text-red-500">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
