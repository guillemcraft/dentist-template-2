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

const toothIcon = (
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
      fill="#26292F"
    />
  </svg>
);

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line
            x1="5"
            y1="5"
            x2="19"
            y2="19"
            stroke="#26292F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="19"
            y1="5"
            x2="5"
            y2="19"
            stroke="#26292F"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <line
            x1="4"
            y1="7"
            x2="20"
            y2="7"
            stroke="#26292F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            stroke="#26292F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="17"
            x2="20"
            y2="17"
            stroke="#26292F"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }

  function handleMobileLinkClick(id: string) {
    closeMenu();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }

  return (
    <>
      <nav
        className="sticky top-0 z-40 w-full bg-white"
        style={{ height: "64px" }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 no-underline"
            aria-label="Medicia home"
          >
            {toothIcon}
            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "-0.2px",
                color: "#26292F",
                fontFamily: "var(--font-sans)",
              }}
            >
              Medicia
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-7 lg:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "30px",
                    letterSpacing: "-0.2px",
                    color: "#26292F",
                    fontFamily: "var(--font-sans)",
                  }}
                  className="transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="#appointment"
              style={{
                backgroundColor: "#FFD6F2",
                color: "#66475B",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "var(--font-sans)",
                display: "inline-block",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-80"
            >
              Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center lg:hidden"
            onClick={menuOpen ? closeMenu : openMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#ffffff",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          padding: "0 24px",
          pointerEvents: menuOpen ? "all" : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      >
        {/* Overlay header */}
        <div
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div className="flex items-center gap-2">
            {toothIcon}
            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "-0.2px",
                color: "#26292F",
                fontFamily: "var(--font-sans)",
              }}
            >
              Medicia
            </span>
          </div>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex items-center justify-center"
          >
            <HamburgerIcon open={true} />
          </button>
        </div>

        {/* Mobile links */}
        <ul
          role="list"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "32px",
            flex: 1,
          }}
        >
          {navLinks.map((link, i) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleMobileLinkClick(id)}
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    letterSpacing: "-0.3px",
                    color: "#26292F",
                    fontFamily: "var(--font-sans)",
                    background: "none",
                    border: "none",
                    padding: "12px 0",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.3s ease, transform 0.3s ease`,
                    transitionDelay: `${150 + i * 75}ms`,
                  }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile CTA */}
        <div
          style={{
            paddingBottom: "40px",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            transitionDelay: `${150 + navLinks.length * 75}ms`,
          }}
        >
          <button
            onClick={() => handleMobileLinkClick("appointment")}
            style={{
              backgroundColor: "#FFD6F2",
              color: "#66475B",
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "15px",
              fontWeight: 500,
              fontFamily: "var(--font-sans)",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Appointment
          </button>
        </div>
      </div>
    </>
  );
}
