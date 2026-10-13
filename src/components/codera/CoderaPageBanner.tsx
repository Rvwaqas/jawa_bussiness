"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  bgImage?: string;
}

export default function CoderaPageBanner({
  title,
  subtitle,
  breadcrumb,
  bgImage = "/img/banner/video-bg-img.jpg",
}: PageBannerProps) {
  return (
    <div className="relative pt-44 pb-24 md:pb-32 bg-[#101824] overflow-hidden">
      {/* Background Image with Reduced Darkness Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover opacity-65 scale-105 transition-transform duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101824] via-[#101824]/50 to-[#101824]/35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <span className="inline-block text-[#fa510f] text-xs font-bold uppercase tracking-widest mb-3">
            {subtitle}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-tight mb-6">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white/70">
          <Link href="/" className="hover:text-[#fa510f] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#fa510f]" />
          <span className="text-[#fa510f]">{breadcrumb}</span>
        </nav>
      </div>
    </div>
  );
}
