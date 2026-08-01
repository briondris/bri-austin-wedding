"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navLinks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <nav className="md:hidden flex flex-col items-center gap-6 py-8 border-t border-cream/20 text-sm tracking-widest uppercase">
      {navLinks.slice(1).map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`pb-1 border-b transition-colors ${
              isActive
                ? "text-cream border-cream"
                : "text-cream/70 border-transparent hover:text-cream"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
