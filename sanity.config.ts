/**
 * Sanity Studio configuration.
 * This file is used by the embedded Studio at /studio and the standalone deploy.
 *
 * Environment variable resolution order:
 *   1. SANITY_STUDIO_* — used by `sanity deploy` (Vite only exposes this prefix)
 *   2. NEXT_PUBLIC_*   — used by the Next.js embedded studio at /studio
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";
import { structure } from "./src/sanity/structure";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "y5z0jtj9";

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

if (!projectId) {
  throw new Error(
    "Missing SANITY_STUDIO_PROJECT_ID. Add it before building or deploying Sanity Studio."
  );
}

if (!dataset) {
  throw new Error(
    "Missing SANITY_STUDIO_DATASET. Add it before building or deploying Sanity Studio."
  );
}

export default defineConfig({
  name: "divyansh-portfolio",
  title: "Portfolio CMS",

  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
  ],

  schema: {
    types: schemaTypes,
  },
});
