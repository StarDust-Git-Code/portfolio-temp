"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LINKEDIN_PROFILE, GITHUB_PROFILE, PROFILE } from "@/data/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-[4.5vw] py-28 md:py-36"
    >
      <ScrollReveal>
        <div className="rounded-[28px] border border-white/10 bg-[#141414] p-8 md:p-14 lg:p-16 shadow-2xl">
          <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-heat font-semibold">
            {"// Contact"}
          </span>

          <h2 className="mt-6 max-w-[18ch] text-[clamp(2.6rem,6.5vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em] text-white [text-wrap:balance]">
            Let&apos;s build something <span className="text-heat">distinctive</span>.
          </h2>

          <div className="mt-8 max-w-[52ch]">
            <p className="text-[15.5px] leading-[1.8] text-white/70">
              Have an idea involving custom hardware, low-level Linux/Android, or offline edge AI?
              I&apos;m always open to discussing new collaborations, bring-ups, and ventures.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-black transition-transform duration-200 hover:scale-[1.03] hover:bg-white/90"
              >
                <FaLinkedinIn className="size-4" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="size-4" />
              </a>

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

            <p className="mt-12 flex items-center gap-2 text-[13px] text-white/50 font-tech">
              <MapPin className="size-3.5 text-heat" />
              {PROFILE.location}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
