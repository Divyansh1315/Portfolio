"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { experienceThemes } from "@/data/experience";
import { Briefcase, BarChart3, Workflow, Brain } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="h-5 w-5" />,
  BarChart3: <BarChart3 className="h-5 w-5" />,
  Workflow: <Workflow className="h-5 w-5" />,
  Brain: <Brain className="h-5 w-5" />,
};

const accentMap: Record<string, string> = {
  "pmo-governance": "text-blue-400 border-blue-500/30 bg-blue-500/10",
  "analytics-bi": "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  automation: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  "ai-innovation": "text-purple-400 border-purple-500/30 bg-purple-500/10",
};

export function ExperienceThemes() {
  return (
    <Section variant="surface">
      <Container>
        <SectionHeading
          eyebrow="CAPABILITY AREAS"
          heading="Experience Across Domains"
          description="Professional work has spanned these interconnected capability areas."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {experienceThemes.map((theme) => (
            <StaggerItem key={theme.id}>
              <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${accentMap[theme.id] ?? "text-primary border-primary/30 bg-primary/10"} mb-4`}
                >
                  {iconMap[theme.icon] ?? <Briefcase className="h-5 w-5" />}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {theme.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
