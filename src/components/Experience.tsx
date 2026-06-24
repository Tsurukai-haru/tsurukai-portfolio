"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Experience() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineVisible, setLineVisible] = useState(false);
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLineVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveItems(prev => new Set([...prev, i]));
          } else {
            setActiveItems(prev => {
              const next = new Set(prev);
              next.delete(i);
              return next;
            });
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24">
      <div
        className="pointer-events-none absolute top-[8%] right-[6%] h-72 w-72 rounded-full blur-3xl"
        style={{ background: "#f5c8e0", opacity: 0.3 }}
      />
      <div
        className="pointer-events-none absolute bottom-[12%] left-[6%] h-72 w-72 rounded-full blur-3xl"
        style={{ background: "#c4d8f8", opacity: 0.3 }}
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <h2
            className="font-round text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#2b1d3a" }}
          >
            Experience & Education
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full" style={{ backgroundColor: "#a86ab8" }} />
        </Reveal>

        <div className="relative mt-12 pl-8">
          <div
            className="absolute inset-y-0 left-0 w-px origin-top"
            style={{
              backgroundColor: "#e8d8f0",
              transform: lineVisible ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 1.2s ease-out",
            }}
          />

          {experience.map((item, i) => (
            <Reveal key={item.title.en} delay={i * 80}>
              <div
                ref={el => { itemRefs.current[i] = el; }}
                className="relative mb-48 last:mb-0"
              >
                <span
                  className="absolute -left-[37px] top-[5px] h-2.5 w-2.5 rounded-full ring-2 ring-white"
                  style={{
                    backgroundColor: "#a86ab8",
                    transform: activeItems.has(i) ? "scale(1.5)" : "scale(1)",
                    transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />
                <span
                  className="inline-block rounded-full px-3 py-0.5 text-xs font-semibold"
                  style={{ background: "#f5eeff", color: "#a86ab8" }}
                >
                  {item.period[lang]}
                </span>
                <p
                  className="font-round mt-4 text-base font-semibold sm:text-lg"
                  style={{ color: "#2b1d3a" }}
                >
                  {item.title[lang]}
                </p>
                <p className="mt-2 text-sm" style={{ color: "#7a6888" }}>
                  {item.org[lang]}
                </p>
                {item.detail && (
                  <p className="mt-3 text-xs leading-relaxed sm:text-sm" style={{ color: "#7a6888" }}>
                    {item.detail[lang]}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
