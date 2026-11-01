"use client";

import { useRef } from "react";
import { Hero } from "@/components/hero";
import { DakshCapabilities } from "@/components/daksh-capabilities";
import { DakshProjects } from "@/components/daksh-projects";
import { DakshAbout } from "@/components/daksh-about";
import { DakshContact } from "@/components/daksh-contact";
import { DakshThread } from "@/components/daksh-thread";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex min-h-svh flex-col bg-[#050505]">
      {/* 1st Page / Hero Section — 100% Frozen & Untouched */}
      <Hero />

      {/* Downstream Replicated Daksh Gajjar Sections */}
      <div ref={containerRef} className="relative w-full">
        {/* Continuous 2.2px Vermilion Thread */}
        <DakshThread containerRef={containerRef} />

        {/* 1. Capabilities & Philosophy (Practice Intro + Dual Orbit) */}
        <DakshCapabilities />

        {/* 2. Project Worlds (Vertical Editorial Case Studies) */}
        <DakshProjects />

        {/* 3. Imprint Story (Human Imprint & Continuous Fingerprint Coil) */}
        <DakshAbout />

        {/* 4. Contact Finale (Have a problem worth untangling? Let's talk) */}
        <DakshContact />
      </div>
    </main>
  );
}
