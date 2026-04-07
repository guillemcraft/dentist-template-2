import AnimateIn from "@/components/AnimateIn";

export default function QuoteBanner() {
  return (
    <section id="quote" className="w-full py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <AnimateIn>
          <h3 className="text-[28px] leading-[32px] lg:text-[40px] lg:leading-[44px] font-semibold tracking-[-2px] text-[#26292F] text-left">
            Where Cutting-Edge Dental Expertise Meets Personalized Care: Your
            Destination for Holistic Dental Health, Beautiful Smiles, and
            Lasting Confidence.
          </h3>
        </AnimateIn>
      </div>
    </section>
  );
}
