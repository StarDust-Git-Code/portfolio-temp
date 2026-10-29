"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContributionGraph } from "@/components/contribution-graph";
import {
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


export function AboutSection() {
  return (
    <section id="about" className="border-t border-white/[0.08] px-[4.5vw] py-28 md:py-36">
      {/* ================= SECTION LABEL */}
      <ScrollReveal>
        <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold">
          {"// Intro"}
        </span>
      </ScrollReveal>

      {/* ================= STATEMENT (Alexfolio Image 2 & 3 style) */}
      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        <ScrollReveal className="lg:col-span-8">
          <h2 className="text-[clamp(2.2rem,4.4vw,4.2rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-white [text-wrap:balance]">
            I build where{" "}
            <span className="text-[#ff3b1f]">code meets circuits</span> — connecting{" "}
            <span className="text-[#ff3b1f]">embedded systems</span>,{" "}
            <span className="text-[#ff3b1f]">edge AI</span> and Android.
          </h2>
        </ScrollReveal>

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

      {/* ================= CAPABILITIES / SERVICES (Alexfolio Image 3 Bottom) */}
      <div className="mt-28">
        <ScrollReveal>
          <div className="flex items-end justify-between border-b border-white/[0.08] pb-4">
            <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold">
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
              <div className="flex flex-col justify-between h-full rounded-3xl border border-white/[0.08] bg-[#141414] p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#161616]">
                <div>
                  {/* Giant stroked outline number (Alexfolio Image 3 style) */}
                  <span className="text-outline font-black text-[clamp(4.5rem,7vw,6.5rem)] leading-none select-none tracking-tighter">
                    {cap.num}
                  </span>

                  <h3 className="mt-6 text-[22px] font-bold tracking-[-0.02em] text-white">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-[13.5px] leading-[1.7] text-white/60 [text-wrap:pretty]">
                    {cap.desc}
                  </p>
                </div>

                <ul className="mt-8 border-t border-white/[0.08] pt-4 divide-y divide-white/[0.06]">
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
      <div className="mt-28">
        <ScrollReveal>
          <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-white/50">
            {"// From the Workbench"}
          </span>
          <h3 className="mt-4 text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold tracking-[-0.02em] text-white">
            Active Bring-ups &amp; Labs
          </h3>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {BUILD_NOTES.map((note, i) => (
            <ScrollReveal key={note.title} delay={i * 80}>
              <div className="flex flex-col justify-between h-full rounded-3xl border border-white/[0.08] bg-[#141414] p-8 transition-all duration-300 hover:border-white/20">
                <div>
                  <span className="inline-block rounded-sm bg-white/[0.06] px-2.5 py-1 font-tech text-[10.5px] uppercase tracking-[0.14em] text-white/70">
                    {note.status}
                  </span>
                  <h4 className="mt-4 text-[19px] font-bold tracking-[-0.01em] text-white">
                    {note.title}
                  </h4>
                  <p className="mt-3 text-[13.5px] leading-[1.75] text-white/60 [text-wrap:pretty]">
                    {note.description}
                  </p>
                </div>
                <a
                  href={note.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-medium text-white underline decoration-white/25 underline-offset-4 hover:decoration-white"
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
