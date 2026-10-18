// All scene coordinates live in a 1000 x 780 viewBox.
export const G = 610; // ground line
export const PIT_X0 = 275;
export const PIT_X1 = 825;
export const PIT_DEPTH = 58;
export const PIT_SLOPE = 0.22;

export const SLAB_H = 12;

export type FloorDef = {
  i: number;
  yb: number; // wall bottom (top of the slab below)
  yt: number; // wall top (bottom of the slab above)
  x0: number;
  x1: number;
  cols: number[];
  paint: string;
};

export const floors: [FloorDef, FloorDef, FloorDef] = [
  { i: 0, yb: 598, yt: 498, x0: 300, x1: 800, cols: [300, 542, 784], paint: "#f4efe5" },
  { i: 1, yb: 486, yt: 386, x0: 300, x1: 860, cols: [300, 580, 844], paint: "#2d3b4f" },
  { i: 2, yb: 374, yt: 274, x0: 360, x1: 800, cols: [360, 580, 784], paint: "#f4efe5" },
];

export type SlabDef = { id: string; y: number; x0: number; x1: number };
// slab k+1 sits on top of floor k
export const slabs: SlabDef[] = [
  { id: "s1", y: 486, x0: 286, x1: 874 },
  { id: "s2", y: 374, x0: 286, x1: 874 },
  { id: "roof", y: 262, x0: 346, x1: 814 },
];
export const plinth: SlabDef = { id: "s0", y: 598, x0: 286, x1: 814 };

export type RoomType = "living" | "kitchen" | "bed" | "lounge" | "library" | "office";

export type WinDef = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  room: RoomType;
  mull: number[]; // fractions of width where mullions sit
};

export const windows: WinDef[] = [
  { id: "w-living", x: 330, y: 512, w: 190, h: 78, room: "living", mull: [0.5] },
  { id: "w-kitchen", x: 704, y: 528, w: 70, h: 52, room: "kitchen", mull: [] },
  { id: "w-bed", x: 330, y: 402, w: 230, h: 66, room: "bed", mull: [0.333, 0.666] },
  { id: "w-lounge", x: 700, y: 400, w: 140, h: 72, room: "lounge", mull: [] },
  { id: "w-library", x: 380, y: 292, w: 140, h: 74, room: "library", mull: [0.5] },
  { id: "w-office", x: 590, y: 296, w: 170, h: 66, room: "office", mull: [0.5] },
];

export const door = { x: 592, y: 520, w: 46, h: 78 };
export const woodPanel = { x: 560, y: 498, w: 110, h: 100 };

// crane
export const CRANE_X = 935;
export const CRANE_TOP = 112;
export const JIB_Y = 126;
export const PICK_X = 895;
