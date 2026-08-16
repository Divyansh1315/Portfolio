"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCaseStudy } from "@/types/portfolio";

interface ProjectOverviewProps {
  caseStudy: ProjectCaseStudy;
}

export function ProjectOverview({ caseStudy }: ProjectOverviewProps) {
  return (
    <section className="py-(--spacing-section-y-sm)">
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Project Overview
            </p>
            <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
              {caseStudy.overview}
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
