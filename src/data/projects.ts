/* Portfolio project data — GitHub repositories, LinkedIn recaps and Devpost (Oct 2026) */

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
    title: "Fluxboard.AI",
    desc: "A collaborative canvas with Gemini-powered vision agents that inspect your workspace and sketch ideas in real time. Built for low-latency multi-user sync and awarded 1st Place overall (14.80/15) at MLH PIXEL.GEMINI 2026.",
    tags: "Next.js · Gemini Vision · AI Agents · Real-time Sync",
    year: "2026",
    status: "1st Place Winner",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7436599170284552192/",
    image: "/assets/projects/fluxboard.webp",
    imageAlt: "Fluxboard.AI collaborative canvas interface and visual reasoning system",
    imageFit: "cover",
  },
  {
    index: "02",
    title: "SentinelAI",
    desc: "Autonomous aerial hazard detection running Google Cloud and Gemini on edge-streamed drone video feeds for instant situational alerts. Won Best Use of Google APIs at MLH Gemini.exe 2.0.",
    tags: "Edge AI · Google Cloud · Computer Vision · Drone Telemetry",
    year: "2026",
    status: "Best Google API",
    href: "https://devpost.com/software/sentinelai-n9y6fe",
    image: "/assets/projects/sentai.jpg",
    imageAlt: "SentinelAI edge aerial surveillance telemetry and hazard classification dashboard",
    imageFit: "cover",
  },
  {
    index: "03",
    title: "Custom OpenDots",
    desc: "My customized AI wearable companion and personal second brain. Captures ambient audio, runs local speech processing, and searches vector memories through a self-hosted PWA.",
    tags: "Wearable AI · Edge DSP · Vector Search · Mobile PWA",
    year: "2025",
    status: "AI Wearable",
    href: "https://brain-dots.vercel.app",
    image: "/assets/projects/brain-dots.jpg",
    imageAlt: "Custom OpenDots AI wearable companion and hosted personal knowledge system",
    imageFit: "cover",
  },
  {
    index: "04",
    title: "PawTech IoT",
    desc: "Connected pet care hardware controller with custom ESP32 firmware, BLE mesh device discovery, offline telemetry caching, and a companion Flutter dashboard.",
    tags: "ESP32 · Flutter · BLE Mesh · Hardware",
    year: "2025",
    status: "IoT Hardware",
    href: "https://github.com/StarDust-Git-Code",
    image: "/assets/projects/lemihandle.png",
    imageAlt: "PawTech smart hardware controller and telemetry device",
    imageFit: "cover",
  },
];

export const INDEX_ROWS: IndexRow[] = [
  {
    name: "Galaxy A35 / Evolution X",
    desc: "Android 16 GSI device tree bring-up on Samsung Exynos. Vendor blob extraction, 120Hz display, and cellular/GPS bootchain.",
    tech: "AOSP · Android 16 · Device Tree",
    year: "2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7420800301407891456/",
    submission: "Bring-up Log",
  },
  {
    name: "GRASKILLS.AI",
    desc: "Multimodal knowledge graph agent with automated vector classification and dynamic reasoning workflows. 4th Place out of 34 teams.",
    tech: "Gemini · FastAPI · Vector DB",
    year: "2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7434195127780388864/",
    submission: "MLH 4th Place",
  },
  {
    name: "Fluxboard.AI Canvas Engine",
    desc: "Real-time state synchronization engine and canvas drawing surface connecting Gemini vision agents with collaborative multi-user state.",
    tech: "Next.js · WebSockets · Canvas API",
    year: "2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7436599170284552192/",
    submission: "MLH 1st Place",
  },
  {
    name: "SentinelAI Vision Pipeline",
    desc: "Edge-to-cloud aerial drone telemetry pipeline using Gemini and Google Cloud Vision for zero-latency hazard triage.",
    tech: "Python · Google Cloud · OpenCV",
    year: "2026",
    href: "https://devpost.com/software/sentinelai-n9y6fe",
    submission: "Best Google API",
  },
  {
    name: "Custom OpenDots PWA",
    desc: "Mobile companion application and personal memory vault interfacing with wearable microphones and vector embeddings.",
    tech: "Next.js · PWA · Vector DB",
    year: "2025",
    href: "https://brain-dots.vercel.app",
    live: "https://brain-dots.vercel.app",
  },
  {
    name: "PawTech ESP32 Firmware",
    desc: "Embedded C++ firmware for stepper motor calibration, food weight load-cell telemetry, and BLE pairing protocols.",
    tech: "C++ · ESP32 · FreeRTOS",
    year: "2025",
    href: "https://github.com/StarDust-Git-Code",
  },
];
