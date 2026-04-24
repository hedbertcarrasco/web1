import { site } from "@/lib/site-config";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = `${site.name} · Consultoría de redes, ciberseguridad y observabilidad`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background:
          "radial-gradient(ellipse 70% 60% at 30% 20%, rgba(0,229,199,0.28) 0%, transparent 60%), #0A0E1A",
        color: "#E6EDF3",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 999,
            background: "#00E5C7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#0A0E1A",
            }}
          />
        </div>
        <span style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>lumynar.</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span
          style={{
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#00E5C7",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          Redes · Ciberseguridad · Observabilidad
        </span>
        <h1
          style={{
            fontSize: 78,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
            margin: 0,
          }}
        >
          Arquitectura y observabilidad
          <br />
          <span style={{ color: "#00E5C7" }}>de red, con criterio técnico.</span>
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          color: "#8B95A7",
          borderTop: "1px solid rgba(0,229,199,0.2)",
          paddingTop: 24,
        }}
      >
        <span>lumynar.cl</span>
        <span>Fortinet · Palo Alto · IBM SevOne · Cortex</span>
      </div>
    </div>,
    { ...size },
  );
}
