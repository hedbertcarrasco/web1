export const site = {
  name: "Lumynar",
  legalName: "Lumynar Spa",
  tagline: "Arquitectura y observabilidad de red, con criterio técnico.",
  description:
    "Consultora chilena de ingeniería de redes y ciberseguridad. Acompañamos proyectos multivendor desde el diseño hasta la puesta en producción, con 9+ años de experiencia en Fortinet, Palo Alto, IBM y Cortex.",
  url: "https://lumynar.cl",
  locale: "es-CL",
  email: "contacto@lumynar.cl",
  phone: "+56 9 6808 3990",
  whatsapp: "56968083990",
  linkedin: "",
  address: "Santiago, Chile",
} as const;

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Observabilidad IBM" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const signals = [
  { k: "9+", v: "años de experiencia técnica multivendor" },
  { k: "4", v: "áreas: SOC · Redes · Cloud · Endpoint" },
  { k: "Multi-vendor", v: "Fortinet · Palo Alto · IBM · Cortex" },
  { k: "End-to-end", v: "diseño · implementación · observabilidad" },
] as const;

export const technologies = [
  { name: "Fortinet", group: "Perímetro / NGFW" },
  { name: "Palo Alto", group: "Perímetro / NGFW" },
  { name: "Cortex XDR", group: "Endpoint / XDR" },
  { name: "IBM SevOne", group: "Observabilidad de red" },
  { name: "IBM Network Management", group: "Observabilidad de red" },
  { name: "AWS", group: "Nube" },
  { name: "Azure", group: "Nube" },
  { name: "BGP · OSPF", group: "Enrutamiento" },
  { name: "IPSec · SSL VPN", group: "Conectividad" },
  { name: "CIS Controls", group: "Compliance" },
] as const;
