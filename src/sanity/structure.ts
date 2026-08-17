/**
 * Sanity Studio desk structure.
 * Organizes content types into logical groups for easy editing.
 */
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio Content")
    .items([
      // Singleton: Site Settings
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings")
        ),

      // Singleton: About / Profile
      S.listItem()
        .title("About / Profile")
        .id("about")
        .child(
          S.document()
            .schemaType("about")
            .documentId("about")
            .title("About / Profile")
        ),

      // Singleton: Homepage Content
      S.listItem()
        .title("Homepage Content")
        .id("homepageContent")
        .child(
          S.document()
            .schemaType("homepageContent")
            .documentId("homepageContent")
            .title("Homepage Content")
        ),

      S.divider(),

      // Projects
      S.listItem()
        .title("Projects")
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projects")),

      // Experience
      S.listItem()
        .title("Experience")
        .schemaType("experience")
        .child(S.documentTypeList("experience").title("Experience")),

      // Skill Groups
      S.listItem()
        .title("Skill Groups")
        .schemaType("skillGroup")
        .child(S.documentTypeList("skillGroup").title("Skill Groups")),

      // Certifications
      S.listItem()
        .title("Certifications")
        .schemaType("certification")
        .child(
          S.documentTypeList("certification").title("Certifications")
        ),

      S.divider(),

      // Achievements
      S.listItem()
        .title("Achievements")
        .schemaType("achievement")
        .child(
          S.documentTypeList("achievement").title("Achievements")
        ),

      // Contact Methods
      S.listItem()
        .title("Contact Methods")
        .schemaType("contactMethod")
        .child(
          S.documentTypeList("contactMethod").title("Contact Methods")
        ),
    ]);
