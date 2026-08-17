/**
 * Revalidation webhook endpoint.
 * Called by Sanity when content is published.
 * Validates the secret before revalidating affected paths/tags.
 */
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: { current?: string };
    }>(req, process.env.SANITY_REVALIDATE_SECRET);

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new NextResponse("Bad request", { status: 400 });
    }

    // Revalidate based on document type
    switch (body._type) {
      case "siteSettings":
        revalidateTag("siteSettings");
        break;
      case "homepageContent":
        revalidateTag("homepageContent");
        break;
      case "about":
        revalidateTag("about");
        break;
      case "project":
        revalidateTag("projects");
        if (body.slug?.current) {
          revalidateTag(`project-${body.slug.current}`);
        }
        break;
      case "experience":
        revalidateTag("experience");
        break;
      case "skillGroup":
        revalidateTag("skills");
        break;
      case "certification":
        revalidateTag("certifications");
        break;
      case "achievement":
        revalidateTag("achievements");
        break;
      case "contactMethod":
        revalidateTag("contact");
        break;
      default:
        // Revalidate all content for unknown types
        revalidateTag("siteSettings");
        revalidateTag("projects");
        break;
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      type: body._type,
      now: Date.now(),
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
