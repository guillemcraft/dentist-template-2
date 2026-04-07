import AnimateIn from "@/components/AnimateIn";

export default function Footer() {
  return (
    <>
      {/* Location Section */}
      <section id="location" className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <h2 className="text-[56px] font-semibold leading-[56px] tracking-[-2.8px] text-[#26292F]">
                Based In
                <br />
                London
              </h2>
              <p className="text-[32px] font-semibold leading-[32px] tracking-[-1.44px] text-[#26292F] md:text-right">
                Flat E, 361 High Road,
                <br />
                London, England,
                <br />
                N22 8JA
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#26292F] py-8">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 7 2 C 4 2 2 5 2 8 C 2 10.11 3 13 4 14 C 5 15 6 22 8 22 C 12.54 22 10 15 12 15 C 14 15 11.46 22 16 22 C 18 22 19 15 20 14 C 21 13 22 10.11 22 8 C 22 5 20 2 17 2 C 14 2 14 3 12 3 C 10 3 10 2 7 2 Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-[16px] font-medium tracking-[-0.16px]">
                Medicia
              </span>
            </a>

            {/* Nav Links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              <a
                href="#about"
                className="text-[16px] font-medium tracking-[-0.16px] text-white hover:opacity-70 transition-opacity"
              >
                About Us
              </a>
              <a
                href="#doctors"
                className="text-[16px] font-medium tracking-[-0.16px] text-white hover:opacity-70 transition-opacity"
              >
                Doctors
              </a>
              <a
                href="#appointment"
                className="text-[16px] font-medium tracking-[-0.16px] text-white hover:opacity-70 transition-opacity"
              >
                Book An Appointment
              </a>
              <a
                href="#services"
                className="text-[16px] font-medium tracking-[-0.16px] text-white hover:opacity-70 transition-opacity"
              >
                Services
              </a>
              <a
                href="#faq"
                className="text-[16px] font-medium tracking-[-0.16px] text-white hover:opacity-70 transition-opacity"
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
