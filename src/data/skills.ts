import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "data-analytics",
    name: "Data & Analytics",
    skills: [
      { name: "Power BI", level: "expert" },
      { name: "Excel", level: "expert" },
      { name: "Power Query", level: "advanced" },
      { name: "Power Pivot", level: "advanced" },
      { name: "DAX", level: "advanced" },
      { name: "SQL", level: "advanced" },
      { name: "Data Modeling", level: "advanced" },
    ],
  },
  {
    id: "ai",
    name: "AI",
    skills: [
      { name: "Generative AI", level: "advanced" },
      { name: "RAG", level: "intermediate" },
      { name: "Amazon Bedrock", level: "intermediate" },
      { name: "AI Assistants", level: "advanced" },
      { name: "Prompt Engineering", level: "advanced" },
    ],
  },
  {
    id: "automation",
    name: "Automation",
    skills: [
      { name: "Power Automate", level: "expert" },
      { name: "SharePoint", level: "advanced" },
      { name: "Microsoft 365", level: "advanced" },
      { name: "Workflow Automation", level: "expert" },
    ],
  },
  {
    id: "development",
    name: "Development",
    skills: [
      { name: "Python", level: "advanced" },
      { name: "Streamlit", level: "intermediate" },
      { name: "GitHub", level: "intermediate" },
      { name: "APIs", level: "advanced" },
    ],
  },
  {
    id: "pmo-business",
    name: "PMO & Business",
    skills: [
      { name: "PMO", level: "advanced" },
      { name: "MIS Reporting", level: "expert" },
      { name: "Project Governance", level: "advanced" },
      { name: "Process Improvement", level: "advanced" },
      { name: "Stakeholder Management", level: "advanced" },
      { name: "Project Tracking", level: "advanced" },
    ],
  },
];
