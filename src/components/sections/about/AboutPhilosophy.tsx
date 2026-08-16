"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AboutPhilosophy() {
  return (
    <Section variant="surface">
      <Container>
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="mb-6 text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
            WORKING PHILOSOPHY
          </p>

          {/* Featured Statement */}
          <blockquote className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-[length:var(--font-size-h2)] font-bold leading-tight text-foreground mb-6">
              I don&apos;t start with technology.
              <br />
              <span className="text-primary">I start with the problem.</span>
            </p>
          </blockquote>

          {/* Reinforcement */}
          <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            The right solution may be a dashboard, an automated workflow, an AI
            assistant, a better data model, or simply a better process.
          </p>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
