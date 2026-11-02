"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { ArrowUpRight, ArrowUp, X, Send, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import {
  PROFILE,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TWITTER_PROFILE,
  INSTAGRAM_PROFILE,
} from "@/data/profile";

const SOCIALS = [
  { label: "GitHub", href: GITHUB_PROFILE, Icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_PROFILE, Icon: FaLinkedinIn },
  { label: "Twitter", href: TWITTER_PROFILE, Icon: FaXTwitter },
  { label: "Instagram", href: INSTAGRAM_PROFILE, Icon: FaInstagram },
] as const;

// Static year evaluated outside render cycle
const CURRENT_YEAR = 2026;

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const headlineRef = useRef<HTMLHeadingElement>(null);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      toast.success("Email copied to clipboard", {
        description: PROFILE.email,
      });
      setTimeout(() => setCopied(false), 2400);
    } catch {
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
        toast.error("Failed to copy email");
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);

    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setDialogOpen(false);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Thank you! Opening your email client...", {
        description: `Direct address: ${PROFILE.email}`,
      });
    }, 400);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && dialogOpen) {
        setDialogOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [dialogOpen]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = headlineRef.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const lines = el.querySelectorAll(".contact-headline-line");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        {
          opacity: 0,
          filter: "blur(12px)",
          yPercent: 25,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          yPercent: 0,
          duration: 1.1,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "filter,transform",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="min-h-svh flex flex-col justify-between border-t border-white/[0.08] px-[4.5vw] pt-20 pb-8 md:pt-28 md:pb-10 relative overflow-hidden bg-[#0c0c0c]"
    >
      {/* Ambient optical blur glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[480px] w-[600px] max-w-full rounded-full bg-gradient-to-tl from-[#ff3b1f]/[0.06] via-transparent to-transparent blur-[140px]"
      />

      {/* ================= MAIN FINALE STAGE */}
      <div className="my-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 items-end gap-12 lg:gap-8">
        {/* Left Column: Monumental 3-Line Headline */}
        <div className="lg:col-span-8">
          <div className="mb-4 flex items-center gap-2 font-tech text-[11px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold">
            <span className="size-1.5 rounded-full bg-[#ff3b1f] animate-pulse" />
            <span>Initiate Collaboration</span>
          </div>

          <h2
            ref={headlineRef}
            id="contact-title"
            aria-label="Let's build something distinctive."
            className="font-sans font-black uppercase tracking-[-0.07em] leading-[0.84] text-white select-none text-[min(clamp(3.2rem,8.6vw,7.8rem),calc((100svh-16rem)/2.35))]"
          >
            <span className="contact-headline-line block will-change-transform">LET&apos;S BUILD</span>
            <span className="contact-headline-line block will-change-transform">SOMETHING</span>
            <span className="contact-headline-line block will-change-transform">
              DISTINCTIVE<span className="text-[#ff3b1f]">.</span>
            </span>
          </h2>

          {/* Decisive Heroic CTA Action */}
          <div className="mt-10 md:mt-14 flex flex-wrap items-baseline gap-6 sm:gap-8">
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="group inline-flex items-center gap-3 text-[clamp(1.25rem,2.2vw,2rem)] font-extrabold uppercase tracking-[-0.04em] text-white transition-colors hover:text-[#ff3b1f] cursor-pointer"
            >
              <span className="underline decoration-white/35 underline-offset-8 transition-colors group-hover:decoration-[#ff3b1f]">
                LET&apos;S TALK.
              </span>
              <ArrowUpRight className="size-5 md:size-6 text-[#ff3b1f] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href={`mailto:${PROFILE.email}`}
              className="font-tech text-[14px] md:text-[15px] tracking-wide text-white/60 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
            >
              {PROFILE.email}
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 font-tech text-[11px] uppercase tracking-[0.18em] text-white/45 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-[#ff3b1f]" />
                  <span className="text-[#ff3b1f] font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3 text-white/40" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Clean Telemetry Panel (Zero Thread, Pure Systems Focus) */}
        <div className="lg:col-span-4 flex flex-col justify-end gap-6 text-white/60 font-tech">
          <div>
            <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#ff3b1f] font-semibold block mb-2">
              Focus &amp; Scope
            </span>
            <p className="text-[13.5px] leading-[1.7] text-white/70 max-w-sm">
              Custom hardware bring-ups, embedded Linux/Android device trees, and low-latency offline edge AI systems.
            </p>
          </div>

          <div className="pt-5 border-t border-white/[0.08] flex flex-col gap-2.5 text-[11.5px] uppercase tracking-[0.14em] text-white/45">
            <div className="flex items-center justify-between">
              <span>Location</span>
              <span className="text-white/80">{PROFILE.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Coordinates</span>
              <span className="text-white/80">13.0827° N, 80.2707° E</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Response</span>
              <span className="text-white/80">&lt; 24 Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= UNIFIED FINALE BOTTOM BAR */}
      <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-white/50 font-tech text-[11px] uppercase tracking-[0.16em]">
        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="size-3.5 text-[#ff3b1f] transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>

        {/* Socials */}
        <ul className="flex items-center gap-6">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center gap-1.5 text-white/45 hover:text-white transition-colors"
              >
                <Icon className="size-3.5" />
                <span className="hidden md:inline">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Telemetry / Copyright */}
        <div className="flex items-center gap-3 text-white/40">
          <span>{PROFILE.location}</span>
          <span className="text-white/20">·</span>
          <span>© {CURRENT_YEAR}</span>
        </div>
      </div>

      {/* ================= MINIMALIST CONTACT DIALOG */}
      {dialogOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-form-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Backdrop click dismiss */}
          <div
            className="absolute inset-0"
            onClick={() => setDialogOpen(false)}
          />

          <div className="relative z-10 w-full max-w-xl rounded-2xl border border-white/[0.12] bg-[#121212] p-8 sm:p-10 shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setDialogOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="size-5" />
            </button>

            {/* Dialog Intro */}
            <div className="mb-8">
              <h3
                id="contact-form-title"
                className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none"
              >
                LET&apos;S <span className="text-[#ff3b1f]">TALK.</span>
              </h3>
              <p className="mt-2 text-sm text-white/55 font-tech uppercase tracking-wider">
                A problem, an idea, a possibility.
              </p>
            </div>

            {/* Dialog Form */}
            <form onSubmit={handleSubmitForm} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-tech text-[10.5px] uppercase tracking-[0.16em] text-white/50 mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={80}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/[0.1] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-white/25 focus:border-[#ff3b1f] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-tech text-[10.5px] uppercase tracking-[0.16em] text-white/50 mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/[0.1] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-white/25 focus:border-[#ff3b1f] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-tech text-[10.5px] uppercase tracking-[0.16em] text-white/50 mb-2">
                  WHAT&apos;S ON YOUR MIND?
                </label>
                <textarea
                  required
                  rows={4}
                  maxLength={4000}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="A hardware/firmware challenge, bring-up, or collaboration idea."
                  className="w-full rounded-lg border border-white/[0.1] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-white/25 focus:border-[#ff3b1f] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff3b1f] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ff3b1f]/90 transition-all cursor-pointer shadow-lg shadow-[#ff3b1f]/20"
                >
                  <span>{sending ? "SENDING..." : "SEND MESSAGE"}</span>
                  <Send className="size-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-tech text-[11px] uppercase tracking-[0.16em] text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  Direct: {PROFILE.email}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
