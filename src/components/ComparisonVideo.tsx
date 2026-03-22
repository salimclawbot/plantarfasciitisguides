"use client";

import { useEffect, useMemo, useState } from "react";

const LOOP_SECONDS = 30;
const SLIDE_SECONDS = 5;

const slides = [
  {
    title: "Plantar Fasciitis vs Heel Spurs",
    subtitle: "Related but very different conditions",
    icon: "VS",
    bgClass: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    title: "Morning pain is the hallmark sign",
    subtitle: "First steps are worst — fascia tightens overnight",
    icon: "🌅",
    bgClass: "from-amber-600 to-orange-500",
  },
  {
    title: "Stretching before you stand cuts pain by 60%",
    subtitle: "A 2-minute morning routine makes a real difference",
    icon: "🧘",
    bgClass: "from-orange-600 to-red-500",
  },
  {
    title: "The right shoes reduce strain by 40%",
    subtitle: "Arch support and heel cushioning are critical",
    icon: "👟",
    bgClass: "from-yellow-600 to-amber-500",
  },
  {
    title: "Most cases heal in 6–18 months with treatment",
    subtitle: "Consistent stretching and orthotics get you there faster",
    icon: "📅",
    bgClass: "from-amber-700 to-orange-600",
  },
  {
    title: "Read the full plantar fasciitis guide",
    subtitle: "Everything you need to recover faster",
    icon: "→",
    bgClass: "from-orange-700 to-amber-600",
  },
];

export default function ComparisonVideo() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const elapsed = tick % LOOP_SECONDS;
  const slideIndex = useMemo(
    () => Math.floor(elapsed / SLIDE_SECONDS) % slides.length,
    [elapsed]
  );
  const slide = slides[slideIndex];
  const progress = ((elapsed % SLIDE_SECONDS) / SLIDE_SECONDS) * 100;

  return (
    <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
      <div className={`bg-gradient-to-br ${slide.bgClass} p-8 text-white transition-all duration-700`}>
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">
            {slide.icon}
          </div>
          <div>
            <p className="text-lg font-bold">{slide.title}</p>
            <p className="text-sm text-white/80">{slide.subtitle}</p>
          </div>
        </div>
        <div className="mt-4 h-1 rounded-full bg-white/20">
          <div
            className="h-1 rounded-full bg-white/80 transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
