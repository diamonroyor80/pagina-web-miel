"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-18 py-3">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <Image
            src="/brand/logo.webp"
            alt="MIEL energy"
            width={140}
            height={134}
            priority
            className="h-11 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream-50/90 hover:text-gold-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-[0_0_0_0_rgba(252,207,7,0.6)] transition-all hover:shadow-[0_0_24px_2px_rgba(252,207,7,0.5)] hover:bg-gold-400"
        >
          Cotiza tu proyecto
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center gap-1.5 h-10 w-10 items-center"
        >
          <span
            className={`h-0.5 w-6 bg-cream-50 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-cream-50 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-cream-50 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open ? (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-md px-5 pb-6 pt-2 flex flex-col gap-4 border-t border-white/10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-cream-50/90 text-base font-medium py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950"
          >
            Cotiza tu proyecto
          </a>
        </div>
      ) : null}
    </motion.header>
  );
}
