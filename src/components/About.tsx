"use client";

import { useLanguage } from "./LanguageProvider";

const pillarIcons = {
  business: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </svg>
  ),
  sport: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  ai: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
};

export default function About() {
  const { t } = useLanguage();

  const pillars = [
    {
      key: "business" as const,
      icon: pillarIcons.business,
      ...t.about.pillars.business,
    },
    {
      key: "sport" as const,
      icon: pillarIcons.sport,
      ...t.about.pillars.sport,
    },
    { key: "ai" as const, icon: pillarIcons.ai, ...t.about.pillars.ai },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            {t.about.bio}
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.key}
              className="group p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-14 h-14 rounded-xl bg-zinc-100 text-zinc-600 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-2">
              15+
            </div>
            <div className="text-sm text-zinc-500 uppercase tracking-wider">
              {t.about.stats.years}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-2">
              10+
            </div>
            <div className="text-sm text-zinc-500 uppercase tracking-wider">
              {t.about.stats.projects}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-2">
              6+
            </div>
            <div className="text-sm text-zinc-500 uppercase tracking-wider">
              {t.about.stats.brands}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
