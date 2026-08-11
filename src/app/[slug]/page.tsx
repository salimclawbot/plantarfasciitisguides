import { Metadata } from "next";
import AmazonProductShowcase from "@/components/AmazonProductShowcase";
import { getAmazonProductGroup } from "@/lib/amazon-product-registry";
import AffiliateDisclosureNotice from "@/components/AffiliateDisclosureNotice";
import { notFound } from "next/navigation";
import { getArticle, getAllSlugs } from "@/lib/articles";
import { isIndexableContentSlug } from "@/lib/content-index-policy";
import {
  buildKeywords,
  normalizeArticleHtml,
  normalizeMetaTitle,
  type TocItem,
} from "@/lib/article-page-utils";

interface PageProps {
  params: { slug: string };
}

function TableOfContents({ items }: { items: TocItem[] }) {
  if (!items.length) return null;
  return (
    <nav className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
      <p className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Table of Contents</p>
      <ol className="list-decimal list-inside space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-sm text-slate-700 hover:text-slate-900 hover:underline">
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function InternalLinks({ currentSlug }: { currentSlug: string }) {
  const related = [
    { label: "Best Shoes for Plantar Fasciitis", slug: "best-shoes-for-plantar-fasciitis" },
    { label: "Plantar Fasciitis Stretches for Better Mornings", slug: "plantar-fasciitis-stretches-guide" },
    { label: "Insoles and Arch Support", slug: "best-arch-support-orthotics" },
    { label: "Plantar Fasciitis Recovery Checklist", slug: "plantar-fasciitis-recovery-checklist" },
  ];

  return (
    <aside className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
      <h2 className="text-lg font-bold text-slate-900">More Plantar Fascia Guides</h2>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {related.map((guide) => (
          <li key={guide.slug}>
            <a href={`/${guide.slug}`} className="hover:underline">
              {guide.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-500">Current focus: {currentSlug}</p>
    </aside>
  );
}

function FaqSection({ items, slug }: { items: { question: string; answer: string }[]; slug: string }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-2xl font-bold text-slate-900" id="faq">
        Frequently Asked Questions
      </h2>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <details key={`${slug}-${item.question}`} className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
            <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return { title: "Not Found" };

  const title = normalizeMetaTitle(article.title);

  return {
    title,
    description: article.description,
    keywords: buildKeywords(article.title, article.category),
    robots: isIndexableContentSlug(article.slug) ? { index: true, follow: true } : { index: false, follow: true },
    alternates: { canonical: `https://plantarfasciitisguides.com/${article.slug}` },
    openGraph: {
      title,
      description: article.description,
      url: `https://plantarfasciitisguides.com/${article.slug}`,
      images: [{ url: `https://plantarfasciitisguides.com/editorial-hero.png`, width: 1200, height: 630, alt: title }],
      type: "article",
      siteName: "Plantar Fasciitis Guides",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
      images: ["https://plantarfasciitisguides.com/editorial-hero.png"],
    },
  };
}

void FaqSection;

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  const title = normalizeMetaTitle(article.title);
  const { html, toc } = normalizeArticleHtml(article.htmlContent, article.title);
  const amazonProductGroup = getAmazonProductGroup(article.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{article.category || "Plantar Fascia Guide"}</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">{title}</h1>
      <p className="mt-3 text-slate-600">By Plantar Fasciitis Guides Editorial Team · Updated {article.dateModified}</p>
      <figure className="my-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
        <img src="/editorial-hero.png" alt={article.title} className="aspect-[16/9] w-full object-cover" width="1536" height="864" fetchPriority="high" />
      </figure>
      <AffiliateDisclosureNotice />


      <TableOfContents items={toc} />
      <AmazonProductShowcase group={amazonProductGroup} slug={article.slug} />
      <div className="prose prose-slate max-w-none mt-8" dangerouslySetInnerHTML={{ __html: html }} />
      <InternalLinks currentSlug={article.slug} />
    </article>
  );
}
