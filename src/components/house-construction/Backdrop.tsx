import { memo } from "react";
import { DURATION } from "./phases";
import { G } from "./constants";
import { lerp, mixColor, seg } from "./helpers";

const FAR =
  "M-1500 640 L-1500 540 C-1200 490 -900 560 -600 520 C-300 480 -100 540 150 520 C380 500 520 450 760 500 C960 540 1150 470 1400 510 C1700 550 2000 500 2500 540 L2500 640 Z";
const NEAR =
  "M-1500 640 L-1500 575 C-1100 550 -800 590 -500 570 C-200 550 0 585 250 575 C500 565 700 545 950 570 C1200 590 1500 555 1800 575 C2100 590 2300 570 2500 580 L2500 640 Z";

const Hills = memo(function Hills({ far, near }: { far: string; near: string }) {
  return (
    <g>
      <path d={FAR} fill={far} />
      <path d={NEAR} fill={near} />
    </g>
  );
});

const clouds = [
  { x: 120, y: 120, s: 1.0, v: 4 },
  { x: 560, y: 70, s: 0.7, v: 3 },
  { x: 820, y: 190, s: 0.85, v: 5 },
  { x: 1300, y: 140, s: 1.1, v: 3.5 },
];

function Cloud({ x, y, s, fill }: { x: number; y: number; s: number; fill: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={fill}>
      <ellipse cx={0} cy={0} rx={60} ry={16} />
      <ellipse cx={-26} cy={-10} rx={28} ry={16} />
      <ellipse cx={14} cy={-16} rx={34} ry={20} />
      <ellipse cx={42} cy={-4} rx={24} ry={12} />
    </g>
  );
}

export function SceneSun({ p }: { p: number }) {
  const progress = seg(p, 0, DURATION);
  const gold = seg(p, 24, DURATION);
  const sx = lerp(50, 1060, progress);
  const sy = lerp(550, 425, progress) - Math.sin(Math.PI * progress) * 365;
  return (
    <g data-scene-sun="true" aria-hidden="true">
      <defs>
        <radialGradient id="visibleSunGlow">
          <stop offset="0" stopColor="var(--house-sun-day)" stopOpacity={0.5} />
          <stop offset="1" stopColor="var(--house-sun-dusk)" stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx={sx} cy={sy} r={115} fill="url(#visibleSunGlow)" />
      <circle cx={sx} cy={sy} r={29} fill={`color-mix(in oklab, var(--house-sun-day) ${(1 - gold) * 100}%, var(--house-sun-dusk))`} />
    </g>
  );
}

export function Backdrop({ p }: { p: number }) {
  const gold = seg(p, 20, DURATION);
  const cloudFill = mixColor("#ffffff", "#ffe2c2", gold);
  const farC = mixColor("#b8c7ce", "#d9aa90", gold);
  const nearC = mixColor("#9db28f", "#a99565", gold);
  const birdsOn = p < 24;

  return (
    <g>
      {/* clouds */}
      <g opacity={0.85}>
        {clouds.map((c, i) => {
          const x = ((c.x + p * c.v + 400) % 1700) - 400;
          return <Cloud key={i} x={x} y={c.y} s={c.s} fill={cloudFill} />;
        })}
      </g>

      {/* birds */}
      {birdsOn && (
        <g fill="none" stroke="#12203a" strokeWidth={1.6} strokeLinecap="round" opacity={0.6 * (1 - seg(p, 20, 24))}>
          {[0, 1, 2].map((i) => {
            const bx = -60 + ((p * (38 + i * 7) + i * 90) % 1200);
            const by = 150 + i * 32 + Math.sin(p * 1.4 + i) * 12;
            const flap = Math.sin(p * 11 + i * 2) * 5;
            return (
              <path key={i} d={`M${bx - 12} ${by + flap * 0.4} Q${bx - 6} ${by - flap} ${bx} ${by} Q${bx + 6} ${by - flap} ${bx + 12} ${by + flap * 0.4}`} />
            );
          })}
        </g>
      )}

      <Hills far={farC} near={nearC} />
      {/* horizon haze */}
      <rect x={-1500} y={G - 40} width={4000} height={40} fill="url(#haze)" />
    </g>
  );
}
