import { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getArticle } from "@/lib/articles";
export const metadata: Metadata = {
  title: "Air Fryer Oven Guide: Best Picks & Reviews (2026)",
  description: "Independent air fryer toaster oven reviews and buying guides for 2026. We test every model for cooking performance, capacity, and value. Find your perfect countertop oven →",
  alternates: { canonical: "https://airfryerovenguide.com" },
};
export default async function HomePage() {
  const slugs = getAllSlugs();
  const articles = (await Promise.all(slugs.map(s => getArticle(s)))).filter(Boolean);
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Air Fryer Oven Guide</h1>
      <p className="text-xl text-slate-600 mb-12">Expert reviews and buying guides for air fryer toaster ovens in 2026.</p>
      <div className="grid gap-6">
        {articles.map((a) => a && (
          <Link key={a.slug} href={`/${a.slug}`} className="block p-6 border border-slate-200 rounded-xl hover:border-orange-400 hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">{a.title}</h2>
            <p className="text-slate-600">{a.description}</p>
            <span className="inline-block mt-3 text-sm font-medium text-orange-600">Read guide →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
