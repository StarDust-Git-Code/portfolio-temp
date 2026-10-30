"use client";

import { useState, useCallback } from "react";
import { ArrowUpRight, MapPin, Mail, Copy, Check, Clock, Radio } from "lucide-react";
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
      className="border-t border-white/[0.08] px-[4.5vw] pt-14 pb-14 md:pt-18 md:pb-16"
    >
      {/* ================= SECTION HEADER & LIVE STATUS */}
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

      {/* ================= MAIN 12-COLUMN EDITORIAL GRID */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
        {/* Left Column (7 cols): Bold Headline with Orange Accent & Pitch */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <ScrollReveal>
              <h2 className="text-[clamp(2.5rem,5.6vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white [text-wrap:balance]">
                Let&apos;s build something{" "}
                <span className="text-[#ff3b1f]">distinctive.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={80} className="mt-6 max-w-[50ch]">
              <p className="text-[15.5px] leading-[1.8] text-white/65 [text-wrap:pretty]">
                Have an idea involving custom hardware, low-level Linux/Android, or offline edge AI?
                I&apos;m always open to discussing new collaborations, bring-ups, and ventures.
              </p>
            </ScrollReveal>
          </div>

          {/* Quick Technical Telemetry / Location bar */}
          <ScrollReveal delay={120} className="mt-8 pt-6 border-t border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white/60 font-tech text-[11.5px] uppercase tracking-[0.14em]">
              <div className="flex items-center gap-2 text-white/75">
                <MapPin className="size-3.5 text-[#ff3b1f]" />
                <span>{PROFILE.location}</span>
                <span className="text-white/30 hidden sm:inline">·</span>
                <span className="text-white/45 hidden sm:inline">13.0827° N, 80.2707° E</span>
              </div>
              <div className="flex items-center gap-2 text-white/45">
                <Clock className="size-3.5 text-white/30" />
                <span>UTC+05:30 (IST) · &lt; 24H RESPONSE</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column (5 cols): Interactive Direct Channel Terminal Card */}
        <ScrollReveal delay={100} className="lg:col-span-5">
          <div className="rounded-3xl border border-white/[0.1] bg-[#141414] p-6 sm:p-7 transition-colors hover:border-white/20">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 font-tech text-[11px] uppercase tracking-[0.18em] text-white/50">
                <Radio className="size-3.5 text-[#ff3b1f]" />
                <span>Direct Channel</span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-tech text-[10.5px] uppercase tracking-[0.14em] text-[#ff3b1f]">
                <span className="size-1.5 rounded-full bg-[#ff3b1f] animate-pulse" />
                Live Inbox
              </span>
            </div>

            {/* Email Address */}
            <div className="mt-5">
              <span className="font-tech text-[10.5px] uppercase tracking-[0.16em] text-white/40">
                Electronic Mail
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="mt-1 block font-mono text-[clamp(1.05rem,2vw,1.25rem)] font-bold text-white transition-colors hover:text-[#ff3b1f] break-all"
              >
                {PROFILE.email}
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
              >
                <Mail className="size-3.5" />
                <span>Send Email</span>
                <ArrowUpRight className="size-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-medium transition-all duration-200 active:scale-[0.98] ${
                  copied
                    ? "border-[#ff3b1f]/60 bg-[#ff3b1f]/10 text-[#ff3b1f]"
                    : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
                }`}
                aria-label={`Copy email: ${PROFILE.email}`}
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-[#ff3b1f]" />
                    <span className="font-semibold text-[#ff3b1f]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 text-white/60" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Code Profiles Sub-bar */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-3 font-tech text-[12px]">
              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <FaLinkedinIn className="size-3.5 text-white/50 group-hover:text-white" />
                <span>LinkedIn</span>
                <ArrowUpRight className="size-3 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>

              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <FaGithub className="size-3.5 text-white/50 group-hover:text-white" />
                <span>GitHub</span>
                <ArrowUpRight className="size-3 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
