import Link from "next/link";
import { navLinks } from "@/data/navLinks";

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex gap-8 text-lg tracking-widest uppercase">
      {navLinks.slice(1).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-stone-500 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
