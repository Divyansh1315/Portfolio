/**
 * Embedded Sanity Studio route.
 * Accessible at /studio — requires Sanity authentication.
 * Not indexed by search engines (see robots.ts).
 *
 * Studio is ~1.5MB JS — this is inherent to the Sanity Studio package.
 * force-static ensures HTML is served from CDN edge on subsequent loads.
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <NextStudio
      config={config}
      unstable_globalStyles
    />
  );
}
