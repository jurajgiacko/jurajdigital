"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Clean warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-orange-50/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 tracking-tight mb-6 animate-fade-in-up">
              {t.hero.name}
            </h1>

            {/* Tagline as visual pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up animation-delay-100">
              <span className="px-4 py-2 bg-zinc-900 text-white rounded-full text-sm font-semibold tracking-wide">
                Business
              </span>
              <span className="text-2xl text-zinc-300 font-light select-none">
                &times;
              </span>
              <span className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold tracking-wide">
                Sport
              </span>
              <span className="text-2xl text-zinc-300 font-light select-none">
                &times;
              </span>
              <span className="px-4 py-2 bg-violet-600 text-white rounded-full text-sm font-semibold tracking-wide">
                AI
              </span>
            </div>

            <p className="text-xl text-zinc-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 animate-fade-in-up animation-delay-200">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <button
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-2xl font-medium hover:bg-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-0.5"
              >
                {t.hero.cta_projects}
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto px-8 py-4 text-zinc-600 font-medium hover:text-zinc-900 transition-colors"
              >
                {t.hero.cta_contact} &rarr;
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 animate-fade-in-up">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl shadow-zinc-900/10 rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/juraj-giacko.png"
                  alt="Juraj Giacko"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 288px, 384px"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 rounded-2xl -z-10 rotate-6" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-violet-100 rounded-xl -z-10 -rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
