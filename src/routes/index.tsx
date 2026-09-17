import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

import petalTower from "@/assets/petal-tower.jpg.asset.json";
import cbcHero from "@/assets/cbc-3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "METARIZK — Architecture & Visualization" },
      {
        name: "description",
        content:
          "Selected architecture and visualization work by Rizk Ghazaly, spanning sustainable design, interiors, parametric form and virtual environments.",
      },
      { property: "og:title", content: "METARIZK — Architecture & Visualization" },
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

const projects = [
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
];

function Index() {
  return (
    <main className="site-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="relative z-20 mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 sm:pt-7">
        <div className="glass flex min-h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
          <a href="#top" className="flex items-baseline gap-2" aria-label="METARIZK home">
            <span className="font-serif text-xl font-medium">METARIZK</span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:inline">Architecture</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-[13px] font-medium text-muted-foreground md:flex">
            <a href="#work" className="text-foreground transition-colors hover:text-primary">Work</a>
            <a href="#profile" className="transition-colors hover:text-foreground">Profile</a>
            <a href="#approach" className="transition-colors hover:text-foreground">Approach</a>
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

          <div className="hero-visual relative mx-auto w-full max-w-[520px] lg:mx-0">
            <div className="prism absolute -inset-1.5 rounded-[28px] opacity-80" aria-hidden="true" />
            <div className="glass relative rounded-[26px] p-2.5">
              <img src={petalTower.url} alt="Tower clad in thousands of overlapping bronze and silver petals on a city corner" width={1088} height={1360} fetchPriority="high" className="aspect-[4/5] w-full rounded-[20px] object-cover" />
            </div>
            <div className="glass absolute -bottom-6 -left-5 hidden rounded-2xl px-5 py-4 sm:block">
              <span className="stat-label mt-0">Featured</span>
              <p className="mt-1 font-serif text-lg font-medium">Petal Facade Tower</p>
              <p className="text-xs text-muted-foreground">Parametric facade study</p>
            </div>
          </div>
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
        <div className="mb-10 flex items-end justify-between">
          <div><p className="section-index">01 — Selected work</p><h2 className="mt-3 font-serif text-4xl font-light">Selected projects</h2></div>
          <span className="hidden text-sm text-muted-foreground sm:inline">Architecture · visualization · interiors</span>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <article className="project group" key={project.title}>
              <div className="relative overflow-hidden rounded-3xl p-[2px]">
                <div className="prism absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                {"href" in project && project.href ? (
                  <Link to={project.href} aria-label={`View ${project.title} project`}>
                    <img src={project.image} alt={project.alt} loading="lazy" className="relative aspect-[4/3] w-full rounded-[22px] object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
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

      <section id="profile" className="relative z-10 mx-auto max-w-[1200px] scroll-mt-8 px-6 pb-20 sm:pb-28">
        <div className="grid gap-10 border-y border-border py-12 md:grid-cols-[0.8fr_1.2fr] md:py-16">
          <div><p className="section-index">02 — Profile</p><h2 className="mt-3 font-serif text-4xl font-light">Rizk Ghazaly</h2><p className="mt-3 text-sm text-muted-foreground">Architect · Visualization Designer</p></div>
          <div><p className="max-w-2xl font-serif text-2xl font-light leading-snug text-foreground/90">A decade of exploring architecture across built, imagined and digital space—with a focus on atmosphere, clear ideas and memorable visual storytelling.</p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground sm:grid-cols-3"><span>Architectural design</span><span>Visualization</span><span>Parametric design</span><span>Commercial interiors</span><span>Sustainable design</span><span>Immersive environments</span></div>
          </div>
        </div>
      </section>

      <section id="approach" className="relative z-10 mx-auto max-w-[1200px] scroll-mt-8 px-6 pb-24">
        <div className="glass relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-20">
          <div className="prism absolute -right-20 -top-24 size-72 opacity-60 blur-2xl" aria-hidden="true" />
          <div className="relative max-w-3xl"><p className="section-index">03 — Approach</p><blockquote className="mt-6 font-serif text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.12]">“There are no limitations—if you can dream it, <em className="font-medium text-muted-foreground">you can build it.</em>”</blockquote><p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground">Every project begins with a clear spatial idea, then develops through material, light and an image strong enough to communicate the architecture.</p></div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 border-t border-border bg-surface/50">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-14 sm:grid-cols-[1fr_auto] sm:items-end">
          <div><p className="section-index">04 — Contact</p><h2 className="mt-3 font-serif text-4xl font-light">Let’s create something memorable.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">Open to architecture and visualization roles, collaborations and selected commissions.</p></div>
          <a href="https://www.metarizk.net/contact/" className="button-dark" rel="noreferrer">Start a conversation <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 border-t border-border px-6 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 METARIZK — Architecture & Visualization</span><a href="https://www.youtube.com/channel/UCrIceUut8nFiL-AReB9cfjw/videos" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">YouTube <ArrowUpRight className="inline" size={12} aria-hidden="true" /></a></div>
      </footer>
    </main>
  );
}