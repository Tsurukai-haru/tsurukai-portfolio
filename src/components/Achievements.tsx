"use client";

import { useState } from "react";
import { achievements, AchievementItem } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { AchievementModal } from "./AchievementModal";

export function Achievements() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<AchievementItem | null>(null);

  return (
    <section id="achievements" className="relative py-24">
      <div
        className="pointer-events-none absolute top-[8%] right-[6%] h-72 w-72 rounded-full blur-3xl"
        style={{ background: "#f5c8e0", opacity: 0.35 }}
      />
      <div
        className="pointer-events-none absolute bottom-[12%] left-[6%] h-72 w-72 rounded-full blur-3xl"
        style={{ background: "#c4d8f8", opacity: 0.35 }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2
            className="font-round text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#2b1d3a" }}
          >
            Achievements
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full" style={{ backgroundColor: "#a86ab8" }} />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title.en} delay={(i % 2) * 70} className="h-full">
              <div
                className="group flex h-full cursor-pointer flex-col gap-3 rounded-2xl border border-[#e8d8f0] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#c0a8d4] hover:shadow-[0_8px_24px_rgba(168,106,184,0.12)]"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(8px)",
                }}
                onClick={() => setSelected(a)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelected(a); }}
                tabIndex={0}
                role="button"
                aria-label={a.title[lang]}
              >
                <span
                  className="w-fit rounded-full px-3 py-0.5 text-xs font-semibold"
                  style={{ background: "#f5eeff", color: "#a86ab8" }}
                >
                  {a.date[lang]}
                </span>
                <p
                  className="text-sm font-semibold leading-snug transition-colors duration-200 group-hover:text-[#a86ab8]"
                  style={{ color: "#2b1d3a" }}
                >
                  {a.title[lang]}
                </p>
                <p className="grow text-xs leading-relaxed" style={{ color: "#7a6888" }}>
                  {a.summary[lang]}
                </p>
                <div className="flex items-center gap-1 pt-1">
                  <span className="text-xs font-semibold" style={{ color: "#a86ab8" }}>
                    {lang === "ja" ? "詳細を見る" : "View details"}
                  </span>
                  <span
                    className="text-xs transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "#a86ab8" }}
                  >
                    →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AchievementModal achievement={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
