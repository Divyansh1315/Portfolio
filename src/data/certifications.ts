import { Certification } from "@/types/portfolio";

/**
 * Professional certifications.
 * Only verified certifications are included.
 * Add credential URLs and IDs when available.
 */
export const certifications: Certification[] = [
  {
    id: "mckinsey-forward",
    name: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    issueDate: "Jun 2026",
    description:
      "Completed the McKinsey Forward learning program focused on practical problem-solving, adaptability, communication, and modern workplace capabilities.",
  },
  {
    id: "business-analytics-sql",
    name: "Business Analytics with SQL",
    issuer: "Codebasics",
    issueDate: "Dec 2025",
    credentialId: "CB-50-611622",
    description:
      "SQL from beginner to advanced level by working on real-time business analytics requirements from a dataset with more than 1.5 million records.",
  },
  {
    id: "power-bi-udemy",
    name: "Business Analyzing and Visualizing Data with MS Power BI",
    issuer: "Udemy",
    issueDate: "Aug 2025",
    credentialId: "UC-bac85a30-98c3-48d5-8c31-fb8fdcffc853",
    description:
      "Power BI report design — beginner to advanced.",
  },
  {
    id: "data-analytics-tutedude",
    name: "Data Analytics",
    issuer: "Tutedude",
    issueDate: "Aug 2025",
    credentialId: "TD-DIVY-DA-0855",
    description:
      "Hands-on experience in Excel, SQL, and Python for data analysis, visualization, and business insights.",
  },
  {
    id: "google-project-management",
    name: "Foundations of Project Management",
    issuer: "Google",
    issueDate: "Jul 2024",
    credentialId: "JBG7ESARKMXK",
    description:
      "Fundamentals of project management including roles, organizational structure, project life cycle management, and methodologies across diverse industries.",
  },
];
