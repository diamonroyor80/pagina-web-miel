import Image from "next/image";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./SocialIcons";
import { nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-16 pb-8">
      <span className="rhombus absolute -top-10 left-10 h-24 w-24 bg-gold-500/10" />
      <span className="rhombus absolute top-10 right-[8%] h-16 w-16 bg-sky-300/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-cream-50/10">
          <div className="lg:col-span-2">
            <Image
              src="/brand/logo.webp"
              alt="MiEL energy"
              width={140}
              height={134}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm text-sky-100/60 leading-relaxed">
              Diseñamos e instalamos energía solar y baterías de respaldo en
              Colombia, con Mielina como guía energética en cada proyecto.
            </p>
            <div className="mt-6 flex gap-3">
              {[InstagramIcon, FacebookIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social de MiEL energy"
                  className="rhombus flex h-10 w-10 items-center justify-center bg-cream-50/5 text-cream-50/70 transition-colors hover:bg-gold-500/20 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
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
              <li>contacto@mielenergy.com</li>
              <li>Colombia</li>
              <li>
                <a href="#contacto" className="text-gold-400 hover:text-gold-300">
                  Solicitar cotización →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-100/50">
          <p>© {new Date().getFullYear()} MiEL energy. Todos los derechos reservados.</p>
          <p>Energía solar · Baterías de respaldo · Hecho en Colombia</p>
        </div>
      </div>
    </footer>
  );
}
