import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full px-6 pt-16 pb-20 md:px-12 lg:px-20 lg:pt-24 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">
        {/* Left side */}
        <div className="flex flex-col gap-8 lg:w-[55%]">
          <AnimateIn>
            <h1
              className="
                text-[48px] leading-[52px] tracking-[-2px]
                lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px]
                font-semibold text-[#26292F] text-left
              "
            >
              A dream smile is a reality.
            </h1>
          </AnimateIn>

          <AnimateIn delay={100}>
            <p
              className="
                text-[20px] font-medium leading-[24px] tracking-[-1px]
                text-[#26292F]/70 max-w-[520px]
              "
            >
              Choose Our Dental Clinic as Your Go-To Destination for Trusted and
              Compassionate Dental Health Solutions. Your Smile Is More Than Just
              Teeth to Us—It&apos;s
            </p>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="flex flex-col gap-4">
              {/* Book Now link */}
              <a
                href="#appointment"
                className="
                  flex items-center justify-between
                  border-b border-[#26292F]/20 pb-4
                  text-[24px] font-medium tracking-[-1.44px] text-[#26292F]
                  group hover:border-[#26292F] transition-colors duration-200
                "
              >
                <span>Book Now</span>
                <span className="text-[20px] group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>

              {/* Discover link */}
              <a
                href="#doctors"
                className="
                  flex items-center justify-between
                  border-b border-[#26292F]/20 pb-4
                  text-[24px] font-medium tracking-[-1.44px] text-[#26292F]
                  group hover:border-[#26292F] transition-colors duration-200
                "
              >
                <span>Discover</span>
                <span className="text-[20px] group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Right side — overlapping cards */}
        <AnimateIn
          className="lg:w-[45%] relative"
          direction="left"
          delay={300}
        >
          <div className="relative w-full min-h-[480px] lg:min-h-[560px]">
            {/* Large mint/green card with dental image */}
            <div
              className="
                relative w-[90%] lg:w-[88%] h-[420px] lg:h-[500px]
                rounded-3xl overflow-hidden
                bg-[#E8F5EF]
              "
            >
              <Image
                src="/images/hero/dental-implant-icon.png"
                alt="Dental implant procedure"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Smaller pink card overlapping at bottom-right */}
            <div
              className="
                absolute bottom-0 right-0
                w-[62%] lg:w-[58%]
                bg-[#FFD6F2] rounded-2xl
                p-5 lg:p-6
                flex flex-col gap-4
                shadow-sm
              "
            >
              {/* Dental Implant row */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/images/hero/dental-implant-icon.png"
                    alt="Dental implant icon"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <span
                  className="
                    text-[32px] font-medium leading-[32px] tracking-[-1.44px]
                    text-[#26292F]
                  "
                >
                  Dental Implant
                </span>
              </div>

              {/* Aesthetic Care row */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/images/hero/aesthetic-care-icon.png"
                    alt="Aesthetic care icon"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <span
                  className="
                    text-[32px] font-medium leading-[32px] tracking-[-1.44px]
                    text-[#26292F]
                  "
                >
                  AestheticCare
                </span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
