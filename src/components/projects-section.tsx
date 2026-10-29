"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FEATURED, INDEX_ROWS, GITHUB_PROFILE } from "@/data/projects";

export function ProjectsSection() {
  // Feature top 2 flagship builds to keep the section concise and punchy (Alexfolio Slide 2 style)
  const featuredProjects = FEATURED.slice(0, 2);
  const archiveProjects = INDEX_ROWS.slice(0, 5);

  return (
    <section id="work" className="border-t border-white/[0.08] px-[4.5vw] py-20 md:py-24">
      {/* ================= HEADER */}
      <ScrollReveal>
        <div className="flex items-end justify-between border-b border-white/[0.08] pb-4">
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

      <ScrollReveal className="mt-8">
        <h2 className="text-[clamp(2.2rem,4.8vw,4.4rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
          Featured Projects<span className="text-[#ff3b1f] ml-1">.</span>
        </h2>
        <p className="mt-3 max-w-[48ch] text-[14.5px] leading-[1.65] text-white/60">
          Tactile hardware platforms, high-contrast design systems, and low-latency spatial interfaces.
        </p>
      </ScrollReveal>

      {/* ================= CONCISE WIDE BENTO CARDS (Alexfolio Slide 2 style) */}
      <div className="mt-12 flex flex-col gap-8">
        {featuredProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 80}>
            <div className="group rounded-3xl border border-white/[0.08] bg-[#141414] p-6 md:p-8 lg:p-9 transition-all duration-300 hover:border-white/20">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-center">
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

                    <h3 className="mt-4 text-[clamp(1.8rem,3vw,2.75rem)] font-bold tracking-[-0.02em] text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3.5 max-w-[48ch] text-[14px] leading-[1.7] text-white/65 [text-wrap:pretty]">
                      {project.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
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

                  <div className="mt-7 pt-5 border-t border-white/[0.08]">
                    <a
                      href={project.href}
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-white/90"
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Column — Large Media Container */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/[0.08] flex items-center justify-center p-3 md:p-4">
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
      <div className="mt-16 md:mt-20">
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
          {archiveProjects.map((row, i) => (
            <li key={row.name} className="border-b border-white/[0.08]">
              <ScrollReveal delay={Math.min(i * 30, 200)}>
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group grid grid-cols-[1fr_auto] md:grid-cols-12 items-center gap-4 py-4 px-2 transition-colors duration-200 hover:bg-white/[0.03]"
                >
                  <div className="col-span-1 md:col-span-4 flex items-center gap-3">
                    <span className="text-[15px] font-semibold text-white group-hover:underline underline-offset-4">
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

        <ScrollReveal className="mt-10 text-center">
          <a
            href={`${GITHUB_PROFILE}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-[13px] text-white/80 transition-all hover:border-white/50 hover:bg-white/10 hover:text-white"
          >
            <span>View all 60+ repositories on GitHub</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
