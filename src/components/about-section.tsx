"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContributionGraph } from "@/components/contribution-graph";
import {
  RECOGNITION,
  BUILD_NOTES,
  LINKEDIN_ACTIVITY,
} from "@/data/profile";

const CAPABILITIES = [
  {
    num: "01",
    title: "Embedded Systems & IoT",
    desc: "Architecting reliable hardware and low-level firmware for IoT devices, telemetry co-pilots, and real-time robotic systems.",
    items: [
      { name: "C / C++ Firmware", id: "01" },
      { name: "ESP32 & ARM Microcontrollers", id: "02" },
      { name: "Raspberry Pi & Linux SBCs", id: "03" },
      { name: "ROS & Hardware Telemetry", id: "04" },
      { name: "Circuit Debugging & Logic Analysis", id: "05" },
    ],
  },
  {
    num: "02",
    title: "Android & Linux Systems",
    desc: "Deep platform engineering from bootchain bring-ups and kernel tuning to custom HAL drivers and AOSP ports.",
    items: [
      { name: "AOSP & Custom ROM Bring-up", id: "01" },
      { name: "Linux Kernel & Device Trees", id: "02" },
      { name: "Android HAL & Driver Debugging", id: "03" },
      { name: "Smali Reverse Engineering", id: "04" },
      { name: "Magisk & KernelSU Modules", id: "05" },
    ],
  },
  {
    num: "03",
    title: "Edge AI & Computer Vision",
    desc: "Deploying low-latency, offline-first neural network inference directly onto resource-constrained edge hardware.",
    items: [
      { name: "Python & Model Optimization", id: "01" },
      { name: "Real-time Computer Vision", id: "02" },
      { name: "Local LLMs & AI Agents", id: "03" },
      { name: "Sensor Fusion & On-device ML", id: "04" },
    ],
  },
];

const AWARDS = [
  {
    project: "Fluxboard.AI",
    award: "1st Place · 14.80 / 15",
    event: "PIXEL.GEMINI · MLH 2026",
    id: "01",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7436599170284552192/",
    highlight: true,
  },
  {
    project: "SentinelAI",
    award: "Best Use of Google APIs",
    event: "Gemini.exe 2.0 · MLH",
    id: "02",
    href: "https://devpost.com/software/sentinelai-n9y6fe",
    highlight: false,
  },
  {
    project: "GRASKILLS.AI",
    award: "4th Place (of 34 Teams)",
    event: "PROMPT. TRAIN. PARTY · MLH",
    id: "03",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7434195127780388864/",
    highlight: false,
  },
  {
    project: "Galaxy A35 Bring-up",
    award: "Android 16 GSI Port",
    event: "Evolution X Open Source",
    id: "04",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7420800301407891456/",
    highlight: false,
  },
  {
    project: "Caelestia Shell",
    award: "Ubuntu 26.04 Port",
    event: "Hyprland Linux Ecosystem",
    id: "05",
    href: "https://github.com/StarDust-Git-Code/caelestia-shell-ubuntu_26",
    highlight: false,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-white/10 px-[4.5vw] py-28 md:py-36">
      {/* ================= STATEMENT CARD (Alexfolio Image 2 & 3 style) */}
      <ScrollReveal>
        <div className="rounded-[28px] border border-white/10 bg-[#141414] p-8 md:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8">
              <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-heat font-semibold">
                {"// Intro"}
              </span>
              <h2 className="mt-5 text-[clamp(2.2rem,4.4vw,4.2rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-white [text-wrap:balance]">
                I build where{" "}
                <span className="text-heat">code meets circuits</span> — connecting{" "}
                <span className="text-heat">embedded systems</span>,{" "}
                <span className="text-heat">edge AI</span> and Android.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pt-8">
              <p className="text-[15px] leading-[1.8] text-white/70 [text-wrap:pretty]">
                I&apos;m a builder based in Chennai, India. I bridge low-level firmware,
                Linux kernels, and neural net execution at the edge. I share the raw
                debugging, trade-offs, and hardware bring-ups — not just the final screenshot.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-black transition-transform duration-200 hover:scale-[1.03]"
                >
                  <span>See my Work</span>
                  <ArrowDown className="size-3.5" />
                </a>
                <a
                  href={LINKEDIN_ACTIVITY}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
                >
                  <span>Build notes</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ================= RECOGNITION / AWARDS TABLE (Alexfolio Image 3 Top) */}
      <div className="mt-14">
        <ScrollReveal>
          <div className="rounded-[28px] border border-white/10 bg-[#141414] p-8 md:p-12 shadow-2xl">
            <div className="flex items-end justify-between border-b border-white/10 pb-5">
              <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-heat font-semibold">
                {"// Recognition & Milestones"}
              </span>
              <span className="hidden md:inline font-tech text-[11px] uppercase tracking-[0.2em] text-white/40">
                Verified Placements
              </span>
            </div>

            <div className="mt-3 divide-y divide-white/8">
              {AWARDS.map((item) => (
                <a
                  key={item.project}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-2 md:grid-cols-12 items-center gap-4 py-5 px-2 transition-colors duration-200 hover:bg-white/[0.03] rounded-lg"
                >
                  <div className="col-span-1 md:col-span-4 flex items-center gap-3">
                    <span className="text-[16px] md:text-[17px] font-semibold text-white group-hover:underline underline-offset-4">
                      {item.project}
                    </span>
                    {item.highlight ? (
                      <span className="size-1.5 rounded-full bg-heat" title="1st Place" />
                    ) : null}
                  </div>
                  <div className="col-span-1 md:col-span-4 text-right md:text-left text-[14px] text-white/80 font-medium">
                    <span className={item.highlight ? "text-heat font-semibold" : ""}>
                      {item.award}
                    </span>
                  </div>
                  <div className="hidden md:block md:col-span-3 text-[13px] text-white/45 font-tech">
                    {item.event}
                  </div>
                  <div className="hidden md:flex md:col-span-1 items-center justify-end gap-2 font-tech text-[12px] text-white/35">
                    <span>{item.id}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ================= CAPABILITIES / SERVICES (Alexfolio Image 3 Bottom) */}
      <div className="mt-14">
        <ScrollReveal>
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-heat font-semibold">
              {"// Capabilities & Core Stack"}
            </span>
            <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-white/40">
              Hardware to Software
            </span>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <ScrollReveal key={cap.num} delay={i * 80}>
              <div className="flex flex-col justify-between h-full rounded-[24px] border border-white/10 bg-[#141414] p-8 md:p-9 transition-all duration-300 hover:border-white/25 shadow-xl">
                <div>
                  {/* Giant stroked outline number (Alexfolio Image 3 style) */}
                  <span className="text-outline font-black text-[clamp(4.5rem,7vw,6.5rem)] leading-none select-none tracking-tighter text-white/30">
                    {cap.num}
                  </span>

                  <h3 className="mt-6 text-[22px] font-bold tracking-[-0.02em] text-white">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-[13.5px] leading-[1.7] text-white/60 [text-wrap:pretty]">
                    {cap.desc}
                  </p>
                </div>

                <ul className="mt-8 border-t border-white/10 pt-4 divide-y divide-white/6">
                  {cap.items.map((tech) => (
                    <li
                      key={tech.name}
                      className="flex items-center justify-between py-2.5 text-[12.5px] font-medium text-white/80"
                    >
                      <span>{tech.name}</span>
                      <span className="font-tech text-[11px] text-white/35">
                        {tech.id}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ================= FROM THE WORKBENCH */}
      <div className="mt-20">
        <ScrollReveal>
          <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-heat font-semibold">
            {"// From the Workbench"}
          </span>
          <h3 className="mt-3 text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold tracking-[-0.02em] text-white">
            Active Bring-ups &amp; Labs
          </h3>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {BUILD_NOTES.map((note, i) => (
            <ScrollReveal key={note.title} delay={i * 80}>
              <div className="flex flex-col justify-between h-full rounded-[24px] border border-white/10 bg-[#141414] p-8 shadow-xl hover:border-white/25 transition-all">
                <div>
                  <span className="inline-block rounded-sm bg-white/10 px-2.5 py-1 font-tech text-[10.5px] uppercase tracking-[0.14em] text-white/80">
                    {note.status}
                  </span>
                  <h4 className="mt-4 text-[19px] font-bold tracking-[-0.01em] text-white">
                    {note.title}
                  </h4>
                  <p className="mt-3 text-[13.5px] leading-[1.75] text-white/65 [text-wrap:pretty]">
                    {note.description}
                  </p>
                </div>
                <a
                  href={note.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                >
                  {note.linkLabel}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ================= GITHUB GRAPH */}
      <ContributionGraph username="StarDust-Git-Code" />
    </section>
  );
}
