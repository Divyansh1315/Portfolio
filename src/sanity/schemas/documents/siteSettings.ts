import { defineType, defineField } from "sanity";

/**
 * Site Settings — singleton document for global portfolio configuration.
 * Controls name, headline, CTAs, profile image, SEO defaults, resume, and availability.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "cta", title: "Call to Action" },
    { name: "seo", title: "SEO & Sharing" },
    { name: "resume", title: "Resume" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    // ─── Identity ──────────────────────────────────────────────────────
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      group: "identity",
      description: "Your full name as displayed across the portfolio.",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "headline",
      title: "Professional Headline",
      type: "string",
      group: "identity",
      description:
        "Short positioning line (e.g. 'Data Analytics · AI · Automation · PMO').",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 3,
      group: "identity",
      description:
        "Hero tagline — the main statement visitors see first. Supports line breaks.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "summary",
      title: "Short Summary",
      type: "text",
      rows: 4,
      group: "identity",
      description:
        "Brief positioning statement explaining what you do and how you create value.",
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      group: "identity",
      options: { hotspot: true },
      description: "Professional profile photograph.",
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Accessible description of the profile image.",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "availabilityStatus",
      title: "Availability Status",
      type: "string",
      group: "identity",
      description: "Current availability (e.g. 'Open to opportunities').",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "showAvailability",
      title: "Show Availability Badge",
      type: "boolean",
      group: "identity",
      description: "Whether to display the availability status publicly.",
      initialValue: false,
    }),

    // ─── Call to Action ────────────────────────────────────────────────
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      group: "cta",
      description: "Text for the main hero button (e.g. 'Explore My Work').",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "primaryCtaUrl",
      title: "Primary CTA Destination",
      type: "string",
      group: "cta",
      description: "Path or URL the primary button links to (e.g. '/projects').",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      group: "cta",
      description: "Text for the secondary hero button (e.g. 'Download Resume').",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "secondaryCtaUrl",
      title: "Secondary CTA Destination",
      type: "string",
      group: "cta",
      description:
        "Path or URL the secondary button links to. Leave blank to use the resume file.",
      validation: (Rule) => Rule.max(200),
    }),

    // ─── SEO & Sharing ─────────────────────────────────────────────────
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      group: "seo",
      description: "Production domain (e.g. https://divyanshsingh.com).",
      validation: (Rule) =>
        Rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "defaultSeoTitle",
      title: "Default SEO Title",
      type: "string",
      group: "seo",
      description:
        "Default page title for search engines (50–60 characters recommended).",
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: "defaultSeoDescription",
      title: "Default SEO Description",
      type: "text",
      rows: 3,
      group: "seo",
      description:
        "Default meta description for pages without specific SEO (120–160 characters recommended).",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default Social Sharing Image",
      type: "image",
      group: "seo",
      description:
        "Default Open Graph image for social sharing (1200×630 recommended).",
    }),

    // ─── Resume ────────────────────────────────────────────────────────
    defineField({
      name: "resumeFile",
      title: "Resume PDF",
      type: "file",
      group: "resume",
      description: "Upload your resume as a PDF file.",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "resumeButtonLabel",
      title: "Resume Button Label",
      type: "string",
      group: "resume",
      description: "Text shown on the resume download button.",
      initialValue: "Download Resume",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "showResumeCta",
      title: "Show Resume Button",
      type: "boolean",
      group: "resume",
      description: "Whether to display the resume download button publicly.",
      initialValue: true,
    }),

    // ─── Footer ────────────────────────────────────────────────────────
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "string",
      group: "footer",
      description:
        "Text displayed in the footer (e.g. positioning line). Leave blank for default.",
      validation: (Rule) => Rule.max(200),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "headline" },
  },
});
