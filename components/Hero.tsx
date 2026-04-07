import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">
        {/* Left column ~50% */}
        <div className="flex flex-col gap-8 lg:w-1/2">
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
                text-[#26292F]/70
              "
            >
              Choose Our Dental Clinic as Your Go-To Destination for Trusted and
              Compassionate Dental Health Solutions. Your Smile Is More Than Just
              Teeth to Us—It&apos;s
            </p>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="flex flex-col">
              {/* Book Now */}
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

              {/* Discover */}
              <a
                href="#doctors"
                className="
                  flex items-center justify-between
                  border-b border-[#26292F]/20 pb-4 pt-4
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

        {/* Right column ~50% */}
        <AnimateIn
          className="lg:w-1/2 relative"
          direction="left"
          delay={300}
        >
          <div className="relative w-full min-h-[420px] lg:min-h-[520px]">
            {/* Main large card — teal bg baked into the PNG */}
            <div
              className="
                relative w-[85%] lg:w-[82%] h-[380px] lg:h-[460px]
                rounded-[24px] overflow-hidden bg-[#4A7C6F]
              "
            >
              <Image
                src="/images/hero/dental-implant-icon.png"
                alt="Dental implant 3D illustration"
                fill
                className="object-contain p-6"
                priority
              />
            </div>

            {/* Pink overlay card — absolute bottom-right */}
            <div
              className="
                absolute bottom-4 right-0
                w-[55%] lg:w-[50%]
                bg-[#FFD6F2] rounded-[20px]
                p-4 lg:p-5
                flex flex-col gap-3
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
                    text-[18px] lg:text-[20px] font-medium leading-tight tracking-[-0.5px]
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
                    text-[18px] lg:text-[20px] font-medium leading-tight tracking-[-0.5px]
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
