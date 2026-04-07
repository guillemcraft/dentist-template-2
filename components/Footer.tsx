import AnimateIn from "@/components/AnimateIn";

export default function Footer() {
  return (
    <>
      {/* Location Section */}
      <section id="location" className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <h2
                className="font-semibold text-[#26292F]"
                style={{
                  fontSize: "56px",
                  lineHeight: "56px",
                  letterSpacing: "-2.8px",
                }}
              >
                Based In
                <br />
                London
              </h2>
              <p
                className="font-semibold text-[#26292F] lg:text-right"
                style={{
                  fontSize: "32px",
                  lineHeight: "32px",
                  letterSpacing: "-1.44px",
                }}
              >
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
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
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
              <span
                className="text-white font-medium"
                style={{ fontSize: "16px" }}
              >
                Medicia
              </span>
            </a>

            {/* Nav Links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Doctors", href: "#doctors" },
                { label: "Book An Appointment", href: "#appointment" },
                { label: "Services", href: "#services" },
                { label: "FAQ", href: "#faq" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-white font-medium hover:opacity-70 transition-opacity"
                  style={{ fontSize: "16px", letterSpacing: "-0.16px" }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
