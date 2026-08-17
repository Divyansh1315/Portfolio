/**
 * Sanity schema registry.
 * All document and object types are registered here.
 */
import { type SchemaTypeDefinition } from "sanity";

// Object types (reusable within documents)
import {
  portableText,
  architectureStep,
  projectFeature,
  projectScreenshot,
  projectChallenge,
  techGroup,
} from "./objects";

// Document types
import { siteSettings } from "./documents/siteSettings";
import { about } from "./documents/about";
import { project } from "./documents/project";
import { experience } from "./documents/experience";
import { skillGroup } from "./documents/skillGroup";
import { certification } from "./documents/certification";
import { achievement } from "./documents/achievement";
import { contactMethod } from "./documents/contactMethod";
import { homepageContent } from "./documents/homepageContent";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Objects
  portableText,
  architectureStep,
  projectFeature,
  projectScreenshot,
  projectChallenge,
  techGroup,

  // Singletons
  siteSettings,
  about,
  homepageContent,

  // Documents
  project,
  experience,
  skillGroup,
  certification,
  achievement,
  contactMethod,
];
