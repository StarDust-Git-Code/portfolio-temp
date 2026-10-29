"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

/**
 * SplitType heading whose chars/words rise in as the heading scrolls into view,
 * driven by GSAP ScrollTrigger. No-JS users see the plain text.
 */
export function HeadingReveal({
  text,
  type = "chars",
  className,
  headingClassName,
  splitClassName,
  extra,
}: {
  text: string;
  type?: "chars" | "words";
  className?: string;
  headingClassName?: string;
  splitClassName?: string;
  extra?: React.ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    const splitEl = el?.querySelector<HTMLElement>("[data-split]");
    if (!el || !splitEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    let instance: SplitType | null = null;
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled) return;
      instance = new SplitType(splitEl, { types: type });
      const parts = splitEl.querySelectorAll(type === "chars" ? ".char" : ".word");

      const ctx = gsap.context(() => {
        gsap.from(parts, {
          yPercent: 120,
          opacity: 0,
          duration: 0.9,
          stagger: type === "chars" ? 0.035 : 0.06,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
      cleanupCtx = () => ctx.revert();
    });

    let cleanupCtx: (() => void) | null = null;

    return () => {
      cancelled = true;
      cleanupCtx?.();
      instance?.revert();
    };
  }, [text, type]);

  return (
    <div className={className}>
      <h2
        ref={ref}
        aria-label={text}
        className={headingClassName}
      >
        <span
          aria-hidden="true"
          data-split
          className={`split-parent ${splitClassName ?? ""}`.trim()}
        >
          {text}
        </span>
        {extra}
      </h2>
    </div>
  );
}
