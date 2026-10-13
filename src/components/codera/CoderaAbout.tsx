"use client";

import Image from "next/image";
import Link from "next/link";
import { Asterisk } from "lucide-react";
import AnimatedHeading, { AnimatedSubTitle } from "./AnimatedHeading";
import AnimatedCounter from "./AnimatedCounter";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

export default function CoderaAbout() {
  // Each sub-section gets its own reveal observer
  const header = useScrollReveal({ threshold: 0.1 });
  const para = useScrollReveal({ threshold: 0.1 });
  const counter25 = useScrollReveal({ threshold: 0.1 });
  const img1 = useScrollReveal({ threshold: 0.1 });
  const img2 = useScrollReveal({ threshold: 0.1 });
  const learnBtn = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#fa510f]/[0.035] via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#101824]/10 items-start">
          {/* Subtitle */}
          <div className="lg:col-span-3 pt-2">
            <AnimatedSubTitle delay={0.05} direction="bottom">
              <div className="inline-flex items-center gap-2">
                <Asterisk className="w-4 h-4 text-[#fa510f] animate-rotate-icon stroke-[2.5]" />
                <span
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider"
                  style={{
                    background: "linear-gradient(100deg, #101824 0%, rgba(16, 24, 36, 0.4) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                  }}
                >
                  ABOUT COMPANY
                </span>
              </div>
            </AnimatedSubTitle>
          </div>

          {/* Heading + Paragraph */}
          <div className="lg:col-span-9">
            <AnimatedHeading
              text="We deliver reliable IT solutions and modern tech services to help all companies succeed and grow worldwide."
              as="h2"
              direction="bottom"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#101824] leading-[1.08] mb-5 tracking-tight"
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                letterSpacing: "-0.035em",
              }}
            />

            <div
              ref={para.ref as React.RefObject<HTMLDivElement>}
              style={revealStyle(para.isVisible, 0.2)}
            >
              <p className="text-[#4a5257] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                We are a team of passionate IT professionals dedicated to delivering innovative and reliable technology solutions. Our expertise spans software development.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 mt-12 items-center">

          {/* Left Group: 25+ Counter & Image 1 */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">

              {/* Massive 25+ */}
              <div
                className="sm:col-span-6"
                ref={counter25.ref as React.RefObject<HTMLDivElement>}
                style={revealStyle(counter25.isVisible, 0.05, 45)}
              >
                <div
                  className="font-extrabold select-none text-[95px] sm:text-[110px] md:text-[125px] lg:text-[135px] xl:text-[145px] leading-[0.80] flex items-start tracking-tighter"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  <span
                    style={{
                      background: "linear-gradient(180deg, #fa510f 0%, rgba(250, 81, 15, 0.45) 60%, rgba(250, 81, 15, 0.05) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <AnimatedCounter end={25} start={1} duration={1500} />
                  </span>
                  <sup
                    className="text-4xl sm:text-5xl lg:text-6xl text-[#fa510f] font-extrabold ml-1 -mt-1"
                    style={{ verticalAlign: "top", lineHeight: "1" }}
                  >
                    +
                  </sup>
                </div>
                <h3
                  className="text-base sm:text-[17px] font-semibold text-[#101824] leading-snug mt-3 max-w-[190px]"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  Successful IT projects delivered globally.
                </h3>
              </div>

              {/* Image 1: Holographic Laptop */}
              <div
                className="sm:col-span-6"
                ref={img1.ref as React.RefObject<HTMLDivElement>}
                style={revealStyle(img1.isVisible, 0.2)}
              >
                <div className="image-hover rounded-xl overflow-hidden shadow-md h-64 sm:h-[260px] w-full relative">
                  <Image
                    src="/images/images/team-collection.jpg"
                    alt="Technology Dashboard"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Group: Wide Image 2 & Learn More Button */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">

              {/* Wide Image 2: Team Collaboration */}
              <div
                className="sm:col-span-8"
                ref={img2.ref as React.RefObject<HTMLDivElement>}
                style={revealStyle(img2.isVisible, 0.1)}
              >
                <div className="image-hover rounded-xl overflow-hidden shadow-md h-72 sm:h-[320px] lg:h-[350px] w-full relative">
                  <Image
                    src="/images/images/team-collection2.jpg"
                    alt="Team Collaboration"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Learn More Round Circle Button */}
              <div
                className="sm:col-span-4 flex justify-center sm:justify-end"
                ref={learnBtn.ref as React.RefObject<HTMLDivElement>}
                style={revealStyle(learnBtn.isVisible, 0.3, 30)}
              >
                <Link
                  href="/about"
                  className="group relative w-[145px] h-[145px] sm:w-[155px] sm:h-[155px] lg:w-[166px] lg:h-[166px] rounded-full border border-[#101824] flex flex-col items-center justify-center transition-all duration-300 hover:border-[#fa510f] hover:bg-[#101824]"
                >
                  {/* Orange Dot at the top inside circle */}
                  <span className="w-3.5 h-3.5 rounded-full bg-[#fa510f] mb-3 transition-transform duration-300 group-hover:scale-125" />
                  <span
                    className="font-bold text-[15px] sm:text-[16px] text-[#101824] group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                  >
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
