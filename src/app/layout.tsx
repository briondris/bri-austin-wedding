import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Jost,
  Caveat,
  Shadows_Into_Light,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const scriptLight = Shadows_Into_Light({
  variable: "--font-script-light",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bri & Austin — July 31, 2027",
  description: "Join us at Foxglove Farm, Leelanau Peninsula, Michigan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${script.variable} ${scriptLight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-stone-800">
        <Nav />
        {children}
      </body>
    </html>
  );
}
