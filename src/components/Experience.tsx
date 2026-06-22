"use client";

import { experience } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { SheetHeading } from "./SheetHeading";

export function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="grid-sheet-fine border-t hairline py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SheetHeading
            sheetLabel={{ ja: "SHEET 06 — EXPERIENCE", en: "SHEET 06 — EXPERIENCE" }}
            heading={{ ja: "Experience & Education", en: "Experience & Education" }}
          />
        </Reveal>

        <div className="relative border-l hairline pl-8">
          {experience.map((item, i) => (
            <Reveal key={item.title.en} delay={i * 80}>
              <div className="relative mb-10 last:mb-0">
                <span
                  className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2"
                  style={{ borderColor: "var(--color-copper-bright)", backgroundColor: "var(--color-blueprint-950)" }}
                />
                <p className="font-mono text-xs tracking-[0.1em]" style={{ color: "var(--color-copper-bright)" }}>
                  {item.period[lang]}
                </p>
                <p className="font-display mt-1.5 text-base font-semibold sm:text-lg" style={{ color: "var(--color-linen)" }}>
                  {item.title[lang]}
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--color-mist)" }}>
                  {item.org[lang]}
                </p>
                {item.detail && (
                  <p className="mt-2 max-w-xl text-xs leading-relaxed sm:text-sm" style={{ color: "var(--color-slate)" }}>
                    {item.detail[lang]}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
