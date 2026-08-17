import { defineType, defineField } from "sanity";

/**
 * Achievement — professional achievements, awards, and recognition.
 */
export const achievement = defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Achievement Title",
      type: "string",
      description: "Name of the achievement or recognition.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Brief description of the achievement.",
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      description: "When this was achieved (e.g. 'Jul 2026', '2022').",
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description:
        "Category of achievement (e.g. Professional Development, Innovation, Technical).",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "icon",
      title: "Icon Identifier",
      type: "string",
      description:
        "Lucide icon name (e.g. GraduationCap, Lightbulb, BarChart3).",
      validation: (Rule) => Rule.max(50),
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
      description: "Controls whether this achievement appears publicly.",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
