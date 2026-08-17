import { defineType, defineField } from "sanity";

/**
 * Tech Group — a labeled group of technologies (e.g. "Frontend": ["React", "Vite"]).
 */
export const techGroup = defineType({
  name: "techGroup",
  title: "Technology Group",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Group Label",
      type: "string",
      description: "Category name (e.g. Frontend, Backend, AI, Cloud).",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "items",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      description: "List of technologies in this group.",
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "label", items: "items" },
    prepare({ title, items }) {
      return {
        title,
        subtitle: items?.join(", ") || "",
      };
    },
  },
});
