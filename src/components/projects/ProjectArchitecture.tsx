"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ArchitectureStep } from "@/types/portfolio";
import { ArrowDown } from "lucide-react";

interface ProjectArchitectureProps {
  steps: ArchitectureStep[];
  title?: string;
}

export function ProjectArchitecture({ steps, title = "How It Works" }: ProjectArchitectureProps) {
  return (
    <section className="py-(--spacing-section-y) bg-surface/30">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Architecture
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-10">
            {title}
          </h2>
        </AnimatedSection>

        <StaggerContainer className="max-w-2xl mx-auto" staggerDelay={0.06}>
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col items-center">
                {/* Step card */}
                <div className="w-full p-4 rounded-lg border border-border bg-card text-center">
                  <p className="font-semibold text-foreground">{step.title}</p>
                  {step.description && (
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  )}
                </div>

                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div className="py-2 text-muted">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
