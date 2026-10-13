"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import ParticleField from "@/components/three/ParticleField";
import AnimatedCounter from "./AnimatedCounter";

export default function CoderaHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between bg-[#101824] overflow-hidden pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14">
        {/* Background Image with Clearer, Balanced Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/img/banner/video-bg-img.jpg"
            alt="Jawa Background"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101824] via-[#101824]/45 to-[#101824]/50" />
        </div>

        {/* Ambient Subtle Three.js Background */}
        <div className="absolute inset-0 z-1 pointer-events-none opacity-40">
          <ParticleField />
        </div>

        {/* Top Spacer / Flex Layout */}
        <div className="relative z-10 w-full" />

        {/* Middle: Huge Headline with Slide-in Transition */}
        <div className="relative z-10 w-full my-auto py-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-black text-white uppercase tracking-tight leading-[0.92] max-w-5xl select-none">
            Smart it solutions<br />
            for modern<br />
            business success.
          </h1>
        </div>

        {/* Bottom Row: Rotating Badge + 25 Years Animated Counter + Description */}
        <div className="relative z-10 w-full pt-4 animate-fade-in-up [animation-delay:200ms]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end justify-between">
            {/* Left: Rotating Circular Text Badge */}
            <div className="md:col-span-4 lg:col-span-3 flex items-center">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full animate-rotated-circle"
                >
                  <defs>
                    <path
                      id="heroTextPath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      fill="none"
                    />
                  </defs>
                  <text
                    fontSize="10"
                    fontWeight="700"
                    fill="#ffffff"
                    letterSpacing="2.8"
                    className="uppercase opacity-90"
                  >
                    <textPath xlinkHref="#heroTextPath" startOffset="0%">
                      Advance Technology Experts • Smart IT Solutions •
                    </textPath>
                  </text>
                </svg>

                {/* Center Hexagon Icon */}
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="absolute inset-auto w-14 h-14 rounded-full border border-white/30 hover:border-[#fa510f] bg-[#101824]/60 hover:bg-[#fa510f]/20 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Play video"
                >
                  <div className="relative w-7 h-7 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/img/icons/banner-logo.png"
                      alt="Codera Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Middle: 25 Years of Excellence with Animated Number */}
            <div className="md:col-span-4 lg:col-span-5 flex items-end space-x-4">
              <div className="flex-shrink-0">
                <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[155px] font-bold border-text leading-none select-none">
                  <AnimatedCounter end={25} start={1} duration={1500} />
                </span>
              </div>
              <div className="pb-3 sm:pb-5">
                <p className="text-[#fa510f] font-semibold text-sm sm:text-base leading-tight max-w-[190px]">
                  Years of excellence in IT solutions and technology services.
                </p>
              </div>
            </div>

            {/* Right: Clean Description Paragraph */}
            <div className="md:col-span-4 lg:col-span-4 flex justify-start md:justify-end">
              <p className="text-white/80 text-sm sm:text-base font-normal leading-relaxed max-w-sm pb-3 sm:pb-5">
                Our IT company delivers innovative technology solutions that help businesses improve efficiency, enhance security, and accelerate digital transformation through reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#fa510f] transition-colors p-2"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pDWUf_g2zsc?autoplay=1"
              title="Codera IT Solutions Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
