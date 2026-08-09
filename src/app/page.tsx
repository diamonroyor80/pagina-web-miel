import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import MielinaGuide from "@/components/MielinaGuide";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MielinaFloatingGuide from "@/components/MielinaFloatingGuide";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Process />
        <MielinaGuide />
        <CTA />
      </main>
      <Footer />
      <MielinaFloatingGuide />
      <WhatsAppFloatingButton />
    </div>
  );
}
