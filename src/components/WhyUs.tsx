"use client";

import { motion } from "motion/react";
import {
  PiggyBank,
  ShieldCheck,
  BadgeCheck,
  Smartphone,
  Users,
  Sparkles,
} from "lucide-react";
import { benefits } from "@/lib/content";
import RhombusField from "./RhombusField";

const icons = [PiggyBank, ShieldCheck, BadgeCheck, Smartphone, Users, Sparkles];

export default function WhyUs() {
  return (
    <section id="por-que-miel" className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#041e27_0%,_#06394a_100%)]" />
      <RhombusField
        items={[
          { top: "10%", left: "90%", size: 100, color: "var(--color-gold-500)", opacity: 0.14, delay: "0.2s", rotate: 10 },
          { top: "70%", left: "3%", size: 130, color: "var(--color-sky-300)", opacity: 0.12, delay: "1s", rotate: -6 },
          { top: "85%", left: "70%", size: 60, color: "var(--color-gold-400)", opacity: 0.2, delay: "0.5s", rotate: 15 },
        ]}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 border border-gold-400/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-400 uppercase">
            Por qué MiEL
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight">
            Energía honesta, de principio a fin
          </h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="rounded-2xl border border-cream-50/10 bg-cream-50/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-gold-400/40 hover:bg-cream-50/[0.06]"
              >
                <div className="rhombus flex h-12 w-12 items-center justify-center bg-gold-500/15">
                  <Icon className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-cream-50">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-sky-100/70 leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
