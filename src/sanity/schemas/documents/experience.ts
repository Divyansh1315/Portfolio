import { defineType, defineField } from "sanity";

/**
 * Experience — professional experience entries with dates, responsibilities,
 * achievements, and technology context.
 */
export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Organization",
      type: "string",
      description: "Company or organization name.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description: "Your job title at this organization.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      description: "Type of employment.",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Internship", value: "internship" },
          { title: "Fellowship", value: "fellowship" },
          { title: "Freelance", value: "freelance" },
        ],
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Work location (e.g. 'Manesar, India').",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      description: "When you started this role.",
      options: { dateFormat: "MMMM YYYY" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "When you left this role. Leave blank if currently working here.",
      options: { dateFormat: "MMMM YYYY" },
    }),
    defineField({
      name: "isCurrent",
      title: "Currently Working Here",
      type: "boolean",
      description: "Check if this is your current role.",
      initialValue: false,
    }),
    defineField({
      name: "summary",
      title: "Short Summary",
      type: "text",
      rows: 3,
      description: "One-line summary of your role and impact.",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "responsibilities",
      title: "Key Responsibilities",
      type: "array",
      of: [{ type: "string" }],
      description: "Main responsibilities in this role.",
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
      description: "Notable achievements or accomplishments.",
    }),
    defineField({
      name: "technologies",
      title: "Technologies & Tools",
      type: "array",
      of: [{ type: "string" }],
      description: "Tools and technologies used in this role.",
      options: { layout: "tags" },
    }),
    defineField({
      name: "companyLogo",
      title: "Organization Logo",
      type: "image",
      description: "Logo of the organization (optional).",
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Accessible description of the logo.",
        }),
      ],
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
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Featured experiences may appear on the homepage.",
      initialValue: false,
    }),
    defineField({
      name: "isVisible",
      title: "Visible",
      type: "boolean",
      description: "Controls whether this entry appears publicly.",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Start Date (newest first)",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "role",
      subtitle: "company",
      media: "companyLogo",
      current: "isCurrent",
    },
    prepare({ title, subtitle, media, current }) {
      return {
        title: current ? `${title} (Current)` : title,
        subtitle,
        media,
      };
    },
  },
});
