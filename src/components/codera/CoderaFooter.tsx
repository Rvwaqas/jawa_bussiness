"use client";

import Image from "next/image";
import Link from "next/link";
import { Asterisk, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import MarkslinkLogo from "./MarkslinkLogo";
import AnimatedHeading, { AnimatedSubTitle } from "./AnimatedHeading";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

export default function CoderaFooter() {
  const topBanner = useScrollReveal({ threshold: 0.1 });
  const col1 = useScrollReveal({ threshold: 0.1 });
  const col2 = useScrollReveal({ threshold: 0.1 });
  const col3 = useScrollReveal({ threshold: 0.1 });
  const col4 = useScrollReveal({ threshold: 0.1 });

  return (
    <footer className="bg-[#101824] text-white relative border-t border-white/10">

      {/* Top Banner: Stay In Touch */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div
            ref={topBanner.ref as React.RefObject<HTMLDivElement>}
            style={revealStyle(topBanner.isVisible, 0.05)}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          >
            <div>
              <AnimatedSubTitle delay={0.05} direction="bottom">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
                  <span className="text-[#fa510f] font-bold text-xs uppercase tracking-widest">
                    Contact Us
                  </span>
                </div>
              </AnimatedSubTitle>
              <AnimatedHeading
                text="Stay In Touch"
                as="h2"
                direction="bottom"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none"
              />
            </div>

            <div>
              <Link
                href="/about"
                className="circle-btn border-white/20 text-white hover:border-[#fa510f]"
              >
                <span className="btn-text text-white flex items-center gap-1">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 ml-0.5" />
                </span>
                <i className="btn-dot" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Links */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

            {/* Col 1: Brand & Bio */}
            <div
              className="lg:col-span-4"
              ref={col1.ref as React.RefObject<HTMLDivElement>}
              style={revealStyle(col1.isVisible, 0.05, 40)}
            >
              <div className="mb-6">
                <MarkslinkLogo variant="light" />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
                Delivering innovative IT solutions and scalable technology infrastructure to accelerate your modern business success.
              </p>
              <div className="flex items-center space-x-3 text-sm">
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#fa510f] text-white flex items-center justify-center transition-colors" aria-label="Facebook">Fb</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#fa510f] text-white flex items-center justify-center transition-colors" aria-label="Twitter">Tw</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#fa510f] text-white flex items-center justify-center transition-colors" aria-label="LinkedIn">In</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#fa510f] text-white flex items-center justify-center transition-colors" aria-label="Instagram">Ig</a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div
              className="lg:col-span-2"
              ref={col2.ref as React.RefObject<HTMLDivElement>}
              style={revealStyle(col2.isVisible, 0.12, 40)}
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-white pb-3 border-b border-white/10 mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-[#fa510f] transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#fa510f] transition-colors">Our Services</Link></li>
                <li><Link href="/cases" className="hover:text-[#fa510f] transition-colors">Portfolio</Link></li>
                <li><Link href="/pricing" className="hover:text-[#fa510f] transition-colors">Pricing Plans</Link></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div
              className="lg:col-span-3"
              ref={col3.ref as React.RefObject<HTMLDivElement>}
              style={revealStyle(col3.isVisible, 0.2, 40)}
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-white pb-3 border-b border-white/10 mb-5">
                Services
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/services" className="hover:text-[#fa510f] transition-colors">Cloud Services</Link></li>
                <li><Link href="/services" className="hover:text-[#fa510f] transition-colors">Software Solutions</Link></li>
                <li><Link href="/services" className="hover:text-[#fa510f] transition-colors">Cyber Security</Link></li>
                <li><Link href="/services" className="hover:text-[#fa510f] transition-colors">IT Consulting</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div
              className="lg:col-span-3"
              ref={col4.ref as React.RefObject<HTMLDivElement>}
              style={revealStyle(col4.isVisible, 0.28, 40)}
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-white pb-3 border-b border-white/10 mb-5">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#fa510f] flex-shrink-0" />
                  <a href="tel:+923480227414" className="hover:text-[#fa510f] transition-colors">+92 348 0227414</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#fa510f] flex-shrink-0" />
                  <a href="mailto:rvwaqas602@gmail.com" className="hover:text-[#fa510f] transition-colors">rvwaqas602@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#fa510f] flex-shrink-0 mt-0.5" />
                  <span>4211 Webster Street Rahway, Franklin Park, Indiana.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="py-6 text-xs text-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Jawa. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/contact" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
