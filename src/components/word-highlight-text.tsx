"use client";

import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll-driven word spotlight: words light up in sequence as the block
 * scrolls through the viewport. Non-active words sit dimmer, slightly
 * smaller and softly blurred. Degraded (no-JS / reduced-motion) = plain text.
 */
export function WordHighlightText({ text }: { text: string }) {
  const rootRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const words = root.querySelectorAll<HTMLElement>(".wh-word");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => w.classList.add("is-active"));
      return;
    }

    root.classList.add("wh-ready");
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: "top 80%",
        end: "center 40%",
        scrub: 0.4,
        onUpdate: (self) => {
          // progress 0..1 → which words are lit
          const lit = Math.round(self.progress * words.length);
          words.forEach((w, i) => {
            w.classList.toggle("is-active", i < lit);
          });
        },
      });
    });

    return () => {
      ctx.revert();
      root.classList.remove("wh-ready");
    };
  }, [text]);

  return (
    <span ref={rootRef}>
      {text.split(" ").map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="wh-word" aria-hidden="true">
            {word}
          </span>
          {" "}
        </Fragment>
      ))}
    </span>
  );
}
