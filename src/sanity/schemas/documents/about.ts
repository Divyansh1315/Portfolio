import { defineType, defineField } from "sanity";

/**
 * About / Profile — singleton document for the About page content.
 */
export const about = defineType({
  name: "about",
  title: "About / Profile",
  type: "document",
  groups: [
    { name: "intro", title: "Introduction", default: true },
    { name: "details", title: "Details" },
    { name: "visibility", title: "Visibility" },
  ],
  fields: [
    // ─── Introduction ──────────────────────────────────────────────────
    defineField({
      name: "eyebrow",
      title: "Section Eyebrow",
      type: "string",
      group: "intro",
      description: "Small label above the heading (e.g. 'ABOUT ME').",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      group: "intro",
      description: "Main heading for the About section.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "shortIntro",
      title: "Short Introduction",
      type: "text",
      rows: 3,
      group: "intro",
      description:
        "Brief introduction shown at the top of the About page.",
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "biography",
      title: "Full Biography",
      type: "portableText",
      group: "intro",
      description: "Your complete professional story with rich text formatting.",
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      group: "intro",
      options: { hotspot: true },
      description: "Image used on the About page.",
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Accessible description of this image.",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // ─── Details ───────────────────────────────────────────────────────
    defineField({
      name: "focusAreas",
      title: "Professional Focus Areas",
      type: "array",
      of: [{ type: "string" }],
      group: "details",
      description:
        "Key areas of professional focus (e.g. 'Data Analytics', 'AI Solutions').",
    }),
    defineField({
      name: "careerHighlights",
      title: "Career Highlights",
      type: "array",
      of: [{ type: "string" }],
      group: "details",
      description: "Notable career achievements or milestones.",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      group: "details",
      description: "Your current location.",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "currentRole",
      title: "Current Role",
      type: "string",
      group: "details",
      description: "Your current job title and organization.",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "number",
      group: "details",
      description: "Total years of professional experience (if displayed).",
      validation: (Rule) => Rule.min(0).max(50),
    }),

    // ─── Visibility ────────────────────────────────────────────────────
    defineField({
      name: "isVisible",
      title: "Show About Section",
      type: "boolean",
      group: "visibility",
      description: "Controls whether the About section appears publicly.",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "About / Profile" };
    },
  },
});
