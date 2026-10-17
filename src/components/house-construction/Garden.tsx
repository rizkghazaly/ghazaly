import { memo } from "react";
import { G } from "./constants";
import { easeBack, easeOut, rng, seg } from "./helpers";

const flowers = (() => {
  const r = rng(77);
  const colors = ["var(--house-accent)", "var(--house-metal-mid)", "var(--house-chalk)", "var(--house-timber-light)", "var(--house-glass-light)"];
  return Array.from({ length: 22 }).map((_, i) => {
    const left = i % 2 === 0;
    return {
      x: left ? 150 + r() * 125 : 835 + r() * 150,
      h: 6 + r() * 7,
      c: colors[Math.floor(r() * colors.length)],
      d: r(),
    };
  });
})();

const canopy = [
  { x: 0, y: -98, r: 40, c: "var(--house-leaf-mid)" },
  { x: -28, y: -76, r: 28, c: "var(--house-leaf-mid)" },
  { x: 28, y: -78, r: 30, c: "var(--house-leaf-mid)" },
  { x: -8, y: -118, r: 25, c: "var(--house-leaf-mid)" },
  { x: 20, y: -108, r: 22, c: "var(--house-leaf-mid)" },
];

const Tree = memo(function Tree({ scale }: { scale: number }) {
  return (
    <g>
      <ellipse cx={0} cy={0} rx={38 * scale} ry={4} fill="var(--house-ink)" opacity={0.15} />
      <rect x={-5} y={-78} width={10} height={78} rx={3} fill="var(--house-timber-mid)" />
      <path d="M0 -50 L-18 -76 M0 -40 L16 -70" stroke="var(--house-timber-mid)" strokeWidth={4} strokeLinecap="round" />
      <g className="sway">
        {canopy.map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={c.r} fill={c.c} />
        ))}
        <circle cx={-12} cy={-106} r={8} fill="var(--house-leaf-light)" opacity={0.5} />
      </g>
    </g>
  );
});

const Bush = memo(function Bush() {
  return (
    <g>
      <ellipse cx={0} cy={0} rx={30} ry={3} fill="var(--house-ink)" opacity={0.15} />
      <circle cx={-14} cy={-12} r={14} fill="var(--house-leaf-mid)" />
      <circle cx={8} cy={-15} r={17} fill="var(--house-leaf-mid)" />
      <circle cx={22} cy={-9} r={11} fill="var(--house-leaf-mid)" />
    </g>
  );
});

export function Garden({ p }: { p: number }) {
  if (p < 32.5) return null;
  const t = (a: number, b: number) => seg(p, a, b);
  const grow = (a: number, b: number) => Math.max(0.001, easeBack(t(a, b)));
  const glow = t(33.6, 35.5);
  const steps = easeOut(t(32.5, 33.1));

  return (
    <g>
      {/* steps */}
      <g opacity={steps}>
        <rect x={578} y={G - 6 + (1 - steps) * 6} width={74} height={6} fill="var(--house-stone-light)" />
        <rect x={578} y={G - 6} width={74} height={1.5} fill="var(--house-stone-pale)" />
        <rect x={588} y={G - 12 + (1 - steps) * 6} width={54} height={6} fill="var(--house-stone-light)" />
        <rect x={588} y={G - 12} width={54} height={1.5} fill="var(--house-stone-light)" />
      </g>

      {/* flowers */}
      {flowers.map((f, i) => {
        const s = easeOut(t(33.2 + f.d * 0.9, 34.2 + f.d * 0.9));
        return (
          <g key={i} transform={`translate(${f.x} ${G})`} opacity={s}>
            <line x1={0} y1={0} x2={0} y2={-f.h * s} stroke="var(--house-leaf-mid)" strokeWidth={1.2} />
            <circle cx={0} cy={-f.h * s} r={2.6} fill={f.c} />
          </g>
        );
      })}

      {/* bushes */}
      <g transform={`translate(262 ${G}) scale(${grow(33.0, 33.8)})`}>
        <Bush />
      </g>
      <g transform={`translate(852 ${G}) scale(${grow(33.2, 34.0)})`}>
        <Bush />
      </g>

      {/* trees */}
      <g transform={`translate(205 ${G}) scale(${grow(32.6, 34.0)})`}>
        <Tree scale={1} />
      </g>
      <g transform={`translate(912 ${G}) scale(${grow(32.9, 34.3)})`}>
        <Tree scale={1} />
      </g>
      <g transform={`translate(975 ${G}) scale(${grow(33.3, 34.6) * 0.8})`}>
        <Tree scale={1} />
      </g>

      {/* planters at the door */}
      {[548, 676].map((x, i) => {
        const s = grow(33.4 + i * 0.2, 34.2 + i * 0.2);
        return (
          <g key={x} transform={`translate(${x} ${G - 12}) scale(${s})`}>
            <rect x={-8} y={-12} width={16} height={12} rx={1.5} fill="var(--house-accent)" />
            <rect x={-9} y={-14} width={18} height={3} rx={1} fill="var(--house-accent)" />
            <ellipse cx={0} cy={-26} rx={10} ry={13} fill="var(--house-leaf-mid)" />
            <ellipse cx={-6} cy={-22} rx={5} ry={9} fill="var(--house-leaf-mid)" />
            <ellipse cx={6} cy={-23} rx={5} ry={9} fill="var(--house-leaf-mid)" />
          </g>
        );
      })}

      {/* garden lamp */}
      <g transform={`translate(724 ${G})`} opacity={easeOut(t(33.5, 34.2))}>
        <rect x={-1.5} y={-34} width={3} height={34} fill="var(--house-ink)" />
        <circle cx={0} cy={-38} r={14 + glow * 22} fill="url(#lampGlow)" opacity={0.5 + glow * 0.5} />
        <rect x={-5} y={-44} width={10} height={9} rx={2} fill="var(--house-chalk)" stroke="var(--house-ink)" strokeWidth={1.4} />
        <rect x={-6} y={-46} width={12} height={3} fill="var(--house-ink)" />
      </g>
    </g>
  );
}
