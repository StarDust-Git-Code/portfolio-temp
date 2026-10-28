"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IaMark } from "@/components/ia-mark";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { GITHUB_PROFILE, LINKEDIN_PROFILE } from "@/data/profile";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIALS = [
  { label: "GitHub", href: GITHUB_PROFILE, Icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_PROFILE, Icon: FaLinkedinIn },
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
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className="transition-all duration-300"
    >
      {/* top bar */}
      <line
        x1="3"
        y1={open ? "11" : "7"}
        x2="19"
        y2={open ? "11" : "7"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="transition-all duration-300"
        style={{
          transform: open ? "rotate(45deg)" : "none",
          transformOrigin: "center",
        }}
      />
      {/* mid bar */}
      <line
        x1="3"
        y1="11"
        x2="19"
        y2="11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="transition-all duration-300"
        style={{ opacity: open ? 0 : 1 }}
      />
      {/* bottom bar */}
      <line
        x1="3"
        y1={open ? "11" : "15"}
        x2="19"
        y2={open ? "11" : "15"}
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
  const [active, setActive] = useState<string>("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Scroll-spy via section offsets
    const onScroll = () => {
      const ids = NAV_ITEMS.map((i) => i.href.slice(1));
      let current = "Home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          current =
            NAV_ITEMS.find((i) => i.href === `#${id}`)?.label ?? current;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />

      {/* Soft blended fade + blur across the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-44 backdrop-blur-2xl backdrop-saturate-[1.05]"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.35) 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.35) 70%, transparent 100%)",
          backgroundColor:
            "color-mix(in srgb, var(--background) 70%, transparent)",
        }}
      />

      <header
        data-reveal
        className="fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-[4vw] py-6"
      >
        {/* Brand */}
        <Link
          href="#home"
          className="group flex items-center gap-2.5 justify-self-start"
          aria-label="Irshad Ahamed — home"
        >
          <IaMark className="size-6 text-foreground transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          <span className="whitespace-nowrap text-[13px] font-semibold tracking-[0.22em] uppercase">
            Irshad Ahamed
          </span>
        </Link>

        {/* Desktop Nav — stays optically centered */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={active === item.label ? "page" : undefined}
              data-current={active === item.label}
              className="group relative text-[15px] text-foreground/75 transition-colors duration-300 hover:text-foreground data-[current=true]:font-semibold data-[current=true]:text-foreground"
            >
              {item.label}
              {/* active dot */}
              <span
                aria-hidden="true"
                data-current={active === item.label}
                className={`absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 size-[5px] rounded-full bg-foreground transition-all duration-300 ${
                  active === item.label
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right slot — desktop spacer / mobile hamburger */}
        <div className="justify-self-end">
          {/* Desktop: optical centering spacer */}
          <span aria-hidden="true" className="hidden md:inline" />

          {/* Mobile: Sheet hamburger */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  className="flex items-center justify-center size-9 rounded-full border border-foreground/15 bg-background/60 text-foreground transition-all duration-300 hover:border-foreground/40"
                >
                  <HamburgerIcon open={mobileOpen} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                showCloseButton={false}
                className="w-full sm:max-w-xs border-l border-foreground/10 bg-background px-0 pt-0"
              >
                {/* Sheet header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-foreground/10">
                  <Link
                    href="#home"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5"
                    aria-label="Irshad Ahamed — home"
                  >
                    <IaMark className="size-5 text-foreground" />
                    <span className="text-[12px] font-semibold tracking-[0.22em] uppercase">
                      Irshad Ahamed
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <button
                      aria-label="Close menu"
                      className="flex items-center justify-center size-9 rounded-full border border-foreground/15 bg-background text-foreground transition-all hover:border-foreground/40"
                    >
                      <HamburgerIcon open={true} />
                    </button>
                  </SheetClose>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col px-6 pt-8" aria-label="Mobile primary">
                  {NAV_ITEMS.map((item, i) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between border-b border-foreground/8 py-5"
                        style={{ animationDelay: `${i * 60}ms` }}
                      >
                        <span
                          className={`text-[28px] font-extrabold tracking-[-0.03em] transition-colors duration-200 ${
                            active === item.label
                              ? "text-foreground"
                              : "text-foreground/40 group-hover:text-foreground"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="font-tech text-[11px] uppercase tracking-[0.18em] text-foreground/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Social links at bottom */}
                <div className="absolute bottom-10 left-6 flex flex-col gap-4">
                  <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-foreground/35">
                    {"// Find me"}
                  </span>
                  <div className="flex items-center gap-4">
                    {SOCIALS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="flex items-center gap-2 text-[13px] text-foreground/55 transition-colors hover:text-foreground"
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
