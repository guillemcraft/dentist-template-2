"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

const faqs = [
  {
    question:
      "How is a root canal treatment performed, and how long will it take?",
    answer:
      "Root canal treatment involves cleaning and filling the inside of an infected or inflamed tooth. The treatment duration is typically completed in one or a few sessions. However, it may vary depending on the complexity of the case.",
  },
  {
    question:
      "How can I schedule an emergency appointment for a painful dental issue?",
    answer:
      "Contact our clinic directly by phone or through our online booking form. We reserve slots for urgent cases and aim to see emergency patients the same day whenever possible.",
  },
  {
    question: "How often should I have a dental cleaning?",
    answer:
      "Most patients benefit from a professional cleaning every six months. Depending on your oral health, your dentist may recommend more frequent visits to keep gum disease and tartar buildup under control.",
  },
  {
    question: "What oral hygiene products should I use?",
    answer:
      "We recommend a soft-bristled toothbrush, fluoride toothpaste, and daily flossing. An antimicrobial mouthwash can provide additional protection. Your dentist can suggest products tailored to your specific needs during your visit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" style={{ backgroundColor: "rgba(214,255,255,0.3)" }}>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-20 lg:py-28">
        <AnimateIn>
          <h2
            className="font-semibold tracking-tight text-[#26292F] mb-10 lg:mb-14 italic"
            style={{ fontSize: "48px", lineHeight: 1.1 }}
          >
            FAQ
          </h2>
        </AnimateIn>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <AnimateIn key={index} delay={index * 80}>
                <div
                  className={`rounded-[16px] overflow-hidden transition-colors duration-300 ${
                    isOpen ? "bg-[#26292F]" : "bg-white/70"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`w-full flex items-center justify-between gap-4 px-8 text-left ${
                      isOpen ? "py-8" : "py-6"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[20px] font-normal leading-[26px] tracking-[-0.2px] transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-[#26292F]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-white/40 text-white rotate-45"
                          : "border-[#26292F]/30 text-[#26292F]/50"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300"
                      >
                        <path
                          d="M7 1V13M1 7H13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="px-8 pb-8 mt-4 text-[14px] font-medium leading-[18.2px]"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
