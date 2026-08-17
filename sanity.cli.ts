/**
 * Sanity CLI configuration.
 * Used for dataset management, export/import, and schema validation.
 */
import { defineCliConfig } from "sanity/cli";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  studioHost: "divyansh-singh",
  api: {
    projectId: projectId!,
    dataset: dataset!,
  },
});
