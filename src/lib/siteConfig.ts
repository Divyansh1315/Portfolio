/**
 * Centralized site configuration for metadata, SEO, and URLs.
 * Uses NEXT_PUBLIC_SITE_URL environment variable with a safe fallback.
 */

export const siteConfig = {
  name: "Divyansh Singh",
  title: "Divyansh Singh | Data Analytics, AI, Automation & PMO",
  titleTemplate: "%s | Divyansh Singh",
  description:
    "Portfolio of Divyansh Singh showcasing practical work across data analytics, artificial intelligence, workflow automation, PMO, and business-focused technology solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://divyanshsingh.com",
  locale: "en_US",
  positioning: "Data Analytics · AI · Automation · PMO",
  author: "Divyansh Singh",
  keywords: [
    "Data Analytics",
    "Artificial Intelligence",
    "Automation",
    "PMO",
    "Power BI",
    "Python",
    "Portfolio",
    "Business Technology",
  ] as string[],
  social: {
    linkedIn: "https://www.linkedin.com/in/divyansh-singh-25897a179/",
    github: "https://github.com/Divyansh1315",
  },
} as const;
