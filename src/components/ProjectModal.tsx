"use client";

import { useEffect } from "react";
import { ProjectItem } from "@/data/content";
import { useLanguage } from "@/lib/language-context";

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  const { lang } = useLanguage();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(43, 29, 58, 0.25)" }}
        onClick={onClose}
        aria-hidden
      />

      <div
        className="relative z-10 w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-[#e8d8f0] bg-white/90 backdrop-blur-md"
        role="dialog"
        aria-modal
        aria-label={project.title[lang]}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[#e8d8f0] bg-white/90 backdrop-blur-md px-5 py-3 sm:px-7">
          <div className="flex items-center gap-3 min-w-0">
            <span className="shrink-0 rounded-full bg-[#f5eeff] px-3 py-0.5 text-xs font-semibold text-[#a86ab8]">
              {project.tag[lang]}
            </span>
            <h2 className="truncate text-base font-semibold text-[#2b1d3a]">
              {project.title[lang]}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#7a6888] transition-colors hover:bg-[#f5eeff] hover:text-[#a86ab8]"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="px-5 pb-8 pt-6 sm:px-7">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-[#f5eeff] px-3 py-0.5 text-xs font-semibold text-[#a86ab8]"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 border-t border-[#e8d8f0]" />

          {project.detail?.body.map((p, i) => (
            <p key={i} className="mt-5 text-sm leading-loose text-[#7a6888] sm:text-base">
              {p[lang]}
            </p>
          ))}

          {project.detail?.highlights && project.detail.highlights.length > 0 && (
            <div className="mt-7">
              <p className="text-xs font-semibold text-[#a86ab8]">
                {lang === "ja" ? "特徴" : "Features"}
              </p>
              <ul className="mt-3 space-y-2.5">
                {project.detail.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#7a6888]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c0a8d4]" />
                    {h[lang]}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.metric && (
            <div className="mt-7 rounded-xl bg-[#f5eeff] px-4 py-3">
              <p className="text-xs font-semibold text-[#a86ab8]">{project.metric[lang]}</p>
            </div>
          )}

          {project.github && (
            <div className="mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#a86ab8] px-4 py-1.5 text-xs font-semibold text-[#a86ab8] transition-colors hover:bg-[#a86ab8] hover:text-white"
              >
                GitHub →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
