"use client";

import { hero } from "@/data/content";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { lang } = useLanguage();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center"
    >
      {/* Soft pastel blob — pink right */}
      <div
        className="pointer-events-none absolute right-[8%] top-[12%] h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "#f5c8e0", opacity: 0.45 }}
      />
      {/* Soft pastel blob — blue-lavender left */}
      <div
        className="pointer-events-none absolute bottom-[18%] left-[4%] h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "#c4d8f8", opacity: 0.4 }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-8 py-32">
        {/* Name */}
        <h1
          className="font-display text-[clamp(2.8rem,7vw,5rem)] font-bold leading-none tracking-tight"
          style={{ color: "#2b1d3a" }}
        >
          {hero.name[lang]}
        </h1>
        {lang === "ja" && (
          <p
            className="font-round mt-2 text-2xl"
            style={{ fontWeight: 700, color: "#a86ab8", letterSpacing: "0.06em" }}
          >
            {hero.name.en}
          </p>
        )}

        {/* Tagline */}
        <p
          className="font-display mt-8 text-3xl font-medium sm:text-4xl"
          style={{ color: "#a86ab8" }}
        >
          {hero.tagline[lang]}
        </p>

        {/* Sub */}
        <p
          className="mt-5 max-w-xl text-lg leading-relaxed"
          style={{ color: "#7a6888", wordBreak: "keep-all", overflowWrap: "anywhere" }}
        >
          {hero.sub[lang]}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo("research")}
            className="rounded-full px-7 py-3 font-mono text-sm tracking-wide text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{ backgroundColor: "#a86ab8" }}
          >
            {hero.ctaPrimary[lang]} →
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="rounded-full border px-7 py-3 font-mono text-sm tracking-wide transition-all hover:bg-white/50"
            style={{ borderColor: "#d4b8e8", color: "#7a6888" }}
          >
            {hero.ctaSecondary[lang]}
          </button>
        </div>

        {/* Affiliation */}
        <p
          className="font-round mt-16 text-base"
          style={{ fontWeight: 600, color: "#c0a8d4", letterSpacing: "0.04em" }}
        >
          {hero.affiliation[lang]}
        </p>
      </div>
    </section>
  );
}
