import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.mielenergy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Miel energy — Energía solar y respaldo con baterías en Colombia",
    template: "%s | Miel energy",
  },
  description:
    "Miel energy diseña e instala sistemas de energía solar y baterías de respaldo en Colombia. Reduce tu factura, gana independencia energética y vive la energía más dulce con Mielina, tu guía energética.",
  keywords: [
    "energía solar Colombia",
    "paneles solares",
    "baterías de respaldo",
    "energía solar residencial",
    "energía solar comercial",
    "Miel energy",
    "independencia energética",
  ],
  openGraph: {
    title: "Miel energy — Energía solar y respaldo con baterías",
    description:
      "Diseñamos, instalamos y monitoreamos sistemas solares y de baterías en Colombia. Energía limpia, dulce e inteligente.",
    url: siteUrl,
    siteName: "Miel energy",
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-navy-950">
        {children}
      </body>
    </html>
  );
}
