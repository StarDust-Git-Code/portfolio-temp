"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FEATURED, INDEX_ROWS, GITHUB_PROFILE } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="work" className="border-t border-white/[0.08] px-[4.5vw] py-28 md:py-36">
      {/* ================= HEADER */}
      <ScrollReveal>
        <div className="flex items-end justify-between border-b border-white/[0.08] pb-5">
          <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold">
            {"// Selected Work"}
          </span>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="font-tech text-[12px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
          >
            github.com/StarDust-Git-Code ↗
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-10">
        <h2 className="text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
          Featured Projects<span className="text-[#ff3b1f] ml-1">.</span>
        </h2>
        <p className="mt-4 max-w-[48ch] text-[15px] leading-[1.7] text-white/60">
          From custom IoT telemetry platforms to offline edge AI overlays and 1st-place hackathon builds.
        </p>
      </ScrollReveal>

      {/* ================= WIDE BENTO CARDS (Alexfolio Image 2 style) */}
      <div className="mt-16 flex flex-col gap-10">
        {FEATURED.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 80}>
            <div className="group rounded-3xl border border-white/[0.08] bg-[#141414] p-6 md:p-10 transition-all duration-300 hover:border-white/20">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
                {/* Left Column — Context & Details */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Year badge in parenthesis — Alexfolio style */}
                    <div className="flex items-center gap-3">
                      <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-white/50">
                        {`( ${project.year} )`}
                      </span>
                      <span className="inline-block rounded-sm bg-[#ff3b1f]/15 px-2 py-0.5 font-tech text-[10.5px] uppercase tracking-[0.14em] text-[#ff3b1f] font-semibold">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[clamp(1.9rem,3.2vw,3rem)] font-bold tracking-[-0.02em] text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-[50ch] text-[14.5px] leading-[1.75] text-white/65 [text-wrap:pretty]">
                      {project.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.split(" · ").map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-tech text-[11px] uppercase tracking-[0.12em] text-white/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.08]">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-white/90"
                    >
                      <span>Explore Repository</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Column — Large Media Container */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/[0.08] flex items-center justify-center p-4">
                    {project.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          alt={project.imageAlt ?? project.title}
                          fill
                          className={`grayscale contrast-[1.04] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:grayscale-0 ${
                            project.imageFit === "contain" ? "object-contain" : "object-cover"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="font-black text-6xl text-white/10">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ================= EDITORIAL ARCHIVE INDEX (All other builds) */}
      <div className="mt-28">
        <ScrollReveal>
          <div className="flex items-end justify-between border-b border-white/[0.08] pb-4">
            <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-white/50">
              {"// Project Archive & Ports"}
            </span>
            <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-white/40">
              60+ Repositories
            </span>
          </div>
        </ScrollReveal>

        <ul className="mt-2" role="list">
          {INDEX_ROWS.map((row, i) => (
            <li key={row.name} className="border-b border-white/[0.08]">
              <ScrollReveal delay={Math.min(i * 30, 300)}>
                <a
                  href={row.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[1fr_auto] md:grid-cols-12 items-center gap-4 py-5 px-2 transition-colors duration-200 hover:bg-white/[0.03]"
                >
                  <div className="col-span-1 md:col-span-4 flex items-center gap-3">
                    <span className="text-[15.5px] font-semibold text-white group-hover:underline underline-offset-4">
                      {row.name}
                    </span>
                    {row.live ? (
                      <span className="size-1.5 rounded-full bg-[#ff3b1f]" title="Live Deployment" />
                    ) : null}
                  </div>

                  <p className="hidden md:block md:col-span-5 text-[13px] leading-[1.6] text-white/55 line-clamp-1">
                    {row.desc}
                  </p>

                  <div className="hidden md:block md:col-span-2 font-tech text-[11px] uppercase tracking-[0.14em] text-white/45">
                    {row.tech}
                  </div>

                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight className="size-4 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                </a>
              </ScrollReveal>
            </li>
          ))}
        </ul>

        <ScrollReveal className="mt-12 text-center">
          <a
            href={`${GITHUB_PROFILE}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[13.5px] text-white/80 transition-all hover:border-white/50 hover:bg-white/10 hover:text-white"
          >
            <span>View all 60+ repositories on GitHub</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
