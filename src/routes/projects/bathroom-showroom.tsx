import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import showroomMain from "@/assets/showroom-main.jpg.asset.json";
import showroomHall from "@/assets/showroom-hall.jpg.asset.json";
import showroomJacuzzi from "@/assets/showroom-jacuzzi.jpg.asset.json";
import showroomPlan from "@/assets/showroom-plan.jpg.asset.json";
import bathroomSlateShower from "@/assets/bathroom-slate-shower.jpg.asset.json";
import bathroomWalnutVanity from "@/assets/bathroom-walnut-vanity.jpg.asset.json";
import bathroomMosaicSpa from "@/assets/bathroom-mosaic-spa.jpg.asset.json";
import bathroomDarkMarble from "@/assets/bathroom-dark-marble.jpg.asset.json";
import { ThemeToggle } from "@/components/theme-toggle";
import { Lightbox, type LightboxItem } from "@/components/lightbox";

export const Route = createFileRoute("/projects/bathroom-showroom")({
  head: () => ({
    meta: [
      { title: "Bathroom Showroom & Renovations — Ghazaly" },
      {
        name: "description",
        content:
          "Interior design of a retail showroom for sanitary ware, jacuzzis, tiles, porcelain, ceramic and marble, followed by a continuing bathroom renovation practice.",
      },
      { property: "og:title", content: "Bathroom Showroom & Renovations — Ghazaly" },
      {
        property: "og:description",
        content:
          "A retail showroom designed for bathroom equipment, jacuzzis and surfaces — and the private bathroom renovations that grew from it.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BathroomShowroom,
});

const showroomViews = [
  {
    image: showroomHall.url,
    alt: "Showroom hall with freestanding bathtubs, marble partitions and timber display podiums",
    caption:
      "Main display hall — podiums, marble partitions and warm timber let each piece be read as a complete bathroom setting.",
  },
  {
    image: showroomJacuzzi.url,
    alt: "Showroom jacuzzi display with timber cladding and a backlit waterfall image wall",
    caption:
      "Jacuzzi corner — a backlit scenic wall and timber enclosure turn the wellness products into an immersive display.",
  },
];

const bathrooms = [
  {
    image: bathroomSlateShower.url,
    alt: "Renovated bathroom with dark slate walls, walk-in shower and backlit mirror",
    caption: "Slate and brass — walk-in shower with concealed lighting.",
  },
  {
    image: bathroomWalnutVanity.url,
    alt: "Renovated bathroom with walnut vanity, illuminated mirror and grey stone tiles",
    caption: "Walnut vanity with a lit mirror and grey stone surfaces.",
  },
  {
    image: bathroomMosaicSpa.url,
    alt: "Spa-like bathroom with burgundy mosaic walls, sculpted stone shower and freestanding tub",
    caption: "Mosaic and sculpted stone for a spa-like guest bathroom.",
  },
  {
    image: bathroomDarkMarble.url,
    alt: "Dark bathroom with black marble counter, stone basin and golden concealed lighting",
    caption: "Black marble counter with warm concealed lighting.",
  },
];

const facts = [
  { label: "Type", value: "Retail showroom" },
  { label: "Products", value: "Sanitary ware & jacuzzis" },
  { label: "Surfaces", value: "Tiles, porcelain, ceramic, marble" },
  { label: "Continued as", value: "Bathroom renovations" },
];

function BathroomShowroom() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = [
    {
      src: showroomMain.url,
      alt: "Retail showroom interior with sanitary ware displays, tile stands and a consultation desk",
      caption:
        "Showroom interior — display walls, tile stands and a central consultation desk guide visitors through the range.",
    },
    {
      src: showroomPlan.url,
      alt: "General layout plan of the retail showroom with tiling area and sanitary area",
      caption: "General layout — the tiling area and sanitary area organised around a single entrance sequence.",
    },
    ...showroomViews.map((item) => ({ src: item.image, alt: item.alt, caption: item.caption })),
    ...bathrooms.map((item) => ({ src: item.image, alt: item.alt, caption: item.caption })),
  ];

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
          Bathroom Showroom &amp; Renovations
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
          A retail showroom designed to exhibit and sell bathroom equipment, jacuzzis, sanitary
          ware, tiles, porcelain, ceramic and marble. The collaboration continued beyond the
          showroom into a shared practice renovating private bathrooms.
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
            src={showroomMain.url}
            alt="Retail showroom interior with sanitary ware displays, tile stands and a consultation desk"
            fetchPriority="high"
            onClick={() => setLightboxIndex(0)}
            className="h-auto w-full cursor-zoom-in rounded-[18px] object-contain"
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Showroom interior — display walls, tile stands and a central consultation desk guide
          visitors through the range.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div>
            <p className="section-index">01 — Retail experience</p>
            <h2 className="mt-3 font-serif text-3xl font-light">Products shown as real rooms</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Instead of shelves, the showroom is built from full settings: raised timber podiums,
              stone partitions and lit niches that place basins, taps, tubs and tiles in the kind of
              space a client would actually build.
            </p>
          </div>
          <div>
            <p className="section-index">02 — Materials on display</p>
            <h2 className="mt-3 font-serif text-3xl font-light">Surfaces that sell themselves</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Tiling, porcelain, ceramic and marble samples are integrated into the architecture,
              with warm concealed lighting grazing each surface so texture and colour read clearly
              from across the floor.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 lg:py-24">
          <div className="lg:sticky lg:top-8">
            <p className="section-index">03 — Plan &amp; distribution</p>
            <h2 className="mt-3 max-w-md font-serif text-3xl font-light sm:text-4xl">
              Two worlds under one roof
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              The general layout separates the tiling area from the sanitary area while keeping a
              single entrance sequence between them. Display bays, mock-up bathrooms, sample stands
              and the consultation desk are positioned so visitors move naturally from surfaces to
              fixtures.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6">
              <div>
                <dt className="stat-label mt-0">Drawing</dt>
                <dd className="mt-2 text-sm text-foreground/90">General layout plan</dd>
              </div>
              <div>
                <dt className="stat-label mt-0">Zones</dt>
                <dd className="mt-2 text-sm text-foreground/90">Tiling &amp; sanitary</dd>
              </div>
            </dl>
          </div>

          <figure>
            <div className="glass overflow-hidden rounded-[26px] p-2.5 sm:p-3">
              <img
                src={showroomPlan.url}
                alt="General layout plan of the retail showroom with tiling area and sanitary area"
                loading="lazy"
                onClick={() => setLightboxIndex(1)}
                className="h-auto w-full cursor-zoom-in rounded-[18px] object-contain"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-muted-foreground">
              General layout — the tiling area and sanitary area organised around a single entrance
              sequence.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 pt-16 lg:pt-24">
        <p className="section-index mb-8">Showroom views</p>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          {showroomViews.map((item, itemIndex) => (
            <figure key={item.image} className="group glass rounded-[26px] p-2.5">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                onClick={() => setLightboxIndex(2 + itemIndex)}
                className="h-auto w-full cursor-zoom-in rounded-[18px] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <figcaption className="px-2 pb-1 pt-4 text-sm leading-6 text-muted-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24">
        <p className="section-index mb-3">04 — Bathroom renovations</p>
        <h2 className="font-serif text-3xl font-light">Private bathrooms, built from the same palette</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
          A brief selection of renovated bathrooms — stone, mosaic, timber and warm concealed
          lighting. Click any image to see it full size.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {bathrooms.map((item, itemIndex) => (
            <figure key={item.image} className="group glass rounded-[20px] p-2">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                onClick={() => setLightboxIndex(2 + showroomViews.length + itemIndex)}
                className="aspect-[3/4] w-full cursor-zoom-in rounded-[14px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <figcaption className="px-1.5 pb-1 pt-3 text-xs leading-5 text-muted-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Lightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

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
