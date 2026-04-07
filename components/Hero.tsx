import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2L13.5 9.5L21 8L15 12L21 16L13.5 14.5L12 22L10.5 14.5L3 16L9 12L3 8L10.5 9.5L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-4 pb-8 lg:pt-6 lg:pb-16">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* H1 — full width at top */}
        <AnimateIn>
          <h1
            className="
              text-[48px] leading-[52px] tracking-[-2px]
              lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px]
              font-semibold text-[#26292F] mb-6 lg:mb-8
            "
          >
            A dream smile is a reality.
          </h1>
        </AnimateIn>

        {/* Two-column layout below heading */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* LEFT: Hero video */}
          <AnimateIn className="lg:w-[50%]" delay={100}>
            <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-[#5B9BA4]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster=""
              >
                <source src="/images/hero/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </AnimateIn>

          {/* RIGHT: Content */}
          <AnimateIn className="lg:w-[50%] flex flex-col justify-between" direction="left" delay={200}>
            <div className="flex flex-col gap-6">
              {/* Divider line */}
              <div className="border-t border-[#26292F]/10" />

              {/* Decorative arrow icon top-right */}
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full border border-dashed border-[#26292F]/30 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4V12H12" stroke="#26292F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Subtitle */}
              <p
                className="text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.5px] text-[#26292F]/70"
              >
                Choose Our Dental Clinic as Your Go-To Destination for Trusted and
                Compassionate Dental Health Solutions. Your Smile Is More Than Just
                Teeth to Us—It&apos;s
              </p>

              {/* CTA pill buttons with dotted borders */}
              <div className="flex flex-col gap-3">
                <a
                  href="#appointment"
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-dashed border-[#26292F]/30 hover:border-[#26292F]/60 transition-colors group"
                >
                  <StarIcon className="text-[#2ABFBF] w-5 h-5 flex-shrink-0" />
                  <span className="text-[18px] font-semibold tracking-[-0.5px] text-[#26292F]">
                    Book Now
                  </span>
                </a>
                <a
                  href="#doctors"
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-dashed border-[#26292F]/30 hover:border-[#26292F]/60 transition-colors group"
                >
                  <StarIcon className="text-[#2ABFBF] w-5 h-5 flex-shrink-0" />
                  <span className="text-[18px] font-semibold tracking-[-0.5px] text-[#26292F]">
                    Discover
                  </span>
                </a>
              </div>
            </div>

            {/* Two service cards side by side at bottom */}
            <div className="flex gap-4 mt-6">
              {/* Dental Implant card — green/mint */}
              <div className="flex-1 bg-[#C8F5E3] rounded-[16px] overflow-hidden relative min-h-[180px]">
                <Image
                  src="/images/hero/dental-implant-icon.png"
                  alt="Dental implant consultation"
                  fill
                  className="object-cover opacity-30"
                  sizes="(max-width: 1024px) 50vw, 250px"
                />
                <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                  <StarIcon className="text-[#26292F]/40 w-5 h-5" />
                  <p className="text-[24px] lg:text-[28px] font-semibold leading-[1.1] tracking-[-1px] text-[#26292F]">
                    Dental<br />Implant
                  </p>
                </div>
              </div>

              {/* Aesthetic Care card — pink */}
              <div className="flex-1 bg-[#FFD6F2] rounded-[16px] overflow-hidden relative min-h-[180px]">
                <Image
                  src="/images/hero/aesthetic-care-icon.png"
                  alt="Beautiful smile"
                  fill
                  className="object-cover opacity-30"
                  sizes="(max-width: 1024px) 50vw, 250px"
                />
                <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                  <StarIcon className="text-[#26292F]/40 w-5 h-5" />
                  <p className="text-[24px] lg:text-[28px] font-semibold leading-[1.1] tracking-[-1px] text-[#26292F]">
                    Aesthetic<br />Care
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
