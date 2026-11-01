"use client";

import { ArrowUpRight } from "lucide-react";
import { RECOGNITION, LINKEDIN_PROFILE } from "@/data/profile";

export function DakshAbout() {
  return (
    <section
      id="about"
      className="relative z-20 bg-[#f1eee6] text-[#050505] px-[clamp(1.25rem,4vw,4rem)] py-24 md:py-36 border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Stage Grid: Statement & Fingerprint Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Identity */}
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2.4rem,4.8vw,4.4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-[#050505] max-w-3xl [text-wrap:balance]">
              Every system carries a human imprint.
            </h2>

            <p className="mt-6 max-w-[46ch] font-tech text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.65] text-[#55524c] [text-wrap:pretty]">
              Mine comes from understanding the physics of silicon, debugging signals with an oscilloscope, and building the firmware that brings hardware to life.
            </p>

            {/* Signature & Name */}
            <div className="mt-10 pt-8 border-t border-black/15 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#050505]">
                  IRSHAD AHAMED.
                </h3>
                <p className="font-tech text-xs uppercase tracking-[0.16em] text-[#77746d] mt-1">
                  Embedded Systems &amp; Edge AI Engineer
                </p>
              </div>

              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 font-tech text-xs uppercase tracking-[0.16em] text-[#050505] underline decoration-black/30 underline-offset-4 hover:decoration-[#ff3b12] hover:text-[#ff3b12] transition-colors"
              >
                <span>Read Build Notes on LinkedIn</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Continuous Fingerprint / Circuit Board SVG Schematic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[545/725] rounded-3xl border border-black/15 bg-black/5 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between font-tech text-[9.5px] uppercase tracking-[0.16em] text-black/50 border-b border-black/10 pb-2.5">
                <span>IMPRINT COIL</span>
                <span className="text-[#ff3b12]">PHYSICAL HUMAN TRACE</span>
              </div>

              {/* Concentric Continuous Winding Schematic (Fingerprint / Coil) */}
              <div className="relative w-full h-[75%] flex items-center justify-center">
                <svg
                  className="w-full h-full text-[#ff3b12]"
                  viewBox="0 0 200 240"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M100 120 c-5 -10 -5 -20 0 -30 c8 -15 25 -15 32 0 c6 18 -2 38 -18 45" />
                  <path d="M85 135 c-15 -10 -18 -30 -5 -48 c15 -20 45 -22 62 -4 c14 15 12 38 -4 52" />
                  <path d="M72 152 c-25 -15 -28 -48 -8 -72 c22 -28 65 -30 90 -6 c20 20 18 52 -6 72" />
                  <path d="M58 170 c-32 -20 -35 -65 -10 -95 c30 -35 88 -38 120 -8 c26 25 24 68 -8 94" />
                  <path d="M45 188 c-40 -25 -42 -82 -12 -118 c38 -45 110 -48 150 -10 c32 30 30 85 -10 118" />
                  <line x1="100" y1="20" x2="100" y2="4" stroke="#ff3b12" strokeWidth="2.2" />
                  <circle cx="100" cy="4" r="3" fill="#ff3b12" />
                </svg>
              </div>

              <div className="flex items-center justify-between font-tech text-[9.5px] uppercase tracking-[0.14em] text-black/40 border-t border-black/10 pt-2.5">
                <span>CHENNAI, TAMIL NADU</span>
                <span>INDIA // 13.08° N</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Hackathon Recognition Table (Swiss Architectural Linework) */}
        <div className="mt-20 pt-10 border-t border-black/15">
          <div className="flex items-center justify-between pb-4 font-tech text-xs uppercase tracking-[0.2em] text-[#ff3b12] font-semibold">
            <span>VERIFIED COMPETITIVE MILESTONES</span>
            <span className="text-black/40">3 AWARDS · 2026</span>
          </div>

          <div className="divide-y divide-black/10 border-t border-black/15">
            {RECOGNITION.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group py-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center hover:bg-black/5 px-2 rounded-lg transition-colors"
              >
                <div className="md:col-span-2 font-tech text-xs uppercase tracking-wider text-black/60">
                  <span className="px-2 py-0.5 rounded bg-black/10 font-bold text-black mr-2">
                    {item.result} Place
                  </span>
                  2026
                </div>

                <div className="md:col-span-4 font-sans font-bold text-base text-[#050505] group-hover:text-[#ff3b12] transition-colors">
                  {item.title}
                </div>

                <div className="md:col-span-3 font-tech text-xs uppercase tracking-wide text-black/60">
                  {item.event}
                </div>

                <div className="md:col-span-3 flex items-center justify-between text-xs text-[#55524c]">
                  <span>{item.detail}</span>
                  <ArrowUpRight className="size-4 text-black/30 group-hover:text-black transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

