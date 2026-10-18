import { G, PIT_DEPTH } from "./constants";
import { easeInOut, easeIn, easeOut, lerp, seg } from "./helpers";

export const EX_X = 125;
const L1 = 112;
const L2 = 90;
const P0 = { x: 28, y: -52 };
const DEG = 180 / Math.PI;

/** two link inverse kinematics, elbow up */
function ik(tx: number, ty: number) {
  const dx = tx - P0.x;
  const dy = ty - P0.y;
  let d = Math.hypot(dx, dy);
  d = Math.min(L1 + L2 - 0.5, Math.max(Math.abs(L1 - L2) + 1, d));
  const a = Math.atan2(dy, dx);
  const cosB = (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d);
  const b = Math.acos(Math.max(-1, Math.min(1, cosB)));
  const a1 = a - b;
  const e = { x: P0.x + L1 * Math.cos(a1), y: P0.y + L1 * Math.sin(a1) };
  const a2 = Math.atan2(ty - e.y, tx - e.x);
  const reach = { x: e.x + L2 * Math.cos(a2), y: e.y + L2 * Math.sin(a2) };
  return { a1, a2, e, tip: reach };
}

type Props = { p: number; depth: number; pileH: number };

export function Excavator({ p, depth, pileH }: Props) {
  const enter = easeOut(seg(p, 4.3, 5.3));
  const exit = easeIn(seg(p, 8.0, 8.9));
  if (p < 4.3 || p > 8.95) return null;
  const x = p < 8 ? lerp(-100, EX_X, enter) : lerp(EX_X, -140, exit);
  const moving = p < 5.3 || p > 8.0;

  // dig cycle
  const w = seg(p, 5.2, 5.7) * (1 - seg(p, 7.7, 8.1));
  const u = (((p - 5.3) / 1.5) % 1 + 1) % 1;
  const m = 0.5 - 0.5 * Math.cos(2 * Math.PI * u);
  const digT = { x: 315 - EX_X, y: G + depth - 8 - G };
  const dumpT = { x: 232 - EX_X, y: -(pileH + 26) };
  const restT = { x: 96, y: -44 };
  const cycleT = {
    x: lerp(digT.x, dumpT.x, easeInOut(m)),
    y: lerp(digT.y, dumpT.y, easeInOut(m)),
  };
  const T = { x: lerp(restT.x, cycleT.x, w), y: lerp(restT.y, cycleT.y, w) };
  const { a1, a2, e, tip } = ik(T.x, T.y);
  const curl = lerp(lerp(30, 30, w), lerp(25, 105, easeInOut(m)), w);

  // wheels roll while driving
  const roll = moving ? p * 160 : 0;

  // hydraulic cylinder (boom)
  const cylFrom = { x: 8, y: -40 };
  const cylTo = {
    x: P0.x + Math.cos(a1) * L1 * 0.42 + Math.sin(a1) * 9,
    y: P0.y + Math.sin(a1) * L1 * 0.42 - Math.cos(a1) * 9,
  };

  return (
    <g transform={`translate(${x} ${G})`}>
      {/* shadow */}
      <ellipse cx={0} cy={1} rx={70} ry={3.5} fill="#000" opacity={0.18} />

      {/* boom + stick (behind body) */}
      <line x1={cylFrom.x} y1={cylFrom.y} x2={cylTo.x} y2={cylTo.y} stroke="#9aa0aa" strokeWidth={5} strokeLinecap="round" />
      <line x1={P0.x} y1={P0.y} x2={e.x} y2={e.y} stroke="#d99c00" strokeWidth={13} strokeLinecap="round" />
      <line x1={P0.x} y1={P0.y} x2={e.x} y2={e.y} stroke="#f2b600" strokeWidth={9} strokeLinecap="round" />
      <line x1={e.x} y1={e.y} x2={tip.x} y2={tip.y} stroke="#d99c00" strokeWidth={10} strokeLinecap="round" />
      <line x1={e.x} y1={e.y} x2={tip.x} y2={tip.y} stroke="#f2b600" strokeWidth={6} strokeLinecap="round" />
      <circle cx={e.x} cy={e.y} r={5} fill="#3d424b" />

      {/* bucket */}
      <g transform={`translate(${tip.x} ${tip.y}) rotate(${a2 * DEG + curl})`}>
        <path d="M-4 -5 L8 -5 Q28 -1 28 19 L19 19 Q15 8 -4 8 Z" fill="#3d424b" />
        <path d="M19 19 L28 19 L29 24 L21 24 Z" fill="#c9ccd2" />
        <circle cx={0} cy={0} r={3.2} fill="#9aa0aa" />
      </g>

      {/* tracks */}
      <rect x={-60} y={-24} width={120} height={24} rx={12} fill="#23262c" />
      <rect x={-54} y={-20} width={108} height={16} rx={8} fill="#343840" />
      {[-40, -14, 14, 40].map((cx) => (
        <g key={cx} transform={`translate(${cx} -12) rotate(${roll})`}>
          <circle r={6.2} fill="#4a4f58" />
          <line x1={-5} y1={0} x2={5} y2={0} stroke="#23262c" strokeWidth={1.6} />
          <line x1={0} y1={-5} x2={0} y2={5} stroke="#23262c" strokeWidth={1.6} />
        </g>
      ))}

      {/* body */}
      <rect x={-64} y={-54} width={18} height={26} rx={3} fill="#3d424b" />
      <rect x={-52} y={-62} width={36} height={14} rx={4} fill="#d99c00" />
      <rect x={-50} y={-50} width={96} height={27} rx={5} fill="#f2b600" />
      <rect x={-50} y={-30} width={96} height={4} fill="#d99c00" />

      {/* cab */}
      <path d="M-8 -50 L-8 -80 Q-8 -88 0 -88 L30 -88 Q38 -88 40 -80 L46 -50 Z" fill="#f2b600" />
      <path d="M-2 -54 L-2 -78 Q-2 -83 3 -83 L29 -83 Q34 -83 35 -78 L39 -54 Z" fill="#9fd3e6" />
      <path d="M4 -83 L14 -83 L4 -54 L-2 -54 Z" fill="#fff" opacity={0.35} />
      <rect x={-6} y={-92} width={48} height={4} rx={2} fill="#d99c00" />
    </g>
  );
}

export const PIT_BOTTOM_Y = G + PIT_DEPTH;
