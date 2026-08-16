"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ProjectChallenge } from "@/types/portfolio";

interface ProjectChallengesProps {
  challenges: ProjectChallenge[];
}

export function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  return (
    <section className="py-(--spacing-section-y)">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Challenges & Decisions
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-10">
            Problem-Solving
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 max-w-3xl" staggerDelay={0.1}>
          {challenges.map((item, i) => (
            <StaggerItem key={i}>
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="p-5 border-b border-border bg-surface/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    Challenge
                  </p>
                  <p className="text-foreground leading-relaxed">{item.challenge}</p>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    Design Decision
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{item.decision}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
