import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import exteriorSteps from "@/assets/san-carlos-cottage-exterior-steps.jpg.asset.json";
import twinCabins from "@/assets/san-carlos-cottage-twin-cabins.jpg.asset.json";
import terrace from "@/assets/san-carlos-cottage-terrace.jpg.asset.json";
import studioInterior from "@/assets/san-carlos-cottage-studio-interior.jpg.asset.json";
import bedroomView from "@/assets/san-carlos-cottage-bedroom-view.jpg.asset.json";
import kitchenAlcove from "@/assets/san-carlos-cottage-kitchen-alcove.jpg.asset.json";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/projects/san-carlos-cottage")({
  head: () => ({
    meta: [
      { title: "San Carlos Cottage — Ghazaly" },
      {
        name: "description",
        content:
          "A hillside cottage retreat in San Carlos, Costa Rica — dark clad walls, deep timber roofs and stone terracing opening the rooms to the surrounding jungle.",
      },
      { property: "og:title", content: "San Carlos Cottage — Ghazaly" },
      {
        property: "og:description",
        content:
          "A compact jungle retreat built around wide sheltering roofs, stone terracing and rooms that open fully to the greenery.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SanCarlosCottage,
});

type Group = {
  number: string;
  title: string;
  introduction: string;
  items: LightboxItem[];
};

const groups: Group[] = [
  {
    number: "01",
    title: "On the hillside",
    introduction:
      "The cottage sits on a sloping site. Floating stone steps climb through the planting to the entrance while dark, slender cladding keeps the building quiet against the greenery.",
    items: [
      {
        src: exteriorSteps.url,
        alt: "Dark clad cottage with a wide timber roof reached by floating stone steps on a green hillside",
        caption:
          "Approach — a floating stone stair climbs the slope to the entrance while the wide timber roof shelters the dark clad volume below.",
      },
      {
        src: twinCabins.url,
        alt: "Two cabins with sheltering roofs stepping down a hillside with a connecting stair",
        caption:
          "Twin pavilions — the retreat steps down the site as separate cabins, each lifted on its own base and connected by the garden stair.",
      },
      {
        src: terrace.url,
        alt: "Shaded terrace with timber railing opening to sliding glazing and a flowering garden",
        caption:
          "Terrace — sliding glazing opens the studio completely to a shaded deck framed by the flowering garden.",
      },
    ],
  },
  {
    number: "02",
    title: "Inside",
    introduction:
      "Compact, calm rooms carry the outside in: a stone feature wall and exposed timber roof structure inside, with full-height glazing and clerestory bands framing the jungle beyond.",
    items: [
      {
        src: studioInterior.url,
        alt: "Studio interior with stone feature wall, exposed timber roof structure and window desk",
        caption:
          "Studio interior — a stone feature wall and the exposed roof structure give the compact room warmth and character.",
      },
      {
        src: bedroomView.url,
        alt: "Bedroom with full-height glazing, clerestory windows and a stone feature wall facing the jungle",
        caption:
          "Bedroom — full-height glazing and a band of clerestory windows bring the surrounding jungle directly into the room.",
      },
      {
        src: kitchenAlcove.url,
        alt: "Compact kitchen alcove with dark stone counter, white cabinets and exposed timber trusses",
        caption:
          "Kitchen alcove — an efficient kitchenette with a dark stone counter sits beside the sleeping space under the exposed trusses.",
      },
    ],
  },
];

const lightboxItems = groups.flatMap((group) => group.items);

function SanCarlosCottage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <main className="site-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="relative z-20 mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 sm:pt-7">
        <div className="glass flex min-h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2" aria-label="Ghazaly home">
            <span className="font-serif text-xl font-medium">Ghazaly</span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:inline">Architecture</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/" hash="work" className="text-link">
              <ArrowLeft size={14} className="mr-1 inline" aria-hidden="true" /> All projects
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-10 pt-14 sm:pb-14 sm:pt-20">
        <p className="eyebrow">Interior design · Cottage retreat</p>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-light leading-[0.98]">
          San Carlos Cottage
        </h1>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          A compact hillside cottage in San Carlos, Costa Rica, in the middle of the jungle. Dark clad walls and deep timber roofs keep the building sheltered and understated, while generous glazing, stone terracing and a floating garden stair tie every room to the greenery around it.
        </p>
        <dl className="mt-10 grid max-w-4xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
          <div><dt className="stat-label mt-0">Location</dt><dd className="mt-2 text-sm text-foreground/90">San Carlos, Costa Rica</dd></div>
          <div><dt className="stat-label mt-0">Type</dt><dd className="mt-2 text-sm text-foreground/90">Jungle cottage · Private retreat</dd></div>
          <div><dt className="stat-label mt-0">Scope</dt><dd className="mt-2 text-sm text-foreground/90">Architecture &amp; interior design</dd></div>
        </dl>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
        <div className="glass overflow-hidden rounded-[26px] p-2.5">
          <img
            src={exteriorSteps.url}
            alt="Dark clad cottage with a wide timber roof reached by floating stone steps on a green hillside"
            loading="lazy"
            onClick={() => setLightboxIndex(0)}
            className="aspect-[16/9] w-full cursor-zoom-in rounded-[18px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
          Shaded by its broad roof, the cottage stays protected from rain and sun while its rooms open directly onto the hillside garden.
        </p>
      </section>

      {groups.map((group) => {
        const groupOffset = lightboxItems.indexOf(group.items[0]);

        return (
          <section key={group.number} className="relative z-10 border-t border-border">
            <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
              <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-14">
                <div className="lg:sticky lg:top-8">
                  <p className="section-index">{group.number} — Selected studies</p>
                  <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">{group.title}</h2>
                  <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{group.introduction}</p>
                </div>
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                  {group.items.map((item, itemIndex) => (
                    <figure key={item.src} className="group glass rounded-[26px] p-2.5">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        onClick={() => setLightboxIndex(groupOffset + itemIndex)}
                        className="aspect-[4/3] w-full cursor-zoom-in rounded-[18px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <figcaption className="px-3 pb-3 pt-4 text-sm leading-6 text-muted-foreground">{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <Lightbox items={lightboxItems} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />

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
