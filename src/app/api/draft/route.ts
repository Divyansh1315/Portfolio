/**
 * Draft mode toggle endpoint.
 * Enables/disables Next.js draft mode for previewing unpublished content.
 *
 * Enable:  GET /api/draft?secret=<token>&redirect=/path
 * Disable: GET /api/draft?disable=true
 */
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Disable draft mode
  if (searchParams.get("disable") === "true") {
    const draft = await draftMode();
    draft.disable();
    return redirect(searchParams.get("redirect") || "/");
  }

  // Enable draft mode — validate secret
  const secret = searchParams.get("secret");
  const expectedSecret = process.env.SANITY_API_READ_TOKEN;

  if (!secret || secret !== expectedSecret) {
    return new NextResponse("Invalid secret", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  const redirectPath = searchParams.get("redirect") || "/";
  return redirect(redirectPath);
}
