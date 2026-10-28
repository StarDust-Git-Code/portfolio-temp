import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
