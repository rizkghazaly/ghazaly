import { memo } from "react";
import {
  G,
  PIT_DEPTH,
  PIT_SLOPE,
  PIT_X0,
  PIT_X1,
  SLAB_H,
  door,
  floors,
  plinth,
  slabs,
  windows,
  woodPanel,
} from "./constants";
import { Backdrop } from "./Backdrop";
import { Crane } from "./Crane";
import { Excavator } from "./Excavator";
import { Garden } from "./Garden";
import { Scaffold } from "./Scaffold";
import { Signature } from "./Signature";
import { Window } from "./Window";
import { Worker } from "./Worker";
import { clamp, easeInOut, easeOut, mixColor, rng, seg, stagger } from "./helpers";
import { DURATION, SIGNATURE_END } from "./phases";

const xl = (y: number) => PIT_X0 + (y - G) * PIT_SLOPE;
const xr = (y: number) => PIT_X1 - (y - G) * PIT_SLOPE;

/* ---------- static pieces ---------- */

const Soil = memo(function Soil() {
  const stones = (() => {
    const r = rng(11);
    return Array.from({ length: 70 }).map(() => ({
      x: -250 + r() * 1500,
      y: G + 20 + r() * 200,
      rx: 2 + r() * 6,
      ry: 1.5 + r() * 4,
      c: r() > 0.5 ? "#a8957f" : "#4a2f1d",
      o: 0.25 + r() * 0.3,
    }));
  })();
  return (
    <g>
      <rect x={-1500} y={G} width={4000} height={1400} fill="url(#soilGrad)" />
      <path d={`M-1500 ${G + 58} Q-1000 ${G + 48} -500 ${G + 60} T500 ${G + 56} T1500 ${G + 60} T2500 ${G + 54}`} stroke="#3b2414" strokeOpacity={0.25} strokeWidth={2} fill="none" />
      <path d={`M-1500 ${G + 112} Q-1000 ${G + 124} -500 ${G + 110} T500 ${G + 116} T1500 ${G + 108} T2500 ${G + 118}`} stroke="#3b2414" strokeOpacity={0.3} strokeWidth={2} fill="none" />
      {stones.map((s, i) => (
        <ellipse key={i} cx={s.x} cy={s.y} rx={s.rx} ry={s.ry} fill={s.c} opacity={s.o} />
      ))}
    </g>
  );
});

type Tuft = { x: number; h: number; inside: boolean };
const tufts: Tuft[] = (() => {
  const r = rng(5);
  return Array.from({ length: 90 }).map(() => {
    const x = -300 + r() * 1650;
    return { x, h: 7 + r() * 10, inside: x > 265 && x < 835 };
  });
})();

const tuftPath = (list: Tuft[]) =>
  list
    .map(
      (t) =>
        `M${t.x} ${G} Q${t.x - 2} ${G - t.h * 0.5} ${t.x - 5} ${G - t.h} M${t.x} ${G} Q${t.x} ${G - t.h * 0.6} ${t.x + 1} ${G - t.h * 1.12} M${t.x} ${G} Q${t.x + 3} ${G - t.h * 0.5} ${t.x + 6} ${G - t.h * 0.8}`,
    )
    .join(" ");

const outsideTufts = tuftPath(tufts.filter((t) => !t.inside));
const insideTufts = tuftPath(tufts.filter((t) => t.inside));

const Tufts = memo(function Tufts({ d }: { d: string }) {
  return <path d={d} fill="none" strokeWidth={1.8} strokeLinecap="round" />;
});

const Rocks = memo(function Rocks({ inside }: { inside: boolean }) {
  const list = inside
    ? [
        { x: 410, w: 14, h: 8 },
        { x: 690, w: 10, h: 6 },
        { x: 560, w: 8, h: 5 },
      ]
    : [
        { x: 40, w: 12, h: 7 },
        { x: 985, w: 16, h: 9 },
        { x: 880, w: 9, h: 6 },
      ];
  return (
    <g>
      {list.map((r) => (
        <g key={r.x}>
          <ellipse cx={r.x} cy={G} rx={r.w + 3} ry={2} fill="#000" opacity={0.15} />
          <path d={`M${r.x - r.w} ${G} Q${r.x - r.w} ${G - r.h} ${r.x - 2} ${G - r.h - 1} Q${r.x + r.w} ${G - r.h} ${r.x + r.w} ${G} Z`} fill="#a19e95" />
          <path d={`M${r.x - r.w + 3} ${G - 2} Q${r.x - r.w + 4} ${G - r.h + 1} ${r.x - 2} ${G - r.h}`} stroke="#c9c6bd" strokeWidth={1.4} fill="none" />
        </g>
      ))}
    </g>
  );
});

const BlockPattern = ({ id, y }: { id: string; y: number }) => (
  <pattern id={id} patternUnits="userSpaceOnUse" x={0} y={y} width={50} height={25}>
    <rect width={50} height={25} fill="#8d8a82" />
    <rect x={0.7} y={0.7} width={24} height={11.1} fill="#bdbab2" />
    <rect x={25.7} y={0.7} width={23.6} height={11.1} fill="#afaca4" />
    <rect x={13.2} y={13.2} width={24} height={11.1} fill="#b2afa7" />
    <rect x={38.2} y={13.2} width={24} height={11.1} fill="#bcb9b1" />
    <rect x={-11.8} y={13.2} width={24} height={11.1} fill="#bcb9b1" />
    <rect x={0.7} y={0.7} width={24} height={2} fill="#d1cec7" opacity={0.7} />
    <rect x={25.7} y={0.7} width={23.6} height={2} fill="#d1cec7" opacity={0.7} />
    <rect x={13.2} y={13.2} width={24} height={2} fill="#d1cec7" opacity={0.7} />
    <rect x={38.2} y={13.2} width={24} height={2} fill="#d1cec7" opacity={0.7} />
    <rect x={-11.8} y={13.2} width={24} height={2} fill="#d1cec7" opacity={0.7} />
  </pattern>
);

const Defs = memo(function Defs() {
  return (
    <defs>
      <radialGradient id="sunGlow">
        <stop offset="0" stopColor="#fff6cf" stopOpacity={0.95} />
        <stop offset="0.35" stopColor="#ffe9a8" stopOpacity={0.4} />
        <stop offset="1" stopColor="#ffe9a8" stopOpacity={0} />
      </radialGradient>
      <radialGradient id="lampGlow">
        <stop offset="0" stopColor="#ffe9a0" stopOpacity={0.9} />
        <stop offset="1" stopColor="#ffe9a0" stopOpacity={0} />
      </radialGradient>
      <radialGradient id="warmGlow">
        <stop offset="0" stopColor="#ffcf7a" stopOpacity={0.85} />
        <stop offset="1" stopColor="#ffcf7a" stopOpacity={0} />
      </radialGradient>
      <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" stopOpacity={0} />
        <stop offset="1" stopColor="#ffffff" stopOpacity={0.4} />
      </linearGradient>
      <linearGradient id="soilGrad" gradientUnits="userSpaceOnUse" x1="0" y1={G} x2="0" y2={G + 190}>
        <stop offset="0" stopColor="#8d6343" />
        <stop offset="0.4" stopColor="#74503a" />
        <stop offset="0.75" stopColor="#5c3d29" />
        <stop offset="1" stopColor="#47301f" />
      </linearGradient>
      <linearGradient id="pitGrad" gradientUnits="userSpaceOnUse" x1="0" y1={G} x2="0" y2={G + PIT_DEPTH}>
        <stop offset="0" stopColor="#523826" />
        <stop offset="1" stopColor="#35241a" />
      </linearGradient>
      <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#c6e7f1" />
        <stop offset="0.55" stopColor="#7fb3c6" />
        <stop offset="1" stopColor="#4d86a0" />
      </linearGradient>
      <linearGradient id="wallShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#000" stopOpacity={0.12} />
        <stop offset="0.25" stopColor="#000" stopOpacity={0} />
        <stop offset="1" stopColor="#000" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="slabShadow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#000" stopOpacity={0.34} />
        <stop offset="1" stopColor="#000" stopOpacity={0} />
      </linearGradient>
      <pattern id="wood" patternUnits="userSpaceOnUse" width={9} height={12}>
        <rect width={9} height={12} fill="#b07a4d" />
        <rect width={1.6} height={12} fill="#8b5a35" />
        <rect x={5} width={0.8} height={12} fill="#c99362" opacity={0.7} />
        <rect y={6} x={2} width={3} height={0.8} fill="#8b5a35" opacity={0.5} />
      </pattern>
      <BlockPattern id="blk-0" y={floors[0].yb} />
      <BlockPattern id="blk-1" y={floors[1].yb} />
      <BlockPattern id="blk-2" y={floors[2].yb} />
      <BlockPattern id="blk-small" y={0} />
      {windows.map((w) => (
        <clipPath key={w.id} id={`cw-${w.id}`}>
          <rect x={w.x} y={w.y} width={w.w} height={w.h} />
        </clipPath>
      ))}
    </defs>
  );
});

const ghostRects = [
  { x: 300, y: 498, w: 500, h: 100 },
  { x: 300, y: 386, w: 560, h: 100 },
  { x: 360, y: 274, w: 440, h: 100 },
  { x: plinth.x0, y: plinth.y, w: plinth.x1 - plinth.x0, h: SLAB_H },
  ...slabs.map((s) => ({ x: s.x0, y: s.y, w: s.x1 - s.x0, h: SLAB_H })),
];

const solarX = [560, 630, 700];

/* ---------- the scene ---------- */

export function BuildScene({ p }: { p: number }) {
  const t = (a: number, b: number) => seg(p, a, b);
  const gold = t(20, DURATION);
  const lawn = t(32.5, 34.2);

  /* excavation + pit */
  const depth = PIT_DEPTH * easeInOut(t(5.4, 8.0));
  const pileH = 38 * easeOut(t(5.4, 8.0)) * (1 - easeInOut(t(10.6, 12.4)));
  const pitY = G + depth;

  /* rebar */
  const meshD = (() => {
    let d = `M292 662 H808 M290 654 H810`;
    for (let x = 300; x <= 800; x += 25) d += ` M${x} 650 V664`;
    return d;
  })();
  const rebarMesh = easeInOut(t(8.2, 9.6));
  const starters = easeOut(t(9.2, 10.3));
  const cols0 = floors[0].cols.map((c) => c + 8);

  /* concrete */
  const pour = easeInOut(t(10.5, 11.8));
  const pourTop = G + PIT_DEPTH * (1 - pour);
  const cure = t(11.8, 14);
  const concreteColor = mixColor("#7c7b76", "#a9a8a2", cure);
  const plinthU = easeInOut(t(11.6, 12.5));

  /* survey */
  const survey = easeOut(t(2.6, 3.6)) * (1 - t(4.4, 4.9));
  const stringDraw = easeInOut(t(3.0, 4.2));
  const stakeGone = 1 - t(5.1, 5.5);

  /* workers */
  const blocksK = Math.min(2, Math.floor(clamp((p - 18.5) / (4 / 3), 0, 2.999)));
  const plasterK = Math.min(2, Math.floor(clamp((p - 24.5) / 0.6, 0, 2.999)));
  const paintK = Math.min(2, Math.floor(clamp((p - 26.3) / (2.2 / 3), 0, 2.999)));

  const interior = easeInOut(t(30.5, 32.3));

  const grass = mixColor("#c4b87f", "#68a04b", lawn);
  const tuftColor = mixColor("#a99a5a", "#4f8f3d", lawn);
  const lawnTuftColor = tuftColor;

  const workerEl = (() => {
    if (p >= 18.5 && p < 22.5) {
      const f = floors[blocksK];
      const u = easeInOut(t(18.5 + blocksK * (4 / 3), 18.5 + (blocksK + 1) * (4 / 3)));
      const rowsF = u * 8;
      const frac = rowsF - Math.floor(rowsF);
      const W = f.x1 - f.x0;
      return <Worker x={f.x0 + 30 + frac * (W - 60)} y={f.yb} time={p} tool="trowel" />;
    }
    if (p >= 24.5 && p < 26.3) {
      const f = floors[plasterK];
      const u = easeInOut(stagger(p, 24.5, 26.3, plasterK, 3));
      return <Worker x={f.x0 + 20 + u * (f.x1 - f.x0 - 30)} y={f.yb} time={p} tool="trowel" />;
    }
    if (p >= 26.3 && p < 28.5) {
      const f = floors[paintK];
      const u = easeInOut(stagger(p, 26.3, 28.5, paintK, 3));
      return <Worker x={f.x0 + 20 + u * (f.x1 - f.x0 - 30)} y={f.yb} time={p} tool="roller" />;
    }
    return null;
  })();

  return (
    <g>
      <Defs />
      <Backdrop p={p} />

      {/* blueprint ghost + dimensions */}
      <g fill="none" stroke="#12203a" strokeLinecap="butt">
        <g opacity={0.38 * (1 - t(19, 24))} strokeWidth={1.2}>
          {ghostRects.map((r, i) => (
            <path
              key={i}
              d={`M${r.x} ${r.y} h${r.w} v${r.h} h${-r.w} Z`}
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset={1 - easeInOut(t(3.0 + i * 0.1, 4.8 + i * 0.05))}
            />
          ))}
        </g>
        <g opacity={0.6 * t(3.0, 3.6) * (1 - t(5.0, 6.0))} strokeWidth={1.2}>
          <path d="M300 214 H860 M300 206 V222 M860 206 V222" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - easeInOut(t(3.0, 4.2))} />
          <path d="M246 262 V610 M238 262 H254 M238 610 H254" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - easeInOut(t(3.2, 4.4))} />
        </g>
      </g>
      <g opacity={0.7 * t(3.8, 4.4) * (1 - t(5.0, 6.0))} fill="#12203a" fontFamily="Manrope, sans-serif" fontSize={12} textAnchor="middle">
        <text x={580} y={204}>14.0 m</text>
        <text transform="translate(234 440) rotate(-90)">10.4 m</text>
      </g>

      {/* ground */}
      <Soil />
      <rect x={-1500} y={G - 0.5} width={4000} height={9} fill={grass} />
      <rect x={-1500} y={G - 0.5} width={4000} height={1.6} fill="#000" opacity={0.12} />
      <g stroke={tuftColor}>
        <Tufts d={outsideTufts} />
      </g>
      <g stroke={lawnTuftColor} opacity={1 - t(5.1, 5.9)}>
        <Tufts d={insideTufts} />
      </g>
      <Rocks inside={false} />
      <g opacity={1 - t(5.1, 5.9)}>
        <Rocks inside />
      </g>

      {/* survey stakes, tripod, string line */}
      {survey > 0.01 && stakeGone > 0.01 && (
        <g opacity={stakeGone}>
          {[268, 550, 832].map((x, i) => (
            <g key={x} transform={`translate(${x} ${G}) scale(1 ${survey})`}>
              <rect x={-2.2} y={-32} width={4.4} height={32} fill="#c9a36b" />
              <rect x={-2.2} y={-32} width={4.4} height={7} fill="#f0562a" />
              <path
                d={`M2 -29 q8 ${Math.sin(p * 6 + i) * 2 + 2} 15 ${Math.sin(p * 6 + i) * 3 + 3} q-8 ${Math.sin(p * 6 + i) * 2 + 3} -15 3 Z`}
                fill="#ff9d4d"
              />
            </g>
          ))}
          <path
            d={`M268 ${G - 20} H832`}
            stroke="#f0562a"
            strokeWidth={1.3}
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset={1 - stringDraw}
          />
          {/* tripod + instrument */}
          <g transform={`translate(190 ${G}) scale(1 ${survey})`}>
            <path d="M0 -48 L-18 0 M0 -48 L0 0 M0 -48 L18 0" stroke="#3d424b" strokeWidth={2.4} strokeLinecap="round" />
            <rect x={-8} y={-64} width={16} height={16} rx={3} fill="#f2b600" />
            <rect x={-4} y={-61} width={8} height={5} fill="#3d424b" />
            <rect x={8} y={-60} width={8} height={4} rx={1} fill="#3d424b" />
          </g>
          {/* ranging pole */}
          <g transform={`translate(700 ${G}) scale(1 ${survey})`}>
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x={-1.6} y={-60 + i * 12} width={3.2} height={12} fill={i % 2 ? "#f4efe5" : "#e0452e"} />
            ))}
          </g>
        </g>
      )}

      {/* pit */}
      {depth > 0.2 && (
        <g>
          <polygon
            points={`${PIT_X0},${G} ${PIT_X1},${G} ${xr(pitY)},${pitY} ${xl(pitY)},${pitY}`}
            fill="url(#pitGrad)"
          />
          <path d={`M${PIT_X0} ${G} L${xl(pitY)} ${pitY} M${PIT_X1} ${G} L${xr(pitY)} ${pitY}`} stroke="#2a1c12" strokeWidth={2} />
          <rect x={xl(pitY)} y={pitY - 4} width={xr(pitY) - xl(pitY)} height={4} fill="#654a35" />
        </g>
      )}

      {/* rebar in the pit */}
      {rebarMesh > 0 && (
        <g fill="none" stroke="#d9783a" strokeLinecap="round">
          <path d={meshD} strokeWidth={2.2} pathLength={1} strokeDasharray="1" strokeDashoffset={1 - rebarMesh} />
          {starters > 0.001 && cols0.map((cx) =>
            [cx - 5, cx + 5].map((x) => (
              <path
                key={x}
                d={`M${x} 664 V520`}
                strokeWidth={2.4}
                pathLength={1}
                strokeDasharray="1"
                strokeDashoffset={1 - starters}
              />
            ))
          )}
        </g>
      )}

      {/* concrete fill */}
      {pour > 0.001 && (
        <g>
          <polygon
            points={`${xl(pourTop)},${pourTop} ${xr(pourTop)},${pourTop} ${xr(G + PIT_DEPTH)},${G + PIT_DEPTH} ${xl(G + PIT_DEPTH)},${G + PIT_DEPTH}`}
            fill={concreteColor}
          />
          <rect x={xl(pourTop)} y={pourTop} width={xr(pourTop) - xl(pourTop)} height={2} fill="#fff" opacity={0.18} />
          {cure < 1 && (
            <path d={`M${xl(pourTop) + 20} ${pourTop + 8} H${xr(pourTop) - 20}`} stroke="#fff" strokeOpacity={0.12} strokeWidth={2} />
          )}
        </g>
      )}

      {/* dirt pile */}
      {pileH > 0.5 && (
        <g>
          <path
            d={`M188 ${G} Q206 ${G - pileH * 0.95} 226 ${G - pileH} Q248 ${G - pileH * 0.75} 264 ${G} Z`}
            fill="#7d5a3c"
          />
          <path d={`M226 ${G - pileH} Q248 ${G - pileH * 0.75} 264 ${G} L236 ${G} Z`} fill="#5f4129" opacity={0.7} />
          <path d={`M200 ${G - 2} Q212 ${G - pileH * 0.7} 224 ${G - pileH + 2}`} stroke="#a37c58" strokeWidth={2} fill="none" opacity={0.7} />
        </g>
      )}

      <Excavator p={p} depth={depth} pileH={pileH} />

      {/* ------------------- the house ------------------- */}

      {/* plinth / ground slab */}
      {plinthU > 0 && (
        <g>
          <rect x={plinth.x0} y={plinth.y} width={(plinth.x1 - plinth.x0) * plinthU} height={SLAB_H} fill="#b4b2ab" />
          <rect x={plinth.x0} y={plinth.y} width={(plinth.x1 - plinth.x0) * plinthU} height={2} fill="#d0cec7" />
          <rect x={plinth.x0} y={plinth.y + SLAB_H - 2} width={(plinth.x1 - plinth.x0) * plinthU} height={2} fill="#8f8e88" />
        </g>
      )}

      {floors.map((f, k) => {
        const ws = 12.5 + 2 * k;
        const colU = easeOut(t(ws, ws + 1.1));
        const formwork = colU > 0 ? 1 - t(ws + 1.1, ws + 1.7) : 0;
        const slab = slabs[k];
        const pourU = easeInOut(t(ws + 0.9, ws + 2.0));
        const propsOp = t(ws + 0.8, ws + 1.1) * (1 - t(ws + 2.4, ws + 2.9));
        const W = f.x1 - f.x0;
        const nextCols = floors[k + 1]?.cols;

        // walls
        const bs = 18.5 + k * (4 / 3);
        const be = 18.5 + (k + 1) * (4 / 3);
        const bu = t(bs, be);
        const rowsF = bu * 8;
        const done = Math.floor(rowsF);
        const frac = rowsF - done;
        const rh = 12.5;
        const plaster = easeInOut(stagger(p, 24.5, 26.3, k, 3));
        const paint = easeInOut(stagger(p, 26.3, 28.5, k, 3));

        return (
          <g key={f.i}>
            {/* shoring props under the slab */}
            {propsOp > 0.01 && (
              <g stroke="#b88a5a" strokeWidth={2.6} opacity={propsOp}>
                {Array.from({ length: Math.floor((slab.x1 - slab.x0 - 20) / 66) + 1 }).map((_, i) => {
                  const x = slab.x0 + 18 + i * 66;
                  return <line key={i} x1={x} y1={f.yt} x2={x} y2={f.yb} />;
                })}
                <line x1={slab.x0 + 10} y1={f.yt + 2} x2={slab.x1 - 10} y2={f.yt + 2} strokeWidth={4} />
              </g>
            )}

            {/* rebar stubs sticking out of the slab */}
            {nextCols && pourU > 0.9 && (
              <g stroke="#d9783a" strokeWidth={2.2} strokeLinecap="round">
                {nextCols.map((c) => (
                  <g key={c}>
                    <line x1={c + 4} y1={slab.y} x2={c + 4} y2={slab.y - 26} />
                    <line x1={c + 12} y1={slab.y} x2={c + 12} y2={slab.y - 26} />
                  </g>
                ))}
              </g>
            )}

            {/* columns */}
            {colU > 0 &&
              f.cols.map((cx) => {
                const H = (f.yb - f.yt) * colU;
                return (
                  <g key={cx}>
                    <rect x={cx} y={f.yb - H} width={16} height={H} fill="#a9a8a2" />
                    <rect x={cx + 12} y={f.yb - H} width={4} height={H} fill="#8f8e88" />
                    <rect x={cx} y={f.yb - H} width={2} height={H} fill="#c9c7c0" />
                    {formwork > 0.01 && (
                      <rect x={cx - 3} y={f.yb - H} width={22} height={H} fill="url(#wood)" opacity={0.92 * formwork} stroke="#7a4f2c" strokeWidth={1} />
                    )}
                  </g>
                );
              })}

            {/* block walls */}
            {bu > 0 && (
              <g>
                {done > 0 && (
                  <rect x={f.x0} y={f.yb - done * rh} width={W} height={done * rh} fill={`url(#blk-${k})`} />
                )}
                {done < 8 && frac > 0 && (
                  <rect x={f.x0} y={f.yb - (done + 1) * rh} width={W * frac} height={rh} fill={`url(#blk-${k})`} />
                )}
              </g>
            )}

            {/* plaster */}
            {plaster > 0 && (
              <g>
                <rect x={f.x0} y={f.yt} width={W * plaster} height={f.yb - f.yt} fill="#d4cfc4" />
                {plaster < 1 && <rect x={f.x0 + W * plaster - 3} y={f.yt} width={3} height={f.yb - f.yt} fill="#fff" opacity={0.55} />}
              </g>
            )}

            {/* paint */}
            {paint > 0 && (
              <g>
                <rect x={f.x0} y={f.yt} width={W * paint} height={f.yb - f.yt} fill={f.paint} />
                {paint < 1 && <rect x={f.x0 + W * paint - 4} y={f.yt} width={4} height={f.yb - f.yt} fill="#fff" opacity={0.35} />}
                <rect x={f.x0} y={f.yt} width={W * paint} height={f.yb - f.yt} fill="url(#wallShade)" />
              </g>
            )}

            {/* slab shadow on the wall below it */}
            {bu > 0 && (
              <rect x={f.x0} y={f.yt} width={W} height={14} fill="url(#slabShadow)" opacity={bu > 0.99 ? 1 : 0} />
            )}

            {/* slab */}
            {pourU > 0 && (
              <g>
                <rect x={slab.x0} y={slab.y} width={(slab.x1 - slab.x0) * pourU} height={SLAB_H} fill="#b4b2ab" />
                <rect x={slab.x0} y={slab.y} width={(slab.x1 - slab.x0) * pourU} height={2} fill="#d0cec7" />
                <rect x={slab.x0} y={slab.y + SLAB_H - 2} width={(slab.x1 - slab.x0) * pourU} height={2} fill="#8f8e88" />
                {pourU < 1 && (
                  <rect x={slab.x0 + (slab.x1 - slab.x0) * pourU - 5} y={slab.y} width={5} height={SLAB_H} fill="#7d7c77" />
                )}
              </g>
            )}
          </g>
        );
      })}

      <Signature p={p} />

      {/* roof: parapet, planting, solar */}
      {(() => {
        const pw = easeInOut(t(22.6, 23.4));
        if (pw <= 0) return null;
        const roof = slabs[2];
        const rx0 = roof.x0;
        const rw = roof.x1 - roof.x0;
        return (
          <g>
            {solarX.map((x, i) => {
              const s = easeOut(t(23.6 + i * 0.25, 24.2 + i * 0.25));
              if (s <= 0) return null;
              return (
                <g key={x} transform={`translate(${x} ${roof.y - 10 - (1 - s) * 30})`} opacity={s}>
                  <polygon points="0,0 54,0 62,-22 8,-22" fill="#1d3557" stroke="#9aa3b0" strokeWidth={1.4} />
                  <path d="M18 0 L26 -22 M36 0 L44 -22 M4 -11 H58" stroke="#4a6fa5" strokeWidth={0.9} />
                  <path d="M10 -20 L50 -20" stroke="#fff" strokeOpacity={0.25} strokeWidth={1} />
                </g>
              );
            })}
            <rect x={rx0} y={roof.y - 10} width={rw * pw} height={10} fill="#2d3b4f" />
            <rect x={rx0} y={roof.y - 10} width={rw * pw} height={2} fill="#4a5b75" />
            {Array.from({ length: 40 }).map((_, i) => {
              const s = easeOut(t(23.2 + (i / 40) * 0.8, 23.8 + (i / 40) * 0.8));
              if (s <= 0) return null;
              return (
                <circle
                  key={i}
                  cx={rx0 + 8 + i * 11.4}
                  cy={roof.y - 12}
                  r={5.2 * s}
                  fill={i % 3 === 0 ? "#4c8a4a" : i % 3 === 1 ? "#63a85d" : "#7ab56a"}
                />
              );
            })}
          </g>
        );
      })()}

      {/* timber entrance panel */}
      {(() => {
        const wp = easeOut(t(27.0, 27.8));
        if (wp <= 0) return null;
        return (
          <g>
            <rect x={woodPanel.x} y={woodPanel.y + 1} width={woodPanel.w * wp} height={woodPanel.h - 1} fill="url(#wood)" />
            <rect x={woodPanel.x} y={woodPanel.y + 1} width={woodPanel.w * wp} height={woodPanel.h - 1} fill="url(#wallShade)" />
          </g>
        );
      })()}

      {/* warm glow spilling out of windows */}
      {interior > 0 && (
        <g>
          {windows.map((w) => (
            <ellipse
              key={w.id}
              cx={w.x + w.w / 2}
              cy={w.y + w.h / 2}
              rx={w.w * 0.85}
              ry={w.h * 1.1}
              fill="url(#warmGlow)"
              opacity={interior * 0.5}
            />
          ))}
        </g>
      )}

      {/* windows */}
      {windows.map((w, i) => {
        const appear = t(28.5 + i * 0.22 + (i > 1 ? 0.22 : 0), 29.05 + i * 0.22 + (i > 1 ? 0.22 : 0));
        return appear > 0 ? <Window key={w.id} w={w} appear={appear} interior={interior} /> : null;
      })}

      {/* front door */}
      {(() => {
        const a = easeOut(t(28.95, 29.65));
        if (a <= 0) return null;
        return (
          <g opacity={Math.min(1, a * 4)}>
            <rect x={door.x - 4} y={door.y - 4} width={door.w + 8} height={door.h + 4} fill="#1c2733" />
            <rect x={door.x} y={door.y} width={door.w} height={door.h} fill="#2b3a4d" />
            <g transform={`translate(${door.x} ${door.y}) scale(${Math.max(0.02, a)} 1)`}>
              <rect width={door.w} height={door.h} fill="#c8553d" />
              <rect x={6} y={8} width={9} height={door.h - 22} fill={mixColor("#bfe0ea", "#ffe3a1", interior)} />
              <rect x={door.w - 12} y={door.h / 2 - 3} width={3} height={14} rx={1.5} fill="#e9b44c" />
              <rect x={0} y={0} width={door.w} height={door.h} fill="url(#wallShade)" />
            </g>
          </g>
        );
      })()}

      {/* terrace glass railings */}
      {(() => {
        const a = t(29.9, 30.5);
        if (a <= 0) return null;
        const y = slabs[1].y;
        const panels = [
          { x0: 288, x1: 358 },
          { x0: 802, x1: 872 },
        ];
        return (
          <g opacity={a}>
            {panels.map((pn) => (
              <g key={pn.x0}>
                <rect x={pn.x0} y={y - 34} width={pn.x1 - pn.x0} height={34} fill="#bfe3ee" fillOpacity={0.35} stroke="#1c2733" strokeWidth={1.2} />
                <path d={`M${pn.x0 + 18} ${y} V${y - 34} M${pn.x0 + 36} ${y} V${y - 34}`} stroke="#fff" strokeOpacity={0.4} strokeWidth={1} />
                <rect x={pn.x0 - 1} y={y - 36} width={pn.x1 - pn.x0 + 2} height={3} fill="#1c2733" />
                <rect x={pn.x0 - 1} y={y - 36} width={3} height={36} fill="#1c2733" />
                <rect x={pn.x1 - 2} y={y - 36} width={3} height={36} fill="#1c2733" />
              </g>
            ))}
          </g>
        );
      })()}

      <Scaffold p={p} />
      {workerEl}

      <Crane p={p} />
      <Garden p={p} />

      {/* final reveal */}
      {/* callouts removed for minimal embed */}

      {/* golden hour wash */}
      <rect x={-1500} y={-600} width={4000} height={1800} fill="#ff9a4d" opacity={gold * 0.1} style={{ pointerEvents: "none" }} />
    </g>
  );
}

/* ---------- finishing flourish: sparkles, callouts, viewfinder ---------- */

function Star({ x, y, s, delay }: { x: number; y: number; s: number; delay: number }) {
  return (
    <path
      className="twinkle"
      style={{ animationDelay: `${delay}s` }}
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
      fill="#fffbe6"
    />
  );
}

function Pill({ x, y, text, side }: { x: number; y: number; text: string; side: "l" | "r" }) {
  const w = 112;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={26} rx={13} fill="#12203a" />
      <circle cx={side === "l" ? 14 : 14} cy={13} r={4} fill="#e9b44c" />
      <text x={26} y={17} fill="#f6f1e7" fontSize={10.5} fontFamily="Manrope, sans-serif" letterSpacing={0.8}>
        {text}
      </text>
    </g>
  );
}

function FinalTouches({ p }: { p: number }) {
  const sp = easeOut(seg(p, SIGNATURE_END + 0.4, SIGNATURE_END + 1.2));
  const co = easeOut(seg(p, SIGNATURE_END + 0.8, SIGNATURE_END + 1.6));
  const vf = easeOut(seg(p, SIGNATURE_END + 1.2, SIGNATURE_END + 2));
  if (sp <= 0 && co <= 0 && vf <= 0) return null;
  const blink = Math.sin(p * 5) > 0 ? 1 : 0.2;
  const bx0 = 248;
  const bx1 = 892;
  const by0 = 226;
  const by1 = 638;
  const L = 26;
  return (
    <g>
      <g opacity={sp}>
        <Star x={522} y={512} s={1.1} delay={0} />
        <Star x={765} y={296} s={0.9} delay={0.6} />
        <Star x={846} y={402} s={1.2} delay={1.1} />
        <Star x={372} y={290} s={0.8} delay={0.3} />
        <Star x={560} y={400} s={0.9} delay={1.5} />
      </g>

      <g opacity={co}>
        <path d="M206 343 L300 420" stroke="#12203a" strokeWidth={1.4} strokeDasharray="3 3" />
        <circle cx={300} cy={420} r={3.5} fill="#12203a" />
        <Pill x={96} y={330} text="3D EXTERIOR" side="l" />
        <path d="M884 313 L762 330" stroke="#12203a" strokeWidth={1.4} strokeDasharray="3 3" />
        <circle cx={762} cy={330} r={3.5} fill="#12203a" />
        <Pill x={880} y={300} text="3D INTERIOR" side="r" />
      </g>

      <g opacity={vf} stroke="#12203a" strokeWidth={2} fill="none" strokeLinecap="round">
        <path d={`M${bx0} ${by0 + L} V${by0} H${bx0 + L}`} />
        <path d={`M${bx1 - L} ${by0} H${bx1} V${by0 + L}`} />
        <path d={`M${bx0} ${by1 - L} V${by1} H${bx0 + L}`} />
        <path d={`M${bx1 - L} ${by1} H${bx1} V${by1 - L}`} />
        <g stroke="none" fill="#12203a" fontFamily="Manrope, sans-serif" fontSize={10}>
          <text x={bx0 + 8} y={by0 + 18}>RENDER · 4K · 100%</text>
          <text x={bx1 - 8} y={by1 - 10} textAnchor="end">F/2.8 · 24mm</text>
          <circle cx={bx1 - 66} cy={by0 + 14} r={3.6} fill="#e0452e" opacity={blink} />
          <text x={bx1 - 8} y={by0 + 18} textAnchor="end">REC</text>
        </g>
      </g>
    </g>
  );
}
