"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Asterisk, Check, ArrowRight } from "lucide-react";
import AnimatedHeading, { AnimatedSubTitle } from "./AnimatedHeading";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const starterFeatures = [
  "Cloud Hosting & Deployment",
  "Automated Data Backup",
  "Software & API Integration",
  "24/7 Technical Support",
  "Network Security Audits",
];

const premiumFeatures = [
  "Advanced Multi-Cloud Hosting",
  "Real-Time Redundant Backup",
  "Custom Enterprise Software",
  "Dedicated Priority Support",
  "Zero-Trust Network Defense",
];

export default function CoderaPricing() {
  const leftCol = useScrollReveal({ threshold: 0.1 });
  const isVisible = leftCol.isVisible;

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Heading, Paragraph & Rotating Circular Badge */}
          <div
            className="lg:col-span-4"
            ref={leftCol.ref as React.RefObject<HTMLDivElement>}
            style={revealStyle(leftCol.isVisible, 0.05)}
          >
            <AnimatedSubTitle delay={0.05} direction="bottom">
              <div className="inline-flex items-center gap-2 mb-3">
                <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
                <span
                  className="text-[#101824] font-bold text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  Our Pricing
                </span>
              </div>
            </AnimatedSubTitle>

            <AnimatedHeading
              text="Affordable IT service plans"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101824] tracking-tight leading-[1.15] mb-8"
            />

            <p
              className="text-[#4a5257] text-base leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Choose transparent, scalable pricing tailored to your technical requirements with zero hidden maintenance charges.
            </p>

            {/* Rotating Circular Text SVG */}
            <div className="relative w-48 h-48 hidden lg:flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-rotated-circle"
              >
                <defs>
                  <path
                    id="pricingTextPath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    fill="none"
                  />
                </defs>
                <text
                  fontSize="10.5"
                  fontWeight="700"
                  fill="#101824"
                  letterSpacing="2"
                  className="uppercase"
                >
                  <textPath xlinkHref="#pricingTextPath" startOffset="0%">
                    Efficient IT Services • Fueling Company Growth •
                  </textPath>
                </text>
              </svg>

              <div className="absolute inset-auto w-16 h-16 rounded-full bg-[#fa510f] flex items-center justify-center shadow-lg">
                <div className="relative w-8 h-8">
                  <Image
                    src="/img/icons/icon-11.png"
                    alt="Codera Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Cards with Bottom-to-Top (fadeInUp) Transitions */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Starter Plan (Bottom-to-Top Transition + Lift on Hover) */}
            <div
              className="will-change-transform will-change-opacity"
              style={{
                transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 60px, 0)",
                opacity: isVisible ? 1 : 0,
                transition:
                  "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.75s ease 0.15s",
              }}
            >
              <div className="bg-white border border-[#101824]/10 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2.5 cursor-pointer group hover:border-[#fa510f]/40">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4">
                    <h3
                      className="text-2xl font-extrabold text-[#101824] mb-2 group-hover:text-[#fa510f] transition-colors"
                      style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                    >
                      Starter
                    </h3>
                    <p
                      className="text-[#4a5257] text-sm"
                      style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                    >
                      Perfect for small businesses and growing startups.
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <ul className="space-y-2.5">
                      {starterFeatures.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-[#4a5257]"
                          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                        >
                          <Check className="w-4 h-4 text-[#fa510f] flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4 flex flex-col items-start md:items-end">
                    <div className="mb-4">
                      <span className="text-sm font-bold text-[#101824]">$</span>
                      <span
                        className="text-4xl font-extrabold text-[#101824]"
                        style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                      >
                        32.99
                      </span>
                      <span className="text-xs font-semibold text-[#4a5257]">
                        /month
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#101824] group-hover:bg-[#fa510f] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all btn-shine-effect shadow-md"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Plan (Featured - Bottom-to-Top Transition + Lift on Hover) */}
            <div
              className="will-change-transform will-change-opacity"
              style={{
                transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 60px, 0)",
                opacity: isVisible ? 1 : 0,
                transition:
                  "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.75s ease 0.3s",
              }}
            >
              <div className="bg-[#fa510f] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden transform hover:-translate-y-2.5 transition-all duration-300 cursor-pointer group hover:shadow-[0_25px_50px_-12px_rgba(250,81,15,0.4)]">
                <div className="absolute top-0 right-8 bg-[#101824] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-b-lg">
                  Most Popular
                </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
                <div className="md:col-span-4">
                  <h3
                    className="text-2xl font-extrabold text-white mb-2"
                    style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                  >
                    Premium
                  </h3>
                  <p
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                  >
                    Ideal for enterprises needing advanced IT architecture.
                  </p>
                </div>

                <div className="md:col-span-4">
                  <ul className="space-y-2.5">
                    {premiumFeatures.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-white"
                        style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                      >
                        <Check className="w-4 h-4 text-white flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4 flex flex-col items-start md:items-end">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-white">$</span>
                    <span
                      className="text-4xl font-extrabold text-white"
                      style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                    >
                      75.99
                    </span>
                    <span className="text-xs font-semibold text-white/80">
                      /month
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white group-hover:bg-[#101824] text-[#fa510f] group-hover:text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all btn-shine-effect shadow-md"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
