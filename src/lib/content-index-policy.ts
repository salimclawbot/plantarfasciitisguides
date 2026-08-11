export const quarantinedContentSlugs = new Set([
  "air-fryer-vs-toaster-oven",
  "best-air-fryer-oven-large-families",
  "best-air-fryer-oven-under-100",
  "best-air-fryer-toaster-oven",
]);

export function isIndexableContentSlug(slug: string): boolean {
  return !quarantinedContentSlugs.has(slug);
}
