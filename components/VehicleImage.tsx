"use client";

import { useState } from "react";
import Image from "next/image";

interface VehicleImageProps {
  src: string;
  alt: string;
  model: string;
}

export default function VehicleImage({ src, alt, model }: VehicleImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        style={{ background: "#141414" }}
      >
        {/* Mazda M wordmark placeholder */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "rgba(193,0,31,0.12)", border: "1px solid rgba(193,0,31,0.2)" }}
        >
          <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="19" stroke="#C1001F" strokeWidth="1.5" />
            <path
              d="M8 28L14 12L20 22L26 12L32 28"
              stroke="#C1001F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <p
          className="text-white/30 text-xs font-semibold uppercase tracking-widest"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {model}
        </p>
        <p className="text-white/20 text-[10px]">Image coming soon</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      onError={() => setError(true)}
    />
  );
}
