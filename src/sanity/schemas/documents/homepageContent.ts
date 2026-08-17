import { defineType, defineField } from "sanity";

/**
 * Homepage Content — singleton document for editable homepage section text.
 * Groups section eyebrows, headings, and descriptions by page section.
 */
export const homepageContent = defineType({
  name: "homepageContent",
  title: "Homepage Content",
  type: "document",
  groups: [
    { name: "capabilities", title: "Capabilities", default: true },
    { name: "workMethod", title: "Work Method" },
    { name: "projects", title: "Featured Projects" },
    { name: "experience", title: "Experience Preview" },
    { name: "skills", title: "Skills" },
    { name: "achievements", title: "Achievements" },
    { name: "resume", title: "Resume CTA" },
    { name: "contact", title: "Contact" },
  ],
  fields: [
    // ─── Capabilities Section ──────────────────────────────────────────
    defineField({
      name: "capabilitiesEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "capabilities",
      initialValue: "WHAT I DO",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "capabilitiesHeading",
      title: "Heading",
      type: "string",
      group: "capabilities",
      initialValue: "Core Capabilities",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "capabilitiesDescription",
      title: "Description",
      type: "text",
      rows: 2,
      group: "capabilities",
      validation: (Rule) => Rule.max(300),
    }),

    // ─── Work Method Section ───────────────────────────────────────────
    defineField({
      name: "workMethodEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "workMethod",
      initialValue: "HOW I WORK",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "workMethodHeading",
      title: "Heading",
      type: "string",
      group: "workMethod",
      initialValue: "From Problem to Practical Solution",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "workMethodDescription",
      title: "Description",
      type: "text",
      rows: 2,
      group: "workMethod",
      validation: (Rule) => Rule.max(300),
    }),

    // ─── Featured Projects Section ─────────────────────────────────────
    defineField({
      name: "projectsEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "projects",
      initialValue: "FEATURED WORK",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "projectsHeading",
      title: "Heading",
      type: "string",
      group: "projects",
      initialValue: "Things I've Built",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "projectsDescription",
      title: "Description",
      type: "text",
      rows: 2,
      group: "projects",
      validation: (Rule) => Rule.max(300),
    }),

    // ─── Experience Preview Section ────────────────────────────────────
    defineField({
      name: "experienceEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "experience",
      initialValue: "EXPERIENCE",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "experienceHeading",
      title: "Heading",
      type: "string",
      group: "experience",
      initialValue: "My Professional Journey",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "experienceDescription",
      title: "Description",
      type: "text",
      rows: 2,
      group: "experience",
      validation: (Rule) => Rule.max(300),
    }),

    // ─── Skills Section ────────────────────────────────────────────────
    defineField({
      name: "skillsEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "skills",
      initialValue: "SKILLS",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "skillsHeading",
      title: "Heading",
      type: "string",
      group: "skills",
      initialValue: "Tools I Use to Turn Ideas Into Solutions",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "skillsDescription",
      title: "Description",
      type: "text",
      rows: 2,
      group: "skills",
      validation: (Rule) => Rule.max(300),
    }),

    // ─── Achievements Section ──────────────────────────────────────────
    defineField({
      name: "achievementsEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "achievements",
      initialValue: "BEYOND THE DAY-TO-DAY",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "achievementsHeading",
      title: "Heading",
      type: "string",
      group: "achievements",
      initialValue: "Learning, Innovation & Professional Growth",
      validation: (Rule) => Rule.max(100),
    }),

    // ─── Resume CTA Section ────────────────────────────────────────────
    defineField({
      name: "resumeCtaHeading",
      title: "Heading",
      type: "string",
      group: "resume",
      initialValue:
        "Looking for someone who can bridge business and technology?",
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: "resumeCtaDescription",
      title: "Description",
      type: "text",
      rows: 3,
      group: "resume",
      validation: (Rule) => Rule.max(400),
    }),

    // ─── Contact Section ───────────────────────────────────────────────
    defineField({
      name: "contactEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "contact",
      initialValue: "CONTACT",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "contactHeading",
      title: "Heading",
      type: "string",
      group: "contact",
      initialValue: "Let's Connect",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "contactDescription",
      title: "Description",
      type: "text",
      rows: 2,
      group: "contact",
      validation: (Rule) => Rule.max(300),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage Content" };
    },
  },
});
