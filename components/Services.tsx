"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    id: 1,
    title: "Dental Implant Care",
    description:
      "Restore your smile with state-of-the-art dental implants that look, feel, and function just like natural teeth. Our experienced team uses the latest techniques to ensure a comfortable procedure and long-lasting results tailored to your unique needs.",
  },
  {
    id: 2,
    title: "Aesthetic Care",
    description:
      "Enhance the beauty of your smile with our comprehensive aesthetic treatments. From professional whitening and porcelain veneers to complete smile makeovers, we help you achieve the confident, radiant smile you've always wanted.",
  },
  {
    id: 3,
    title: "Endodonti",
    description:
      "Save your natural teeth with our expert endodontic treatments. Our specialists use advanced technology and gentle techniques to treat infected or damaged tooth pulp, relieving pain and preserving your natural smile for years to come.",
  },
  {
    id: 4,
    title: "Prosthodonti",
    description:
      "Rebuild and restore damaged or missing teeth with our expert prosthodontic solutions. From custom crowns and bridges to full and partial dentures, we create precise restorations that blend seamlessly with your natural teeth.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Section heading */}
        <AnimateIn direction="up" duration={600}>
          <div className="mb-10 lg:mb-14">
            <p className="text-[11px] font-semibold tracking-[0.08em] text-[#26292F]/50 uppercase mb-1">
              01
            </p>
            <h2
              className="text-[36px] lg:text-[56px] font-semibold leading-[1] tracking-[-1.8px] lg:tracking-[-2.8px] text-[#26292F]"
            >
              Services
            </h2>
          </div>
        </AnimateIn>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left column */}
          <AnimateIn
            direction="up"
            duration={650}
            delay={100}
            className="flex flex-col gap-8 lg:w-[55%]"
          >
            {/* Active service title */}
            <h3
              className="text-[48px] lg:text-[80px] font-semibold leading-[1] tracking-[-2px] lg:tracking-[-4px] text-[#26292F] transition-all duration-300"
            >
              {activeService.title}
            </h3>

            {/* Description */}
            <p className="text-[14px] font-medium leading-[18.2px] text-[#26292F]/80 max-w-[480px]">
              {activeService.description}
            </p>

            {/* Tab list */}
            <div className="flex flex-col gap-2 mt-2">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(index)}
                    className={
                      isActive
                        ? "text-left text-[20px] font-bold tracking-[-0.4px] text-white bg-[#26292F] rounded-[12px] p-4 transition-all duration-200"
                        : "text-left text-[16px] font-normal tracking-[-0.32px] text-black/70 px-4 py-3 rounded-[12px] hover:bg-black/5 transition-all duration-200"
                    }
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>
          </AnimateIn>

          {/* Right column — image */}
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
