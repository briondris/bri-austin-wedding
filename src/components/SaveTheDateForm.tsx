"use client";

import { useState } from "react";
import { submitSaveTheDate } from "@/actions/saveTheDate";
import Checkbox from "@/components/Checkbox";

export default function SaveTheDateForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [hasPartner, setHasPartner] = useState(false);
  const [hasChildren, setHasChildren] = useState(false);
  const [interestedAnchorInn, setInterestedAnchorInn] = useState(false);

  async function handleSubmit(formData: FormData) {
    setFormStatus("submitting");
    const result = await submitSaveTheDate(formData);
    setFormStatus(result.success ? "success" : "error");
  }

  if (formStatus === "success") {
    return (
      <p className="font-sans text-lg md:text-2xl text-center text-rosemary max-w-md mx-auto">
        Thank you! We&apos;ve got your address and a paper save the date will be
        headed your way soon.
      </p>
    );
  }

  const inputClass =
    "font-sans text-sm md:text-lg border border-rosemary/30 bg-white/50 rounded-sm px-3 py-2 md:px-4 md:py-3 text-stone-800 placeholder:text-stone-500 w-full";

  const labelClass =
    "font-sans font-semibold text-xs md:text-sm uppercase tracking-widest text-terracotta mb-1 block";

  return (
    <div className="max-w-lg mx-auto w-full">
      <form action={handleSubmit} className="flex flex-col gap-4">
        {/* Your name */}
        <div>
          <p className={labelClass}>Your Name</p>
          <div className="grid grid-cols-[2fr_2fr_1fr] gap-2 md:gap-3.5">
            <input
              name="first_name"
              placeholder="First name"
              required
              className={inputClass}
            />
            <input
              name="last_name"
              placeholder="Last name"
              required
              className={inputClass}
            />
            <input name="suffix" placeholder="Suffix" className={inputClass} />
          </div>
        </div>

        {/* Additional guests, collapsible */}
        <div className="border border-rosemary/20 rounded-sm">
          <button
            type="button"
            onClick={() => setGuestsOpen(!guestsOpen)}
            className="w-full flex items-center justify-between px-4 py-3 font-sans font-semibold text-xs md:text-sm uppercase tracking-widest text-terracotta"
          >
            <span>Additional Guests (optional)</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                guestsOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {guestsOpen && (
            <div className="flex flex-col gap-3 px-4 pb-4">
              <Checkbox checked={hasPartner} onChange={setHasPartner}>
                I&apos;m bringing a significant other to include
              </Checkbox>
              {hasPartner && (
                <div className="grid grid-cols-[2fr_2fr_1fr] gap-2 md:gap-3.5 pl-8">
                  <input
                    name="partner_first_name"
                    placeholder="First name"
                    className={inputClass}
                  />
                  <input
                    name="partner_last_name"
                    placeholder="Last name"
                    className={inputClass}
                  />
                  <input
                    name="partner_suffix"
                    placeholder="Suffix"
                    className={inputClass}
                  />
                </div>
              )}

              <Checkbox checked={hasChildren} onChange={setHasChildren}>
                Bringing children we should include on the invitation
              </Checkbox>
              {hasChildren && (
                <input
                  name="children_names"
                  placeholder="Children's names"
                  className={`${inputClass} ml-8`}
                  style={{ width: "calc(100% - 2rem)" }}
                />
              )}
            </div>
          )}
          <input
            type="hidden"
            name="has_children"
            value={hasChildren ? "on" : ""}
          />
        </div>

        {/* Address */}
        <div>
          <p className={labelClass}>Mailing Address</p>
          <div className="flex flex-col gap-2 md:gap-3.5">
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
            <div className="grid grid-cols-2 gap-2 md:gap-3.5">
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
          </div>
        </div>

        {/* Anchor Inn interest */}
        <div className="bg-terracotta/10 border border-terracotta/30 rounded-sm px-4 py-3">
          <Checkbox
            checked={interestedAnchorInn}
            onChange={setInterestedAnchorInn}
          >
            <span className="text-xs md:text-sm">
              I&apos;m interested in staying at the Anchor Inn — please reach
              out about our room block!
            </span>
          </Checkbox>
          <input
            type="hidden"
            name="interested_anchor_inn"
            value={interestedAnchorInn ? "on" : ""}
          />
        </div>

        <button
          type="submit"
          className="font-sans font-semibold bg-terracotta text-cream rounded-sm px-5 py-2.5 md:py-3 text-sm md:text-lg uppercase tracking-widest hover:bg-rosemary transition-colors mt-1"
        >
          {formStatus === "submitting" ? "Submitting..." : "Save My Address"}
        </button>
      </form>

      {formStatus === "error" && (
        <div className="mt-4 border-2 border-terracotta bg-terracotta/10 rounded-sm px-5 py-4 text-center">
          <p className="font-sans font-semibold text-base md:text-xl text-terracotta mb-2">
            Something went wrong on our end.
          </p>
          <p className="font-sans text-sm md:text-lg text-stone-700 leading-relaxed">
            Please reach out to Bri or Austin directly so we can get your
            address the old-fashioned way — text or call{" "}
            <a href="tel:+18622680148" className="font-semibold underline">
              (862) 268-0148
            </a>{" "}
            or email href="mailto:bbondris@gmail.com" className="font-semibold
            underline"
            <a>bbondris@gmail.com</a>.
          </p>
        </div>
      )}
    </div>
  );
}
