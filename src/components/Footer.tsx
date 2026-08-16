import Image from "next/image";
import { InstagramIcon, FacebookIcon, LinkedinIcon, WhatsappIcon } from "./SocialIcons";
import { HexBadge } from "./Hex";
import { nav, contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-16 pb-8">
      <span className="hex absolute -top-10 left-10 h-24 w-24 bg-gold-500/10" />
      <span className="hex absolute top-10 right-[8%] h-16 w-16 bg-sky-300/10" />
      <div className="glow-gold absolute top-0 left-1/3 h-72 w-72 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-cream-50/10">
          <div className="lg:col-span-2">
            <Image
              src="/brand/logo.webp"
              alt="Miel energy"
              width={140}
              height={134}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm text-sky-100/60 leading-relaxed">
              Diseñamos e instalamos energía solar y baterías de respaldo en
              Colombia, con Mielina como guía energética en cada proyecto.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escríbenos por WhatsApp"
              >
                <HexBadge size={56} strokeWidth={2.75} gap={9} fill="var(--color-gold-500)" outerStroke="var(--color-navy-950)" innerStroke="var(--color-navy-950)">
                  <WhatsappIcon className="h-7 w-7 text-navy-950" />
                </HexBadge>
              </a>
              {[
                { Icon: InstagramIcon, label: "Instagram de Miel energy" },
                { Icon: FacebookIcon, label: "Facebook de Miel energy" },
                { Icon: LinkedinIcon, label: "LinkedIn de Miel energy" },
              ].map(({ Icon, label }, i) => (
                <a key={i} href="#" aria-label={label}>
                  <HexBadge size={44} strokeWidth={2.5} gap={8}>
                    <Icon className="h-4 w-4 text-cream-50/80" />
                  </HexBadge>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-gold-400">
              Navegación
            </h4>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-sky-100/70 hover:text-cream-50 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-gold-400">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-sky-100/70">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-cream-50 transition-colors">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-cream-50 transition-colors">
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cream-50 transition-colors">
                  {contact.address}
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-gold-400 hover:text-gold-300">
                  Solicitar cotización →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-100/50">
          <p>© {new Date().getFullYear()} Miel energy. Todos los derechos reservados.</p>
          <p>Energía solar · Baterías de respaldo · Hecho en Colombia</p>
        </div>
      </div>
    </footer>
  );
}
