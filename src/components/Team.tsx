"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { team } from "@/lib/content";
import HexField from "./HexField";

export default function Team() {
  return (
    <>
      <section
        id="equipo"
        className="relative overflow-hidden bg-navy-950 pt-36 pb-20 sm:pt-44 sm:pb-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#041e27_0%,_#06394a_100%)]" />
        <HexField
          items={[
            { top: "12%", left: "8%", size: 110, color: "var(--color-gold-500)", opacity: 0.16, delay: "0.1s", rotate: -10 },
            { top: "72%", left: "92%", size: 130, color: "var(--color-sky-300)", opacity: 0.12, delay: "0.8s", rotate: 8 },
            { top: "85%", left: "20%", size: 60, color: "var(--color-gold-400)", opacity: 0.2, delay: "0.4s", rotate: 15 },
            { top: "35%", left: "60%", size: 300, color: "var(--color-gold-500)", opacity: 0.13, delay: "0.3s", rotate: 0, blur: true, gold: true },
          ]}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 border border-gold-400/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-400 uppercase">
              Nuestro equipo
            </span>
            <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight">
              Las personas detrás de cada mega vatio
            </h1>
            <p className="mt-5 text-lg text-sky-100/75 leading-relaxed">
              Un equipo multidisciplinario de ingeniería, operaciones y finanzas
              que convierte cada proyecto solar en energía honesta y confiable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
        <div className="glow-gold absolute top-0 right-0 h-96 w-96 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="flex flex-col items-center rounded-3xl border border-navy-900/10 bg-white p-8 text-center shadow-[0_10px_40px_-15px_rgba(6,57,74,0.15)] transition-transform hover:-translate-y-1.5"
              >
                <div className="relative h-56 w-44 shrink-0">
                  <span className="absolute -inset-2.5 rounded-[50%] border-2 border-gold-400/40" />
                  <div className="absolute inset-0 rounded-[50%] border-[3px] border-gold-500 overflow-hidden bg-navy-900/10">
                    <Image
                      src={person.photo}
                      alt={`Foto de ${person.name}`}
                      fill
                      sizes="176px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-6 font-display text-lg font-bold text-navy-950">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-teal-500 uppercase tracking-wide">
                  {person.role}
                </p>
                <p className="mt-4 text-sm text-navy-900/75 leading-relaxed">
                  {person.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
