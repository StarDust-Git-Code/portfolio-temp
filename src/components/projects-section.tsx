"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FEATURED, INDEX_ROWS, GITHUB_PROFILE } from "@/data/projects";

export function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

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

      {/* ================= TITLE & SLIDE CONTROLS */}
      <ScrollReveal className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-[clamp(2.2rem,4.8vw,4.4rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
            Featured Projects<span className="text-[#ff3b1f] ml-1">.</span>
          </h2>
          <p className="mt-3 max-w-[48ch] text-[14.5px] leading-[1.65] text-white/60">
            Swipe left to explore hardware platforms, tactile systems, and spatial interfaces.
          </p>
        </div>

        {/* Swipe arrow navigation & counter */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <span className="font-tech text-xs tracking-[0.2em] text-white/45 mr-1">
            {`0${selectedIndex + 1} / 0${FEATURED.length}`}
          </span>
          <button
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous project"
            className={`flex size-10 items-center justify-center rounded-full border transition-all active:scale-95 ${
              canPrev
                ? "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
                : "border-white/5 bg-transparent text-white/20 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next project"
            className={`flex size-10 items-center justify-center rounded-full border transition-all active:scale-95 ${
              canNext
                ? "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
                : "border-white/5 bg-transparent text-white/20 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </ScrollReveal>

      {/* ================= HORIZONTAL SWIPEABLE BENTO TRACK (Embla) */}
      <div
        className="mt-10 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y -ml-6 md:-ml-8">
          {FEATURED.map((project, i) => (
            <div
              key={project.title}
              className="min-w-0 flex-[0_0_100%] pl-6 md:pl-8"
            >
              <div className="group rounded-3xl border border-white/[0.08] bg-[#141414] p-6 md:p-8 lg:p-10 transition-all duration-300 hover:border-white/20">
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

                      <h3 className="mt-4 text-[clamp(1.9rem,3.2vw,3rem)] font-bold tracking-[-0.02em] text-white">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-[48ch] text-[14.5px] leading-[1.75] text-white/65 [text-wrap:pretty]">
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

                    <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                      <a
                        href={project.href}
                        target={project.href.startsWith("http") ? "_blank" : undefined}
                        rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-white/90"
                      >
                        <span>Explore Project</span>
                        <ArrowUpRight className="size-3.5" />
                      </a>

                      <span className="hidden sm:inline font-tech text-[11px] text-white/35 uppercase tracking-[0.16em]">
                        ← Drag / Swipe →
                      </span>
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
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {FEATURED.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Jump to project ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              selectedIndex === i
                ? "w-8 h-2 bg-[#ff3b1f]"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
          />
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
