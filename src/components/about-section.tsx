import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WordHighlightText } from "@/components/word-highlight-text";
import { ContributionGraph } from "@/components/contribution-graph";
import {
  RECOGNITION,
  SKILL_GROUPS,
  BUILD_NOTES,
  LINKEDIN_ACTIVITY,
} from "@/data/profile";

const HEADLINE =
  "I build where code meets circuits — connecting embedded systems, edge AI and Android.";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-foreground/10 px-[4.5vw] py-28 md:py-36">
      <ScrollReveal>
        <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-foreground/50">
          {"// About"}
        </span>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12">
        <ScrollReveal className="lg:col-span-7" delay={60}>
          <h2
            aria-label={HEADLINE}
            className="text-[clamp(1.9rem,3.6vw,3.4rem)] font-bold leading-[1.3] tracking-[-0.02em]"
          >
            <WordHighlightText text={HEADLINE} />
          </h2>
          <p className="mt-8 max-w-[42rem] text-[15.5px] leading-[1.85] text-foreground/65 [text-wrap:pretty]">
            I&apos;m a builder based in Chennai. My work
            spans ESP32-based IoT, AI agents, Android system development and Linux
            tooling. I enjoy understanding how software and hardware fit together,
            then making that understanding useful through hands-on projects.
          </p>
          <p className="mt-5 max-w-[42rem] text-[15.5px] leading-[1.85] text-foreground/65 [text-wrap:pretty]">
            From porting Caelestia Shell to Ubuntu to documenting the Galaxy A35
            bring-up, I share the debugging, trade-offs and unfinished parts—not
            just the final screenshot. I&apos;m also building my startup, STARBASE,
            and exploring offline-first intelligence at the edge.
          </p>
          <a
            href={LINKEDIN_ACTIVITY}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-foreground/75 underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-foreground"
          >
            Follow my build notes on LinkedIn
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-5" delay={140}>
          <aside aria-label="Recognition" className="border-t border-foreground/10 pt-6">
            <h3 className="text-[15px] font-semibold">Recognition</h3>
            <ul className="mt-3 divide-y divide-foreground/10">
              {RECOGNITION.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex gap-5 py-5"
                  >
                    <span
                      className={`w-16 shrink-0 text-[30px] font-extrabold leading-none tracking-[-0.04em] ${item.highlight ? "text-heat" : "text-foreground/65"}`}
                    >
                      {item.result}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold group-hover:underline group-hover:underline-offset-4">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[12px] leading-[1.6] text-foreground/65">
                        {item.event}
                      </p>
                      <p className="mt-1 text-[11.5px] leading-[1.6] text-foreground/50">
                        {item.detail}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="ml-auto size-3.5 shrink-0 text-foreground/40"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[11px] leading-[1.6] text-foreground/50">
              Project details and event recaps linked above.
            </p>
          </aside>
        </ScrollReveal>
      </div>

      <div className="mt-20 border-t border-foreground/10 pt-8">
        <h3 className="text-[18px] font-semibold tracking-[-0.02em]">Tools I work with</h3>
        <div className="mt-7 grid gap-8 md:grid-cols-3 md:gap-12">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-[13px] font-semibold">{group.title}</h4>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2.5 text-[12.5px] leading-[1.6] text-foreground/60">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-foreground/10 pt-8">
        <h3 className="text-[18px] font-semibold tracking-[-0.02em]">From the workbench</h3>
        <p className="mt-2 text-[13px] text-foreground/55">
          Personal projects and development notes from my workbench.
        </p>
        <div className="mt-7 grid gap-10 md:grid-cols-2 md:gap-16">
          {BUILD_NOTES.map((note) => (
            <article key={note.title}>
              <p className="font-tech text-[11px] text-foreground/50">
                {note.status}
              </p>
              <h4 className="mt-2 text-[17px] font-semibold tracking-[-0.02em]">
                {note.title}
              </h4>
              <p className="mt-3 max-w-[60ch] text-[13px] leading-[1.8] text-foreground/60">
                {note.description}
              </p>
              <a
                href={note.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground"
              >
                {note.linkLabel}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>

      <ContributionGraph username="StarDust-Git-Code" />
    </section>
  );
}
