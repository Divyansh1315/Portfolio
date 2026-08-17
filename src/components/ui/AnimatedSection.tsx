"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import {
  duration,
  ease,
  stagger as staggerPresets,
  fadeUp,
  viewport,
} from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

// Dynamic import to avoid SSR issues with framer-motion on Node.js 24
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.div })),
  { ssr: false }
);

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: duration.base, delay, ease: ease.out }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = staggerPresets.base,
}: StaggerContainerProps) {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <MotionDiv variants={fadeUp} className={className}>
      {children}
    </MotionDiv>
  );
}
