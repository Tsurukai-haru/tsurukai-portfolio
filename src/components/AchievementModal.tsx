"use client";

import { useEffect } from "react";
import { AchievementItem } from "@/data/content";
import { useLanguage } from "@/lib/language-context";

export function AchievementModal({
  achievement,
  onClose,
}: {
  achievement: AchievementItem | null;
  onClose: () => void;
}) {
  const { lang } = useLanguage();

  useEffect(() => {
    if (!achievement) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [achievement, onClose]);

  if (!achievement || !achievement.detail) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-0 sm:p-6">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(43, 29, 58, 0.25)" }}
        onClick={onClose}
        aria-hidden
      />

      <div
        className="relative z-10 w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-[#e8d8f0] bg-white/90 backdrop-blur-md"
        role="dialog"
        aria-modal
        aria-label={achievement.title[lang]}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[#e8d8f0] bg-white/90 backdrop-blur-md px-5 py-3 sm:px-7">
          <div className="flex items-center gap-3 min-w-0">
            <span className="shrink-0 rounded-full bg-[#f5eeff] px-3 py-0.5 text-xs font-semibold text-[#a86ab8]">
              {achievement.date[lang]}
            </span>
            <h2 className="truncate text-base font-semibold text-[#2b1d3a]">
              {achievement.title[lang]}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#7a6888] transition-colors hover:bg-[#f5eeff] hover:text-[#a86ab8]"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="px-5 pb-8 pt-6 sm:px-7">
          {achievement.detail.video ? (
            <div className="mb-6 overflow-hidden rounded-xl border border-[#e8d8f0]" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={achievement.detail.video}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={achievement.title[lang]}
              />
            </div>
          ) : achievement.detail.thumbnail ? (
            <div className="mb-6 overflow-hidden rounded-xl border border-[#e8d8f0]">
              <img
                src={achievement.detail.thumbnail}
                alt={achievement.title[lang]}
                className="w-full object-cover"
              />
            </div>
          ) : null}

          {achievement.detail.body.map((p, i) => (
            <p key={i} className={`text-sm leading-loose text-[#7a6888] sm:text-base ${i > 0 ? "mt-4" : ""}`}>
              {p[lang]}
            </p>
          ))}

          {achievement.detail.photos && achievement.detail.photos.length > 0 && (
            <div className={`mt-6 grid gap-3 ${achievement.detail.photos.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {achievement.detail.photos.map((photo, i) => (
                <div key={i}>
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

          {achievement.detail.links && achievement.detail.links.length > 0 && (
            <div className="mt-7">
              <div className="border-t border-[#e8d8f0]" />
              <p className="mt-5 text-xs font-semibold text-[#a86ab8]">
                {lang === "ja" ? "関連リンク" : "Related links"}
              </p>
              <ul className="mt-3 space-y-2.5">
                {achievement.detail.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#a86ab8] transition-colors hover:text-[#7a4fa0]"
                    >
                      <span className="text-xs">↗</span>
                      {link.label[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
