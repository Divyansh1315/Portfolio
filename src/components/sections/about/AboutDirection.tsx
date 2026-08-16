"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Compass } from "lucide-react";

export function AboutDirection() {
  return (
    <Section>
      <Container>
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6 p-8 sm:p-12 rounded-2xl border border-border bg-card">
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
              <Compass className="w-6 h-6" />
            </div>

            {/* Eyebrow */}
            <p className="text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
              WHAT I&apos;M BUILDING TOWARD
            </p>

            {/* Content */}
            <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground max-w-2xl">
              I am interested in roles where I can combine analytical thinking,
              business understanding, technology, and structured execution—particularly
              across Data Analytics, AI, Automation, and PMO-oriented transformation.
            </p>

            {/* Focus areas */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              {[
                "Data Analytics",
                "Artificial Intelligence",
                "Automation",
                "PMO",
                "Digital Transformation",
              ].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-md text-xs font-medium bg-surface-secondary border border-border text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
