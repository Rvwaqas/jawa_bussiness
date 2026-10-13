import type { Metadata } from "next";
import { Inter, Heebo, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jawa – IT Solutions & Agency Services",
  description:
    "Jawa delivers innovative IT solutions and modern technology services to help businesses improve efficiency, enhance security, and accelerate digital transformation.",
  keywords: [
    "Jawa",
    "Jawa IT Solutions",
    "IT Solutions",
    "Cloud Services",
    "Cyber Security",
    "Software Solutions",
    "IT Consulting",
    "Managed IT Services",
  ],
  icons: {
    icon: [
      { url: "/images/jawa-rounded.png", sizes: "512x512", type: "image/png" },
      { url: "/images/jawa-rounded.png", sizes: "any" },
    ],
    shortcut: "/images/jawa-rounded.png",
    apple: "/images/jawa-rounded.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} ${heebo.variable} scroll-smooth`}>
      <body className="font-plus-jakarta text-[#4a5257] bg-white antialiased selection:bg-[#fa510f]/20 selection:text-[#fa510f]">
        {/* Global SVG clipPath for Codera rounded diamond shape */}
        <svg width="0" height="0" className="absolute pointer-events-none -z-50" aria-hidden="true">
          <defs>
            <clipPath id="roundedDiamond" clipPathUnits="objectBoundingBox">
              <path d="M 0.5 0 C 0.53 0, 0.58 0.05, 0.65 0.12 L 0.88 0.35 C 0.95 0.42, 1 0.47, 1 0.5 C 1 0.53, 0.95 0.58, 0.88 0.65 L 0.65 0.88 C 0.58 0.95, 0.53 1, 0.5 1 C 0.47 1, 0.42 0.95, 0.35 0.88 L 0.12 0.65 C 0.05 0.58, 0 0.53, 0 0.5 C 0 0.47, 0.05 0.42, 0.12 0.35 L 0.35 0.12 C 0.42 0.05, 0.47 0, 0.5 0 Z" />
            </clipPath>
          </defs>
        </svg>
        <SmoothScrollWrapper>
          {children}
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}

