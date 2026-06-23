"use client";

import { useEffect, useState } from "react";

/**
 * Signature visual: a stylised cross-section of a lava-tube floor with the
 * rover's traversal line drawn over it. The silhouette and step heights are
 * illustrative, not a reproduction of any figure from the thesis — they
 * exist to give the hero a motif that is specific to this research rather
 * than a generic gradient blob.
 */
export function TrajectoryArt() {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDrawn(true), 250);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <svg
      viewBox="0 0 760 420"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of the rover's path climbing a step using its active tail"
    >
      <defs>
        <linearGradient id="fadeEdges" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--color-blueprint-950)" stopOpacity="1" />
          <stop offset="8%" stopColor="var(--color-blueprint-950)" stopOpacity="0" />
          <stop offset="92%" stopColor="var(--color-blueprint-950)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--color-blueprint-950)" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Contour lines, like a topographic cave cross-section */}
      {[60, 110, 160, 210, 260, 310, 360].map((y, i) => (
        <path
          key={y}
          d={`M -20 ${y} C 140 ${y - 18 - i * 2}, 260 ${y + 14}, 420 ${y - 8}
              S 620 ${y + 20}, 780 ${y}`}
          fill="none"
          stroke="var(--color-blueprint-700)"
          strokeOpacity={0.5}
          strokeWidth="1"
        />
      ))}

      {/* Ground / step geometry */}
      <path
        d="M 40 330 L 360 330 L 360 250 L 700 250"
        fill="none"
        stroke="var(--color-mist)"
        strokeOpacity={0.55}
        strokeWidth="2"
      />

      {/* Dimension line + label for the step height, tied to the real 1.5x result */}
      <g opacity={0.85}>
        <line x1="378" y1="250" x2="378" y2="330" stroke="var(--color-copper-dim)" strokeWidth="1" />
        <line x1="370" y1="250" x2="386" y2="250" stroke="var(--color-copper-dim)" strokeWidth="1" />
        <line x1="370" y1="330" x2="386" y2="330" stroke="var(--color-copper-dim)" strokeWidth="1" />
        <text
          x="396"
          y="296"
          className="font-mono"
          fontSize="13"
          fill="var(--color-copper-bright)"
        >
          1.5×r
        </text>
      </g>

      {/* Rover trajectory: flat run-up, lift over the step, continue */}
      <path
        d="M 70 330 L 300 330 C 335 330 340 300 350 280
           C 362 256 380 244 410 244 L 680 238"
        fill="none"
        stroke="var(--color-copper)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={100}
        style={{
          strokeDasharray: 100,
          strokeDashoffset: drawn ? 0 : 100,
          transition: "stroke-dashoffset 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Rover glyph: simple two-wheel body with a two-segment tail */}
      <g
        style={{
          transform: drawn ? "translate(680px, 238px)" : "translate(70px, 330px)",
          transition: "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <rect x="-22" y="-14" width="44" height="20" rx="3" fill="var(--color-blueprint-800)" stroke="var(--color-linen)" strokeWidth="1.5" />
        <circle cx="-16" cy="8" r="9" fill="var(--color-blueprint-900)" stroke="var(--color-linen)" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="9" fill="var(--color-blueprint-900)" stroke="var(--color-linen)" strokeWidth="1.5" />
        <path
          d="M -22 -4 L -40 4 L -50 18"
          fill="none"
          stroke="var(--color-copper-bright)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      <rect x="0" y="0" width="760" height="420" fill="url(#fadeEdges)" />
    </svg>
  );
}
