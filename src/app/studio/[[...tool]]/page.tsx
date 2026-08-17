/**
 * Embedded Sanity Studio route.
 * Accessible at /studio — requires Sanity authentication.
 * Not indexed by search engines (see robots.ts).
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
