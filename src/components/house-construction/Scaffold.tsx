import { memo } from "react";
import { G } from "./constants";
import { easeIn, easeOut, lerp, seg } from "./helpers";

const poles = [276, 430, 584, 738, 892];
const lifts = [610, 550, 490, 430, 370, 310, 250];

const path = (() => {
  let d = "";
  poles.forEach((x) => (d += `M${x} ${G} V250 `));
  lifts.forEach((y) => (d += `M${poles[0]} ${y} H${poles[poles.length - 1]} `));
  for (let i = 0; i < poles.length - 1; i++) {
    for (let j = 0; j < lifts.length - 1; j++) {
      const yA = lifts[j];
      const yB = lifts[j + 1];
      d +=
        (i + j) % 2 === 0
          ? `M${poles[i]} ${yA} L${poles[i + 1]} ${yB} `
          : `M${poles[i + 1]} ${yA} L${poles[i]} ${yB} `;
    }
  }
  return d;
})();

const Frame = memo(function Frame() {
  return (
    <g>
      <path d={path} stroke="var(--house-stone-deep)" strokeWidth={1.5} fill="none" />
      {[550, 430, 310].map((y) => (
        <rect key={y} x={poles[0] - 6} y={y - 2} width={poles[poles.length - 1] - poles[0] + 12} height={4} fill="var(--house-timber-light)" opacity={0.9} />
      ))}
    </g>
  );
});

export function Scaffold({ p }: { p: number }) {
  const rise = easeOut(seg(p, 18.7, 22.3));
  const fall = easeIn(seg(p, 28.8, 30.4));
  if (p < 18.7 || p > 30.5) return null;
  const topY = fall > 0 ? lerp(238, G, fall) : lerp(G, 238, rise);
  return (
    <g opacity={0.8}>
      <clipPath id="scaf-clip">
        <rect x={250} y={topY} width={680} height={G - topY + 2} />
      </clipPath>
      <g clipPath="url(#scaf-clip)">
        <Frame />
      </g>
    </g>
  );
}
