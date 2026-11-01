"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

interface DakshThreadProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function DakshThread({ containerRef }: DakshThreadProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[clamp(1rem,2.8vw,3.5rem)] top-0 bottom-0 z-10 hidden md:block select-none -translate-x-1/2"
    >
      {/* Background guide rail */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 bg-[#ff3b12]/15" />

      {/* 2.2px Active Vermilion Continuous Thread */}
      <svg
        className="absolute left-1/2 top-0 bottom-0 h-full w-2 -translate-x-1/2 overflow-visible"
        viewBox="0 0 2 1000"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="1000"
          stroke="#ff3b12"
          strokeWidth="2.2"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}

