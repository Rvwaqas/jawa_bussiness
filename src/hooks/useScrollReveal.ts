"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A reusable scroll reveal hook.
 * Returns { ref, isVisible } - attach ref to the element you want to observe,
 * and use isVisible to drive CSS transitions.
 */
export function useScrollReveal(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/**
 * Returns inline style for a smooth bottom-to-top fade-in transition.
 * Usage: style={revealStyle(isVisible, delay)}
 */
export function revealStyle(
  isVisible: boolean,
  delay = 0,
  distance = 55
): React.CSSProperties {
  return {
    transform: isVisible
      ? "translate3d(0, 0, 0)"
      : `translate3d(0, ${distance}px, 0)`,
    opacity: isVisible ? 1 : 0,
    transition: `transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity 0.75s ease ${delay}s`,
    willChange: "transform, opacity",
  };
}
