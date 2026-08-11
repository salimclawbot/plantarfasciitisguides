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
      <h1 className="text-3xl font-bold">About Office Chair Picks</h1>
      <p>Office Chair Picks publishes practical buying guides and comparisons for people trying to reduce back pain, improve posture, and sit more comfortably through long workdays.</p>
      <p>Our editorial team compares published research, manufacturer specifications, and independent owner feedback. We do not claim individual clinical credentials or first-hand testing.</p>
    </div>
  );
}
