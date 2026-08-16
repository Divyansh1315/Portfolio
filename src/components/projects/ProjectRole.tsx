"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CheckCircle } from "lucide-react";

interface ProjectRoleProps {
  role: string[];
}

export function ProjectRole({ role }: ProjectRoleProps) {
  return (
    <section className="py-(--spacing-section-y) bg-surface/30">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            My Contribution
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-8">
            What I Did
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid gap-3 max-w-3xl" staggerDelay={0.06}>
          {role.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex gap-4 items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
