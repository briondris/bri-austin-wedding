"use client";

import { useState } from "react";
import { submitSaveTheDate } from "@/actions/saveTheDate";

export default function SaveTheDateForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    const result = await submitSaveTheDate(formData);
    setStatus(result.success ? "success" : "error");
  }

  if (status === "success") {
    return (
      <p className="font-sans text-xl md:text-2xl text-center text-rosemary max-w-md mx-auto">
        Thank you! We&apos;ve got your address and a paper save the date will be
        headed your way soon.
      </p>
    );
  }

  const inputClass =
    "font-sans text-lg md:text-xl border border-rosemary/30 bg-white/50 rounded-sm px-5 py-4 text-stone-800 placeholder:text-stone-500 w-full";

  return (
    <div className="max-w-lg mx-auto">
      <form action={handleSubmit} className="flex flex-col gap-5">
        <input
          name="full_name"
          placeholder="Full name or names"
          required
          className={inputClass}
        />
        <input
          name="address_line1"
          placeholder="Street address"
          required
          className={inputClass}
        />
        <input
          name="address_line2"
          placeholder="Apt / Unit (optional)"
          className={inputClass}
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            name="city"
            placeholder="City"
            required
            className={inputClass}
          />
          <input
            name="state"
            placeholder="State"
            required
            className={inputClass}
          />
        </div>
        <input
          name="zip"
          placeholder="ZIP code"
          required
          className={inputClass}
        />
        <button
          type="submit"
          className="font-sans font-semibold bg-terracotta text-cream rounded-sm px-6 py-4 text-lg md:text-xl uppercase tracking-widest hover:bg-rosemary transition-colors mt-2"
        >
          {status === "submitting" ? "Submitting..." : "Save My Address"}
        </button>
      </form>

      {status === "error" && (
        <div className="mt-6 border-2 border-terracotta bg-terracotta/10 rounded-sm px-6 py-5 text-center">
          <p className="font-sans font-semibold text-lg md:text-xl text-terracotta mb-2">
            Something went wrong on our end.
          </p>
          <p className="font-sans text-base md:text-lg text-stone-700 leading-relaxed">
            Please reach out to Bri or Austin directly so we can get your
            address the old-fashioned way — text or call{" "}
            <a href="tel:+18622680148" className="font-semibold underline">
              (862) 268-0148
            </a>{" "}
            or email{" "}
            <a href="bbondris@gmail.com" className="font-semibold underline">
              bbondris@gmail.com
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
