"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navLinks";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-8 text-lg tracking-widest uppercase">
      {navLinks.slice(1).map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`pb-1 border-b transition-colors ${
              isActive
                ? "text-cream border-cream"
                : "text-cream/70 border-transparent hover:text-cream hover:border-cream/50"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
