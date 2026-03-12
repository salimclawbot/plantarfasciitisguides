import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Plantar Fasciitis Guides — Best Shoes, Insoles & Treatments (2026)", template: "%s | Plantar Fasciitis Guides" },
  description: "Expert plantar fasciitis guides, best shoe reviews and treatment advice from podiatrists for 2026.",
  metadataBase: new URL("https://plantarfasciitisguides.com"),
  alternates: { canonical: "https://plantarfasciitisguides.com" },
  openGraph: {
    siteName: "Plantar Fasciitis Guides",
    type: "website",
    title: "Plantar Fasciitis Guides — Best Shoes, Insoles & Treatments (2026)",
    description: "Expert plantar fasciitis guides, best shoe reviews and treatment advice from podiatrists for 2026.",
    url: "https://plantarfasciitisguides.com",
    images: [{ url: "https://plantarfasciitisguides.com/og-image.jpg", width: 1200, height: 630, alt: "Plantar Fasciitis Guides — Best Shoes, Insoles & Treatments (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plantar Fasciitis Guides — Best Shoes, Insoles & Treatments (2026)",
    description: "Expert plantar fasciitis guides, best shoe reviews and treatment advice from podiatrists for 2026.",
    images: ["https://plantarfasciitisguides.com/og-image.jpg"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Plantar Fasciitis Guides",
  "url": "https://plantarfasciitisguides.com",
  "description": "Expert plantar fasciitis treatment guides and product reviews",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://plantarfasciitisguides.com/?s={{search_term_string}}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main >{children}</main>
      </body>
    </html>
  );
}
