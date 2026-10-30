"use client";

import { useState, useCallback } from "react";
import { ArrowUpRight, MapPin, Copy, Check } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { toast } from "sonner";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeadingReveal } from "@/components/heading-reveal";
import { LINKEDIN_PROFILE, GITHUB_PROFILE, PROFILE } from "@/data/profile";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      toast.success("Email copied to clipboard", {
        description: PROFILE.email,
      });
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback for restricted clipboard contexts
      try {
        const textarea = document.createElement("textarea");
        textarea.value = PROFILE.email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        toast.success("Email copied to clipboard", {
          description: PROFILE.email,
        });
        setTimeout(() => setCopied(false), 2400);
      } catch {
        toast.error("Failed to copy email to clipboard");
      }
    }
  }, []);

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/[0.08] px-[4.5vw] pt-14 pb-12 md:pt-18 md:pb-14"
    >
      {/* ================= SECTION HEADER & LIVE AVAILABILITY */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
        <HeadingReveal
          text="// Contact"
          headingClassName="font-tech text-[12px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold"
        />

        {/* Live Availability Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm self-start sm:self-auto">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff3b1f] opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-[#ff3b1f]" />
          </span>
          <span className="font-tech text-[11px] uppercase tracking-[0.16em] text-white/80">
            AVAILABLE FOR Q1/Q2 BRING-UPS · CHENNAI (IST)
          </span>
        </div>
      </div>

      {/* ================= BOLD STATEMENT WITH ORANGE ACCENT */}
      <div className="mt-8">
        <ScrollReveal>
          <h2 className="text-[clamp(2.5rem,5.8vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white [text-wrap:balance]">
            Let&apos;s build something{" "}
            <span className="text-[#ff3b1f]">distinctive.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-5 max-w-[56ch]">
          <p className="text-[15.5px] leading-[1.8] text-white/65 [text-wrap:pretty]">
            Have an idea involving custom hardware, low-level Linux/Android, or offline edge AI?
            I&apos;m always open to discussing new collaborations, bring-ups, and ventures.
          </p>
        </ScrollReveal>

        {/* Big Editorial Email Anchor */}
        <ScrollReveal delay={120} className="mt-7">
          <a
            href={`mailto:${PROFILE.email}`}
            className="group inline-flex items-center gap-3 font-tech text-[clamp(1.4rem,3.4vw,2.8rem)] font-bold text-white transition-colors hover:text-[#ff3b1f] break-all"
          >
            <span className="underline decoration-white/25 underline-offset-8 transition-colors group-hover:decoration-[#ff3b1f]">
              {PROFILE.email}
            </span>
            <ArrowUpRight className="size-5 md:size-7 text-[#ff3b1f] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </ScrollReveal>

        {/* Interactive Action Buttons Row */}
        <ScrollReveal delay={160} className="mt-7 flex flex-wrap items-center gap-3.5">
          {/* LinkedIn Button */}
          <a
            href={LINKEDIN_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
          >
            <FaLinkedinIn className="size-4" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Copy Email Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[13.5px] font-medium transition-all duration-200 active:scale-[0.98] ${
              copied
                ? "border-[#ff3b1f]/60 bg-[#ff3b1f]/10 text-[#ff3b1f]"
                : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
            }`}
            aria-label={`Copy email: ${PROFILE.email}`}
          >
            {copied ? (
              <>
                <Check className="size-4 text-[#ff3b1f]" />
                <span className="font-semibold text-[#ff3b1f]">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5 text-white/60" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* GitHub Button */}
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[13.5px] font-medium text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
          >
            <FaGithub className="size-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="size-3.5 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </ScrollReveal>

        {/* Technical Telemetry Metadata Footer Bar */}
        <ScrollReveal delay={200} className="mt-10 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white/60 font-tech text-[11.5px] uppercase tracking-[0.14em]">
            <div className="flex items-center gap-2 text-white/75">
              <MapPin className="size-3.5 text-[#ff3b1f]" />
              <span>{PROFILE.location}</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-white/45 hidden sm:inline">13.0827° N, 80.2707° E</span>
            </div>
            <div className="flex items-center gap-4 text-white/45">
              <span>{"// TIMEZONE: UTC+05:30 (IST)"}</span>
              <span className="hidden md:inline text-white/20">·</span>
              <span className="hidden md:inline">TYPICAL RESPONSE &lt; 24H</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
