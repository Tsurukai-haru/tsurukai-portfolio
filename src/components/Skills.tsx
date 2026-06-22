"use client";

import { skills } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { SheetHeading } from "./SheetHeading";

export function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="grid-sheet-fine border-t hairline py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SheetHeading
            sheetLabel={{ ja: "SHEET 03 — SKILLS (BOM)", en: "SHEET 03 — SKILLS (BOM)" }}
            heading={{ ja: "Skills", en: "Skills" }}
          />
        </Reveal>

        {/* Styled like a bill-of-materials table from a drawing sheet */}
        <div className="overflow-hidden border" style={{ borderColor: "rgba(196, 211, 220, 0.18)" }}>
          <div
            className="grid grid-cols-[80px_1fr] border-b font-mono text-[11px] tracking-[0.15em] sm:grid-cols-[120px_1fr_1.4fr]"
            style={{ borderColor: "rgba(196, 211, 220, 0.18)", color: "var(--color-slate)", backgroundColor: "var(--color-blueprint-900)" }}
          >
            <span className="px-4 py-2.5">{lang === "ja" ? "区分" : "TIER"}</span>
            <span className="px-4 py-2.5">{lang === "ja" ? "項目" : "ITEM"}</span>
            <span className="hidden px-4 py-2.5 sm:block">{lang === "ja" ? "備考" : "NOTE"}</span>
          </div>

          {skills.map((tier, tierIdx) => (
            <Reveal key={tier.tier.en} delay={tierIdx * 90}>
              <div>
                {tier.items.map((item, i) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-[80px_1fr] border-b last:border-b-0 sm:grid-cols-[120px_1fr_1.4fr]"
                    style={{ borderColor: "rgba(196, 211, 220, 0.1)" }}
                  >
                    <span
                      className="flex items-center px-4 py-3 font-mono text-[11px]"
                      style={{ color: i === 0 ? "var(--color-copper-bright)" : "transparent" }}
                    >
                      {i === 0 ? tier.tier[lang] : ""}
                    </span>
                    <span className="px-4 py-3 font-display text-sm font-medium" style={{ color: "var(--color-linen)" }}>
                      {item.name}
                    </span>
                    <span className="col-span-2 px-4 pb-3 text-xs leading-relaxed sm:col-span-1 sm:py-3 sm:text-sm" style={{ color: "var(--color-slate)" }}>
                      {item.note[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
