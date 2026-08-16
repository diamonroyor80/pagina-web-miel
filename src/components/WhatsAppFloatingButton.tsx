"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { WhatsappIcon } from "./SocialIcons";
import { HexBadge } from "./Hex";
import { contact } from "@/lib/content";

export default function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const text = encodeURIComponent("Hola Miel energy, quiero más información sobre energía solar y baterías de respaldo.");

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      href={`https://wa.me/${contact.whatsappNumber}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 left-5 z-40"
    >
      <HexBadge
        size={76}
        strokeWidth={3.5}
        gap={10}
        fill="var(--color-gold-500)"
        outerStroke="var(--color-navy-950)"
        innerStroke="var(--color-navy-950)"
        className="shadow-[0_8px_24px_-6px_rgba(6,57,74,0.5)] transition-transform hover:scale-105"
      >
        <WhatsappIcon className="h-10 w-10 text-navy-950" />
      </HexBadge>
    </motion.a>
  );
}
