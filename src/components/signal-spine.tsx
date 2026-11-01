"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface SignalSpineProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const NODES = [
  { id: "origin", top: "5%" },
  { id: "about", top: "15%" },
  { id: "workbench", top: "35%" },
  { id: "work", top: "55%" },
  { id: "archive", top: "78%" },
  { id: "contact", top: "95%" },
];

export function SignalSpine({ containerRef }: SignalSpineProps) {
  const spineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={spineRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-[2.2vw] top-0 bottom-0 z-10 hidden w-6 lg:block select-none -translate-x-1/2"
    >
      {/* Background guide trace */}
      <div className="absolute left-1/2 top-10 bottom-12 w-[1.5px] -translate-x-1/2 bg-white/[0.08]" />

      {/* Active animated trace line */}
      <svg
        className="absolute left-1/2 top-10 bottom-12 h-[calc(100%-5.5rem)] w-2 -translate-x-1/2 overflow-visible"
        viewBox="0 0 2 1000"
        preserveAspectRatio="none"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="1000"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="1000"
          stroke="#ff3b1f"
          strokeWidth="2.2"
          style={{ pathLength }}
        />
      </svg>

      {/* Via pads */}
      {NODES.map((node) => (
        <div
          key={node.id}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ top: node.top }}
        >
          <div className="flex size-3 items-center justify-center rounded-full border border-white/25 bg-[#0c0c0c]">
            <div className="size-1 rounded-full bg-[#ff3b1f] shadow-[0_0_6px_#ff3b1f]" />
          </div>
        </div>
      ))}
    </div>
  );
}
