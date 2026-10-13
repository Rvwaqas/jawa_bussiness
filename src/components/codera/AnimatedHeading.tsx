"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "div";
  className?: string;
  style?: React.CSSProperties;
  direction?: "bottom" | "right";
}

export default function AnimatedHeading({
  text,
  as: Component = "h2",
  className = "",
  style = {},
  direction = "bottom",
}: AnimatedHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
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

  // Split text into words for natural line-wrapping & editorial stagger
  const words = text.split(" ");

  return (
    <Component
      ref={containerRef as unknown as React.Ref<HTMLHeadingElement>}
      className={`heading-animation ${className}`}
      style={style}
    >
      {words.map((word, wIdx) => {
        const wordDelay = wIdx * 0.032;
        return (
          <span
            key={wIdx}
            className="inline-block whitespace-nowrap overflow-hidden mr-[0.28em] align-top py-0.5"
          >
            <span
              className="inline-block will-change-transform will-change-opacity"
              style={{
                transform: isVisible
                  ? "translate3d(0, 0, 0)"
                  : direction === "bottom"
                  ? "translate3d(0, 105%, 0)"
                  : "translate3d(45px, 0, 0)",
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${wordDelay}s, opacity 0.75s ease ${wordDelay}s`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}

// Sub-title slide-in animation (smooth bottom-to-top by default)
export function AnimatedSubTitle({
  children,
  className = "",
  delay = 0,
  direction = "bottom",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "bottom" | "right";
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`will-change-transform will-change-opacity ${className}`}
      style={{
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : direction === "bottom"
          ? "translate3d(0, 24px, 0)"
          : "translate3d(35px, 0, 0)",
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
