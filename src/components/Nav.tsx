"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopNav from "./menu/DesktopNav";
import MobileMenu from "./menu/MobileMenu";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-terracotta text-cream">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-3xl tracking-wide">
          Bri &amp; Austin
        </Link>

        <DesktopNav />

        <button
          className="md:hidden flex flex-col gap-1.5 w-7"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-px bg-cream transition-transform ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`h-px bg-cream transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px bg-cream transition-transform ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
