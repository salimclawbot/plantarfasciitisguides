export async function GET() {
  const body = `# Plantar Fasciitis Guides

> Evidence-led plantar fascia and foot pain guides with affiliate product recommendations.

## Editorial signals
- Site: https://plantarfasciitisguides.com
- About: https://plantarfasciitisguides.com/about
- Affiliate Disclosure: https://plantarfasciitisguides.com/affiliate-disclosure
- Editorial Guidelines: https://plantarfasciitisguides.com/editorial-guidelines
- Privacy Policy: https://plantarfasciitisguides.com/privacy
- Contact: https://plantarfasciitisguides.com/contact

## Contact
- hello@plantarfasciitisguides.com
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
