"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/content";
import { useLanguage } from "@/lib/language-context";

export function Header() {
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e8d8f0" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-8 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="text-left"
          aria-label="トップへ戻る"
        >
          <span
            className="font-round block text-lg leading-none"
            style={{ fontWeight: 700, color: "#a86ab8" }}
          >
            Haru Tsurukai
          </span>
          <span
            className="block text-[11px] tracking-widest"
            style={{ color: "#c0a8d4" }}
          >
            PORTFOLIO 2026
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-round group relative px-3 py-2 text-sm transition-colors"
              style={{ color: "#7a6888", fontWeight: 600 }}
            >
              <span className="relative">
                {item.label[lang]}
                <span
                  className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: "#a86ab8" }}
                />
              </span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center rounded-full p-0.5 text-xs font-semibold transition-all"
            style={{ backgroundColor: "#f0e8f8" }}
            aria-label="言語を切り替える"
          >
            <span
              className="font-round rounded-full px-3 py-1 transition-all"
              style={{
                backgroundColor: lang === "ja" ? "#a86ab8" : "transparent",
                color: lang === "ja" ? "#fff" : "#c0a8d4",
              }}
            >
              JA
            </span>
            <span
              className="font-round rounded-full px-3 py-1 transition-all"
              style={{
                backgroundColor: lang === "en" ? "#a86ab8" : "transparent",
                color: lang === "en" ? "#fff" : "#c0a8d4",
              }}
            >
              EN
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors md:hidden"
            style={{ backgroundColor: open ? "#f0e8f8" : "transparent" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="メニューを開く"
            aria-expanded={open}
          >
            <span style={{ color: "#a86ab8", fontSize: "1.2rem", lineHeight: 1 }}>
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          className="flex flex-col py-2 md:hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.97)", borderTop: "1px solid #e8d8f0" }}
        >
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-round px-8 py-3 text-left text-sm transition-colors hover:bg-purple-50"
              style={{ color: "#7a6888", fontWeight: 600 }}
            >
              {item.label[lang]}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
