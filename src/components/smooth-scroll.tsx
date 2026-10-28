"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

/** Keeps GSAP ScrollTrigger in sync with Lenis' smoothed scrolling */
function LenisGsapBridge() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const update = () => ScrollTrigger.update();
    lenis.on("scroll", update);
    ScrollTrigger.refresh();
    return () => {
      lenis.off("scroll", update);
    };
  }, [lenis]);
  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
