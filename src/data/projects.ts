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
    title: "Paw-tech",
    desc: "The challenge was that users struggled to find essential features on the mobile app, leading to frustration and drop-offs. The navigation was cluttered, and key actions were buried, which made the app feel unintuitive.",
    tags: "Mobile App · Design System · Hardware",
    year: "2024",
    status: "Case Study",
    href: "#",
    image: "/assets/projects/mock-pawtech.svg",
    imageAlt: "Paw-tech 3D studio render canister with 000 typography",
    imageFit: "cover",
  },
  {
    index: "02",
    title: "Kroma Sound Deck",
    desc: "A tactile acoustic workstation engineered for rapid music production and DSP experimentation. Features low-latency audio processing, precision optical encoders, and custom Linux kernel tuning.",
    tags: "Audio DSP · Embedded Linux · Hardware",
    year: "2025",
    status: "Hardware Deck",
    href: "#",
    image: "/assets/projects/mock-kroma.svg",
    imageAlt: "Kroma Sound Workstation tactile interface with real-time waveform display",
    imageFit: "cover",
  },
  {
    index: "03",
    title: "Aether Spatial Engine",
    desc: "Zero-latency spatial interaction layer integrating real-time neural computer vision, 3D hand tracking, and offline model execution directly on edge silicon.",
    tags: "Computer Vision · Edge AI · Spatial HCI",
    year: "2026",
    status: "Spatial OS",
    href: "#",
    image: "/assets/projects/mock-spatial.svg",
    imageAlt: "Aether Spatial Computing telemetry HUD and gyroscopic tracking grid",
    imageFit: "cover",
  },
];

export const INDEX_ROWS: IndexRow[] = [
  {
    name: "Vesper OS · Microkernel",
    desc: "Minimalist capability-based microkernel with real-time scheduling and memory protection.",
    tech: "Rust · Microkernel · RISC-V",
    year: "2026",
    href: "#",
  },
  {
    name: "Prism Matrix · Neural Engine",
    desc: "Quantized tensor inference engine running ultra-low precision matrix multiplication on edge silicon.",
    tech: "C++ · CUDA · TensorRT",
    year: "2026",
    href: "#",
    live: "https://example.com",
  },
  {
    name: "AeroLink · Telemetry Hub",
    desc: "Long-range LoRa mesh networking hub with GPS waypoint telemetry and offline map caching.",
    tech: "ESP32 · LoRa · Flutter",
    year: "2025",
    href: "#",
  },
  {
    name: "Echo Shell · Minimalist TUI",
    desc: "Keyboard-driven terminal workspace environment with live telemetry widgets and tmux integration.",
    tech: "Go · Linux · Terminal",
    year: "2025",
    href: "#",
  },
  {
    name: "Atlas · Sensor Mesh Node",
    desc: "Solar-powered environmental telemetry beacon with 10-year field battery endurance.",
    tech: "C · FreeRTOS · Mesh",
    year: "2025",
    href: "#",
  },
  {
    name: "Zenith · Kinematics Engine",
    desc: "Inverse kinematics solver for 6-DoF robotic arms with real-time obstacle avoidance.",
    tech: "Python · ROS2 · SLAM",
    year: "2024",
    href: "#",
  },
];
