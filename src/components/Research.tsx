"use client";

import { research } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { SheetHeading } from "./SheetHeading";

export function Research() {
  const { lang } = useLanguage();

  return (
    <section id="research" className="border-t hairline py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SheetHeading sheetLabel={research.sheetLabel} heading={{ ja: "Research", en: "Research" }} />
        </Reveal>

        <Reveal delay={60}>
          <h3
            className="font-display max-w-3xl text-xl font-semibold leading-snug sm:text-2xl"
            style={{ color: "var(--color-linen)" }}
          >
            {research.heading[lang]}
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-loose sm:text-lg" style={{ color: "var(--color-mist)" }}>
            {research.intro[lang]}
          </p>
        </Reveal>

        {/* Stat callouts, like dimension call-outs on a drawing */}
        <Reveal delay={120}>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border sm:grid-cols-3" style={{ borderColor: "rgba(196, 211, 220, 0.18)", backgroundColor: "rgba(196, 211, 220, 0.18)" }}>
            {research.stats.map((s) => (
              <div key={s.label.en} className="p-6" style={{ backgroundColor: "var(--color-blueprint-900)" }}>
                <p className="font-mono text-4xl font-semibold" style={{ color: "var(--color-copper-bright)" }}>
                  {s.value}
                  <span className="text-xl">{s.unit}</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-slate)" }}>
                  {s.label[lang]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <h4 className="mt-14 font-mono text-xs tracking-[0.2em]" style={{ color: "var(--color-copper-bright)" }}>
            {research.approachHeading[lang]}
          </h4>
          <ol className="mt-5 space-y-5">
            {research.approach.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border font-mono text-[11px]"
                  style={{ borderColor: "var(--color-copper-dim)", color: "var(--color-copper-bright)" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-loose sm:text-base" style={{ color: "var(--color-mist)" }}>
                  {step[lang]}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 border-t pt-8 hairline">
            <h4 className="font-mono text-xs tracking-[0.2em]" style={{ color: "var(--color-copper-bright)" }}>
              {research.closingHeading[lang]}
            </h4>
            <p className="mt-4 max-w-3xl text-sm leading-loose sm:text-base" style={{ color: "var(--color-mist)" }}>
              {research.closing[lang]}
            </p>
            <p className="mt-6 max-w-3xl text-xs leading-relaxed" style={{ color: "var(--color-slate)" }}>
              {research.context[lang]}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
