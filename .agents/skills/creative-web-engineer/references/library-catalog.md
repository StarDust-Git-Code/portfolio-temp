# 50+ Libraries Quick Reference Directory

This directory provides the exact import paths, purposes, and usage patterns for every creative library installed in this project.

---

### Group 1: Motion, Scroll & Kinetics
1. **`gsap`**
   - Import: `import gsap from "gsap"; import { ScrollTrigger } from "gsap/ScrollTrigger";`
   - Purpose: High-precision kinetic choreography, scrubbed scroll triggers, custom easing timelines.
2. **`split-type`**
   - Import: `import SplitType from "split-type";`
   - Purpose: DOM text splitting into chars, words, and lines for typography reveal animations.
3. **`motion` (`motion/react`)**
   - Import: `import { motion, AnimatePresence } from "motion/react";`
   - Purpose: React spring physics, gesture tracking (`whileHover`, `whileTap`), layout animations (`layoutId`).
4. **`@react-spring/web`**
   - Import: `import { useSpring, animated } from "@react-spring/web";`
   - Purpose: Physics-based, velocity-preserving interruptible springs.
5. **`@formkit/auto-animate`**
   - Import: `import autoAnimate from "@formkit/auto-animate";`
   - Purpose: Zero-boilerplate automatic animation of DOM lists when elements are added or removed.
6. **`lenis`**
   - Import: `import Lenis from "lenis";`
   - Purpose: Inertial smooth wheel and touch momentum scrolling.
7. **`tw-animate-css`**
   - Import: `@import "tw-animate-css";` in `globals.css`
   - Purpose: Ready-to-use CSS keyframe classes integrated directly into Tailwind.

---

### Group 2: 3D, WebGL & Canvas Shaders
8. **`three` & `@types/three`**
   - Import: `import * as THREE from "three";`
   - Purpose: Foundational 3D graphics engine, geometries, shaders, and lighting.
9. **`@react-three/fiber`**
   - Import: `import { Canvas, useFrame } from "@react-three/fiber";`
   - Purpose: Declarative React component wrapper for Three.js scene graphs.
10. **`@react-three/drei`**
    - Import: `import { Float, OrbitControls, Sparkles, ContactShadows, Text3D } from "@react-three/drei";`
    - Purpose: High-level staging helpers and camera abstractions.
11. **`ogl`**
    - Import: `import { Renderer, Camera, Transform, Program, Mesh } from "ogl";`
    - Purpose: Hyper-lightweight WebGL library (<10KB) for custom GPU shaders, audio visualizers, and interactive noise.
12. **`@rive-app/react-canvas`**
    - Import: `import { useRive, useStateMachineInput } from "@rive-app/react-canvas";`
    - Purpose: Vector animation runtime powered by interactive state machines.

---

### Group 3: Swiping, Spatial Tilt & Carousels
13. **`embla-carousel-react`**
    - Import: `import useEmblaCarousel from "embla-carousel-react";`
    - Purpose: Lightweight, physics-driven touch/drag carousel engine.
14. **`swiper`**
    - Import: `import { Swiper, SwiperSlide } from "swiper/react"; import "swiper/css";`
    - Purpose: Advanced 3D coverflow, card stacks, and multi-row carousels.
15. **`react-parallax-tilt`**
    - Import: `import Tilt from "react-parallax-tilt";`
    - Purpose: Smooth 3D perspective tilt reacting to mouse position with customizable glare.

---

### Group 4: Kinetic Counters & Typography Balancers
16. **`@number-flow/react`**
    - Import: `import NumberFlow from "@number-flow/react";`
    - Purpose: Animated odometer-style rolling transitions for digits and numeric telemetry.
17. **`react-countup`**
    - Import: `import CountUp from "react-countup";`
    - Purpose: Eased numeral counters triggered on scroll entry.
18. **`react-wrap-balancer`**
    - Import: `import Balancer from "react-wrap-balancer";`
    - Purpose: Eliminates single trailing words (orphans) on responsive headlines.
19. **`react-fast-marquee`**
    - Import: `import Marquee from "react-fast-marquee";`
    - Purpose: Seamless infinite scrolling horizontal text and logo streams.

---

### Group 5: Particles & Confetti
20. **`@tsparticles/react` & `@tsparticles/engine` & `@tsparticles/slim`**
    - Import: `import Particles, { initParticlesEngine } from "@tsparticles/react"; import { loadSlim } from "@tsparticles/slim";`
    - Purpose: Interactive interactive constellation nodes, space dust, and cursor-reactive particles.
21. **`canvas-confetti` & `@types/canvas-confetti`**
    - Import: `import confetti from "canvas-confetti";`
    - Purpose: Physics particle bursts for form submission and achievement triggers.

---

### Group 6: Overlays, Drawers & Lightboxes
22. **`vaul`**
    - Import: `import { Drawer } from "vaul";`
    - Purpose: Fluid iOS-style swipeable bottom drawer with background scaling.
23. **`cmdk`**
    - Import: `import { Command } from "cmdk";`
    - Purpose: Fast, composable Raycast-like command palette modal (`Cmd+K`).
24. **`yet-another-react-lightbox`**
    - Import: `import Lightbox from "yet-another-react-lightbox"; import "yet-another-react-lightbox/styles.css";`
    - Purpose: Mobile-touch enabled fullscreen image & video lightbox gallery.
25. **`@radix-ui/react-dialog`**
    - Import: `import * as Dialog from "@radix-ui/react-dialog";`
    - Purpose: Accessible modal dialog primitive with focus trapping.
26. **`@radix-ui/react-tooltip`**
    - Import: `import * as Tooltip from "@radix-ui/react-tooltip";`
    - Purpose: Lightweight, delay-tuned hover tooltips.
27. **`@radix-ui/react-navigation-menu`**
    - Import: `import * as NavigationMenu from "@radix-ui/react-navigation-menu";`
    - Purpose: Accessible top navigation bar with animated indicator and submenus.
28. **`@floating-ui/react`**
    - Import: `import { useFloating, autoUpdate, offset, flip, shift } from "@floating-ui/react";`
    - Purpose: Low-level anchoring and collision-aware positioning for tooltips and menus.

---

### Group 7: Notifications & Feedback
29. **`sonner`**
    - Import: `import { toast, Toaster } from "sonner";`
    - Purpose: Beautiful, stackable toast alert system with rich styling.
30. **`lucide-react`**
    - Import: `import { ArrowUpRight, Check, ... } from "lucide-react";`
    - Purpose: Clean, modern vector icon set.
31. **`react-icons`**
    - Import: `import { FaGithub, FaLinkedinIn, ... } from "react-icons/fa6";`
    - Purpose: Comprehensive multi-brand social and tech icon collection.

---

### Group 8: Performance, Image Placeholders & State
32. **`zustand`**
    - Import: `import { create } from "zustand";`
    - Purpose: Minimal, reactive global state store (e.g., active drawer, audio player, theme).
33. **`usehooks-ts`**
    - Import: `import { useMediaQuery, useDebounceValue, useIntersectionObserver } from "usehooks-ts";`
    - Purpose: Standardized TypeScript hooks for browser events and lifecycle management.
34. **`@uidotdev/usehooks`**
    - Import: `import { useWindowSize, useLockBodyScroll } from "@uidotdev/usehooks";`
    - Purpose: Lightweight custom UI utility hooks.
35. **`react-intersection-observer`**
    - Import: `import { useInView } from "react-intersection-observer";`
    - Purpose: Viewport entry detection for lazy mounting and entrance animations.
36. **`react-device-detect`**
    - Import: `import { isMobile, isTablet, isDesktop } from "react-device-detect";`
    - Purpose: Conditional rendering based on client hardware capabilities.
37. **`sharp`**
    - Purpose: Node.js image processing engine for Next.js build-time image optimization.
38. **`plaiceholder`**
    - Purpose: Generate low-quality image placeholder blur hashes for zero-layout-shift image loads.
39. **`next-themes`**
    - Import: `import { ThemeProvider, useTheme } from "next-themes";`
    - Purpose: Dark/light mode theme provider with system preference synchronization.
40. **`clsx` & `tailwind-merge` & `class-variance-authority`**
    - Import: `import { cn } from "@/lib/utils";`
    - Purpose: Conflict-free dynamic Tailwind class merging and component variant definitions.
