"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <>
      <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
        {/* Dark background */}
        <div className="absolute inset-0 bg-zinc-950" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top transition from Hero */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-stone-50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm mb-6 bg-emerald-500/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>vibe-coded</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              {t.projects.title}
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-lg">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === filter.key
                    ? "bg-white text-zinc-900 shadow-lg"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Project Count */}
          <div className="text-center mt-12">
            <p className="text-zinc-600 font-mono text-sm">
              {filteredProjects.length} / {projects.length}
            </p>
          </div>
        </div>

        {/* Bottom transition to About */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
