"use client";

import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

export default function UnrollImage(props: ImageProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <Image
        {...props}
        style={{
          clipPath: revealed ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 0.9s ease-in-out",
        }}
      />
    </div>
  );
}
