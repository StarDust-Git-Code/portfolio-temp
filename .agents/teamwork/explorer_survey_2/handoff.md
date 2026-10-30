# Codebase Survey & Downstream Elevation Gap Analysis

## 1. Observation

### 1.1 Codebase Structure and File Inventory
The portfolio repository is a Next.js 16.4.3 (Turbopack) and React 19 application using Tailwind CSS 4, GSAP 3.15 with ScrollTrigger, Lenis 1.3, SplitType 0.3.4, Framer Motion (Motion 14.7), and NumberFlow.

Direct inspection via `find_by_name` and `view_file` identified the following relevant files:
- **Root Page & Layout Wrappers**:
  - `src/app/page.tsx`: Main page assembling `<Hero />` and dark wrapper `<div className="dark relative z-20 bg-[#0c0c0c] text-[#f4f4f4] transition-colors">` containing `<AboutSection />`, `<ProjectsSection />`, `<ContactSection />`, `<SiteFooter />`.
  - `src/app/layout.tsx`: Root HTML layout wrapping children in `<SmoothScroll>` (Lenis 1.3.27) and `<TooltipProvider>`.
  - `src/app/globals.css`: Tailwind v4 `@theme inline` configuration, color tokens, and custom animation definitions.
  - `src/components/smooth-scroll.tsx`: Lenis smooth scrolling config with `LenisGsapBridge` synchronizing Lenis updates to `ScrollTrigger.update()`.
- **Reference Standard (Hero & Global Header)**:
  - `src/components/hero.tsx`: Light canvas (`bg-background` / `#e2e2e1`) with GSAP `SplitType` character reveal, centered grayscale portrait with 3D interleaving (IRSHAD behind portrait at z-0, AHAMED in front at z-20 with `mix-blend-difference`), parallax scroll scrubbing, and minimal typography.
  - `src/components/site-header.tsx`: Fixed header with dynamic `isOverDark` scroll listener (`window.scrollY > window.innerHeight * 0.75`), 1px hairline scroll progress bar, StarLogo, nav links, and mobile slideout sheet.
- **Downstream Sections**:
  - `src/components/about-section.tsx`: About/Intro section, statement grid, and "From the Workbench" active bring-up cards.
  - `src/components/projects-section.tsx`: Selected Work section, Embla carousel with Motion scaling/opacity interpolation, NumberFlow digit counter, 3D tilt cards, and archive index table.
  - `src/components/contact-section.tsx`: Contact section with headline, LinkedIn / GitHub pill buttons, and location indicator.
  - `src/components/site-footer.tsx`: Global footer with StarLogo, social links, and copyright text.
- **Orphaned / Unused Motion Components**:
  - `src/components/heading-reveal.tsx`: GSAP + SplitType character/word reveal component for headings. Currently has 0 imports in the codebase.
  - `src/components/word-highlight-text.tsx`: GSAP ScrollTrigger word spotlight component that softly blurs and dims inactive words while lighting up active words on scroll. Currently has 0 imports in the codebase.
  - `src/components/contribution-graph.tsx`: GitHub activity heat map using jogruber API. Removed in commit `f359501`, currently has 0 imports.
- **Data Layers**:
  - `src/data/profile.ts`: Contains `PROFILE`, `SKILL_GROUPS`, `RECOGNITION`, `BUILD_NOTES`, social links. Note: `SKILL_GROUPS` and `RECOGNITION` are currently unrendered anywhere in the UI.
  - `src/data/projects.ts`: Contains `FEATURED` and `INDEX_ROWS`.
- **Assets**:
  - `public/assets/projects/`: Contains real project media (`fluxboard.webp`, `sentai.jpg`, `brain-dots.jpg`) alongside mock SVG diagrams (`mock-pawtech.svg`, `mock-kroma.svg`, `mock-spatial.svg`, `anemone.svg`).
  - `public/assets/logo/`: Contains `ia-trace.svg`, `ia-trace-light.svg`, `ia-trace-white.svg`.

---

### 1.2 Verbatim Hardware and Schematic Motifs Observed

1. **`src/components/ia-mark.tsx`**:
   - Lines 1–4: `/** IA monogram — circuit-trace construction with via pads. Uses currentColor so it adapts to any context. */`
   - Lines 13–24: SVG element group `<g stroke="currentColor" strokeWidth="5.5">` with comment `{/* copper traces */}`.
   - Lines 25–32: SVG element group `<g className="via-pads" stroke="currentColor" strokeWidth="3">` with comment `{/* via pads + crossbar test point (glints on parent group-hover) */}` containing circles for PCB test points and via pads.
2. **`public/assets/logo/ia-trace.svg` (and `-light.svg`, `-white.svg`)**:
   - Line 2: `<!-- IA monogram — circuit-trace construction with via pads — Irshad Ahamed -->`
   - Line 3: `<!-- copper traces (stop short of pad rings so the donut holes read) -->`
   - Line 9: `<!-- via pads (donuts) + crossbar test point -->`
3. **`src/app/globals.css`**:
   - Lines 213–229:
     ```css
     /* Logo via-glint — vias pulse like current flowing when the brand is hovered */
     @keyframes via-glow {
       0%, 100% { opacity: 0.75; }
       50% { opacity: 1; }
     }
     .group:hover>.via-pads,
     .group:hover>* .via-pads {
       animation: via-glow 1.1s ease-in-out infinite;
     }
     ```
4. **`public/assets/projects/mock-kroma.svg`**:
   - Line 32: `<!-- Hardware Deck Chassis -->` with `<rect rx="20" fill="url(#metalPlate)" stroke-width="1.5"/>`
   - Line 35–39: `<!-- Screws on corners -->` with 4 corner screw circles (`<circle cx="125" cy="115" r="4" fill="#000" stroke="#444"/>`).
   - Line 41–48: `<!-- Oscilloscope Display Screen -->` with waveform trace line `<path d="..." stroke="url(#heatWave)" stroke-width="3"/>`.
   - Line 60–73: `<!-- Right control bank: Rotary Encoders -->` drawing circular potentiometer knobs with pointer lines.
   - Line 75–86: `<!-- Bottom tactile keys / pads -->` drawing hardware trigger keys.
5. **`public/assets/projects/anemone.svg`**:
   - Line 2: `<!-- Project Anemone — sonar/telemetry schematic (light monochrome) -->`
   - Lines 11–17: Sonar range rings with dashed concentric circles.
   - Lines 19–23: Radar sweeping beam arc.
   - Lines 40–51: Depth ticks (`-12m`, `-36m`, `-84m`).
   - Lines 52–56: Telemetry box (`FN-044 · GRID 12.9742`, `RSSI 87% · SWELL 1.4m`).

---

### 1.3 Verbatim Tool Command Results

- **`npm run lint`**:
  Command executed: `npm run lint`
  Exit code: `1`
  Output:
  ```text
  C:\Users\irsha\Music\Portfolio\src\components\hero.tsx
    285:109  error  Comments inside children section of tag should be placed inside braces  react/jsx-no-comment-textnodes

  C:\Users\irsha\Music\Portfolio\src\data\projects.ts
    3:10  warning  'SENTINELAI_SUBMISSION' is defined but never used  @typescript-eslint/no-unused-vars

  ✖ 2 problems (1 error, 1 warning)
  ```
- **`npm run build`**:
  Command executed: `npm run build`
  Exit code: `0`
  Output:
  ```text
  ▲ Next.js 16.4.3 (Turbopack)
  ✓ Compiled successfully in 1556ms
  ✓ Checked 0 TypeScript files in 0ms ...
  ✓ Generating static pages using 7 workers (6/6) in 3.8s
  Route (app)
  ┌ ○ /
  ├ ○ /_not-found
  ├ ○ /icon.svg
  └ ○ /opengraph-image
  ○  (Static)  prerendered as static content
  ```

---

### 1.4 Section-by-Section Analysis

#### A. Hero Section (Reference Gold Standard)
- **File**: `src/components/hero.tsx` (327 lines)
- **Palette**: Light canvas (`bg-background` `#e2e2e1`), high-contrast dark foreground (`#0a0a0a`).
- **Typography Scale**:
  - Split display name: `text-[clamp(4.5rem,11.5vw,13rem)]` desktop, `clamp(3.2rem,17vw,5.2rem)` mobile, `font-black uppercase leading-[0.88] tracking-[-0.04em]`.
  - Eyebrow tag: `text-[12px] font-semibold uppercase leading-[1.65] tracking-[0.16em]` + hairline divider `h-[1.5px] w-10 bg-foreground/70`.
  - Tech discipline tags: `font-tech text-[11.5px] uppercase leading-[1.8] tracking-[0.14em] text-foreground/75`.
  - Subhead: `text-[clamp(1.75rem,2.5vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.02em]`.
- **Motion & Kinetic Architecture**:
  - Initial load entrance timeline:
    - `SplitType` char split with `gsap.fromTo(chars, { yPercent: 118, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.03, ease: "power4.out" })`.
    - Portrait scales up and rises: `scale: 0.985 -> 1`, `y: 50 -> 0`, `duration: 1.3, ease: "expo.out"`.
    - Corner labels fade and slide in: `y: 16 -> 0`, `duration: 0.9, stagger: 0.08`.
  - Scroll-driven parallax:
    - `ScrollTrigger` scrub `0.6` over `#home` viewport.
    - IRSHAD moves `y: -80`, AHAMED moves `y: -120`.
    - Portrait translates `y: 60` and scales to `1.04`.
    - Taglines fade out `opacity: 0, y: -25`.
- **3D Depth Composition**:
  - Centered grayscale portrait (`grayscale contrast-[1.04]`).
  - Layer stack: `IRSHAD` (z-0) behind portrait (z-10), `AHAMED` (z-20) in front with `mix-blend-difference text-white`.

#### B. Page-Wide Transitions & Dark Canvas Wrapper
- **Files**: `src/app/page.tsx`, `src/app/globals.css`, `src/components/site-header.tsx`
- **Current State**:
  - `page.tsx` places Hero, then immediately opens `<div className="dark relative z-20 bg-[#0c0c0c] text-[#f4f4f4] transition-colors">`.
  - Background watermark spans (`IRSHAD`, `AHAMED`, `BUILDER`) sit at `text-white/[0.02]` text-[clamp(7rem,20vw,20rem)].
  - Boundary between Hero (light canvas `#e2e2e1`) and downstream wrapper (`#0c0c0c`) is a flat horizontal seam. As the user scrolls, the dark canvas abruptly rides up over the hero without a smooth curtain transition, gradient mask, or pinned threshold.
  - Header transition relies on a boolean `isOverDark` calculated from `window.scrollY > window.innerHeight * 0.75` which snaps color tokens (`text-white` vs `text-foreground`).
  - Section dividers are uniform `border-t border-white/[0.08]`.

#### C. About Section
- **File**: `src/components/about-section.tsx` (104 lines)
- **Current Content & Structure**:
  - Section marker: `<span className="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold">{"// Intro"}</span>`.
  - Headline: 8 cols on desktop: `text-[clamp(2.2rem,4.4vw,4.2rem)] font-extrabold leading-[1.18] tracking-[-0.03em] [text-wrap:balance]`:
    `I build where code meets circuits — connecting embedded systems, edge AI and Android.`
  - Bio copy: 4 cols on desktop: `text-[15px] leading-[1.8] text-white/65 [text-wrap:pretty]` + "See my Work" pill button + "Build notes" link.
  - "From the Workbench" (`BUILD_NOTES`):
    - 2 grid cards: `Galaxy A35 / Evolution X` and `Custom OpenDots`.
    - Card container: `rounded-3xl border border-white/[0.08] bg-[#141414] p-8 transition-all duration-300 hover:border-white/20`.
- **Gaps Against Hero Caliber**:
  - Motion is basic: Uses generic `<ScrollReveal>` (simple fade-in from `y: 36`). Does not utilize the dynamic `SplitType` entrance or word-by-word reveal that Hero exemplifies.
  - An entire bespoke component `src/components/word-highlight-text.tsx` was built with CSS classes `.wh-ready .wh-word` (blurred and dimmed to `var(--foreground) 38%` until scrolled into spotlight), but `AboutSection` does not call it.
  - Another component `src/components/heading-reveal.tsx` was built with `SplitType` chars/words rising on ScrollTrigger, but is completely unused.
  - Content density is truncated: After commits `dc0ab56` and `2ba7261` removed recognition and capabilities, the section feels lightweight. The verified data in `src/data/profile.ts` (`RECOGNITION`: 1st place Fluxboard.AI, 2nd place SentinelAI, 4th place GRASKILLS.AI; `SKILL_GROUPS`: Embedded & Robotics, Android & Linux, Edge AI) has zero presentation.
  - Card styling lacks editorial hierarchy: The workbench cards are uniform dark gray rectangles (`bg-[#141414]`), lacking typographic focal points (such as stroked index numerals or high-contrast tags).

#### D. Projects Section
- **File**: `src/components/projects-section.tsx` (342 lines)
- **Current Content & Structure**:
  - Header: `// Selected Work` in `#ff3b1f` + external link `github.com/StarDust-Git-Code ↗`.
  - Title & Controls: `Featured Projects.` + subtext + kinetic `NumberFlow` rolling counter (`01 / 03`) + arrow buttons (`ChevronLeft`, `ChevronRight`).
  - Carousel: Embla carousel with `motion.div` scale/opacity interpolation (`scale: selectedIndex === i ? 1 : 0.965`, `opacity: selectedIndex === i ? 1 : 0.45`), keyboard arrow listener.
  - Bento Card Content:
    - Left column: `( {project.year} )` year badge, status tag, project title, description, pill tags, "Explore Project" button.
    - Right column: `Tilt` 3D parallax tilt wrapper around media container.
  - Pagination: Motion-animated pill indicators (`width: 32` vs `8`, background `#ff3b1f` vs `rgba(255, 255, 255, 0.2)`).
  - Archive Index: 5 rows from `INDEX_ROWS` (`Vesper OS`, `Prism Matrix`, `AeroLink`, `Echo Shell`, `Atlas`), displayed as 12-col tabular rows with hover background highlight and external link arrow.
  - Footer CTA: "View all 60+ repositories on GitHub" pill button.
- **Gaps Against Hero Caliber & Editorial Minimalism**:
  - Media conflicts: Carousel cards currently display SVG illustrations (`mock-kroma.svg`, `mock-spatial.svg`, `mock-pawtech.svg`). In particular, `mock-kroma.svg` contains literal hardware screws, chassis seams, oscilloscope waveforms, and rotary encoders, conflicting directly with R1 ("strictly maintaining editorial minimalism without hardware or schematic motifs").
  - Real project assets: In `public/assets/projects/`, authentic assets exist for Irshad's actual flagship achievements: `fluxboard.webp` (MLH 1st place), `sentai.jpg` (SentinelAI), and `brain-dots.jpg` (Custom OpenDots). These could be featured with clean editorial photography / UI presentation.
  - Headings are static inside `<ScrollReveal>` instead of matching the SplitType kinetic entrance.
  - Archive table lacks high-end editorial indexing: rows do not display stroked editorial numerals (`01`, `02`, etc.) or year columns on desktop.

#### E. Contact Section
- **File**: `src/components/contact-section.tsx` (63 lines)
- **Current Content & Structure**:
  - Section label: `// Contact` in `#ff3b1f`.
  - Heading: `Let's build something distinctive.` with "distinctive" colored `#ff3b1f`.
  - Subhead: "Have an idea involving custom hardware, low-level Linux/Android, or offline edge AI? I'm always open to discussing new collaborations, bring-ups, and ventures."
  - Action buttons:
    - LinkedIn: "Connect on LinkedIn" (white pill with `FaLinkedinIn` and `ArrowUpRight`).
    - GitHub: "GitHub Profile" (bordered dark pill with `FaGithub`).
  - Location: `<MapPin className="size-3.5 text-[#ff3b1f]" /> Chennai, Tamil Nadu, India`.
- **Gaps Against Hero Caliber**:
  - Extremely sparse and static compared to Hero's rich kinetic presence.
  - Heading is plain text inside `<ScrollReveal>` without character split or kinetic reveal.
  - Missing direct editorial interaction: No email copy-to-clipboard button or direct contact trigger (even though header has "Get in touch" pointing to `#contact`).
  - No live availability or timezone indicator (e.g., live Chennai IST clock or pulsing availability badge), which is a signature element of high-end editorial developer portfolios.

---

## 2. Logic Chain

1. **Premise 1 (Requirement R1)**: The user explicitly requires elevating all downstream sections (About, Projects, Contact, and page-wide transitions) to match the bold, editorial minimalist aesthetic and caliber of the Hero section, strictly maintaining editorial minimalism without hardware or schematic motifs.
2. **Observation Links for R1**:
   - In `src/components/ia-mark.tsx`, lines 1–32 contain explicit copper circuit traces and PCB via pads.
   - In `public/assets/logo/ia-trace*.svg`, files contain literal circuit board copper traces and via donuts.
   - In `src/app/globals.css`, lines 213–229 define `@keyframes via-glow` and `.via-pads` hover effects for circuit traces.
   - In `public/assets/projects/mock-kroma.svg`, lines 35–86 draw corner screws, oscilloscope waveforms, rotary potentiometers, and tactile trigger keys.
   - In `public/assets/projects/anemone.svg`, lines 11–56 draw sonar radar sweeps and depth gauges.
3. **Inference 1 (Removal of Hardware/Schematic Motifs)**:
   - All visual elements mimicking printed circuit boards (traces, pads, vias), oscilloscope waveforms, chassis screws, and sonar schematics directly violate R1.
   - They must be removed, replaced with clean editorial typography, minimal monochrome UI previews, or genuine photography, and residual CSS keyframes pruned.
4. **Premise 2 (Requirement R2)**: Unify kinetic feel and scroll transitions across the downstream dark canvas so the full page delivers a fluid, cohesive visual rhythm matching the polish of the Hero.
5. **Observation Links for R2**:
   - Hero uses GSAP `SplitType` character reveal on entrance (`power4.out`, staggered `0.03s`), followed by scroll-scrubbed parallax (`y: -80`, `y: -120`, portrait `scale: 1.04`).
   - Downstream sections currently use a single rudimentary utility (`<ScrollReveal>`) which does a static `y: 36` fade.
   - The codebase already contains `src/components/heading-reveal.tsx` (SplitType GSAP character/word reveal) and `src/components/word-highlight-text.tsx` (scroll-driven word spotlight with depth blur), but neither is imported anywhere.
   - The seam between the light Hero canvas (`#e2e2e1`) and the dark downstream canvas (`#0c0c0c`) is a harsh abrupt cutoff without a kinetic transition.
6. **Inference 2 (Cohesive Kinetic Flow)**:
   - Activating `HeadingReveal` on major section headlines (`About`, `Featured Projects`, `Contact`) will immediately bring the Hero's signature SplitType character reveal rhythm to every section.
   - Integrating `WordHighlightText` into the About section statement will create an immersive editorial reading experience where text comes into focus on scroll.
   - Introducing an editorial canvas transition (such as a smooth threshold or pinned reveal) between the light Hero and dark canvas will resolve the abrupt visual seam.
7. **Premise 3 (Requirement R3 & Acceptance Criteria)**: Clean builds, zero lint errors, and responsive layouts across 375px, 768px, and 1280px+ viewports.
8. **Observation Links for R3**:
   - `npm run lint` failed with 1 error in `src/components/hero.tsx` (line 285 raw comment text `// AI · EMBEDDED · IOT` without braces) and 1 warning in `src/data/projects.ts` (unused import `SENTINELAI_SUBMISSION`).
   - `npm run build` currently passes cleanly in Turbopack.
   - Grid definitions across sections (`grid-cols-1 md:grid-cols-12` and `flex-[0_0_100%]`) provide a foundation for responsive stability, but need verification at 375px to ensure no horizontal overflow.
9. **Inference 3 (Technical Polish)**:
   - Fixing the JSX comment syntax in `hero.tsx` and removing unused imports will restore `npm run lint` to 0 errors / 0 warnings.
   - All responsive viewports will remain strictly bound with `overflow-hidden` and clamp-scaled typography.

---

## 3. Caveats

1. **Read-only Investigation**: In accordance with the Explorer archetype constraints, no modifications to source code files were made during this survey.
2. **Commit History Context**: Git log analysis revealed that `RECOGNITION` and `CAPABILITIES` were stripped in commits `dc0ab56` and `2ba7261`. The decision to re-integrate them in an elevated editorial format (e.g. minimalist typography list rather than cluttered card tables) should be vetted by the orchestrator.
3. **External Assets**: The image `public/assets/portrait.png` and projects `fluxboard.webp`, `sentai.jpg`, `brain-dots.jpg` exist locally in `public/assets/`, so no external network dependency is required to showcase real projects.
4. **No caveats** regarding buildability or tool execution.

---

## 4. Conclusion & Structured Inventory

### 4.1 Feature Inventory & Section Caliber Comparison Matrix

| Area | Current State | Hero Caliber Standard | Hardware / Schematic Conflicts | Elevation Priority |
| :--- | :--- | :--- | :--- | :--- |
| **Hero to Dark Seam** | Hard cutoff at `div.dark bg-[#0c0c0c]` | Fluid kinetic transition matching Lenis scroll | None | **High** |
| **About Section** | Static `<ScrollReveal>`, basic text statement, 2 workbench cards | SplitType heading reveal, scroll-driven word spotlight, rich editorial hierarchy | None (text mentions "circuits" but visually clean) | **High** |
| **About Recognition & Stack** | Completely unrendered (omitted from UI) | Elegant minimalist index table or editorial typographic list | None | **Medium** |
| **Projects Carousel** | Embla + Motion scaling, but uses mock SVGs (`mock-kroma.svg` has screws/oscilloscope) | Editorial card styling, authentic project imagery, refined typography | `mock-kroma.svg` (screws, waveforms, knobs), `mock-spatial.svg` (HUD reticles) | **High** |
| **Projects Archive** | 5-row table with simple text | Numbered editorial rows (`01`, `02`), tag pills, smooth hover interactions | None | **Medium** |
| **Contact Section** | Static text + 2 pill buttons + text location | SplitType headline, interactive email clipboard / direct contact, live timezone availability | None | **High** |
| **Residual Assets / Styles** | `ia-mark.tsx`, `ia-trace*.svg`, `.via-pads` CSS keyframes | Pure monochrome star logo (`StarLogo`), editorial typography | Multiple circuit trace / via pad motifs | **High** |
| **Build & Lint** | Lint fails on `hero.tsx:285` (raw comment) and `projects.ts` (unused var) | 0 lint errors, 0 warnings, clean Turbopack build | None | **Immediate** |

---

### 4.2 Downstream Upgrade Roadmap

#### Phase 1: Lint Resolution & Hardware Motif Pruning
- **Objective**: Achieve zero lint errors and purge all residual hardware/schematic artifacts.
- **Actions**:
  1. Fix `src/components/hero.tsx` line 285 by wrapping comment in curly braces: `{"// AI · EMBEDDED · IOT"}`.
  2. Remove unused import `SENTINELAI_SUBMISSION` in `src/data/projects.ts`.
  3. Prune `@keyframes via-glow` and `.via-pads` rules in `src/app/globals.css`.
  4. Ensure `ia-mark.tsx` and `public/assets/logo/ia-trace*.svg` are completely decoupled from active components in favor of `StarLogo`.

#### Phase 2: Page Transition & Hero-to-Dark Seam Unification
- **Objective**: Eliminate the abrupt horizontal canvas seam and establish a cohesive kinetic flow.
- **Actions**:
  1. Refine the transition between `<Hero />` and the dark downstream container in `src/app/page.tsx`.
  2. Apply a subtle gradient transition or layered scroll threshold so the off-white hero seamlessly yields to the deep `#0c0c0c` dark canvas.
  3. Ensure the floating typographic watermarks (`IRSHAD`, `AHAMED`, `BUILDER`) glide smoothly with scroll-driven parallax across the dark canvas.

#### Phase 3: About Section Editorial Elevation
- **Objective**: Match Hero's typography scale and interactive polish in About.
- **Actions**:
  1. Replace static headline in `AboutSection` with `HeadingReveal` or integrate `WordHighlightText` for the core statement (`I build where code meets software...`).
  2. Elevate the statement typography: increase leading, use clamp font sizing with `-0.03em` tracking, and balance word layout.
  3. Elevate "From the Workbench" (`BUILD_NOTES`) cards with stroked numeral indices (`01`, `02`), high-contrast status tags, and refined border hover micro-interactions.
  4. Integrate an editorial minimalist "Recognition & Milestones" showcase using verified data from `src/data/profile.ts` (`RECOGNITION`), formatted as a clean typographic index without schematic clutter.

#### Phase 4: Projects Section Refinement & Editorial Archive
- **Objective**: Elevate the featured project carousel and archive index to 10/10 editorial caliber.
- **Actions**:
  1. Replace hardware-schematic SVG illustrations (`mock-kroma.svg` with screws/oscilloscope) with authentic, refined project assets from `public/assets/projects/` (`fluxboard.webp`, `sentai.jpg`, `brain-dots.jpg`) or clean editorial UI mockups.
  2. Upgrade the carousel card typography: bold editorial headlines, clean tag badges, and smooth 3D tilt response.
  3. Apply `HeadingReveal` to the section header "Featured Projects".
  4. Upgrade the archive table: add stroked index numerals (`01`, `02`, `03`...), year indicators, and responsive column layouts for mobile and desktop.

#### Phase 5: Contact Section & Footer Elevation
- **Objective**: Transform the Contact section into an impactful editorial closing statement.
- **Actions**:
  1. Upgrade headline to `HeadingReveal` with SplitType character animation: "Let's build something distinctive."
  2. Add an interactive "Copy Email" button with toast notification (`sonner`) alongside LinkedIn and GitHub links.
  3. Add a live Chennai availability status badge (e.g. `AVAILABLE FOR Q1/Q2 BRING-UPS · CHENNAI (IST)` with pulsing green/heat dot).
  4. Refine spacing, typography, and responsive padding across desktop (1280px+), tablet (768px), and mobile (375px).

---

## 5. Verification Method

To independently verify all findings and validate future implementations:

1. **Lint Check**:
   ```bash
   npm run lint
   ```
   *Expected Current Output*: Fails with 1 error (`hero.tsx:285:109`) and 1 warning (`projects.ts:3:10`).
   *Expected Post-Fix Output*: Exits with code `0` and 0 errors/warnings.

2. **Build Check**:
   ```bash
   npm run build
   ```
   *Expected Output*: Next.js 16.4.3 Turbopack compiles all routes (`/`, `/_not-found`, `/icon.svg`, `/opengraph-image`) with code `0`.

3. **Hardware / Schematic Grep Audit**:
   ```powershell
   git grep -i "circuit" src/
   git grep -i "via-pads" src/
   git grep -i "schematic" src/
   ```
   *Expected Verification*: Confirms no decorative PCB traces, via pads, or oscilloscope graphics are rendered in the downstream UI.

4. **Responsive Layout Inspection**:
   - Mobile: 375px viewport (verify zero horizontal overflow, carousel touch-drag works, touch target sizes $\ge 44\text{px}$).
   - Tablet: 768px viewport (verify header collapses cleanly, 2-column grids align without text wrapping bugs).
   - Desktop: 1280px+ viewport (verify full-width editorial typographic impact, fluid parallax, and smooth Lenis scroll pacing).
