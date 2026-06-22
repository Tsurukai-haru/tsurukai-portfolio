"use client";

import { hero } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { TrajectoryArt } from "./TrajectoryArt";

export function Hero() {
  const { lang } = useLanguage();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="grid-sheet relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p
            className="font-mono text-xs tracking-[0.25em]"
            style={{ color: "var(--color-copper-bright)" }}
          >
            {hero.eyebrow[lang]}
          </p>

          <h1
            className="font-display mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            style={{ color: "var(--color-linen)" }}
          >
            {hero.headline[lang]}
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--color-mist)" }}
          >
            {hero.sub[lang]}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("research")}
              className="px-6 py-3 font-mono text-xs tracking-[0.12em] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--color-copper)", color: "var(--color-blueprint-950)" }}
            >
              {hero.ctaPrimary[lang]} →
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="border px-6 py-3 font-mono text-xs tracking-[0.12em] transition-colors hover:border-[var(--color-copper-bright)]"
              style={{ borderColor: "rgba(196, 211, 220, 0.35)", color: "var(--color-linen)" }}
            >
              {hero.ctaSecondary[lang]}
            </button>
          </div>

          <div className="mt-12 border-t pt-5 hairline">
            <p className="font-display text-base font-medium" style={{ color: "var(--color-linen)" }}>
              {hero.name[lang]}
            </p>
            <p className="mt-1 max-w-md text-xs leading-relaxed" style={{ color: "var(--color-slate)" }}>
              {hero.affiliation[lang]}
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full lg:aspect-square">
          <TrajectoryArt />
        </div>
      </div>
    </section>
  );
}
