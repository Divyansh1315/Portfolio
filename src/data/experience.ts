import { Experience } from "@/types/portfolio";

/**
 * Professional experience entries.
 * Only verified roles are included — no fabricated data.
 * When real employment data is provided, add entries here.
 */
export const experiences: Experience[] = [];

/**
 * Experience theme areas — verified professional capability domains.
 * These represent the breadth of professional work even when
 * detailed role entries are not yet populated.
 */
export const experienceThemes = [
  {
    id: "pmo-governance",
    title: "PMO & Project Governance",
    description:
      "Project coordination, reporting, stakeholder management, and governance frameworks.",
    icon: "Briefcase",
  },
  {
    id: "analytics-bi",
    title: "Data Analytics & BI",
    description:
      "Dashboard development, data modeling, KPI tracking, and management insights.",
    icon: "BarChart3",
  },
  {
    id: "automation",
    title: "Automation & Process Improvement",
    description:
      "Workflow automation, process optimization, and reducing manual operations.",
    icon: "Workflow",
  },
  {
    id: "ai-innovation",
    title: "Applied AI & Innovation",
    description:
      "Building AI assistants, RAG solutions, and intelligent business applications.",
    icon: "Brain",
  },
] as const;
