import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import senegalStreet from "@/assets/senegal-tower-street.jpg.asset.json";
import senegalCorner from "@/assets/senegal-tower-corner.jpg.asset.json";
import senegalFacade from "@/assets/senegal-tower-facade.jpg.asset.json";
import senegalAerial from "@/assets/senegal-tower-aerial.jpg.asset.json";

export const Route = createFileRoute("/projects/senegal-tower")({
  head: () => ({
    meta: [
      { title: "Senegal Tower — Ghazaly" },
      {
        name: "description",
        content:
          "Senegal Tower by Rizk Ghazaly with Jean Deeb — a 2020 proposal combining adaptive reuse with climate-conscious new construction in Senegal.",
      },
      { property: "og:title", content: "Senegal Tower — Ghazaly" },
      {
        property: "og:description",
        content:
          "A planted urban tower that brings adaptive reuse and climate-responsive new construction together in Senegal.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SenegalTower,
});

const gallery = [
  {
    image: senegalStreet.url,
    alt: "Senegal Tower rising above a tree-lined urban street at dusk",
    caption: "Urban approach — the new tower forms a contemporary landmark within the existing street fabric.",
  },
  {
    image: senegalCorner.url,
    alt: "Low-angle corner view of Senegal Tower with planted balconies and vertical screens",
    caption: "Corner perspective — deep balconies, planted edges and vertical screens animate the elevations.",
  },
  {
    image: senegalFacade.url,
    alt: "Detailed view of Senegal Tower's lower facade, planted terraces and street frontage",
    caption: "Street interface — layered planting softens the transition between the active ground floor and residences above.",
  },
  {
    image: senegalAerial.url,
    alt: "Aerial view of Senegal Tower showing its stepped roof and planted perimeter balconies",
    caption: "Aerial study — the stepped crown and continuous terraces define the tower's compact profile.",
  },
];

const facts = [
  { label: "Location", value: "Senegal" },
  { label: "Partner", value: "Jean Deeb" },
  { label: "Sector", value: "Construction" },
  { label: "Year", value: "2020" },
];

function SenegalTower() {
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
          Senegal Tower
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
          Developed in collaboration with UK-based engineer Jean Deeb, this proposal brings the
          adaptive reuse of historic buildings together with environmentally conscious new
          construction designed in response to Senegal&apos;s climate.
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
            className="h-auto w-full rounded-[18px] object-contain"
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{hero.caption}</p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div>
            <p className="section-index">01 — Climate response</p>
            <h2 className="mt-3 font-serif text-3xl font-light">Layers of shade, air and planting</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Deep balcony lines, vertical screens and planted terraces give the facade depth while
              creating a sheltered edge between the apartments and the street. The layered envelope
              is conceived to temper strong sun and support comfortable outdoor living.
            </p>
          </div>
          <div>
            <p className="section-index">02 — Urban continuity</p>
            <h2 className="mt-3 font-serif text-3xl font-light">New construction within an existing city</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              The proposal treats old and new as parts of one urban story. Historic buildings retain
              their presence at street level while the tower introduces a contemporary residential
              form, active frontage and a greener vertical profile.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24">
        <p className="section-index mb-8">Gallery</p>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-8">
          {rest.map((item) => (
            <figure key={item.image} className="group">
              <div className="glass overflow-hidden rounded-[26px] p-2.5">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-auto w-full rounded-[18px] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
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