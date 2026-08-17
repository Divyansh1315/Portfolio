import { Experience } from "@/types/portfolio";

/**
 * Professional experience entries.
 * Only verified roles are included — no fabricated data.
 * When real employment data is provided, add entries here.
 */
export const experiences: Experience[] = [
  {
    id: "uno-minda-pmo",
    company: "Uno Minda",
    role: "PMO Analyst",
    startDate: "Aug 2025",
    endDate: "Present",
    current: true,
    location: "Manesar, India",
    summary: "Maintain project MIS dashboards and reporting systems to track timelines, deliverables, and project performance metrics.",
    description: "Maintain project MIS dashboards and reporting systems to track timelines, deliverables, and project performance metrics.",
    highlights: [
      "Built Power BI dashboards for operational visibility",
      "Automated follow-up workflows using Power Automate and ZOHO Projects",
    ],
    technologies: ["Power BI", "Power Automate", "ZOHO Projects", "Excel", "PowerPoint"],
  },
  {
    id: "beggars-corp-fellow",
    company: "Beggars Corporation",
    role: "Fellow",
    startDate: "Mar 2025",
    endDate: "May 2025",
    current: false,
    location: "Varanasi, India",
    summary: "Collected, cleaned, and analyzed primary data on child beggars using SPSS, Excel, and Google Forms to derive actionable insights for rehabilitation strategies.",
    description: "Collected, cleaned, and analyzed primary data on child beggars using SPSS, Excel, and Google Forms to derive actionable insights for rehabilitation strategies.",
    highlights: [
      "Analyzed 10k+ data records to generate visual reports supporting policy decisions in child welfare and education",
    ],
    technologies: ["SPSS", "Excel", "Google Forms"],
  },
];

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
