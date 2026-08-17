import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize production builds
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: `/images/**`,
      },
    ],
  },
};

export default nextConfig;
