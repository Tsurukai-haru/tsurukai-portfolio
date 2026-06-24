"use client";

import { contact } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Contact() {
  const { lang } = useLanguage();

  return (
    <section
      id="contact"
      className="relative py-24"
      style={{ background: "linear-gradient(to bottom, transparent, #f5eeff 80%)" }}
    >
      <div
        className="pointer-events-none absolute right-[5%] top-[5%] h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "#f5c8e0", opacity: 0.35 }}
      />
      <div
        className="pointer-events-none absolute bottom-[20%] left-[5%] h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: "#d4c0f0", opacity: 0.3 }}
      />

      <div className="relative mx-auto max-w-3xl px-8 text-center">
        <Reveal>
          <p className="text-sm" style={{ color: "#7a6888" }}>
            {contact.thanks[lang]}
          </p>
          <h2
            className="font-round mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#2b1d3a" }}
          >
            {contact.heading[lang]}
          </h2>
          <div className="mx-auto mt-2 h-1 w-12 rounded-full" style={{ backgroundColor: "#a86ab8" }} />
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "#7a6888" }}>
            {contact.body[lang]}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${contact.email}`}
              aria-label={contact.emailLabel[lang]}
              className="font-round inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#8c45a5",
                boxShadow: "0 4px 16px -4px rgba(140,69,165,0.4)",
              }}
            >
              {contact.emailLabel[lang]}
              <span aria-hidden="true">→</span>
            </a>

            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub（新しいタブで開く）"
                className="font-round inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "#a86ab8",
                  color: "#a86ab8",
                }}
              >
                GitHub
                <span aria-hidden="true">↗</span>
              </a>
            )}

            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn（新しいタブで開く）"
                className="font-round inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "#a86ab8",
                  color: "#a86ab8",
                }}
              >
                LinkedIn
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
