"use client";

import { useRef } from "react";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SignalSpine } from "@/components/signal-spine";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex min-h-svh flex-col">
      <Hero />
      <div
        ref={containerRef}
        className="dark relative z-20 bg-[#0c0c0c] text-[#f4f4f4] transition-colors"
      >
        {/* Continuous Hardware Signal Bus (Scroll-Driven SVG Trace) */}
        <SignalSpine containerRef={containerRef} />

        {/* Transitional Curtain: Eased gradient threshold uniting light Hero (#e2e2e1) into obsidian (#0c0c0c) */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative z-10 -mt-px w-full overflow-hidden"
        >
          <div className="h-28 sm:h-36 md:h-48 w-full [background:linear-gradient(to_bottom,#e2e2e1_0%,#d5d4d1_16%,#8e8d89_42%,#3b3a38_68%,#181717_86%,#0c0c0c_100%)]" />
          {/* Subpixel blend hairline ensuring zero rendering seam artifact */}
          <div className="absolute inset-x-0 top-0 h-px bg-[#e2e2e1]" />
        </div>

        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  );
}
