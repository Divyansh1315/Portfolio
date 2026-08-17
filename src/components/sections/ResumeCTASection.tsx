"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Download, Linkedin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { SanitySiteSettings, SanityHomepageContent } from "@/sanity/lib/types";

interface ResumeCTASectionProps {
  settings: SanitySiteSettings | null;
  homepage: SanityHomepageContent | null;
}

export function ResumeCTASection({ settings, homepage }: ResumeCTASectionProps) {
  if (!settings) return null;

  const resumeUrl = settings.resumeFile?.asset?.url;
  const showResume = settings.showResumeCta && resumeUrl;

  return (
    <section id="resume" className="py-(--spacing-section-y) relative overflow-hidden">
      {/* Background treatment for visual contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <Container>
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-[length:var(--font-size-h2)] font-bold leading-tight text-foreground mb-4">
            {homepage?.resumeCtaHeading || "Looking for someone who can bridge business and technology?"}
          </h2>
          <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground mb-8">
            {homepage?.resumeCtaDescription || "I'm exploring opportunities where I can combine data analytics, automation, AI, and project management to solve meaningful business problems."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {showResume ? (
              <Button
                href={resumeUrl}
                variant="primary"
                size="lg"
                external
                icon={<Download className="h-4 w-4" />}
              >
                {settings.resumeButtonLabel || "Download Resume"}
              </Button>
            ) : (
              <Button
                variant="primary"
                size="lg"
                disabled
                icon={<Download className="h-4 w-4" />}
              >
                {settings.resumeButtonLabel || "Download Resume"}
              </Button>
            )}
            <Button
              href="https://www.linkedin.com/in/divyansh-singh-25897a179/"
              variant="secondary"
              size="lg"
              external
              icon={<Linkedin className="h-4 w-4" />}
            >
              Connect on LinkedIn
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
