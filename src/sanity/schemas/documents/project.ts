import { defineType, defineField } from "sanity";

/**
 * Project — supports both project cards and full case-study content.
 * Each project can be featured, hidden, reordered, and includes rich case-study fields.
 */
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "overview", title: "Overview", default: true },
    { name: "caseStudy", title: "Case Study" },
    { name: "gallery", title: "Gallery" },
    { name: "tech", title: "Technology" },
    { name: "outcomes", title: "Outcomes" },
    { name: "seo", title: "SEO" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    // ─── Overview ──────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      group: "overview",
      description: "The name of the project.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      group: "overview",
      description:
        "URL-friendly identifier. Click 'Generate' to create from title.",
      options: {
        source: "title",
        maxLength: 80,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      group: "overview",
      description: "Short tagline shown below the title on project cards.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "description",
      title: "Card Description",
      type: "text",
      rows: 3,
      group: "overview",
      description:
        "Short description shown on project cards and listings (2–3 sentences).",
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "category",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      group: "overview",
      description: "Project categories (e.g. AI, Automation, Data Analytics).",
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      group: "overview",
      options: { hotspot: true },
      description: "Main project image for cards and hero sections.",
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe what the cover image shows.",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "technologies",
      title: "Technology Stack",
      type: "array",
      of: [{ type: "string" }],
      group: "overview",
      description: "Technologies used in this project (shown as pills).",
      options: { layout: "tags" },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      group: "overview",
      description: "Type of project (e.g. Prototype, Dashboard, Automation).",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "role",
      title: "My Role",
      type: "string",
      group: "overview",
      description: "Your role in the project (e.g. Full-stack Developer, Designer).",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
      group: "overview",
      description: "Project duration (e.g. 'Jan 2024 – Mar 2024').",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      group: "overview",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in-progress" },
          { title: "Prototype", value: "prototype" },
          { title: "Archived", value: "archived" },
        ],
      },
      initialValue: "completed",
    }),
    defineField({
      name: "liveUrl",
      title: "Live Demo URL",
      type: "url",
      group: "overview",
      description: "Link to the live project or prototype.",
      validation: (Rule) =>
        Rule.uri({ allowRelative: false, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      group: "overview",
      description: "Link to the source code repository.",
      validation: (Rule) =>
        Rule.uri({ allowRelative: false, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "documentationUrl",
      title: "Documentation URL",
      type: "url",
      group: "overview",
      description: "Link to project documentation, if applicable.",
      validation: (Rule) =>
        Rule.uri({ allowRelative: false, scheme: ["http", "https"] }),
    }),

    // ─── Case Study ────────────────────────────────────────────────────
    defineField({
      name: "overview",
      title: "Project Overview",
      type: "text",
      rows: 5,
      group: "caseStudy",
      description:
        "Full overview paragraph for the case study page.",
      validation: (Rule) => Rule.max(2000),
    }),
    defineField({
      name: "businessProblem",
      title: "Business Problem",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      group: "caseStudy",
      description:
        "List of business problems this project addresses. Each item is a separate point.",
    }),
    defineField({
      name: "objective",
      title: "Objective",
      type: "text",
      rows: 4,
      group: "caseStudy",
      description: "The primary goal or objective of the project.",
      validation: (Rule) => Rule.max(1000),
    }),
    defineField({
      name: "roleDetails",
      title: "Role & Responsibilities",
      type: "array",
      of: [{ type: "text", rows: 2 }],
      group: "caseStudy",
      description:
        "List of responsibilities and contributions. Each item is a separate bullet.",
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
      rows: 5,
      group: "caseStudy",
      description: "Description of the solution approach.",
      validation: (Rule) => Rule.max(2000),
    }),
    defineField({
      name: "architecture",
      title: "Architecture Steps",
      type: "array",
      of: [{ type: "architectureStep" }],
      group: "caseStudy",
      description: "Architecture flow showing system components and their relationships.",
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "projectFeature" }],
      group: "caseStudy",
      description: "Main features of the project.",
    }),

    // ─── Gallery ───────────────────────────────────────────────────────
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [{ type: "projectScreenshot" }],
      group: "gallery",
      description:
        "Project screenshots for the visual gallery. First image is displayed full-width.",
    }),
    defineField({
      name: "confidentialityNote",
      title: "Confidentiality Note",
      type: "text",
      rows: 2,
      group: "gallery",
      description:
        "Optional disclaimer about simplified or sanitized content.",
      validation: (Rule) => Rule.max(300),
    }),

    // ─── Technology ────────────────────────────────────────────────────
    defineField({
      name: "techGroups",
      title: "Technology Groups",
      type: "array",
      of: [{ type: "techGroup" }],
      group: "tech",
      description:
        "Detailed technology breakdown by category (e.g. AI, Frontend, Backend).",
    }),

    // ─── Outcomes ──────────────────────────────────────────────────────
    defineField({
      name: "businessValue",
      title: "Business Value / Impact",
      type: "array",
      of: [{ type: "text", rows: 2 }],
      group: "outcomes",
      description: "Quantified outcomes and business impact statements.",
    }),
    defineField({
      name: "challenges",
      title: "Challenges & Decisions",
      type: "array",
      of: [{ type: "projectChallenge" }],
      group: "outcomes",
      description: "Key challenges faced and how they were resolved.",
    }),
    defineField({
      name: "learnings",
      title: "Lessons Learned",
      type: "array",
      of: [{ type: "text", rows: 2 }],
      group: "outcomes",
      description: "Key takeaways and learnings from the project.",
    }),

    // ─── SEO ───────────────────────────────────────────────────────────
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",
      description:
        "Custom page title for search engines. Falls back to project title if blank.",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      group: "seo",
      description:
        "Custom meta description. Falls back to card description if blank.",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "seoImage",
      title: "SEO Image",
      type: "image",
      group: "seo",
      description:
        "Custom Open Graph image for social sharing. Falls back to cover image.",
    }),

    // ─── Settings ──────────────────────────────────────────────────────
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      group: "settings",
      description: "Featured projects appear on the homepage.",
      initialValue: false,
    }),
    defineField({
      name: "isVisible",
      title: "Visible on Portfolio",
      type: "boolean",
      group: "settings",
      description:
        "Controls whether this project appears publicly. Unpublish or hide to remove from the site.",
      initialValue: true,
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      group: "settings",
      description:
        "Controls the order projects appear in listings. Lower numbers appear first.",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
    {
      title: "Title A–Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "coverImage",
      featured: "featured",
      visible: "isVisible",
    },
    prepare({ title, subtitle, media, featured, visible }) {
      const badges = [];
      if (featured) badges.push("⭐ Featured");
      if (visible === false) badges.push("🔒 Hidden");
      const suffix = badges.length ? ` [${badges.join(", ")}]` : "";
      return {
        title: `${title}${suffix}`,
        subtitle,
        media,
      };
    },
  },
});
