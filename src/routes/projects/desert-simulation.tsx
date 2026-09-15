import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import dsNeww from "@/assets/ds-1_NEWW-2.jpg.asset.json";
import ds1a from "@/assets/ds-1a-2.jpg.asset.json";
import ds2 from "@/assets/ds-2-2.jpg.asset.json";
import ds11 from "@/assets/ds-11-2.jpg.asset.json";
import ds22 from "@/assets/ds-22-2.jpg.asset.json";
import ds34 from "@/assets/ds-34-2.jpg.asset.json";
import ds55 from "@/assets/ds-55.jpg.asset.json";

export const Route = createFileRoute("/projects/desert-simulation")({
  head: () => ({
    meta: [
      { title: "Desert Simulation — METARIZK" },
      {
        name: "description",
        content:
          "Parametric desert simulations by Rizk Ghazaly — Master Degree in Biodigital Architecture, UIC Barcelona, 2021.",
      },
      { property: "og:title", content: "Desert Simulation — METARIZK" },
      {
        property: "og:description",
        content:
          "Parametric studies of desert architecture: rotating petal facades, sand interlocking blocks and crop-circle formations. UIC Barcelona, 2021.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesertSimulation,
});

const gallery = [
  {
    image: dsNeww.url,
    alt: "Tower wrapped in thousands of rotating bronze and silver petals on a city corner",
    caption: "Petal facade tower — the rotating skin shades the glass core through the day.",
  },
  {
    image: ds1a.url,
    alt: "White doubly curved tensile canopy shading a desert plaza with palms and red rock cliffs",
    caption: "Tensile shade canopy — a doubly curved shell lifted on four points over a desert plaza.",
  },
  {
    image: ds2.url,
    alt: "Aerial view of the white curved canopy over a paved desert plaza",
    caption: "Canopy aerial study — the shell casts a deep shadow field across the podium.",
  },
  {
    image: ds11.url,
    alt: "Stacked glass and concrete cube structure standing in a desert valley",
    caption: "Cube matrix — a stacked lattice of glazed modules that grows in any direction.",
  },
  {
    image: ds22.url,
    alt: "Alternative arrangement of the stacked glass cube structure with cantilevered volumes",
    caption: "Second cluster — testing how far the cantilevered volumes can reach.",
  },
  {
    image: ds34.url,
    alt: "Aerial masterplan of hexagonal green plates over red desert sand",
    caption: "Crop-circle formations — hexagonal green plates turning dune terrain into a liveable grid.",
  },
  {
    image: ds55.url,
    alt: "Parametric desert simulation study",
    caption: "Desert simulation — parametric study of form against sand terrain.",
  },
];

const facts = [
  { label: "Location", value: "Universidade Internacional de Cataluña (UIC), Barcelona, Spain" },
  { label: "Purpose", value: "Master Degree in Biodigital Architecture" },
  { label: "Sector", value: "Parametric Architecture" },
  { label: "Year", value: "2021" },
];

function DesertSimulation() {
  return (
    <main className="site-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="relative z-20 mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 sm:pt-7">
        <div className="glass flex min-h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2" aria-label="METARIZK home">
            <span className="font-serif text-xl font-medium">METARIZK</span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:inline">
              Architecture
            </span>
          </Link>
          <Link to="/" hash="work" className="text-link">
            <ArrowLeft size={14} className="mr-1 inline" aria-hidden="true" /> All projects
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-10 pt-14 sm:pt-20">
        <p className="eyebrow">Selected project</p>
        <h1 className="mt-6 font-serif text-[clamp(2.75rem,5.5vw,4.25rem)] font-light leading-[0.98]">
          Desert Simulation
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
          Simulations made using parametric tools to study their effect on desert architecture —
          from a rotating petal facade to sand interlocking modular blocks.
        </p>

        <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="stat-label mt-0">{fact.label}</dt>
              <dd className="mt-2 text-sm leading-6 text-foreground/90">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-10">
        <div className="glass relative overflow-hidden rounded-[26px] p-2.5">
          <img
            src={gallery[0].image}
            alt={gallery[0].alt}
            fetchPriority="high"
            className="aspect-[16/9] w-full rounded-[18px] object-cover"
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{gallery[0].caption}</p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div>
            <p className="section-index">01 — Parametric facade</p>
            <h2 className="mt-3 font-serif text-3xl font-light">A facade designed using computational simulation</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              The facade is designed using computational simulation design tools to create a free-form skin of
              thousands of rotating petals. The simulation studies how each petal reacts to sun and wind, so the
              building shades itself through the day — an example of how far these tools can take the design and
              manufacturing process of portable structures.
            </p>
          </div>
          <div>
            <p className="section-index">02 — Crop circles in the desert</p>
            <h2 className="mt-3 font-serif text-3xl font-light">Sand interlocking modular blocks</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              A 1 m cube simulation, made of sand interlocking modular blocks, was used to generate proposals and
              test their contrast with the desert. The same logic scales from a single cube to hexagonal
              crop-circle formations laid over the dune terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24">
        <p className="section-index mb-8">Gallery</p>
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          {gallery.slice(1).map((item) => (
            <figure key={item.image} className="group">
              <div className="glass rounded-[26px] p-2.5">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-[18px] object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>
              <figcaption className="mt-4 text-sm leading-6 text-muted-foreground">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-border bg-surface/50">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-light">Let’s create something memorable.</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Open to architecture and visualization roles, collaborations and commissions.
            </p>
          </div>
          <a href="https://www.metarizk.net/contact/" className="button-dark" rel="noreferrer">
            Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
