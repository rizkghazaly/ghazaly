import { memo } from "react";

type Props = {
  x: number;
  y: number; // feet position
  time: number; // seconds, drives the motion
  tool: "trowel" | "roller";
  flip?: boolean;
  opacity?: number;
};

function WorkerImpl({ x, y, time, tool, flip, opacity = 1 }: Props) {
  const bob = Math.sin(time * 9) * 1.2;
  const swing = Math.sin(time * 7);
  const armAngle = tool === "roller" ? -55 + swing * 28 : -30 + swing * 35;
  const dir = flip ? -1 : 1;
  return (
    <g transform={`translate(${x} ${y + bob * 0.4}) scale(${dir} 1)`} opacity={opacity}>
      {/* legs */}
      <rect x={-5} y={-18} width={4.5} height={18} rx={1.5} fill="var(--house-glass-deep)" />
      <rect x={0.5} y={-18} width={4.5} height={18} rx={1.5} fill="var(--house-glass-deep)" />
      {/* torso */}
      <rect x={-6.5} y={-38 + bob * 0.3} width={13} height={22} rx={4} fill="var(--house-accent)" />
      <rect x={-6.5} y={-28 + bob * 0.3} width={13} height={2.4} fill="var(--house-light)" />
      {/* head */}
      <circle cx={0} cy={-45 + bob * 0.3} r={5.2} fill="var(--house-light)" />
      <path d={`M-6.2 ${-46 + bob * 0.3} A6.2 6.2 0 0 1 6.2 ${-46 + bob * 0.3} Z`} fill="var(--house-metal-mid)" />
      <rect x={-7.5} y={-46.5 + bob * 0.3} width={15} height={1.8} rx={0.9} fill="var(--house-metal-deep)" />
      {/* arm + tool */}
      <g transform={`translate(2 ${-34 + bob * 0.3}) rotate(${armAngle})`}>
        <rect x={0} y={-1.8} width={16} height={3.6} rx={1.8} fill="var(--house-accent)" />
        {tool === "roller" ? (
          <g transform="translate(16 0)">
            <rect x={0} y={-1} width={10} height={2} fill="var(--house-stone-mid)" />
            <rect x={8} y={-8} width={5} height={16} rx={2} fill="var(--house-chalk)" stroke="var(--house-stone-light)" strokeWidth={0.8} />
          </g>
        ) : (
          <g transform="translate(16 0)">
            <rect x={0} y={-1.2} width={9} height={2.4} fill="var(--house-stone-mid)" />
            <rect x={8} y={-4.5} width={9} height={3} rx={1} fill="var(--house-stone-light)" />
          </g>
        )}
      </g>
    </g>
  );
}

export const Worker = memo(WorkerImpl);
