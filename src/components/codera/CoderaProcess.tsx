"use client";

import Image from "next/image";
import { Asterisk, Layers, Cpu, ShieldCheck } from "lucide-react";

import AnimatedHeading, { AnimatedSubTitle } from "./AnimatedHeading";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Requirement Analysis is the first and most critical step in our IT delivery cycle, establishing architectural baselines and clear project milestones.",
    icon: Layers,
    delay: 0.08,
  },
  {
    number: "02",
    title: "Development Phase",
    description:
      "Development Phase is the technical core of our IT services, where senior engineers engineer resilient, scalable, and modern digital products.",
    icon: Cpu,
    delay: 0.2,
  },
  {
    number: "03",
    title: "Final Testing & Launch",
    description:
      "Final Testing guarantees enterprise reliability with automated unit, integration, stress, and security audits prior to production deployment.",
    icon: ShieldCheck,
    delay: 0.32,
  },
];

export default function CoderaProcess() {
  const headerLeft = useScrollReveal({ threshold: 0.1 });
  const headerRight = useScrollReveal({ threshold: 0.1 });
  const processImg = useScrollReveal({ threshold: 0.1 });

  // Each step card gets its own observer
  const step1 = useScrollReveal({ threshold: 0.1 });
  const step2 = useScrollReveal({ threshold: 0.1 });
  const step3 = useScrollReveal({ threshold: 0.1 });
  const stepRefs = [step1, step2, step3];

  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div
            ref={headerLeft.ref as React.RefObject<HTMLDivElement>}
            style={revealStyle(headerLeft.isVisible, 0.05)}
            className="lg:col-span-6"
          >
            <AnimatedSubTitle delay={0.05} direction="bottom">
              <div className="inline-flex items-center gap-2 mb-3">
                <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
                <span className="text-[#101824] font-bold text-xs uppercase tracking-widest">
                  How It&apos;s Done
                </span>
              </div>
            </AnimatedSubTitle>
            <AnimatedHeading
              text="Solution Process"
              as="h2"
              direction="bottom"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101824] tracking-tight leading-[1.15]"
            />
          </div>

          <div
            ref={headerRight.ref as React.RefObject<HTMLDivElement>}
            style={revealStyle(headerRight.isVisible, 0.18)}
            className="lg:col-span-6 border-l-2 border-[#fa510f] pl-6 lg:pl-8"
          >
            <p className="text-[#4a5257] text-base sm:text-lg leading-relaxed max-w-xl">
              Our proven process combines detailed technical analysis, expert software development, and precise QA deployment to ensure every solution works seamlessly and securely.
            </p>
          </div>
        </div>

        {/* Steps Grid & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Process Step Cards */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const sr = stepRefs[idx];
              return (
                <div
                  key={step.number}
                  ref={sr.ref as React.RefObject<HTMLDivElement>}
                  style={revealStyle(sr.isVisible, step.delay, 60)}
                >
                  <div className="relative flex items-start gap-6 p-6 sm:p-7 rounded-2xl border border-gray-100 hover:border-[#fa510f]/40 hover:shadow-xl transition-all duration-300 group bg-white cursor-pointer overflow-hidden transform hover:-translate-y-2">
                    {/* Warm glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fa510f]/[0.08] via-[#fa510f]/[0.02] to-transparent opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 pointer-events-none rounded-2xl" />
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#fa510f] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 rounded-b-2xl origin-center" />

                    {/* Icon Box */}
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-[#fa510f]/10 text-[#fa510f] group-hover:bg-[#fa510f] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105 group-hover:shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-grow">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-xs font-bold text-[#fa510f] tracking-widest uppercase">
                          STEP {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#101824] mb-2 group-hover:text-[#fa510f] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#4a5257] text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Illustration Image */}
          <div
            className="lg:col-span-6"
            ref={processImg.ref as React.RefObject<HTMLDivElement>}
            style={revealStyle(processImg.isVisible, 0.15, 50)}
          >
            <div className="image-hover rounded-2xl overflow-hidden shadow-2xl relative h-[420px] sm:h-[500px]">
              <Image
                src="/img/content/process-05.jpg"
                alt="Codera Process Roadmap"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
