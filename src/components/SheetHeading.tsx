"use client";

import type { Bi } from "@/data/content";
import { useLanguage } from "@/lib/language-context";

export function SheetHeading({
  sheetLabel,
  heading,
}: {
  sheetLabel: Bi;
  heading: Bi;
}) {
  const { lang } = useLanguage();
  return (
    <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <h2
        className="font-display text-3xl font-semibold tracking-tight text-linen sm:text-4xl"
        style={{ color: "var(--color-linen)" }}
      >
        {heading[lang]}
      </h2>
      <span
        className="font-mono text-xs tracking-[0.2em]"
        style={{ color: "var(--color-slate)" }}
      >
        {sheetLabel[lang]}
      </span>
    </div>
  );
}
