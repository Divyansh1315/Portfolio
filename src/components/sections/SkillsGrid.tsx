"use client";

import { SkillCategory } from "@/types/portfolio";
import { TechPill } from "@/components/ui/TechPill";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BarChart3, BrainCircuit, Workflow, Code2, BriefcaseBusiness, Circle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categoryIconMap: Record<string, LucideIcon> = {
  "Data & Analytics": BarChart3,
  "AI": BrainCircuit,
  "Automation": Workflow,
  "Development": Code2,
  "PMO & Business": BriefcaseBusiness,
};

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <StaggerContainer
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      staggerDelay={0.1}
    >
      {categories.map((category) => (
        <StaggerItem key={category.id}>
          <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
                {(() => {
                  const Icon = categoryIconMap[category.name] ?? Circle;
                  return <Icon className="h-5 w-5" aria-hidden="true" />;
                })()}
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {category.name}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <TechPill key={skill.name} label={skill.name} />
              ))}
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
