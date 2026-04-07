"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Dental Implant Care",
    description:
      "Choose Our Dental Clinic as Your Go-To Destination for state-of-the-art dental implants that look, feel, and function just like natural teeth.",
  },
  {
    id: 2,
    title: "Aesthetic Care",
    description:
      "Enhance your smile with our comprehensive aesthetic dental treatments and expert care.",
  },
  {
    id: 3,
    title: "Endodonti",
    description:
      "Save your natural teeth with expert root canal treatment and advanced endodontic care.",
  },
  {
    id: 4,
    title: "Prosthodonti",
    description:
      "Custom crowns, bridges, and dentures to restore your smile and dental function.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Section scroll progress: 0 when entering, 1 when leaving
      const start = windowH;
      const end = -rect.height;
      const range = start - end;
      const current = start - rect.top;
      const p = Math.max(0, Math.min(1, current / range));
      setScrollProgress(p);

      // Auto-switch active tab based on scroll progress through the section
      const contentStart = 0.2; // heading area
      const contentEnd = 0.8;
      const contentProgress = Math.max(0, Math.min(1, (p - contentStart) / (contentEnd - contentStart)));
      const newIndex = Math.min(services.length - 1, Math.floor(contentProgress * services.length));
      if (newIndex !== activeIndex && newIndex >= 0) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, activeIndex]);

  const activeService = services[activeIndex];

  // On desktop: elements fade/slide in as you scroll
  const headingOpacity = isMobile ? 1 : Math.min(1, scrollProgress * 5);
  const headingY = isMobile ? 0 : Math.max(0, 40 - scrollProgress * 200);
  const contentOpacity = isMobile ? 1 : Math.min(1, Math.max(0, (scrollProgress - 0.1) * 4));
  const contentY = isMobile ? 0 : Math.max(0, 60 - Math.max(0, scrollProgress - 0.1) * 300);
  const imageOpacity = isMobile ? 1 : Math.min(1, Math.max(0, (scrollProgress - 0.15) * 3.5));
  const imageX = isMobile ? 0 : Math.max(0, 80 - Math.max(0, scrollProgress - 0.15) * 400);

  return (
    <section id="services" className="py-20 lg:py-28" ref={sectionRef}>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Section label + heading */}
        <div
          className="mb-10 lg:mb-14"
          style={{
            opacity: headingOpacity,
            transform: `translateY(${headingY}px)`,
            transition: isMobile ? "none" : "opacity 0.1s, transform 0.1s",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(38,41,47,0.4)",
              marginBottom: "8px",
            }}
          >
            01
          </p>
          <h2
            style={{
              fontSize: "56px",
              fontWeight: 600,
              lineHeight: "56px",
              letterSpacing: "-2.8px",
              color: "#26292F",
            }}
          >
            Services
          </h2>
          <div className="mt-6 border-b border-[#26292F]/10" />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* LEFT COLUMN ~55% */}
          <div
            className="flex flex-col gap-8 lg:w-[55%]"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentY}px)`,
              transition: isMobile ? "none" : "opacity 0.1s, transform 0.1s",
            }}
          >
            {/* Large active service title */}
            <h3
              className="text-[48px] lg:text-[80px]"
              style={{
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: "-0.05em",
                color: "#26292F",
                transition: "all 0.4s ease",
              }}
            >
              {activeService.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "18.2px",
                color: "rgba(38,41,47,0.8)",
                transition: "all 0.4s ease",
              }}
            >
              {activeService.description}
            </p>

            {/* Vertical tab list */}
            <div className="flex flex-col gap-2">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(index)}
                    className="text-left rounded-[12px] transition-all duration-300"
                    style={
                      isActive
                        ? {
                            backgroundColor: "#26292F",
                            color: "#ffffff",
                            fontSize: "20px",
                            fontWeight: 700,
                            letterSpacing: "-0.4px",
                            padding: "16px",
                          }
                        : {
                            backgroundColor: "transparent",
                            color: "rgba(0,0,0,0.7)",
                            fontSize: "16px",
                            fontWeight: 400,
                            letterSpacing: "-0.32px",
                            padding: "12px 16px",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                          "rgba(0,0,0,0.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                          "transparent";
                      }
                    }}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN ~45% — service image */}
          <div
            className="lg:w-[45%] flex items-stretch"
            style={{
              opacity: imageOpacity,
              transform: `translateX(${imageX}px)`,
              transition: isMobile ? "none" : "opacity 0.1s, transform 0.1s",
            }}
          >
            <div className="relative w-full rounded-[20px] overflow-hidden min-h-[320px] lg:min-h-[520px]">
              <Image
                src="/images/services/service-image.png"
                alt={activeService.title}
                fill
                className="object-cover transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
