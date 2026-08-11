export type AmazonProductRecord = { id: string; asin: string; label: string };
export type AmazonProductGroup = { heading: string; similarQuery: string; products: AmazonProductRecord[] };

export const allowedAmazonProducts: Record<string, AmazonProductRecord> = {
  "PF-CANDIDATE-OOFOS-OORIGINAL-NOMAD-W6-M4": {
    "id": "PF-CANDIDATE-OOFOS-OORIGINAL-NOMAD-W6-M4",
    "asin": "B007VDSTW0",
    "label": "OOFOS OOriginal Recovery Sandal, black, women 7 / men 5"
  }
};

const groups: Record<string, AmazonProductGroup> = {
  "best-sandals-for-plantar-fasciitis-2026": {
    "heading": "Available sandal variant referenced in this guide",
    "similarQuery": "supportive walking sandals",
    "products": [
      {
        "id": "PF-CANDIDATE-OOFOS-OORIGINAL-NOMAD-W6-M4",
        "asin": "B007VDSTW0",
        "label": "OOFOS OOriginal Recovery Sandal, black, women 7 / men 5"
      }
    ]
  }
};

export function getAmazonProductGroup(slug: string): AmazonProductGroup | null {
  const exact = groups[slug];
  if (exact) return exact;

  const allowed = /(best-(insoles|night-splints|running-shoes|sandals|shoes)|night-splints-for)/i.test(slug);
  const denied = /(air-fryer|exercise|stretch|taping|injection|therapy|treatment|heal|recovery|weight|heel-spur|permanent|tennis-ball)/i.test(slug);
  if (!allowed || denied) return null;

  return {
    heading: "Footwear and support products related to this guide",
    similarQuery: "plantar fasciitis support footwear insoles",
    products: [],
  };
}
