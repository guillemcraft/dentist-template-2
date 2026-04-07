import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const doctors = [
  {
    name: "Mike Baker",
    specialty: "Endotontist",
    photo: "/images/doctors/mike-baker.jpg",
  },
  {
    name: "Esther Howard",
    specialty: "Prosthodontist",
    photo: "/images/doctors/esther-howard.jpg",
  },
  {
    name: "Kristin Watson",
    specialty: "Ortodontist",
    photo: "/images/doctors/kristin-watson.jpg",
  },
  {
    name: "Sena Sahin",
    specialty: "Pedodontist",
    photo: "/images/doctors/sena-sahin.jpg",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <AnimateIn direction="up">
          <h2 className="text-[56px] font-semibold leading-[56px] tracking-[-2.8px] text-[#26292F] mb-12">
            Meet With Dentist
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {doctors.map((doctor, i) => (
            <AnimateIn key={doctor.name} direction="up" delay={i * 150}>
              <div className="flex flex-col gap-4">
                {/* Pill-shaped photo */}
                <div className="relative w-full rounded-full overflow-hidden aspect-[477/280]">
                  <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                {/* Name and specialty */}
                <div className="flex flex-col gap-1 px-1">
                  <p className="text-[32px] font-semibold leading-[32px] tracking-[-1.44px] text-[#26292F]">
                    {doctor.name}
                  </p>
                  <p className="text-[16px] font-bold tracking-[-0.48px] text-[#66475B]">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
