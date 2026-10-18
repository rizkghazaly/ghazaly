import { memo } from "react";
import type { RoomType } from "./constants";

type Props = { type: RoomType; w: number; h: number; id: string };

const books = ["#c8553d", "#2f6f73", "#e9b44c", "#12203a", "#8a9a5b", "#d9c7a0", "#a8432e", "#4a6fa5"];

function RoomImpl({ type, w, h, id }: Props) {
  const fl = h - 8; // floor line
  return (
    <g>
      {/* back wall + floor */}
      <rect width={w} height={h} fill={`url(#wall-${id})`} />
      <rect y={fl} width={w} height={h - fl} fill="#7a4e33" />
      <rect y={fl} width={w} height={1.5} fill="#5a3825" />
      <defs>
        <linearGradient id={`wall-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe9bd" />
          <stop offset="1" stopColor="#f3c27f" />
        </linearGradient>
      </defs>

      {type === "living" && (
        <>
          {/* art */}
          <rect x={52} y={10} width={42} height={26} fill="#fff6e2" stroke="#12203a" strokeWidth={1.5} />
          <circle cx={66} cy={22} r={6} fill="#c8553d" />
          <rect x={74} y={18} width={14} height={12} fill="#2f6f73" />
          {/* sofa */}
          <rect x={22} y={fl - 38} width={86} height={22} rx={8} fill="#2f6f73" />
          <rect x={16} y={fl - 24} width={98} height={22} rx={7} fill="#3c8a8f" />
          <rect x={26} y={fl - 20} width={26} height={12} rx={5} fill="#e9b44c" />
          {/* table + rug */}
          <ellipse cx={128} cy={fl + 1} rx={30} ry={3} fill="#c8553d" opacity={0.7} />
          <rect x={116} y={fl - 11} width={26} height={4} rx={1} fill="#3a2518" />
          <rect x={120} y={fl - 7} width={3} height={7} fill="#3a2518" />
          <rect x={135} y={fl - 7} width={3} height={7} fill="#3a2518" />
          {/* pendant */}
          <line x1={152} y1={0} x2={152} y2={18} stroke="#12203a" strokeWidth={1.5} />
          <path d={`M142 28 Q152 10 162 28 Z`} fill="#fff4c2" />
          <ellipse cx={152} cy={29} rx={10} ry={3} fill="#fff9e0" />
          {/* plant */}
          <rect x={170} y={fl - 14} width={11} height={14} fill="#c8553d" />
          <ellipse cx={175} cy={fl - 24} rx={9} ry={14} fill="#4c8a4a" />
          <ellipse cx={168} cy={fl - 20} rx={6} ry={10} fill="#5fa05a" />
        </>
      )}

      {type === "kitchen" && (
        <>
          <rect x={4} y={14} width={w - 8} height={3} fill="#6b4a33" />
          {[10, 22, 34, 46].map((x, i) => (
            <rect key={x} x={x} y={5} width={8} height={9} rx={2} fill={books[i + 1]} />
          ))}
          <rect x={0} y={fl - 18} width={w} height={18} fill="#e8e1d4" />
          <rect x={0} y={fl - 20} width={w} height={3} fill="#2d3b4f" />
          <line x1={20} y1={0} x2={20} y2={20} stroke="#12203a" strokeWidth={1} />
          <circle cx={20} cy={24} r={5} fill="#fff4c2" />
          <line x1={48} y1={0} x2={48} y2={20} stroke="#12203a" strokeWidth={1} />
          <circle cx={48} cy={24} r={5} fill="#fff4c2" />
        </>
      )}

      {type === "bed" && (
        <>
          {/* headboard + bed */}
          <rect x={30} y={fl - 34} width={10} height={34} rx={2} fill="#6b4a33" />
          <rect x={30} y={fl - 20} width={110} height={14} rx={3} fill="#f1ece0" />
          <rect x={64} y={fl - 20} width={76} height={14} rx={3} fill="#c8553d" />
          <rect x={42} y={fl - 26} width={22} height={8} rx={4} fill="#fffaf0" />
          <rect x={34} y={fl - 6} width={102} height={6} fill="#4a3426" />
          {/* bedside lamp */}
          <rect x={148} y={fl - 12} width={14} height={12} fill="#6b4a33" />
          <rect x={154} y={fl - 24} width={2.5} height={12} fill="#12203a" />
          <path d={`M148 ${fl - 24} L162 ${fl - 24} L158 ${fl - 36} L152 ${fl - 36} Z`} fill="#fff4c2" />
          {/* art */}
          <rect x={176} y={10} width={20} height={26} fill="#fff6e2" stroke="#12203a" strokeWidth={1.2} />
          <rect x={200} y={14} width={20} height={18} fill="#fff6e2" stroke="#12203a" strokeWidth={1.2} />
          <circle cx={186} cy={23} r={5} fill="#2f6f73" />
          <rect x={204} y={18} width={12} height={10} fill="#e9b44c" />
          {/* chandelier */}
          <line x1={100} y1={0} x2={100} y2={10} stroke="#12203a" strokeWidth={1.2} />
          <circle cx={100} cy={14} r={5} fill="#fff9d6" />
        </>
      )}

      {type === "lounge" && (
        <>
          <ellipse cx={55} cy={fl + 1} rx={42} ry={3.5} fill="#2f6f73" opacity={0.75} />
          <rect x={22} y={fl - 26} width={40} height={26} rx={9} fill="#e9b44c" />
          <rect x={16} y={fl - 18} width={14} height={18} rx={5} fill="#d19a2b" />
          <rect x={64} y={fl - 8} width={20} height={8} rx={2} fill="#3a2518" />
          {/* floor lamp */}
          <rect x={104} y={14} width={2.5} height={fl - 14} fill="#12203a" />
          <path d={`M95 20 L116 20 L111 6 L100 6 Z`} fill="#fff4c2" />
          {/* shelf */}
          <rect x={118} y={20} width={18} height={3} fill="#6b4a33" />
          <rect x={121} y={12} width={5} height={8} fill="#c8553d" />
          <rect x={128} y={14} width={5} height={6} fill="#12203a" />
        </>
      )}

      {type === "library" && (
        <>
          {[0, 1, 2].map((r) => (
            <g key={r}>
              <rect x={6} y={18 + r * 18} width={w - 12} height={2.5} fill="#6b4a33" />
              {Array.from({ length: 16 }).map((_, i) => (
                <rect
                  key={i}
                  x={9 + i * 8}
                  y={18 + r * 18 - (8 + ((i * 7 + r * 3) % 7))}
                  width={6}
                  height={8 + ((i * 7 + r * 3) % 7)}
                  fill={books[(i + r * 3) % books.length]}
                />
              ))}
            </g>
          ))}
          <rect x={6} y={fl - 14} width={30} height={14} rx={4} fill="#2f6f73" />
          <circle cx={w - 22} cy={fl - 10} r={9} fill="#4c8a4a" />
          <rect x={w - 25} y={fl - 4} width={6} height={4} fill="#c8553d" />
        </>
      )}

      {type === "office" && (
        <>
          {/* desk */}
          <rect x={18} y={fl - 24} width={118} height={4} fill="#3a2518" />
          <rect x={22} y={fl - 20} width={3} height={20} fill="#3a2518" />
          <rect x={129} y={fl - 20} width={3} height={20} fill="#3a2518" />
          {/* monitor with a 3D cube */}
          <rect x={52} y={fl - 54} width={56} height={30} rx={2} fill="#0f1b2d" />
          <rect x={77} y={fl - 24} width={6} height={3} fill="#0f1b2d" />
          <g stroke="#6fe0ff" strokeWidth={1} fill="none">
            <path d={`M70 ${fl - 36} L80 ${fl - 41} L90 ${fl - 36} L90 ${fl - 29} L80 ${fl - 24} L70 ${fl - 29} Z`} />
            <path d={`M80 ${fl - 41} L80 ${fl - 31} M70 ${fl - 36} L80 ${fl - 31} L90 ${fl - 36}`} />
          </g>
          {/* lamp */}
          <rect x={120} y={fl - 38} width={2} height={14} fill="#12203a" />
          <path d={`M114 ${fl - 38} L128 ${fl - 38} L124 ${fl - 46} L118 ${fl - 46} Z`} fill="#fff4c2" />
          {/* chair */}
          <rect x={150} y={fl - 30} width={8} height={18} rx={3} fill="#c8553d" />
          <rect x={146} y={fl - 14} width={18} height={5} rx={2} fill="#c8553d" />
          <rect x={154} y={fl - 9} width={2} height={9} fill="#12203a" />
          {/* art */}
          <rect x={14} y={8} width={26} height={16} fill="#fff6e2" stroke="#12203a" strokeWidth={1.2} />
          <path d="M16 22 L24 13 L30 19 L34 15 L38 22 Z" fill="#2f6f73" />
        </>
      )}
    </g>
  );
}

export const Room = memo(RoomImpl);
