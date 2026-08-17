import { defineType, defineField } from "sanity";

/**
 * Contact Method — a way for visitors to reach you (email, LinkedIn, GitHub, etc.).
 */
export const contactMethod = defineType({
  name: "contactMethod",
  title: "Contact Method",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Contact Type",
      type: "string",
      description: "Type of contact method.",
      options: {
        list: [
          { title: "Email", value: "email" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "GitHub", value: "github" },
          { title: "Twitter / X", value: "twitter" },
          { title: "Website", value: "website" },
          { title: "Phone", value: "phone" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Display Label",
      type: "string",
      description: "Label shown to visitors (e.g. 'LinkedIn', 'Email').",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "value",
      title: "Display Value",
      type: "string",
      description:
        "What visitors see (e.g. email address, username). Not required for all types.",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "url",
      title: "Destination URL",
      type: "string",
      description:
        "Full URL or email address. For email, just the address (mailto: is added automatically).",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "icon",
      title: "Icon Identifier",
      type: "string",
      description:
        "Lucide icon name (e.g. linkedin, github, mail). Must match an existing frontend icon.",
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: "isPreferred",
      title: "Preferred Contact Method",
      type: "boolean",
      description: "Mark as preferred to highlight this method.",
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
      description: "Controls whether this contact method appears publicly.",
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
    select: { title: "label", subtitle: "value", type: "type" },
    prepare({ title, subtitle, type }) {
      return {
        title,
        subtitle: subtitle || type || "",
      };
    },
  },
});
