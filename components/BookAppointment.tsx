import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function BookAppointment() {
  return (
    <section id="appointment" className="py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Text Content */}
          <AnimateIn direction="right" className="w-full lg:w-[40%] flex flex-col gap-6">
            <h2 className="text-[56px] font-bold leading-[67.2px] tracking-[-1.44px] text-[#26292F]">
              Book An<br />Appointment
            </h2>
            <p className="text-[16px] font-medium text-[#000]">
              Discover How We Illuminate and Elevate Your Smiles.
            </p>
          </AnimateIn>

          {/* Right: Image */}
          <AnimateIn direction="left" delay={200} className="w-full lg:w-[60%]">
            <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden">
              <Image
                src="/images/cta/appointment.jpg"
                alt="Dental clinic interior"
                fill
                className="object-cover"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
