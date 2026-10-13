"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import CoderaSearchModal from "./CoderaSearchModal";

import MarkslinkLogo from "./MarkslinkLogo";

export default function CoderaHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300 ${isScrolled
          ? "fixed top-0 left-0 bg-[#101824]/95 backdrop-blur-md shadow-xl border-b border-white/10"
          : "absolute top-0 left-0 bg-transparent border-b border-white/10"
          }`}
      >
        {/* Main Navbar - Exact match to Codera Home 01 */}
        <div className="w-full px-4 sm:px-8 lg:px-14">
          <div className="flex items-center justify-between h-24">
            {/* Logo: Markslink */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <MarkslinkLogo variant="light" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-9">
              <div className="relative group">
                <Link
                  href="/"
                  className="text-white hover:text-[#fa510f] font-bold text-[14px] uppercase tracking-wider transition-colors flex items-center gap-1.5 py-8"
                >
                  <span>Home</span>
                  {/* <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" /> */}
                </Link>
                {/* <div className="absolute top-full left-0 w-52 bg-[#101824] border border-white/10 rounded-md shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link
                    href="/"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    Home 01 - Dark Menu
                  </Link>
                </div> */}
              </div>

              <div className="relative group">
                <button
                  type="button"
                  className="text-white hover:text-[#fa510f] font-bold text-[14px] uppercase tracking-wider transition-colors flex items-center gap-1.5 py-8"
                >
                  <span>Pages</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 w-52 bg-[#101824] border border-white/10 rounded-md shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link
                    href="/about"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/our-team"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/pricing"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    Pricing Plans
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    FAQ
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="/services"
                  className="text-white hover:text-[#fa510f] font-bold text-[14px] uppercase tracking-wider transition-colors flex items-center gap-1.5 py-8"
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute top-full left-0 w-56 bg-[#101824] border border-white/10 rounded-md shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    Cloud Services
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    Software Solutions
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white hover:bg-[#fa510f] transition-all"
                  >
                    Cyber Security
                  </Link>
                </div>
              </div>

              <Link
                href="/cases"
                className="text-white hover:text-[#fa510f] font-bold text-[14px] uppercase tracking-wider transition-colors"
              >
                Portfolio
              </Link>

              <Link
                href="/blog"
                className="text-white hover:text-[#fa510f] font-bold text-[14px] uppercase tracking-wider transition-colors"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-white hover:text-[#fa510f] font-bold text-[14px] uppercase tracking-wider transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action: Search Icon & Free Quote Button */}
            <div className="flex items-center space-x-6">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="text-white hover:text-[#fa510f] transition-colors p-1"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center bg-[#fa510f] hover:bg-[#fa510f]/90 text-white font-extrabold text-[13px] uppercase tracking-widest px-7 py-3.5 rounded transition-all btn-shine-effect shadow-md"
              >
                Free Quote
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded bg-[#fa510f] text-white flex items-center justify-center"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#101824] border-t border-white/10 px-6 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white font-bold text-sm uppercase tracking-wider border-b border-white/5"
            >
              Home
            </Link>

            <div>
              <button
                type="button"
                onClick={() => toggleDropdown("pages")}
                className="w-full flex justify-between items-center py-2 text-white font-bold text-sm uppercase tracking-wider border-b border-white/5"
              >
                <span>Pages</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${activeDropdown === "pages" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {activeDropdown === "pages" && (
                <div className="pl-4 py-2 space-y-2 text-xs uppercase tracking-wider bg-white/5 rounded mt-1">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-white/80 hover:text-[#fa510f]"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/our-team"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-white/80 hover:text-[#fa510f]"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-white/80 hover:text-[#fa510f]"
                  >
                    Pricing Plans
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-white/80 hover:text-[#fa510f]"
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => toggleDropdown("services")}
                className="w-full flex justify-between items-center py-2 text-white font-bold text-sm uppercase tracking-wider border-b border-white/5"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {activeDropdown === "services" && (
                <div className="pl-4 py-2 space-y-2 text-xs uppercase tracking-wider bg-white/5 rounded mt-1">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-white/80 hover:text-[#fa510f]"
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-white/80 hover:text-[#fa510f]"
                  >
                    Cloud Services
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-white/80 hover:text-[#fa510f]"
                  >
                    Software Solutions
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-white/80 hover:text-[#fa510f]"
                  >
                    Cyber Security
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white font-bold text-sm uppercase tracking-wider border-b border-white/5"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white font-bold text-sm uppercase tracking-wider border-b border-white/5"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white font-bold text-sm uppercase tracking-wider border-b border-white/5"
            >
              Contact
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#fa510f] text-white font-extrabold text-xs uppercase tracking-widest py-3.5 rounded"
              >
                Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <CoderaSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
