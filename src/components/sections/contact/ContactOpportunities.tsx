"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const interestAreas = [
  "Data Analytics",
  "Artificial Intelligence",
  "Automation",
  "PMO / Project Governance",
  "Business Process Improvement",
  "Digital Transformation",
];

export function ContactOpportunities() {
  return (
    <Section>
      <Container>
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="mb-3 text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
            AREAS OF INTEREST
          </p>
          <h2 className="text-[length:var(--font-size-h3)] font-bold leading-tight text-foreground mb-6">
            Where I Can Add Value
          </h2>
          <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground mb-8">
            I am interested in opportunities that combine analytical thinking,
            business understanding, and technology—across these focus areas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {interestAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-muted transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
