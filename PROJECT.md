# Project: Irshad Ahamed Portfolio — Downstream Editorial Elevation

## Architecture
- **Framework & Runtime**: Next.js 16.4.3 (App Router, Turbopack, React 19.3.0).
- **Styling Engine**: Tailwind CSS v4 with CSS-native `@theme inline` tokens in `src/app/globals.css`.
- **Motion & Kinetic Stack**:
  - Lenis 1.3.27 smooth scrolling synchronized with GSAP ScrollTrigger via `LenisGsapBridge` in `src/components/smooth-scroll.tsx`.
  - GSAP 3.15.0 + SplitType 0.3.4 for kinetic character/word reveals (`HeadingReveal`).
  - Scroll-driven word spotlights via `WordHighlightText`.
  - Motion 14.7 (`motion/react`) for carousel physics and reactive transitions.
  - NumberFlow for rolling counter numerals.
- **Aesthetic System**:
  - Editorial minimalism: Swiss-style typography (Inter 900 display, Space Grotesk technical metadata with `// ` prefix, Manrope body).
  - Spatial typography layering (3D depth without canvas webGL clutter).
  - Palette: `#e2e2e1` light stone canvas transitioning into `#0c0c0c` obsidian dark canvas, framed by `border-white/[0.08]` hairlines and `#ff3b1f` vermilion accents.
  - Strict prohibition of hardware/schematic motifs (no circuit traces, via pads, oscilloscope waveforms, rotary encoders, or chassis screws; StarLogo 8-point geometric mark only).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Lint Resolution | Fix unbraced `//` JSX textnode in `hero.tsx:285` and unused import in `data/projects.ts:3` | M1 | Survey |
| 2 | Hardware Motif Pruning | Remove `@keyframes via-glow` and `.via-pads` CSS, ensure `StarLogo` used exclusively | M1 | Survey & R1 |
| 3 | Canvas Transition Unification | Fluid kinetic transition from light Hero (`#e2e2e1`) to dark downstream canvas (`#0c0c0c`) | M1 | Survey & R2 |
| 4 | About Kinetic Typography | Mount `HeadingReveal` and `WordHighlightText` for core intro statement | M2 | Survey & R1, R2 |
| 5 | Workbench Bring-Ups Elevation | Elevate `BUILD_NOTES` cards with `.text-outline` numerals, status tags, and hover polish | M2 | Survey & R1 |
| 6 | About Recognition Showcase | Minimalist typographic index of hackathon wins (`RECOGNITION`) from `profile.ts` | M2 | Survey & R1 |
| 7 | Projects Authentic Media | Replace mock hardware SVGs (`mock-kroma.svg`) with real project imagery (`fluxboard`, `sentai`, `brain-dots`) | M3 | Survey & R1 |
| 8 | Projects Carousel Elevation | Mount `HeadingReveal`, refine card typography, tags, and 3D tilt response | M3 | Survey & R1, R2 |
| 9 | Projects Archive Elevation | Stroked index numerals (`01`, `02`...), tech pills, year tags, and clean responsive layout | M3 | Survey & R1 |
| 10 | Contact Kinetic Headline | Mount `HeadingReveal` with SplitType character entrance for closing headline | M4 | Survey & R1, R2 |
| 11 | Contact Interactive Clipboard | "Copy Email" button with `sonner` toast confirmation alongside LinkedIn / GitHub pills | M4 | Survey & R1 |
| 12 | Live Availability Indicator | Editorial badge with live status and Chennai (IST) coordinates | M4 | Survey & R1 |
| 13 | Responsive & Build Verification | Clean `npm run build`, `npm run lint`, responsive layout across 375px, 768px, 1280px+ | M5 | R3 & AC |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Baseline Integrity & Canvas Transition | Lint fixes in `hero.tsx` & `projects.ts`, prune residual circuit CSS, smooth canvas transition | none | DONE |
| M2 | About Section Editorial Elevation | Mount `HeadingReveal` & `WordHighlightText`, elevate workbench cards, add recognition index | M1 | DONE |
| M3 | Projects Section & Archive Elevation | Authentic project assets, remove schematic SVGs, elevate carousel cards & archive table | M1 | DONE |
| M4 | Contact Section & Interactive Polish | SplitType headline, clipboard email with toast, live availability badge | M1 | DONE |
| M5 | Full Verification, Responsive Gate & Audit | Build, lint, responsive validation across breakpoints (375px, 768px, 1280px+), forensic audit | M2, M3, M4 | DONE |

## Interface Contracts
### `src/components/heading-reveal.tsx`
- Prop types: `children: React.ReactNode`, `className?: string`, `as?: "h1" | "h2" | "h3" | "p" | "span"`, `type?: "chars" | "words"`, `stagger?: number`.
- Behavior: Character/word staggered reveal on ScrollTrigger entry with `power4.out`.

### `src/components/word-highlight-text.tsx`
- Prop types: `text: string`, `className?: string`.
- Behavior: Words wrapped in `.wh-word` spans that highlight dynamically as the user scrolls through the container.

### `src/data/profile.ts` ↔ Downstream Components
- `RECOGNITION`: Array of `{ title: string, award: string, event: string, year: string, description?: string }`.
- `BUILD_NOTES`: Array of `{ title: string, platform: string, status: string, summary: string, date: string, highlights: string[] }`.

## Code Layout
- `src/components/hero.tsx` — Reference standard; only lint JSX comment syntax fix allowed.
- `src/app/page.tsx` — Page wrapper, canvas transition boundary between light hero and dark canvas.
- `src/app/globals.css` — Tailwind v4 `@theme inline`, CSS animations, Lenis integration.
- `src/components/about-section.tsx` — Owned by Milestone M2 Worker.
- `src/components/projects-section.tsx` & `src/data/projects.ts` — Owned by Milestone M3 Worker.
- `src/components/contact-section.tsx` — Owned by Milestone M4 Worker.
- `src/components/site-header.tsx` & `src/components/site-footer.tsx` — Header & footer shared components.
