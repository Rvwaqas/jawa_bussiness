"use client";

import Image from "next/image";

interface MarkslinkLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function MarkslinkLogo({
  variant = "light",
  className = "",
}: MarkslinkLogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Rounded Jawa Logo Badge */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-full overflow-hidden bg-white p-0.5 shadow-md border-2 border-white/20 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/jawa-rounded.png"
          alt="Jawa Logo"
          fill
          className="object-cover rounded-full"
          priority
        />
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black text-[22px] sm:text-[24px] tracking-tight uppercase transition-colors ${
            isLight ? "text-white" : "text-[#101824]"
          }`}
          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
        >
          JAWA
        </span>
        <span
          className={`text-[9px] sm:text-[9.5px] font-bold tracking-[0.24em] uppercase mt-0.5 ${
            isLight ? "text-white/75" : "text-[#4a5257]"
          }`}
        >
          IT AGENCY SERVICES
        </span>
      </div>
    </div>
  );
}
