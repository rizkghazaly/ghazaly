import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Box, DraftingCompass, Layers3, Mail, Workflow } from "lucide-react";
import { HouseAnimation } from "@/components/house-construction/house-animation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const description = "Rizk Ghazaly — architect, interior designer and spatial visualizer with 10+ years of practice, a Master’s in Bio-Digital Architecture and PMP accreditation.";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Rizk Ghazaly — Architecture, Interiors & Digital Spaces" },
    { name: "description", content: description },
    { property: "og:title", content: "About Rizk Ghazaly — Architecture, Interiors & Digital Spaces" },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

const services = [
  { icon: DraftingCompass, title: "Architecture & interiors", text: "Concept planning, layouts and spatial organization. Execution drawings, technical packages and local code alignment for residential, retail and commercial fit-outs." },
  { icon: Box, title: "Visualization & AI", text: "Photorealistic exteriors and interiors with V-Ray, 3ds Max and Lumion. 360° virtual tours, WebVR showcases, AI-assisted concepts and render post-production." },
  { icon: Layers3, title: "Digital architecture", text: "Virtual galleries, commercial showrooms and pavilions. Spatial planning and custom 3D architecture for interactive environments and metaverse platforms." },
  { icon: Workflow, title: "Leadership & coordination", text: "PMP-guided project management, scheduling and milestones. BOQ preparation, contractor coordination and design-intent oversight." },
];

function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-20 mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 sm:pt-7">
        <div className="glass flex min-h-16 flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3 sm:px-6">
          <Link to="/" className="font-serif text-xl font-medium" aria-label="Ghazaly home">Ghazaly</Link>
          <nav aria-label="Primary navigation" className="order-3 flex w-full justify-center gap-6 text-[13px] font-medium text-muted-foreground sm:order-none sm:w-auto">
            <Link to="/" className="transition-colors hover:text-foreground">Portfolio</Link>
            <Link to="/prizes" className="transition-colors hover:text-foreground">Prizes</Link>
            <Link to="/about" aria-current="page" className="text-foreground">About Me</Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <section className="about-introduction relative isolate mx-auto max-w-[1400px]">
        <div className="about-copy relative z-10 mx-auto max-w-[1200px] px-6 pt-14 sm:pt-20">
          <p className="section-index">About me</p>
          <h1 className="mt-5 font-serif text-5xl font-light leading-[1.08] sm:text-6xl">Rizk<br className="hidden lg:block" /> Ghazaly<span className="text-muted-foreground">.</span></h1>
          <p className="mt-5 max-w-[390px] text-sm leading-7 text-muted-foreground">Architect. Interior designer.<br />Spatial visualizer.</p>
          <p className="mt-5 max-w-[390px] text-[14px] leading-7 text-muted-foreground">10+ years translating complex ideas into high-end physical spaces and interactive digital environments. Technical buildability, parametric thinking and cinematic visualization — in one practice.</p>
          <div className="mt-6 flex max-w-[390px] flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-foreground">
            <span>Master’s in Bio-Digital Architecture</span><span>PMP accredited</span>
          </div>
          <Button asChild variant="link" className="mt-5 px-0 text-xs"><Link to="/">Explore the portfolio <ArrowUpRight /></Link></Button>
        </div>
        <HouseAnimation />
      </section>

      <section className="relative mx-auto max-w-[1200px] border-t border-border px-6 pb-16 pt-9 sm:pb-20">
        <div className="mb-8 flex items-baseline justify-between gap-4"><h2 className="font-serif text-3xl font-light">Core services</h2><span className="section-index">Physical + digital</span></div>
        <div className="grid gap-x-16 gap-y-9 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="border-t border-border pt-6">
              <div className="mb-4 flex items-center gap-3"><Icon size={20} strokeWidth={1.3} className="text-muted-foreground" /><span className="text-[10px] text-muted-foreground">0{index + 1}</span></div>
              <h3 className="font-serif text-2xl font-normal">{title}</h3>
              <p className="mt-3 max-w-lg text-[13px] leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="relative border-t border-border px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="flex items-center justify-center gap-3 text-[10px] tracking-[0.35em] text-muted-foreground uppercase">
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            Get in touch
            <span className="h-px w-8 bg-border" aria-hidden="true" />
          </p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] sm:text-5xl">
            Let’s build something<br className="hidden sm:block" /> worth <em className="italic text-muted-foreground">rendering.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-[420px] text-sm leading-7 text-muted-foreground">
            Tell me about your project and I will reply with a clear direction, usually within 24 hours.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:rizk@metarizk.net"
              className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-200 hover:scale-[1.03]"
            >
              <Mail size={15} strokeWidth={1.6} aria-hidden="true" />
              rizk@metarizk.net
            </a>
          </div>
          <p className="mt-7 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Available worldwide · Remote 3D delivery</p>
        </div>
      </section>
      <footer className="mx-auto flex max-w-[1200px] items-center justify-between border-t border-border px-6 py-7 text-xs text-muted-foreground"><Link to="/" className="font-serif text-lg text-foreground">Ghazaly</Link><Link to="/prizes" className="hover:text-foreground">Prizes <ArrowUpRight size={12} className="ml-1 inline" /></Link></footer>
    </main>
  );
}