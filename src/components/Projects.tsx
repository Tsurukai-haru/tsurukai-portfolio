"use client";

import { useState } from "react";
import { projects, ProjectItem } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
      <div
        className="pointer-events-none absolute right-[5%] top-[8%] h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "#f5c8e0", opacity: 0.35 }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[10%] h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: "#c4d8f8", opacity: 0.3 }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2
            className="font-round text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#2b1d3a" }}
          >
            Projects
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full" style={{ backgroundColor: "#a86ab8" }} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title.en} delay={i * 90}>
              <article
                className="group flex h-full flex-col rounded-2xl border border-[#e8d8f0] p-6 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-[#c0a8d4] hover:shadow-[0_8px_24px_rgba(168,106,184,0.12)]"
                style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}
                onClick={() => setSelected(p)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelected(p); }}
                tabIndex={0}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-full px-3 py-0.5 text-xs font-semibold"
                    style={{ backgroundColor: "#f5eeff", color: "#a86ab8" }}
                  >
                    {p.tag[lang]}
                  </span>
                  {p.status && (
                    <span className="text-xs" style={{ color: "#c0a8d4" }}>
                      {p.status[lang]}
                    </span>
                  )}
                </div>

                <h3
                  className="font-round mt-4 text-lg font-semibold leading-snug"
                  style={{ color: "#2b1d3a" }}
                >
                  {p.title[lang]}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "#7a6888" }}>
                  {p.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: "#f5eeff", color: "#a86ab8" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: "#e8d8f0" }}>
                  {p.metric && (
                    <p className="text-xs font-semibold" style={{ color: "#a86ab8" }}>
                      {p.metric[lang]}
                    </p>
                  )}
                  <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "#a86ab8" }}>
                    {lang === "ja" ? "詳細を見る" : "View details"}
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
