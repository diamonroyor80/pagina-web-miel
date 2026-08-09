# MiEL energy — sitio web

Sitio de marketing de MiEL energy (energía solar y baterías de respaldo en
Colombia), construido con Next.js 16 (App Router) + Tailwind CSS v4 +
Motion.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/app` — layout, página principal, metadata, `robots.ts`, `sitemap.ts`.
- `src/components` — secciones del sitio (Hero, Services, WhyUs, Process,
  MielinaGuide, CTA, Footer, y el widget flotante de Mielina).
- `src/lib/content.ts` — todo el copy editable del sitio (nav, servicios,
  beneficios, pasos del proceso, mensajes de Mielina).
- `public/brand` — logo, mascota (Mielina) y rombo de marca optimizados en
  `.webp`.
- `brand-source/` — archivos originales de marca en alta resolución (no se
  publican, solo quedan como respaldo/fuente).

## Pendiente antes de publicar

En `src/components/CTA.tsx` hay datos de contacto de ejemplo que debes
reemplazar por los reales:

- `WHATSAPP_NUMBER` — número de WhatsApp del equipo comercial.
- `CONTACT_EMAIL` — correo de contacto.
- `CITY` — ciudad/cobertura a mostrar.

Los enlaces de redes sociales en `src/components/Footer.tsx` también están
como placeholder (`href="#"`).

## Despliegue en Vercel

1. Importa este repositorio en [vercel.com/new](https://vercel.com/new).
2. Vercel detecta Next.js automáticamente — no requiere configuración
   adicional.
3. En **Settings → Domains**, agrega `www.mielenergy.com` (y redirige
   `mielenergy.com` a `www`).
