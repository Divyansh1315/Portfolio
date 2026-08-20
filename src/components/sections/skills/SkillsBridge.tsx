"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function SkillsBridge() {
  return (
    <Section variant="surface">
      <Container>
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="mb-3 text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
            THE BRIDGE
          </p>
          <h2 className="text-[length:var(--font-size-h3)] font-bold leading-tight text-foreground mb-6">
            Business + Technical
          </h2>
          <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground mb-8">
            Technical skills become powerful when paired with business
            understanding. My PMO background means I approach every dashboard,
            workflow, or AI prototype with clarity on the business problem,
            stakeholder needs, and governance context.
          </p>

          {/* Visual bridge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="px-5 py-3 rounded-lg border border-blue-500/30 bg-blue-500/10 text-sm font-medium text-blue-600 dark:text-blue-400">
              Business Understanding
            </div>
            <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-blue-500/40 to-purple-500/40" />
            <div className="block sm:hidden w-px h-6 bg-gradient-to-b from-blue-500/40 to-purple-500/40" />
            <div className="px-5 py-3 rounded-lg border border-purple-500/30 bg-purple-500/10 text-sm font-medium text-purple-600 dark:text-purple-400">
              Technical Execution
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
