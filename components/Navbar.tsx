"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Book An Appointment", href: "#appointment" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => { setMenuOpen(true); document.body.style.overflow = "hidden"; };
  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = ""; };
  const handleMobileLink = (id: string) => {
    closeMenu();
    setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }, 100);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white" style={{ height: 64 }}>
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M 7 2 C 4 2 2 5 2 8 C 2 10.11 3 13 4 14 C 5 15 6 22 8 22 C 12.54 22 10 15 12 15 C 14 15 11.46 22 16 22 C 18 22 19 15 20 14 C 21 13 22 10.11 22 8 C 22 5 20 2 17 2 C 14 2 14 3 12 3 C 10 3 10 2 7 2 Z" fill="#26292F"/></svg>
            <span className="text-[20px] font-semibold tracking-[-0.2px] text-[#26292F]">Medicia</span>
          </Link>
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[15px] font-medium tracking-[-0.2px] text-[#26292F] hover:opacity-70 transition-opacity">{link.label}</Link>
              </li>
            ))}
          </ul>
          <button className="lg:hidden" onClick={menuOpen ? closeMenu : openMenu} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <><line x1="5" y1="5" x2="19" y2="19" stroke="#26292F" strokeWidth="2" strokeLinecap="round"/><line x1="19" y1="5" x2="5" y2="19" stroke="#26292F" strokeWidth="2" strokeLinecap="round"/></>
              ) : (
                <><line x1="4" y1="7" x2="20" y2="7" stroke="#26292F" strokeWidth="2" strokeLinecap="round"/><line x1="4" y1="12" x2="20" y2="12" stroke="#26292F" strokeWidth="2" strokeLinecap="round"/><line x1="4" y1="17" x2="20" y2="17" stroke="#26292F" strokeWidth="2" strokeLinecap="round"/></>
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div className="fixed inset-0 bg-white flex flex-col px-6 transition-opacity duration-250" style={{ zIndex: 9999, pointerEvents: menuOpen ? "all" : "none", opacity: menuOpen ? 1 : 0 }}>
        <div className="flex h-16 items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M 7 2 C 4 2 2 5 2 8 C 2 10.11 3 13 4 14 C 5 15 6 22 8 22 C 12.54 22 10 15 12 15 C 14 15 11.46 22 16 22 C 18 22 19 15 20 14 C 21 13 22 10.11 22 8 C 22 5 20 2 17 2 C 14 2 14 3 12 3 C 10 3 10 2 7 2 Z" fill="#26292F"/></svg>
            <span className="text-[20px] font-semibold tracking-[-0.2px] text-[#26292F]">Medicia</span>
          </div>
          <button onClick={closeMenu} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><line x1="5" y1="5" x2="19" y2="19" stroke="#26292F" strokeWidth="2" strokeLinecap="round"/><line x1="19" y1="5" x2="5" y2="19" stroke="#26292F" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2 mt-8">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <button onClick={() => handleMobileLink(link.href.replace("#", ""))} className="text-[24px] font-semibold text-[#26292F] py-3 w-full text-left transition-all duration-300" style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(16px)", transitionDelay: menuOpen ? `${150 + i * 75}ms` : "0ms" }}>{link.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
