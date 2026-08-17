import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize production builds
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
