import type { Metadata } from "next";

export const metadata: Metadata = { title: "About",
  description: "Plantar Fasciitis Guides is your practical guide to evidence-forward product comparisons, buying support, and transparent recommendations.",
  alternates: { canonical: "https://plantarfasciitisguides.com/about" },
  openGraph: {
    title: "About",
    description: "Plantar Fasciitis Guides is your practical guide to evidence-forward product comparisons, buying support, and transparent recommendations.",
    url: "https://plantarfasciitisguides.com/about",
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
    title: "About",
    description: "Plantar Fasciitis Guides is your practical guide to evidence-forward product comparisons, buying support, and transparent recommendations.",
    images: ["https://plantarfasciitisguides.com/editorial-hero.png"],
  }};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-4">
      <h1 className="text-3xl font-bold">About Plantar Fasciitis Guides</h1>
      <p>Plantar Fasciitis Guides publishes evidence-aware articles on heel pain, footwear, insoles, exercises, daily comfort, and questions to discuss with a qualified healthcare professional.</p>
      <p>Our editorial team separates clinical information from product-selection criteria, cites external evidence where appropriate, and does not claim individual credentials or hands-on testing that has not been documented.</p>
    </div>
  );
}
