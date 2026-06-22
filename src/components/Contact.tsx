"use client";

import { contact, footer } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Contact() {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="border-t hairline py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.2em]" style={{ color: "var(--color-slate)" }}>
            {contact.sheetLabel[lang]}
          </span>
          <h2
            className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-linen)" }}
          >
            {contact.heading[lang]}
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--color-mist)" }}>
            {contact.body[lang]}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 font-mono text-xs tracking-[0.12em] transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--color-copper)", color: "var(--color-blueprint-950)" }}
          >
            {contact.emailLabel[lang]} →
          </a>

          {contact.github && (
            <div className="mt-6">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-[0.1em] underline-offset-4 hover:underline"
                style={{ color: "var(--color-slate)" }}
              >
                GitHub ↗
              </a>
            </div>
          )}
        </Reveal>
      </div>

      <footer className="mt-20 border-t hairline pt-6">
        <p className="text-center font-mono text-[11px]" style={{ color: "var(--color-slate)" }}>
          © {new Date().getFullYear()} Tsurukai Haru — {footer.rights[lang]}
        </p>
      </footer>
    </section>
  );
}
