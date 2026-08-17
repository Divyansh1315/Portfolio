import { defineType, defineField } from "sanity";

/**
 * Project Screenshot — an image with title, description, and alt text for galleries.
 */
export const projectScreenshot = defineType({
  name: "projectScreenshot",
  title: "Screenshot",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Screenshot Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload the screenshot image.",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Short label for this screenshot.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Brief explanation of what this screenshot shows.",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description:
        "Accessible description for screen readers. Describe what is visible in the image.",
      validation: (Rule) => Rule.required().max(200),
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
