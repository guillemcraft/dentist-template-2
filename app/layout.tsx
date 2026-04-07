import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medicia Dental Care",
  description: "Choose Our Dental Clinic as Your Go-To Destination for Trusted and Compassionate Dental Health Solutions.",
  icons: { icon: "/images/favicon.jpg" },
  openGraph: {
    title: "Medicia Dental Care",
    description: "Choose Our Dental Clinic as Your Go-To Destination for Trusted and Compassionate Dental Health Solutions.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
