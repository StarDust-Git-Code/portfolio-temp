"use client";

import { useState, useCallback } from "react";
import { ArrowUpRight, ArrowUp, Copy, Check, Radio } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { toast } from "sonner";
import { LINKEDIN_PROFILE, GITHUB_PROFILE, PROFILE } from "@/data/profile";

export function DakshContact() {
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
      toast.error("Failed to copy email");
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative z-20 min-h-[90svh] bg-[#050505] text-[#f1eee6] px-[clamp(1.25rem,4vw,4rem)] py-20 md:py-32 flex flex-col justify-between border-t border-[#f1eee6]/15 overflow-hidden"
    >
      {/* Top Beacon Status */}
      <div className="flex items-center justify-between border-b border-[#f1eee6]/10 pb-4">
        <span className="font-tech text-xs uppercase tracking-[0.14em] text-white/50">
          Get in touch
        </span>
        <div className="flex items-center gap-2 font-tech text-[11px] uppercase tracking-[0.14em] text-white/40">
          <Radio className="size-3 text-[#ff3b12] animate-pulse" />
          <span>Active Beacon</span>
        </div>
      </div>

      {/* Main Centerpiece Statement */}
      <div className="my-auto py-12 max-w-4xl">
        <h2 className="text-[clamp(2.4rem,5.6vw,5.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-[#f1eee6] max-w-4xl [text-wrap:balance]">
          Have a problem worth <span className="text-[#ff3b12]">untangling?</span>
        </h2>

        <p className="mt-6 max-w-[50ch] font-tech text-[clamp(1rem,1.3vw,1.25rem)] leading-relaxed text-[#aaa79f] [text-wrap:pretty]">
          Looking to build custom hardware, reverse-engineer a bootchain, or deploy low-latency edge AI?
          Let&apos;s build something distinctive together.
        </p>

        {/* Large Editorial Monospace Email Anchor */}
        <div className="mt-10">
          <a
            href={`mailto:${PROFILE.email}`}
            className="group inline-flex items-center gap-3 font-tech text-[clamp(1.5rem,3.6vw,3.2rem)] font-bold text-[#f1eee6] hover:text-[#ff3b12] transition-colors break-all"
          >
            <span className="underline decoration-[#f1eee6]/30 underline-offset-8 group-hover:decoration-[#ff3b12]">
              {PROFILE.email}
            </span>
            <ArrowUpRight className="size-6 md:size-8 text-[#ff3b12] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Action Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <a
            href={LINKEDIN_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#f1eee6] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#050505] transition-all hover:bg-white hover:scale-[1.02]"
          >
            <FaLinkedinIn className="size-3.5" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="size-3" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              copied
                ? "border-[#ff3b12] bg-[#ff3b12]/15 text-[#ff3b12]"
                : "border-[#f1eee6]/20 bg-white/5 text-[#f1eee6] hover:border-white/50"
            }`}
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-[#ff3b12]" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5 text-[#aaa79f]" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[#f1eee6]/20 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#f1eee6] hover:border-white/50 transition-all"
          >
            <FaGithub className="size-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="size-3 text-[#aaa79f]" />
          </a>
        </div>
      </div>

      {/* Bottom Telemetry & Back to Top */}
      <div className="pt-6 border-t border-[#f1eee6]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-tech text-[11px] uppercase tracking-[0.14em] text-[#aaa79f]">
        <div className="flex items-center gap-3">
          <span className="text-[#f1eee6] font-medium">{PROFILE.location}</span>
          <span className="text-white/20">·</span>
          <span>13.0827° N, 80.2707° E</span>
          <span className="text-white/20 hidden md:inline">·</span>
          <span className="hidden md:inline">UTC+05:30 (IST)</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 text-[#f1eee6] hover:text-[#ff3b12] transition-colors cursor-pointer self-start sm:self-auto"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}

