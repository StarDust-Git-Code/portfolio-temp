"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { StarLogo } from "@/components/star-logo";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TWITTER_PROFILE,
  INSTAGRAM_PROFILE,
} from "@/data/profile";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIALS = [
  { label: "GitHub", href: GITHUB_PROFILE, Icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_PROFILE, Icon: FaLinkedinIn },
  { label: "Twitter", href: TWITTER_PROFILE, Icon: FaXTwitter },
  { label: "Instagram", href: INSTAGRAM_PROFILE, Icon: FaInstagram },
] as const;

/** 1px scroll-progress hairline riding the very top edge */
function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
    >
      <div
        ref={ref}
        className="h-full w-full origin-left scale-x-0 bg-foreground/70 transition-transform duration-75 ease-linear"
      />
    </div>
  );
}

/** Hamburger icon — morphs to X when open */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="transition-all duration-300"
    >
      <line
        x1="2"
        y1={open ? "10" : "6"}
        x2="18"
        y2={open ? "10" : "6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="transition-all duration-300"
        style={{
          transform: open ? "rotate(45deg)" : "none",
          transformOrigin: "center",
        }}
      />
      <line
        x1="2"
        y1="10"
        x2="18"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="transition-all duration-300"
        style={{ opacity: open ? 0 : 1 }}
      />
      <line
        x1="2"
        y1={open ? "10" : "14"}
        x2="18"
        y2={open ? "10" : "14"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="transition-all duration-300"
        style={{
          transform: open ? "rotate(-45deg)" : "none",
          transformOrigin: "center",
        }}
      />
    </svg>
  );
}

export function SiteHeader() {
  const [active, setActive] = useState<string>("About");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Determine if scrolled past hero into dark sections
      setIsOverDark(window.scrollY > window.innerHeight * 0.75);

      const ids = NAV_ITEMS.map((i) => i.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          current = NAV_ITEMS.find((i) => i.href === `#${id}`)?.label ?? current;
        }
      }
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />

      {/* Soft blended fade across top */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-32 backdrop-blur-md transition-colors duration-500 ${
          isOverDark ? "bg-[#0c0c0c]/70" : "bg-transparent"
        }`}
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 40%, transparent 100%)",
        }}
      />

      <header className="fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-[4.5vw] py-6 transition-colors duration-300">
        {/* Brand */}
        <Link
          href="#home"
          className="group flex items-center gap-2.5 justify-self-start"
          aria-label="Irshad Ahamed — home"
        >
          <StarLogo
            className={`size-4.5 transition-all duration-500 group-hover:rotate-45 ${
              isOverDark ? "text-white" : "text-foreground"
            }`}
          />
          <span
            className={`whitespace-nowrap text-[13px] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 ${
              isOverDark ? "text-white" : "text-foreground"
            }`}
          >
            Irshad Ahamed
          </span>
        </Link>

        {/* Center Nav — Alexfolio style */}
        <nav
          className="hidden md:flex items-center gap-9"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={active === item.label ? "page" : undefined}
              data-current={active === item.label}
              className={`group relative flex flex-col items-center text-[14px] transition-colors duration-200 ${
                isOverDark
                  ? active === item.label
                    ? "font-medium text-white"
                    : "text-white/65 hover:text-white"
                  : active === item.label
                  ? "font-medium text-foreground"
                  : "text-foreground/75 hover:text-foreground"
              }`}
            >
              <span>{item.label}</span>
              <span
                aria-hidden="true"
                className={`mt-1 size-1 rounded-full transition-all duration-300 ${
                  isOverDark ? "bg-white" : "bg-foreground"
                } ${
                  active === item.label ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="justify-self-end">
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors group ${
              isOverDark ? "text-white/75 hover:text-white" : "text-foreground/75 hover:text-foreground"
            }`}
          >
            <span>Get in touch</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  className={`flex size-9 items-center justify-center rounded-full border transition-all duration-200 ${
                    isOverDark
                      ? "border-white/20 bg-[#141414] text-white hover:border-white/50"
                      : "border-foreground/15 bg-background/70 text-foreground hover:border-foreground/40"
                  }`}
                >
                  <HamburgerIcon open={mobileOpen} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                showCloseButton={false}
                className="w-full sm:max-w-xs border-l border-white/10 bg-[#0e0e0e] text-white px-0 pt-0"
              >
                <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                  <Link
                    href="#home"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5"
                    aria-label="Irshad Ahamed — home"
                  >
                    <StarLogo className="size-4.5 text-white" />
                    <span className="text-[12px] font-semibold tracking-[0.16em] uppercase text-white">
                      Irshad Ahamed
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <button
                      aria-label="Close menu"
                      className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-[#141414] text-white"
                    >
                      <HamburgerIcon open={true} />
                    </button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col px-6 pt-8" aria-label="Mobile primary">
                  {NAV_ITEMS.map((item, i) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between border-b border-white/8 py-5"
                      >
                        <span
                          className={`text-[28px] font-extrabold tracking-[-0.03em] ${
                            active === item.label
                              ? "text-white"
                              : "text-white/40 group-hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="font-tech text-[11px] uppercase tracking-[0.18em] text-white/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="absolute bottom-10 left-6 flex flex-col gap-4">
                  <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {"// Social"}
                  </span>
                  <div className="flex items-center gap-4">
                    {SOCIALS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="flex items-center gap-2 text-[13px] text-white/60 transition-colors hover:text-white"
                      >
                        <Icon className="size-4" aria-hidden="true" />
                        <span>{label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
