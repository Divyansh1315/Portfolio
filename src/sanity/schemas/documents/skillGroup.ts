import { defineType, defineField } from "sanity";

/**
 * Skill Group — a category of skills with individual skill entries.
 */
export const skillGroup = defineType({
  name: "skillGroup",
  title: "Skill Group",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Group Name",
      type: "string",
      description: "Category name (e.g. 'Data & Analytics', 'AI', 'Automation').",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Brief description of this skill category.",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Skill Name",
              type: "string",
              validation: (Rule) => Rule.required().max(60),
            }),
            defineField({
              name: "level",
              title: "Proficiency Level",
              type: "string",
              options: {
                list: [
                  { title: "Beginner", value: "beginner" },
                  { title: "Intermediate", value: "intermediate" },
                  { title: "Advanced", value: "advanced" },
                  { title: "Expert", value: "expert" },
                ],
              },
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "level" },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: subtitle
                  ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1)
                  : undefined,
              };
            },
          },
        },
      ],
      description: "Individual skills within this group.",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "icon",
      title: "Icon Identifier",
      type: "string",
      description:
        "Lucide icon name for this group (e.g. BarChart3, Brain, Workflow).",
      validation: (Rule) => Rule.max(50),
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description: "Controls order on the Skills page. Lower numbers appear first.",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "isVisible",
      title: "Visible",
      type: "boolean",
      description: "Controls whether this skill group appears publicly.",
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
    select: { title: "name", skills: "skills" },
    prepare({ title, skills }) {
      return {
        title,
        subtitle: skills ? `${skills.length} skills` : "No skills",
      };
    },
  },
});
