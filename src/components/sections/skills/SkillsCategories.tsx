"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { skillCategories } from "@/data/skills";
import { BarChart3, Brain, Workflow, Code2, Briefcase } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "data-analytics": <BarChart3 className="h-5 w-5" />,
  ai: <Brain className="h-5 w-5" />,
  automation: <Workflow className="h-5 w-5" />,
  development: <Code2 className="h-5 w-5" />,
  "pmo-business": <Briefcase className="h-5 w-5" />,
};

const categoryAccents: Record<string, string> = {
  "data-analytics": "text-blue-400 border-blue-500/30 bg-blue-500/10",
  ai: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  automation: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  development: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "pmo-business": "text-amber-400 border-amber-500/30 bg-amber-500/10",
};

export function SkillsCategories() {
  return (
    <Section variant="surface">
      <Container>
        <div className="mb-10">
          <p className="mb-3 text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
            CORE CAPABILITIES
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold leading-tight text-foreground">
            Skill Categories
          </h2>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.id}>
              <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${categoryAccents[category.id] ?? "text-primary border-primary/30 bg-primary/10"}`}
                  >
                    {categoryIcons[category.id] ?? (
                      <Code2 className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-md text-xs font-medium bg-surface-secondary border border-border text-muted-foreground hover:text-foreground hover:border-muted transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
