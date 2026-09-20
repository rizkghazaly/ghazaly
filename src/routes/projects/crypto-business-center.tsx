import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import cbc1 from "@/assets/cbc-1.jpg.asset.json";
import cbc2 from "@/assets/cbc-2.jpg.asset.json";
import cbc3 from "@/assets/cbc-3.jpg.asset.json";
import cbc4 from "@/assets/cbc-4.jpg.asset.json";
import cbc5 from "@/assets/cbc-5.jpg.asset.json";
import cbc6 from "@/assets/cbc-6.jpg.asset.json";
import cbc7 from "@/assets/cbc-7.jpg.asset.json";

export const Route = createFileRoute("/projects/crypto-business-center")({
  head: () => ({
    meta: [
      { title: "Crypto Business Center — Ghazaly" },
      {
        name: "description",
        content:
          "Crypto Business Center by Rizk Ghazaly — three parametric towers above an underwater aquarium, Master Degree in Biodigital Architecture, UIC Barcelona, 2021.",
      },
      { property: "og:title", content: "Crypto Business Center — Ghazaly" },
      {
        property: "og:description",
        content:
          "A proposal to improve Barcelona's visitor experience: three towers above sea level, an aquarium below. UIC Barcelona, 2021.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CryptoBusinessCenter,
});

const gallery = [
  {
    image: cbc1.url,
    alt: "Parametric tower wrapped in a white lattice shell, seen from the water at sunset",
    caption: "Arrival from the sea — the tower rises from a lattice shell above the marina.",
  },
  {
    image: cbc2.url,
    alt: "Close-up of the woven triangulated lattice shell with people walking beneath it",
    caption: "Lattice shell — a woven triangulated skin shading the public promenade.",
  },
  {
    image: cbc3.url,
    alt: "Three crystalline towers wrapped in white lattice structures framing a plaza",
    caption: "The three towers — crystalline cores emerging from the shared shell.",
  },
  {
    image: cbc4.url,
    alt: "Aerial masterplan of the island: three towers, central pond and connecting bridges",
    caption: "Island masterplan — three towers, bridges and a central water court.",
  },
  {
    image: cbc5.url,
    alt: "Tower wrapped in lattice shell glowing turquoise at sunset over a reflecting pool",
    caption: "Dusk study — the shell catches the last light over the reflecting pool.",
  },
  {
    image: cbc6.url,
    alt: "Interior view inside the woven timber-like lattice structure",
    caption: "Inside the shell — a cavernous public space under the woven structure.",
  },
  {
    image: cbc7.url,
    alt: "Aerial sunset view of the island with three towers, boats and hot air balloons",
    caption: "Sunset aerial — the island in Barcelona's harbour at golden hour.",
  },
];

const facts = [
  { label: "Location", value: "Universidade Internacional de Cataluña (UIC), Barcelona, Spain" },
  { label: "Purpose", value: "Master Degree in Biodigital Architecture" },
  { label: "Sector", value: "Parametric Architecture" },
  { label: "Year", value: "2021" },
];

function CryptoBusinessCenter() {
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
        <p className="eyebrow">Selected project</p>
        <h1 className="mt-6 font-serif text-[clamp(2.75rem,5.5vw,4.25rem)] font-light leading-[0.98]">
          Crypto Business Center
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
          A project created to improve Barcelona's visitors experience, by reducing traffic and
          highlighting the city's natural beauty.
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
            src={hero.image}
            alt={hero.alt}
            fetchPriority="high"
            className="aspect-[16/9] w-full rounded-[18px] object-cover"
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{hero.caption}</p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div>
            <p className="section-index">01 — Two levels of design</p>
            <h2 className="mt-3 font-serif text-3xl font-light">Three towers above the sea</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              The proposal divides the design into two levels. The upper level, above sea level,
              consists of three towers wrapped in a parametric lattice shell that shades the public
              spaces and gives the island its skyline.
            </p>
          </div>
          <div>
            <p className="section-index">02 — Below the surface</p>
            <h2 className="mt-3 font-serif text-3xl font-light">An aquarium under the towers</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              The lower level features an aquarium where visitors experience the marine life of
              Barcelona — connecting the architecture to the sea it rises from.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24">
        <p className="section-index mb-8">Gallery</p>
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          {rest.map((item) => (
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
