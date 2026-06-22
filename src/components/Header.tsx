"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/content";
import { useLanguage } from "@/lib/language-context";

export function Header() {
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={{
        borderColor: "rgba(196, 211, 220, 0.18)",
        backgroundColor: scrolled ? "rgba(6, 16, 24, 0.86)" : "transparent",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* Title-block: drawn-by / project, like the info box on a print */}
        <button
          onClick={() => handleNavClick("hero")}
          className="group flex items-center gap-3 text-left"
          aria-label="Scroll to top"
        >
          <span
            className="flex h-9 w-9 items-center justify-center border font-mono text-[11px]"
            style={{ borderColor: "var(--color-copper)", color: "var(--color-copper-bright)" }}
          >
            HT
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold" style={{ color: "var(--color-linen)" }}>
              Tsurukai Haru
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em]" style={{ color: "var(--color-slate)" }}>
              DWG. NO. 2026-PORTFOLIO
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="group flex items-center gap-2 px-3 py-2 font-mono text-[11px] tracking-[0.12em] transition-colors"
              style={{ color: "var(--color-mist)" }}
            >
              <span style={{ color: "var(--color-copper-dim)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="transition-colors group-hover:text-[var(--color-copper-bright)]">
                {item.label[lang]}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Lang toggle, styled like a drafting unit switch (mm / in) */}
          <button
            onClick={toggle}
            className="flex items-center border font-mono text-[11px] tracking-[0.1em]"
            style={{ borderColor: "rgba(196, 211, 220, 0.3)" }}
            aria-label="Toggle language"
          >
            <span
              className="px-2.5 py-1.5"
              style={{
                backgroundColor: lang === "ja" ? "var(--color-copper)" : "transparent",
                color: lang === "ja" ? "var(--color-blueprint-950)" : "var(--color-slate)",
              }}
            >
              JA
            </span>
            <span
              className="px-2.5 py-1.5"
              style={{
                backgroundColor: lang === "en" ? "var(--color-copper)" : "transparent",
                color: lang === "en" ? "var(--color-blueprint-950)" : "var(--color-slate)",
              }}
            >
              EN
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center border md:hidden"
            style={{ borderColor: "rgba(196, 211, 220, 0.3)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="font-mono text-xs" style={{ color: "var(--color-linen)" }}>
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="flex flex-col border-t md:hidden"
          style={{ borderColor: "rgba(196, 211, 220, 0.18)", backgroundColor: "rgba(6,16,24,0.96)" }}
        >
          {nav.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="flex items-center gap-3 px-6 py-3 text-left font-mono text-xs tracking-[0.12em]"
              style={{ color: "var(--color-mist)" }}
            >
              <span style={{ color: "var(--color-copper-dim)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label[lang]}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
