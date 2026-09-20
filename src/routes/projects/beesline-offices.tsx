import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import beeslineReception from "@/assets/beesline-reception.jpg.asset.json";
import beeslineOpenOffice from "@/assets/beesline-open-office.jpg.asset.json";
import beeslineBoardroom from "@/assets/beesline-boardroom.jpg.asset.json";
import beeslineGeneralPlan from "@/assets/beesline-general-plan.jpg.asset.json";
import beeslinePrivateOffice from "@/assets/beesline-private-office.jpg.asset.json";
import beeslineWorkspace from "@/assets/beesline-workspace.jpg.asset.json";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/projects/beesline-offices")({
  head: () => ({
    meta: [
      { title: "Beesline Offices — METARIZK" },
      {
        name: "description",
        content:
          "Interior design for Beesline's offices in Lebanon, combining warm natural materials, sculptural details and light-filled workspaces.",
      },
      { property: "og:title", content: "Beesline Offices — METARIZK" },
      {
        property: "og:description",
        content:
          "A warm, contemporary workplace designed in Lebanon for the homegrown skincare and cosmetics brand Beesline.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BeeslineOffices,
});

const gallery = [
  {
    image: beeslineReception.url,
    alt: "Beesline office reception with sculptural timber seating and a luminous display wall",
    caption: "Arrival space — a flowing timber installation gives the reception a warm, memorable identity.",
  },
  {
    image: beeslineOpenOffice.url,
    alt: "Light-filled Beesline open office with marble desks, timber joinery and lounge seating",
    caption: "Open office — generous daylight, natural finishes and informal seating create a calm working environment.",
  },
  {
    image: beeslineBoardroom.url,
    alt: "Beesline boardroom with a dark conference table and illuminated ceiling grid",
    caption: "Boardroom — a precise ceiling grid and contrasting dark table give the meeting space a focused character.",
  },
  {
    image: beeslinePrivateOffice.url,
    alt: "Beesline private office with a carved timber bench and botanical wall artwork",
    caption: "Private office — sculptural joinery and nature-inspired artwork bring softness to an executive setting.",
  },
  {
    image: beeslineWorkspace.url,
    alt: "Contemporary Beesline workspace with stone surfaces, illuminated shelving and collaborative seating",
    caption: "Collaborative workspace — layered lighting and open shelving balance practical work areas with a residential sense of comfort.",
  },
];

const facts = [
  { label: "Location", value: "Lebanon" },
  { label: "Client", value: "Beesline" },
  { label: "Sector", value: "Office interior" },
  { label: "Brand", value: "Natural skincare & cosmetics" },
];

function BeeslineOffices() {
  const [hero, ...rest] = gallery;
  if (!hero) return null;

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
          Beesline Offices
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
          New offices in Lebanon for Beesline, a highly successful homegrown natural skincare and
          cosmetics brand founded on the principles of apitherapy. The interior translates that
          identity into a refined workplace shaped by warmth, craft and natural references.
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
          <img src={hero.image} alt={hero.alt} fetchPriority="high" className="h-auto w-full rounded-[18px] object-contain" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{hero.caption}</p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div>
            <p className="section-index">01 — Material character</p>
            <h2 className="mt-3 font-serif text-3xl font-light">Warmth shaped into the workplace</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Walnut-toned timber, pale stone and softly illuminated surfaces create a polished but
              welcoming atmosphere. Curved joinery and botanical motifs subtly connect the interior
              to Beesline&apos;s nature-led identity.
            </p>
          </div>
          <div>
            <p className="section-index">02 — Ways of working</p>
            <h2 className="mt-3 font-serif text-3xl font-light">Focused rooms, open connections</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Private offices, collaborative tables, meeting rooms and lounge areas are visually
              connected through glass and a consistent material language. Daylight and layered
              lighting keep the spaces bright, composed and comfortable throughout the day.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 lg:py-24">
          <div className="lg:sticky lg:top-8">
            <p className="section-index">03 — Plan &amp; distribution</p>
            <h2 className="mt-3 max-w-md font-serif text-3xl font-light sm:text-4xl">
              The complete workplace, seen as one composition
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              The general plan reveals how reception, private offices, meeting rooms, shared
              workspaces and support areas are arranged around a connected central sequence. It
              also shows the furniture layout, circulation and planted moments that shape the
              experience beyond the individual renders.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6">
              <div>
                <dt className="stat-label mt-0">Drawing</dt>
                <dd className="mt-2 text-sm text-foreground/90">General floor plan</dd>
              </div>
              <div>
                <dt className="stat-label mt-0">Focus</dt>
                <dd className="mt-2 text-sm text-foreground/90">Rooms &amp; furniture</dd>
              </div>
            </dl>
          </div>

          <figure>
            <div className="glass overflow-hidden rounded-[26px] p-2.5 sm:p-3">
              <img
                src={beeslineGeneralPlan.url}
                alt="General floor plan of the Beesline offices showing room distribution, furniture and circulation"
                loading="lazy"
                className="h-auto w-full rounded-[18px] object-contain"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-muted-foreground">
              Ground-floor organization — the complete office program and its relationship to the
              central collaborative spaces.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24 pt-16 lg:pt-24">
        <p className="section-index mb-8">Gallery</p>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-8">
          {rest.map((item) => (
            <figure key={item.image} className="group">
              <div className="glass overflow-hidden rounded-[26px] p-2.5">
                <img src={item.image} alt={item.alt} loading="lazy" className="h-auto w-full rounded-[18px] object-contain transition-transform duration-700 group-hover:scale-[1.01]" />
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
            <p className="mt-2 text-sm text-muted-foreground">Open to architecture and visualization roles, collaborations and commissions.</p>
          </div>
          <a href="https://www.metarizk.net/contact/" className="button-dark" rel="noreferrer">
            Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}