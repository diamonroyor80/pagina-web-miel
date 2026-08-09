"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";
import { HexBadge } from "./Hex";
import HexField from "./HexField";
import { contact } from "@/lib/content";

export default function CTA() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    interes: "Energía solar",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola MIEL energy, soy ${form.nombre || "—"}.%0AInterés: ${form.interes}%0ATeléfono: ${form.telefono || "—"}%0AMensaje: ${form.mensaje || "—"}`;
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,_#041e27_0%,_#06394a_60%,_#0f5568_100%)]" />
      <HexField
        items={[
          { top: "8%", left: "85%", size: 90, color: "var(--color-gold-500)", opacity: 0.16, delay: "0.4s", rotate: 8 },
          { top: "80%", left: "6%", size: 130, color: "var(--color-sky-300)", opacity: 0.1, delay: "1.3s", rotate: -12 },
          { top: "45%", left: "50%", size: 300, color: "var(--color-gold-500)", opacity: 0.14, delay: "0.2s", rotate: 0, blur: true, gold: true },
        ]}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 border border-gold-400/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-400 uppercase">
            Hablemos de tu proyecto
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight">
            Cotiza tu energía solar o de respaldo
          </h2>
          <p className="mt-5 max-w-md text-lg text-sky-100/75 leading-relaxed">
            Cuéntanos sobre tu consumo y tu ubicación. Un asesor de MIEL
            energy te contacta con una propuesta a la medida.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`https://wa.me/${contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <HexBadge size={52} strokeWidth={3} gap={9}>
                <WhatsappIcon className="h-5 w-5 text-gold-400" />
              </HexBadge>
              <span className="text-cream-50/90 group-hover:text-gold-400 transition-colors">
                WhatsApp directo: {contact.whatsappDisplay}
              </span>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
              <HexBadge size={52} strokeWidth={3} gap={9}>
                <Mail className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
              </HexBadge>
              <span className="text-cream-50/90 group-hover:text-gold-400 transition-colors">
                {contact.email}
              </span>
            </a>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <HexBadge size={52} strokeWidth={3} gap={9}>
                <MapPin className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
              </HexBadge>
              <span className="text-cream-50/90 group-hover:text-gold-400 transition-colors">
                {contact.address}
              </span>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-cream-50/10 bg-cream-50/[0.04] backdrop-blur-sm p-7 sm:p-9 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-sm font-medium text-sky-100/80">Nombre</span>
              <input
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="mt-2 w-full rounded-xl border border-cream-50/15 bg-navy-950/50 px-4 py-3 text-cream-50 placeholder:text-cream-50/30 outline-none focus:border-gold-400/60"
                placeholder="Tu nombre"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-sky-100/80">Teléfono</span>
              <input
                required
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="mt-2 w-full rounded-xl border border-cream-50/15 bg-navy-950/50 px-4 py-3 text-cream-50 placeholder:text-cream-50/30 outline-none focus:border-gold-400/60"
                placeholder="300 000 0000"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-sky-100/80">Me interesa</span>
            <select
              value={form.interes}
              onChange={(e) => setForm({ ...form, interes: e.target.value })}
              className="mt-2 w-full rounded-xl border border-cream-50/15 bg-navy-950/50 px-4 py-3 text-cream-50 outline-none focus:border-gold-400/60"
            >
              <option>Energía solar</option>
              <option>Baterías de respaldo</option>
              <option>Solar + baterías</option>
              <option>Aún no lo sé, quiero asesoría</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-sky-100/80">Cuéntanos de tu proyecto</span>
            <textarea
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              rows={4}
              className="mt-2 w-full rounded-xl border border-cream-50/15 bg-navy-950/50 px-4 py-3 text-cream-50 placeholder:text-cream-50/30 outline-none focus:border-gold-400/60 resize-none"
              placeholder="Ciudad, tipo de predio, valor aproximado de tu factura..."
            />
          </label>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold text-navy-950 transition-all hover:shadow-[0_0_28px_4px_rgba(252,207,7,0.45)] hover:bg-gold-400"
          >
            Enviar por WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
