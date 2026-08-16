"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const storyParagraphs = [
  {
    id: "origin",
    title: "Where It Started",
    content:
      "My professional journey began with project coordination, reporting, and PMO responsibilities, which gave me a strong understanding of governance, stakeholder communication, business processes, and management reporting.",
  },
  {
    id: "pattern",
    title: "The Pattern I Noticed",
    content:
      "Working closely with operational and business teams exposed me to a recurring pattern: many business challenges were not caused by a lack of information, but by fragmented data, repetitive processes, limited visibility, and delayed decision-making.",
  },
  {
    id: "expansion",
    title: "Expanding My Toolkit",
    content:
      "That led me to expand into data analytics, business intelligence, workflow automation, and applied AI.",
  },
  {
    id: "application",
    title: "What I Have Built",
    content:
      "Since then, I have worked on dashboards, automated workflows, AI assistants, maintenance intelligence prototypes, cybersecurity concepts, and business reporting solutions.",
  },
  {
    id: "today",
    title: "Where I Am Today",
    content:
      "Today, I am building my career around one core idea: using the right combination of business understanding, data, automation, and AI to solve meaningful problems.",
  },
];

export function AboutStory() {
  return (
    <Section variant="surface">
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="mb-3 text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
              MY JOURNEY
            </p>
            <h2 className="text-[length:var(--font-size-h2)] font-bold leading-tight text-foreground mb-10">
              How I Got Here
            </h2>

            <div className="space-y-8">
              {storyParagraphs.map((paragraph) => (
                <div key={paragraph.id} className="flex gap-4">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center pt-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60 shrink-0" />
                    <div className="w-px flex-1 bg-border mt-2" />
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      {paragraph.title}
                    </h3>
                    <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                      {paragraph.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
