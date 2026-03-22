import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Plantar Fasciitis Guides: Evidence-Based Heel Pain Relief (2026)" },
  description: "Physiotherapist-reviewed plantar fasciitis guides for shoes, insoles, night splints, stretches, and treatments that work.",
  alternates: { canonical: "https://plantarfasciitisguides.com" },
  openGraph: {
    title: "Plantar Fasciitis Guides: Evidence-Based Heel Pain Relief (2026)",
    description: "Physiotherapist-reviewed plantar fasciitis guides for shoes, insoles, night splints, stretches, and treatments that work.",
    url: "https://plantarfasciitisguides.com",
    type: "website",
  },
};

export default async function HomePage() {
  const articles = await getAllArticles();
  return (
    <>
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-medium px-3 py-1 rounded-full mb-4">Updated for 2026</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Plantar Fasciitis Guides: Stop the Morning Heel Pain
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Physio-reviewed guides for plantar fasciitis shoes, insoles, night splints, stretches, and recovery strategies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plantar-fasciitis-exercises" className="inline-flex items-center justify-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">Best Stretches</Link>
            <Link href="/best-shoes-plantar-fasciitis" className="inline-flex items-center justify-center bg-white text-amber-600 border-2 border-amber-200 px-6 py-3 rounded-lg font-semibold hover:border-amber-400 transition-colors">Best Shoes</Link>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Plantar Fasciitis Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((g) => (
              <Link key={g.slug} href={`/${g.slug}`} className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-lg transition-all duration-200">
                <span className="inline-block text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded mb-3">{g.category}</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors">{g.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{g.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}