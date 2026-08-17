import { defineType, defineField } from "sanity";

/**
 * Project Feature — a key feature with title, description, and icon reference.
 */
export const projectFeature = defineType({
  name: "projectFeature",
  title: "Project Feature",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Feature Title",
      type: "string",
      description: "Short name for this feature.",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "What this feature does and why it matters.",
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: "icon",
      title: "Icon Identifier",
      type: "string",
      description:
        "Lucide icon name (e.g. BarChart3, MessageSquare, FileText). Must match an existing frontend icon.",
      validation: (Rule) => Rule.max(50),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "icon" },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Icon: ${subtitle}` : "No icon",
      };
    },
  },
});
