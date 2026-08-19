import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ARCHIVED_SLUGS = new Set(["air-fryer-vs-toaster-oven", "best-air-fryer-oven-large-families", "best-air-fryer-oven-under-100", "best-air-fryer-toaster-oven"]);
const CONSOLIDATED_SLUGS: Record<string, string> = {
  "plantar-fasciitis-guides": "plantar-fasciitis-treatment-guide",
  "plantar-fasciitis-taping-guide": "plantar-fasciitis-taping-guide-step-by-step",
  "shockwave-therapy-for-plantar-fasciitis-2026-guide": "shockwave-therapy-plantar-fasciitis-2026",
  "shockwave-therapy-plantar-fasciitis": "shockwave-therapy-plantar-fasciitis-2026",
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const slug = pathname.replace(/^\/guides\//, "").replace(/^\//, "");
  if (ARCHIVED_SLUGS.has(slug)) return NextResponse.redirect(new URL("/", request.url), 308);
  if (CONSOLIDATED_SLUGS[slug]) return NextResponse.redirect(new URL(`/${CONSOLIDATED_SLUGS[slug]}${search}`, request.url), 308);

  if (pathname === "/guides") {
    return NextResponse.redirect(new URL(`/${search}`, request.url), 301);
  }

  if (pathname.startsWith("/guides/")) {
    const targetPath = pathname.replace(/^\/guides/, "") || "/";
    return NextResponse.redirect(new URL(`${targetPath}${search}`, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/guides", "/guides/:path*", "/air-fryer-vs-toaster-oven", "/best-air-fryer-oven-large-families", "/best-air-fryer-oven-under-100", "/best-air-fryer-toaster-oven", "/plantar-fasciitis-guides", "/plantar-fasciitis-taping-guide", "/shockwave-therapy-for-plantar-fasciitis-2026-guide", "/shockwave-therapy-plantar-fasciitis"],
};
