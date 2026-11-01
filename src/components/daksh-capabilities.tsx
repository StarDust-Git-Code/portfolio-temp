"use client";

const FIRMWARE_CAPABILITIES = [
  {
    name: "Device Trees & HAL",
    desc: "Reconstruct proprietary vendor blobs and initialize hardware.",
  },
  {
    name: "AOSP & Android 16",
    desc: "Port bleeding-edge GSIs to custom Exynos device trees.",
  },
  {
    name: "ESP32 & FreeRTOS",
    desc: "Deterministic dual-core motor control & real-time queues.",
  },
  {
    name: "Kernel Drivers",
    desc: "Reverse-engineer display shims, touch panels & cellular bootchains.",
  },
  {
    name: "Hardware Buses",
    desc: "Low-noise I2S audio routing, SPIFFS caching & BLE mesh protocols.",
  },
];

const AI_CAPABILITIES = [
  {
    name: "Multimodal Vision Agents",
    desc: "Real-time canvas and camera feed perception with Gemini 2.0 Flash.",
  },
  {
    name: "Edge Neural Inference",
    desc: "On-device TensorRT pathing at 45 FPS with zero drop frames.",
  },
  {
    name: "Wearable AI & DSP",
    desc: "Acoustic Voice Activity Detection running on 1.2mW standby power.",
  },
  {
    name: "MCP & System Tool-Use",
    desc: "Connect AI models directly to hardware actuators and local APIs.",
  },
  {
    name: "Vector Retrieval & RAG",
    desc: "Sub-second offline semantic memory search for personal PWAs.",
  },
];

export function DakshCapabilities() {
  return (
    <div id="capabilities" className="relative z-20">
      {/* ================= PRACTICE INTRO (Daksh Practice Intro Scene) */}
      <section className="relative min-h-[90svh] bg-[#f1eee6] text-[#050505] px-[clamp(1.25rem,4vw,4rem)] py-20 md:py-28 flex flex-col justify-between overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          {/* Left Column: Kinetic Statement */}
          <div className="lg:col-span-7">
            <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#ff3b12] font-semibold">
              ENGINEERING PHILOSOPHY
            </span>
            <h2 className="mt-4 text-[clamp(2.5rem,6.8vw,6.4rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] text-[#050505] [text-wrap:balance]">
              From low-level silicon to intelligent agents.
            </h2>
            <p className="mt-6 max-w-[44ch] font-tech text-[clamp(0.95rem,1.3vw,1.25rem)] leading-[1.65] text-[#55524c] [text-wrap:pretty]">
              I connect hardware constraints, Linux kernels and the neural models executing on top.
            </p>
          </div>

          {/* Right Column: Architectural Schematic Diagram */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl border border-black/15 bg-white/40 p-6 flex flex-col justify-between backdrop-blur-xs">
              <div className="flex items-center justify-between border-b border-black/10 pb-3 font-tech text-[10px] uppercase tracking-[0.16em] text-black/50">
                <span>SIGNAL ROUTE</span>
                <span className="text-[#ff3b12] font-semibold">16MHz CLOCK</span>
              </div>

              {/* 3 Physical Stages */}
              <div className="space-y-6 my-auto">
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-black/10 bg-white/80">
                  <span className="font-tech text-[10.5px] uppercase tracking-[0.16em] text-black/40">
                    STAGE 01
                  </span>
                  <span className="font-tech text-xs uppercase font-bold tracking-[0.14em] text-black">
                    SILICON &amp; SENSORS
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className="w-[1.5px] h-6 bg-[#ff3b12]" />
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#ff3b12]/30 bg-[#ff3b12]/5">
                  <span className="font-tech text-[10.5px] uppercase tracking-[0.16em] text-[#ff3b12]">
                    STAGE 02
                  </span>
                  <span className="font-tech text-xs uppercase font-bold tracking-[0.14em] text-black">
                    FIRMWARE &amp; HAL BUS
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className="w-[1.5px] h-6 bg-[#ff3b12]" />
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl border border-black/10 bg-white/80">
                  <span className="font-tech text-[10.5px] uppercase tracking-[0.16em] text-black/40">
                    STAGE 03
                  </span>
                  <span className="font-tech text-xs uppercase font-bold tracking-[0.14em] text-black">
                    AGENTIC INTELLIGENCE
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between font-tech text-[9.5px] uppercase tracking-[0.14em] text-black/40">
                <span>DETERMINISTIC LATENCY</span>
                <span className="text-black font-semibold">&lt; 18ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ORBIT SECTION (Daksh Orbit Scene) */}
      <section className="relative bg-[#050505] text-[#f1eee6] px-[clamp(1.25rem,4vw,4rem)] py-24 md:py-36 border-t border-[#f1eee6]/15">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center md:text-left">
            <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#ff3b12] font-semibold">
              CAPABILITIES &amp; ARCHITECTURE
            </span>
            <h2 className="mt-3 text-[clamp(2.4rem,6vw,5.6rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.05em] text-[#f1eee6] [text-wrap:balance]">
              I design the hardware. <br />
              <span className="text-white/60">And the intelligence</span> <br />
              <span className="text-[#ff3b12]">running on it.</span>
            </h2>
          </div>

          {/* Dual Discipline Orbit Grid */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Discipline 1: SYSTEMS & FIRMWARE */}
            <div className="rounded-3xl border border-[#f1eee6]/15 bg-[#11100f] p-8 lg:p-10">
              <div className="flex items-center justify-between border-b border-[#f1eee6]/15 pb-5">
                <h3 className="font-tech text-sm uppercase tracking-[0.2em] text-[#f1eee6] font-bold">
                  SYSTEMS &amp; FIRMWARE
                </h3>
                <span className="size-2 rounded-full bg-[#ff3b12] shadow-[0_0_8px_#ff3b12]" />
              </div>

              <ul className="mt-8 divide-y divide-[#f1eee6]/10" role="list">
                {FIRMWARE_CAPABILITIES.map((cap) => (
                  <li key={cap.name} className="py-4.5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-white/40" />
                      <strong className="font-sans text-[15px] font-semibold text-[#f1eee6] tracking-tight">
                        {cap.name}
                      </strong>
                    </div>
                    <p className="mt-1 pl-3.5 font-tech text-[12.5px] leading-relaxed text-[#aaa79f]">
                      {cap.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discipline 2: EDGE & AGENTIC AI */}
            <div className="rounded-3xl border border-[#f1eee6]/15 bg-[#11100f] p-8 lg:p-10">
              <div className="flex items-center justify-between border-b border-[#f1eee6]/15 pb-5">
                <h3 className="font-tech text-sm uppercase tracking-[0.2em] text-[#ff3b12] font-bold">
                  EDGE &amp; AGENTIC AI
                </h3>
                <span className="size-2 rounded-full bg-[#ff3b12] shadow-[0_0_8px_#ff3b12]" />
              </div>

              <ul className="mt-8 divide-y divide-[#f1eee6]/10" role="list">
                {AI_CAPABILITIES.map((cap) => (
                  <li key={cap.name} className="py-4.5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#ff3b12]" />
                      <strong className="font-sans text-[15px] font-semibold text-[#f1eee6] tracking-tight">
                        {cap.name}
                      </strong>
                    </div>
                    <p className="mt-1 pl-3.5 font-tech text-[12.5px] leading-relaxed text-[#aaa79f]">
                      {cap.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
