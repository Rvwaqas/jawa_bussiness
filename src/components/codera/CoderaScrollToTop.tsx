"use client";

import { useEffect, useState } from "react";

export default function CoderaScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
        setScrollProgress(progress);
      }
      if (currentScroll > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  const strokeDashoffset = 100 - scrollProgress;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#101824] text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-200 group border border-white/15"
      aria-label="Scroll to top"
    >
      {/* Circular Progress Ring matching Codera */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 36 36">
        <path
          className="text-white/10"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-[#fa510f] transition-all duration-150"
          strokeDasharray="100, 100"
          strokeDashoffset={strokeDashoffset}
          strokeWidth="2.8"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      {/* Percentage Number Display like Codera */}
      <span className="relative z-10 text-[11px] font-extrabold text-white tracking-tight">
        {Math.round(scrollProgress)}%
      </span>
    </button>
  );
}
