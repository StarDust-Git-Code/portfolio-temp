"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { SiteHeader } from "@/components/site-header";
import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TWITTER_PROFILE,
  INSTAGRAM_PROFILE,
  PROFILE,
} from "@/data/profile";

const SOCIALS = [
  { label: "GitHub", href: GITHUB_PROFILE, Icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_PROFILE, Icon: FaLinkedinIn },
  { label: "Twitter", href: TWITTER_PROFILE, Icon: FaXTwitter },
  { label: "Instagram", href: INSTAGRAM_PROFILE, Icon: FaInstagram },
] as const;

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

      // Initial states
      gsap.set(chars, { yPercent: 118, opacity: 0 });
      gsap.set(portrait, { opacity: 0, y: 50, scale: 0.985 });
      gsap.set(corners, { opacity: 0, y: 16 });

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
          duration: 1.3,
          ease: "expo.out",
        },
        "-=0.6"
      );

      tl.to(
        corners,
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
        "-=1.0"
      );
    });

    return () => {
      cancelled = true;
      instances.forEach((i) => i.revert());
    };
  }, []);

  /* Scroll-out parallax */
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
        .to("[data-name-layer='irshad']", { y: -80, ease: "none" }, 0)
        .to("[data-name-layer='ahamed']", { y: -120, ease: "none" }, 0)
        .to("[data-portrait-img]", { y: 60, scale: 1.04, ease: "none" }, 0)
        .to("[data-hero-fade]", { opacity: 0, y: -25, ease: "none" }, 0.15);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-background"
      aria-label="Introduction"
    >
      <SiteHeader />

      <h1 className="sr-only">{PROFILE.title}</h1>

      {/* ================= PORTRAIT — z-10 (behind AHAMED, in front of IRSHAD) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center"
        data-portrait
      >
        {/* Desktop portrait */}
        <div
          className="relative hidden md:block h-[84vh] aspect-[900/1227] max-h-none"
          aria-hidden="true"
        >
          <Image
            src="/assets/portrait.png"
            alt=""
            fill
            priority
            draggable={false}
            data-portrait-img
            className="object-contain object-bottom grayscale contrast-[1.04]"
            sizes="(min-width: 768px) 60vw, 0vw"
          />
        </div>
        {/* Mobile portrait */}
        <div
          className="relative md:hidden h-[70vh] aspect-[900/1227] max-h-none"
          aria-hidden="true"
        >
          <Image
            src="/assets/portrait.png"
            alt=""
            fill
            draggable={false}
            data-portrait-img
            className="object-contain object-bottom grayscale contrast-[1.04]"
            sizes="95vw"
          />
        </div>
      </div>

      {/* ================= IRSHAD — z-0, BEHIND portrait */}
      {/* Desktop: left side, top-[36%] */}
      <div
        className="hidden md:block absolute left-[4.5vw] top-[37%] z-0"
        data-name-layer="irshad"
      >
        <div className="overflow-hidden">
          <span
            data-split
            aria-hidden="true"
            className="split-parent block text-[clamp(5rem,13.2vw,13.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-foreground select-none"
          >
            IRSHAD
          </span>
        </div>
      </div>
      {/* Mobile: top-[24%] behind hair */}
      <div
        className="md:hidden absolute inset-x-0 top-[23%] z-0"
        data-name-layer="irshad"
      >
        <div className="overflow-hidden px-[5vw]">
          <span
            data-split
            aria-hidden="true"
            className="split-parent block text-[clamp(3.2rem,17vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-foreground select-none"
          >
            IRSHAD
          </span>
        </div>
      </div>

      {/* ================= AHAMED — z-20, IN FRONT of portrait */}
      {/* White text + difference blend: inverts over dark neck, black over light background */}
      {/* Desktop: right side, top-[53%] */}
      <div
        data-name-layer="ahamed"
        className="hidden md:block pointer-events-none absolute left-[46vw] right-[4.5vw] top-[53%] z-20 mix-blend-difference text-right"
      >
        <div className="overflow-hidden">
          <span
            data-split
            aria-hidden="true"
            className="split-parent block text-[clamp(5rem,13.2vw,13.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-white select-none"
          >
            AHAMED
          </span>
        </div>
      </div>
      {/* Mobile: top-[60%] across hoodie below chin */}
      <div
        data-name-layer="ahamed"
        className="md:hidden pointer-events-none absolute inset-x-0 top-[60%] z-20 mix-blend-difference text-right"
      >
        <div className="overflow-hidden px-[5vw]">
          <span
            data-split
            aria-hidden="true"
            className="split-parent block text-[clamp(3.2rem,17vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-white select-none"
          >
            AHAMED
          </span>
        </div>
      </div>

      {/* ================= Eyebrow tagline — top-left (desktop) */}
      <div
        data-reveal
        data-hero-fade
        className="absolute left-[4.5vw] top-[18%] z-30 hidden md:block"
      >
        <p className="max-w-[15rem] text-[12px] font-semibold uppercase leading-[1.65] tracking-[0.16em] text-foreground">
          Tech innovator
          <br />
          building for a
          <br />
          better tomorrow
        </p>
        <span
          aria-hidden="true"
          className="mt-4 block h-[1.5px] w-10 bg-foreground/70"
        />
      </div>

      {/* ================= Social rail — bottom-left (desktop) */}
      <div
        data-reveal
        data-hero-fade
        className="absolute bottom-[6%] left-[4.5vw] z-30 hidden md:block"
      >
        <ul className="flex flex-col gap-3.5">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-[14px] text-foreground/80 transition-colors hover:text-foreground"
              >
                <Icon
                  className="size-[15px] text-foreground/80 transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="font-normal tracking-[0.02em]">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= Discipline + Headline — bottom-right (desktop) */}
      <div
        data-reveal
        data-hero-fade
        className="absolute bottom-[6%] right-[4.5vw] z-30 hidden text-left md:block"
      >
        <p className="font-tech text-[11.5px] uppercase leading-[1.8] tracking-[0.14em] text-foreground/75">
          // AI · EMBEDDED · IOT
          <br />
          ROBOTICS · DIGITAL PRODUCTS
        </p>
        <p className="mt-3.5 font-sans text-[clamp(1.75rem,2.5vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-foreground">
          Tech Innovator
          <br />
          &amp; Builder
        </p>
      </div>

      {/* ================= Mobile bottom bar */}
      <div
        data-reveal
        className="absolute bottom-0 inset-x-0 z-30 flex md:hidden items-end justify-between px-[5vw] pb-7"
      >
        <ul className="flex items-center gap-3.5">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-8 items-center justify-center rounded-full border border-foreground/20 bg-background/60 text-foreground/80 transition-colors hover:text-foreground"
              >
                <Icon className="size-[13px]" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="font-tech text-[10px] uppercase leading-[1.8] tracking-[0.14em] text-foreground/60 text-right">
          AI · Embedded · IoT
          <br />
          Robotics · Products
        </p>
      </div>
    </section>
  );
}
