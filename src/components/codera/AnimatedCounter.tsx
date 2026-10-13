"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number; // in milliseconds
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Ease out cubic
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedCounter({
  end,
  start = 1,
  duration = 2000,
  suffix = "",
  className = "",
  style = {},
}: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);

            const current = Math.round(start + (end - start) * easedProgress);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [end, start, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className} style={style}>
      {count}
      {suffix}
    </span>
  );
}
