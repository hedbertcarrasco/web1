export const site = {
  name: "Lumynar",
  legalName: "Lumynar Spa",
  tagline: "Visibilidad total de tu red. Acción antes del problema.",
  description:
    "Lumynar es la consultora chilena especializada en observabilidad de red e implementación del portafolio IBM Network Management. Convertimos datos de red en decisiones operacionales.",
  url: "https://lumynar.cl",
  locale: "es-CL",
  email: "contacto@lumynar.cl",
  phone: "+56 9 0000 0000",
  whatsapp: "56900000000",
  linkedin: "https://www.linkedin.com/company/lumynar",
  address: "Santiago, Chile",
} as const;

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#diferenciadores", label: "Por qué Lumynar" },
  { href: "#industrias", label: "Industrias" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const metrics = [
  { value: 15, suffix: "+", label: "años de expertise NetOps" },
  { value: 1200000, suffix: "", label: "interfaces monitoreadas", format: "compact" as const },
  { value: 99.95, suffix: "%", label: "uptime promedio gestionado", decimals: 2 },
  { value: 24, suffix: "/7", label: "operación NOC continua" },
];
