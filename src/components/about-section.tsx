"use client";

import { ArrowUpRight, ArrowDown, Terminal } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeadingReveal } from "@/components/heading-reveal";
import { WordHighlightText } from "@/components/word-highlight-text";
import {
  BUILD_NOTES,
  RECOGNITION,
  LINKEDIN_ACTIVITY,
} from "@/data/profile";

const WORKBENCH_DETAILS = [
  {
    platform: "AOSP · Android 16 GSI · Kernel",
    badge: "ACTIVE BRING-UP · 2026",
    highlights: ["Android 16 GSI", "120Hz Display", "Cellular & GPS", "Device Tree"],
    triad: {
      constraint:
        "Samsung's Exynos 1380 bootchain lacks upstream AOSP sources and bootloops on generic AOSP GSI builds.",
      decision:
        "Extracted proprietary vendor blobs, reconstructed overlay device tree, and patched display HAL to initialize the 120Hz AMOLED driver.",
      result:
        "Successfully booted Android 16 GSI with functioning cellular, GPS, and full 120Hz display refresh.",
    },
  },
  {
    platform: "Edge AI · Local Memory · Next.js",
    badge: "PERSONAL LAB · 2026",
    highlights: ["AI Second Brain", "Self-Hosted", "Local Knowledge", "Mobile PWA"],
    triad: {
      constraint:
        "Raw continuous audio transmission over cellular drained wearable battery in under 3 hours.",
      decision:
        "Implemented on-device Voice Activity Detection (VAD) and integrated a self-hosted vector database with offline PWA synchronization.",
      result:
        "Achieved multi-day battery endurance with sub-100ms semantic memory search on mobile.",
    },
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-white/[0.08] px-[4.5vw] py-28 md:py-36">
      {/* ================= SECTION LABEL */}
      <HeadingReveal
        text="Engineering"
        headingClassName="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold"
      />

      {/* ================= STATEMENT */}
      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-8">
          <h2
            aria-label="I build where code meets software — connecting embedded systems, edge AI and Android."
            className="text-[clamp(2.2rem,4.4vw,4.2rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-white [text-wrap:balance]"
          >
            <WordHighlightText text="I build where code meets software — connecting embedded systems, edge AI and Android." />
          </h2>
        </div>

        <ScrollReveal className="lg:col-span-4 lg:pt-3" delay={80}>
          <p className="text-[15px] leading-[1.8] text-white/65 [text-wrap:pretty]">
            I&apos;m a builder based in Chennai, India. I bridge low-level firmware,
            Linux kernels, and neural net execution at the edge. I share the raw
            debugging, trade-offs, and hardware bring-ups — not just the final screenshot.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-black transition-transform duration-200 hover:scale-[1.03] hover:bg-white/90"
            >
              <span>See my Work</span>
              <ArrowDown className="size-3.5" />
            </a>
            <a
              href={LINKEDIN_ACTIVITY}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/75 underline decoration-white/25 underline-offset-4 hover:text-white hover:decoration-white"
            >
              <span>Build notes</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* ================= FROM THE WORKBENCH */}
      <div className="mt-28 md:mt-36">
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
            const meta = WORKBENCH_DETAILS[i] ?? {
              platform: "Edge Computing",
              badge: "ACTIVE BRING-UP · 2026",
              highlights: [],
              triad: {
                constraint: "Hardware constraints under evaluation.",
                decision: "Custom firmware implementation in progress.",
                result: "Documented in laboratory bring-up logs.",
              },
            };

            return (
              <ScrollReveal key={note.title} delay={i * 80}>
                <div className="group relative flex flex-col justify-between h-full rounded-3xl border border-white/[0.08] bg-[#141414] p-7 sm:p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#161616]">
                  <div>
                    {/* Header: Status badge */}
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-tech text-[10.5px] uppercase tracking-[0.14em] text-white/80">
                        <span className="size-1.5 rounded-full bg-[#ff3b1f] animate-pulse" />
                        {meta.badge}
                      </span>
                    </div>

                    {/* Platform */}
                    <div className="mt-5 font-tech text-[11.5px] uppercase tracking-[0.16em] text-[#ff3b1f] font-semibold">
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

                    {/* Decision Triad for Workbench Cards */}
                    <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-4">
                      <div className="flex items-center gap-2 pb-2.5 border-b border-white/[0.06]">
                        <Terminal className="size-3 text-[#ff3b1f]" />
                        <span className="font-tech text-[10px] uppercase tracking-[0.18em] text-white/70 font-semibold">
                          Bring-up Decisions
                        </span>
                      </div>
                      <div className="mt-3 space-y-2.5 text-[12px] leading-[1.6]">
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                          <span className="font-tech text-[9.5px] uppercase tracking-[0.14em] text-amber-400 font-semibold sm:w-24 shrink-0">
                            Constraint:
                          </span>
                          <span className="text-white/60">{meta.triad.constraint}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                          <span className="font-tech text-[9.5px] uppercase tracking-[0.14em] text-cyan-400 font-semibold sm:w-24 shrink-0">
                            Decision:
                          </span>
                          <span className="text-white/60">{meta.triad.decision}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                          <span className="font-tech text-[9.5px] uppercase tracking-[0.14em] text-emerald-400 font-semibold sm:w-24 shrink-0">
                            Result:
                          </span>
                          <span className="text-white/75">{meta.triad.result}</span>
                        </div>
                      </div>
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
            Recognition &amp; Milestones
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
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-tech text-[10.5px] font-semibold uppercase tracking-wider ${item.highlight
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
