import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PROFILE, GITHUB_PROFILE, LINKEDIN_PROFILE } from "@/data/profile";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0c0c",
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PROFILE.title,
  description: PROFILE.description,
  keywords: [
    "Irshad Ahamed",
    "portfolio",
    "AI",
    "embedded systems",
    "IoT",
    "robotics",
    "digital products",
    "edge AI",
    "Android",
    "Linux",
    "Chennai",
  ],
  authors: [{ name: "Irshad Ahamed" }],
  openGraph: {
    title: PROFILE.title,
    description: PROFILE.description,
    type: "website",
    url: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Irshad Ahamed",
  url: SITE_URL,
  sameAs: [GITHUB_PROFILE, LINKEDIN_PROFILE],
  jobTitle: "Embedded Systems & Edge AI Engineer",
  description: PROFILE.description,
  knowsAbout: [
    "Embedded Systems",
    "Edge AI",
    "IoT",
    "Android",
    "Linux",
    "Robotics",
    "Computer Vision",
    "ESP32",
    "Raspberry Pi",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <TooltipProvider delayDuration={200}>
          <SmoothScroll>{children}</SmoothScroll>
        </TooltipProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
