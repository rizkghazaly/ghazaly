import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { HouseConstruction } from "@/components/construction/house-construction";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About R. Ghazaly — Architecture & Visualization" },
    { name: "description", content: "Meet R. Ghazaly: a decade of architectural design, visualization, commercial interiors and immersive environments. Explore the journey from a plot to a completed home." },
    { property: "og:title", content: "About R. Ghazaly — Architecture & Visualization" },
    { property: "og:description", content: "Built, imagined and digital spaces: the architectural approach of R. Ghazaly, with an animated house construction study." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 sm:pt-7">
        <div className="glass flex min-h-16 items-center justify-between gap-3 rounded-2xl px-4 sm:px-6">
          <Link to="/" aria-label="Ghazaly home" className="font-serif text-xl font-medium">Ghazaly</Link>
          <div className="flex items-center gap-3 sm:gap-8">
            <nav aria-label="Primary navigation" className="flex items-center gap-3 text-xs sm:gap-8 sm:text-[13px]">
              <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">Portfolio</Link>
              <Link to="/prizes" className="text-muted-foreground transition-colors hover:text-foreground">Prizes</Link>
              <Link to="/about" aria-current="page" className="text-foreground">About</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-[1100px] px-6 pb-10 pt-14 sm:px-10 sm:pb-14 sm:pt-20">
        <p className="section-index">About — Architect · Visualization Designer</p>
        <div className="mt-5 grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-end md:gap-16">
          <h1 className="font-serif text-5xl font-light leading-tight sm:text-6xl">R. Ghazaly</h1>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">A decade of exploring architecture across built, imagined and digital space—with a focus on atmosphere, clear ideas and memorable visual storytelling.</p>
        </div>
      </section>
      <section aria-label="House construction study" className="border-y border-border bg-surface">
        <HouseConstruction />
      </section>
      <section className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div><p className="section-index">The approach</p><h2 className="mt-4 font-serif text-3xl font-light">From an idea<br />to a place.</h2></div>
          <div>
            <p className="font-serif text-2xl font-light leading-relaxed">“There are no limitations—if you can dream it, you can build it.”</p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">Every project begins with a clear spatial idea, then develops through material, light and an image strong enough to communicate the architecture.</p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 text-sm text-muted-foreground">
              {["Architectural design", "Visualization", "Parametric design", "Commercial interiors", "Sustainable design", "Immersive environments"].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <Button asChild variant="link" className="mt-7 px-0"><Link to="/">Explore the portfolio <ArrowUpRight /></Link></Button>
          </div>
        </div>
      </section>
      <footer className="border-t border-border bg-surface/50">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div><h2 className="font-serif text-3xl font-light">Let’s create something memorable.</h2><p className="mt-3 text-sm text-muted-foreground">Open to architecture and visualization roles, collaborations and selected commissions.</p></div>
          <Button asChild><a href="https://www.metarizk.net/contact/" rel="noreferrer">Start a conversation <ArrowUpRight /></a></Button>
        </div>
      </footer>
    </main>
  );
}