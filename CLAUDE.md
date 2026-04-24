# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing page for **Lumynar Spa**, a Chilean IT consultancy specializing in network observability and the **IBM Network Management** portfolio (IBM SevOne NPM 7.2 and SevOne Automated Network Observability / SANO). Target audience is NetOps decision-makers in enterprise, telco, and MSPs across Chile and Latam.

Content is in Chilean Spanish (`es-CL`). The voice is technical and direct — avoid marketing fluff. SevOne NPM and SANO are the hero products; keep the IBM partner positioning prominent.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS v4 with CSS-first `@theme` (no `tailwind.config.*`) — design tokens live in `app/globals.css`
- **UI primitives:** Radix (`@radix-ui/react-dialog`, `@radix-ui/react-slot`), variants via `class-variance-authority`
- **Motion:** hand-rolled canvas (`components/effects/NetworkCanvas.tsx`); `motion` is installed but used sparingly
- **Lint/format:** Biome (single tool — no ESLint/Prettier)
- **Analytics:** `@vercel/analytics` + `@vercel/speed-insights` (auto-injected in `app/layout.tsx`)
- **Deploy:** Vercel (repo linked)

## Commands

- `npm run dev` — Next dev server on `http://localhost:3000`
- `npm run build` — production build; also the canonical type-check (no separate `tsc` script)
- `npm run lint` — `biome check .`
- `npm run format` — `biome format --write .`

Package manager is **npm** (pnpm is not installed on this machine).

## Architecture

Single-page site. `app/page.tsx` composes section components in order: `Navbar → Hero → Metrics → Services → Portfolio → Differentiators → Industries → Partners → Contact → Footer`. Anchors drive navigation (`#servicios`, `#portafolio`, `#diferenciadores`, `#industrias`, `#contacto`).

- `components/sections/*` — one file per landing section, all server components unless they need `"use client"` (Metrics and NetworkCanvas do; everything else is RSC).
- `components/layout/{Navbar,Footer}.tsx` — Navbar is a client component with scroll state + mobile `Radix Dialog` sheet.
- `components/effects/NetworkCanvas.tsx` — animated node network in the hero. Respects `prefers-reduced-motion`, scales density on mobile, pauses outside viewport via `IntersectionObserver`.
- `components/ui/*` — small primitives (`Button`, `Card`, `Badge`, `LiveDot`, `Section` wrapper).
- `lib/site-config.ts` — **single source of truth** for company data (name, tagline, email, phone, WhatsApp, LinkedIn, address) and `navLinks`, `metrics`. Update here, not inline in sections.
- `lib/utils.ts` — `cn()` (clsx + tailwind-merge).
- `app/opengraph-image.tsx`, `app/icon.tsx` — edge-runtime dynamic OG/favicon generated from brand tokens.
- `app/robots.ts`, `app/sitemap.ts` — Next metadata-route files; rely on `site.url`.

## Design tokens

All colors and font families are CSS custom properties declared inside `@theme` in `app/globals.css`. Reference them with arbitrary values (`text-[color:var(--color-accent)]`) or the generated utilities. Key tokens: `--color-bg` `#0A0E1A`, `--color-surface` `#111827`, `--color-accent` `#00E5C7` (cyan), `--color-text` `#E6EDF3`. The site is dark-only — no light mode or toggle in v1.

## Out of scope (v2+)

Contact backend (Resend) — currently just `mailto:` + WhatsApp. Bilingual EN (next-intl). MDX blog / case studies. Real case study content (currently placeholders). Brand assets in `lib/site-config.ts` (email, phone, WhatsApp, LinkedIn) are placeholders and must be replaced before launch.
