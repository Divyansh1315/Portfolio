"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { MotionDiv } from "@/components/ui/ClientMotion";
import { ease } from "@/lib/motion";
import type { SanitySiteSettings } from "@/sanity/lib/types";
import { ValueProcessPanel } from "./hero/ValueProcessPanel";

interface HeroSectionProps {
  settings: SanitySiteSettings | null;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const resumeUrl = settings?.resumeFile?.asset?.url;
  const showResume = settings?.showResumeCta && resumeUrl;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background */}
      <HeroBackground />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column — Content */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Positioning Badge */}
            <MotionDiv
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: ease.out }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-surface/50 backdrop-blur-sm text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                Data-Driven PMO Analyst
              </span>
            </MotionDiv>

            {/* Headline */}
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: ease.out }}
            >
              <h1 className="text-[clamp(2.75rem,5.2vw,5.25rem)] font-bold leading-[0.98] tracking-tight text-foreground">
                Turning Business{" "}
                <br className="hidden sm:block" />
                Problems into{" "}
                <span className="bg-gradient-to-r from-blue-400 via-primary to-accent bg-clip-text text-transparent">
                  Data,
                  <br />
                  AI &amp; Automation
                </span>
                <br />
                Solutions.
              </h1>
            </MotionDiv>

            {/* Supporting Copy */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: ease.out }}
            >
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
                I work at the intersection of business, data and technology — building
                dashboards, AI assistants and automated workflows that turn operational
                challenges into better decisions.
              </p>
            </MotionDiv>

            {/* CTA Buttons */}
            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: ease.out }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                className="group"
              >
                Explore My Work
              </Button>

              {showResume && (
                <Button
                  href={resumeUrl}
                  variant="secondary"
                  size="lg"
                  external
                  icon={<Download className="h-4 w-4" />}
                >
                  Download Resume
                </Button>
              )}

              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                Let&apos;s Connect
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </MotionDiv>
          </div>

          {/* Right Column — Value Process Panel */}
          <div className="lg:col-span-5 hidden lg:block">
            <MotionDiv
              initial={{ opacity: 0, x: 24, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.35, ease: ease.out }}
            >
              <ValueProcessPanel />
            </MotionDiv>
          </div>

          {/* Mobile Process Panel */}
          <div className="lg:hidden">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: ease.out }}
            >
              <ValueProcessPanel />
            </MotionDiv>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Subtle decorative background for the hero */
function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.02]" />

      {/* Radial blue glow - top right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl" />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
