import { useId, type SVGProps } from "react";
const site = { name: "Rizk Ghazaly" };
import { easeInOut, easeOut, lerp, seg } from "./helpers";
import { SIGNATURE_END, SIGNATURE_START } from "./phases";

type Glyph = { width: number; path: string };
type Letter = { character: string; x: number; width: number; path?: string };

const GLYPHS: Record<string, Glyph> = {
  R: { width: 32, path: "M0 44V0H15C25 0 30 5 30 13C30 20 26 24 20 25L32 44H24L13 26H7V44ZM7 6V20H15C20 20 23 18 23 13C23 8 20 6 15 6Z" },
  I: { width: 8, path: "M0 0H8V44H0Z" },
  Z: { width: 30, path: "M0 0H30V6L8 38H30V44H0V38L22 6H0Z" },
  K: { width: 33, path: "M0 0H7V19L23 0H32L14 21L33 44H24L7 24V44H0Z" },
  G: { width: 34, path: "M33 12H26C25 8 22 6 17 6C10 6 7 12 7 22C7 32 10 38 17 38C21 38 24 37 27 35V27H17V21H34V39C29 42 24 44 17 44C6 44 0 36 0 22C0 8 6 0 17 0C26 0 32 4 33 12Z" },
  H: { width: 31, path: "M0 0H7V18H24V0H31V44H24V25H7V44H0Z" },
  A: { width: 35, path: "M0 44L13 0H22L35 44H27L24 33H11L8 44ZM13 27H22L17.5 10Z" },
  L: { width: 27, path: "M0 0H7V37H27V44H0Z" },
  Y: { width: 34, path: "M0 0H8L17 18L26 0H34L21 25V44H13V25Z" },
};

let advance = 0;
const LETTERS: Letter[] = [];
for (const character of site.name.toUpperCase()) {
  if (character === " ") {
    advance += 18;
    continue;
  }
  const glyph = GLYPHS[character];
  const width = glyph?.width ?? 32;
  LETTERS.push({ character, x: advance, width, path: glyph?.path });
  advance += width + 8;
}

const WIDTH = Math.max(0, advance - 8);
const LEFT = 580 - WIDTH / 2;
const TOP = 168;
const HEIGHT = 44;
const RAIL_Y = 219;
const RIG_Y = 136;
const FIRST_LETTER = SIGNATURE_START + 0.65;
const LAST_LETTER = SIGNATURE_END - 0.65;
const STEP = (LAST_LETTER - FIRST_LETTER) / Math.max(1, LETTERS.length);

function LetterShape({ letter, ...props }: { letter: Letter } & SVGProps<SVGPathElement>) {
  if (letter.path) return <path d={letter.path} fillRule="evenodd" {...props} />;
  return (
    <text
      x={0}
      y={HEIGHT}
      fontFamily="Manrope, sans-serif"
      fontSize={59}
      fontWeight={700}
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      transform={props.transform}
    >
      {letter.character}
    </text>
  );
}

export function Signature({ p }: { p: number }) {
  const id = useId().replace(/:/g, "");
  if (p <= SIGNATURE_START || LETTERS.length === 0) return null;

  const frame = easeOut(seg(p, SIGNATURE_START, FIRST_LETTER));
  const rig = frame * (1 - easeInOut(seg(p, LAST_LETTER, SIGNATURE_END - 0.15)));
  const current = Math.min(LETTERS.length - 1, Math.max(0, Math.floor((p - FIRST_LETTER) / STEP)));
  const active = LETTERS[current];
  const previous = LETTERS[Math.max(0, current - 1)];
  if (!active || !previous) return null;
  const local = seg(p, FIRST_LETTER + current * STEP, FIRST_LETTER + (current + 1) * STEP);
  const lift = 16 * (1 - easeOut(local));
  const trolleyX = LEFT + lerp(
    previous.x + previous.width / 2,
    active.x + active.width / 2,
    easeInOut(seg(local, 0, 0.25)),
  );
  const hookY = TOP + lift - 9;
  const supports = [LEFT + 22, 580, LEFT + WIDTH - 22];

  return (
    <g data-rooftop-signature={site.name} role="img" aria-label={`${site.name}, built letter by letter above the rooftop`}>
      <title>{site.name} - the architect's signature</title>
      <defs>
        <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="var(--house-chalk)" />
          <stop offset="0.45" stopColor="var(--house-light)" />
          <stop offset="1" stopColor="var(--house-metal-mid)" />
        </linearGradient>
        {LETTERS.map((letter, i) => {
          const u = seg(p, FIRST_LETTER + i * STEP, FIRST_LETTER + (i + 1) * STEP);
          const fill = easeInOut(seg(u, 0.18, 0.88));
          return (
            <clipPath key={i} id={`${id}-letter-${i}`}>
              <rect x={-2} y={HEIGHT * (1 - fill) - 1} width={letter.width + 8} height={HEIGHT * fill + 7} />
            </clipPath>
          );
        })}
      </defs>

      {/* The mounting rail stays on the roof after the temporary lifting rig is removed. */}
      <g stroke="var(--house-glass-deep)" strokeWidth={2.5} fill="none">
        {supports.map((x) => (
          <path key={x} d={`M${x} 260V${RAIL_Y + 2}`} pathLength={1} strokeDasharray="1" strokeDashoffset={1 - frame} />
        ))}
        <path d={`M${LEFT - 8} ${RAIL_Y}H${LEFT + WIDTH + 9}`} pathLength={1} strokeDasharray="1" strokeDashoffset={1 - frame} strokeWidth={4} />
        <path d={`M${LEFT - 8} ${RAIL_Y - 2}H${LEFT + WIDTH + 9}`} pathLength={1} strokeDasharray="1" strokeDashoffset={1 - frame} stroke="var(--house-timber-light)" strokeWidth={1} />
      </g>

      {rig > 0.001 && (
        <g opacity={rig}>
          <path
            d={`M${LEFT - 22} 260V${RIG_Y}H${LEFT + WIDTH + 24}V260`}
            fill="none"
            stroke="var(--house-stone-deep)"
            strokeWidth={1.8}
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset={1 - frame}
          />
          <path d={`M${LEFT - 22} ${RIG_Y + 6}H${LEFT + WIDTH + 24}`} stroke="var(--house-metal-deep)" strokeWidth={2} opacity={frame} />
          {p >= FIRST_LETTER && (
            <g>
              <rect x={trolleyX - 9} y={RIG_Y - 3} width={18} height={10} rx={2} fill="var(--house-metal-mid)" stroke="var(--house-ink)" strokeWidth={1} />
              <line x1={trolleyX} y1={RIG_Y + 7} x2={trolleyX} y2={hookY} stroke="var(--house-glass-deep)" strokeWidth={1.2} />
              <path d={`M${trolleyX} ${hookY}L${LEFT + active.x + 3} ${TOP + lift}M${trolleyX} ${hookY}L${LEFT + active.x + active.width - 3} ${TOP + lift}`} fill="none" stroke="var(--house-glass-deep)" strokeWidth={1} />
              <circle cx={trolleyX} cy={hookY} r={2.2} fill="var(--house-accent)" />
            </g>
          )}
        </g>
      )}

      {LETTERS.map((letter, i) => {
        const u = seg(p, FIRST_LETTER + i * STEP, FIRST_LETTER + (i + 1) * STEP);
        if (u <= 0) return null;
        const fill = easeInOut(seg(u, 0.18, 0.88));
        const rise = 16 * (1 - easeOut(u));
        return (
          <g key={i} data-letter={letter.character} data-built={u >= 1}>
            <line x1={LEFT + letter.x + letter.width / 2} y1={TOP + HEIGHT + 1} x2={LEFT + letter.x + letter.width / 2} y2={RAIL_Y} stroke="var(--house-glass-deep)" strokeWidth={2} opacity={easeOut(u)} />
            <g transform={`translate(${LEFT + letter.x} ${TOP + rise})`}>
              {u < 1 && (
                <LetterShape
                  letter={letter}
                  fill="none"
                  stroke="var(--house-accent)"
                  strokeWidth={1.1}
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset={1 - easeOut(seg(u, 0, 0.55))}
                  opacity={1 - seg(u, 0.7, 1)}
                />
              )}
              {fill > 0 && (
                <g clipPath={`url(#${id}-letter-${i})`}>
                  <LetterShape letter={letter} transform="translate(3 3)" fill="var(--house-timber-mid)" stroke="var(--house-ink)" strokeWidth={0.9} />
                  <LetterShape letter={letter} fill={`url(#${id}-metal)`} stroke="var(--house-ink)" strokeWidth={1.1} strokeLinejoin="round" />
                </g>
              )}
            </g>
          </g>
        );
      })}
    </g>
  );
}