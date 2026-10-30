---
name: creative-web-engineer
description: >-
  Use this skill whenever designing, building, animating, or reviewing modern landing pages,
  portfolios, or high-impact web applications. Leverages the comprehensive 50+ UI, animation,
  3D WebGL, physics, carousel, typography, drawer, particle, and interaction libraries.
---

# Creative Web Engineer (50+ Libraries Suite)

This skill provides the architectural playbook, code recipes, and library selection matrices for engineering world-class, 10/10 landing pages and web experiences using the 50+ cutting-edge libraries installed in the stack.

---

## 1. Architectural Stack & Library Categorization

The 50+ libraries are organized into 8 synchronized functional layers:

```
+---------------------------------------------------------------------------------------+
| LAYER 1: SMOOTH SCROLL & KINETICS (Lenis + GSAP ScrollTrigger + Motion)               |
+---------------------------------------------------------------------------------------+
| LAYER 2: 3D & SHADERS (@react-three/fiber + drei + three + ogl + @rive-app)          |
+---------------------------------------------------------------------------------------+
| LAYER 3: TOUCH & SWIPING (Embla Carousel + Swiper + React Parallax Tilt)              |
+---------------------------------------------------------------------------------------+
| LAYER 4: KINETIC TYPOGRAPHY (SplitType + NumberFlow + CountUp + Wrap Balancer)         |
+---------------------------------------------------------------------------------------+
| LAYER 5: PARTICLES & CELEBRATION (@tsparticles/react + Canvas Confetti)               |
+---------------------------------------------------------------------------------------+
| LAYER 6: OVERLAYS & SHEETS (Vaul Drawer + Radix UI + Floating UI + CMDK + Lightbox)   |
+---------------------------------------------------------------------------------------+
| LAYER 7: SENSORY FEEDBACK & TOAST (Sonner + Lucide / React Icons)                     |
+---------------------------------------------------------------------------------------+
| LAYER 8: HOOKS & REACTIVE STATE (Zustand + usehooks-ts + @uidotdev + Device Detect)   |
+---------------------------------------------------------------------------------------+
```

---

## 2. Library Selection Matrix & When to Use What

| Goal | Primary Library | Secondary / Complement | Key Code Pattern |
| :--- | :--- | :--- | :--- |
| **Smooth Inertial Scroll** | `lenis` | `gsap` ScrollTrigger | Synchronize Lenis raf with GSAP ticker |
| **Complex Scroll Timelines** | `gsap` + `SplitType` | `ScrollTrigger` | Scrubbed parallax, letter stagger entrances |
| **Component Spring Motion** | `motion` (`motion/react`) | `@react-spring/web` | `whileHover`, `whileTap`, layout spring physics |
| **List Auto Transitions** | `@formkit/auto-animate` | `motion` | Single `ref={parent}` for automatic DOM additions |
| **Swipeable Bento Carousel** | `embla-carousel-react` | `react-parallax-tilt` | Touch drag track with 3D cursor tilt card |
| **3D Mesh / Interactive Canvas** | `@react-three/fiber` | `@react-three/drei` | `<Canvas>` + `<Float>` + `<OrbitControls>` |
| **Lightweight WebGL Shaders**| `ogl` | Custom GLSL | High-performance particle canvas with < 10KB footprint |
| **Interactive State Vector** | `@rive-app/react-canvas` | - | State-machine driven animated badges/icons |
| **Rolling Number Counters** | `@number-flow/react` | `react-countup` | Dynamic sliding odometer transitions |
| **Particle Mesh & Stardust** | `@tsparticles/react` | `@tsparticles/slim` | Floating telemetry nodes with cursor repulsion |
| **Victory / Milestone FX** | `canvas-confetti` | `sonner` | Crisp celebratory particle burst on submit |
| **Command Palette (Cmd+K)** | `cmdk` | `@radix-ui/react-dialog` | Raycast-style instant keyboard search modal |
| **Mobile Draggable Bottom Sheet** | `vaul` | Radix Dialog | iOS-like drawer with momentum drag-to-dismiss |
| **Fullscreen Media Gallery** | `yet-another-react-lightbox`| Next Image | Zoomable lightbox with thumbnail rail |
| **Ticker / Infinite Reel** | `react-fast-marquee` | Tailwind | Non-stop partner/tech stack smooth scroll |
| **Typographic Headline Polish**| `react-wrap-balancer` | SplitType | Prevents ugly line orphans in responsive text |
| **Global UI State Store** | `zustand` | React Context | Ultra-lean stores for modals, audio, active slide |

---

## 3. High-Performance Integration Recipes

### Recipe A: The Lenis + GSAP ScrollTrigger Bridge
Always bridge Lenis momentum scrolling with GSAP ScrollTrigger to prevent jitter:

```tsx
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);
}
```

### Recipe B: Swipeable 3D Tilt Project Card
Combines `embla-carousel-react`, `@number-flow/react`, `react-parallax-tilt`, and `motion`:

```tsx
"use client";
import useEmblaCarousel from "embla-carousel-react";
import Tilt from "react-parallax-tilt";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function ProjectShowcase({ projects }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="flex items-center gap-2 font-mono text-sm text-white/60 mb-4">
        <span>PROJECT //</span>
        <NumberFlow value={index + 1} />
        <span>/ {projects.length}</span>
      </div>
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-6">
          {projects.map((p, i) => (
            <div key={p.id} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_80%] pl-6">
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.12} className="rounded-3xl border border-white/10 bg-[#141414] p-8">
                <motion.div animate={{ scale: index === i ? 1 : 0.98, opacity: index === i ? 1 : 0.6 }}>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <p className="text-white/65 mt-2">{p.desc}</p>
                </motion.div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Recipe C: Dynamic Island / iOS Bottom Sheet Drawer (Vaul)
```tsx
"use client";
import { Drawer } from "vaul";

export function ProjectDrawer({ trigger, title, children }) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
        <Drawer.Content className="fixed bottom-0 inset-x-0 z-50 rounded-t-[32px] bg-[#141414] border-t border-white/10 p-6 max-h-[85vh] overflow-y-auto">
          <div className="mx-auto w-12 h-1.5 rounded-full bg-white/20 mb-6" />
          <Drawer.Title className="text-xl font-bold text-white">{title}</Drawer.Title>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
```

---

## 4. Performance & Engineering Commandments

1. **Client-Component Isolation**: Keep WebGL, GSAP, and Framer Motion inside targeted leaf `"use client"` components so Server Components stream instantly.
2. **Dynamic Imports for Heavy Shaders**: Always lazy-load `@react-three/fiber`, `three`, and `@rive-app` with `next/dynamic({ ssr: false })` to keep First Contentful Paint (FCP) under 0.8s.
3. **Prefers-Reduced-Motion**: Always respect accessibility preferences via `window.matchMedia('(prefers-reduced-motion: reduce)')`.
4. **Mobile Fallback**: Suppress intense 3D parallax tilt (`react-parallax-tilt`) on touch devices using `isMobile` from `react-device-detect` to save battery and touch lag.
5. **No Layout Shifts**: Pair `react-wrap-balancer` on display typography with explicit aspect-ratio containers.

