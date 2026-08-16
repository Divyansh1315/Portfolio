"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { TrendingUp } from "lucide-react";

interface ProjectValueProps {
  values: string[];
}

export function ProjectValue({ values }: ProjectValueProps) {
  return (
    <section className="py-(--spacing-section-y) bg-surface/30">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Business Value
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-10">
            Impact & Outcomes
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl" staggerDelay={0.08}>
          {values.map((value, i) => (
            <StaggerItem key={i}>
              <div className="flex gap-4 items-start p-5 rounded-xl border border-border bg-card">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-4 w-4 text-accent" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{value}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
