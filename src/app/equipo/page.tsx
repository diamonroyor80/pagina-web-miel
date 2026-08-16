import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MielinaFloatingGuide from "@/components/MielinaFloatingGuide";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Nuestro equipo",
  description:
    "Conoce al equipo de MIEL energy: ingeniería, operaciones y finanzas trabajando juntos para llevarte energía solar honesta y confiable.",
};

export default function EquipoPage() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Team />
        <CTA />
      </main>
      <Footer />
      <MielinaFloatingGuide />
      <WhatsAppFloatingButton />
    </div>
  );
}
