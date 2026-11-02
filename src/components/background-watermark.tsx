"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function BackgroundWatermark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const irshadRef = useRef<HTMLSpanElement>(null);
  const ahamedRef = useRef<HTMLSpanElement>(null);
  const builderRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax scroll for IRSHAD: smoothly translates as user scrolls through the dark canvas
      if (irshadRef.current) {
        gsap.fromTo(
          irshadRef.current,
          { y: -40 },
          {
            y: 180,
            ease: "none",
            scrollTrigger: {
              trigger: irshadRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // Parallax for AHAMED
      if (ahamedRef.current) {
        gsap.fromTo(
          ahamedRef.current,
          { y: -60 },
          {
            y: 140,
            ease: "none",
            scrollTrigger: {
              trigger: ahamedRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // Parallax for BUILDER
      if (builderRef.current) {
        gsap.fromTo(
          builderRef.current,
          { y: -30 },
          {
            y: 160,
            ease: "none",
            scrollTrigger: {
              trigger: builderRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      <span
        ref={irshadRef}
        className="absolute top-[4%] -left-[6vw] font-black uppercase tracking-[-0.05em] text-white/[0.035] leading-none whitespace-nowrap text-[clamp(7rem,20vw,20rem)] will-change-transform blur-[1px]"
      >
        IRSHAD
      </span>
      <span
        ref={ahamedRef}
        className="absolute top-[34%] -right-[8vw] font-black uppercase tracking-[-0.05em] text-white/[0.035] leading-none whitespace-nowrap text-[clamp(7rem,20vw,20rem)] will-change-transform blur-[1px]"
      >
        AHAMED
      </span>
      <span
        ref={builderRef}
        className="absolute top-[68%] -left-[6vw] font-black uppercase tracking-[-0.05em] text-white/[0.035] leading-none whitespace-nowrap text-[clamp(7rem,20vw,20rem)] will-change-transform blur-[1px]"
      >
        BUILDER
      </span>
    </div>
  );
}

