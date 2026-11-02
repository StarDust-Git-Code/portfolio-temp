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
    desc: "Real-time visual canvas pairing Gemini vision reasoning with low-latency agent collaboration. Awarded 1st Place overall (14.80/15) at MLH 2026 PIXEL.GEMINI.",
    tags: "Next.js · Gemini Vision · AI Agents · Real-time Sync",
    year: "2026",
    status: "1st Place Winner",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7436599170284552192/",
    image: "/assets/projects/fluxboard.webp",
    imageAlt: "Fluxboard.AI multimodal collaborative canvas interface and visual reasoning system",
    imageFit: "cover",
  },
  {
    index: "02",
    title: "SentinelAI",
    desc: "Edge aerial surveillance engine with onboard computer vision and Gemini for real-time hazard detection and situational telemetry. Awarded Best Use of Google APIs at MLH Gemini.exe.",
    tags: "Edge AI · Google Cloud · Computer Vision · Telemetry",
    year: "2026",
    status: "2nd Place Winner",
    href: "https://devpost.com/software/sentinelai-n9y6fe",
    image: "/assets/projects/sentai.jpg",
    imageAlt: "SentinelAI edge aerial surveillance telemetry and hazard classification dashboard",
    imageFit: "cover",
  },
  {
    index: "03",
    title: "Custom OpenDots",
    desc: "Wearable ambient audio companion pairing low-power DSP with high-dimensional vector search and self-hosted personal memory.",
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
    desc: "Connected hardware ecosystem pairing custom ESP32 telemetry units with BLE mesh discovery and offline sensor caching.",
    tags: "ESP32 · Flutter · BLE Telemetry · Cloud IoT",
    year: "2025",
    status: "IoT Hardware",
    href: "https://github.com/StarDust-Git-Code",
    image: "/assets/projects/lemihandle.png",
    imageAlt: "PawTech smart hardware controller and ergonomic telemetry device",
    imageFit: "cover",
  },
];

export const INDEX_ROWS: IndexRow[] = [
  {
    name: "Galaxy A35 / Evolution X",
    desc: "Android 16 GSI device tree bring-up with 120Hz display, vendor blob extraction, and working cellular/GPS bootchain.",
    tech: "AOSP · Android 16 · Device Tree",
    year: "2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7420800301407891456/",
    submission: "Bring-up Log",
  },
  {
    name: "GRASKILLS.AI · Knowledge Graph",
    desc: "Multimodal AI knowledge graph agent with automated vector classification and dynamic reasoning workflows.",
    tech: "Gemini · FastAPI · Vector DB",
    year: "2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7434195127780388864/",
    submission: "MLH 4th Place",
  },
  {
    name: "Fluxboard.AI · Collaborative Canvas",
    desc: "Low-latency collaborative board with Gemini vision reasoning and live canvas state sync across connected clients.",
    tech: "Next.js · Gemini Vision · WebSocket",
    year: "2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7436599170284552192/",
    live: "https://github.com/StarDust-Git-Code",
    submission: "MLH 1st Place",
  },
  {
    name: "SentinelAI · Edge Drone Telemetry",
    desc: "Onboard vision telemetry for autonomous drones with real-time hazard identification and emergency dispatch mapping.",
    tech: "Python · Google Cloud · Edge Vision",
    year: "2026",
    href: "https://devpost.com/software/sentinelai-n9y6fe",
    submission: "Google APIs Winner",
  },
  {
    name: "Custom OpenDots · Ambient AI",
    desc: "Open hardware audio companion recording daily context into an encrypted vector database with instant recall.",
    tech: "DSP · Vector Embeddings · PWA",
    year: "2025",
    href: "https://brain-dots.vercel.app",
    live: "https://brain-dots.vercel.app",
    submission: "Live Companion",
  },
  {
    name: "PawTech IoT · BLE Dispenser",
    desc: "Low-power microcontroller firmware handling scheduled dispensing, BLE mesh discovery, and local flash logs.",
    tech: "ESP32 · FreeRTOS · Flutter",
    year: "2025",
    href: "https://github.com/StarDust-Git-Code",
    submission: "Hardware Prototype",
  },
];
