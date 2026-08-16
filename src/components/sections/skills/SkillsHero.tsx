"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { MotionDiv } from "@/components/ui/ClientMotion";

export function SkillsHero() {
  return (
    <Section>
      <Container>
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
            SKILLS
          </p>
          <h1 className="text-[length:var(--font-size-h1)] font-bold leading-tight text-foreground mb-5">
            Tools, Technologies & Capabilities
          </h1>
          <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground max-w-2xl">
            A practical toolkit spanning analytics, AI, automation, development,
            and project management.
          </p>
        </MotionDiv>
      </Container>
    </Section>
  );
}
