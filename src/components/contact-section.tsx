import { ArrowUpRight, MapPin } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeadingReveal } from "@/components/heading-reveal";
import { LINKEDIN_PROFILE, PROFILE } from "@/data/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-foreground/10 px-[4.5vw] py-28 md:py-36"
    >
      <ScrollReveal>
        <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-foreground/50">
          {"// Contact"}
        </span>
      </ScrollReveal>

      <HeadingReveal
        text="Let's build something that matters."
        type="words"
        className="mt-10"
        headingClassName="max-w-[18ch] text-[clamp(2.6rem,7vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.03em] [text-wrap:balance]"
      />

      <ScrollReveal delay={120}>
        <p className="mt-8 max-w-[48ch] text-[14px] leading-[1.8] text-foreground/60">
          Have an idea involving hardware, intelligent systems or useful software?
          Let&apos;s start a conversation on LinkedIn.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={LINKEDIN_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-[14px] font-medium text-background transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <FaLinkedinIn className="size-4" aria-hidden="true" />
            Connect on LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={180}>
        <p className="mt-10 flex items-center gap-2.5 text-[13px] text-foreground/50">
          <MapPin className="size-3.5" aria-hidden="true" />
          {PROFILE.location}
        </p>
      </ScrollReveal>
    </section>
  );
}
