export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/** progress of `p` inside the window [a, b], clamped to 0..1 */
export const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
export const easeIn = (t: number) => t * t * t;
export const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const easeBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export const mixColor = (c1: string, c2: string, t: number) =>
  `color-mix(in oklab, ${c1} ${(1 - clamp(t)) * 100}%, ${c2})`;

/** Split [a,b] into n sequential windows and return progress of window k */
export const stagger = (p: number, a: number, b: number, k: number, n: number) => {
  const w = (b - a) / n;
  return seg(p, a + k * w, a + (k + 1) * w);
};

/** deterministic pseudo random generator */
export const rng = (seed: number) => {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
};

/** piecewise keyframe interpolation: keys = [[u, value], ...] */
export const keyframes = (u: number, keys: [number, number][], ease = easeInOut) => {
  if (u <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (u <= keys[i][0]) {
      const [u0, v0] = keys[i - 1];
      const [u1, v1] = keys[i];
      const t = (u - u0) / (u1 - u0 || 1);
      return lerp(v0, v1, ease(t));
    }
  }
  return keys[keys.length - 1][1];
};
