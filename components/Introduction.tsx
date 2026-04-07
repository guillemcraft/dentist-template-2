"use client";

import { useEffect, useRef, useState } from "react";

const words = "Choose Our Dental Clinic as Your Go-To Destination for Trusted and Compassionate Dental Health Solutions. Your Smile Is More Than Just Teeth to Us — It's a Reflection of Your Confidence, Your Health, and Your Happiness. We Believe Every Patient Deserves Personalized Care That Goes Beyond the Chair.".split(" ");

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Start revealing when section enters viewport, finish when it's about to leave
      const start = windowHeight * 0.8;
      const end = -rect.height * 0.3;
      const range = start - end;
      const current = start - rect.top;
      const p = Math.max(0, Math.min(1, current / range));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 lg:py-32" ref={containerRef}>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <p className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[50.4px] font-semibold text-left">
          {words.map((word, i) => {
            const wordProgress = i / words.length;
            const isRevealed = progress > wordProgress;
            return (
              <span
                key={i}
                className="transition-colors duration-300"
                style={{
                  color: isRevealed ? "#000000" : "rgba(0,0,0,0.15)",
                }}
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
