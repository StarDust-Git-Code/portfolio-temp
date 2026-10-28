"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiteHeader } from "@/components/site-header";
import { GITHUB_PROFILE, LINKEDIN_PROFILE, PROFILE } from "@/data/profile";

const SOCIALS = [
  { label: "GitHub", href: GITHUB_PROFILE, Icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_PROFILE, Icon: FaLinkedinIn },
] as const;

function NameWord({
  word,
  align,
  blend = false,
}: {
  word: string;
  align: "left" | "right";
  /** White text + difference blend: inverts over the dark portrait automatically */
  blend?: boolean;
}) {
  return (
    <span
      data-split
      aria-hidden="true"
      className={`split-parent block text-[length:var(--text-hero)] font-extrabold whitespace-nowrap ${
        blend ? "text-white" : "text-foreground"
      }`}
      style={{
        letterSpacing: "var(--tracking-hero)",
        textAlign: align,
      }}
    >
      {word}
    </span>
  );
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let instances: SplitType[] = [];
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled) return;

      const splitEls = root.querySelectorAll<HTMLElement>("[data-split]");
      instances = Array.from(splitEls).map(
        (el) => new SplitType(el, { types: "chars" })
      );
      const chars = root.querySelectorAll(".char");
      const portrait = root.querySelector("[data-portrait]");
      const corners = root.querySelectorAll("[data-reveal]");

      // initial states (only when JS + fonts are ready — no-JS stays visible)
      gsap.set(chars, { yPercent: 118, opacity: 0 });
      gsap.set(portrait, { opacity: 0, y: 60, scale: 0.985 });
      gsap.set(corners, { opacity: 0, y: 18 });

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onInterrupt: () => tl.kill(),
      });

      tl.to(chars, {
        yPercent: 0,
        opacity: 1,
        duration: 1.05,
        stagger: 0.03,
      }).to(
        portrait,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "expo.out",
        },
        "-=0.6"
      );

      tl.to(
        corners,
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
        "-=1.1"
      );
    });

    return () => {
      cancelled = true;
      instances.forEach((i) => i.revert());
    };
  }, []);

  /* Scroll-out parallax — targets wrappers/img (entrance anims target chars/portrait div) */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        })
        .to("[data-name-layer='irshad']", { y: -90, ease: "none" }, 0)
        .to("[data-name-layer='ahamed']", { y: -140, ease: "none" }, 0)
        .to("[data-portrait-img]", { y: 70, scale: 1.05, ease: "none" }, 0)
        .to("[data-hero-fade]", { opacity: 0, y: -30, ease: "none" }, 0.15);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      aria-label="Introduction"
    >
      <SiteHeader />

      <h1 className="sr-only">{PROFILE.title}</h1>

      {/* ================= PORTRAIT — z-10 (behind AHAMED, in front of IRSHAD) */}
      <div className="absolute inset-0 z-10 flex justify-center" data-portrait>
        {/* desktop portrait */}
        <div
          className="relative h-full hidden md:block"
          style={{ transform: "translateX(7vw)" }}
          aria-hidden="true"
        >
          <Image
            src="/assets/portrait.png"
            alt=""
            fill
            priority
            draggable={false}
            data-portrait-img
            className="!w-auto max-w-none object-contain object-bottom grayscale"
            sizes="(min-width: 768px) 50vw, 0vw"
          />
        </div>
        {/* mobile portrait */}
        <div
          className="relative h-[62%] w-full self-end md:hidden"
          aria-hidden="true"
        >
          <Image
            src="/assets/portrait.png"
            alt=""
            fill
            draggable={false}
            data-portrait-img
            className="!w-auto object-contain object-bottom grayscale"
            sizes="80vw"
          />
        </div>
      </div>

      {/* ================= IRSHAD — z-0, BEHIND the portrait */}
      <div
        className="absolute inset-x-0 top-[38%] z-0 md:top-[36%]"
        data-name-layer="irshad"
      >
        <div className="overflow-hidden px-[4.5vw]">
          <NameWord word="IRSHAD" align="left" />
        </div>
      </div>

      {/* ================= AHAMED — z-20, IN FRONT of the portrait.
          White glyphs + difference blend → black over the page, white over the photo. */}
      <div
        data-name-layer="ahamed"
        className="pointer-events-none absolute inset-x-0 top-[50%] z-20 text-right mix-blend-difference md:top-[47%]"
      >
        <div className="overflow-hidden px-[2vw]">
          <NameWord word="AHAMED" align="right" blend />
        </div>
      </div>

      {/* ================= Eyebrow tagline — top-left (desktop only) */}
      <div
        data-reveal
        data-hero-fade
        className="absolute left-[4.5vw] top-[17%] z-30 hidden md:block"
      >
        <p className="max-w-[15rem] text-[13px] font-medium uppercase leading-[1.75] tracking-[0.18em] text-foreground/90">
          Tech innovator
          <br />
          building for a
          <br />
          better tomorrow
        </p>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-12 bg-foreground/70"
        />
      </div>

      {/* ================= Mobile bottom bar — shown only on mobile, z-30 */}
      <div
        data-reveal
        className="absolute bottom-0 inset-x-0 z-30 flex md:hidden items-end justify-between px-[5vw] pb-8"
      >
        {/* Social icons */}
        <ul className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-foreground/20 bg-background/60 text-foreground/75 transition-all hover:border-foreground/50 hover:text-foreground"
              >
                <Icon className="size-[14px]" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        {/* Discipline tags */}
        <p className="font-tech text-[10px] uppercase leading-[1.9] tracking-[0.14em] text-foreground/60 text-right">
          Edge AI · Embedded
          <br />
          Android · Linux
        </p>
      </div>

      {/* ================= Social rail — bottom-left (desktop) */}
      <div
        data-reveal
        data-hero-fade
        className="absolute bottom-[8%] left-[4.5vw] z-30 hidden md:block"
      >
        <ul className="flex flex-col gap-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-[14px] text-foreground/75 transition-colors hover:text-foreground"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-foreground/15 bg-background/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-foreground/60">
                  <Icon className="size-[15px]" aria-hidden="true" />
                </span>
                <span className="link-underline">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= Discipline + signature — bottom-right (desktop) */}
      <div
        data-reveal
        data-hero-fade
        className="absolute bottom-[8%] right-[4.5vw] z-30 hidden text-right md:block"
      >
        <p className="font-tech text-[12.5px] uppercase leading-[1.9] tracking-[0.16em] text-foreground/80">
          <span className="font-body text-foreground/60">{"//"}</span> EDGE AI ·
          EMBEDDED · IOT
          <br />
          <span className="font-body text-foreground/60">{"//"}</span> ANDROID ·
          LINUX · ROBOTICS
        </p>
        <p className="mt-5 font-signature text-[clamp(1.5rem,2.4vw,2.1rem)] font-medium leading-[1.25] text-foreground">
          Tech Innovator
          <br />
          &amp; Builder
        </p>
        <p className="mt-5 flex items-center justify-end gap-2 text-[13px] text-foreground/60">
          Currently building —
          <span className="font-medium tracking-[0.08em] uppercase text-foreground/90">
            STARBASE
          </span>
        </p>
      </div>

      {/* ================= Scroll cue */}
      <div
        data-reveal
        data-hero-fade
        className="absolute bottom-[3.2%] left-1/2 z-30 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        <span className="block h-9 w-px overflow-hidden bg-foreground/20">
          <span className="block h-3 w-px bg-foreground animate-[scrollcue_1.8s_ease-in-out_infinite]" />
        </span>
      </div>
      <style>{`
        @keyframes scrollcue {
          0% { transform: translateY(-100%); }
          60%, 100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
