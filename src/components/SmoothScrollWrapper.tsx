"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Dynamically import SmoothScroll with ssr:false inside a Client Component
const SmoothScrollInner = dynamic(() => import("./SmoothScroll"), {
  ssr: false,
});

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
  return <SmoothScrollInner>{children}</SmoothScrollInner>;
}
