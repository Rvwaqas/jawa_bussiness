import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section className="relative pt-40 pb-24 bg-[#272B36] text-white overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F222B] to-[#272B36]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF4255]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          {title}
        </h1>

        {/* Breadcrumb links */}
        <nav className="flex items-center justify-center gap-2 text-sm text-white/70 font-medium">
          <Link href="/" className="hover:text-[#FF4255] transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={crumb.label} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#FF4255]" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#FF4255] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#FF4255]">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
