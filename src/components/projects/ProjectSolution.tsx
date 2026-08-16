"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface ProjectSolutionProps {
  solution: string;
}

export function ProjectSolution({ solution }: ProjectSolutionProps) {
  return (
    <section className="py-(--spacing-section-y)">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            The Solution
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-6">
            What Was Built
          </h2>
          <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground max-w-3xl">
            {solution}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
