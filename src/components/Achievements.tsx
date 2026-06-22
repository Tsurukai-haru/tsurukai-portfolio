"use client";

import { achievements } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { SheetHeading } from "./SheetHeading";

export function Achievements() {
  const { lang } = useLanguage();

  return (
    <section id="achievements" className="border-t hairline py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SheetHeading
            sheetLabel={{ ja: "SHEET 05 — ACHIEVEMENTS", en: "SHEET 05 — ACHIEVEMENTS" }}
            heading={{ ja: "Achievements", en: "Achievements" }}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title.en} delay={(i % 2) * 70}>
              <div className="flex gap-4 border-b py-4 hairline">
                <span
                  className="mt-1 shrink-0 font-mono text-[10px] tracking-[0.1em]"
                  style={{ color: "var(--color-copper-dim)" }}
                >
                  {a.category[lang]}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold" style={{ color: "var(--color-linen)" }}>
                    {a.title[lang]}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--color-slate)" }}>
                    {a.detail[lang]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
