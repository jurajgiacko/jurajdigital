"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { storyChapters, beliefs } from "@/data/translations";

export default function About() {
  const { language, t } = useLanguage();
  const chapters = storyChapters[language];
  const myBeliefs = beliefs[language];
  const [expandedChip, setExpandedChip] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-16 text-center">
          {t.about.title}
        </h2>

        {/* Three Pillars - big visual cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-24">
          {/* Business */}
          <div className="group relative bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[80px]" />
            <div className="text-4xl mb-4">&#9878;&#65039;</div>
            <h3 className="text-xl font-bold mb-3">
              {t.about.pillars.business.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              {t.about.pillars.business.description}
            </p>
          </div>

          {/* AI */}
          <div className="group relative bg-violet-600 text-white rounded-3xl p-6 sm:p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[80px]" />
            <div className="text-4xl mb-4">&#129302;</div>
            <h3 className="text-xl font-bold mb-3">
              {t.about.pillars.ai.title}
            </h3>
            <p className="text-violet-100 leading-relaxed text-sm">
              {t.about.pillars.ai.description}
            </p>
          </div>

          {/* Sport */}
          <div className="group relative bg-emerald-600 text-white rounded-3xl p-6 sm:p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[80px]" />
            <div className="text-4xl mb-4">&#9889;</div>
            <h3 className="text-xl font-bold mb-3">
              {t.about.pillars.sport.title}
            </h3>
            <p className="text-emerald-100 leading-relaxed text-sm">
              {t.about.pillars.sport.description}
            </p>
          </div>
        </div>

        {/* Career Journey - compact, not CV-like */}
        <div id="experience" className="mb-24">
          <h3 className="text-xl font-semibold text-zinc-900 mb-8 text-center">
            {t.experience.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {chapters.map((chapter, i) => (
              <button
                key={i}
                type="button"
                onClick={() =>
                  setExpandedChip(expandedChip === i ? null : i)
                }
                className={`group relative px-5 py-3 rounded-2xl border transition-all duration-300 hover:shadow-md cursor-pointer ${
                  i === 0
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-mono ${i === 0 ? "text-zinc-400" : "text-zinc-400"}`}
                  >
                    {chapter.year}
                  </span>
                  <span className="font-semibold text-sm">{chapter.title}</span>
                </div>
                {/* Tooltip - visible on hover (desktop) or when tapped (mobile) */}
                <div
                  className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-zinc-900 text-white text-xs rounded-xl transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg z-20 ${
                    expandedChip === i
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {chapter.description}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-zinc-900 rotate-45" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Beliefs / Philosophy - personal touch */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            {myBeliefs.map((belief, i) => (
              <div
                key={i}
                className="flex items-start gap-4 group"
              >
                <span className="text-zinc-300 font-mono text-sm mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base sm:text-lg text-zinc-600 group-hover:text-zinc-900 transition-colors font-medium">
                  {belief}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
