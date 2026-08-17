import { defineType, defineField } from "sanity";

/**
 * Certification — professional certifications and credentials.
 */
export const certification = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Certification Name",
      type: "string",
      description: "Full name of the certification or credential.",
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: "issuer",
      title: "Issuing Organization",
      type: "string",
      description: "Who issued this certification (e.g. Google, McKinsey).",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "issueDate",
      title: "Issue Date",
      type: "date",
      description: "When this certification was issued.",
      options: { dateFormat: "MMMM YYYY" },
    }),
    defineField({
      name: "expiryDate",
      title: "Expiry Date",
      type: "date",
      description: "When this certification expires (if applicable).",
      options: { dateFormat: "MMMM YYYY" },
    }),
    defineField({
      name: "credentialId",
      title: "Credential ID",
      type: "string",
      description: "Unique credential identifier.",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "credentialUrl",
      title: "Verification URL",
      type: "url",
      description: "Link to verify the credential online.",
      validation: (Rule) =>
        Rule.uri({ allowRelative: false, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "certificateImage",
      title: "Certificate Image",
      type: "image",
      description: "Image of the certificate (optional).",
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Accessible description of the certificate image.",
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Brief description of what this certification covers.",
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: "skillsDemonstrated",
      title: "Skills Demonstrated",
      type: "array",
      of: [{ type: "string" }],
      description: "Key skills this certification validates.",
      options: { layout: "tags" },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Featured certifications may appear more prominently.",
      initialValue: false,
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description: "Controls order in listings. Lower numbers appear first.",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "isVisible",
      title: "Visible",
      type: "boolean",
      description: "Controls whether this certification appears publicly.",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Issue Date (newest first)",
      name: "issueDateDesc",
      by: [{ field: "issueDate", direction: "desc" }],
    },
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "issuer", featured: "featured" },
    prepare({ title, subtitle, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: subtitle || "No issuer",
      };
    },
  },
});
