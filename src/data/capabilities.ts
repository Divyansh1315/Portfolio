import { Capability } from "@/types/portfolio";

export const capabilities: Capability[] = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description:
      "Transforming raw data into structured insights, dashboards, and decision-support tools.",
    technologies: ["Power BI", "Excel", "Power Query", "DAX", "SQL"],
    icon: "BarChart3",
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Building practical AI solutions that help users understand information, make decisions, and interact with business knowledge more intelligently.",
    technologies: ["Generative AI", "RAG", "Amazon Bedrock", "AI Assistants", "Prompt Engineering"],
    icon: "Brain",
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Designing workflows that reduce repetitive effort, improve follow-up, and make business processes more reliable.",
    technologies: ["Power Automate", "SharePoint", "Microsoft 365", "Workflow Automation"],
    icon: "Workflow",
  },
  {
    id: "pmo-governance",
    title: "PMO & Governance",
    description:
      "Combining project governance, reporting, coordination, and structured problem-solving with data-driven decision making.",
    technologies: ["MIS", "Project Tracking", "Governance", "Reporting", "Process Improvement"],
    icon: "Target",
  },
];
