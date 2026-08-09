"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { mielinaMessages } from "@/lib/content";

export default function MielinaFloatingGuide() {
  const [sectionId, setSectionId] = useState("inicio");
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    const sections = mielinaMessages
      .map((m) => document.getElementById(m.section))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionId(entry.target.id);
            if (!dismissedRef.current) setOpen(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((el) => observer.observe(el));

    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const current =
    mielinaMessages.find((m) => m.section === sectionId) ?? mielinaMessages[0];

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="relative mb-1 max-w-[220px] rounded-2xl rounded-br-sm border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 shadow-[0_10px_30px_-8px_rgba(6,57,74,0.35)]"
          >
            <button
              aria-label="Cerrar mensaje de Mielina"
              onClick={() => {
                setOpen(false);
                dismissedRef.current = true;
              }}
              className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-cream-50"
            >
              <X className="h-3 w-3" />
            </button>
            {current.message}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setOpen((v) => !v);
          dismissedRef.current = false;
        }}
        aria-label="Mostrar guía de Mielina"
        className="relative shrink-0 rounded-full bg-navy-950 p-1.5 shadow-[0_8px_24px_-6px_rgba(6,57,74,0.5)] ring-2 ring-gold-500/50 transition-transform hover:scale-105"
      >
        <Image
          src="/brand/mielina.webp"
          alt="Mielina"
          width={866}
          height={807}
          className="h-12 w-12 object-contain"
        />
      </button>
    </div>
  );
}
