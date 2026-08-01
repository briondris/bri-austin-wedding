import { features } from "@/config/features";

const allLinks = [
  { href: "/", label: "Home", enabled: true },
  { href: "/savethedate", label: "Save the Date", enabled: true },
  { href: "/rsvp", label: "RSVP", enabled: features.rsvp },
  { href: "/schedule", label: "Schedule", enabled: features.schedule },
  { href: "/lodging", label: "Lodging", enabled: true },
  { href: "/details", label: "Details", enabled: features.details },
  { href: "/thingstodo", label: "Things To Do", enabled: true },
  { href: "/registry", label: "Registry", enabled: features.registry },
];

export const navLinks = allLinks.filter((link) => link.enabled);
