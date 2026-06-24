"use client";

import { research } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Research() {
  const { lang } = useLanguage();

  return (
    <section id="research" className="relative py-24">
      <div
        className="pointer-events-none absolute left-[5%] top-[8%] h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "#f5c8e0", opacity: 0.35 }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] right-[8%] h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: "#c4d8f8", opacity: 0.3 }}
      />

      <div className="relative mx-auto max-w-4xl px-8">
        <Reveal>
          <h2
            className="font-round text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#2b1d3a" }}
          >
            Research
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full" style={{ backgroundColor: "#a86ab8" }} />
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-8 text-base leading-relaxed sm:text-lg" style={{ color: "#7a6888" }}>
            {research.intro[lang]}
          </p>
        </Reveal>

        <div className="mt-10 space-y-5">
          {research.experiences.map((exp, i) => (
            <Reveal key={exp.title.en} delay={120 + i * 80}>
              <a
                href={exp.achievementsLink ? "#achievements" : undefined}
                className={`group block rounded-2xl border border-[#e8d8f0] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#c0a8d4] hover:shadow-md${exp.achievementsLink ? " cursor-pointer" : ""}`}
                style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}
              >
                <span
                  className="font-round inline-block rounded-full px-4 py-1 text-sm font-semibold"
                  style={{ backgroundColor: "#f5eeff", color: "#a86ab8" }}
                >
                  {exp.title[lang]}
                </span>

                <p className="mt-4 text-sm leading-loose sm:text-base" style={{ color: "#7a6888" }}>
                  {exp.body[lang]}
                </p>

                {exp.stats && exp.stats.length > 0 && (
                  <>
                    <p
                      className="font-round mt-5 text-xs font-semibold tracking-widest"
                      style={{ color: "#c0a8d4" }}
                    >
                      {lang === "ja" ? "実績" : "RESULTS"}
                    </p>
                    <div
                      className={`mt-2 grid gap-3${exp.stats.length > 1 ? " sm:grid-cols-2" : ""}`}
                    >
                      {exp.stats.map((s) => (
                        <div
                          key={s.label.en}
                          className="rounded-xl border border-[#e8d8f0] px-4 py-3 text-center"
                          style={{ backgroundColor: "rgba(168,106,184,0.04)" }}
                        >
                          <p
                            className="font-round text-2xl font-bold leading-none"
                            style={{ color: "#a86ab8" }}
                          >
                            {s.value}
                            <span className="text-lg">{s.unit}</span>
                          </p>
                          <p className="mt-1.5 text-xs leading-snug" style={{ color: "#7a6888" }}>
                            {s.label[lang]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {exp.photos && exp.photos.length > 0 && (
                  <div className={`mt-5 grid gap-3 ${exp.photos.length > 1 ? "sm:grid-cols-2" : ""}`}>
                    {exp.photos.map((photo, pi) => (
                      <div key={pi}>
                        <img
                          src={photo.src}
                          alt={photo.caption?.[lang] ?? ""}
                          className="w-full rounded-xl border border-[#e8d8f0] object-cover"
                          style={{ aspectRatio: "16/9" }}
                        />
                        {photo.caption && (
                          <p className="mt-1.5 text-center text-xs" style={{ color: "#c0a8d4" }}>
                            {photo.caption[lang]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {exp.achievementsLink && (
                  <span
                    className="font-round mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "#a86ab8" }}
                  >
                    {lang === "ja" ? "Achievements で詳細を見る" : "See details in Achievements"}
                    <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                )}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={380}>
          <p className="mt-8 text-xs leading-relaxed" style={{ color: "#c0a8d4" }}>
            {research.context[lang]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
