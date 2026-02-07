"use client";

import { Project, Language } from "@/types";
import { useLanguage } from "./LanguageProvider";

interface ProjectCardProps {
  project: Project;
}

const statusColors = {
  live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  prototype: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  internal: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  archived: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
};

const levelLabels: Record<number, { sk: string; en: string }> = {
  0: { sk: "Utility", en: "Utility" },
  1: { sk: "Landing Page", en: "Landing Page" },
  2: { sk: "Web", en: "Website" },
  3: { sk: "Prototyp", en: "Prototype" },
  4: { sk: "Interný nástroj", en: "Internal Tool" },
  5: { sk: "Produkčná app", en: "Production App" },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage();

  return (
    <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
      {/* Top Row: Level + Status */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-zinc-500">
          LVL {project.level}{" "}
          <span className="text-zinc-700">
            / {levelLabels[project.level]?.[language] || ""}
          </span>
        </span>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}
        >
          {t.projects.status[project.status]}
        </span>
      </div>

      {/* Project Name */}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-zinc-400 leading-relaxed mb-5">
        {project.description[language]}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            {t.projects.view_project}
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t.projects.view_code}
          </a>
        )}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
    </div>
  );
}
