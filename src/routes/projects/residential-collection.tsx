import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import faytroonAerial from "@/assets/faytroon-residential-aerial.jpg.asset.json";
import faytroonAerialNight from "@/assets/faytroon-residential-aerial-night.jpg.asset.json";
import faytroonPool from "@/assets/faytroon-residential-pool.jpg.asset.json";
import faytroonPlan from "@/assets/faytroon-residential-plan.jpg.asset.json";
import zebdelGarden from "@/assets/zebdel-al-mays-garden.jpg.asset.json";
import zebdelSunset from "@/assets/zebdel-al-mays-sunset.jpg.asset.json";
import zebdelPlan from "@/assets/zebdel-al-mays-plan.jpg.asset.json";
import studioFront from "@/assets/studio-residence-front.jpg.asset.json";
import studioDay from "@/assets/studio-residence-day.jpg.asset.json";
import studioCorner from "@/assets/studio-residence-corner.jpg.asset.json";
import studioStreet from "@/assets/studio-residence-street.jpg.asset.json";
import studioStreetNight from "@/assets/studio-residence-street-night.jpg.asset.json";
import studioGardenBlock from "@/assets/studio-residence-garden-block.jpg.asset.json";
import studioPlan from "@/assets/studio-residence-plan.jpg.asset.json";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/projects/residential-collection")({
  head: () => ({
    meta: [
      { title: "Residential Collection — Ghazaly" },
      {
        name: "description",
        content:
          "Three residential architecture studies by Ghazaly: Faytroon Residential Project 1, Zebdel Al Mays Villa and a studio apartment residence in Dubai.",
      },
      { property: "og:title", content: "Residential Collection — Ghazaly" },
      {
        property: "og:description",
        content:
          "Villa and residential designs in Lebanon and Dubai, presented through plans and exterior visualizations.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResidentialCollection,
});

type ResidentialProject = {
  number: string;
  title: string;
  location: string;
  description: string;
  facts: Array<{ label: string; value: string }>;
  plan: LightboxItem;
  renders: Array<
    LightboxItem & {
      day?: { src: string; alt: string };
      night?: { src: string; alt: string };
      toggleNight?: { src: string; alt: string };
    }
  >;
};

const projects: ResidentialProject[] = [
  {
    number: "01",
    title: "Faytroon Residential Project ",
    location: "Lebanon",
    description:
      "A contemporary family residence composed as a series of warm stone and timber volumes. Sheltered terraces, roof decks and the pool court extend daily life into the landscape while preserving privacy around the home.",
    facts: [
      { label: "Location", value: "Lebanon" },
      { label: "Footprint", value: "350 m²" },
      { label: "Total site boundary", value: "1,900 m²" },
      { label: "Drawing", value: "General plan" },
    ],
    plan: {
      src: faytroonPlan.url,
      alt: "General plan of Faytroon Residential Project 1 showing the villa, pool, terraces and landscaped site",
      caption: "General plan — the residence, outdoor terraces, pool and landscaped edges arranged across the site.",
    },
    renders: [
      {
        src: faytroonAerial.url,
        alt: "Aerial view of Faytroon Residential Project 1 with stone walls, timber terraces and pool",
        caption: "Aerial view — switch between day and dusk to see the terraces and pool glow after dark.",
        night: {
          src: faytroonAerialNight.url,
          alt: "Night aerial view of Faytroon Residential Project 1 with warm lighting, glowing pool and dusk landscape",
        },
      },
      {
        src: faytroonPool.url,
        alt: "Pool courtyard of Faytroon Residential Project 1 with stone and timber facades",
        caption: "Pool court — layered stone walls and timber cladding create a warm, sheltered outdoor room.",
      },
    ],
  },
  {
    number: "02",
    title: "Zebdel Al Mays Villa",
    location: "Lebanon",
    description:
      "A formal villa shaped by balanced proportions, pale stone and a sequence of arched verandas. Classical detailing and carved timber screens give the elevations depth while generous gardens soften the ceremonial composition.",
    facts: [
      { label: "Location", value: "Lebanon" },
      { label: "Footprint", value: "450 m²" },
      { label: "Total site boundary", value: "1,500 m²" },
      { label: "Drawing", value: "Ground-floor plan" },
    ],
    plan: {
      src: zebdelPlan.url,
      alt: "Ground-floor presentation plan of Zebdel Al Mays Villa showing reception rooms, bedrooms, gardens and arrival route",
      caption: "Ground-floor plan — formal reception rooms open toward the curved terrace, gardens and arrival court.",
    },
    renders: [
      {
        src: zebdelGarden.url,
        alt: "Garden view of Zebdel Al Mays Villa with pale stone facade, arched veranda and red tiled roof",
        caption: "Garden elevation — a deep arched veranda forms the villa’s central outdoor room.",
      },
      {
        src: zebdelSunset.url,
        alt: "Sunset front view of Zebdel Al Mays Villa with arches, balconies and carved timber screens",
        caption: "Back elevation — symmetrical balconies, broad arches and timber screens establish a formal identity.",
      },
    ],
  },
  {
    number: "03",
    title: "Studio Apartment Residence & Facilities",
    location: "Dubai",
    description:
      "A rental residence organized around efficient studio apartments and shared amenities. Repeated facade bays give every home a clear address, while planted terraces, shaded balconies and central leisure spaces bring softness to the compact urban block.",
    facts: [
      { label: "Location", value: "Dubai" },
      { label: "Footprint", value: "3,000 m²" },
      { label: "Use", value: "Rental residences" },
      { label: "Drawing", value: "Typical residential plan" },
    ],
    plan: {
      src: studioPlan.url,
      alt: "Typical plan of the Studio Apartment Residence and Facilities showing apartments around two landscaped courtyards and a pool",
      caption: "Typical residential plan — apartments surround planted courts, circulation cores and a shared pool terrace.",
    },
    renders: [
      {
        src: studioFront.url,
        alt: "Front elevation of the Studio Apartment Residence and Facilities with planted balconies",
        caption: "Main elevation — a regular structural rhythm is softened by deep balconies and cascading planting.",
      },
      {
        src: studioCorner.url,
        alt: "Sunset corner view of the Studio Apartment Residence and Facilities in Dubai",
        caption: "Corner view — switch between the sunset and daytime settings of the same facade.",
        day: {
          src: studioDay.url,
          alt: "Daytime corner view of the Studio Apartment Residence and Facilities in Dubai",
        },
      },
      {
        src: studioStreet.url,
        alt: "Sunlit street elevation of the Studio Apartment Residence and Facilities with repeating balconies and a rooftop pergola",
        caption: "Street elevation — switch between day and night to see warm balcony lighting bring the facade to life.",
        toggleNight: {
          src: studioStreetNight.url,
          alt: "Night street elevation of the Studio Apartment Residence with illuminated balconies and rooftop pergola",
        },
      },
      {
        src: studioGardenBlock.url,
        alt: "Garden-side view of the Studio Apartment Residence with cream facade panels and glass balustrades above a planted street",
        caption: "Garden elevation — calm cream panels and glass balustrades step the block down toward a planted, informal street edge.",
      },
    ],
  },
];

const lightboxItems: LightboxItem[] = projects.flatMap((project) => [project.plan, ...project.renders]);

function DayNightToggle({
  day,
  night,
  onOpen,
}: {
  day: LightboxItem;
  night: { src: string; alt: string };
  onOpen: () => void;
}) {
  const [isNight, setIsNight] = useState(false);
  return (
    <div className="relative w-full overflow-hidden rounded-[18px]">
      <button type="button" onClick={onOpen} className="block w-full cursor-zoom-in" aria-label="Open enlarged view">
        <img src={day.src} alt={day.alt} loading="lazy" className="h-auto w-full rounded-[18px] object-contain" />
        <img
          src={night.src}
          alt={night.alt}
          loading="lazy"
          aria-hidden={!isNight}
          className="pointer-events-none absolute inset-0 h-full w-full rounded-[18px] object-cover transition-opacity duration-700 ease-out"
          style={{ opacity: isNight ? 1 : 0 }}
        />
      </button>
      <div
        role="group"
        aria-label="Switch between day and night view"
        className="absolute right-3 top-3 flex rounded-full border border-border bg-background/60 p-1 backdrop-blur-md"
      >
        {(["Day", "Night"] as const).map((label) => {
          const active = (label === "Night") === isNight;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={active}
              onClick={() => setIsNight(label === "Night")}
              className={`rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.18em] transition-colors ${
                active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResidentialCollection() {
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

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-14 pt-14 sm:pb-20 sm:pt-20">
        <p className="eyebrow">External design · Residential</p>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-light leading-[0.98]">
          Residential Collection
        </h1>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          Three residential studies developed at different scales—from private villas embedded in landscaped grounds to a multi-unit rental residence. Each project is presented through its overall plan and exterior views.
        </p>
        <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
          <div><dt className="stat-label mt-0">Projects</dt><dd className="mt-2 text-sm text-foreground/90">Three residences</dd></div>
          <div><dt className="stat-label mt-0">Locations</dt><dd className="mt-2 text-sm text-foreground/90">Lebanon · Dubai</dd></div>
          <div><dt className="stat-label mt-0">Presentation</dt><dd className="mt-2 text-sm text-foreground/90">Plans &amp; exterior renders</dd></div>
        </dl>
      </section>

      {projects.map((project, projectIndex) => {
        const lightboxOffset = projects
          .slice(0, projectIndex)
          .reduce((sum, item) => sum + 1 + item.renders.length, 0);
        return (
          <section key={project.title} className="relative z-10 border-t border-border">
            <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
                <div>
                  <p className="section-index">{project.number} — {project.location}</p>
                  <h2 className="mt-3 max-w-lg font-serif text-3xl font-light sm:text-4xl">{project.title}</h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">{project.description}</p>
                  <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
                    {project.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="stat-label mt-0">{fact.label}</dt>
                        <dd className="mt-2 text-sm text-foreground/90">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <figure>
                  <div className="glass overflow-hidden rounded-[26px] p-2.5 sm:p-3">
                    <img
                      src={project.plan.src}
                      alt={project.plan.alt}
                      loading={projectIndex === 0 ? "eager" : "lazy"}
                      onClick={() => setLightboxIndex(lightboxOffset)}
                      className="h-auto w-full cursor-zoom-in rounded-[18px] object-contain"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm leading-6 text-muted-foreground">{project.plan.caption}</figcaption>
                </figure>
              </div>

              <div className="mt-10 grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:mt-14">
                {project.renders.map((render, renderIndex) => (
                  <figure key={render.src} className="group glass rounded-[26px] p-2.5">
                    <div className="overflow-hidden rounded-[18px]">
                      {render.toggleNight ? (
                        <DayNightToggle day={render} night={render.toggleNight} onOpen={() => setLightboxIndex(lightboxOffset + renderIndex + 1)} />
                      ) : render.day ? (
                        <DayNightToggle day={render.day} night={render} onOpen={() => setLightboxIndex(lightboxOffset + renderIndex + 1)} />
                      ) : render.night ? (
                        <DayNightToggle day={render} night={render.night} onOpen={() => setLightboxIndex(lightboxOffset + renderIndex + 1)} />
                      ) : (
                        <img
                          src={render.src}
                          alt={render.alt}
                          loading="lazy"
                          onClick={() => setLightboxIndex(lightboxOffset + renderIndex + 1)}
                          className="h-auto w-full cursor-zoom-in rounded-[18px] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                        />
                      )}
                    </div>
                    <figcaption className="px-3 pb-3 pt-4 text-sm leading-6 text-muted-foreground">{render.caption}</figcaption>
                  </figure>
                ))}
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