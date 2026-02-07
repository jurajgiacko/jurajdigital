"use client";

import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-zinc-100" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium text-zinc-500 tracking-wider uppercase mb-4 animate-fade-in-up">
              {t.hero.greeting}
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 tracking-tight mb-4 animate-fade-in-up animation-delay-100">
              {t.hero.name}
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up animation-delay-200">
              <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
                {t.hero.tagline}
              </span>
            </div>

            <p className="text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up animation-delay-300">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <button
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/25"
              >
                {t.hero.cta_projects}
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto px-8 py-3.5 border border-zinc-300 text-zinc-700 rounded-full font-medium hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-300"
              >
                {t.hero.cta_contact}
              </button>
            </div>
          </div>

          {/* Avatar / Photo Placeholder */}
          <div className="flex-shrink-0 animate-fade-in-up animation-delay-300">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder initials - replace with actual photo */}
              <span className="text-6xl lg:text-7xl font-bold text-zinc-400 select-none">
                JG
              </span>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-zinc-200" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
