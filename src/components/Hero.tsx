"use client";

import Image from "next/image";
import { motion } from "motion/react";
import RhombusField from "./RhombusField";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-navy-950 pt-28 pb-20 flex items-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#041e27_0%,_#06394a_55%,_#0a4457_100%)]" />
      <div className="absolute inset-0 bg-grain opacity-40" />
      <RhombusField />
      <div className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-[-10%] h-[420px] w-[420px] rounded-full bg-teal-500/25 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-400 uppercase">
            Energía solar · Baterías de respaldo · Colombia
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-cream-50">
            La energía nunca fue
            <br />
            tan{" "}
            <span className="text-gradient-gold">dulce</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-sky-100/80 leading-relaxed">
            En MiEL energy diseñamos, instalamos y monitoreamos sistemas
            solares y de baterías que reducen tu factura y te dan
            independencia energética, con la dulzura de un equipo que sí te
            acompaña.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold text-navy-950 transition-all hover:shadow-[0_0_28px_4px_rgba(252,207,7,0.45)] hover:bg-gold-400"
            >
              Cotiza tu proyecto gratis
            </a>
            <a
              href="#mielina"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/25 px-7 py-4 text-sm font-semibold text-cream-50 transition-colors hover:border-gold-400/60 hover:text-gold-400"
            >
              Conoce a Mielina
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["Solar + baterías", "Sistemas híbridos a tu medida"],
              ["RETIE", "Instalación conforme a normativa"],
              ["Monitoreo 24/7", "Desde tu celular"],
            ].map(([title, sub]) => (
              <div key={title}>
                <p className="font-display text-lg font-semibold text-gold-400">
                  {title}
                </p>
                <p className="text-sm text-sky-100/70">{sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gold-500/25 blur-[90px] animate-pulse-glow" />
          <div className="relative rhombus-tall bg-gradient-to-br from-teal-500/30 via-gold-500/20 to-sky-300/20 p-1 w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] mx-auto">
            <div className="rhombus-tall h-full w-full bg-navy-900/40 backdrop-blur-sm flex items-center justify-center">
              <Image
                src="/brand/mielina.webp"
                alt="Mielina, la abeja guía energética de MiEL energy"
                width={866}
                height={807}
                priority
                className="w-[85%] h-auto object-contain animate-float-slow drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#soluciones"
        aria-label="Desplázate para ver más"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-50/60"
      >
        <span className="text-xs tracking-widest uppercase">Descubre</span>
        <span className="h-9 w-5 rounded-full border border-cream-50/40 flex items-start justify-center p-1">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-bounce" />
        </span>
      </motion.a>
    </section>
  );
}
