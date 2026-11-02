"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeadingReveal } from "@/components/heading-reveal";
import {
  BUILD_NOTES,
  RECOGNITION,
} from "@/data/profile";

const WORKBENCH_METADATA = [
  {
    platform: "AOSP · Android 16 GSI · Kernel",
    badge: "ACTIVE BRING-UP · 2026",
    highlights: ["Android 16 GSI", "120Hz Display", "Cellular & GPS", "Device Tree"],
  },
  {
    platform: "Edge AI · Local Memory · Next.js",
    badge: "PERSONAL LAB · 2026",
    highlights: ["AI Second Brain", "Self-Hosted", "Local Knowledge", "Mobile PWA"],
  },
];

export function AboutSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = headlineRef.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const lines = el.querySelectorAll(".headline-line");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        {
          opacity: 0,
          filter: "blur(12px)",
          yPercent: 25,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          yPercent: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "filter,transform",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative border-t border-white/[0.08] px-[4.5vw] py-16 md:py-24 overflow-hidden">
      {/* Ambient optical blur glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[800px] max-w-full rounded-full bg-gradient-to-tr from-[#ff3b1f]/[0.05] via-orange-500/[0.025] to-transparent blur-[140px]"
      />

      {/* ================= STATEMENT — MONUMENTAL FULL VIEWPORT SCREEN */}
      <div className="min-h-[calc(100svh-6rem)] flex flex-col justify-between py-6 md:py-10">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <HeadingReveal
            text="Intro"
            headingClassName="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold"
          />
          <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-white/40">
            Practice &amp; Philosophy
          </span>
        </div>

        {/* Monumental Headline (Matching Daksh Gajjar scale) */}
        <div className="my-auto py-8 md:py-12">
          <h2
            ref={headlineRef}
            aria-label="I build systems that think."
            className="font-sans font-black uppercase tracking-[-0.075em] leading-[0.78] text-white select-none text-[min(clamp(3.8rem,13.8vw,12.5rem),calc((100svh-14rem)/2.35))]"
          >
            <span className="headline-line block will-change-transform">I BUILD</span>
            <span className="headline-line block will-change-transform">SYSTEMS</span>
            <span className="headline-line block will-change-transform">
              THAT <span className="text-[#ff3b1f]">THINK.</span>
            </span>
          </h2>
        </div>

        {/* Bottom Bar: Descriptor on Left, Scroll indicator on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/[0.08]">
          <p className="font-tech text-[13px] md:text-[14.5px] leading-[1.75] text-white/65 max-w-[48ch] [text-wrap:pretty]">
            Where software meets silicon. Embedded engineer and systems builder in Chennai, India. Bridging low-level firmware, Linux kernels, and offline edge intelligence.
          </p>
          <a
            href="#workbench"
            className="group inline-flex items-center gap-2 font-tech text-[11.5px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors self-start md:self-auto"
          >
            <span>Scroll to explore</span>
            <span className="text-[#ff3b1f] transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
          </a>
        </div>
      </div>

      {/* ================= FROM THE WORKBENCH */}
      <div id="workbench" className="mt-28 md:mt-36">
        <ScrollReveal>
          <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold">
            Active Bring-ups &amp; Labs
          </span>
        </ScrollReveal>
        <HeadingReveal
          text="From the Workbench"
          headingClassName="mt-2 text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold tracking-[-0.02em] text-white"
        />
        <ScrollReveal delay={60}>
          <p className="mt-2 text-[14px] text-white/50 max-w-xl [text-wrap:pretty]">
            Hardware bring-up logs, custom ROM engineering, and edge AI systems built and documented in the lab.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {BUILD_NOTES.map((note, i) => {
            const meta = WORKBENCH_METADATA[i] ?? {
              platform: "Edge Computing",
              badge: "ACTIVE BRING-UP · 2026",
              highlights: [],
            };
            return (
              <ScrollReveal key={note.title} delay={i * 80}>
                <div className="group relative flex flex-col justify-between h-full rounded-3xl border border-white/[0.08] bg-[#141414] p-7 sm:p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#161616]">
                  <div>
                    {/* Header: Status badge + Large stroked index numeral */}
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-tech text-[10.5px] uppercase tracking-[0.14em] text-white/80">
                        <span className="size-1.5 rounded-full bg-[#ff3b1f] animate-pulse" />
                        {meta.badge}
                      </span>
                      <span className="font-sans text-5xl md:text-6xl font-black tracking-tighter text-outline select-none leading-none opacity-40 group-hover:opacity-75 transition-opacity">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Platform */}
                    <div className="mt-6 font-tech text-[11.5px] uppercase tracking-[0.16em] text-[#ff3b1f] font-semibold">
                      {meta.platform}
                    </div>

                    {/* Title */}
                    <h4 className="mt-2 text-[clamp(1.35rem,2.2vw,1.75rem)] font-bold tracking-[-0.02em] text-white group-hover:text-white transition-colors">
                      {note.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-3 text-[13.5px] sm:text-[14px] leading-[1.75] text-white/60 [text-wrap:pretty]">
                      {note.description}
                    </p>

                    {/* Highlight Pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {meta.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-tech text-[11px] tracking-wide text-white/70"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link Action */}
                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <a
                      href={note.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-medium text-white/85 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white group/link"
                    >
                      <span>{note.linkLabel}</span>
                      <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* ================= RECOGNITION & MILESTONES */}
      <div className="mt-28 md:mt-36">
        <ScrollReveal>
          <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold">
            Recognition
          </span>
        </ScrollReveal>
        <HeadingReveal
          text="Recognition & Milestones"
          headingClassName="mt-2 text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold tracking-[-0.02em] text-white"
        />
        <ScrollReveal delay={60}>
          <p className="mt-2 text-[14px] text-white/50 max-w-xl [text-wrap:pretty]">
            Verified competitive hackathon finishes, category awards, and MLH season achievements.
          </p>
        </ScrollReveal>

        {/* Swiss Editorial Index Table */}
        <div className="mt-10 border-t border-white/[0.08]">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 py-3.5 border-b border-white/[0.12] font-tech text-[11px] uppercase tracking-[0.16em] text-white/40">
            <div className="col-span-3">Award · Year</div>
            <div className="col-span-3">Project</div>
            <div className="col-span-3">Event / Season</div>
            <div className="col-span-3">Achievement / Verification</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/[0.08]">
            {RECOGNITION.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block py-5 md:py-6 transition-colors duration-200 hover:bg-white/[0.02] -mx-3 px-3 rounded-xl"
                >
                  <div className="grid grid-cols-1 gap-2.5 md:grid-cols-12 md:gap-4 md:items-center">
                    {/* Award & Year */}
                    <div className="md:col-span-3 flex items-center gap-2.5">
                      <span className="font-tech text-[12px] text-white/45">2026</span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-tech text-[10.5px] font-semibold uppercase tracking-wider ${
                          item.highlight
                            ? "bg-[#ff3b1f]/15 text-[#ff3b1f] border border-[#ff3b1f]/30"
                            : "bg-white/[0.06] text-white/75 border border-white/[0.08]"
                        }`}
                      >
                        {item.result} Place
                      </span>
                    </div>

                    {/* Project Title */}
                    <div className="md:col-span-3">
                      <span className="text-[16px] md:text-[17px] font-bold text-white group-hover:text-[#ff3b1f] transition-colors">
                        {item.title}
                      </span>
                    </div>

                    {/* Event */}
                    <div className="md:col-span-3">
                      <span className="font-tech text-[12px] md:text-[12.5px] text-white/65 uppercase tracking-wide">
                        {item.event}
                      </span>
                    </div>

                    {/* Detail & Arrow */}
                    <div className="md:col-span-3 flex items-center justify-between gap-3 text-left">
                      <span className="text-[12.5px] md:text-[13px] text-white/55 [text-wrap:pretty]">
                        {item.detail}
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-white/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
