/* Public profile details, LinkedIn recaps and Devpost submissions reviewed October 2026.
 * Event placements are the results shared in Irshad's own recaps or directly by him;
 * participation certificates are not presented as winner certificates.
 */
export const GITHUB_PROFILE = "https://github.com/StarDust-Git-Code";
export const LINKEDIN_PROFILE =
  "https://www.linkedin.com/in/irshad-a-1915a2267/";
export const LINKEDIN_ACTIVITY = `${LINKEDIN_PROFILE}recent-activity/all/`;
export const SENTINELAI_SUBMISSION =
  "https://devpost.com/software/sentinelai-n9y6fe";

export const PROFILE = {
  location: "Chennai, Tamil Nadu, India",
  title: "Irshad Ahamed — Embedded Systems & Edge AI",
  description:
    "Embedded systems, edge AI, Android and Linux engineering by Irshad Ahamed. Explore IoT projects, open-source ports and hackathon builds from Chennai, India.",
} as const;

export const SKILL_GROUPS = [
  {
    title: "Embedded & robotics",
    skills: [
      "C/C++",
      "ESP32",
      "Raspberry Pi",
      "ROS",
      "IoT development",
      "Hardware debugging",
    ],
  },
  {
    title: "Android & Linux",
    skills: [
      "Linux",
      "Device tree management",
      "Kernel configuration",
      "Android HAL",
      "AOSP",
      "Custom ROM development",
      "Android system development",
    ],
  },
  {
    title: "AI & computer vision",
    skills: ["Python", "Machine learning", "Computer vision", "AI agents"],
  },
] as const;

export const RECOGNITION = [
  {
    result: "1st",
    title: "Fluxboard.AI",
    event: "PIXEL.GEMINI · MLH 2026 season",
    detail: "Team win · 14.80/15 · Achievement certificate",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7436599170284552192/",
    highlight: true,
  },
  {
    // Placement confirmed by Irshad; event and category award verified on Devpost.
    result: "2nd",
    title: "SentinelAI",
    event: "Gemini.exe 2.0 · MLH",
    detail: "Best Use of Google APIs (Gemini/Cloud) winner",
    href: SENTINELAI_SUBMISSION,
    highlight: false,
  },
  {
    result: "4th",
    title: "GRASKILLS.AI",
    event: "PROMPT. TRAIN. PARTY · MLH Hack Days",
    detail: "Of 34 teams · Participation certificate",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7434195127780388864/",
    highlight: false,
  },
] as const;

export const BUILD_NOTES = [
  {
    title: "Galaxy A35 / Evolution X",
    status: "Bring-up in progress",
    description:
      "Android 16 GSI testing, device-tree work, vendor extraction and bootchain backups. My published logs document working cellular, GPS and 120Hz display, with fingerprint and microphone integration still unresolved.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7420800301407891456/",
    linkLabel: "Read the bring-up log",
  },
  {
    title: "Custom OpenDots",
    status: "Personal second brain",
    description:
      "My customized OpenDots deployment, bringing together a personal second brain, an AI backend and a mobile companion. Built on OpenDots, with my own hosting setup and integrations.",
    href: "https://brain-dots.vercel.app",
    linkLabel: "Open Custom OpenDots",
  },
] as const;
