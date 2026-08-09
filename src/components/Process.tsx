"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { process } from "@/lib/content";
import { HexBadge } from "./Hex";

export default function Process() {
  return (
    <section id="proceso" className="relative bg-cream-100 py-24 sm:py-32 overflow-hidden">
      <div className="glow-gold absolute -bottom-20 left-1/4 h-96 w-96 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-navy-900/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-navy-800 uppercase">
            Cómo trabajamos
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            De la primera visita al monitoreo diario
          </h2>
        </motion.div>

        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-navy-900/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-600 via-gold-400 to-teal-500"
          />

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-start"
              >
                <div className="relative">
                  <HexBadge size={68} strokeWidth={3.5} gap={12}>
                    <span className="font-display text-lg font-bold text-gold-400">
                      {p.step}
                    </span>
                  </HexBadge>
                  {i === 1 && (
                    <Image
                      src="/brand/mielina.webp"
                      alt=""
                      width={866}
                      height={807}
                      aria-hidden
                      className="hidden lg:block absolute -top-14 left-1/2 -translate-x-1/2 w-14 h-auto animate-float"
                    />
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-950">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-navy-900/70 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
