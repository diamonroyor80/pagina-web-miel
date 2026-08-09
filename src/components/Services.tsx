"use client";

import { motion } from "motion/react";
import { Sun, BatteryCharging, Check } from "lucide-react";
import { services } from "@/lib/content";
import { HexBadge } from "./Hex";

const icons = { solar: Sun, baterias: BatteryCharging };

export default function Services() {
  return (
    <section id="soluciones" className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <div className="glow-gold absolute top-0 right-0 h-96 w-96 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-navy-900/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-navy-800 uppercase">
            Nuestras soluciones
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            Dos formas de tomar el control de tu energía
          </h2>
          <p className="mt-4 text-lg text-navy-900/70">
            Solas o combinadas, nuestras soluciones se diseñan alrededor de tu
            consumo real, no de un catálogo genérico.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = icons[service.id as keyof typeof icons];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-3xl border border-navy-900/10 bg-white p-8 sm:p-10 shadow-[0_10px_40px_-15px_rgba(6,57,74,0.15)] transition-transform hover:-translate-y-1.5"
              >
                <HexBadge
                  size={64}
                  fill="var(--color-gold-500)"
                  outerStroke="var(--color-navy-950)"
                  innerStroke="var(--color-navy-950)"
                  strokeWidth={3}
                  gap={12}
                  className="absolute -top-5 -right-5 transition-transform duration-500 group-hover:rotate-90"
                />

                <HexBadge size={68} strokeWidth={3.5} gap={12}>
                  <Icon className="h-7 w-7 text-gold-400" strokeWidth={1.75} />
                </HexBadge>

                <h3 className="mt-7 font-display text-2xl font-bold text-navy-950">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-teal-500 uppercase tracking-wide">
                  {service.tagline}
                </p>
                <p className="mt-4 text-navy-900/75 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-navy-900/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20">
                        <Check className="h-3.5 w-3.5 text-gold-600" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-950 border-b-2 border-gold-500 pb-0.5 transition-colors hover:text-teal-500"
                >
                  Hablar de mi proyecto →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
