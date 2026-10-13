"use client";

import { useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoderaSearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101824]/95 backdrop-blur-md transition-opacity duration-300">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10"
        aria-label="Close search"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="w-full max-w-2xl px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="relative"
        >
          <div className="relative border-b-2 border-white/20 focus-within:border-[#fa510f] transition-colors pb-4 flex items-center">
            <Search className="w-6 h-6 text-[#fa510f] mr-4 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search services, articles, solutions..."
              className="w-full bg-transparent text-white text-2xl md:text-3xl placeholder-white/40 focus:outline-none font-semibold"
            />
            <button
              type="submit"
              className="bg-[#fa510f] text-white p-3 rounded-full hover:bg-white hover:text-[#101824] transition-all ml-4 flex-shrink-0"
              aria-label="Submit search"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="mt-8 flex flex-wrap gap-2 items-center">
          <span className="text-white/60 text-sm mr-2">Popular:</span>
          {["Cloud Services", "Cyber Security", "Software Solutions", "Consulting", "Managed IT"].map(
            (tag) => (
              <button
                key={tag}
                type="button"
                onClick={onClose}
                className="text-xs bg-white/10 hover:bg-[#fa510f] text-white px-3.5 py-1.5 rounded-full transition-colors"
              >
                {tag}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
