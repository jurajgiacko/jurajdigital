"use client";

import Image from "next/image";
import { Project } from "@/types";
import { useLanguage } from "./LanguageProvider";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
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

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { language, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative text-left bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 cursor-pointer overflow-hidden w-full"
    >
      {/* Screenshot Thumbnail */}
      <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-700 group-hover:text-zinc-600 transition-colors">
                {project.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 3)}
              </div>
              {project.status === "internal" && (
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  Internal
                </span>
              )}
            </div>
          </div>
        )}
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Top Row: Level + Status */}
        <div className="flex items-center justify-between mb-3">
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
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
          {project.description[language]}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 bg-zinc-800 text-zinc-500 rounded-md border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs font-mono px-2 py-0.5 text-zinc-600">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
    </button>
  );
}
