import { memo } from "react";
import type { WinDef } from "./constants";
import { Room } from "./Room";
import { easeOut, seg } from "./helpers";

type Props = { w: WinDef; appear: number; interior: number };

function WindowImpl({ w, appear, interior }: Props) {
  const { x, y, w: ww, h } = w;
  const frameDraw = easeOut(seg(appear, 0, 0.6));
  const glassA = seg(appear, 0.35, 1);
  const frame = `M${x} ${y} h${ww} v${h} h${-ww} Z`;
  return (
    <g>
      <g clipPath={`url(#cw-${w.id})`} opacity={glassA > 0 ? 1 : 0}>
        <rect x={x} y={y} width={ww} height={h} fill="#26364a" />
        <g transform={`translate(${x} ${y})`} opacity={interior}>
          <Room type={w.room} w={ww} h={h} id={w.id} />
        </g>
        <rect x={x} y={y} width={ww} height={h} fill="url(#glassGrad)" opacity={glassA * (1 - interior * 0.74)} />
        {/* reflections */}
        <g opacity={glassA * (0.3 - interior * 0.14)} fill="#fff">
          <polygon points={`${x + ww * 0.12},${y + h} ${x + ww * 0.3},${y + h} ${x + ww * 0.52},${y} ${x + ww * 0.34},${y}`} />
          <polygon points={`${x + ww * 0.58},${y + h} ${x + ww * 0.64},${y + h} ${x + ww * 0.86},${y} ${x + ww * 0.8},${y}`} />
        </g>
      </g>
      <path
        d={frame}
        fill="none"
        stroke="#1c2733"
        strokeWidth={4}
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray="1"
        strokeDashoffset={1 - frameDraw}
      />
      <g stroke="#1c2733" strokeWidth={2.4} opacity={glassA}>
        {w.mull.map((m) => (
          <line key={m} x1={x + ww * m} y1={y} x2={x + ww * m} y2={y + h} />
        ))}
      </g>
      <rect x={x - 3} y={y + h + 1} width={ww + 6} height={3} fill="#e5e0d6" opacity={glassA} />
    </g>
  );
}

export const Window = memo(WindowImpl);
