"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import ParallaxTilt from "react-parallax-tilt";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeadingReveal } from "@/components/heading-reveal";
import { FEATURED, INDEX_ROWS, GITHUB_PROFILE } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="work" className="px-[4.5vw] py-28 md:py-36">
      <ScrollReveal>
        <div className="flex items-end justify-between border-b border-foreground/10 pb-5">
          <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-foreground/50">
            {"// Selected Work"}
          </span>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="font-tech text-[12px] uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
          >
            github.com/StarDust-Git-Code ↗
          </a>
        </div>
      </ScrollReveal>

      <HeadingReveal
        text="Projects"
        className="mt-10"
        headingClassName="text-[clamp(2.4rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]"
        extra={
          <span className="align-top text-heat text-[0.32em] font-bold">●</span>
        }
      />

      {/* ================= Featured flagships */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED.map((p, i) => (
          <ScrollReveal key={p.index} delay={120 * i}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block h-full"
            >
              <ParallaxTilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                scale={1.02}
                transitionSpeed={1200}
                glareEnable={false}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-card">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt={p.imageAlt ?? ""}
                      loading="lazy"
                      draggable={false}
                      className={`absolute inset-0 h-full w-full grayscale contrast-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${p.imageFit === "contain" ? "object-contain" : "object-cover"}`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[repeating-linear-gradient(-45deg,transparent_0px,transparent_10px,rgba(10,10,10,0.03)_10px,rgba(10,10,10,0.03)_11px)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                      <span
                        aria-hidden="true"
                        className="select-none text-[clamp(4rem,7vw,7rem)] font-extrabold leading-none tracking-[-0.05em] text-foreground/12 transition-colors duration-500 group-hover:text-foreground/20"
                      >
                        {p.title.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span className="absolute left-4 top-4 rounded-sm bg-background/90 px-2 py-1 font-tech text-[10px] uppercase tracking-[0.16em] text-foreground/80 backdrop-blur-md">
                    {p.status}
                  </span>
                  <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-sm bg-background/90 px-2 py-1 font-tech text-[10px] uppercase tracking-[0.16em] text-foreground/80 backdrop-blur-md">
                    {p.tags}
                  </span>
                </div>
              </ParallaxTilt>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <div className="min-w-0">
                  <span className="mr-3 font-tech text-[12px] text-foreground/40">
                    {p.index}
                  </span>
                  <span className="text-[17px] font-semibold tracking-[-0.01em] group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                    {p.title}
                  </span>
                  <p className="mt-1.5 max-w-[34ch] text-[13px] leading-[1.6] text-foreground/55 [text-wrap:pretty]">
                    {p.desc}
                  </p>
                </div>
                <span className="shrink-0 font-tech text-[12px] text-foreground/40">
                  {p.year}
                </span>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      {/* ================= Editorial index of more builds */}
      <ScrollReveal className="mt-24" delay={80}>
        <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-foreground/50">
          {"// More Builds"}
        </span>
      </ScrollReveal>

      <ul className="mt-6 border-b border-foreground/10" role="list">
        {INDEX_ROWS.map((row, i) => (
          <li key={row.name} className="border-t border-foreground/10">
            <ScrollReveal delay={60 * Math.min(i, 6)}>
              <a
                href={row.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 py-6 transition-colors duration-300 hover:bg-card/70 lg:grid-cols-[2rem_minmax(0,14rem)_minmax(0,1fr)_9rem_1rem] lg:gap-x-6 lg:px-2"
              >
                <span className="hidden font-tech text-[12px] text-foreground/35 lg:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15.5px] font-semibold tracking-[-0.01em] text-foreground group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                  {row.name}
                  {row.live ? (
                    <span
                      className="ml-2.5 inline-block size-1.5 rounded-full align-middle bg-heat"
                      title="Live"
                    />
                  ) : null}
                </span>
                <span className="col-span-2 max-w-[72ch] text-[13px] leading-[1.6] text-foreground/55 [text-wrap:pretty] lg:col-span-1">
                  {row.desc}
                </span>
                <span className="hidden font-tech text-[11.5px] uppercase tracking-[0.14em] text-foreground/45 lg:inline">
                  {row.tech}
                </span>
                <ArrowUpRight
                  className="col-start-2 row-start-1 size-4 text-foreground/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground lg:col-auto lg:row-auto"
                  aria-hidden="true"
                />
              </a>
              {row.submission ? (
                <a
                  href={row.submission}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${row.name} submission on Devpost`}
                  className="mb-6 inline-flex items-center gap-1.5 font-tech text-[11px] text-foreground/55 underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-foreground lg:ml-14"
                >
                  Devpost submission
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </ScrollReveal>
          </li>
        ))}
      </ul>

      <ScrollReveal className="mt-12 text-center" delay={140}>
        <a
          href={`${GITHUB_PROFILE}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-foreground/20 bg-background/60 px-7 py-3.5 text-[14px] text-foreground/80 transition-colors hover:border-foreground/60 hover:text-foreground"
        >
          View all 60+ repositories on GitHub
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </ScrollReveal>
    </section>
  );
}
