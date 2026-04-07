import AnimateIn from "@/components/AnimateIn";

export default function Introduction() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <AnimateIn>
          <p className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[50.4px] font-semibold text-black text-left">
            Choose Our Dental Clinic as Your Go-To Destination for Trusted and
            Compassionate Dental Health Solutions. Your Smile Is More Than Just
            Teeth to Us
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
