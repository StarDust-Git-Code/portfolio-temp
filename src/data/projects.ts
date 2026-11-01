/* Portfolio project data — GitHub repositories, LinkedIn recaps and Devpost (Oct 2026) */

export type InteractiveMode = {
  id: string;
  label: string;
  badge: string;
  headline: string;
  metricLabel: string;
  metricValue: string;
  specs: { key: string; val: string }[];
  diagramLabel: string;
  diagramValue: string;
};

export type DecisionTriad = {
  constraint: string;
  decision: string;
  result: string;
};

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
  modes: [InteractiveMode, InteractiveMode];
  decisionTriad: DecisionTriad;
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
    modes: [
      {
        id: "vision-agent",
        label: "VISION AGENT",
        badge: "GEMINI 2.0 FLASH",
        headline: "Multimodal visual reasoning & workspace perception",
        metricLabel: "INFERENCE TIME",
        metricValue: "340ms",
        specs: [
          { key: "Model", val: "Gemini 2.0 Flash" },
          { key: "Frame Buffer", val: "1080p Canvas Stream" },
          { key: "Spatial Grid", val: "Bilinear Tensor Norm" },
        ],
        diagramLabel: "PIPELINE",
        diagramValue: "Canvas Snapshot → Token Stream → Agent Action",
      },
      {
        id: "realtime-sync",
        label: "REAL-TIME SYNC",
        badge: "WEBSOCKETS · 60FPS",
        headline: "Subpixel delta reconciliation for collaborative sketching",
        metricLabel: "STATE LATENCY",
        metricValue: "18ms",
        specs: [
          { key: "Protocol", val: "Binary WebSocket Frames" },
          { key: "Resolution", val: "Subpixel Bezier Sync" },
          { key: "Sync Topology", val: "Full-duplex Multi-peer" },
        ],
        diagramLabel: "DISPATCH",
        diagramValue: "Pointer Move → Delta Patch → Peer Broadcast",
      },
    ],
    decisionTriad: {
      constraint:
        "Continuous high-resolution canvas snapshots saturated multimodal token limits and caused stroke lag during live sketching.",
      decision:
        "Decoupled rendering into an 18ms binary delta sync bus while routing throttled keyframes to Gemini 2.0 Flash in background Web Workers.",
      result:
        "1st Place overall (14.80/15) at MLH PIXEL.GEMINI with sub-second agent drawing response.",
    },
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
    modes: [
      {
        id: "edge-silicon",
        label: "EDGE SILICON",
        badge: "LOCAL ON-DRONE",
        headline: "Zero-latency autonomous flight corridor triage",
        metricLabel: "EDGE LATENCY",
        metricValue: "24ms",
        specs: [
          { key: "Compute", val: "Onboard NPU / TensorRT" },
          { key: "Framerate", val: "45 FPS Live Stream" },
          { key: "Safety Intercept", val: "Hardware Failsafe Pin" },
        ],
        diagramLabel: "TELEMETRY",
        diagramValue: "Optical Flow → TensorRT → Motor PWM",
      },
      {
        id: "cloud-vision",
        label: "CLOUD VISION",
        badge: "GOOGLE CLOUD AI",
        headline: "Macro hazard segmentation & coordinate telemetry broadcast",
        metricLabel: "MAP ACCURACY",
        metricValue: "99.4%",
        specs: [
          { key: "APIs", val: "Google Cloud Vision & Gemini" },
          { key: "Telemetry", val: "GeoJSON Spatial Envelope" },
          { key: "Triage Alert", val: "Automated Incident Escalation" },
        ],
        diagramLabel: "ANALYSIS",
        diagramValue: "Keyframe → GCS Bucket → Gemini Inspection",
      },
    ],
    decisionTriad: {
      constraint:
        "Drone telemetry over 4G links suffered packet loss and high latency during critical low-altitude obstacle approaches.",
      decision:
        "Engineered a dual-tier architecture: on-device NPU handles immediate collision avoidance while upstream routes keyframes to Google Cloud for deep triage.",
      result:
        "Best Use of Google APIs award at MLH Gemini.exe 2.0 with continuous 45 FPS zero-drop pathing.",
    },
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
    modes: [
      {
        id: "local-dsp",
        label: "LOCAL DSP",
        badge: "WEARABLE HARDWARE",
        headline: "Low-power acoustic front-end & voice activity detection",
        metricLabel: "STANDBY POWER",
        metricValue: "1.2mW",
        specs: [
          { key: "Sampling", val: "16kHz / 16-bit PCM" },
          { key: "VAD Filter", val: "Zero-Crossing Noise Gate" },
          { key: "Buffer Window", val: "500ms Ring Buffer" },
        ],
        diagramLabel: "AUDIO PATH",
        diagramValue: "MEMS Mic → I2S Hardware DMA → Circular Buffer",
      },
      {
        id: "vector-search",
        label: "VECTOR SEARCH",
        badge: "SECOND BRAIN DB",
        headline: "Sub-second semantic memory retrieval via self-hosted PWA",
        metricLabel: "RECALL LATENCY",
        metricValue: "85ms",
        specs: [
          { key: "Embeddings", val: "Cosine Similarity Index" },
          { key: "Storage", val: "Encrypted SQLite / Vector" },
          { key: "Sync Client", val: "Offline-first Mobile PWA" },
        ],
        diagramLabel: "RETRIEVAL",
        diagramValue: "Speech-to-Text → Vector Chunk → Memory Hit",
      },
    ],
    decisionTriad: {
      constraint:
        "Battery longevity was compromised when streaming uninterrupted audio to cloud speech APIs from a compact wearable.",
      decision:
        "Implemented hardware-interrupt Voice Activity Detection (VAD) on the microcontroller, transmitting audio chunks only upon detected speech thresholds.",
      result:
        "Reduced radio wakeups by 82%, achieving multi-day battery endurance while syncing memories seamlessly to a private second-brain PWA.",
    },
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
    modes: [
      {
        id: "firmware-bus",
        label: "FIRMWARE BUS",
        badge: "ESP32 · FREERTOS",
        headline: "Deterministic stepper control & load-cell telemetry",
        metricLabel: "JITTER DISPERSION",
        metricValue: "< 0.4ms",
        specs: [
          { key: "RTOS Kernel", val: "FreeRTOS Dual-Core Tasks" },
          { key: "Sensor ADC", val: "HX711 24-bit Strain Gauge" },
          { key: "Safety Guard", val: "Thermal & Jam Auto-Cutoff" },
        ],
        diagramLabel: "CONTROL LOOP",
        diagramValue: "Interrupt Timer → FreeRTOS Task → Stepper Step",
      },
      {
        id: "ble-mesh",
        label: "BLE MESH",
        badge: "OFFLINE TELEMETRY",
        headline: "Zero-cloud peer-to-peer sync with companion Flutter dashboard",
        metricLabel: "SYNC RADIUS",
        metricValue: "25m",
        specs: [
          { key: "Radio Stack", val: "Bluetooth Low Energy 5.0" },
          { key: "Flash Buffer", val: "SPIFFS Persistent EEPROM" },
          { key: "App Interface", val: "Flutter Reactive State" },
        ],
        diagramLabel: "PAIRING",
        diagramValue: "BLE Broadcast → Custom Service → Handshake",
      },
    ],
    decisionTriad: {
      constraint:
        "Unreliable home Wi-Fi caused automated pet nutrition schedules to miss dispense triggers and drop weight calibration records.",
      decision:
        "Migrated schedule execution directly into non-volatile ESP32 hardware timers with BLE local telemetry caching, eliminating cloud runtime dependencies.",
      result:
        "Guaranteed 100% on-time feeding cycles with offline load-cell log persistence and instant Flutter dashboard pairing.",
    },
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
