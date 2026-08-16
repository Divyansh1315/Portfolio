"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ExperienceSummary() {
  return (
    <Section variant="surface">
      <Container>
        <AnimatedSection className="max-w-3xl mx-auto">
          <p className="mb-3 text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
            CAREER SUMMARY
          </p>
          <h2 className="text-[length:var(--font-size-h3)] font-bold leading-tight text-foreground mb-6">
            From PMO to Data, Automation & AI
          </h2>
          <div className="space-y-4 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            <p>
              My career started in PMO and project coordination—building skills
              in governance, reporting, stakeholder management, and structured
              execution.
            </p>
            <p>
              Over time, I expanded into data analytics, dashboard development,
              workflow automation, and applied AI—driven by the recurring patterns
              I saw in how teams struggle with fragmented data and manual processes.
            </p>
            <p>
              My work spans dashboards, automated workflows, AI assistants,
              project governance, and business reporting.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
