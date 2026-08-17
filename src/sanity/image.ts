import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./client";

const builder = imageUrlBuilder(client);

/**
 * Generate optimized image URLs from Sanity image references.
 * Supports crop, hotspot, width, height, and format parameters.
 *
 * Usage:
 *   urlFor(image).width(800).height(600).url()
 *   urlFor(image).auto("format").url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
