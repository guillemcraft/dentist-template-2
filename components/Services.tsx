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
  const outerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;
      const rect = outer.getBoundingClientRect();
      // The outer container is tall (100vh * number of services)
      // The sticky inner stays pinned while we scroll through
      const scrolled = -rect.top;
      const totalScroll = outer.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      const newIndex = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      );
      if (newIndex >= 0 && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, activeIndex]);

  const activeService = services[activeIndex];

  // Mobile: normal layout with click tabs
  if (isMobile) {
    return (
      <section id="services" className="py-20">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="mb-10">
            <p className="text-[14px] font-normal text-[#26292F]/40 mb-2">01</p>
            <h2 className="text-[36px] font-semibold leading-[1] tracking-[-1.8px] text-[#26292F]">Services</h2>
            <div className="mt-6 border-b border-[#26292F]/10" />
          </div>
          <h3 className="text-[48px] font-semibold leading-[1] tracking-[-2px] text-[#26292F] mb-6">{activeService.title}</h3>
          <p className="text-[14px] font-medium leading-[18.2px] text-[#26292F]/80 mb-8">{activeService.description}</p>
          <div className="flex flex-col gap-2 mb-10">
            {services.map((s, i) => (
              <button key={s.id} onClick={() => setActiveIndex(i)} className="text-left rounded-[12px] transition-all duration-200" style={i === activeIndex ? { backgroundColor: "#26292F", color: "#fff", fontSize: "20px", fontWeight: 700, padding: "16px" } : { color: "rgba(0,0,0,0.7)", fontSize: "16px", fontWeight: 400, padding: "12px 16px" }}>{s.title}</button>
            ))}
          </div>
          <div className="relative w-full rounded-[20px] overflow-hidden aspect-[4/3]">
            <Image src="/images/services/service-image.png" alt={activeService.title} fill className="object-cover" sizes="100vw" />
          </div>
        </div>
      </section>
    );
  }

  // Desktop: sticky scroll-through
  return (
    <div ref={outerRef} id="services" style={{ height: `${services.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
          {/* Heading */}
          <div className="mb-10">
            <p className="text-[14px] font-normal text-[#26292F]/40 mb-2">01</p>
            <h2 style={{ fontSize: "56px", fontWeight: 600, lineHeight: "56px", letterSpacing: "-2.8px", color: "#26292F" }}>
              Services
            </h2>
            <div className="mt-6 border-b border-[#26292F]/10" />
          </div>

          {/* Two columns */}
          <div className="flex gap-16">
            {/* Left */}
            <div className="w-[55%] flex flex-col gap-8">
              <h3
                key={activeService.id}
                className="text-[80px] font-semibold leading-[1] tracking-[-4px] text-[#26292F] animate-fade-in"
              >
                {activeService.title}
              </h3>

              <p
                key={`desc-${activeService.id}`}
                className="text-[14px] font-medium leading-[18.2px] text-[#26292F]/80 max-w-[480px] animate-fade-in"
              >
                {activeService.description}
              </p>

              {/* Tab list */}
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
                          ? { backgroundColor: "#26292F", color: "#fff", fontSize: "20px", fontWeight: 700, letterSpacing: "-0.4px", padding: "16px" }
                          : { backgroundColor: "transparent", color: "rgba(0,0,0,0.7)", fontSize: "16px", fontWeight: 400, letterSpacing: "-0.32px", padding: "12px 16px" }
                      }
                      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)"; }}
                      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = "transparent"; }}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </div>

              {/* Progress dots */}
              <div className="flex gap-2 mt-2">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: i === activeIndex ? "32px" : "8px",
                      backgroundColor: i === activeIndex ? "#26292F" : "rgba(38,41,47,0.2)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="w-[45%] flex items-stretch">
              <div className="relative w-full rounded-[20px] overflow-hidden min-h-[520px]">
                <Image
                  src="/images/services/service-image.png"
                  alt={activeService.title}
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
