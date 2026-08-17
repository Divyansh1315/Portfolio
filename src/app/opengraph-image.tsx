import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Divyansh Singh — Data Analytics · AI · Automation · PMO";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0e1a",
          backgroundImage:
            "radial-gradient(circle at 25% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)",
        }}
      >
        {/* Border accent top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
            }}
          >
            Divyansh Singh
          </div>

          {/* Positioning */}
          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              letterSpacing: "0.05em",
            }}
          >
            Data Analytics · AI · Automation · PMO
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 20,
              color: "#64748b",
              marginTop: "16px",
            }}
          >
            Portfolio & Case Studies
          </div>
        </div>

        {/* Border accent bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to right, #8b5cf6, #6366f1, #3b82f6)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
