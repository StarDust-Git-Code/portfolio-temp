# Hero Section & Global Design System Survey Report

## 1. Observation

Direct observations from codebase inspection across configurations, components, styles, data schemas, and assets:

### 1.1 Architecture & Layout Boundaries
- **Hero Component**: Located at `src/components/hero.tsx` (327 lines).
  - Root element: `<section ref={rootRef} id="home" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-background" aria-label="Introduction">` (`src/components/hero.tsx:120-125`).
  - Viewport confinement: Locked to `100svh` with a minimum height floor of `620px`. Overflow is strictly hidden (`overflow-hidden`).
  - Lateral margins: Desktop uses `px-[4.5vw]`, `left-[4.5vw]`, and `right-[4.5vw]`; mobile uses `px-[5vw]` (`src/components/hero.tsx:172, 190, 206, 223, 238, 257, 283, 300`).
- **Canvas Two-Tone Transition**:
  - Hero sits in root light canvas: `bg-background` where `--background: #e2e2e1` (warm editorial stone/cream) and `--foreground: #0a0a0a` (deep ink black) (`src/app/globals.css:63-65`).
  - Downstream container in `src/app/page.tsx:11-32`:
    ```tsx
    <div className="dark relative z-20 bg-[#0c0c0c] text-[#f4f4f4] transition-colors">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <span className="absolute top-[4%] -left-[6vw] font-black uppercase tracking-[-0.05em] text-white/[0.02] leading-none whitespace-nowrap text-[clamp(7rem,20vw,20rem)]">IRSHAD</span>
        <span className="absolute top-[34%] -right-[8vw] font-black uppercase tracking-[-0.05em] text-white/[0.02] leading-none whitespace-nowrap text-[clamp(7rem,20vw,20rem)]">AHAMED</span>
        <span className="absolute top-[68%] -left-[6vw] font-black uppercase tracking-[-0.05em] text-white/[0.02] leading-none whitespace-nowrap text-[clamp(7rem,20vw,20rem)]">BUILDER</span>
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </div>
    ```

### 1.2 Depth Stacking & Typography Layering (The 3D Poster Matrix)
- The Hero creates spatial 3D depth purely through z-index layering and CSS blend modes:
  - **Back Plane (`z-0`)**: Display text `IRSHAD` (`src/components/hero.tsx:171-199`).
    - Desktop: `absolute left-[4.5vw] top-[34%] z-0 whitespace-nowrap`
    - Class: `text-[clamp(4.5rem,11.5vw,13rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-foreground select-none`
  - **Mid Plane (`z-10`)**: Engineer portrait image container (`src/components/hero.tsx:132-167`).
    - Class: `pointer-events-none absolute inset-x-0 top-0 bottom-0 z-10 flex justify-center overflow-hidden`
    - Desktop inner wrapper: `relative hidden md:block h-[116vh] aspect-[900/1227] top-[8.5vh] max-h-none`
    - Image element: `/assets/portrait.png`, styled with `object-contain object-top grayscale contrast-[1.04]`
  - **Front Plane (`z-20`)**: Display text `AHAMED` (`src/components/hero.tsx:204-232`).
    - Desktop: `absolute right-[4.5vw] top-[50%] z-20 mix-blend-difference text-right whitespace-nowrap`
    - Class: `text-[clamp(4.5rem,11.5vw,13rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-white select-none`
    - Blend behavior: `mix-blend-difference` turns white text into high-contrast luminous white over the dark portrait hoodie/neck, and inverts to deep black (`#0a0a0a`) over the light canvas (`#e2e2e1`), aligning with `IRSHAD`.
  - **Peripheral Anchors (`z-30`)**:
    - Top-left eyebrow (`src/components/hero.tsx:235-251`): `absolute left-[4.5vw] top-[18%] z-30 hidden md:block`
      - Text: `max-w-[15rem] text-[12px] font-semibold uppercase leading-[1.65] tracking-[0.16em] text-foreground`
      - Hairline: `mt-4 block h-[1.5px] w-10 bg-foreground/70`
    - Bottom-left social rail (`src/components/hero.tsx:254-277`): `absolute bottom-[6%] left-[4.5vw] z-30 hidden md:block`
      - Items: GitHub, LinkedIn, Twitter, Instagram. Class: `flex items-center gap-3 text-[14px] text-foreground/80 transition-colors hover:text-foreground`
      - Micro-interaction: `size-[15px] transition-transform duration-200 group-hover:scale-110`
    - Bottom-right discipline + headline (`src/components/hero.tsx:280-295`): `absolute bottom-[6%] right-[4.5vw] z-30 hidden text-left md:block`
      - Discipline: `font-tech text-[11.5px] uppercase leading-[1.8] tracking-[0.14em] text-foreground/75` ("// AI · EMBEDDED · IOT / ROBOTICS · DIGITAL PRODUCTS")
      - Headline: `mt-3.5 font-sans text-[clamp(1.75rem,2.5vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-foreground` ("Tech Innovator / & Builder")
  - **Header Layer (`z-50`) & Ambient Blur (`z-40`)**:
    - Ambient top fade (`src/components/site-header.tsx:146-157`): `fixed inset-x-0 top-0 z-40 h-32 backdrop-blur-md` with dynamic background (`isOverDark ? "bg-[#0c0c0c]/70" : "bg-transparent"`), masked by `linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 40%, transparent 100%)`.
    - Hairline top scroll progress (`z-[60]`, `src/components/site-header.tsx:29-60`): 2px height, `scale-x-0 bg-foreground/70 origin-left`.

### 1.3 Typography System & Font Pairing Tokens
Inspected in `src/app/globals.css:7-57, 97-101` and `src/app/layout.tsx:2-6`:
- **Sans Display / Heading**:
  - Definition: `var(--font-sans)` -> `"Inter Variable", "Helvetica Neue", Helvetica, Arial, sans-serif`
  - Font features: `font-feature-settings: "cv11", "ss01"; font-variation-settings: "opsz" 32; text-rendering: optimizeLegibility;` (`src/app/globals.css:151-154`).
  - Tracking tokens: `--tracking-hero: -0.045em;`
- **Body**:
  - Definition: `var(--font-body)` -> `"Manrope Variable", "Inter Variable", sans-serif`
- **Technical / Monospace**:
  - Definition: `var(--font-tech)` -> `"Space Grotesk Variable", ui-monospace, monospace`
  - Tracking tokens: `--tracking-label: 0.14em;`
- **Signature**:
  - Definition: `var(--font-signature)` -> `"Plus Jakarta Sans Variable", "Inter Variable", sans-serif`

### 1.4 Kinetic Motion Choreography & Transitions
- **Page Entrance Orchestration** (`src/components/hero.tsx:33-90`):
  - Font sync: `document.fonts.ready.then(...)` guarantees font metrics before SplitType runs.
  - Character Splitting: `new SplitType(el, { types: "chars" })` inside `.split-parent` (which sets `overflow: hidden; display: inline-block; line-height: 1; white-space: nowrap !important;` in `globals.css:181-186`).
  - Initial GSAP state:
    - `gsap.set(chars, { yPercent: 118, opacity: 0 })`
    - `gsap.set(portrait, { opacity: 0, y: 50, scale: 0.985 })`
    - `gsap.set(corners, { opacity: 0, y: 16 })`
  - Sequence timeline:
    ```ts
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.to(chars, { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.03 })
      .to(portrait, { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: "expo.out" }, "-=0.6")
      .to(corners, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=1.0");
    ```
- **Scroll-Out Parallax Choreography** (`src/components/hero.tsx:93-117`):
  - Driven by `ScrollTrigger` with `scrub: 0.6`:
    - Back layer (`IRSHAD`): `.to("[data-name-layer='irshad']", { y: -80, ease: "none" }, 0)`
    - Front layer (`AHAMED`): `.to("[data-name-layer='ahamed']", { y: -120, ease: "none" }, 0)` (travels 1.5x faster, separating in 3D space)
    - Portrait: `.to("[data-portrait-img]", { y: 60, scale: 1.04, ease: "none" }, 0)` (counter-parallax descend + zoom)
    - Corner anchors: `.to("[data-hero-fade]", { opacity: 0, y: -25, ease: "none" }, 0.15)`
- **Inertial Smooth Scrolling**:
  - Configured in `src/components/smooth-scroll.tsx:25-39` via `ReactLenis` (`lerp: 0.09, duration: 1.1, anchors: { offset: -80 }, smoothWheel: true`).
  - Synced to GSAP ScrollTrigger via `LenisGsapBridge` (`src/components/smooth-scroll.tsx:11-23`).

### 1.5 Palette & Border Treatment
- Light Canvas (Hero):
  - `--background`: `#e2e2e1`
  - `--foreground`: `#0a0a0a`
  - `--heat`: `#fa2b1d`
- Dark Canvas (Downstream `.dark`):
  - `--background`: `#0c0c0c`
  - `--foreground`: `#f4f4f4`
  - `--card`: `#141414`
  - `--border`: `rgba(255, 255, 255, 0.08)` (ultra-subtle 8% white hairline)
  - `--heat`: `#ff3b1f` (saturated neon heat red-orange)
- Downstream background watermark:
  - Giant ghost typography (`text-white/[0.02]`, `7rem` to `20rem`, `font-black uppercase tracking-[-0.05em]`) floating in the background (`src/app/page.tsx:17-25`).

### 1.6 Existing Unused Components & Downstream Caliber Comparison
- **`src/components/heading-reveal.tsx` (84 lines)**:
  - Standalone reusable component that wraps `SplitType` ("chars" or "words") with `gsap.from(parts, { yPercent: 120, opacity: 0, duration: 0.9, stagger: 0.035, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } })`.
  - **Finding**: It is NOT used in `about-section.tsx`, `projects-section.tsx`, or `contact-section.tsx`!
- **`src/components/word-highlight-text.tsx` (64 lines)**:
  - Scroll-driven word spotlight with `.wh-ready .wh-word` CSS transition (`blur(2.5px)`, `scale(0.92)` to `blur(0)`, `scale(1)` in `globals.css:233-250`).
  - **Finding**: It is NOT used in `about-section.tsx` or anywhere else!
- **`src/components/scroll-reveal.tsx` (45 lines)**:
  - Downstream sections currently rely solely on this generic block fade (`gsap.from(el, { opacity: 0, y: 36, duration: 1, ease: "power3.out" })`), which lacks the character-staggered kinetic polish of the Hero.
- **Hardware/Schematic Motifs**:
  - `src/components/ia-mark.tsx` contains circuit-trace construction (`copper traces`, `via pads`, `via-glow`).
  - In contrast, the Hero, Header, and Footer use `StarLogo` (`src/components/star-logo.tsx`), a pure 8-point geometric star diamond mark that strictly preserves Swiss editorial minimalism.
- **Data Completeness**:
  - `src/data/profile.ts:21-77` has `SKILL_GROUPS` (Embedded & robotics, Android & Linux, AI & computer vision) and `RECOGNITION` (1st place Fluxboard.AI, 2nd place SentinelAI, 4th place GRASKILLS.AI). None of these are currently displayed in `about-section.tsx`.
  - `src/data/projects.ts:30-67` has 3 featured projects pointing to mock SVG illustrations (`mock-pawtech.svg`, etc.), whereas `public/assets/projects/` contains real project media (`fluxboard.webp`, `brain-dots.jpg`, `sentai.jpg`, `lemihandle.png`).

### 1.7 Current Baseline Lint & Build Status (Verbatim Tool Output)
1. **`npm run build`**:
   - Exited with code `0`.
   - Turbopack compiled successfully in 2.1s; TypeScript validation finished cleanly in 7.6s; all 6 static pages prerendered without errors.

2. **`npm run lint`**:
   - Exited with code `1`:
   ```
   > irshad-portfolio@0.1.0 lint
   > eslint

   C:\Users\irsha\Music\Portfolio\src\components\hero.tsx
     285:109  error  Comments inside children section of tag should be placed inside braces  react/jsx-no-comment-textnodes

   C:\Users\irsha\Music\Portfolio\src\data\projects.ts
     3:10  warning  'SENTINELAI_SUBMISSION' is defined but never used  @typescript-eslint/no-unused-vars

   ✖ 2 problems (1 error, 1 warning)
   ```
   - **Error in `src/components/hero.tsx:286`**: `// AI · EMBEDDED · IOT` is inside a `<p>` tag text node without curly braces. Fix: wrap with `{"// AI · EMBEDDED · IOT"}`.
   - **Warning in `src/data/projects.ts:3`**: `import { SENTINELAI_SUBMISSION } from "@/data/profile";` is unused. Fix: remove or utilize in projects data.

---

## 2. Logic Chain

1. **Premise**: The user requires elevating all downstream sections (About, Projects, Contact, page-wide transitions) to match the "10/10 editorial minimalist caliber" of the Hero section, strictly maintaining editorial minimalism without hardware or schematic motifs (R1, R2, R3 in `ORIGINAL_REQUEST.md`).
2. **Analysis of Hero Section Excellence**:
   - The Hero's 10/10 caliber is driven by five interlocking disciplines:
     a. **Spatial Typography Sandwich**: Huge, bold Swiss sans (`IRSHAD` / `AHAMED` at `11.5vw`) split across z-index planes (`z-0` behind portrait, `z-20` in front with `mix-blend-difference`).
     b. **Kinetic Masked Entrance**: Characters rise up out of invisible line-height masks (`.split-parent`) with `SplitType`, staggered at `0.03s`, timed with `power4.out` and `expo.out` curves.
     c. **Scroll-Driven Parallax Depth**: The front name layer travels faster (`y: -120`) than the back layer (`y: -80`), while the portrait counter-descends (`y: 60, scale: 1.04`), delivering physical 3D depth without canvas webGL clutter.
     d. **Restrained Monochrome + Heat Accent**: 95% monochromatic discipline (`#e2e2e1` light canvas transitioning into `#0c0c0c` obsidian canvas, with hairlines `border-white/[0.08]`), energized solely by single saturated vermilion punctuation (`--heat: #ff3b1f`).
     e. **Typographic Pairings**: Bold Swiss Display (`Inter Variable`, `tracking-[-0.04em]`, `leading-[0.88]`), paired with technical uppercase metadata (`Space Grotesk Variable`, `tracking-[0.14em]` to `0.2em`, prefixed with `// `), and legible body text (`Manrope Variable`, `leading-[1.75]`).
3. **Identification of Downstream Caliber Deficits**:
   - *Motion disparity*: Downstream headings use monolithic container fading (`ScrollReveal`, `y: 36`), failing to replicate the kinetic character-split reveals of the Hero.
   - *Unused editorial assets*: Pre-built components designed for editorial excellence (`HeadingReveal`, `WordHighlightText`, and `.text-outline` display numbers) were authored but left unmounted.
   - *Content omission*: The engineer's competitive hackathon wins (`RECOGNITION`) and core capabilities (`SKILL_GROUPS`) in `profile.ts` are missing from `AboutSection`.
   - *Media realism*: `ProjectsSection` displays generic mockup SVGs instead of real build assets present in `public/assets/projects/`.
   - *Contact section depth*: `ContactSection` is minimal (63 lines), missing editorial contact mechanisms like an interactive copy email action with toast feedback, time-zone clock, or structured layout.
4. **Resolution Path**:
   - Incorporate `HeadingReveal` and `WordHighlightText` across About, Projects, and Contact.
   - Integrate `RECOGNITION` and `SKILL_GROUPS` into `AboutSection` using clean editorial cards, outline numbers (`.text-outline`), and hairline borders.
   - Upgrade `ProjectsSection` media to real screenshots/renders and refine the Embla carousel + archive table.
   - Enhance `ContactSection` with rich editorial typography, interactive copy-to-clipboard with Sonner toast, and time-zone/location metadata.
   - Maintain strict avoidance of hardware/schematic clichés (no copper traces, via pads, or oscilloscope lines; strictly geometric StarLogo and Swiss typography).
   - Resolve existing lint error in `src/components/hero.tsx:286` (`{"// AI · EMBEDDED · IOT"}`) and unused import in `src/data/projects.ts:3`.

---

## 3. Caveats

1. **Lint Status**: Baseline `npm run lint` identified 1 error in `src/components/hero.tsx:286` (unbraced `//` textnode) and 1 warning in `src/data/projects.ts:3` (unused import). These must be resolved as part of the downstream polish to satisfy acceptance criterion R3.
2. **Responsive Breakpoints**: Layouts must be verified at 375px (mobile), 768px (tablet), and 1280px+ (desktop) to ensure text-clamps (`clamp()`) and whitespace (`px-[4.5vw]`) do not cause horizontal overflow.
3. **Motion Redundancy**: When using GSAP with Lenis, all scroll triggers must register with GSAP context (`gsap.context()`) and clean up on component unmount to prevent memory leaks during hot module reloading.

---

## 4. Conclusion

The Hero section achieves a 10/10 editorial minimalist caliber through:
- **Exact typography scale**: Inter 900 display typography clamped between `4.5rem` and `13rem` with `-0.04em` tracking and `0.88` line-height, complemented by Space Grotesk `11.5px` uppercase metadata (`tracking-[0.14em]`) and Manrope `14px-15px` body.
- **Spatial typography layering**: Z-index interleaving (`z-0` -> `z-10` portrait -> `z-20` `mix-blend-difference` text) creating optical 3D depth without 3D libraries or hardware motifs.
- **Kinetic choreography**: `SplitType` character rise from overflow masks with `power4.out`, coupled with differential scroll parallax (`y: -80` vs `y: -120` vs counter-image `y: 60`).
- **Monochrome & heat discipline**: Pure `#e2e2e1` light canvas transitioning cleanly to `#0c0c0c` obsidian canvas, framed by `border-white/[0.08]` hairlines and highlighted by `#ff3b1f` vermilion accents.

To elevate downstream sections to this caliber, subsequent agents must:
1. Replace monolithic reveals with `HeadingReveal` (SplitType character/word reveals) and `WordHighlightText`.
2. Expand `AboutSection` with `SKILL_GROUPS` and `RECOGNITION` using `.text-outline` display metrics and `border-white/[0.08]` bento surfaces.
3. Polish `ProjectsSection` carousel and archive rows with real assets and editorial micro-interactions.
4. Elevate `ContactSection` with interactive clipboard actions, time-zone badge, and bold Swiss typography.
5. Strictly adhere to editorial minimalism (no circuit traces, via pads, or schematic icons).

---

## 5. Verification Method

To independently verify the observations and findings in this survey:
1. **Component Verification**:
   - Inspect `src/components/hero.tsx` (lines 120-295) for the z-index stacking (`z-0`, `z-10`, `z-20`), `mix-blend-difference`, and coordinate system (`left-[4.5vw]`, `top-[34%]`, `top-[50%]`).
   - Inspect `src/components/hero.tsx` (lines 33-117) for `SplitType`, `document.fonts.ready`, `yPercent: 118`, and differential scroll parallax (`y: -80`, `y: -120`).
   - Inspect `src/app/globals.css` (lines 53-57, 63-136, 180-251) for `--text-hero`, `--tracking-hero`, light/dark color definitions, `.split-parent`, `.text-outline`, and `.wh-ready .wh-word`.
   - Inspect `src/components/heading-reveal.tsx` and `src/components/word-highlight-text.tsx` to verify that their implementations exist and match the Hero motion language.
   - Inspect `src/data/profile.ts` to confirm `RECOGNITION` and `SKILL_GROUPS` are defined.
2. **Build & Lint Verification**:
   - Run `npm run build` in PowerShell terminal to confirm clean compilation.
   - Run `npm run lint` to verify zero ESLint errors across components.
3. **Invalidation Conditions**:
   - If the Hero section is refactored away from the `IRSHAD`/`AHAMED` difference blend sandwich.
   - If hardware/circuit board graphics are introduced into downstream components.
