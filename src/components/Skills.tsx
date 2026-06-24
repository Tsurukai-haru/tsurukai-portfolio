"use client";

import { skills } from "@/data/content";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="relative py-24">
      <div
        className="pointer-events-none absolute right-[5%] top-[5%] h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "#f5c8e0", opacity: 0.35 }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[5%] h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: "#c4d8f8", opacity: 0.3 }}
      />

      <div className="relative mx-auto max-w-5xl px-8">
        <Reveal>
          <h2
            className="font-round text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#2b1d3a" }}
          >
            Skills
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full" style={{ backgroundColor: "#a86ab8" }} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {skills.map((tier, tierIdx) => (
            <Reveal key={tier.tier.en} delay={tierIdx * 80} className="h-full">
              <div
                className="h-full rounded-2xl border border-[#e8d8f0] p-6 transition-all duration-200 lg:min-h-[440px] hover:-translate-y-0.5 hover:shadow-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="font-round inline-block rounded-full px-4 py-1 text-sm font-semibold"
                  style={{
                    backgroundColor: "#f5eeff",
                    color: "#a86ab8",
                  }}
                >
                  {tier.tier[lang]}
                </span>

                <div className="mt-4 divide-y divide-[#f0e4f8]">
                  {tier.items.map((item) => (
                    <div key={item.name} className="py-3 first:pt-1">
                      <p
                        className="font-round text-sm font-semibold"
                        style={{ color: "#2b1d3a" }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="mt-0.5 text-sm leading-relaxed"
                        style={{ color: "#7a6888" }}
                      >
                        {item.note[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
