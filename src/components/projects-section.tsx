"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import Tilt from "react-parallax-tilt";
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeadingReveal } from "@/components/heading-reveal";
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

  // Keyboard navigation when work section is in view
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById("work");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
      if (!inView) return;

      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [scrollPrev, scrollNext]);

  const archiveProjects = INDEX_ROWS;

  return (
    <section id="work" className="border-t border-white/[0.08] px-[4.5vw] py-24 md:py-32">
      {/* ================= SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.08] pb-4">
        <HeadingReveal
          text="Selected Work"
          headingClassName="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold"
        />
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noreferrer"
          className="font-tech text-[12px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
        >
          github.com/StarDust-Git-Code ↗
        </a>
      </div>

      {/* ================= TITLE & SLIDE CONTROLS */}
      <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <HeadingReveal
            text="Featured Projects"
            type="chars"
            headingClassName="text-[clamp(1.95rem,4.8vw,4.4rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white"
            extra={<span className="text-[#ff3b1f] ml-1">.</span>}
          />
          <p className="mt-3 max-w-[50ch] text-[14.5px] leading-[1.65] text-white/60">
            Hardware bring-ups, edge AI agents, and custom firmware built in hackathons and my personal lab.
          </p>
        </div>

        {/* Swipe arrow navigation & Kinetic rolling NumberFlow counter */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="flex items-center font-tech text-xs tracking-[0.2em] text-white/50 mr-1 select-none">
            <span className="size-1.5 rounded-full bg-[#ff3b1f] mr-2 inline-block" />
            <NumberFlow
              value={selectedIndex + 1}
              format={{ minimumIntegerDigits: 2 }}
              className="font-tech text-white font-semibold"
            />
            <span className="mx-1 text-white/30">/</span>
            <span>{`0${FEATURED.length}`}</span>
          </div>

          <button
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous project"
            className={`flex size-10 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${
              canPrev
                ? "border-white/20 bg-white/5 text-white hover:border-[#ff3b1f] hover:bg-[#ff3b1f]/10 hover:text-[#ff3b1f]"
                : "border-white/5 bg-transparent text-white/20 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next project"
            className={`flex size-10 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${
              canNext
                ? "border-white/20 bg-white/5 text-white hover:border-[#ff3b1f] hover:bg-[#ff3b1f]/10 hover:text-[#ff3b1f]"
                : "border-white/5 bg-transparent text-white/20 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* ================= HORIZONTAL SWIPEABLE BENTO TRACK (Embla + Motion) */}
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
              <motion.div
                animate={{
                  scale: selectedIndex === i ? 1 : 0.965,
                  opacity: selectedIndex === i ? 1 : 0.45,
                }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl border border-white/[0.08] bg-[#141414] p-6 md:p-8 lg:p-10 transition-colors duration-300 hover:border-white/20"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-center">
                  {/* Left Column — Context & Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Stroked Numeral + Year tag + Status badge */}
                      <div className="flex items-center gap-3">
                        <span className="font-tech text-outline font-black text-2xl md:text-3xl tracking-tight leading-none select-none">
                          {project.index}
                        </span>
                        <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-white/50">
                          ( {project.year} )
                        </span>
                        <span className="inline-block rounded-sm bg-[#ff3b1f]/15 border border-[#ff3b1f]/20 px-2.5 py-0.5 font-tech text-[10.5px] uppercase tracking-[0.14em] text-[#ff3b1f] font-semibold">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="mt-4 text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-[48ch] text-[14.5px] leading-[1.75] text-white/65 [text-wrap:pretty]">
                        {project.desc}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.split(" · ").map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 font-tech text-[11px] uppercase tracking-[0.14em] text-white/75 transition-colors hover:border-[#ff3b1f]/40 hover:text-white"
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
                        className="group/btn inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-[#ff3b1f] hover:text-white"
                      >
                        <span>Explore Project</span>
                        <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>

                      <span className="hidden sm:inline-flex items-center gap-2 font-tech text-[11px] text-white/35 uppercase tracking-[0.18em]">
                        <span>←</span>
                        <span>Drag / Swipe</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column — 3D Parallax Tilt Media Container */}
                  <div className="lg:col-span-6">
                    <Tilt
                      tiltMaxAngleX={4}
                      tiltMaxAngleY={4}
                      perspective={1400}
                      glareEnable={true}
                      glareMaxOpacity={0.06}
                      glareColor="#ffffff"
                      glarePosition="all"
                      glareBorderRadius="1rem"
                      scale={1.01}
                      transitionSpeed={1000}
                      className="w-full h-full"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/[0.08] flex items-center justify-center p-3 md:p-4 group-hover:border-white/20 transition-colors duration-300">
                        {project.image ? (
                          <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <Image
                              src={project.image}
                              alt={project.imageAlt ?? project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                              priority={i === 0}
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
                    </Tilt>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicators (Motion Animated Vermilion Pills) */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {FEATURED.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Jump to project ${i + 1}`}
            animate={{
              width: selectedIndex === i ? 36 : 8,
              backgroundColor: selectedIndex === i ? "#ff3b1f" : "rgba(255, 255, 255, 0.2)",
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="h-2 rounded-full cursor-pointer hover:bg-white/40 transition-colors"
          />
        ))}
      </div>

      {/* ================= EDITORIAL ARCHIVE INDEX (All other builds) */}
      <div className="mt-20 md:mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.08] pb-4">
          <HeadingReveal
            text="Archive & Ports"
            headingClassName="font-tech text-[12px] uppercase tracking-[0.2em] text-white/50 font-semibold"
          />
          <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-white/40">
            60+ Repositories
          </span>
        </div>

        {/* Desktop column header */}
        <div className="hidden md:grid md:grid-cols-12 items-center gap-4 py-3 px-3 text-[11px] font-tech uppercase tracking-[0.18em] text-white/40 border-b border-white/[0.06] mt-4 select-none">
          <div className="col-span-1">#</div>
          <div className="col-span-3">Project</div>
          <div className="col-span-4">Overview</div>
          <div className="col-span-2">Architecture</div>
          <div className="col-span-1 text-right">Year</div>
          <div className="col-span-1 text-right">Action</div>
        </div>

        <ul className="divide-y divide-white/[0.06]" role="list">
          {archiveProjects.map((row, i) => (
            <li key={row.name}>
              <ScrollReveal delay={Math.min(i * 35, 200)}>
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group block transition-colors duration-200 hover:bg-white/[0.02] rounded-lg"
                >
                  {/* Mobile layout (< 768px) */}
                  <div className="flex md:hidden flex-col gap-2.5 py-4 px-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-tech text-outline font-black text-xl leading-none select-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] font-bold text-white group-hover:text-[#ff3b1f] transition-colors">
                          {row.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-tech text-[11px] uppercase tracking-wider text-white/45">
                          ( {row.year} )
                        </span>
                        <ArrowUpRight className="size-4 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#ff3b1f]" />
                      </div>
                    </div>

                    <p className="text-[13px] leading-relaxed text-white/60">
                      {row.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                      {row.tech.split(" · ").map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-tech text-[10px] uppercase tracking-wider text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                      {row.live ? (
                        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-tech text-[10px] uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
                          <span className="size-1 rounded-full bg-emerald-400" />
                          Live
                        </span>
                      ) : null}
                      {row.submission ? (
                        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#ff3b1f]/10 px-2 py-0.5 font-tech text-[10px] uppercase tracking-wider text-[#ff3b1f] border border-[#ff3b1f]/20">
                          {row.submission}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Desktop layout (>= 768px) */}
                  <div className="hidden md:grid md:grid-cols-12 items-center gap-4 py-4 px-3">
                    <div className="col-span-1">
                      <span className="font-tech text-outline font-black text-2xl leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="col-span-3 flex items-center gap-2.5">
                      <span className="text-[15px] font-bold text-white group-hover:text-[#ff3b1f] transition-colors">
                        {row.name}
                      </span>
                      {row.live ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-tech text-[10px] uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
                          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      ) : null}
                      {row.submission ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#ff3b1f]/10 px-2 py-0.5 font-tech text-[10px] uppercase tracking-wider text-[#ff3b1f] border border-[#ff3b1f]/20">
                          {row.submission}
                        </span>
                      ) : null}
                    </div>

                    <div className="col-span-4">
                      <p className="text-[13px] leading-relaxed text-white/55 line-clamp-1 group-hover:text-white/75 transition-colors">
                        {row.desc}
                      </p>
                    </div>

                    <div className="col-span-2 flex flex-wrap gap-1.5">
                      {row.tech.split(" · ").slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-tech text-[10px] uppercase tracking-[0.1em] text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="col-span-1 text-right">
                      <span className="font-tech text-[11.5px] uppercase tracking-[0.14em] text-white/45">
                        ( {row.year} )
                      </span>
                    </div>

                    <div className="col-span-1 flex justify-end">
                      <span className="flex size-7 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-200 group-hover:border-[#ff3b1f] group-hover:bg-[#ff3b1f]/10 group-hover:text-[#ff3b1f]">
                        <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
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
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-[13px] text-white/80 transition-all hover:border-[#ff3b1f]/60 hover:bg-[#ff3b1f]/10 hover:text-white"
          >
            <span>View all 60+ repositories on GitHub</span>
            <ArrowRight className="size-4 text-[#ff3b1f] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
