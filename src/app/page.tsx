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

        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  );
}
