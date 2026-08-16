"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { skillUsages } from "@/data/skillUsage";
import { Wrench } from "lucide-react";

export function SkillsUsage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="PRACTICAL APPLICATION"
          heading="How I Use These Skills"
          description="Context matters more than tool names. Here is how I apply key technologies."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          staggerDelay={0.08}
        >
          {skillUsages.map((usage) => (
            <StaggerItem key={usage.skill}>
              <div className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                  <Wrench className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {usage.skill}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {usage.context}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
