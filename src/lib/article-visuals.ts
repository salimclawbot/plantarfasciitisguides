const visuals: Record<string, { src: string; alt: string }> = {
  "best-insoles-plantar-fasciitis": { src: "/images/articles/best-insoles-plantar-fasciitis-hero.webp", alt: "Supportive shoe insoles compared by heel cup and arch profile" },
  "best-night-splints-plantar-fasciitis": { src: "/images/articles/best-night-splints-plantar-fasciitis-hero.webp", alt: "Dorsal and boot-style plantar fasciitis night splints beside a bed" },
  "best-plantar-fasciitis-stretches": { src: "/images/articles/best-plantar-fasciitis-stretches-hero.webp", alt: "Adult demonstrating a gentle wall calf stretch with the heel grounded" },
  "best-running-shoes-plantar-fasciitis-2026": { src: "/images/articles/best-running-shoes-plantar-fasciitis-2026-hero.webp", alt: "Runner wearing supportive neutral running shoes on a park path" },
  "best-sandals-for-plantar-fasciitis-2026": { src: "/images/articles/best-sandals-for-plantar-fasciitis-2026-hero.webp", alt: "Supportive sandals with contoured footbeds and secure heel straps" },
  "best-shoes-plantar-fasciitis": { src: "/images/articles/best-shoes-plantar-fasciitis-hero.webp", alt: "Walking shoe fitting focused on supportive heel fit" },
  "can-plantar-fasciitis-be-permanent": { src: "/images/articles/can-plantar-fasciitis-be-permanent-hero.webp", alt: "Clinician discussing persistent heel pain with an adult using a foot model" },
  "cortisone-injections-for-plantar-fasciitis-honest-review": { src: "/images/articles/cortisone-injections-for-plantar-fasciitis-honest-review-hero.webp", alt: "Clinician explaining injection options with a foot anatomy model" },
  "how-long-does-plantar-fasciitis-take-to-heal": { src: "/images/articles/how-long-does-plantar-fasciitis-take-to-heal-hero.webp", alt: "Footwear progression and blank calendar representing a gradual recovery timeline" },
  "night-splints-for-plantar-fasciitis": { src: "/images/articles/night-splints-for-plantar-fasciitis-hero.webp", alt: "Adult adjusting an unbranded night splint before sleep" },
  "plantar-fasciitis-and-weight-the-link-explained": { src: "/images/articles/plantar-fasciitis-and-weight-the-link-explained-hero.webp", alt: "Supportive consultation about body weight, walking, and heel loading" },
  "plantar-fasciitis-exercises-10-minute-morning-routine": { src: "/images/articles/plantar-fasciitis-exercises-10-minute-morning-routine-hero.webp", alt: "Adult using a towel stretch during a gentle morning heel routine" },
  "plantar-fasciitis-exercises": { src: "/images/articles/plantar-fasciitis-exercises-hero.webp", alt: "Plantar fasciitis exercise station with stretch board, band, towel, and massage ball" },
  "plantar-fasciitis-guides": { src: "/images/articles/plantar-fasciitis-guides-hero.webp", alt: "Clinician reviewing a conservative plantar fasciitis care plan" },
  "plantar-fasciitis-recovery-timeline": { src: "/images/articles/plantar-fasciitis-recovery-timeline-hero.webp", alt: "Adult gradually returning to walking with a blank progress calendar" },
  "plantar-fasciitis-taping-guide-step-by-step": { src: "/images/articles/plantar-fasciitis-taping-guide-step-by-step-hero.webp", alt: "Clinician applying supportive athletic tape to the arch" },
  "plantar-fasciitis-taping-guide": { src: "/images/articles/plantar-fasciitis-taping-guide-hero.webp", alt: "Pre-cut athletic tape and clean foot prepared for arch taping" },
  "plantar-fasciitis-treatment-guide": { src: "/images/articles/plantar-fasciitis-treatment-guide-hero.webp", alt: "Conservative plantar fasciitis treatment tools arranged at a clinic" },
  "plantar-fasciitis-vs-heel-spur": { src: "/images/articles/plantar-fasciitis-vs-heel-spur-hero.webp", alt: "Clinician comparing plantar fascia irritation and heel spur models" },
  "prp-therapy-plantar-fasciitis": { src: "/images/articles/prp-therapy-plantar-fasciitis-hero.webp", alt: "Clinician discussing PRP therapy using a foot model and sealed sample tube" },
  "rolling-tennis-ball-plantar-fasciitis": { src: "/images/articles/rolling-tennis-ball-plantar-fasciitis-hero.webp", alt: "Adult gently rolling the sole of the foot over a tennis ball" },
  "shockwave-therapy-for-plantar-fasciitis-2026-guide": { src: "/images/articles/shockwave-therapy-for-plantar-fasciitis-2026-guide-hero.webp", alt: "Clinician introducing an extracorporeal shockwave therapy device" },
  "shockwave-therapy-plantar-fasciitis-2026": { src: "/images/articles/shockwave-therapy-plantar-fasciitis-2026-hero.webp", alt: "Clinician applying shockwave therapy to a relaxed patient's heel" },
  "shockwave-therapy-plantar-fasciitis": { src: "/images/articles/shockwave-therapy-plantar-fasciitis-hero.webp", alt: "Clinician and patient planning follow-up after shockwave therapy" },
};

export function getArticleVisual(slug: string, title: string) {
  return visuals[slug] ?? { src: "/editorial-hero.png", alt: title };
}
