"use client";

import dynamic from "next/dynamic";

/**
 * Client-only motion.div wrapper to avoid framer-motion SSR issues
 * with Node.js 24 during Next.js prerendering.
 */
export const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.div })),
  { ssr: false }
);
