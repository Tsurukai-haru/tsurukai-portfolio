"use client";

import { about } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function About() {
  const { lang } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-24"
    >
      {/* Blobs — same feel as Hero */}
      <div
        className="pointer-events-none absolute left-[60%] top-[10%] h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "#f5c8e0", opacity: 0.4 }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[5%] h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: "#c4d8f8", opacity: 0.35 }}
      />

      <div className="relative mx-auto max-w-3xl px-8">
        <Reveal>
          <h2
            className="font-round text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#2b1d3a" }}
          >
            {about.heading[lang]}
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full" style={{ backgroundColor: "#a86ab8" }} />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 space-y-4">
            {about.intro.map((sentence, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed"
                style={{ color: "#7a6888", wordBreak: "keep-all", overflowWrap: "anywhere" }}
              >
                {sentence[lang]}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div
            className="mt-10 grid grid-cols-1 gap-3 border-t pt-8 sm:grid-cols-2"
            style={{ borderColor: "#e8d8f0" }}
          >
            {about.chips.map((chip) => (
              <div key={chip.label.en} className="flex items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: "#a86ab8" }}
                />
                <span
                  className="font-round text-sm font-medium"
                  style={{ color: "#2b1d3a" }}
                >
                  {chip.label[lang]}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
