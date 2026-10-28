/* Portfolio project data — GitHub repositories, LinkedIn recaps and Devpost (Oct 2026) */

import { SENTINELAI_SUBMISSION } from "@/data/profile";

export type Featured = {
  index: string;
  title: string;
  desc: string;
  tags: string;
  year: string;
  status: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

export type IndexRow = {
  name: string;
  desc: string;
  tech: string;
  year: string;
  href: string;
  live?: string;
  submission?: string;
};

export { GITHUB_PROFILE } from "@/data/profile";

export const FEATURED: Featured[] = [
  {
    index: "01",
    title: "Project Anemone",
    desc: "Smart marine co-pilot for small & medium-scale fishermen, powered by the ESP32-S3.",
    tags: "IoT · Embedded · Flutter",
    year: "2025",
    status: "Flagship",
    href: "https://github.com/StarDust-Git-Code/Project-Anemone",
    image: "/assets/projects/anemone.svg",
    imageAlt: "Conceptual sonar and telemetry artwork for Project Anemone, not a product screenshot",
  },
  {
    index: "02",
    title: "Lemihandle",
    desc: "AI-powered OS overlay with a claymorphic UI — control your computer with spatial gestures and voice.",
    tags: "AI · HCI · Desktop",
    year: "2026",
    status: "Flagship",
    href: "https://github.com/StarDust-Git-Code/lemihandle.exe",
    image: "/assets/projects/lemihandle.png",
    imageAlt: "Lemihandle claymorphic hero artwork",
  },
  {
    index: "03",
    title: "Fluxboard.AI",
    desc: "AI-assisted digital twin and breadboard simulator with sketch-to-wiring guidance and circuit analysis. Our team's 1st-place build at PIXEL.GEMINI.",
    tags: "IoT · Simulation · Gemini",
    year: "2026",
    status: "1st · PIXEL.GEMINI",
    href: "https://github.com/StarDust-Git-Code/FLUXBOARD.AI_PUBLIC",
    image: "/assets/projects/fluxboard.webp",
    imageAlt: "Fluxboard.AI repository banner showing a breadboard workspace and wiring map",
    imageFit: "contain",
  },
];

export const INDEX_ROWS: IndexRow[] = [
  {
    name: "Caelestia Shell · Ubuntu",
    desc: "Ubuntu 26.04 port with a resumable installer, 80+ dependencies and 12 source-built Hyprland components. Original shell by the Caelestia team.",
    tech: "Bash · Linux · Qt/QML",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/caelestia-shell-ubuntu_26",
  },
  {
    name: "Galaxy A35 · Evolution X",
    desc: "Android 16 GSI testing, device/vendor-tree bring-up and HAL debugging. In progress; fingerprint and microphone issues remain in the published logs.",
    tech: "AOSP · Linux · HAL",
    year: "2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7420800301407891456/",
  },
  {
    name: "Expert RAW · A35 research",
    desc: "APK decompilation, smali analysis and One UI compatibility checks. Ongoing research; a working RAW camera port is not claimed.",
    tech: "APKTool · Smali · Android",
    year: "2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7420136231415664640/",
  },
  {
    name: "MI Unlock · Windows",
    desc: "PowerShell port of RohitVerma882's termux-miunlock, bundling portable Java 17 and Android Platform Tools for a Windows workflow.",
    tech: "PowerShell · Fastboot",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/MI_UNLOCK_WITH_POWERSHELL",
  },
  {
    name: "GRASKILLS.AI",
    desc: "AI personal skill-growth planner. Our team placed 4th of 34 at PROMPT. TRAIN. PARTY, with a participation certificate.",
    tech: "AI · Learning tools",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/Graskills.ai",
  },
  {
    name: "Physiological Surveillance",
    desc: "Analog circuit and op-amp project exploring physiological monitoring.",
    tech: "Analog · Op-amps",
    year: "2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7434234792113651712/",
  },
  {
    name: "SentinelAI",
    desc: "2nd-place build at Gemini.exe 2.0. Multi-agent security auditing with Gemini, ChromaDB RAG and generated .patch fixes, with terminal and web interfaces.",
    tech: "Python · Gemini · RAG",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/sential.ai",
    submission: SENTINELAI_SUBMISSION,
  },
  {
    name: "Brain-Dots",
    desc: "Personal second-brain deployment of OpenDots — Vercel, Firebase, dual Render workers, NVIDIA NIM, mobile companion.",
    tech: "TypeScript · Monorepo",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/Brain-Dots",
    live: "https://brain-dots.vercel.app",
  },
  {
    name: "The Consensus",
    desc: "Multimodal Gemini simulation experience (Imagen, Lyria, Veo) — BYOK deep integration.",
    tech: "TypeScript · Gemini",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/the-consensus",
    live: "https://the-consensus-sepia.vercel.app",
  },
  {
    name: "routethala_driver",
    desc: "Flutter app streaming live bus-driver location to a telemetry server.",
    tech: "Dart · Kotlin",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/routethala_driver",
  },
  {
    name: "Galaxy AI for A35",
    desc: "Magisk modules porting One UI 8 Galaxy AI features & Live Blur to the Samsung Galaxy A35 5G.",
    tech: "Shell · Magisk",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/Galaxy-AI-A35-OneUI8",
  },
  {
    name: "Aura Fit",
    desc: "Flutter fitness companion with native C++ sensing layer.",
    tech: "Dart · C++ · Swift",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/Aura_Fit",
  },
  {
    name: "Safe Track + Dashboard",
    desc: "Safety-telemetry platform: app-side tracking and Vercel-hosted parent dashboard.",
    tech: "TypeScript",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code/vercel-safe_track-dashboard-parent",
  },
];
