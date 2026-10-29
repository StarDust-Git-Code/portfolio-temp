"use client";

import { useState, useCallback } from "react";
import { ArrowUpRight, MapPin, Mail, Copy, Check } from "lucide-react";
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
      className="border-t border-white/[0.08] px-[4.5vw] py-28 md:py-36"
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

      {/* ================= KINETIC HEADLINE */}
      <HeadingReveal
        text="Let's build something distinctive."
        type="chars"
        className="mt-8"
        headingClassName="max-w-[18ch] text-[clamp(2.6rem,6.5vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em] text-white [text-wrap:balance] [&_.word:last-child]:text-[#ff3b1f]"
        splitClassName="!whitespace-normal"
      />

      {/* ================= SUBHEAD & INTERACTIVE ACTIONS */}
      <ScrollReveal delay={100} className="mt-8 max-w-[52ch]">
        <p className="text-[15.5px] leading-[1.8] text-white/65 [text-wrap:pretty]">
          Have an idea involving custom hardware, low-level Linux/Android, or offline edge AI?
          I&apos;m always open to discussing new collaborations, bring-ups, and ventures.
        </p>

        {/* Interactive Action Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* Connect on LinkedIn */}
          <a
            href={LINKEDIN_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
          >
            <FaLinkedinIn className="size-4" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Interactive Copy Email Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`group inline-flex items-center gap-2.5 rounded-full border px-6 py-3.5 text-[14px] font-medium transition-all duration-200 active:scale-[0.98] ${
              copied
                ? "border-[#ff3b1f]/60 bg-[#ff3b1f]/10 text-white"
                : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
            }`}
            aria-label={`Copy email: ${PROFILE.email}`}
          >
            {copied ? (
              <>
                <Check className="size-4 text-[#ff3b1f] animate-in zoom-in-75 duration-200" />
                <span className="font-semibold text-[#ff3b1f]">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="size-4 text-white/70 transition-transform duration-200 group-hover:scale-110" />
                <span>Copy Email</span>
                <Copy className="size-3.5 text-white/40 transition-opacity duration-200 group-hover:text-white/80" />
              </>
            )}
          </button>

          {/* GitHub Profile */}
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[14px] font-medium text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
          >
            <FaGithub className="size-4" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </ScrollReveal>

      {/* ================= LOCATION & TECHNICAL METADATA */}
      <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <MapPin className="size-3.5 text-[#ff3b1f]" />
          <span className="font-tech text-[12px] uppercase tracking-[0.14em] text-white/70">
            {PROFILE.location} · 13.0827° N, 80.2707° E
          </span>
        </div>

        <div className="flex items-center gap-4 font-tech text-[11px] uppercase tracking-[0.16em] text-white/40">
          <span>{"// TIMEZONE: UTC+05:30 (IST)"}</span>
          <span className="hidden md:inline text-white/20">·</span>
          <span className="hidden md:inline">TYPICAL RESPONSE &lt; 24H</span>
        </div>
      </div>
    </section>
  );
}
