"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Zap, Sun, Battery } from "lucide-react";
import RhombusField from "./RhombusField";

const traits = [
  {
    icon: Sun,
    title: "Alas de panel solar",
    description: "Capturan la energía del sol, igual que los sistemas que instalamos.",
  },
  {
    icon: Zap,
    title: "Antenas con carga",
    description: "Siempre atenta a la señal de tu consumo para guiarte mejor.",
  },
  {
    icon: Battery,
    title: "Su tarrito de miel",
    description: "Representa la energía guardada: tu respaldo para cuando más la necesitas.",
  },
];

export default function MielinaGuide() {
  return (
    <section id="mielina" className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(53,127,152,0.35),_transparent_60%)]" />
      <RhombusField
        items={[
          { top: "12%", left: "8%", size: 70, color: "var(--color-gold-400)", opacity: 0.18, delay: "0.3s", rotate: 14 },
          { top: "75%", left: "88%", size: 110, color: "var(--color-sky-300)", opacity: 0.12, delay: "1.1s", rotate: -10 },
        ]}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gold-500/25 blur-[100px]" />
          <Image
            src="/brand/mielina.webp"
            alt="Mielina, la mascota de MiEL energy"
            width={866}
            height={807}
            className="relative w-[260px] sm:w-[340px] h-auto animate-float-slow drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
          />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 border border-gold-400/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-400 uppercase">
              Nuestra mascota
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight">
              Mielina, tu guía energética
            </h2>
            <p className="mt-5 max-w-xl text-lg text-sky-100/75 leading-relaxed">
              Mielina es la abeja que le da cara a MiEL energy: mitad panel
              solar, mitad colmena, siempre en movimiento. Nos acompaña en
              cada visita, cada diseño y cada instalación, recordándonos que
              la energía también puede transmitir calidez.
            </p>
          </motion.div>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-2xl border border-cream-50/10 bg-cream-50/[0.03] p-6"
              >
                <t.icon className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-base font-bold text-cream-50">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-sky-100/70 leading-relaxed">
                  {t.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
