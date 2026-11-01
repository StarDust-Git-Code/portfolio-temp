"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Activity, Terminal } from "lucide-react";
import { GITHUB_PROFILE } from "@/data/projects";

const PROJECTS = [
  {
    num: "01",
    kicker: "Real-time AI Agents",
    title: "FLUXBOARD.AI",
    desc: "A collaborative canvas with Gemini-powered vision agents that inspect your workspace and sketch ideas in real time.",
    award: "1st Place Overall · MLH PIXEL.GEMINI",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7436599170284552192/",
    image: "/assets/projects/fluxboard.webp",
    modes: [
      {
        label: "VISION AGENT",
        telemetry: "340ms Inference",
        specA: "Model: Gemini 2.0 Flash",
        specB: "Canvas Stream: 1080p Keyframes",
        pipeline: "Canvas Frame → Token Stream → Agent Stroke",
      },
      {
        label: "REAL-TIME SYNC",
        telemetry: "18ms State Latency",
        specA: "Protocol: Binary WebSocket",
        specB: "Sync Bus: Subpixel Bezier",
        pipeline: "Pointer Event → Delta Frame → Multi-peer",
      },
    ],
    triad: {
      constraint:
        "High-resolution canvas stream saturated multimodal token windows and caused stroke lag during live sketching.",
      decision:
        "Decoupled rendering into an 18ms binary delta sync bus while offloading throttled keyframes to Gemini in background Web Workers.",
      result:
        "1st Place overall (14.80/15) at MLH PIXEL.GEMINI with sub-second agent drawing response.",
    },
  },
  {
    num: "02",
    kicker: "Aerial Computer Vision",
    title: "SENTINELAI",
    desc: "Autonomous aerial hazard detection running Google Cloud and Gemini on edge-streamed drone video feeds for instant situational alerts.",
    award: "Best Google API · MLH Gemini.exe 2.0",
    href: "https://devpost.com/software/sentinelai-n9y6fe",
    image: "/assets/projects/sentai.jpg",
    modes: [
      {
        label: "EDGE SILICON",
        telemetry: "24ms Local Latency",
        specA: "Inference: Onboard NPU TensorRT",
        specB: "Framerate: 45 FPS Live Stream",
        pipeline: "Optical Flow → TensorRT → Motor PWM",
      },
      {
        label: "CLOUD VISION",
        telemetry: "99.4% Map Accuracy",
        specA: "APIs: Google Cloud Vision & Gemini",
        specB: "Telemetry: GeoJSON Envelope",
        pipeline: "Keyframe → GCS Bucket → Gemini Inspection",
      },
    ],
    triad: {
      constraint:
        "Drone telemetry over 4G links suffered packet loss and high latency during critical low-altitude obstacle approaches.",
      decision:
        "Engineered a dual-tier architecture: on-device NPU handles immediate collision avoidance while upstream routes keyframes to Google Cloud for deep triage.",
      result:
        "Best Use of Google APIs award at MLH Gemini.exe 2.0 with continuous 45 FPS zero-drop pathing.",
    },
  },
  {
    num: "03",
    kicker: "Wearable Intelligence",
    title: "CUSTOM OPENDOTS",
    desc: "My customized AI wearable companion and personal second brain. Captures ambient audio, runs local DSP, and searches vector memories.",
    award: "Hardware & Edge AI Wearable",
    href: "https://brain-dots.vercel.app",
    image: "/assets/projects/brain-dots.jpg",
    modes: [
      {
        label: "LOCAL DSP",
        telemetry: "1.2mW Standby Power",
        specA: "Sampling: 16kHz / 16-bit PCM",
        specB: "VAD Filter: Noise Gate",
        pipeline: "MEMS Mic → I2S Hardware DMA → Ring Buffer",
      },
      {
        label: "VECTOR SEARCH",
        telemetry: "85ms Memory Hit",
        specA: "Embeddings: Cosine Index",
        specB: "Storage: SQLite / Vector DB",
        pipeline: "Speech-to-Text → Vector Chunk → Second Brain Hit",
      },
    ],
    triad: {
      constraint:
        "Battery longevity was compromised when streaming uninterrupted audio to cloud speech APIs from a compact wearable.",
      decision:
        "Implemented hardware-interrupt Voice Activity Detection (VAD) on the microcontroller, transmitting audio chunks only upon speech triggers.",
      result:
        "Reduced radio wakeups by 82%, achieving multi-day battery endurance while syncing memories seamlessly to a private second-brain PWA.",
    },
  },
  {
    num: "04",
    kicker: "IoT Firmware & Hardware",
    title: "PAWTECH IOT",
    desc: "Connected pet care hardware controller with custom ESP32 firmware, BLE mesh device discovery, and offline telemetry caching.",
    award: "Embedded Firmware & Hardware",
    href: "https://github.com/StarDust-Git-Code",
    image: "/assets/projects/lemihandle.png",
    modes: [
      {
        label: "FIRMWARE BUS",
        telemetry: "< 0.4ms Jitter",
        specA: "Kernel: FreeRTOS Dual-Core Tasks",
        specB: "ADC: HX711 24-bit Strain Gauge",
        pipeline: "Interrupt Timer → FreeRTOS Task → Stepper Step",
      },
      {
        label: "BLE MESH",
        telemetry: "25m Sync Radius",
        specA: "Radio: Bluetooth Low Energy 5.0",
        specB: "Buffer: SPIFFS Persistent EEPROM",
        pipeline: "BLE Broadcast → Custom Service → Handshake",
      },
    ],
    triad: {
      constraint:
        "Unreliable home Wi-Fi caused automated pet nutrition schedules to miss dispense triggers and drop weight calibration records.",
      decision:
        "Migrated schedule execution directly into non-volatile ESP32 hardware timers with BLE local telemetry caching, eliminating cloud runtime dependencies.",
      result:
        "Guaranteed 100% on-time feeding cycles with offline load-cell log persistence and instant Flutter dashboard pairing.",
    },
  },
  {
    num: "05",
    kicker: "Android OS Bring-up",
    title: "GALAXY A35 / EVOLUTION X",
    desc: "Android 16 GSI device tree bring-up on Samsung Exynos 1380. Vendor blob extraction, 120Hz AMOLED driver, and bootchain reverse-engineering.",
    award: "AOSP Android 16 Bring-up",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7420800301407891456/",
    image: "/assets/projects/sentai.jpg",
    modes: [
      {
        label: "DEVICE TREE",
        telemetry: "120Hz Display Booted",
        specA: "SoC: Samsung Exynos 1380",
        specB: "OS: Android 16 (Baklava GSI)",
        pipeline: "Bootloader → SELinux Permissive → Display HAL",
      },
      {
        label: "TELEMETRY & RADIO",
        telemetry: "Cellular & GPS Verified",
        specA: "Baseband: Exynos RIL Shim",
        specB: "Partition: Vendor Image Overlay",
        pipeline: "Kernel Image → RIL Daemon → Cellular Attach",
      },
    ],
    triad: {
      constraint:
        "Samsung's proprietary Exynos 1380 bootchain lacks upstream AOSP sources and bootloops on generic AOSP GSI builds.",
      decision:
        "Extracted proprietary vendor blobs, reconstructed overlay device tree, and patched display HAL to initialize the 120Hz AMOLED driver.",
      result:
        "Successfully booted Android 16 GSI with functioning cellular, GPS, and full 120Hz display refresh.",
    },
  },
];

export function DakshProjects() {
  const [activeModes, setActiveModes] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  const toggleMode = (projectIdx: number, modeIdx: number) => {
    setActiveModes((prev) => ({ ...prev, [projectIdx]: modeIdx }));
  };

  return (
    <div id="projects" className="relative z-20 bg-[#050505] text-[#f1eee6]">
      {PROJECTS.map((project, idx) => {
        const modeIdx = activeModes[idx] ?? 0;
        const currentMode = project.modes[modeIdx];

        return (
          <article
            key={project.title}
            className="relative min-h-[95svh] border-t border-[#f1eee6]/15 px-[clamp(1.25rem,4vw,4rem)] py-20 md:py-28 flex flex-col justify-between overflow-hidden"
          >
            {/* Giant Typographic Backdrop Watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden select-none opacity-[0.035]"
            >
              <span className="text-[clamp(5rem,15vw,16vw)] font-extrabold tracking-[-0.06em] text-white whitespace-nowrap">
                {project.title.split(".")[0]}
              </span>
            </div>

            {/* Top Bar: Kicker + Description */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#f1eee6]/10 pb-6">
              <div>
                <p className="font-tech text-xs uppercase tracking-[0.2em] text-[#ff3b12] font-semibold">
                  {project.num} / {project.kicker}
                </p>
                <h3 className="mt-2 text-[clamp(1.8rem,3.4vw,3.2rem)] font-extrabold uppercase tracking-tight text-[#f1eee6]">
                  {project.title}
                </h3>
              </div>

              <div className="max-w-md">
                <p className="font-tech text-sm leading-relaxed text-[#aaa79f] [text-wrap:pretty]">
                  {project.desc}
                </p>
                <span className="mt-2 inline-block font-tech text-[11px] uppercase tracking-wider text-[#ff3b12]">
                  {project.award}
                </span>
              </div>
            </div>

            {/* Central Composition: Architectural Schematic + Wireframe + Media */}
            <div className="relative z-10 my-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Interactive Schematic Console */}
              <div className="lg:col-span-7 rounded-2xl border border-[#f1eee6]/15 bg-[#11100f] p-6 sm:p-8">
                {/* Segmented Interactive Switcher (Daksh India/US Toggle Replica) */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#f1eee6]/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="size-3.5 text-[#ff3b12]" />
                    <span className="font-tech text-[11px] uppercase tracking-[0.16em] text-white/50">
                      SYSTEM TELEMETRY
                    </span>
                  </div>

                  {/* The Daksh [ MODE A / MODE B ] Toggle */}
                  <div className="flex items-center gap-2 font-tech text-xs uppercase tracking-[0.14em]">
                    {project.modes.map((m, mIdx) => (
                      <span key={m.label} className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => toggleMode(idx, mIdx)}
                          className={`cursor-pointer transition-colors ${
                            modeIdx === mIdx
                              ? "text-[#ff3b12] underline underline-offset-4 font-bold"
                              : "text-[#aaa79f] hover:text-[#f1eee6]"
                          }`}
                        >
                          {m.label}
                        </button>
                        {mIdx === 0 && <span className="text-[#f1eee6]/30">/</span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Telemetry Display */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-[#f1eee6]/10 bg-black/40">
                    <span className="font-tech text-[10px] uppercase tracking-[0.14em] text-[#aaa79f]">
                      METRIC READOUT
                    </span>
                    <p className="mt-1 font-tech text-xl font-bold text-[#ff3b12]">
                      {currentMode.telemetry}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-[#f1eee6]/10 bg-black/40 flex flex-col justify-center">
                    <span className="font-tech text-[10px] uppercase tracking-[0.14em] text-[#aaa79f]">
                      HARDWARE PARAMETERS
                    </span>
                    <p className="mt-1 font-tech text-xs text-white/90 truncate">
                      {currentMode.specA}
                    </p>
                    <p className="font-tech text-xs text-white/60 truncate">
                      {currentMode.specB}
                    </p>
                  </div>
                </div>

                {/* Pipeline Flow */}
                <div className="mt-4 p-3 rounded-lg border border-[#f1eee6]/10 bg-black/20 flex items-center gap-2 font-tech text-[11px] text-[#aaa79f] overflow-x-auto whitespace-nowrap">
                  <span className="text-[#ff3b12] uppercase tracking-wider font-semibold">
                    TRACE:
                  </span>
                  <span>{currentMode.pipeline}</span>
                </div>

                {/* Architectural Decision Triad */}
                <div className="mt-5 pt-4 border-t border-[#f1eee6]/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <span className="font-tech text-[10px] uppercase tracking-[0.14em] text-amber-400 font-semibold block mb-0.5">
                      Constraint
                    </span>
                    <p className="text-[12px] leading-relaxed text-[#aaa79f]">
                      {project.triad.constraint}
                    </p>
                  </div>
                  <div>
                    <span className="font-tech text-[10px] uppercase tracking-[0.14em] text-cyan-400 font-semibold block mb-0.5">
                      Decision
                    </span>
                    <p className="text-[12px] leading-relaxed text-[#aaa79f]">
                      {project.triad.decision}
                    </p>
                  </div>
                  <div>
                    <span className="font-tech text-[10px] uppercase tracking-[0.14em] text-emerald-400 font-semibold block mb-0.5">
                      Result
                    </span>
                    <p className="text-[12px] leading-relaxed text-[#aaa79f]">
                      {project.triad.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Media Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative aspect-[16/11] w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#f1eee6]/15 bg-black p-3">
                  {project.image ? (
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover grayscale contrast-[1.05] transition-transform duration-700 hover:scale-105 hover:grayscale-0"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Terminal className="size-12 text-[#ff3b12]/50" />
                    </div>
                  )}

                  <div className="pointer-events-none absolute bottom-5 right-5 font-tech text-[9.5px] uppercase tracking-[0.16em] text-white/50 bg-black/80 px-2.5 py-1 rounded border border-[#f1eee6]/15">
                    SYS_FEED_0{idx + 1}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Link Action */}
            <div className="relative z-10 flex items-center justify-between border-t border-[#f1eee6]/10 pt-6">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-tech text-xs uppercase tracking-[0.16em] text-[#f1eee6] transition-colors hover:text-[#ff3b12]"
              >
                <span>EXPLORE PROJECT</span>
                <ArrowUpRight className="size-4 text-[#ff3b12] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="font-tech text-[11px] uppercase tracking-[0.14em] text-white/30">
                ARCHITECTURE // RECORDED
              </span>
            </div>
          </article>
        );
      })}

      {/* GitHub 60+ Repositories Banner */}
      <div className="border-t border-[#f1eee6]/15 py-12 px-[clamp(1.25rem,4vw,4rem)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-tech text-xs uppercase tracking-[0.16em] text-white/60">
          60+ ADDITIONAL REPOSITORIES &amp; HARDWARE FORKS
        </span>
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-tech text-xs uppercase tracking-[0.16em] text-[#f1eee6] hover:text-[#ff3b12] transition-colors"
        >
          <span>VIEW ALL REPOSITORIES ON GITHUB</span>
          <ArrowUpRight className="size-4 text-[#ff3b12]" />
        </a>
      </div>
    </div>
  );
}
