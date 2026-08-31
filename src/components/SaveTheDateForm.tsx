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
      <p className="mx-auto max-w-md text-center font-sans text-lg leading-relaxed text-olive md:text-2xl">
        Thank you! We&apos;ve got your address and a paper save the date will be
        headed your way soon.
      </p>
    );
  }

  const inputClass =
    "w-full rounded-sm border border-olive/30 bg-white/50 px-3 py-2 font-sans text-sm text-stone-800 placeholder:text-stone-500 focus:border-mossGreen focus:outline-none focus:ring-1 focus:ring-mossGreen/30 md:px-4 md:py-3 md:text-lg";

  const labelClass =
    "mb-1 block font-sans text-xs font-semibold uppercase tracking-widest text-bloodOrange md:text-sm";

  return (
    <div className="mx-auto w-full max-w-lg">
      <form action={handleSubmit} className="flex flex-col gap-3 md:gap-4">
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

        {/* Additional guests */}
        <div className="rounded-sm border border-olive/20">
          <button
            type="button"
            onClick={() => setGuestsOpen(!guestsOpen)}
            className="flex w-full items-center justify-between px-3 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-bloodOrange md:px-4 md:py-3 md:text-sm"
          >
            <span>Additional Guests (optional)</span>

            <svg
              className={`h-4 w-4 transition-transform ${
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
            <div className="flex flex-col gap-3 px-3 pb-3 md:px-4 md:pb-4">
              <Checkbox checked={hasPartner} onChange={setHasPartner}>
                I&apos;m bringing a significant other to include
              </Checkbox>

              {hasPartner && (
                <div className="grid grid-cols-[2fr_2fr_1fr] gap-2 pl-8 md:gap-3.5">
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

          <div className="flex flex-col gap-2 md:gap-3">
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

            <div className="grid grid-cols-2 gap-2 md:gap-3">
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
        <div className="rounded-sm border border-mossGreen/25 bg-mossGreen/5 px-3 py-2.5 md:px-4 md:py-3">
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

        {/* Sticky mobile submit */}
        <div
          className="
            sticky
            bottom-0
            z-20
            -mx-6
            mt-2
            border-t
            border-olive/20
            bg-cream/95
            px-6
            py-3
            backdrop-blur-sm

            md:static
            md:mx-0
            md:mt-1
            md:border-0
            md:bg-transparent
            md:px-0
            md:py-0
            md:backdrop-blur-none
          "
        >
          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="
              w-full
              rounded-sm
              bg-apricot
              px-5
              py-3
              font-sans
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-cream
              transition-colors
              hover:bg-copperTulip
              disabled:cursor-not-allowed
              disabled:opacity-60
              md:py-3
              md:text-lg
            "
          >
            {formStatus === "submitting" ? "Submitting..." : "Save My Address"}
          </button>
        </div>
      </form>

      {formStatus === "error" && (
        <div className="mt-4 rounded-sm border-2 border-bloodOrange bg-bloodOrange/5 px-5 py-4 text-center">
          <p className="mb-2 font-sans text-base font-semibold text-bloodOrange md:text-xl">
            Something went wrong on our end.
          </p>

          <p className="font-sans text-sm leading-relaxed text-stone-700 md:text-lg">
            Please reach out to Bri or Austin directly so we can get your
            address the old-fashioned way — text or call{" "}
            <a href="tel:+18622680148" className="font-semibold underline">
              (862) 268-0148
            </a>{" "}
            or email{" "}
            <a
              href="mailto:bbondris@gmail.com"
              className="font-semibold underline"
            >
              bbondris@gmail.com
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
