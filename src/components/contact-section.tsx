"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { ArrowUpRight, ArrowUp, X, Send } from "lucide-react";
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

// Static year evaluated outside render cycle to avoid Next.js 16 dynamic prerender bailouts
const CURRENT_YEAR = 2026;

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const knotRef = useRef<SVGSVGElement>(null);

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

    // Create mailto fallback link with prefilled subject & body
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

  // Close modal on Escape
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

      // Subtle organic float animation for the tangled knot
      if (knotRef.current) {
        gsap.to(knotRef.current, {
          y: -14,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="min-h-svh flex flex-col justify-between border-t border-white/[0.08] px-[4.5vw] pt-16 pb-8 md:pt-24 md:pb-10 relative overflow-hidden"
    >
      {/* ================= STAGE — 50/50 SPLIT (Matching Daksh Gajjar) */}
      <div className="my-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        {/* Left Column: Monumental 4-Line Headline + Heroic CTA */}
        <div className="lg:col-span-7">
          <h2
            ref={headlineRef}
            id="contact-title"
            aria-label="Have a problem worth untangling?"
            className="font-sans font-black uppercase tracking-[-0.065em] leading-[0.88] text-white select-none text-[clamp(3rem,7.8vw,7.2rem)]"
          >
            <span className="contact-headline-line block will-change-transform">HAVE A</span>
            <span className="contact-headline-line block will-change-transform">PROBLEM</span>
            <span className="contact-headline-line block will-change-transform">WORTH</span>
            <span className="contact-headline-line block will-change-transform">
              UNTANGLING<span className="text-[#ff3b1f]">?</span>
            </span>
          </h2>

          {/* Decisive Heroic CTA Action */}
          <div className="mt-10 md:mt-14 flex flex-wrap items-baseline gap-8">
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

            <button
              type="button"
              onClick={handleCopyEmail}
              className="font-tech text-[11.5px] uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? (
                <span className="text-[#ff3b1f] font-semibold">✓ Copied</span>
              ) : (
                "Copy email"
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Vermilion Tangled Thread Knot */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Ambient vermilion glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#ff3b1f]/[0.08] blur-[90px]"
          />

          <svg
            ref={knotRef}
            className="w-full max-w-[420px] aspect-square overflow-visible select-none will-change-transform"
            viewBox="0 0 500 500"
            fill="none"
          >
            {/* Organic continuous vermilion knot spline */}
            <path
              d="M 250.0 10.0 C 308.3 10.0, 432.5 81.7, 450.0 140.0 C 467.5 198.3, 408.3 366.7, 350.0 390.0 C 291.7 413.3, 135.0 471.7, 100.0 425.0 C 65.0 378.3, 16.7 258.3, 40.0 200.0 C 63.3 141.7, 166.7 63.3, 225.0 75.0 C 283.3 86.7, 398.3 131.7, 410.0 190.0 C 421.7 248.3, 421.7 340.0, 375.0 375.0 C 328.3 410.0, 208.3 442.5, 150.0 425.0 C 91.7 407.5, 71.7 333.3, 60.0 275.0 C 48.3 216.7, 116.7 111.7, 175.0 100.0 C 233.3 88.3, 425.0 91.7, 425.0 150.0 C 425.0 208.3, 458.3 330.8, 400.0 360.0 C 341.7 389.2, 171.7 435.0, 125.0 400.0 C 78.3 365.0, 40.0 258.3, 75.0 200.0 C 110.0 141.7, 191.7 90.0, 250.0 90.0 C 308.3 90.0, 434.2 141.7, 440.0 200.0 C 445.8 258.3, 402.5 376.7, 350.0 400.0 C 297.5 423.3, 150.8 421.7, 110.0 375.0 C 69.2 328.3, 66.7 283.3, 90.0 225.0 C 113.3 166.7, 216.7 115.8, 275.0 110.0 C 333.3 104.2, 436.7 166.7, 425.0 225.0 C 413.3 283.3, 383.3 398.3, 325.0 410.0 C 266.7 421.7, 169.2 402.5, 140.0 350.0 C 110.8 297.5, 90.0 296.7, 125.0 250.0 C 160.0 203.3, 241.7 161.7, 300.0 150.0 C 358.3 138.3, 423.3 201.7, 400.0 260.0 C 376.7 318.3, 358.3 400.0, 300.0 400.0 C 241.7 400.0, 198.3 371.7, 175.0 325.0 C 151.7 278.3, 128.3 310.0, 175.0 275.0 C 221.7 240.0, 251.7 207.5, 310.0 190.0 C 368.3 172.5, 410.0 253.3, 375.0 300.0 C 340.0 346.7, 318.3 386.7, 260.0 375.0 C 201.7 363.3, 221.7 345.0, 210.0 310.0 C 198.3 275.0, 166.7 313.3, 225.0 290.0 C 283.3 266.7, 305.0 193.3, 340.0 240.0 C 375.0 286.7, 336.7 316.7, 290.0 340.0 C 243.3 363.3, 263.3 323.3, 240.0 300.0 C 216.7 276.7, 216.7 286.7, 275.0 275.0 C 333.3 263.3, 311.7 255.0, 300.0 290.0 C 320 380, 360 440, 360 470"
              stroke="#ff3b1f"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* End handle grip anchor */}
            <circle
              cx="360"
              cy="470"
              r="12"
              stroke="#ff3b1f"
              strokeWidth="2.2"
              fill="#0c0c0c"
              className="cursor-pointer transition-transform duration-200 hover:scale-125"
              onClick={() => setDialogOpen(true)}
            />
            <circle
              cx="360"
              cy="470"
              r="4"
              fill="#ff3b1f"
              className="pointer-events-none"
            />
          </svg>

          {/* Interactive grip label */}
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="group inline-flex items-center gap-1.5 font-tech text-[10px] uppercase tracking-[0.22em] text-white/50 hover:text-[#ff3b1f] transition-colors cursor-pointer"
            >
              <span>PULL TO UNTANGLE</span>
            </button>
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

      {/* ================= MINIMALIST CONTACT DIALOG (Matching Daksh Gajjar modal) */}
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
                  placeholder="A problem, an idea, or hardware/firmware challenge you're figuring out."
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
