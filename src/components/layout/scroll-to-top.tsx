"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-accent-blue/30 bg-accent-blue text-white shadow-[0_0_18px_rgba(24,122,220,0.35)] transition-[opacity,box-shadow,border-color] duration-300 hover:border-accent-blue hover:bg-accent-blue/90 hover:shadow-[0_0_28px_rgba(24,122,220,0.45)] focus-visible:border-accent-blue focus-visible:shadow-[0_0_28px_rgba(24,122,220,0.45)] focus-visible:outline-none ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ChevronUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
