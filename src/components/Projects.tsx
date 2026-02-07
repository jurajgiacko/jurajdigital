"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type CategoryFilter =
  | "all"
  | "internal-tool"
  | "app"
  | "game"
  | "utility"
  | "web";

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Only show categories that have projects
  const activeCategories = Array.from(
    new Set(projects.map((p) => p.category))
  );

  const filters: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: t.projects.filter_all },
    ...activeCategories.map((cat) => ({
      key: cat as CategoryFilter,
      label:
        t.projects.categories[cat as keyof typeof t.projects.categories] || cat,
    })),
  ];

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      {/* Dark background for the "tech" vibe */}
      <div className="absolute inset-0 bg-zinc-950" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-50 to-zinc-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>vibe-coded</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-white text-zinc-900"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Count */}
        <div className="text-center mt-12">
          <p className="text-zinc-600 font-mono text-sm">
            {filteredProjects.length} / {projects.length}{" "}
            {t.projects.filter_all.toLowerCase()}
          </p>
        </div>
      </div>

      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-zinc-950" />
    </section>
  );
}
