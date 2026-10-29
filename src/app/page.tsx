import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col">
      <Hero />
      <div className="dark relative z-20 bg-[#0c0c0c] text-[#f4f4f4] transition-colors">
        {/* Subtle Alexfolio typography watermark floating in dark canvas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        >
          <span className="absolute top-[4%] -left-[6vw] font-black uppercase tracking-[-0.05em] text-white/[0.02] leading-none whitespace-nowrap text-[clamp(7rem,20vw,20rem)]">
            IRSHAD
          </span>
          <span className="absolute top-[34%] -right-[8vw] font-black uppercase tracking-[-0.05em] text-white/[0.02] leading-none whitespace-nowrap text-[clamp(7rem,20vw,20rem)]">
            AHAMED
          </span>
          <span className="absolute top-[68%] -left-[6vw] font-black uppercase tracking-[-0.05em] text-white/[0.02] leading-none whitespace-nowrap text-[clamp(7rem,20vw,20rem)]">
            BUILDER
          </span>
        </div>

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
