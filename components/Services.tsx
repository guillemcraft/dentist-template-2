"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

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

  const activeService = services[activeIndex];

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Section label + heading */}
        <AnimateIn direction="up" duration={600}>
          <div className="mb-10 lg:mb-14">
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
          </div>
        </AnimateIn>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* LEFT COLUMN ~55% */}
          <AnimateIn
            direction="up"
            duration={650}
            delay={100}
            className="flex flex-col gap-8 lg:w-[55%]"
          >
            {/* Large active service title */}
            <h3
              style={{
                fontSize: "clamp(48px, 6.25vw, 80px)",
                fontWeight: 600,
                lineHeight: "1",
                letterSpacing: "clamp(-2px, -0.05em, -4px)",
                color: "#26292F",
              }}
              className="text-[48px] lg:text-[80px] transition-all duration-300"
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
                    className="text-left rounded-[12px] transition-all duration-200"
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
          </AnimateIn>

          {/* RIGHT COLUMN ~45% — service image */}
          <AnimateIn
            direction="left"
            duration={700}
            delay={200}
            className="lg:w-[45%] flex items-stretch"
          >
            <div className="relative w-full rounded-[20px] overflow-hidden min-h-[320px] lg:min-h-[520px]">
              <Image
                src="/images/services/service-image.png"
                alt={activeService.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
