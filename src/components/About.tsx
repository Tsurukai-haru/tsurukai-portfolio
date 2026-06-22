"use client";

import { about } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { SheetHeading } from "./SheetHeading";

export function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="border-t hairline py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SheetHeading sheetLabel={about.sheetLabel} heading={about.heading} />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={80}>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-loose sm:text-lg" style={{ color: "var(--color-mist)" }}>
                  {p[lang]}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-col gap-4">
              {about.values.map((v) => (
                <div
                  key={v.title.en}
                  className="border p-5"
                  style={{ borderColor: "rgba(196, 211, 220, 0.18)", backgroundColor: "var(--color-blueprint-900)" }}
                >
                  <p className="font-display text-sm font-semibold" style={{ color: "var(--color-copper-bright)" }}>
                    {v.title[lang]}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                    {v.body[lang]}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
