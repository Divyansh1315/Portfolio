"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Briefcase, BarChart3, Workflow, Brain } from "lucide-react";

const valueAreas = [
  {
    id: "business-context",
    title: "Business Context",
    description:
      "Understanding process, stakeholders, governance, and operational needs before selecting a technical solution.",
    icon: <Briefcase className="h-5 w-5" />,
    accent: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  },
  {
    id: "data-insights",
    title: "Data & Insights",
    description:
      "Structuring data and building analytical views that improve visibility and decision-making.",
    icon: <BarChart3 className="h-5 w-5" />,
    accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Reducing repetitive effort through practical workflows and rule-based process automation.",
    icon: <Workflow className="h-5 w-5" />,
    accent: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  },
  {
    id: "applied-ai",
    title: "Applied AI",
    description:
      "Exploring how generative AI, RAG, and intelligent assistants can augment real business workflows.",
    icon: <Brain className="h-5 w-5" />,
    accent: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
];

export function AboutValues() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="WHAT I BRING"
          heading="Core Value Areas"
          description="Four capability dimensions that shape how I approach every problem."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {valueAreas.map((area) => (
            <StaggerItem key={area.id}>
              <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${area.accent} mb-4`}
                >
                  {area.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
