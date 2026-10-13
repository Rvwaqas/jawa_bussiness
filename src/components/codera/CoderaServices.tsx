"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Asterisk } from "lucide-react";

import AnimatedHeading, { AnimatedSubTitle } from "./AnimatedHeading";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const services = [
  {
    num: "01",
    tag: "Cloud-Based Solutions",
    title: "Cloud Services",
    description:
      "Deploy and manage scalable cloud solutions to ensure high availability, security, and business continuity.",
    image: "/img/services/service-01.jpg",
    href: "/services",
    reverse: false,
  },
  {
    num: "02",
    tag: "Custom Software Solutions",
    title: "Software Solutions",
    description:
      "Build custom software applications tailored to your business needs with modern technology frameworks.",
    image: "/img/services/service-02.jpg",
    href: "/services",
    reverse: true,
  },
  {
    num: "03",
    tag: "IT Security & Support",
    title: "Cyber Security",
    description:
      "Protect your systems with robust cybersecurity solutions and ensure smooth IT operations 24/7.",
    image: "/img/services/service-03.jpg",
    href: "/services",
    reverse: false,
  },
];

// Each service row gets its own reveal hook
function ServiceRow({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  const row = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={row.ref as React.RefObject<HTMLDivElement>}
      style={revealStyle(row.isVisible, delay, 70)}
      className="group relative"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch ${
          service.reverse ? "" : ""
        }`}
      >
        {/* Image Box */}
        <div
          className={`lg:col-span-5 relative ${
            service.reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="relative rounded-lg overflow-hidden bg-white/[0.08] h-72 sm:h-80 lg:h-full min-h-[340px] flex items-center justify-center">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-[#fa510f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1] pointer-events-none" />
            <span
              className="absolute left-[-15px] sm:left-[-25px] bottom-[-20px] sm:bottom-[-25px] z-10 select-none pointer-events-none text-[220px] sm:text-[270px] lg:text-[310px] font-extrabold leading-[0.7] tracking-tighter"
              style={{
                background: "linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {service.num}
            </span>
          </div>
        </div>

        {/* Content Box */}
        <div
          className={`lg:col-span-7 relative ${
            service.reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="bg-white/[0.08] rounded-lg p-8 sm:p-12 lg:p-14 h-full min-h-[340px] flex flex-col justify-between items-start">
            <div>
              <span className="inline-flex text-[#E5E5E5] text-sm sm:text-base font-medium rounded-lg bg-white/10 backdrop-blur-md px-5 py-2">
                {service.tag}
              </span>
            </div>
            <div className="mt-8 sm:mt-12">
              <h3
                className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-white mb-4 group-hover:text-[#fa510f] transition-colors duration-300"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                <Link href={service.href}>{service.title}</Link>
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoderaServices() {
  const heading = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-32 bg-[#101824] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <div
          ref={heading.ref as React.RefObject<HTMLDivElement>}
          style={revealStyle(heading.isVisible, 0.05)}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <AnimatedSubTitle delay={0.05} direction="bottom">
            <div className="inline-flex items-center gap-2 mb-3">
              <Asterisk className="w-4 h-4 text-[#fa510f] animate-rotate-icon stroke-[2.5]" />
              <span className="text-[#fa510f] font-bold text-xs uppercase tracking-widest">
                Our Services
              </span>
            </div>
          </AnimatedSubTitle>
          <AnimatedHeading
            text="Solutions to keep your business moving"
            as="h2"
            direction="bottom"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          />
        </div>

        {/* Services List - each row animates independently */}
        <div className="space-y-8 lg:space-y-10">
          {services.map((service, sIdx) => (
            <ServiceRow key={service.num} service={service} delay={0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
