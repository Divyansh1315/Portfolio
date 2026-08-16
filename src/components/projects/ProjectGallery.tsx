"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ProjectScreenshot } from "@/types/portfolio";
import { ImageIcon } from "lucide-react";

interface ProjectGalleryProps {
  screenshots: ProjectScreenshot[];
  confidentialityNote?: string;
}

export function ProjectGallery({ screenshots, confidentialityNote }: ProjectGalleryProps) {
  if (screenshots.length === 0) return null;

  return (
    <section className="py-(--spacing-section-y) bg-surface/30">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Visual Preview
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-10">
            Screenshots
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {screenshots.map((screenshot, i) => (
            <StaggerItem key={i} className={i === 0 ? "md:col-span-2" : ""}>
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                {screenshot.src ? (
                  <div className="relative aspect-video">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                      sizes={i === 0 ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"}
                    />
                  </div>
                ) : (
                  <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-surface via-surface-secondary to-surface gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {screenshot.title}
                    </p>
                  </div>
                )}
                <div className="p-4">
                  <p className="font-medium text-foreground text-sm">{screenshot.title}</p>
                  {screenshot.description && (
                    <p className="text-xs text-muted-foreground mt-1">{screenshot.description}</p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {confidentialityNote && (
          <AnimatedSection delay={0.3} className="mt-8">
            <p className="text-xs text-muted italic text-center">
              {confidentialityNote}
            </p>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
