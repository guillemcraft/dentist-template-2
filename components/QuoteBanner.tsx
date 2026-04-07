import AnimateIn from "@/components/AnimateIn";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 0L12.8 8.2L20 11L12.8 13.8L11 22L9.2 13.8L2 11L9.2 8.2L11 0Z"
        fill="#2ABFBF"
      />
    </svg>
  );
}

export default function QuoteBanner() {
  return (
    <section id="quote" className="w-full py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <AnimateIn>
          <div className="relative">
            {/* Star before text */}
            <StarIcon className="mb-4" />

            <h3 className="text-[28px] leading-[32px] lg:text-[40px] lg:leading-[44px] font-semibold tracking-[-2px] text-[#26292F] text-left">
              Where Cutting-Edge Dental Expertise Meets Personalized Care: Your
              Destination for Holistic Dental Health, Beautiful Smiles, and
              Lasting Confidence.
            </h3>

            {/* Stars after text */}
            <div className="flex gap-3 mt-4">
              <StarIcon />
              <StarIcon className="opacity-50" />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
