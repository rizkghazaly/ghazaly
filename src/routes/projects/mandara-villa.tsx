import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import mandaraReceptionDining from "@/assets/mandara-reception-dining.jpg.asset.json";
import mandaraMajlis from "@/assets/mandara-majlis.jpg.asset.json";
import mandaraFormalSalon from "@/assets/mandara-formal-salon.jpg.asset.json";
import mandaraStairHall from "@/assets/mandara-stair-hall.jpg.asset.json";
import mandaraCourtyardArch from "@/assets/mandara-courtyard-arch.jpg.asset.json";
import mandaraStoneLounge from "@/assets/mandara-stone-lounge.jpg.asset.json";
import mandaraGroundFloorPlan from "@/assets/mandara-ground-floor-plan.jpg.asset.json";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/projects/mandara-villa")({
  head: () => ({
    meta: [
      { title: "Mandara Villa — Ghazaly" },
      {
        name: "description",
        content:
          "Interior design for Mandara Villa in Lebanon, rooted in Damascene and Ottoman-Lebanese residential traditions.",
      },
      { property: "og:title", content: "Mandara Villa — Ghazaly" },
      {
        property: "og:description",
        content:
          "A Neo-Levantine Islamic Revival villa interior shaped by crafted timber, limestone, geometric screens and formal reception spaces.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MandaraVilla,
});

const gallery = [
  {
    image: mandaraReceptionDining.url,
    alt: "Mandara Villa formal reception and dining room with carved timber ceilings and crystal chandeliers",
    caption:
      "Formal reception and dining — coffered timber, gilded details and crafted furniture establish the ceremonial heart of the villa.",
  },
  {
    image: mandaraMajlis.url,
    alt: "Mandara Villa majlis with geometric ceiling panels, low seating and tall draped windows",
    caption:
      "Mandara salon — low-profile seating and framed daylight create an intimate setting for receiving guests.",
  },
  {
    image: mandaraFormalSalon.url,
    alt: "Mandara Villa salon and dining room with inlaid chairs, chandeliers and carved ceiling",
    caption:
      "Connected salon — the reception and dining areas share a continuous language of timber, stone and ornament.",
  },
  {
    image: mandaraStairHall.url,
    alt: "Mandara Villa stair hall with patterned risers, carved wood panels and red drapery",
    caption:
      "Stair hall — patterned risers, carved panels and concealed lighting turn circulation into a crafted architectural sequence.",
  },
  {
    image: mandaraCourtyardArch.url,
    alt: "Multifoil arch with geometric mashrabiya framing a courtyard fountain at Mandara Villa",
    caption:
      "Courtyard threshold — a layered multifoil arch and mashrabiya screen frame the fountain beyond.",
  },
  {
    image: mandaraStoneLounge.url,
    alt: "Mandara Villa stone-vaulted lounge with fireplace and night terrace views",
    caption:
      "Stone lounge — a quieter evening room pairs a vaulted stone shell with warm firelight and views to the terrace.",
  },
];

const facts = [
  { label: "Location", value: "Lebanon" },
  { label: "Project", value: "Mandara Villa" },
  { label: "Sector", value: "Residential interior" },
  { label: "Style", value: "Neo-Levantine Islamic Revival" },
];

function MandaraVilla() {
  const [hero, ...rest] = gallery;
  if (!hero) return null;

  return (
    <main className="site-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="relative z-20 mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 sm:pt-7">
        <div className="glass flex min-h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2" aria-label="Ghazaly home">
            <span className="font-serif text-xl font-medium">Ghazaly</span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:inline">
              Architecture
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/" hash="work" className="text-link">
              <ArrowLeft size={14} className="mr-1 inline" aria-hidden="true" /> All projects
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-10 pt-14 sm:pt-20">
        <p className="eyebrow">Interior design</p>
        <h1 className="mt-6 font-serif text-[clamp(2.75rem,5.5vw,4.25rem)] font-light leading-[0.98]">
          Mandara Villa
        </h1>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          A villa interior in Lebanon conceived around the Mandara, the formal reception suite
          traditionally reserved for welcoming guests. The design draws from Damascene and
          Ottoman-Lebanese residential architecture, bringing historic craft into a richly layered
          contemporary home.
        </p>

        <dl className="mt-10 grid max-w-4xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
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
            src={hero.image}
            alt={hero.alt}
            fetchPriority="high"
            className="h-auto w-full rounded-[18px] object-contain"
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{hero.caption}</p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div>
            <p className="section-index">01 — Crafted enclosure</p>
            <h2 className="mt-3 font-serif text-3xl font-light">Ornament shaped by tradition</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Coffered ajami timber ceilings are enriched with gilded inlays and eight-pointed star
              medallions. Warm ashlar limestone, ornamental wooden wainscoting and Kufic-inspired
              friezes give each room depth, rhythm and a distinct sense of place.
            </p>
          </div>
          <div>
            <p className="section-index">02 — Light &amp; ceremony</p>
            <h2 className="mt-3 font-serif text-3xl font-light">A sequence made for hospitality</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Mashrabiya screens and multifoil arches filter light while framing movement between
              rooms. Crystal chandeliers, mother-of-pearl inlay chairs, banquette seating and
              polished marble floors complete the formal yet welcoming atmosphere.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 lg:py-24">
          <div className="lg:sticky lg:top-8">
            <p className="section-index">03 — Plan &amp; distribution</p>
            <h2 className="mt-3 max-w-md font-serif text-3xl font-light sm:text-4xl">
              House, garden and arrival as one composition
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              The ground-floor plan shows the formal reception rooms, private spaces and service
              areas within the wider villa grounds. Terraces, planting, the pool and curved arrival
              route extend the interior sequence into the landscape.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6">
              <div>
                <dt className="stat-label mt-0">Drawing</dt>
                <dd className="mt-2 text-sm text-foreground/90">Ground-floor plan</dd>
              </div>
              <div>
                <dt className="stat-label mt-0">Focus</dt>
                <dd className="mt-2 text-sm text-foreground/90">Rooms &amp; landscape</dd>
              </div>
            </dl>
          </div>

          <figure>
            <div className="glass overflow-hidden rounded-[26px] p-2.5 sm:p-3">
              <img
                src={mandaraGroundFloorPlan.url}
                alt="Ground-floor presentation plan of Mandara Villa showing rooms, furniture, pool, terraces and landscape"
                loading="lazy"
                className="h-auto w-full rounded-[18px] object-contain"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-muted-foreground">
              Ground-floor organization — the villa, formal approach and surrounding outdoor areas
              presented as a complete composition.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24 pt-16 lg:pt-24">
        <p className="section-index mb-8">Gallery</p>
        <div className="columns-1 gap-8 md:columns-2">
          {rest.map((item) => (
            <figure key={item.image} className="group mb-8 break-inside-avoid">
              <div className="glass overflow-hidden rounded-[26px] p-2.5">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-auto w-full rounded-[18px] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
              <figcaption className="mt-4 text-sm leading-6 text-muted-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-border bg-surface/50">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-light">Let&apos;s create something memorable.</h2>
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