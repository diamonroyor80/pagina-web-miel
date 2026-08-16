# Miel energy — sitio web

Sitio de marketing de Miel energy (energía solar y baterías de respaldo en
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

Los datos de contacto reales (WhatsApp, correo, dirección) ya están
cargados en `src/lib/content.ts` (`contact`). Lo único que falta:

- Los enlaces de redes sociales en `src/components/Footer.tsx` siguen
  como placeholder (`href="#"`) — reemplázalos por los perfiles reales
  de Instagram, Facebook y LinkedIn cuando existan.

## Despliegue en Vercel

1. Importa este repositorio en [vercel.com/new](https://vercel.com/new).
2. Vercel detecta Next.js automáticamente — no requiere configuración
   adicional.
3. En **Settings → Domains**, agrega `www.mielenergy.com` (y redirige
   `mielenergy.com` a `www`).
