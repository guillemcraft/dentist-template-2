"use client";

import { useEffect, useRef, useState } from "react";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={className}>
      <path d="M11 0L12.8 8.2L20 11L12.8 13.8L11 22L9.2 13.8L2 11L9.2 8.2L11 0Z" fill="#2ABFBF"/>
    </svg>
  );
}

const text = "Where Cutting-Edge Dental Expertise Meets Personalized Care: Your Destination for Holistic Dental Health, Beautiful Smiles, and Lasting Confidence.";
const words = text.split(" ");

export default function QuoteBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.8;
      const end = -rect.height * 0.3;
      const range = start - end;
      const current = start - rect.top;
      setProgress(Math.max(0, Math.min(1, current / range)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="quote" className="w-full py-16 lg:py-24" ref={containerRef}>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="relative">
          <StarIcon className="mb-4" />

          <h3 className="text-[28px] leading-[32px] lg:text-[40px] lg:leading-[44px] font-semibold tracking-[-2px] text-left">
            {words.map((word, i) => {
              const wordProgress = i / words.length;
              const isRevealed = progress > wordProgress;
              return (
                <span
                  key={i}
                  className="transition-colors duration-300"
                  style={{ color: isRevealed ? "#26292F" : "rgba(38,41,47,0.15)" }}
                >
                  {word}{" "}
                </span>
              );
            })}
          </h3>

          <div className="flex gap-3 mt-4">
            <StarIcon />
            <StarIcon className="opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
