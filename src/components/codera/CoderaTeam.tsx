"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Asterisk, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/mindtech/SocialIcons";

import AnimatedHeading, { AnimatedSubTitle } from "./AnimatedHeading";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const teamMembers = [
  {
    name: "Alex Brown",
    role: "IT Manager",
    image: "/img/team/team-01.jpg",
  },
  {
    name: "Lara Smith",
    role: "Software Lead",
    image: "/img/team/team-02.jpg",
  },
  {
    name: "Ryan Clark",
    role: "DevOps Engineer",
    image: "/img/team/team-03.jpg",
  },
  {
    name: "Mia Davis",
    role: "UI/UX Designer",
    image: "/img/team/team-04.jpg",
  },
];

export default function CoderaTeam() {
  // Triple the array for seamless infinite sliding
  const carouselItems = [...teamMembers, ...teamMembers, ...teamMembers];
  const [currentIndex, setCurrentIndex] = useState(teamMembers.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const totalOriginal = teamMembers.length;

  // Auto-move right-to-left every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless wrap-around for infinite loop without snap glitch
  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalOriginal);
    } else if (currentIndex < totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalOriginal);
    }
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const headingRow = useScrollReveal({ threshold: 0.1 });
  const carouselReveal = useScrollReveal({ threshold: 0.08 });
  const bannerReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          ref={headingRow.ref as React.RefObject<HTMLDivElement>}
          style={revealStyle(headingRow.isVisible, 0.05)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end"
        >
          <div className="lg:col-span-4">
            <AnimatedSubTitle delay={0.05} direction="bottom">
              <div className="inline-flex items-center gap-2 mb-3">
                <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
                <span className="text-[#101824] font-bold text-xs uppercase tracking-widest">
                  Our Team
                </span>
              </div>
            </AnimatedSubTitle>
          </div>
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <AnimatedHeading
              text="Our expert team behind technology"
              as="h2"
              direction="bottom"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101824] tracking-tight leading-[1.15]"
            />
            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Team Slide"
                className="w-12 h-12 rounded-full border border-gray-200 hover:border-[#fa510f] hover:bg-[#fa510f] text-[#101824] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Team Slide"
                className="w-12 h-12 rounded-full border border-gray-200 hover:border-[#fa510f] hover:bg-[#fa510f] text-[#101824] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto-Moving Infinite Carousel (Big Tall Images matching Image 1) */}
        <div
          ref={carouselReveal.ref as React.RefObject<HTMLDivElement>}
          style={revealStyle(carouselReveal.isVisible, 0.1, 50)}
          className="relative mb-20 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / 3 + 10px)))`,
              transitionProperty: isTransitioning ? "transform" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {carouselItems.map((member, idx) => (
              <div
                key={idx}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4 group cursor-pointer"
              >
                {/* Tall Portrait Image Container (Matching Theme Height 580px - 620px) */}
                <div className="relative h-[480px] sm:h-[540px] lg:h-[580px] xl:h-[620px] w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Authentic Codera Bottom Frosted Blur Effect */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-28 pointer-events-none rounded-b-2xl"
                    style={{
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, transparent 100%)",
                    }}
                  />

                  {/* Social Icons Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101824]/85 via-[#101824]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#fa510f] text-white flex items-center justify-center hover:bg-white hover:text-[#101824] transition-all transform hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#fa510f] text-white flex items-center justify-center hover:bg-white hover:text-[#101824] transition-all transform hover:scale-110"
                        aria-label="Twitter"
                      >
                        <TwitterIcon className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#fa510f] text-white flex items-center justify-center hover:bg-white hover:text-[#101824] transition-all transform hover:scale-110"
                        aria-label="Facebook"
                      >
                        <FacebookIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Team Member Info Below Image */}
                <div className="pt-4 pb-2">
                  <h3
                    className="text-2xl font-bold text-[#101824] group-hover:text-[#fa510f] transition-colors"
                    style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-base font-medium text-[#4a5257] mt-0.5"
                    style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          ref={bannerReveal.ref as React.RefObject<HTMLDivElement>}
          style={revealStyle(bannerReveal.isVisible, 0.05, 45)}
          className="rounded-2xl bg-gradient-to-r from-[#101824] to-[#1f2d42] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3
              className="text-2xl sm:text-3xl font-extrabold max-w-xl leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Innovative IT solutions crafted to enhance your business success.
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#fa510f] hover:bg-[#fa510f]/90 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all btn-shine-effect shadow-xl flex-shrink-0"
          >
            <span>Join Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
