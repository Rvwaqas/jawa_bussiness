"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Asterisk, ArrowUpRight } from "lucide-react";
import AnimatedHeading, { AnimatedSubTitle } from "./AnimatedHeading";

const posts = [
  {
    category: "Cloud",
    date: "March 15, 2026",
    title: "Cloud solutions for scalable IT infrastructure.",
    image: "/img/blog/blog-01.jpg",
    href: "/blog",
  },
  {
    category: "Software",
    date: "March 13, 2026",
    title: "Innovative software solutions for businesses.",
    image: "/img/blog/blog-02.jpg",
    href: "/blog",
  },
  {
    category: "Cybersafe",
    date: "March 12, 2026",
    title: "Practical tips for secure IT systems checklist.",
    image: "/img/blog/blog-03.jpg",
    href: "/blog",
  },
];

export default function CoderaBlog() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#F7F8F9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Bottom-to-Top (fadeInUp) Transition */}
        <div
          className="text-center max-w-2xl mx-auto mb-16 will-change-transform will-change-opacity"
          style={{
            transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)",
            opacity: isVisible ? 1 : 0,
            transition:
              "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.05s, opacity 0.75s ease 0.05s",
          }}
        >
          <AnimatedSubTitle delay={0.05} direction="bottom">
            <div className="inline-flex items-center gap-2 mb-3">
              <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
              <span
                className="text-[#101824] font-bold text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                Our Blog
              </span>
            </div>
          </AnimatedSubTitle>
          <AnimatedHeading
            text="Smart solutions and tech ideas"
            as="h2"
            direction="bottom"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101824] tracking-tight leading-[1.15]"
          />
        </div>

        {/* Blog Cards Grid with Bottom-to-Top Transitions & Smooth Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="h-full will-change-transform will-change-opacity"
              style={{
                transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 75px, 0)",
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.12 * (idx + 1)}s, opacity 0.8s ease ${0.12 * (idx + 1)}s`,
              }}
            >
              <article
                className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 ease-out group border border-black/[0.04] flex flex-col transform hover:-translate-y-3 cursor-pointer"
              >
                {/* Image with smooth zoom transition */}
                <div className="image-hover relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs font-bold uppercase tracking-wider bg-[#101824] group-hover:bg-[#fa510f] text-white px-3.5 py-1 rounded-full transition-colors duration-300"
                        style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                      >
                        {post.category}
                      </span>
                      <span
                        className="text-xs font-semibold text-[#4a5257]"
                        style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                      >
                        {post.date}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-bold text-[#101824] group-hover:text-[#fa510f] transition-colors duration-300 leading-snug"
                      style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                    >
                      <Link href={post.href}>{post.title}</Link>
                    </h3>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={post.href}
                      className="text-xs font-bold uppercase tracking-wider text-[#101824] group-hover:text-[#fa510f] flex items-center gap-1 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                    >
                      <span>Read Article</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
