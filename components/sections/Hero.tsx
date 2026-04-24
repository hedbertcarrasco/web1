import { NetworkCanvas } from "@/components/effects/NetworkCanvas";
import { Badge, LiveDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute inset-0 bg-radial-accent" />
        <div className="absolute inset-0 mask-fade-b">
          <NetworkCanvas />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24 md:pb-36">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          <Badge>
            <LiveDot />
            <span className="text-[color:var(--color-accent)]">Consultoría técnica</span>
            <span className="text-[color:var(--color-text-muted)]">· Redes · Ciberseguridad</span>
          </Badge>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Arquitectura y observabilidad de red,{" "}
            <span className="text-[color:var(--color-accent)]">con criterio técnico.</span>
          </h1>

          <p className="max-w-2xl text-balance text-base text-[color:var(--color-text-muted)] md:text-lg">
            Lumynar acompaña proyectos de{" "}
            <strong className="text-[color:var(--color-text)]">ingeniería de redes</strong> y{" "}
            <strong className="text-[color:var(--color-text)]">ciberseguridad</strong> desde el
            descubrimiento hasta la puesta en producción. Experiencia multivendor en Fortinet, Palo
            Alto, IBM y Cortex, con foco en observabilidad de red.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contacto">
                Conversemos
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#servicios">
                <Sparkles className="h-4 w-4" />
                Conoce los servicios
              </a>
            </Button>
          </div>

          <dl className="mt-10 grid w-full grid-cols-2 gap-6 border-t border-[color:var(--color-border)] pt-8 md:grid-cols-4 md:gap-10">
            <HeroStat k="9+ años" v="Experiencia técnica" />
            <HeroStat k="Multi-vendor" v="Fortinet · Palo Alto · IBM" />
            <HeroStat k="End-to-end" v="Diseño → operación" />
            <HeroStat k="Chile · LATAM" v="Cobertura" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        {k}
      </dt>
      <dd className="mt-2 text-sm text-[color:var(--color-text)] md:text-base">{v}</dd>
    </div>
  );
}
