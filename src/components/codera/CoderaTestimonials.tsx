"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Asterisk, Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

import AnimatedHeading, { AnimatedSubTitle } from "./AnimatedHeading";
import AnimatedCounter from "./AnimatedCounter";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "IT Solutions & Technology has transformed our operations with efficient digital systems and professional support. Their expertise saved us significant time and resources.",
    name: "Ariam Luwam",
    role: "IT Consultant",
    avatar: "/img/avatars/avatar-01.jpg",
  },
  {
    quote:
      "Their IT solutions greatly improved our workflow and enhanced productivity across teams. Reliable technology services we can always trust. The team delivered innovative strategies.",
    name: "Bisirat Futsum",
    role: "Digital Manager",
    avatar: "/img/avatars/avatar-02.jpg",
  },
  {
    quote:
      "Exceptional IT support and solutions that helped our company scale efficiently. Highly professional and results-driven team. Their expertise in implementing cloud infrastructure, cybersecurity measures.",
    name: "Sinit Alem",
    role: "IT Specialist",
    avatar: "/img/avatars/avatar-03.jpg",
  },
];

const clientLogos = [
  "/img/clients/client-01.png",
  "/img/clients/client-02.png",
  "/img/clients/client-03.png",
  "/img/clients/client-04.png",
  "/img/clients/client-05.png",
];

export default function CoderaTestimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;

  // Auto-advance from bottom-to-top every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [current, isPaused]);

  const handleNext = () => {
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const activeReview = testimonials[current];

  const leftCol = useScrollReveal({ threshold: 0.1 });
  const rightCol = useScrollReveal({ threshold: 0.1 });
  const logosReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-32 bg-[#101824] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Heading & 25+ Stat Counter */}
          <div
            className="lg:col-span-5"
            ref={leftCol.ref as React.RefObject<HTMLDivElement>}
            style={revealStyle(leftCol.isVisible, 0.05)}
          >
            <AnimatedSubTitle delay={0.05} direction="bottom">
              <div className="inline-flex items-center gap-2 mb-3">
                <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
                <span className="text-[#fa510f] font-bold text-xs uppercase tracking-widest">
                  Our Testimonials
                </span>
              </div>
            </AnimatedSubTitle>

            <AnimatedHeading
              text="What our clients say about us"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-10"
            />

            {/* Giant 25+ with White-to-Fade 3D Gradient */}
            <div className="mb-2">
              <div
                className="font-extrabold select-none text-[100px] sm:text-[120px] lg:text-[145px] leading-[0.80] tracking-tight flex items-start"
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.45) 55%, rgba(255, 255, 255, 0.08) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  <AnimatedCounter end={25} start={1} duration={1500} />
                </span>
                <sup
                  className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold ml-1"
                  style={{
                    background:
                      "linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.3) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: "1",
                    verticalAlign: "top",
                  }}
                >
                  +
                </sup>
              </div>

              <h3
                className="text-base sm:text-lg font-medium text-white tracking-normal mt-3 mb-3"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                Successful IT Projects
              </h3>

              {/* 5 Vibrant Orange Stars */}
              <div className="flex gap-1 text-[#fa510f]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#fa510f] text-[#fa510f]"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Auto Bottom-to-Top Moving Review List */}
          <div
            className="lg:col-span-7"
            ref={rightCol.ref as React.RefObject<HTMLDivElement>}
            style={revealStyle(rightCol.isVisible, 0.15)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative min-h-[300px] flex flex-col justify-between overflow-hidden">
              
              {/* Animated Review Box (Slides In From Bottom to Top) */}
              <div
                key={current}
                className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform will-change-opacity"
                style={{
                  animation: "testimonialSlideUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                }}
              >
                {/* Review Text */}
                <p
                  className="text-lg sm:text-xl lg:text-2xl text-white font-light leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  &ldquo;{activeReview.quote}&rdquo;
                </p>

                {/* Author Avatar with Orange Quote Mark & Details */}
                <div className="flex items-center gap-4">
                  {/* Avatar with Quote Badge */}
                  <div className="relative w-16 h-16 rounded-full flex-shrink-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src={activeReview.avatar}
                        alt={activeReview.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Orange Quote Icon Badge on Avatar */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#fa510f] flex items-center justify-center text-white shadow-md">
                      <Quote className="w-3 h-3 fill-white text-white" />
                    </div>
                  </div>

                  {/* Author Name & Role */}
                  <div>
                    <h4
                      className="text-lg sm:text-xl font-bold text-white mb-0.5"
                      style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                    >
                      {activeReview.name}
                    </h4>
                    <span
                      className="text-sm text-white/60 font-normal"
                      style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                    >
                      {activeReview.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation: Left Arrow • Active Dot • Right Arrow */}
              <div className="flex items-center gap-4 mt-10 pt-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="text-white/80 hover:text-[#fa510f] transition-colors p-1"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setCurrent(idx);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        idx === current
                          ? "w-2.5 h-2.5 bg-[#fa510f]"
                          : "w-2 h-2 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="text-white/80 hover:text-[#fa510f] transition-colors p-1"
                  aria-label="Next review"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Client Logos Strip */}
        <div
          className="pt-12 border-t border-white/10"
          ref={logosReveal.ref as React.RefObject<HTMLDivElement>}
          style={revealStyle(logosReveal.isVisible, 0.05, 35)}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="relative h-12 w-full flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                style={revealStyle(logosReveal.isVisible, 0.06 * (idx + 1), 25)}
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${idx + 1}`}
                  width={140}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
