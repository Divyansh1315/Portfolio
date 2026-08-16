"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { personalInfo, socialLinks } from "@/data/personal";
import { isPlaceholder } from "@/lib/utils";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import { MotionDiv } from "@/components/ui/ClientMotion";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Content */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <p className="text-[length:var(--font-size-body-lg)] text-muted-foreground">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1 className="text-[length:var(--font-size-display)] font-bold leading-[1.1] text-foreground tracking-tight">
              {personalInfo.name.toUpperCase()}
            </h1>

            {/* Professional Positioning */}
            <p className="text-[length:var(--font-size-body-lg)] font-medium text-primary tracking-wide">
              {personalInfo.headline}
            </p>

            {/* Tagline */}
            <p className="text-[length:var(--font-size-h3)] font-semibold leading-snug text-foreground/90 whitespace-pre-line">
              {personalInfo.tagline}
            </p>

            {/* Supporting Copy */}
            <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground max-w-lg">
              {personalInfo.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Explore My Work
              </Button>
              {!isPlaceholder(personalInfo.resumePath) && (
                <Button
                  href={personalInfo.resumePath}
                  variant="secondary"
                  size="lg"
                  external
                  icon={<Download className="h-4 w-4" />}
                >
                  Download Resume
                </Button>
              )}
              {isPlaceholder(personalInfo.resumePath) && (
                <Button
                  variant="secondary"
                  size="lg"
                  disabled
                  icon={<Download className="h-4 w-4" />}
                >
                  Download Resume
                </Button>
              )}
            </div>

            {/* Social Links — only show configured ones */}
            {socialLinks.some((link) => !isPlaceholder(link.url)) && (
              <div className="flex items-center gap-3 mt-4">
                {socialLinks
                  .filter((link) => !isPlaceholder(link.url))
                  .map((link) => {
                    const isEmail = link.icon === "mail";
                    const href = isEmail
                      ? `mailto:${link.url}`
                      : link.url;

                    return (
                      <a
                        key={link.platform}
                        href={href}
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noopener noreferrer"}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                        aria-label={link.platform}
                      >
                        {iconMap[link.icon] ?? null}
                      </a>
                    );
                  })}
              </div>
            )}
          </MotionDiv>

          {/* Right Column — Premium Process Visual */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              <ProcessVisual />
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

/** Premium visual showing the business-to-impact process flow */
function ProcessVisual() {
  const steps = [
    { label: "BUSINESS", sublabel: "Understanding", gradient: "from-blue-500/20 to-blue-600/5", borderColor: "border-blue-500/40", textColor: "text-blue-400", glowColor: "shadow-blue-500/10" },
    { label: "DATA", sublabel: "Analysis", gradient: "from-indigo-500/20 to-indigo-600/5", borderColor: "border-indigo-500/40", textColor: "text-indigo-400", glowColor: "shadow-indigo-500/10" },
    { label: "AUTOMATION", sublabel: "Efficiency", gradient: "from-violet-500/20 to-violet-600/5", borderColor: "border-violet-500/40", textColor: "text-violet-400", glowColor: "shadow-violet-500/10" },
    { label: "AI", sublabel: "Intelligence", gradient: "from-purple-500/20 to-purple-600/5", borderColor: "border-purple-500/40", textColor: "text-purple-400", glowColor: "shadow-purple-500/10" },
    { label: "IMPACT", sublabel: "Results", gradient: "from-emerald-500/20 to-emerald-600/5", borderColor: "border-emerald-500/40", textColor: "text-emerald-400", glowColor: "shadow-emerald-500/10" },
  ];

  return (
    <div className="flex flex-col items-center gap-0" aria-hidden="true">
      {steps.map((step, index) => (
        <div key={step.label} className="flex flex-col items-center">
          <div
            className={`relative flex items-center justify-between w-56 h-16 rounded-xl border bg-gradient-to-r ${step.gradient} ${step.borderColor} backdrop-blur-sm px-5 shadow-lg ${step.glowColor}`}
          >
            <span className={`text-sm font-bold tracking-wider ${step.textColor}`}>
              {step.label}
            </span>
            <span className="text-xs text-muted-foreground/70">
              {step.sublabel}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex flex-col items-center">
              <div className="w-px h-4 bg-gradient-to-b from-border to-transparent" />
              <svg width="8" height="8" viewBox="0 0 8 8" className="text-muted-foreground/40">
                <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="currentColor" />
              </svg>
              <div className="w-px h-4 bg-gradient-to-b from-transparent to-border" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
