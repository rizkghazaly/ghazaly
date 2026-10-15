export type Phase = {
  id: string;
  title: string;
  note: string;
  start: number;
  end: number;
};

export const PHASES: Phase[] = [
  { id: "land", title: "The empty land", note: "Every great house starts as a blank plot and a clear idea.", start: 0, end: 2.6 },
  { id: "survey", title: "Survey & layout", note: "Boundaries marked, levels set, the plan staked out on the ground.", start: 2.6, end: 5 },
  { id: "excavation", title: "Excavation", note: "Digging to the exact depth the foundation needs.", start: 5, end: 8 },
  { id: "rebar", title: "Steel reinforcement", note: "Rebar cages are tied to carry the loads for decades.", start: 8, end: 10.3 },
  { id: "concrete", title: "Concrete foundation", note: "Poured, levelled and cured: the base everything stands on.", start: 10.3, end: 12.5 },
  { id: "frame", title: "Structural frame", note: "Columns and slabs rise, floor by floor, to three storeys.", start: 12.5, end: 18.5 },
  { id: "blocks", title: "Block walls", note: "Masonry fills the frame and starts to shape every room.", start: 18.5, end: 22.5 },
  { id: "roof", title: "Roof & green terrace", note: "Parapet, waterproofing, planting and solar panels.", start: 22.5, end: 24.5 },
  { id: "plaster", title: "Plastering", note: "A smooth render over the blocks, ready for colour.", start: 24.5, end: 26.3 },
  { id: "paint", title: "Paint & finishes", note: "Colour, timber cladding and texture give the facade its character.", start: 26.3, end: 28.5 },
  { id: "openings", title: "Doors & windows", note: "Glazing, frames, railings and the front door seal the building.", start: 28.5, end: 30.5 },
  { id: "interior", title: "Interior & lighting", note: "Furniture, materials and warm light. This is where 3D interior design shines.", start: 30.5, end: 32.5 },
  { id: "landscape", title: "Landscape", note: "Trees, lawn, steps and garden lights complete the exterior.", start: 32.5, end: 35 },
  { id: "done", title: "Ready to live in", note: "Your vision, designed in 3D long before the first brick is laid.", start: 35, end: 38 },
];

export const DURATION = 38;

export const phaseAt = (t: number) => {
  for (let i = PHASES.length - 1; i >= 0; i--) {
    if (t >= PHASES[i].start) return i;
  }
  return 0;
};
