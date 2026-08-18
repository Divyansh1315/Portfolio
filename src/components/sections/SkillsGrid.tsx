"use client";

import { SkillCategory } from "@/types/portfolio";
import { TechPill } from "@/components/ui/TechPill";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BarChart3, BrainCircuit, Workflow, Code2, BriefcaseBusiness, Circle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Icon map keyed by both category name AND slug-based ID.
 * This ensures lookup works regardless of whether the component
 * receives the Sanity document name or a normalized slug.
 */
const categoryIconMap: Record<string, LucideIcon> = {
  // By display name
  "Data & Analytics": BarChart3,
  "AI": BrainCircuit,
  "Automation": Workflow,
  "Development": Code2,
  "PMO & Business": BriefcaseBusiness,
  // By slug (Sanity _id is "skillGroup-<slug>")
  "data-analytics": BarChart3,
  "ai": BrainCircuit,
  "automation": Workflow,
  "development": Code2,
  "pmo-business": BriefcaseBusiness,
};

function resolveIcon(category: SkillCategory): LucideIcon {
  // Try name first
  if (categoryIconMap[category.name]) return categoryIconMap[category.name];
  // Try slug extracted from Sanity ID (e.g. "skillGroup-data-analytics" → "data-analytics")
  const slug = category.id.replace(/^skillGroup-/, "");
  if (categoryIconMap[slug]) return categoryIconMap[slug];
  // Fallback
  return Circle;
}

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <StaggerContainer
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      staggerDelay={0.1}
    >
      {categories.map((category) => {
        const Icon = resolveIcon(category);
        return (
          <StaggerItem key={category.id}>
            <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
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
        );
      })}
    </StaggerContainer>
  );
}
