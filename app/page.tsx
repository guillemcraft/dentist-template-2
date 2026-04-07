import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import QuoteBanner from "@/components/QuoteBanner";
import Testimonials from "@/components/Testimonials";
import BookAppointment from "@/components/BookAppointment";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Doctors />
        <QuoteBanner />
        <Testimonials />
        <BookAppointment />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
