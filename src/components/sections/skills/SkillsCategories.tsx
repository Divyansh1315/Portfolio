"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BarChart3, BrainCircuit, Workflow, Code2, BriefcaseBusiness } from "lucide-react";
import type { SanitySkillGroup } from "@/sanity/lib/types";

const categoryAccents: Record<string, string> = {
  "Data & Analytics": "text-blue-600 dark:text-blue-400 border-blue-500/30 bg-blue-500/10",
  "AI": "text-purple-600 dark:text-purple-400 border-purple-500/30 bg-purple-500/10",
  "Automation": "text-violet-600 dark:text-violet-400 border-violet-500/30 bg-violet-500/10",
  "Development": "text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "PMO & Business": "text-amber-600 dark:text-amber-400 border-amber-500/30 bg-amber-500/10",
};

/**
 * Returns the appropriate icon JSX for a skill category.
 */
function CategoryIcon({ name, id }: { name: string; id: string }) {
  const slug = id.replace(/^skillGroup-/, "");
  const cls = "h-5 w-5";

  if (name === "Data & Analytics" || slug === "data-analytics") {
    return <BarChart3 className={cls} aria-hidden="true" />;
  }
  if (name === "AI" || slug === "ai") {
    return <BrainCircuit className={cls} aria-hidden="true" />;
  }
  if (name === "Automation" || slug === "automation") {
    return <Workflow className={cls} aria-hidden="true" />;
  }
  if (name === "Development" || slug === "development") {
    return <Code2 className={cls} aria-hidden="true" />;
  }
  if (name === "PMO & Business" || slug === "pmo-business") {
    return <BriefcaseBusiness className={cls} aria-hidden="true" />;
  }
  return <Code2 className={cls} aria-hidden="true" />;
}

interface SkillsCategoriesProps {
  skillGroups: SanitySkillGroup[];
}

export function SkillsCategories({ skillGroups }: SkillsCategoriesProps) {
  if (skillGroups.length === 0) return null;

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
          {skillGroups.map((category) => {
            const accent = categoryAccents[category.name] ?? "text-primary border-primary/30 bg-primary/10";
            return (
              <StaggerItem key={category._id}>
                <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${accent}`}
                    >
                      <CategoryIcon name={category.name} id={category._id} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill._key}
                        className="px-3 py-1.5 rounded-md text-xs font-medium bg-surface-secondary border border-border text-muted-foreground hover:text-foreground hover:border-muted transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
