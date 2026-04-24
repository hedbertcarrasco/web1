import { site } from "@/lib/site-config";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Consultoría de redes, ciberseguridad y observabilidad`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "consultoría de redes",
    "ciberseguridad",
    "observabilidad de red",
    "IBM SevOne",
    "Fortinet",
    "Palo Alto",
    "NGFW",
    "VPN IPSec",
    "BGP OSPF",
    "EDR XDR",
    "Chile",
    "Lumynar",
  ],
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · Consultoría de redes y ciberseguridad`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Consultoría técnica en redes y ciberseguridad`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0E1A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
