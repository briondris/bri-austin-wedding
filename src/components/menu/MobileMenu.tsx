"use client";

import Link from "next/link";
import { navLinks } from "@/data/navLinks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <nav className="md:hidden flex flex-col items-center gap-6 py-8 border-t border-stone-200 text-lg tracking-widest uppercase">
      {navLinks.slice(1).map((link) => (
        <Link key={link.href} href={link.href} onClick={onClose}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
