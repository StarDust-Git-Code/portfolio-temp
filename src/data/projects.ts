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
    desc: "Intelligent multimodal workspace uniting real-time generative agents, visual reasoning, and collaborative low-latency state synchronization. Awarded 1st Place overall (14.80/15) in the MLH 2026 PIXEL.GEMINI season.",
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
    desc: "Edge-computed aerial surveillance and hazard telemetry engine. Deploys Google Cloud and Gemini for real-time computer vision classification, autonomous drone pathing, and zero-latency situational reporting.",
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
    desc: "Personalized AI wearable companion and hosted second-brain system. Integrates ambient audio capture with edge speech DSP, high-dimensional vector retrieval, and private cloud synchronization.",
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
    desc: "Connected pet care hardware ecosystem pairing custom ESP32 telemetry units with a reactive mobile dashboard. Delivers precision dispensing, BLE mesh discovery, and offline telemetry caching.",
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
    desc: "Android 16 GSI device tree bring-up with 120Hz display, vendor extraction, and working cellular/GPS bootchain.",
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
    name: "Vesper OS · Microkernel",
    desc: "Minimalist capability-based microkernel with real-time scheduling, memory isolation, and RISC-V hardware support.",
    tech: "Rust · Microkernel · RISC-V",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code",
  },
  {
    name: "Prism Matrix · Neural Engine",
    desc: "Quantized tensor inference engine running ultra-low precision matrix multiplication directly on edge silicon.",
    tech: "C++ · CUDA · TensorRT",
    year: "2026",
    href: "https://github.com/StarDust-Git-Code",
    live: "https://github.com/StarDust-Git-Code",
  },
  {
    name: "AeroLink · Telemetry Hub",
    desc: "Long-range LoRa mesh networking telemetry hub with GPS waypoint tracking and offline map caching.",
    tech: "ESP32 · LoRa · Flutter",
    year: "2025",
    href: "https://github.com/StarDust-Git-Code",
  },
  {
    name: "Atlas · Sensor Mesh Node",
    desc: "Solar-powered environmental telemetry beacon with ultra-low sleep draw and multi-year field battery endurance.",
    tech: "C · FreeRTOS · BLE Mesh",
    year: "2025",
    href: "https://github.com/StarDust-Git-Code",
  },
  {
    name: "Echo Shell · Minimalist TUI",
    desc: "Keyboard-driven terminal workspace environment with live system telemetry widgets and tmux integration.",
    tech: "Go · Linux · Terminal",
    year: "2025",
    href: "https://github.com/StarDust-Git-Code",
  },
];
