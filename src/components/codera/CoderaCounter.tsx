"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const stats = [
  { value: 232, suffix: "+", label: "Projects Completed", delay: 0.08 },
  { value: 65, suffix: "+", label: "Happy Clients", delay: 0.18 },
  { value: 99, suffix: "%", label: "Satisfaction Rate", delay: 0.28 },
  { value: 52, suffix: "+", label: "IT Experts", delay: 0.38 },
];

export default function CoderaCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#101824] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/bg/bg-01.jpg"
          alt="Codera IT Excellence Workspace Background"
          fill
          className="object-cover object-center opacity-40 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-[#101824]/85 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center">
          {stats.map((stat, idx) => {
            const isLast = idx === stats.length - 1;
            return (
              <div
                key={idx}
                className="relative text-center group"
                style={revealStyle(isVisible, stat.delay, 60)}
              >
                {/* Number with Glossy White-to-Fade 3D Gradient */}
                <div
                  className="font-extrabold tracking-tight mb-2 select-none text-7xl sm:text-8xl lg:text-[105px] xl:text-[120px] leading-[0.85] flex items-center justify-center"
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    letterSpacing: "-0.04em",
                    filter: "drop-shadow(0 15px 25px rgba(0, 0, 0, 0.7))",
                  }}
                >
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.55) 45%, rgba(255, 255, 255, 0.08) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    }}
                  >
                    <AnimatedCounter
                      end={stat.value}
                      start={1}
                      duration={1800}
                      suffix={stat.suffix}
                    />
                  </span>
                </div>

                {/* Label */}
                <h3
                  className="text-white text-base sm:text-lg font-medium tracking-normal mt-3"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  {stat.label}
                </h3>

                {/* Orange Starburst Separator */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-4 top-[35%] -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#fa510f] drop-shadow-[0_2px_8px_rgba(250,81,15,0.5)] animate-rotate-icon"
                      fill="currentColor"
                    >
                      <path d="M12 0l1.9 2.5 3.1-.7 1 3 3 1-.7 3.1 2.5 1.9-1.9 2.5.7 3.1-3 1-1 3-3.1-.7L12 24l-1.9-2.5-3.1.7-1-3-3-1 .7-3.1L1.2 13.2l1.9-2.5-.7-3.1 3-1 1-3 3.1.7z" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
