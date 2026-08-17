import { siteConfig } from "@/lib/siteConfig";

/**
 * JSON-LD structured data for SEO.
 * Renders Person and WebSite schemas in the page.
 */
export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    sameAs: [siteConfig.social.linkedIn, siteConfig.social.github],
    jobTitle: "Data Analytics, AI & Automation Professional",
    knowsAbout: [
      "Data Analytics",
      "Artificial Intelligence",
      "Workflow Automation",
      "Project Management Office",
      "Power BI",
      "Python",
      "Business Technology",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
