"use client";

import { SkillCategory } from "@/types/portfolio";
import { TechPill } from "@/components/ui/TechPill";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BarChart3, BrainCircuit, Workflow, Code2, BriefcaseBusiness, Circle } from "lucide-react";

/**
 * Returns the appropriate icon JSX for a skill category.
 * Uses direct conditional rendering to avoid any dynamic lookup issues.
 */
function CategoryIcon({ name, id }: { name: string; id: string }) {
  const slug = id.replace(/^skillGroup-/, "");
  const cls = "h-5 w-5";
  const style = { color: "#3b82f6" };

  if (name === "Data & Analytics" || slug === "data-analytics") {
    return <BarChart3 className={cls} style={style} aria-hidden="true" />;
  }
  if (name === "AI" || slug === "ai") {
    return <BrainCircuit className={cls} style={style} aria-hidden="true" />;
  }
  if (name === "Automation" || slug === "automation") {
    return <Workflow className={cls} style={style} aria-hidden="true" />;
  }
  if (name === "Development" || slug === "development") {
    return <Code2 className={cls} style={style} aria-hidden="true" />;
  }
  if (name === "PMO & Business" || slug === "pmo-business") {
    return <BriefcaseBusiness className={cls} style={style} aria-hidden="true" />;
  }
  return <Circle className={cls} style={style} aria-hidden="true" />;
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
      {categories.map((category) => (
        <StaggerItem key={category.id}>
          <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <CategoryIcon name={category.name} id={category.id} />
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
