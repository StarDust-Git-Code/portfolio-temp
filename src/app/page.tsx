import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col bg-[#e2e2e1]">
      {/* Global Fixed Navigation */}
      <SiteHeader />

      {/* Light Studio Hero Card */}
      <Hero />

      {/* Deep Black Alexfolio Theme — Sections from Dribbble Reference */}
      <div className="relative dark bg-[#0e0e0e] text-[#eceae7]">
        {/* Subtle Alexfolio watermark across dark sections */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden select-none opacity-[0.035]"
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center">
            <span className="font-black text-[22vw] uppercase tracking-[-0.05em] text-white whitespace-nowrap leading-none">
              IRSHAD AHAMED
            </span>
          </div>
        </div>

        <div className="relative z-10">
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
