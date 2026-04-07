"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const testimonials = [
  {
    id: 1,
    quote:
      "Extremely pleased with the treatments received here. The team communicated clearly and effectively at every step.",
    name: "Thomas Jenkins",
    role: "Engineer",
    avatar: "/images/testimonials/avatar-1.png",
  },
  {
    id: 2,
    quote:
      "Outstanding care from start to finish. The results exceeded my expectations.",
    name: "Sarah Michaels",
    role: "Designer",
    avatar: "/images/testimonials/avatar-2.png",
  },
  {
    id: 3,
    quote:
      "The staff made what I expected to be stressful genuinely comfortable. Highly recommend.",
    name: "Daniel Park",
    role: "Architect",
    avatar: "/images/testimonials/avatar-3.png",
  },
  {
    id: 4,
    quote:
      "Professional, gentle, and thorough. My whole family now comes here.",
    name: "Laura Bennett",
    role: "Teacher",
    avatar: "/images/testimonials/avatar-4.png",
  },
];

const avatars = [
  "/images/testimonials/avatar-1.png",
  "/images/testimonials/avatar-2.png",
  "/images/testimonials/avatar-3.png",
  "/images/testimonials/avatar-4.png",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Heading */}
        <AnimateIn direction="up" duration={600}>
          <div className="mb-10 lg:mb-14">
            <h2 className="text-[56px] font-semibold leading-[56px] tracking-[-2.8px] text-[#26292F]">
              Testimonials
            </h2>
          </div>
        </AnimateIn>

        {/* Testimonial card */}
        <AnimateIn direction="up" duration={650} delay={100}>
          <div className="bg-[#FAF5F8] rounded-[24px] px-8 py-12 lg:px-16 lg:py-16 flex flex-col items-center gap-8">
            {/* Quote */}
            <p className="text-[24px] font-medium leading-[32px] tracking-[-1px] text-[#340101] text-center max-w-[640px]">
              &ldquo;{active.quote}&rdquo;
            </p>

            {/* Reviewer info */}
            <div className="flex flex-col items-center gap-1">
              <p className="text-[16px] font-medium tracking-[-0.16px] text-[#171717] text-center">
                {active.name}
              </p>
              <p className="text-[14px] font-normal tracking-[-0.14px] text-black/60 text-center">
                {active.role}
              </p>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-6 h-2 bg-[#340101]"
                      : "w-2 h-2 bg-[#340101]/20 hover:bg-[#340101]/40"
                  }`}
                />
              ))}
            </div>

            {/* Avatar row */}
            <div className="flex items-center gap-3 lg:gap-4 mt-2">
              {avatars.map((src, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Select testimonial from ${testimonials[index].name}`}
                  className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-300 flex-shrink-0 ${
                    index === activeIndex
                      ? "ring-2 ring-[#340101]"
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <Image
                    src={src}
                    alt={testimonials[index].name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
