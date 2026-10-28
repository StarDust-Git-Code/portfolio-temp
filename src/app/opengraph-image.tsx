import { ImageResponse } from "next/og";
import { PROFILE } from "@/data/profile";

export const alt = PROFILE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#e9e8e6",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#0a0a0a",
            }}
          >
            {/* IA trace mark */}
            <svg width="44" height="37" viewBox="0 0 72 60">
              <g
                stroke="#0a0a0a"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <path d="M13.5 16.9 V48.1" />
                <path d="M31.7 48.6 L45 12 L58.3 48.6" />
                <path d="M35 39.5 H40.2 M49.8 39.5 H55" />
              </g>
              <g stroke="#0a0a0a" strokeWidth="3" fill="none">
                <circle cx="13.5" cy="12" r="3.4" />
                <circle cx="13.5" cy="53" r="3.4" />
                <circle cx="30" cy="53" r="3.4" />
                <circle cx="60" cy="53" r="3.4" />
                <circle cx="45" cy="39.5" r="3.2" />
              </g>
            </svg>
            IRSHAD AHAMED
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#0a0a0a" }}>
            Chennai, India
          </div>
        </div>

        {/* giant split name */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 124,
              fontWeight: 800,
              letterSpacing: -8,
              color: "#0a0a0a",
              lineHeight: 1,
            }}
          >
            IRSHAD
          </div>
          <div
            style={{
              fontSize: 124,
              fontWeight: 800,
              letterSpacing: -8,
              color: "#0a0a0a",
              lineHeight: 1,
            }}
          >
            AHAMED
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: 1,
              color: "#0a0a0a",
              opacity: 0.65,
            }}
          >
            {"// EDGE AI · EMBEDDED · IOT · ANDROID · LINUX"}
          </div>
          <div style={{ fontSize: 20, color: "#0a0a0a", opacity: 0.65 }}>
            Embedded Systems &amp; Edge AI
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
