import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

import petalTower from "@/assets/petal-tower.jpg.asset.json";
import cbcHero from "@/assets/cbc-3.jpg.asset.json";
import senegalTower from "@/assets/senegal-tower-street.jpg.asset.json";
import beeslineOffices from "@/assets/beesline-reception.jpg.asset.json";
import beeslineOfficesMotion from "@/assets/beesline-reception-motion.webm.asset.json";
import mandaraVilla from "@/assets/mandara-reception-dining.jpg.asset.json";
import mandaraVillaMotion from "@/assets/mandara-reception-dining-motion.webm.asset.json";
import beeslineWorkspace from "@/assets/beesline-workspace.jpg.asset.json";
import residentialCollection from "@/assets/faytroon-residential-aerial.jpg.asset.json";
import bathroomShowroom from "@/assets/showroom-main.jpg.asset.json";
import showroomMainMotion from "@/assets/showroom-main-motion.webm.asset.json";
import joffreysCoffee from "@/assets/joffreys-town-center-completed-two.jpg.asset.json";
import joffreysTownCenter from "@/assets/joffreys-town-center-completed-one.jpg.asset.json";
import residentialInteriors from "@/assets/residential-interiors-living-dining.jpg.asset.json";
import residentialInteriorsMotion from "@/assets/residential-interiors-living-dining-motion.webm.asset.json";
import compactLiving from "@/assets/residential-interiors-compact-living.jpg.asset.json";
import compactLivingMotion from "@/assets/residential-interiors-compact-living-motion.webm.asset.json";
import sanCarlosCottageBedroom from "@/assets/san-carlos-cottage-bedroom-jungle.jpg.asset.json";
import sanCarlosCottageMotion from "@/assets/san-carlos-bedroom-motion.webm.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ghazaly — Architecture & Visualization" },
      {
        name: "description",
        content:
          "Selected architecture and visualization work by Rizk Ghazaly, spanning sustainable design, interiors, parametric form and virtual environments.",
      },
      { property: "og:title", content: "Ghazaly — Architecture & Visualization" },
      {
        property: "og:description",
        content: "A curated portfolio of architecture, visualization and immersive environments by Rizk Ghazaly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type ProjectEntry = {
  title: string;
  meta: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  video?: string;
};

const externalProjects: ProjectEntry[] = [
  {
    title: "Residential Collection",
    meta: "Private villas · Multi-unit residence",
    location: "Lebanon · Dubai",
    description:
      "Three residential studies presented through their plans and exterior views, from landscaped private villas to a multi-unit rental residence.",
    image: residentialCollection.url,
    alt: "Aerial view of a contemporary stone and timber villa with pool and landscaped grounds",
    href: "/projects/residential-collection",
  },
  {
    title: "Senegal Tower",
    meta: "Climate-responsive tower · Adaptive reuse",
    location: "Senegal — 2020",
    description:
      "A collaborative proposal pairing the adaptive reuse of historic buildings with a new planted tower shaped for Senegal's climate.",
    image: senegalTower.url,
    alt: "Senegal Tower rising above a tree-lined urban street at dusk",
    href: "/projects/senegal-tower",
  },
  {
    title: "Crypto Business Center",
    meta: "Parametric towers · Island masterplan",
    location: "UIC Barcelona, Spain — 2021",
    description:
      "Three towers wrapped in a parametric lattice shell above Barcelona's harbour, with an aquarium below sea level — designed to improve the visitor experience and reduce traffic.",
    image: cbcHero.url,
    alt: "Three crystalline towers wrapped in white lattice structures framing a plaza",
    href: "/projects/crypto-business-center",
  },
  {
    title: "Petal Facade Tower",
    meta: "Parametric facade · Desert simulation",
    location: "UIC Barcelona, Spain — 2021",
    description:
      "A residential tower wrapped in thousands of rotating metal petals. The layered skin shades the glass core through the day and dissolves the building's mass against the sky.",
    image: petalTower.url,
    alt: "Tower clad in thousands of overlapping bronze and silver petals on a city corner",
    href: "/projects/desert-simulation",
  },
];

const interiorProjects: ProjectEntry[] = [
  {
    title: "Residential Interiors Collection",
    meta: "Private homes · Multi-country portfolio",
    location: "Dubai · Lebanon · Costa Rica · Saudi Arabia",
    description:
      "A varied collection of living rooms, dining spaces, bedrooms and compact homes designed for different clients, tastes and requirements.",
    image: residentialInteriors.url,
    video: residentialInteriorsMotion.url,
    alt: "Warm residential dining and sitting areas connected through timber screens",
    href: "/projects/residential-interiors",
  },
  {
    title: "San Carlos Cottage",
    meta: "Cottage retreat · Hillside interior",
    location: "San Carlos, Costa Rica",
    description:
      "A compact jungle cottage in San Carlos with dark clad walls, deep timber roofs and rooms that open fully to the surrounding greenery.",
    image: sanCarlosCottageBedroom.url,
    video: sanCarlosCottageMotion.url,
    alt: "Jungle cottage bedroom with stone walls, warm timber ceiling and full-height glazing opening to the trees",
    href: "/projects/san-carlos-cottage",
  },
  {
    title: "Joffrey’s Coffee & Tea Company",
    meta: "Café interiors · Branch development",
    location: "Jeddah & Al Ehsa, Saudi Arabia",
    description:
      "Two café branches developed for Joffrey’s regional network, bringing warm timber, precise lighting and customer-focused layouts from design plans and renders through to completed spaces.",
    image: joffreysCoffee.url,
    alt: "Completed Joffrey’s café interior with a timber display wall and suspended lighting",
    href: "/projects/joffreys-coffee",
  },
  {
    title: "Bathroom Showroom & Renovations",
    meta: "Retail showroom · Bathroom renovations",
    location: "Lebanon",
    description:
      "A showroom designed to exhibit and sell bathroom equipment, jacuzzis, tiles, porcelain, ceramic and marble — followed by a continuing practice renovating private bathrooms.",
    image: bathroomShowroom.url,
    video: showroomMainMotion.url,
    alt: "Retail bathroom showroom with sanitary ware displays, tile stands and a consultation desk",
    href: "/projects/bathroom-showroom",
  },
  {
    title: "Mandara Villa",
    meta: "Residential interior · Neo-Levantine revival",
    location: "Lebanon",
    description:
      "A richly crafted villa centered on the traditional Mandara reception suite, combining Damascene and Ottoman-Lebanese influences through carved timber, limestone, mashrabiya screens and inlaid furnishings.",
    image: mandaraVilla.url,
    video: mandaraVillaMotion.url,
    alt: "Mandara Villa reception and dining room with carved timber ceiling and crystal chandeliers",
    href: "/projects/mandara-villa",
  },
  {
    title: "Beesline Offices",
    meta: "Workplace interior · Brand environment",
    location: "Lebanon",
    description:
      "A refined new workplace for the homegrown Lebanese skincare brand, balancing warm timber, pale stone and sculptural details with bright, flexible spaces for focused and collaborative work.",
    image: beeslineOffices.url,
    video: beeslineOfficesMotion.url,
    alt: "Beesline office reception with sculptural timber seating and a luminous display wall",
    href: "/projects/beesline-offices",
  },
];

type HeroSlide = {
  image: string;
  video?: string;
  alt: string;
  title: string;
  caption: string;
};

const heroSlides: HeroSlide[] = [
  {
    image: petalTower.url,
    alt: "Tower clad in thousands of overlapping bronze and silver petals on a city corner",
    title: "Petal Facade Tower",
    caption: "Parametric facade study",
  },
  {
    image: senegalTower.url,
    alt: "Senegal Tower rising above a tree-lined urban street at dusk",
    title: "Senegal Tower",
    caption: "Climate-responsive tower",
  },
  {
    image: mandaraVilla.url,
    alt: "Mandara Villa reception and dining room with carved timber ceiling and crystal chandeliers",
    title: "Mandara Villa",
    caption: "Neo-Levantine interior",
  },
  {
    image: beeslineWorkspace.url,
    alt: "Beesline open workspace with natural timber desks and soft daylight",
    title: "Beesline Offices",
    caption: "Skincare brand workspace",
  },
  {
    image: compactLiving.url,
    video: compactLivingMotion.url,
    alt: "Compact sitting room connected to a walnut and marble kitchen",
    title: "Residential Interiors",
    caption: "Compact living study",
  },
];

function HeroShowcase() {
  const [active, setActive] = useState(0);
  const hoveredRef = useRef(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!hoveredRef.current) {
        setActive((current) => (current + 1) % heroSlides.length);
      }
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[active] ?? heroSlides[0]!;

  const playActiveVideo = () => {
    hoveredRef.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = videoRefs.current[active];
    void element?.play();
  };

  const pauseActiveVideo = () => {
    hoveredRef.current = false;
    const element = videoRefs.current[active];
    if (element) {
      element.pause();
      element.currentTime = 0;
    }
  };

  return (
    <div className="hero-visual relative mx-auto w-full max-w-[520px] lg:mx-0">
      <div className="prism absolute -inset-1.5 rounded-[28px] opacity-80" aria-hidden="true" />
      <div className="glass relative rounded-[26px] p-2.5">
        <div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px]"
          onMouseEnter={playActiveVideo}
          onMouseLeave={pauseActiveVideo}
          data-motion-preview
        >
          {heroSlides.map((item, index) =>
            item.video ? (
              <video
                key={item.title}
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={item.video}
                poster={item.image}
                aria-label={item.alt}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden={index !== active}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out ${
                  index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
              />
            ) : (
              <img
                key={item.title}
                src={item.image}
                alt={item.alt}
                width={1088}
                height={1360}
                fetchPriority={index === 0 ? "high" : "auto"}
                aria-hidden={index !== active}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out ${
                  index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
              />
            ),
          )}
        </div>
      </div>
      <div className="glass absolute -bottom-6 -left-5 hidden rounded-2xl px-5 py-4 sm:block">
        <span className="stat-label mt-0">Featured</span>
        <p key={slide.title} className="mt-1 font-serif text-lg font-medium animate-fade-in">{slide.title}</p>
        <p key={`${slide.title}-caption`} className="text-xs text-muted-foreground animate-fade-in">{slide.caption}</p>
      </div>
      <div className="absolute -bottom-6 right-2 hidden gap-1.5 sm:flex" aria-hidden="true">
        {heroSlides.map((item, index) => (
          <span
            key={item.title}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === active ? "w-6 bg-foreground/70" : "w-2 bg-foreground/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

type CardMotionPreviewProps = {
  image: string;
  video: string;
  alt: string;
};

function CardMotionPreview({ image, video, alt }: CardMotionPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    void videoRef.current?.play().then(() => setPlaying(true));
  };

  const pause = (reset = false) => {
    const element = videoRef.current;
    if (!element) return;
    element.pause();
    if (reset) element.currentTime = 0;
    setPlaying(false);
  };

  const toggle = () => {
    if (playing) pause();
    else void videoRef.current?.play().then(() => setPlaying(true));
  };

  return (
    <div
      className="relative overflow-hidden rounded-[22px]"
      onMouseEnter={play}
      onMouseLeave={() => pause(true)}
      data-motion-preview
    >
      <video
        ref={videoRef}
        src={video}
        poster={image}
        aria-label={`${alt} — animated preview`}
        muted
        loop
        playsInline
        preload="metadata"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        className="aspect-[4/3] w-full rounded-[22px] object-cover"
      />
      <Button
        type="button"
        variant="secondary"
        size="icon"
        aria-label={playing ? "Pause animation" : "Play animation"}
        title={playing ? "Pause animation" : "Play animation"}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          toggle();
        }}
        className="glass absolute bottom-3 right-3 z-10 rounded-full md:opacity-0 md:transition-opacity md:group-hover:opacity-100 md:focus-visible:opacity-100"
      >
        {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
      </Button>
    </div>
  );
}

function Index() {
  const [projectCategory, setProjectCategory] = useState<"external" | "interior">("interior");
  const projects = projectCategory === "external" ? externalProjects : interiorProjects;

  return (
    <main className="site-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="relative z-20 mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 sm:pt-7">
        <div className="glass flex min-h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
          <a href="#top" className="flex items-baseline gap-2" aria-label="Ghazaly home">
            <span className="font-serif text-xl font-medium">Ghazaly
</span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:inline">Architecture</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-[13px] font-medium text-muted-foreground md:flex">
            <a href="#work" className="text-foreground transition-colors hover:text-primary">Portfolio</a>
            <Link to="/prizes" className="transition-colors hover:text-foreground">Prizes</Link>
          </nav>
          <div className="flex items-center gap-2.5">
            <Link to="/prizes" className="text-link md:hidden">Prizes</Link>
            <ThemeToggle />
            <a className="button-dark" href="#contact">Contact <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
      </header>

      <section id="top" className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 pt-14 sm:pt-20 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Open to architecture opportunities</p>
            <h1 className="mt-7 font-serif text-[clamp(3rem,6vw,4.75rem)] font-light leading-[0.95]">
              Architecture<br />that breathes <em className="font-medium text-muted-foreground">light.</em>
            </h1>
            <p className="mt-7 max-w-md text-[15px] leading-7 text-muted-foreground">
              I shape spaces where climate, digital futures and human calm meet—from sustainable buildings to immersive virtual worlds.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#work" className="button-dark">View selected work <ArrowDownRight size={15} aria-hidden="true" /></a>
              <a href="#profile" className="text-link">Studio profile</a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
              <div><strong className="font-serif text-3xl font-medium">10+</strong><span className="stat-label">Years creating</span></div>
              <div><strong className="font-serif text-3xl font-medium">360°</strong><span className="stat-label">Environments</span></div>
              <div className="col-span-2 sm:col-span-1"><strong className="font-serif text-3xl font-medium">2</strong><span className="stat-label">Physical + virtual</span></div>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </section>

      <div className="relative z-10 border-y border-border bg-surface/70 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:gap-x-8">
          {['Sustainable', 'Parametric', '360° Renders', 'Metaverse HQ', 'Commercial Interior', 'Cyberpunk Environments'].map((item, index) => (
            <span className="flex items-center gap-6 sm:gap-8" key={item}>{index > 0 && <i className="text-border not-italic">/</i>}{item}</span>
          ))}
        </div>
      </div>

      <section id="work" className="relative z-10 mx-auto max-w-[1200px] scroll-mt-8 px-6 py-20 sm:py-28">
        <div className="mb-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0"><p className="section-index">{"\n"}</p><h2 className="mt-3 font-serif text-4xl font-light">{"\n\n\n"}</h2></div>
          <div className="glass grid grid-cols-2 rounded-xl p-1" aria-label="Project category">
            <Button
              type="button"
              variant={projectCategory === "external" ? "default" : "ghost"}
              aria-pressed={projectCategory === "external"}
              onClick={() => setProjectCategory("external")}
              className="h-10 rounded-lg px-4 shadow-none sm:px-6"
            >
              Exterior designs
            </Button>
            <Button
              type="button"
              variant={projectCategory === "interior" ? "default" : "ghost"}
              aria-pressed={projectCategory === "interior"}
              onClick={() => setProjectCategory("interior")}
              className="h-10 rounded-lg px-4 shadow-none sm:px-6"
            >
              Interior designs
            </Button>
          </div>
        </div>
        <div key={projectCategory} className="grid gap-10 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <article className="project group" key={project.title}>
              <div className="relative overflow-hidden rounded-3xl p-[2px]">
                <div className="prism absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                {"href" in project && project.href ? (
                  <Link to={project.href} aria-label={`View ${project.title} project`}>
                    {project.video ? (
                      <CardMotionPreview image={project.image} video={project.video} alt={project.alt} />
                    ) : (
                      <img src={project.image} alt={project.alt} loading="lazy" className="relative aspect-[4/3] w-full rounded-[22px] object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                    )}
                  </Link>
                ) : (
                  <img src={project.image} alt={project.alt} loading="lazy" className="relative aspect-[4/3] w-full rounded-[22px] object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl font-medium">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.meta}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{project.location}</p>
                  <p className="mt-3 max-w-prose text-sm leading-6 text-muted-foreground">{project.description}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="showreel" className="relative z-10 mx-auto max-w-[1200px] scroll-mt-8 px-6 pb-20 sm:pb-28">
        <div className="mb-10 max-w-2xl">
          <p className="section-index">02 — Showreel</p>
          <h2 className="mt-3 font-serif text-4xl font-light">Architecture in motion.</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            A one-minute selection of my animation work — parametric towers, climate studies and immersive environments brought to life.
          </p>
        </div>
        <Showreel />
      </section>

      <section id="profile" className="relative z-10 mx-auto max-w-[1200px] scroll-mt-8 px-6 pb-20 sm:pb-28">
        <div className="grid gap-10 border-y border-border py-12 md:grid-cols-[0.8fr_1.2fr] md:py-16">
          <div><p className="section-index">03 — Profile</p><h2 className="mt-3 font-serif text-4xl font-light">R. Ghazaly</h2><p className="mt-3 text-sm text-muted-foreground">Architect · Visualization Designer</p></div>
          <div><p className="max-w-2xl font-serif text-2xl font-light leading-snug text-foreground/90">A decade of exploring architecture across built, imagined and digital space—with a focus on atmosphere, clear ideas and memorable visual storytelling.</p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground sm:grid-cols-3"><span>Architectural design</span><span>Visualization</span><span>Parametric design</span><span>Commercial interiors</span><span>Sustainable design</span><span>Immersive environments</span></div>
          </div>
        </div>
      </section>

      <section id="approach" className="relative z-10 mx-auto max-w-[1200px] scroll-mt-8 px-6 pb-24">
        <div className="glass relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-20">
          <div className="prism absolute -right-20 -top-24 size-72 opacity-60 blur-2xl" aria-hidden="true" />
          <div className="relative max-w-3xl"><p className="section-index">04 — Approach</p><blockquote className="mt-6 font-serif text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.12]">“There are no limitations—if you can dream it, <em className="font-medium text-muted-foreground">you can build it.</em>”</blockquote><p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground">Every project begins with a clear spatial idea, then develops through material, light and an image strong enough to communicate the architecture.</p></div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 border-t border-border bg-surface/50">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-14 sm:grid-cols-[1fr_auto] sm:items-end">
          <div><p className="section-index">05 — Contact</p><h2 className="mt-3 font-serif text-4xl font-light">Let’s create something memorable.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">Open to architecture and visualization roles, collaborations and selected commissions.</p></div>
          <a href="https://www.metarizk.net/contact/" className="button-dark" rel="noreferrer">Start a conversation <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
         <div className="mx-auto flex max-w-[1200px] flex-col gap-3 border-t border-border px-6 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Ghazaly— Architecture & Visualization</span><a href="https://www.youtube.com/channel/UCrIceUut8nFiL-AReB9cfjw/videos" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">YouTube <ArrowUpRight className="inline" size={12} aria-hidden="true" /></a></div>
      </footer>
    </main>
  );
}

function Showreel() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="glass relative overflow-hidden rounded-[32px] p-2.5">
      <div className="prism absolute -left-24 -bottom-24 size-72 opacity-50 blur-2xl" aria-hidden="true" />
      <div className="relative aspect-video w-full overflow-hidden rounded-[24px] bg-surface">
        {playing ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/G8pqZ30OWzo?autoplay=1&rel=0"
            title="Ghazaly — Architecture animation showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Play the architecture animation showreel"
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src="https://i.ytimg.com/vi/G8pqZ30OWzo/maxresdefault.jpg"
              alt="Still frame from the architecture animation showreel"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" aria-hidden="true" />
            <span className="glass absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="ml-1 size-6 fill-foreground"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="stat-label absolute bottom-4 left-5 mt-0">Play — 1 min</span>
          </button>
        )}
      </div>
    </div>
  );
}