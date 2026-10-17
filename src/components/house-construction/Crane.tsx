import { memo } from "react";
import { CRANE_TOP, CRANE_X, G, JIB_Y, PICK_X } from "./constants";
import { easeOut, keyframes, seg } from "./helpers";

type PayloadType = "rebar" | "bucket" | "blocks" | "solar" | "glass";

type Task = {
  a: number;
  b: number;
  cycles: number;
  type: PayloadType;
  dx: number;
  dy: number; // hook y when the load is set down
};

const tasks: Task[] = [
  { a: 9.0, b: 10.3, cycles: 1, type: "rebar", dx: 540, dy: 548 },
  { a: 10.3, b: 12.5, cycles: 2, type: "bucket", dx: 470, dy: 548 },
  { a: 12.5, b: 14.5, cycles: 1, type: "rebar", dx: 640, dy: 450 },
  { a: 14.5, b: 16.5, cycles: 1, type: "bucket", dx: 600, dy: 338 },
  { a: 16.5, b: 18.5, cycles: 1, type: "rebar", dx: 560, dy: 226 },
  { a: 18.5, b: 19.83, cycles: 1, type: "blocks", dx: 700, dy: 558 },
  { a: 19.83, b: 21.16, cycles: 1, type: "blocks", dx: 740, dy: 446 },
  { a: 21.16, b: 22.5, cycles: 1, type: "blocks", dx: 680, dy: 334 },
  { a: 22.5, b: 24.5, cycles: 2, type: "solar", dx: 560, dy: 214 },
  { a: 28.5, b: 29.4, cycles: 1, type: "glass", dx: 430, dy: 558 },
  { a: 29.4, b: 30.3, cycles: 1, type: "glass", dx: 450, dy: 446 },
];

const PICK_Y = G - 44; // hook y when the load sits on the ground
const REST_Y = 238;

const towerPath = (() => {
  const x0 = CRANE_X - 14;
  const x1 = CRANE_X + 14;
  let d = `M${x0} ${G} V${CRANE_TOP} M${x1} ${G} V${CRANE_TOP}`;
  const step = 28;
  let flip = false;
  for (let y = G; y - step >= CRANE_TOP; y -= step) {
    d += ` M${x0} ${y} H${x1}`;
    d += flip ? ` M${x1} ${y} L${x0} ${y - step}` : ` M${x0} ${y} L${x1} ${y - step}`;
    flip = !flip;
  }
  return d;
})();

const jibPath = (() => {
  const top = JIB_Y - 8;
  const bot = JIB_Y + 8;
  const xL = 290;
  const xR = 985;
  let d = `M${xL} ${bot} H${xR} M${xL + 4} ${top} H${xR}`;
  let flip = true;
  for (let x = xL; x < xR - 12; x += 17) {
    d += flip ? ` M${x} ${bot} L${x + 17} ${top}` : ` M${x} ${top} L${x + 17} ${bot}`;
    flip = !flip;
  }
  return d;
})();

const CraneBody = memo(function CraneBody() {
  const apexY = CRANE_TOP - 40;
  return (
    <g stroke="var(--house-metal-mid)" strokeWidth={2.2} fill="none" strokeLinecap="round">
      <path d={towerPath} />
      <path d={jibPath} strokeWidth={1.8} />
      {/* A frame + pendants */}
      <path d={`M${CRANE_X - 14} ${JIB_Y - 8} L${CRANE_X} ${apexY} L${CRANE_X + 14} ${JIB_Y - 8}`} />
      <path d={`M${CRANE_X} ${apexY} L330 ${JIB_Y - 8} M${CRANE_X} ${apexY} L985 ${JIB_Y - 8}`} strokeWidth={1.2} stroke="var(--house-metal-deep)" />
      {/* slewing unit + cab */}
      <rect x={CRANE_X - 20} y={JIB_Y + 8} width={40} height={10} fill="var(--house-metal-deep)" stroke="none" />
      <rect x={CRANE_X - 42} y={JIB_Y + 6} width={20} height={20} rx={2} fill="var(--house-metal-mid)" stroke="none" />
      <rect x={CRANE_X - 39} y={JIB_Y + 9} width={13} height={10} fill="var(--house-glass-light)" stroke="none" />
      {/* counterweights */}
      <g stroke="none">
        <rect x={956} y={JIB_Y + 8} width={30} height={30} fill="var(--house-stone-mid)" />
        <rect x={956} y={JIB_Y + 8} width={30} height={10} fill="var(--house-stone-light)" />
        <rect x={956} y={JIB_Y + 24} width={30} height={2} fill="var(--house-stone-mid)" />
      </g>
      {/* red light */}
      <circle cx={CRANE_X} cy={apexY - 4} r={3} fill="var(--house-accent)" stroke="none" />
      {/* base */}
      <g stroke="none">
        <rect x={CRANE_X - 30} y={G - 12} width={60} height={12} fill="var(--house-stone-mid)" />
        <rect x={CRANE_X - 30} y={G - 12} width={60} height={3} fill="var(--house-stone-light)" />
      </g>
    </g>
  );
});

function Payload({ type, hanging }: { type: PayloadType; hanging: boolean }) {
  return (
    <g>
      {hanging && (
        <g stroke="var(--house-stone-deep)" strokeWidth={1}>
          <line x1={0} y1={-8} x2={-15} y2={4} />
          <line x1={0} y1={-8} x2={15} y2={4} />
        </g>
      )}
      {type === "rebar" && (
        <g>
          {[4, 8, 12, 16, 20].map((y) => (
            <line key={y} x1={-18} y1={y} x2={18} y2={y} stroke="var(--house-accent)" strokeWidth={2.4} strokeLinecap="round" />
          ))}
          <rect x={-9} y={2} width={2.4} height={20} fill="var(--house-stone-deep)" />
          <rect x={7} y={2} width={2.4} height={20} fill="var(--house-stone-deep)" />
        </g>
      )}
      {type === "bucket" && (
        <g>
          <path d="M-15 2 L15 2 L8 20 L-8 20 Z" fill="var(--house-stone-mid)" />
          <rect x={-15} y={2} width={30} height={5} fill="var(--house-metal-mid)" />
          <rect x={-4} y={20} width={8} height={4} fill="var(--house-stone-deep)" />
        </g>
      )}
      {type === "blocks" && (
        <g>
          <rect x={-18} y={4} width={36} height={18} fill="url(#blk-small)" stroke="var(--house-stone-mid)" strokeWidth={0.8} />
          <rect x={-20} y={22} width={40} height={4} fill="var(--house-timber-light)" />
        </g>
      )}
      {type === "solar" && (
        <g>
          <polygon points="-18,22 14,22 19,6 -13,6" fill="var(--house-glass-deep)" stroke="var(--house-stone-light)" strokeWidth={1.2} />
          <path d="M-8 22 L-3 6 M2 22 L7 6 M-15.5 14 H16.5" stroke="var(--house-glass-mid)" strokeWidth={0.8} />
        </g>
      )}
      {type === "glass" && (
        <g>
          <rect x={-15} y={2} width={30} height={22} fill="var(--house-glass-light)" stroke="var(--house-timber-light)" strokeWidth={2.4} />
          <path d="M-8 22 L2 4 M0 22 L10 4" stroke="var(--house-stone-pale)" strokeWidth={2} opacity={0.6} />
        </g>
      )}
    </g>
  );
}

type Props = { p: number };

export function Crane({ p }: Props) {
  const asm = easeOut(seg(p, 8, 9)) * (1 - easeOut(seg(p, 30.6, 31.8)));
  if (asm <= 0.01) return null;

  // find the active task
  let task: Task | null = null;
  for (const t of tasks) if (p >= t.a && p < t.b) task = t;

  let trolleyX = PICK_X;
  let hookY = REST_Y;
  let carrying = false;
  let u = 0.5;
  if (task && asm > 0.99) {
    u = (((p - task.a) / (task.b - task.a)) * task.cycles) % 1;
    const trY = Math.max(190, task.dy - 64);
    trolleyX = keyframes(u, [
      [0, PICK_X],
      [0.36, PICK_X],
      [0.54, task.dx],
      [0.76, task.dx],
      [0.96, PICK_X],
      [1, PICK_X],
    ]);
    hookY = keyframes(u, [
      [0, REST_Y],
      [0.14, PICK_Y],
      [0.2, PICK_Y],
      [0.36, trY],
      [0.54, trY],
      [0.7, task.dy],
      [0.76, task.dy],
      [0.86, trY],
      [1, REST_Y],
    ]);
    carrying = u > 0.14 && u < 0.72;
  }

  const showHook = asm > 0.99;
  const stackVisible = !!task && (u < 0.14 || u > 0.72);
  const pour = task && task.type === "bucket" && carrying && u > 0.68;

  return (
    <g>
      <g transform={`translate(${CRANE_X} ${G}) scale(1 ${asm}) translate(${-CRANE_X} ${-G})`}>
        <CraneBody />
      </g>

      {showHook && (
        <g>
          {/* trolley */}
          <rect x={trolleyX - 9} y={JIB_Y + 8} width={18} height={9} rx={2} fill="var(--house-stone-deep)" />
          {/* cable */}
          <line x1={trolleyX} y1={JIB_Y + 16} x2={trolleyX} y2={hookY} stroke="var(--house-stone-deep)" strokeWidth={1.3} />
          {/* hook block */}
          <rect x={trolleyX - 5} y={hookY - 1} width={10} height={8} rx={1.5} fill="var(--house-metal-mid)" stroke="var(--house-stone-deep)" strokeWidth={1} />
          <path
            d={`M${trolleyX} ${hookY + 7} v4 q0 5 -4 5 q-3 0 -3 -3`}
            stroke="var(--house-stone-deep)"
            strokeWidth={1.6}
            fill="none"
            strokeLinecap="round"
          />
          {task && carrying && (
            <g transform={`translate(${trolleyX} ${hookY + 14})`}>
              <Payload type={task.type} hanging />
            </g>
          )}
          {pour && task && (
            <rect
              x={trolleyX - 2.5}
              y={hookY + 38}
              width={5}
              height={34}
              fill="var(--house-stone-mid)"
              opacity={0.9}
            />
          )}
        </g>
      )}

      {/* material waiting on the ground */}
      {task && showHook && stackVisible && (
        <g transform={`translate(${PICK_X} ${G - 28})`}>
          <Payload type={task.type} hanging={false} />
        </g>
      )}
    </g>
  );
}
