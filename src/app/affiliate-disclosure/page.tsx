import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Plantar Fasciitis Guides is transparent about affiliate links and sponsorships, with clear disclosures for every sponsored recommendation.",
  alternates: { canonical: "https://plantarfasciitisguides.com/affiliate-disclosure" },
  openGraph: {
    title: "Affiliate Disclosure",
    description: "Plantar Fasciitis Guides is transparent about affiliate links and sponsorships, with clear disclosures for every sponsored recommendation.",
    url: "https://plantarfasciitisguides.com/affiliate-disclosure",
    siteName: "Plantar Fasciitis Guides",
    type: "website",
    images: [
      {
        url: "https://plantarfasciitisguides.com/editorial-hero.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Disclosure",
    description: "Plantar Fasciitis Guides is transparent about affiliate links and sponsorships, with clear disclosures for every sponsored recommendation.",
    images: ["https://plantarfasciitisguides.com/editorial-hero.png"],
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-4">
      <h1 className="text-3xl font-bold">Affiliate Disclosure</h1>
      <p><strong>Last updated:</strong> March 11, 2026</p>
      <p>
        Office Chair Picks is reader-supported. We may earn a commission when you buy through certain links on this site.
        This comes at no additional cost to you.
      </p>

      <h2 className="text-xl font-semibold">How Affiliate Links Work</h2>
      <ol className="list-decimal pl-6 space-y-1">
        <li>You click a product link on our site.</li>
        <li>You visit the retailer (for example, Amazon).</li>
        <li>If you purchase, we may receive a commission from the retailer.</li>
      </ol>

      <h2 className="text-xl font-semibold">Editorial Independence</h2>
      <p>
        Affiliate relationships do not control our rankings or recommendations. We prioritize test evidence,
        ergonomic support, adjustability, comfort, and long-term value.
      </p>

      <h2 className="text-xl font-semibold">Affiliate Programs</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Amazon Associates</li>
        <li>Other retailer or direct manufacturer programs where relevant</li>
      </ul>

      <h2 className="text-xl font-semibold">FTC Compliance</h2>
      <p>
        This disclosure is provided in line with FTC endorsement and advertising guidance.
      </p>

      <h2 className="text-xl font-semibold">Contact</h2>
      <p>Email: <a className="text-blue-700 underline" href="mailto:editorial@officechairpicks.vercel.app">editorial@officechairpicks.vercel.app</a></p>
    </div>
  );
}
