"use client";

import { useState } from "react";
import Script from "next/script";

const GA_ID = "G-60FDMMZDBB";

const faqData = [
  {
    question: "How long does plantar fasciitis take to heal?",
    answer:
      "Mild cases often resolve in 3–6 weeks with rest, stretching and insoles. Moderate cases take 3–6 months. Chronic plantar fasciitis (over a year) may need cortisone injections, shockwave therapy, or PRP. Consistent daily stretching dramatically speeds recovery.",
  },
  {
    question: "What is the best exercise for plantar fasciitis?",
    answer:
      "The calf stretch (gastrocnemius and soleus), plantar fascia stretch (pulling toes back), and towel curls are the most evidence-backed exercises. Perform 3 sets × 30 seconds each, 3 times daily, including first thing in the morning before walking.",
  },
  {
    question: "Does walking make plantar fasciitis worse?",
    answer:
      "Prolonged standing or walking on hard surfaces aggravates it. However, complete rest is also counterproductive — gentle movement maintains circulation. The key is avoiding barefoot walking on hard floors and wearing supportive footwear at all times.",
  },
  {
    question: "What shoes help plantar fasciitis?",
    answer:
      "Shoes with good arch support, cushioned heels, and firm midsoles help most. Avoid flat shoes (flip flops, ballet flats), high heels, and worn-out trainers. A podiatrist can advise on custom orthotics for persistent cases.",
  },
  {
    question: "Is plantar fasciitis the same as a heel spur?",
    answer:
      "Not exactly — a heel spur is a bony growth that can develop alongside plantar fasciitis, but many people have spurs without pain and vice versa. Plantar fasciitis is inflammation of the fascial band, which is the more treatable condition.",
  },
];

const durationOptions = [
  "Less than 2 weeks",
  "2–6 weeks",
  "6 weeks – 3 months",
  "3–6 months",
  "6–12 months",
  "More than 12 months",
];

const treatmentOptions = [
  "Rest",
  "Ice",
  "Stretching",
  "Orthotics / insoles",
  "Physiotherapy",
  "Cortisone injection",
];

interface RecoveryResult {
  weeks: string;
  phase1: { name: string; duration: string; tasks: string[] };
  phase2: { name: string; duration: string; tasks: string[] };
  phase3: { name: string; duration: string; tasks: string[] };
  nextStep: string;
}

function getRecovery(
  durationIdx: number,
  pain: number,
  morningPain: boolean,
  treatments: boolean[],
  activity: string
): RecoveryResult {
  const treatmentCount = treatments.filter(Boolean).length;
  const hasTried = (i: number) => treatments[i];

  let baseWeeks = 4;
  if (durationIdx <= 1) baseWeeks = 4;
  else if (durationIdx <= 2) baseWeeks = 8;
  else if (durationIdx <= 3) baseWeeks = 12;
  else if (durationIdx <= 4) baseWeeks = 20;
  else baseWeeks = 30;

  if (pain >= 8) baseWeeks = Math.round(baseWeeks * 1.4);
  else if (pain >= 5) baseWeeks = Math.round(baseWeeks * 1.2);

  if (morningPain) baseWeeks = Math.round(baseWeeks * 1.1);

  if (activity === "active") baseWeeks = Math.round(baseWeeks * 1.2);
  else if (activity === "sedentary") baseWeeks = Math.round(baseWeeks * 0.9);

  if (treatmentCount >= 4) baseWeeks = Math.round(baseWeeks * 0.8);
  else if (treatmentCount >= 2) baseWeeks = Math.round(baseWeeks * 0.9);

  const weeksStr = baseWeeks <= 6 ? `${baseWeeks}–${baseWeeks + 4} weeks` : `${baseWeeks}–${baseWeeks + 8} weeks`;

  const phase1Tasks = [
    "Reduce aggravating activities — less standing and walking where possible",
    "Ice the heel for 15 minutes, 3 times daily",
    "Roll a frozen water bottle under your foot for 5 minutes twice daily",
    "Gentle calf stretches held for 30 seconds, 3 sets, twice daily",
    "Wear supportive shoes at all times — no barefoot walking",
  ];

  const phase2Tasks = [
    "Daily plantar fascia stretches — towel stretch and wall calf stretch",
    "Start eccentric calf raises: 3 sets of 12, twice daily",
    hasTried(3) ? "Continue wearing orthotics consistently" : "Consider custom or over-the-counter orthotics for arch support",
    "Gradually increase walking distance by 10% per week",
    "Night splint if morning pain persists",
    hasTried(4) ? "Continue physiotherapy programme" : "Consider booking physiotherapy for hands-on treatment",
  ];

  const phase3Tasks = [
    "Maintain daily stretching routine even as pain reduces",
    "Gradual return to full activity — follow the 10% rule",
    "Continue wearing supportive footwear and orthotics",
    "Strengthen foot intrinsic muscles: towel scrunches, marble pickups",
    "Single-leg calf raises for functional strength",
    "Monitor for flare-ups and reduce load immediately if pain returns above 3/10",
  ];

  const p1Dur = `Weeks 1–${Math.max(2, Math.round(baseWeeks * 0.2))}`;
  const p2Dur = `Weeks ${Math.round(baseWeeks * 0.2) + 1}–${Math.round(baseWeeks * 0.6)}`;
  const p3Dur = `Weeks ${Math.round(baseWeeks * 0.6) + 1}–${baseWeeks}+`;

  let nextStep = "";
  if (!hasTried(2)) nextStep = "Start a daily stretching routine immediately — this is the single most effective treatment for plantar fasciitis.";
  else if (!hasTried(3)) nextStep = "Get fitted for orthotics or quality insoles — proper arch support dramatically accelerates healing.";
  else if (!hasTried(4) && durationIdx >= 2) nextStep = "Book a physiotherapy appointment — at this stage, professional guidance will significantly speed up your recovery.";
  else if (pain >= 8 && !hasTried(5)) nextStep = "Discuss a cortisone injection with your GP — your pain level suggests you may benefit from targeted inflammation reduction.";
  else nextStep = "Stay consistent with your current treatment plan. Recovery takes time, but you're on the right track.";

  return {
    weeks: weeksStr,
    phase1: { name: "Acute Phase — Pain Reduction", duration: p1Dur, tasks: phase1Tasks },
    phase2: { name: "Recovery Phase — Rebuild", duration: p2Dur, tasks: phase2Tasks },
    phase3: { name: "Maintenance Phase — Return to Activity", duration: p3Dur, tasks: phase3Tasks },
    nextStep,
  };
}

export default function RecoveryTrackerPage() {
  const [durationIdx, setDurationIdx] = useState(2);
  const [pain, setPain] = useState(5);
  const [morningPain, setMorningPain] = useState(true);
  const [treatments, setTreatments] = useState([false, false, false, false, false, false]);
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState<RecoveryResult | null>(null);

  const toggleTreatment = (i: number) => {
    const next = [...treatments];
    next[i] = !next[i];
    setTreatments(next);
  };

  const calculate = () => {
    setResult(getRecovery(durationIdx, pain, morningPain, treatments, activity));
  };

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>

      <meta property="og:title" content="Plantar Fasciitis Recovery Tracker — Your Personalised Timeline" />
      <meta property="og:description" content="Get a personalised plantar fasciitis recovery timeline and 3-phase treatment plan based on your pain level, duration, and treatments tried." />
      <meta property="og:image" content="https://plantarfasciitisguides.com/images/recovery-tracker-og.jpg" />
      <meta property="og:url" content="https://plantarfasciitisguides.com/tools/recovery-tracker" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Plantar Fasciitis Recovery Tracker — Your Personalised Timeline" />
      <meta name="twitter:description" content="Get a personalised plantar fasciitis recovery timeline and 3-phase treatment plan based on your pain level, duration, and treatments tried." />
      <link rel="canonical" href="https://plantarfasciitisguides.com/tools/recovery-tracker" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Plantar Fasciitis Recovery Tracker — Your Personalised Timeline",
            author: { "@type": "Person", name: "Dr. Tom Walsh" },
            datePublished: "2025-06-01",
            dateModified: "2026-03-01",
            publisher: {
              "@type": "Organization",
              name: "Plantar Fasciitis Guides",
              url: "https://plantarfasciitisguides.com",
            },
            description: "Get a personalised plantar fasciitis recovery timeline and 3-phase treatment plan based on your pain level, duration, and treatments tried.",
          }),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            Plantar Fasciitis Recovery Tracker
          </h1>

          <p className="text-center text-gray-700 font-bold mb-4 max-w-xl mx-auto">
            Wondering how long your plantar fasciitis recovery will take? Enter your pain level, symptom duration, and treatments tried to get a personalised 3-phase recovery plan with estimated timelines — built by a podiatrist using evidence-based protocols.
          </p>

          <p className="text-center text-sm text-gray-500 mb-2">
            By Dr. Tom Walsh, Podiatrist | Last updated March 2026
          </p>

          <p className="text-center text-xs text-gray-400 mb-8">
            This page contains affiliate links. We may earn a commission at no extra cost to you.
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            {/* Duration */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">How long have you had plantar fasciitis?</label>
              <select
                value={durationIdx}
                onChange={(e) => setDurationIdx(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                {durationOptions.map((opt, i) => (
                  <option key={i} value={i}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Pain slider */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current pain level: <span className="text-blue-600 font-bold">{pain}/10</span>
              </label>
              <input
                type="range"
                min={1}
                max={10}
                value={pain}
                onChange={(e) => setPain(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1 — Mild</span><span>5 — Moderate</span><span>10 — Severe</span>
              </div>
            </div>

            {/* Morning pain */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">First-step morning pain?</label>
              <div className="flex gap-3">
                {[true, false].map((val) => (
                  <button
                    key={String(val)}
                    onClick={() => setMorningPain(val)}
                    className={`flex-1 py-3 rounded-lg text-sm font-medium border transition-colors ${
                      morningPain === val
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    {val ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </div>

            {/* Treatments */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Treatments tried (select all that apply)</label>
              <div className="grid grid-cols-2 gap-2">
                {treatmentOptions.map((t, i) => (
                  <button
                    key={t}
                    onClick={() => toggleTreatment(i)}
                    className={`py-3 px-4 rounded-lg text-sm font-medium border transition-colors text-left ${
                      treatments[i]
                        ? "bg-blue-50 border-blue-500 text-blue-800"
                        : "bg-white border-gray-200 text-gray-700 hover:border-blue-300"
                    }`}
                  >
                    {treatments[i] ? "✓ " : ""}{t}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Activity level</label>
              <div className="grid grid-cols-3 gap-2">
                {["sedentary", "moderate", "active"].map((a) => (
                  <button
                    key={a}
                    onClick={() => setActivity(a)}
                    className={`py-3 rounded-lg text-sm font-medium border capitalize transition-colors ${
                      activity === a
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get My Recovery Plan
            </button>

            {result && (
              <div className="mt-6 space-y-4">
                <div className="bg-blue-50 rounded-lg p-5 text-center">
                  <p className="text-sm text-blue-600 font-medium">Estimated recovery timeline</p>
                  <p className="text-3xl font-bold text-blue-800 mt-1">{result.weeks}</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-1">Your most important next step</h3>
                  <p className="text-sm text-green-800">{result.nextStep}</p>
                </div>

                {[result.phase1, result.phase2, result.phase3].map((phase, pi) => (
                  <div key={pi} className="bg-gray-50 rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                        pi === 0 ? "bg-red-500" : pi === 1 ? "bg-yellow-500" : "bg-green-500"
                      }`}>
                        {pi + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{phase.name}</h3>
                        <p className="text-xs text-gray-500">{phase.duration}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 ml-11">
                      {phase.tasks.map((t, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-gray-400 shrink-0">&#8226;</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="https://www.amazon.com/s?k=plantar+fasciitis+orthotic+insoles&tag=theforge05-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 inline-block"
                  >
                    Shop Plantar Fasciitis Insoles &rarr;
                  </a>
                  <a
                    href="https://www.amazon.com/s?k=plantar+fasciitis+night+splint&tag=theforge05-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 inline-block"
                  >
                    Shop Night Splints &rarr;
                  </a>
                  <a
                    href="https://www.amazon.com/s?k=foam+roller+foot+plantar+fasciitis&tag=theforge05-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 inline-block"
                  >
                    Shop Foot Rollers &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((f, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3>
                  <p className="text-gray-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h2>
            <div className="space-y-3">
              <a href="/best-shoes-for-plantar-fasciitis" className="block text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Best Shoes for Plantar Fasciitis in 2026 &rarr;
              </a>
              <a href="/plantar-fasciitis-stretches" className="block text-blue-600 hover:text-blue-800 hover:underline font-medium">
                The 5 Best Plantar Fasciitis Stretches for Fast Relief &rarr;
              </a>
              <a href="https://sciaticaspot.com" className="block text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Sciatica Pain Relief — Assessment &amp; Treatment Guide &rarr;
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
