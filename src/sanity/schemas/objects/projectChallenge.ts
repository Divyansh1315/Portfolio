import { defineType, defineField } from "sanity";

/**
 * Project Challenge — a challenge/decision pair documenting design trade-offs.
 */
export const projectChallenge = defineType({
  name: "projectChallenge",
  title: "Challenge & Decision",
  type: "object",
  fields: [
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 3,
      description: "The problem or constraint encountered.",
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: "decision",
      title: "Decision",
      type: "text",
      rows: 3,
      description: "How the challenge was addressed or resolved.",
      validation: (Rule) => Rule.required().max(500),
    }),
  ],
  preview: {
    select: { title: "challenge" },
    prepare({ title }) {
      return {
        title: title?.slice(0, 80) || "Challenge",
      };
    },
  },
});
