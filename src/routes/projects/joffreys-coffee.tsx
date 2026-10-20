import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Pause, Play } from "lucide-react";

import townCenterPlan from "@/assets/joffreys-town-center-plan.jpg.asset.json";
import townCenterDesignOne from "@/assets/joffreys-town-center-design-one.jpg.asset.json";
import townCenterDesignTwo from "@/assets/joffreys-town-center-design-two.jpg.asset.json";
import townCenterCompletedOne from "@/assets/joffreys-town-center-completed-one.jpg.asset.json";
import townCenterCompletedTwo from "@/assets/joffreys-town-center-completed-two.jpg.asset.json";
import alEhsaPlan from "@/assets/joffreys-al-ehsa-plan.jpg.asset.json";
import alEhsaExterior from "@/assets/joffreys-al-ehsa-exterior.jpg.asset.json";
import alEhsaInteriorOne from "@/assets/joffreys-al-ehsa-interior-one.jpg.asset.json";
import alEhsaInteriorTwo from "@/assets/joffreys-al-ehsa-interior-two.jpg.asset.json";
import rivieraPlan from "@/assets/joffreys-riviera-plan.jpg.asset.json";
import rivieraFacade from "@/assets/joffreys-riviera-facade.jpg.asset.json";
import rivieraInterior from "@/assets/joffreys-riviera-interior.jpg.asset.json";
import millenniumBarLounge from "@/assets/joffreys-millennium-bar-lounge.jpg.asset.json";
import millenniumDiningHall from "@/assets/joffreys-millennium-dining-hall.jpg.asset.json";
import millenniumScreenBanquette from "@/assets/joffreys-millennium-screen-banquette.jpg.asset.json";
import millenniumDiningWide from "@/assets/joffreys-millennium-dining-wide.jpg.asset.json";
import millenniumPlan from "@/assets/joffreys-millennium-plan.jpg.asset.json";
import airportKioskOne from "@/assets/joffreys-airport-kiosk-one.jpg.asset.json";
import airportKioskTwo from "@/assets/joffreys-airport-kiosk-two.jpg.asset.json";
import airportKioskPlan from "@/assets/joffreys-airport-kiosk-plan.jpg.asset.json";
import millenniumDiningWideMotion from "@/assets/millennium-dining-wide-motion.webm.asset.json";
import { Button } from "@/components/ui/button";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/projects/joffreys-coffee")({
  head: () => ({
    meta: [
      { title: "Joffrey’s Coffee & Tea Company — Ghazaly" },
      {
        name: "description",
        content:
          "Café branch design for Joffrey’s Coffee & Tea Company in Jeddah, Al Ehsa, Dammam, the Millennium Business Centre and a kiosk proposal for King Khalid International Airport in Riyadh, presented through plans, design renders and completed interiors.",
      },
      { property: "og:title", content: "Joffrey’s Coffee & Tea Company — Ghazaly" },
      {
        property: "og:description",
        content:
          "Five Saudi Arabia projects developed from spatial planning and visualization through renovation, completed interiors and an airport kiosk proposal.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoffreysCoffee,
});

type BranchItem = LightboxItem & { tag?: string };

function MotionMedia({
  image,
  video,
  alt,
  onOpen,
}: {
  image: string;
  video: string;
  alt: string;
  onOpen: () => void;
}) {
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
      className="relative overflow-hidden rounded-[18px]"
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
        onClick={onOpen}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        className="h-auto w-full cursor-zoom-in rounded-[18px] object-contain"
      />
      <Button
        type="button"
        variant="secondary"
        size="icon"
        aria-label={playing ? "Pause animation" : "Play animation"}
        title={playing ? "Pause animation" : "Play animation"}
        onClick={(event) => {
          event.stopPropagation();
          toggle();
        }}
        className="glass absolute bottom-3 right-3 z-10 rounded-full"
      >
        {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
      </Button>
    </div>
  );
}

type Branch = {
  number: string;
  title: string;
  location: string;
  description: string;
  facts: Array<{ label: string; value: string }>;
  plan?: LightboxItem;
  groups: Array<{ label: string; items: BranchItem[]; columns?: number }>;
};

const branches: Branch[] = [
  {
    number: "01",
    title: "Joffrey's Town Center",
    location: "Jeddah, Saudi Arabia",
    description:
      "A full café interior developed from the general layout and design visualization through to construction. The planning balances open table seating, curved banquettes and a clear service sequence, while timber shelving and suspended lighting give the completed branch a warm, vertical character.",
    facts: [
      { label: "Location", value: "Jeddah, Saudi Arabia" },
      { label: "Scope", value: "Interior design & implementation" },
      { label: "Presentation", value: "Plan, design phase & completion" },
      { label: "Type", value: "Specialty coffee shop" },
    ],
    plan: {
      src: townCenterPlan.url,
      alt: "General layout plan of the Joffrey’s Town Center Mall café in Jeddah",
      caption:
        "General layout — varied seating surrounds a central circulation route leading toward the cashier, service island, kitchen and storage.",
    },
    groups: [
      {
        label: "Before & after — design phase and completion",
        items: [
          {
            src: townCenterDesignOne.url,
            alt: "Design render of the Town Center café lounge with concrete walls and suspended lights",
            caption: "Design study — a quiet lounge framed by concrete, timber shelving and suspended light lines.",
            tag: "Before · Design phase",
          },
          {
            src: townCenterCompletedOne.url,
            alt: "Completed Town Center café seating area with concrete wall and suspended lighting",
            caption: "After completion — the lighting composition and material palette carried through from the design phase.",
            tag: "After · Built",
          },
          {
            src: townCenterDesignTwo.url,
            alt: "Design render of the Town Center café counter and tall timber display wall",
            caption: "Design study — the service counter and full-height timber display establish the branch’s main identity.",
            tag: "Before · Design phase",
          },
          {
            src: townCenterCompletedTwo.url,
            alt: "Completed Town Center café with timber display wall and service counter",
            caption: "After completion — timber shelving, warm pendants and the service counter define the finished customer space.",
            tag: "After · Built",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Al Ehsa Café",
    location: "Al Ehsa, Saudi Arabia",
    description:
      "A renovation of both the exterior and interior, giving the branch a consistent architectural identity from street to table. The L-shaped plan separates lounge seating from the larger dining area, with the coffee counter and support spaces positioned at their shared center.",
    facts: [
      { label: "Location", value: "Al Ehsa, Saudi Arabia" },
      { label: "Scope", value: "Exterior & interior renovation" },
      { label: "Presentation", value: "Plan & architectural renders" },
      { label: "Type", value: "Specialty coffee shop" },
    ],
    plan: {
      src: alEhsaPlan.url,
      alt: "General layout plan of the Joffrey’s café in Al Ehsa",
      caption:
        "General plan — an L-shaped arrangement connects intimate lounge bays with an open dining hall and central service counter.",
    },
    groups: [
      {
        label: "Exterior & interior design",
        columns: 3,
        items: [
          {
            src: alEhsaExterior.url,
            alt: "Exterior render of the renovated Joffrey’s café in Al Ehsa at sunset",
            caption: "Exterior proposal — dark horizontal cladding and illuminated signage create a clear corner presence.",
          },
          {
            src: alEhsaInteriorOne.url,
            alt: "Interior render of the Al Ehsa café with red feature wall and mixed lounge seating",
            caption: "Interior view — red vertical panels, warm timber and varied seating shape a comfortable social setting.",
          },
          {
            src: alEhsaInteriorTwo.url,
            alt: "Wide interior render of the Al Ehsa café dining space",
            caption: "Dining hall — layered ceiling lighting and an open seating field lead toward the coffee counter.",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Riviera Mall Café",
    location: "Dammam, Saudi Arabia",
    description:
      "A double-height mall branch organized around one signature element: a decorative timber lattice wall that separates the seating hall from the stair and service zones without closing the space off. Its geometric star pattern carries the branch's identity from the storefront glazing through to the mezzanine.",
    facts: [
      { label: "Location", value: "Dammam, Saudi Arabia" },
      { label: "Scope", value: "Interior design" },
      { label: "Presentation", value: "Plan & architectural renders" },
      { label: "Type", value: "Specialty coffee shop" },
    ],
    plan: {
      src: rivieraPlan.url,
      alt: "General layout plan of the Joffrey’s café in Riviera Mall, Dammam",
      caption:
        "General plan — open table seating leads along a timber route toward the cashier, kitchen island and storage at the rear.",
    },
    groups: [
      {
        label: "Storefront & interior design",
        columns: 2,
        items: [
          {
            src: rivieraFacade.url,
            alt: "Storefront render of the Joffrey’s Riviera Mall café with timber lattice screen and mezzanine",
            caption:
              "Storefront — the lattice screen, spiral stair and glowing signage give the branch a strong presence inside the mall.",
          },
          {
            src: rivieraInterior.url,
            alt: "Interior render of the Dammam café with the decorative separation wall in timber and red",
            caption:
              "Interior view — the decorative separation wall in patterned timber and deep red defines the dining hall from the stair side.",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Millennium Business Centre Café",
    location: "Jeddah, Saudi Arabia",
    description:
      "A renovation proposal for the existing café in the Millennium Business Centre, developed with the AlGhazzawi Group. The design elevates the branch into a more refined hospitality setting: perforated brass columns and screens define intimate dining pockets, layered ceiling coves and ring lights carry a warm rhythm overhead, and a brass-and-marble bar with a backlit wine cellar anchors the room as its signature element.",
    facts: [
      { label: "Location", value: "Jeddah, Saudi Arabia" },
      { label: "Scope", value: "Renovation proposal for the existing café" },
      { label: "Presentation", value: "Architectural renders" },
      { label: "Type", value: "Specialty coffee shop & dining lounge" },
    ],
    plan: {
      src: millenniumPlan.url,
      alt: "General layout plan of the Joffrey’s café in the Millennium Business Centre, Jeddah",
      caption:
        "General plan — a sweeping timber route and bridge tie the open seating field to the kitchen, service areas and the mezzanine escalator and elevator.",
    },
    groups: [
      {
        label: "Renovation proposal",
        columns: 2,
        items: [
          {
            src: millenniumBarLounge.url,
            alt: "Interior render of the Millennium Business Centre café bar with brass counter, marble top and backlit wine cellar",
            caption:
              "Bar & lounge — a perforated brass column, marble-topped brass bar and backlit wine cellar anchor the seating hall.",
          },
          {
            src: millenniumDiningHall.url,
            alt: "Dining hall render with brass ceiling coves, blue velvet and cognac leather seating",
            caption:
              "Dining hall — draped brass coves and globe pendants hang over velvet and leather seating divided by openwork brass screens.",
          },
          {
            src: millenniumScreenBanquette.url,
            alt: "Close-up render of perforated brass screens framing a leather banquette dining table",
            caption:
              "Dining pocket — perforated brass screens frame each banquette table beneath a triptych of marble artwork.",
          },
          {
            src: millenniumDiningWide.url,
            alt: "Wide interior render of the renovated café with ring chandeliers and brass lattice screens",
            caption:
              "The room in full — concentric ring chandeliers and a field of brass lattice screens organize the dining floor.",
            video: millenniumDiningWideMotion.url,
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "King Khalid International Airport Kiosks",
    location: "Riyadh, Saudi Arabia",
    description:
      "A bidding proposal for Joffrey's coffee kiosks inside King Khalid International Airport in Riyadh. The compact kiosk pairs a curved pastry display with a slim service counter beneath a bronze canopy, framed by fluted brass columns and an illuminated coffee-cup emblem — a self-contained outlet that brings the brand into the departures hall while a screened seating enclosure offers travelers a place to pause.",
    facts: [
      { label: "Location", value: "King Khalid International Airport, Riyadh" },
      { label: "Scope", value: "Kiosk design & bidding proposal" },
      { label: "Presentation", value: "Plan & architectural renders" },
      { label: "Type", value: "Airport coffee kiosk" },
    ],
    plan: {
      src: airportKioskPlan.url,
      alt: "Top-view layout plan of the Joffrey’s airport kiosk at King Khalid International Airport, Riyadh",
      caption:
        "General plan — a screened seating area with four tables sits beside the bronze canopy housing the pastry display, barista station, service counter and back-of-house equipment.",
    },
    groups: [
      {
        label: "Kiosk design proposal",
        items: [
          {
            src: airportKioskOne.url,
            alt: "Render of the Joffrey's airport kiosk in the Riyadh departures hall with bronze canopy and seating enclosure",
            caption:
              "Departures hall — the bronze kiosk with fluted brass columns stands beside a screened seating enclosure and flight information boards.",
          },
          {
            src: airportKioskTwo.url,
            alt: "Render of the Joffrey's airport kiosk with pastry display case and slim service counter",
            caption:
              "Kiosk detail — a curved pastry display, coffee bar and glowing columns give the compact outlet a full café presence.",
          },
        ],
      },
    ],
  },
];

const lightboxItems: LightboxItem[] = branches.flatMap((branch) => [
  ...(branch.plan ? [branch.plan] : []),
  ...branch.groups.flatMap((group) => group.items),
]);

function JoffreysCoffee() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  let itemOffset = 0;

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
        <p className="eyebrow">Interior design · Hospitality</p>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-light leading-[0.98]">
          Joffrey&apos;s Coffee &amp; Tea Company
        </h1>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          Joffrey&apos;s operates more than 50 specialty coffee outlets and a local roastery across Saudi Arabia through the AlGhazzawi Group&apos;s exclusive regional franchise. These five projects show my work developing café environments from plans and design visualization through renovation, completion and bidding proposals.
        </p>
        <dl className="mt-10 grid max-w-4xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
          <div><dt className="stat-label mt-0">Client</dt><dd className="mt-2 text-sm text-foreground/90">Joffrey&apos;s Coffee &amp; Tea Company</dd></div>
          <div><dt className="stat-label mt-0">Branches shown</dt><dd className="mt-2 text-sm text-foreground/90">Jeddah · Al Ehsa · Dammam · Millennium · Riyadh</dd></div>
          <div><dt className="stat-label mt-0">Scope</dt><dd className="mt-2 text-sm text-foreground/90">Plans, interiors &amp; exterior renovation</dd></div>
        </dl>
      </section>

      {branches.map((branch, branchIndex) => {
        const branchOffset = itemOffset;
        itemOffset += (branch.plan ? 1 : 0) + branch.groups.reduce((total, group) => total + group.items.length, 0);

        return (
          <section key={branch.title} className="relative z-10 border-t border-border">
            <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
              <div className={branch.plan ? "grid items-start gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16" : ""}>
                <div>
                  <p className="section-index">{branch.number} — {branch.location}</p>
                  <h2 className="mt-3 max-w-lg font-serif text-3xl font-light sm:text-4xl">{branch.title}</h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">{branch.description}</p>
                  <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
                    {branch.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="stat-label mt-0">{fact.label}</dt>
                        <dd className="mt-2 text-sm text-foreground/90">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                {branch.plan ? (
                  <figure>
                    <div className="glass overflow-hidden rounded-[26px] p-2.5 sm:p-3">
                      <img
                        src={branch.plan.src}
                        alt={branch.plan.alt}
                        loading={branchIndex === 0 ? "eager" : "lazy"}
                        onClick={() => setLightboxIndex(branchOffset)}
                        className="mx-auto h-auto max-h-[560px] w-auto max-w-full cursor-zoom-in rounded-[18px] object-contain"
                      />
                    </div>
                    <figcaption className="mt-4 text-sm leading-6 text-muted-foreground">{branch.plan.caption}</figcaption>
                  </figure>
                ) : null}
              </div>

              {branch.groups.map((group, groupIndex) => {
                const groupOffset = branch.groups
                  .slice(0, groupIndex)
                  .reduce((total, precedingGroup) => total + precedingGroup.items.length, 0);

                return (
                  <div key={group.label} className="mt-12 lg:mt-16">
                    <p className="section-index mb-8">{group.label}</p>
                    <div
                      className={
                        group.columns === 3
                          ? "grid grid-cols-1 items-start gap-6 md:grid-cols-3"
                          : "grid grid-cols-1 items-start gap-8 md:grid-cols-2"
                      }
                    >
                      {group.items.map((item, itemIndex) => (
                        <figure key={item.src} className="group glass rounded-[26px] p-2.5">
                          <div className="overflow-hidden rounded-[18px]">
                            <img
                              src={item.src}
                              alt={item.alt}
                              loading="lazy"
                              onClick={() => setLightboxIndex(branchOffset + (branch.plan ? 1 : 0) + groupOffset + itemIndex)}
                              className="h-auto w-full cursor-zoom-in rounded-[18px] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                            />
                          </div>
                          {item.tag && (
                            <p className="px-3 pt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.tag}</p>
                          )}
                          <figcaption className="px-3 pb-3 pt-2 text-sm leading-6 text-muted-foreground">{item.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                );
              })}
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