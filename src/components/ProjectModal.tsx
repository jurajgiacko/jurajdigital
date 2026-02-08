"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { useLanguage } from "./LanguageProvider";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
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

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language, t } = useLanguage();

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [project, handleEscape]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-modal-backdrop" />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-3xl max-h-[90dvh] overflow-y-auto overscroll-contain bg-zinc-950 border border-zinc-800 rounded-2xl sm:rounded-2xl shadow-2xl animate-modal-enter"
        style={{ WebkitOverflowScrolling: "touch" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Screenshot / Image Area */}
        <div className="relative w-full aspect-video bg-zinc-900 rounded-t-2xl overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-zinc-700 mb-2">
                  {project.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)}
                </div>
                <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                  {project.status === "internal" ? "Internal" : "No preview"}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header Row */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {project.name}
              </h2>
              <span className="text-sm font-mono text-zinc-500">
                LVL {project.level} / {levelLabels[project.level]?.[language] || ""}
              </span>
            </div>
            <span
              className={`text-xs font-medium px-3 py-1.5 rounded-full border shrink-0 ${statusColors[project.status]}`}
            >
              {t.projects.status[project.status]}
            </span>
          </div>

          {/* Description */}
          <p className="text-zinc-300 leading-relaxed mb-6 text-base">
            {project.description[language]}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-mono px-3 py-1.5 bg-zinc-800/80 text-zinc-300 rounded-lg border border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-xl transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium rounded-xl transition-colors text-sm border border-zinc-700"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t.projects.view_code}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
