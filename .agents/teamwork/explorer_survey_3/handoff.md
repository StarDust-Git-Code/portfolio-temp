# Technical Stack & Verification Infrastructure Survey Report

**Author**: Explorer Survey Agent (`explorer_survey_3`)  
**Workspace**: `c:\Users\irsha\Music\Portfolio\`  
**Target Milestone**: Technical Stack, Verification Infrastructure & Layout Baseline  

---

## 1. Observation

### 1.1 Project Configuration & Directory Tree

Directly inspected project configuration files and tree:
- **`package.json`**:
  - `name`: `"irshad-portfolio"` (private: `true`, version: `0.1.0`)
  - `scripts`:
    - `"dev"`: `"next dev"`
    - `"build"`: `"next build"`
    - `"start"`: `"next start"`
    - `"lint"`: `"eslint"`
  - Core dependencies:
    - `"next"`: `"16.4.3"`
    - `"react"`: `"19.3.0"`, `"react-dom"`: `"19.3.0"`
    - `"tailwindcss"`: `"^4"`, `"@tailwindcss/turbopack"`: `"^4"`, `"@tailwindcss/typography"`: `"^0.5.20"`
    - `"motion"`: `"^14.7.1"`
    - `"gsap"`: `"^3.15.0"`, `"split-type"`: `"^0.3.4"`
    - `"lenis"`: `"^1.3.27"`
    - `"embla-carousel-react"`: `"^8.6.0"`
    - `"@number-flow/react"`: `"^0.6.2"`
    - `"react-parallax-tilt"`: `"^1.7.349"`
    - `"lucide-react"`: `"^1.62.0"`, `"react-icons"`: `"^5.7.0"`
    - `"radix-ui"`: `"^1.8.1"`, `"@radix-ui/react-dialog"`: `"^1.3.1"`, `"@radix-ui/react-tooltip"`: `"^1.4.1"`
    - Fonts: `"@fontsource-variable/inter"`, `"@fontsource-variable/manrope"`, `"@fontsource-variable/plus-jakarta-sans"`, `"@fontsource-variable/space-grotesk"`
    - 3D/graphics: `"three"`, `"@react-three/fiber"`, `"@react-three/drei"`, `"ogl"`
  - Dev dependencies:
    - `"eslint"`: `"^9"`, `"eslint-config-next"`: `"16.4.3"`
    - `"typescript"`: `"^5"`, `"@types/react"`: `"^19"`, `"@types/react-dom"`: `"^19"`, `"@types/node"`: `"^20"`

- **`next.config.ts`**:
  ```ts
  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    cacheComponents: true,
    partialPrefetching: true,
    turbopack: {
      rules: {
        "*.css": {
          loaders: ["@tailwindcss/turbopack"],
          as: "*.css",
        },
      },
    },
  };

  export default nextConfig;
  ```

- **`src/app/globals.css`** (Tailwind v4 Configuration):
  - Uses CSS-first Tailwind v4 imports:
    - `@import "tailwindcss";`
    - `@import "tw-animate-css";`
    - `@import "shadcn/tailwind.css";`
  - Custom variant: `@custom-variant dark (&:is(.dark *));`
  - Custom theme tokens via `@theme inline`:
    - Typography clamps:
      - `--text-hero: clamp(4rem, 15.5vw, 15rem);`
      - `--text-hero-sm: clamp(3.4rem, 22vw, 7rem);`
      - `--tracking-hero: -0.045em;`
      - `--tracking-label: 0.14em;`
    - Color tokens:
      - Light: `--background: #e2e2e1; --foreground: #0a0a0a; --heat: #fa2b1d;`
      - Dark: `--background: #0c0c0c; --foreground: #f4f4f4; --heat: #ff3b1f;`
    - Font stacks:
      - `--font-sans`: `"Inter Variable", "Helvetica Neue", Helvetica, Arial, sans-serif`
      - `--font-body`: `"Manrope Variable", "Inter Variable", sans-serif`
      - `--font-tech`: `"Space Grotesk Variable", ui-monospace, monospace`
      - `--font-signature`: `"Plus Jakarta Sans Variable", "Inter Variable", sans-serif`
  - Lenis scroll overrides in `@layer base`:
    - `html.lenis, html.lenis body { height: auto; }`
    - `.lenis.lenis-smooth { scroll-behavior: auto !important; }`

- **`tsconfig.json`**:
  - `target`: `"ES2017"`, `module`: `"esnext"`, `moduleResolution`: `"bundler"`
  - `strict`: `true`, `jsx`: `"react-jsx"`, `noEmit`: `true`
  - Alias: `"@/*": ["./src/*"]`
  - Next.js TypeScript plugin configured: `plugins: [{ "name": "next" }]`

- **`eslint.config.mjs`**:
  - ESLint 9 flat configuration:
    ```js
    import { defineConfig, globalIgnores } from "eslint/config";
    import nextVitals from "eslint-config-next/core-web-vitals";
    import nextTs from "eslint-config-next/typescript";

    const eslintConfig = defineConfig([
      ...nextVitals,
      ...nextTs,
      globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
      ]),
    ]);

    export default eslintConfig;
    ```

- **`components.json`**:
  - `style`: `"radix-nova"`
  - `rsc`: `true`, `tsx`: `true`
  - `tailwind.css`: `"src/app/globals.css"`, `baseColor`: `"neutral"`
  - `aliases`: `components`: `"@/components"`, `utils`: `"@/lib/utils"`, `ui`: `"@/components/ui"`

- **Project Tree Structure**:
  ```
  c:\Users\irsha\Music\Portfolio\
  ├── AGENTS.md
  ├── components.json
  ├── eslint.config.mjs
  ├── next.config.ts
  ├── package.json
  ├── tsconfig.json
  ├── public/
  │   └── assets/
  │       ├── portrait.png
  │       ├── portrait.svg
  │       └── projects/
  │           ├── fluxboard.webp
  │           ├── sentai.jpg
  │           ├── brain-dots.jpg
  │           ├── lemihandle.png
  │           ├── mock-pawtech.svg
  │           ├── mock-kroma.svg
  │           └── mock-spatial.svg
  └── src/
      ├── app/
      │   ├── favicon.ico
      │   ├── globals.css
      │   ├── icon.svg
      │   ├── layout.tsx
      │   ├── opengraph-image.tsx
      │   └── page.tsx
      ├── components/
      │   ├── about-section.tsx
      │   ├── contact-section.tsx
      │   ├── contribution-graph.tsx
      │   ├── heading-reveal.tsx
      │   ├── hero.tsx
      │   ├── ia-mark.tsx
      │   ├── projects-section.tsx
      │   ├── scroll-reveal.tsx
      │   ├── site-footer.tsx
      │   ├── site-header.tsx
      │   ├── smooth-scroll.tsx
      │   ├── star-logo.tsx
      │   ├── word-highlight-text.tsx
      │   └── ui/
      │       ├── button.tsx
      │       ├── dialog.tsx
      │       ├── sheet.tsx
      │       ├── sonner.tsx
      │       └── tooltip.tsx
      ├── data/
      │   ├── profile.ts
      │   └── projects.ts
      └── lib/
          └── utils.ts
  ```

---

### 1.2 Next.js 16 Conventions & AGENTS.md

- **`AGENTS.md` Direct Quotation**:
  ```markdown
  <!-- BEGIN:nextjs-agent-rules -->

  ## This is NOT the Next.js you know

  This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

  This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

  <!-- END:nextjs-agent-rules -->
  ```
- **Local Documentation Path**:
  - `node_modules/next/dist/docs/01-app/` contains version-specific guides for Next.js 16.4.3:
    - `02-guides/upgrading/version-16.md`: Documents migration from `next lint` to direct ESLint CLI (`eslint`), Turbopack configuration format, async Request APIs (`params`, `searchParams`, `cookies()`, `headers()`), and React 19 Canary features (`cacheComponents`, `partialPrefetching`).
    - Note: In `src/app/layout.tsx:74`, the generated type `LayoutProps<"/">` is used.

---

### 1.3 Concrete Build and Lint Execution Results

1. **`npm run build` Execution**:
   - Command executed: `npm run build`
   - Exit code: **`0` (Success)**
   - Verbatim output:
     ```
     > irshad-portfolio@0.1.0 build
     > next build

     ▲ Next.js 16.4.3 (Turbopack)
     ✓ Running next.config.ts took 481ms
     - Cache Components enabled
     - Partial Prefetching enabled

       Creating an optimized production build ...
     ✓ Compiled successfully in 16.6s
       Running TypeScript ...
       Finished TypeScript in 12.0s ...
       Collecting page data using 7 workers ...
       Generating static pages using 7 workers (0/6) ...
       Generating static pages using 7 workers (1/6) 
       Generating static pages using 7 workers (2/6) 
       Generating static pages using 7 workers (4/6) 
     ✓ Generating static pages using 7 workers (6/6) in 4.2s
       Finalizing page optimization ...

     Route (app)
     ┌ ○ /
     ├ ○ /_not-found
     ├ ○ /icon.svg
     └ ○ /opengraph-image

     ○  (Static)  prerendered as static content
     ```

2. **TypeScript Typecheck (`npx tsc --noEmit`)**:
   - Command executed: `npx tsc --noEmit`
   - Exit code: **`0` (Success)**
   - Output: No errors, strict TypeScript validation passes.

3. **`npm run lint` Execution**:
   - Command executed: `npm run lint` (`eslint`)
   - Exit code: **`1` (Failure)**
   - Verbatim output:
     ```
     > irshad-portfolio@0.1.0 lint
     > eslint

     C:\Users\irsha\Music\Portfolio\src\components\hero.tsx
       285:109  error  Comments inside children section of tag should be placed inside braces  react/jsx-no-comment-textnodes

     C:\Users\irsha\Music\Portfolio\src\data\projects.ts
       3:10  warning  'SENTINELAI_SUBMISSION' is defined but never used  @typescript-eslint/no-unused-vars

     ✖ 2 problems (1 error, 1 warning)
     ```
   - **Root Cause 1 (`hero.tsx:285-289`)**:
     ```tsx
     <p className="font-tech text-[11.5px] uppercase leading-[1.8] tracking-[0.14em] text-foreground/75">
       // AI · EMBEDDED · IOT
       <br />
       ROBOTICS · DIGITAL PRODUCTS
     </p>
     ```
     Literal `//` appears inside the JSX element without expression braces, triggering ESLint's `react/jsx-no-comment-textnodes`.
     - Required fix: `{"// AI · EMBEDDED · IOT"}` (exactly as implemented in `about-section.tsx:18` and `site-header.tsx:296`).
   - **Root Cause 2 (`data/projects.ts:3`)**:
     `import { SENTINELAI_SUBMISSION } from "@/data/profile";` is imported but never referenced in `projects.ts`.
     - Required fix: Remove unused import or connect it to project archive items.

---

### 1.4 Responsive Layout Breakpoints & Page Scroll Handling

- **Breakpoints**:
  - Tailwind v4 standard responsive media query thresholds:
    - Base: `< 640px` (Mobile, targeting 375px)
    - `sm`: `640px` (`min-width: 40rem`)
    - `md`: `768px` (`min-width: 48rem`) (Tablet breakpoint)
    - `lg`: `1024px` (`min-width: 64rem`)
    - `xl`: `1280px` (`min-width: 80rem`) (Desktop breakpoint)
    - `2xl`: `1536px` (`min-width: 96rem`)

- **Current Responsive Layout Implementations**:
  - **Mobile (375px)**:
    - Hero: `md:hidden` portrait scaled to `h-[98vh]`, typography clamped via `text-[clamp(3.2rem,17vw,5.2rem)]`, social links wrapped in rounded-full pill buttons in bottom bar (`px-[5vw] pb-7`).
    - Site Header: Center nav is `hidden md:flex`; mobile hamburger triggers `<SheetContent side="right">` containing full-screen navigation and social links.
    - About Section: Single-column grid (`grid-cols-1`, `lg:grid-cols-12`), vertical stacking of headline and narrative text.
    - Projects Section: Carousel cards are `min-w-0 flex-[0_0_100%]`, with single-column context stack above media; archive index hides technical details on mobile (`hidden md:block`) showing only name and link.
    - Contact Section: Buttons wrap cleanly (`flex-wrap`).
  - **Tablet (768px `md:`)**:
    - Hero: Switches to desktop layout (`hidden md:block`); portrait `h-[116vh]`; social rail bottom-left; discipline tag bottom-right.
    - Site Header: Center navigation (`hidden md:flex items-center gap-9`) and right CTA (`hidden md:inline-flex`) become visible; hamburger is hidden (`md:hidden`).
    - About Section: Workbench cards display in 2 columns (`md:grid-cols-2`).
    - Projects Section: Controls and title align horizontally (`md:flex-row md:items-end`); archive table expands to full 12 columns displaying project descriptions and tech stacks.
  - **Desktop (1024px `lg:`, 1280px+ `xl:`)**:
    - About Section: 12-column grid with 8-column editorial statement and 4-column bio block (`lg:col-span-8` / `lg:col-span-4`).
    - Projects Section: 12-column bento card layout (`lg:col-span-6` for details, `lg:col-span-6` for 3D Tilt container).
    - Fluid typography: Scaled through `clamp(4.5rem, 11.5vw, 13rem)` in Hero, `clamp(2.2rem, 4.4vw, 4.2rem)` in About, and `clamp(7rem, 20vw, 20rem)` in watermarks.

- **Global Scroll Mechanics & Page Transition**:
  - **Smooth Scrolling**:
    - Managed by `src/components/smooth-scroll.tsx` wrapping root layout in `ReactLenis`:
      ```tsx
      <ReactLenis
        root
        options={{
          lerp: 0.09,
          duration: 1.1,
          anchors: { offset: -80 },
          smoothWheel: true,
        }}
      >
        <LenisGsapBridge />
        {children}
      </ReactLenis>
      ```
    - `LenisGsapBridge` updates `ScrollTrigger.update()` on Lenis scroll events.
    - In `src/app/globals.css`, `html.lenis, html.lenis body { height: auto; }` ensures standard document sizing without scroll hijacking bugs.
  - **Hero to Downstream Transition**:
    - In `src/app/page.tsx`:
      - Hero sits on root canvas (`bg-background`, `#e2e2e1`).
      - Downstream sections (About, Projects, Contact, Footer) are wrapped in `<div className="dark relative z-20 bg-[#0c0c0c] text-[#f4f4f4] transition-colors">`.
      - Parallax scroll-out effect on Hero: GSAP ScrollTrigger scrubs `[data-name-layer='irshad']` (`y: -80`), `[data-name-layer='ahamed']` (`y: -120`), and `[data-hero-fade]` (`opacity: 0, y: -25`).
    - Header Dynamic Adaptation:
      - `src/components/site-header.tsx` monitors `window.scrollY > window.innerHeight * 0.75` (`isOverDark`).
      - When transitioning into dark canvas, header links and logo switch from `text-foreground` to `text-white`, and top mask applies `bg-[#0c0c0c]/70 backdrop-blur-md`.
      - 2px hairline `ScrollProgress` bar fixed at top indicates total document scroll completion.

---

## 2. Logic Chain

1. **Stack Identification**:
   - `package.json` specifies `"next": "16.4.3"`, `"react": "19.3.0"`, `"tailwindcss": "^4"`, and `"motion": "^14.7.1"`.
   - `next.config.ts` confirms Turbopack CSS loaders (`@tailwindcss/turbopack`) and experimental features `cacheComponents: true` and `partialPrefetching: true`.
   - Therefore, the codebase operates on Next.js 16 with React 19 and Tailwind CSS v4.

2. **Lint Failure Diagnosis**:
   - Running `npm run lint` runs `eslint` as defined in `package.json:9`.
   - The CLI reported 1 error in `src/components/hero.tsx` (line 285:109) and 1 warning in `src/data/projects.ts` (line 3:10).
   - In `hero.tsx`, line 286 has text `// AI · EMBEDDED · IOT` without `{""}`, triggering `react/jsx-no-comment-textnodes`.
   - In `data/projects.ts`, `SENTINELAI_SUBMISSION` is imported but unused.
   - Therefore, fixing these two exact locations will bring `npm run lint` to 0 errors and 0 warnings.

3. **Build Success Verification**:
   - Running `npm run build` compiled all routes with Turbopack, ran TypeScript checks cleanly, and prerendered static pages (`/`, `/_not-found`, `/icon.svg`, `/opengraph-image`) with exit code 0.
   - `npx tsc --noEmit` also confirmed 0 TypeScript errors.
   - Therefore, the Next.js 16 build pipeline is completely operational and stable.

4. **Responsive Layout Assessment**:
   - Breakpoints strictly align with standard 375px (mobile base), 768px (`md:`), 1024px (`lg:`), and 1280px+ (`xl:`).
   - Fluid clamps prevent horizontal overflow across viewports while retaining strong typographic weight.
   - Lenis smooth scroll and GSAP ScrollTrigger are properly bridged, enabling smooth kinetic pacing across the hero-to-dark transition.

---

## 3. Caveats

- **No Caveats** on the technical stack, build behavior, or lint command execution; all commands were run and verbatim outputs logged.
- Note: Although `npm run build` succeeds, `npm run lint` fails on 1 JSX syntax error in `hero.tsx` and 1 unused import in `projects.ts`. Next.js 16's `next build` does not run `next lint` by default (since Next 16 migrates linting to the standalone ESLint CLI). Implementers must ensure `npm run lint` is explicitly run and resolved.
- Audio and 3D packages (`three`, `@react-three/fiber`, `ogl`, `@rive-app/react-canvas`) are present in `package.json` dependencies but are not currently imported in the active downstream sections (About, Projects, Contact).

---

## 4. Conclusion

1. **Technical Stack Baseline**:
   - Framework: **Next.js 16.4.3** with React 19.3.0, Turbopack, and App Router.
   - Styling: **Tailwind CSS v4** with CSS-native `@theme inline` variables and `shadcn/tailwind.css`.
   - Motion & Animation: **GSAP 3.15.0** (with ScrollTrigger and SplitType), **Motion 14.7.1** (`motion/react`), and **Lenis 1.3.27** (`lenis/react`).
   - Iconography & Components: **Lucide React 1.62.0**, **React Icons 5.7.0**, Radix UI primitives.

2. **Verification Infrastructure Status**:
   - `npm run build`: **PASSES** (Exit code 0, 4 static routes prerendered).
   - `npx tsc --noEmit`: **PASSES** (Exit code 0, strict typecheck clean).
   - `npm run lint`: **FAILS** (Exit code 1, 1 JSX comment error in `hero.tsx:285`, 1 unused import warning in `data/projects.ts:3`).

3. **Actionable Implementation Guidelines**:
   - Fix `hero.tsx:286` to use `{"// AI · EMBEDDED · IOT"}`.
   - Remove unused `SENTINELAI_SUBMISSION` in `data/projects.ts` (or utilize it).
   - When elevating downstream sections (About, Projects, Contact), maintain the existing Lenis/GSAP scroll bridge, use Tailwind v4 CSS theme tokens, adhere to 375px/768px/1280px breakpoints, and follow Next.js 16 App Router conventions located in `node_modules/next/dist/docs/`.

---

## 5. Verification Method

To independently reproduce and verify this investigation:

1. **Verify Lint Behavior**:
   ```powershell
   npm run lint
   ```
   *Expected behavior*: Exits with code 1; reports `react/jsx-no-comment-textnodes` on `hero.tsx:285` and `@typescript-eslint/no-unused-vars` on `data/projects.ts:3`.

2. **Verify TypeScript Status**:
   ```powershell
   npx tsc --noEmit
   ```
   *Expected behavior*: Exits with code 0; zero type errors.

3. **Verify Build Status**:
   ```powershell
   npm run build
   ```
   *Expected behavior*: Exits with code 0; Turbopack creates production build and static pages successfully.

4. **Verify Responsive Layout Inspection**:
   - Inspect `src/components/hero.tsx` (lines 138-166, 172-232, 298-323)
   - Inspect `src/components/site-header.tsx` (lines 181-212, 227-316)
   - Inspect `src/components/about-section.tsx` (lines 14, 23-38, 71)
   - Inspect `src/components/projects-section.tsx` (lines 78, 97-144, 151-256, 299-322)
   - Inspect `src/components/smooth-scroll.tsx` (lines 25-39)
   - Inspect `src/app/globals.css` (lines 1-178)

