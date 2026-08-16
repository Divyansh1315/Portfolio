"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { AlertCircle } from "lucide-react";

interface ProjectProblemProps {
  problems: string[];
  objective: string;
}

export function ProjectProblem({ problems, objective }: ProjectProblemProps) {
  return (
    <section className="py-(--spacing-section-y)">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            The Problem
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-8">
            Why This Matters
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid gap-4 max-w-3xl" staggerDelay={0.08}>
          {problems.map((problem, i) => (
            <StaggerItem key={i}>
              <div className="flex gap-4 items-start p-4 rounded-lg border border-border bg-surface/50">
                <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{problem}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Objective
          </p>
          <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-foreground font-medium">
            {objective}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
