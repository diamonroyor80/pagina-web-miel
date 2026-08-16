"use client";

import { motion } from "motion/react";
import { MapPin, Mail, Clock } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";
import { HexBadge } from "./Hex";
import HexField from "./HexField";
import { contact } from "@/lib/content";

export default function Location() {
  return (
    <>
      <section
        id="ubicacion"
        className="relative overflow-hidden bg-navy-950 pt-36 pb-20 sm:pt-44 sm:pb-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#041e27_0%,_#06394a_100%)]" />
        <HexField
          items={[
            { top: "15%", left: "88%", size: 100, color: "var(--color-gold-500)", opacity: 0.16, delay: "0.2s", rotate: 10 },
            { top: "75%", left: "5%", size: 130, color: "var(--color-sky-300)", opacity: 0.12, delay: "1s", rotate: -8 },
            { top: "88%", left: "70%", size: 60, color: "var(--color-gold-400)", opacity: 0.2, delay: "0.5s", rotate: 12 },
            { top: "35%", left: "40%", size: 300, color: "var(--color-gold-500)", opacity: 0.13, delay: "0.3s", rotate: 0, blur: true, gold: true },
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
              Nuestra ubicación
            </span>
            <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight">
              Visítanos en Villavicencio
            </h1>
            <p className="mt-5 text-lg text-sky-100/75 leading-relaxed">
              Conoce nuestra oficina y agenda una visita para hablar de tu
              proyecto de energía solar o baterías de respaldo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
        <div className="glow-gold absolute top-0 right-0 h-96 w-96 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-navy-900/10 bg-white p-8 sm:p-10 shadow-[0_10px_40px_-15px_rgba(6,57,74,0.15)]"
            >
              <HexBadge size={64} strokeWidth={3.5} gap={12}>
                <MapPin className="h-7 w-7 text-gold-400" strokeWidth={1.75} />
              </HexBadge>

              <h2 className="mt-6 font-display text-2xl font-bold text-navy-950">
                Oficina Miel energy
              </h2>

              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-navy-900/75 leading-relaxed hover:text-teal-500 transition-colors"
              >
                {contact.address}
              </a>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3 text-sm text-navy-900/80">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                    <WhatsappIcon className="h-4 w-4 text-gold-600" />
                  </span>
                  <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
                    {contact.whatsappDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-navy-900/80">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                    <Mail className="h-4 w-4 text-gold-600" strokeWidth={1.75} />
                  </span>
                  <a href={`mailto:${contact.email}`} className="hover:text-teal-500 transition-colors">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-navy-900/80">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                    <Clock className="h-4 w-4 text-gold-600" strokeWidth={1.75} />
                  </span>
                  Lunes a viernes, horario de oficina
                </li>
              </ul>

              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:shadow-[0_0_28px_4px_rgba(252,207,7,0.45)] hover:bg-gold-400"
              >
                Ver en Google Maps →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="min-h-[420px] overflow-hidden rounded-3xl border border-navy-900/10 shadow-[0_10px_40px_-15px_rgba(6,57,74,0.15)]"
            >
              <iframe
                src={contact.mapsEmbedUrl}
                title="Mapa de la oficina de Miel energy en Villavicencio"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
