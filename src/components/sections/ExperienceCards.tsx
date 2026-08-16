"use client";

import { Briefcase, BarChart3, Workflow, Brain } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const experienceThemes = [
  {
    id: "pmo-governance",
    title: "PMO & Project Governance",
    description: "Project coordination, reporting, stakeholder management, and governance frameworks.",
    icon: <Briefcase className="h-5 w-5" />,
    accent: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  },
  {
    id: "analytics-bi",
    title: "Data Analytics & BI",
    description: "Dashboard development, data modeling, KPI tracking, and management insights.",
    icon: <BarChart3 className="h-5 w-5" />,
    accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  },
  {
    id: "automation",
    title: "Automation & Process Improvement",
    description: "Workflow automation, process optimization, and reducing manual operations.",
    icon: <Workflow className="h-5 w-5" />,
    accent: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  },
  {
    id: "ai-innovation",
    title: "Applied AI & Innovation",
    description: "Building AI assistants, RAG solutions, and intelligent business applications.",
    icon: <Brain className="h-5 w-5" />,
    accent: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
];

export function ExperienceCards() {
  return (
    <StaggerContainer
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      staggerDelay={0.1}
    >
      {experienceThemes.map((theme) => (
        <StaggerItem key={theme.id}>
          <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
            {/* Icon */}
            <div
              className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${theme.accent} mb-4`}
            >
              {theme.icon}
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-foreground mb-2">
              {theme.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {theme.description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
