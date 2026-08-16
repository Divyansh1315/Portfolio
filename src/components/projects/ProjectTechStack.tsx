"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { TechPill } from "@/components/ui/TechPill";
import { TechGroup } from "@/types/portfolio";

interface ProjectTechStackProps {
  techGroups: TechGroup[];
}

export function ProjectTechStack({ techGroups }: ProjectTechStackProps) {
  return (
    <section className="py-(--spacing-section-y)">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Technology Stack
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-10">
            Built With
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl" staggerDelay={0.1}>
          {techGroups.map((group, i) => (
            <StaggerItem key={i}>
              <div className="p-5 rounded-xl border border-border bg-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <TechPill key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
