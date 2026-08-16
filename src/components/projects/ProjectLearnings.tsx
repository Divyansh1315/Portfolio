"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BookOpen } from "lucide-react";

interface ProjectLearningsProps {
  learnings: string[];
}

export function ProjectLearnings({ learnings }: ProjectLearningsProps) {
  return (
    <section className="py-(--spacing-section-y) bg-surface/30">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Reflections
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-10">
            What I Learned
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid gap-4 max-w-3xl" staggerDelay={0.08}>
          {learnings.map((learning, i) => (
            <StaggerItem key={i}>
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-lg bg-accent-secondary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="h-4 w-4 text-accent-secondary" />
                </div>
                <p className="text-muted-foreground leading-relaxed pt-1">{learning}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
