import { defineType, defineField } from "sanity";

/**
 * Architecture Step — represents one step in a project's architecture flow.
 */
export const architectureStep = defineType({
  name: "architectureStep",
  title: "Architecture Step",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Step Title",
      type: "string",
      description: "Name of the architecture component or step.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Brief explanation of what this component does.",
      validation: (Rule) => Rule.max(300),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
