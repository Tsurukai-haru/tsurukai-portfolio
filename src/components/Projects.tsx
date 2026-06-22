"use client";

import { projects } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { SheetHeading } from "./SheetHeading";

export function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" className="grid-sheet-fine border-t hairline py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SheetHeading
            sheetLabel={{ ja: "SHEET 04 — PROJECTS", en: "SHEET 04 — PROJECTS" }}
            heading={{ ja: "Featured Projects", en: "Featured Projects" }}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title.en} delay={i * 90}>
              <article
                className="flex h-full flex-col border p-6"
                style={{ borderColor: "rgba(196, 211, 220, 0.18)", backgroundColor: "var(--color-blueprint-900)" }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.18em]" style={{ color: "var(--color-copper-bright)" }}>
                    {p.tag[lang]}
                  </span>
                  <span className="font-mono text-[10px]" style={{ color: "var(--color-slate)" }}>
                    {p.status[lang]}
                  </span>
                </div>

                <h3 className="font-display mt-4 text-lg font-semibold leading-snug" style={{ color: "var(--color-linen)" }}>
                  {p.title[lang]}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                  {p.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="border px-2 py-1 font-mono text-[10px]"
                      style={{ borderColor: "rgba(196, 211, 220, 0.25)", color: "var(--color-slate)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {p.metric && (
                  <p className="mt-4 border-t pt-3 font-mono text-xs hairline" style={{ color: "var(--color-copper-bright)" }}>
                    {p.metric[lang]}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
