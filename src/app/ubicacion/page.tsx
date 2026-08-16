import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MielinaFloatingGuide from "@/components/MielinaFloatingGuide";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Ubicación",
  description:
    "Encuentra la oficina de Miel energy en Villavicencio, Meta, con mapa interactivo y enlace directo a Google Maps.",
};

export default function UbicacionPage() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Location />
        <CTA />
      </main>
      <Footer />
      <MielinaFloatingGuide />
      <WhatsAppFloatingButton />
    </div>
  );
}
