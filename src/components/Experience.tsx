"use client";

import { useLanguage } from "./LanguageProvider";
import { experiences } from "@/data/translations";

export default function Experience() {
  const { language, t } = useLanguage();
  const items = experiences[language];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            {t.experience.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0 group">
              {/* Timeline line */}
              {index < items.length - 1 && (
                <div className="absolute left-[11px] top-3 bottom-0 w-px bg-zinc-300" />
              )}

              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  item.current
                    ? "border-zinc-900 bg-zinc-900"
                    : "border-zinc-300 bg-white group-hover:border-zinc-500"
                }`}
              >
                {item.current && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>

              {/* Content Card */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 hover:shadow-md transition-all duration-300 ml-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {item.role}
                    </h3>
                    <p className="text-zinc-600 font-medium">{item.company}</p>
                  </div>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full self-start ${
                      item.current
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    {item.period}
                    {item.current ? ` \u2013 ${t.experience.present}` : ""}
                  </span>
                </div>

                <p className="text-zinc-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
