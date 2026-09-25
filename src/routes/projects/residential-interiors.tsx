import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Pause, Play } from "lucide-react";

import livingDining from "@/assets/residential-interiors-living-dining.jpg.asset.json";
import livingDiningMotion from "@/assets/residential-interiors-living-dining-motion.webm.asset.json";
import formalDining from "@/assets/residential-interiors-formal-dining.jpg.asset.json";
import openLiving from "@/assets/residential-interiors-open-living.jpg.asset.json";
import scenicLiving from "@/assets/residential-interiors-scenic-living.jpg.asset.json";
import formalDiningMotion from "@/assets/residential-interiors-formal-dining-motion.webm.asset.json";
import warmBedroom from "@/assets/residential-interiors-warm-bedroom.jpg.asset.json";
import warmBedroomMotion from "@/assets/residential-interiors-warm-bedroom-motion.webm.asset.json";
import nightBedroom from "@/assets/residential-interiors-night-bedroom.jpg.asset.json";
import nightBedroomMotion from "@/assets/residential-interiors-night-bedroom-motion.webm.asset.json";
import sculpturalBedroom from "@/assets/residential-interiors-sculptural-bedroom.jpg.asset.json";
import cityBedroom from "@/assets/residential-interiors-city-bedroom.jpg.asset.json";
import sculpturalBedroomMotion from "@/assets/residential-interiors-sculptural-bedroom-motion.webm.asset.json";
import bedroomSuite from "@/assets/residential-interiors-bedroom-suite.jpg.asset.json";
import jungleBedroom from "@/assets/residential-interiors-jungle-bedroom.jpg.asset.json";
import compactLiving from "@/assets/residential-interiors-compact-living.jpg.asset.json";
import compactKitchen from "@/assets/residential-interiors-compact-kitchen.jpg.asset.json";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/residential-interiors")({
  head: () => ({
    meta: [
      { title: "Residential Interiors Collection — Ghazaly" },
      {
        name: "description",
        content:
          "A collection of residential interior designs by Ghazaly for different private clients in Dubai, Lebanon, Costa Rica and Saudi Arabia.",
      },
      { property: "og:title", content: "Residential Interiors Collection — Ghazaly" },
      {
        property: "og:description",
        content:
          "Living rooms, dining spaces, bedrooms and compact homes designed for distinct clients, tastes and lifestyles across four countries.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResidentialInteriors,
});

type CollectionItem = LightboxItem & { video?: string };

type CollectionGroup = {
  number: string;
  title: string;
  introduction: string;
  columns?: 2 | 3;
  items: CollectionItem[];
};

const groups: CollectionGroup[] = [
  {
    number: "01",
    title: "Living & dining",
    introduction:
      "Four approaches to shared space—from a layered sequence of reception rooms to a formal marble dining room and open contemporary living plans.",
    items: [
      {
        src: livingDining.url,
        video: livingDiningMotion.url,
        alt: "Warm residential dining and sitting areas connected through timber screens",
        caption:
          "Layered reception rooms — walnut, soft upholstery and geometric screens create depth while keeping each social area connected.",
      },
      {
        src: formalDining.url,
        video: formalDiningMotion.url,
        alt: "Formal dining room with marble walls, black pendant lights and tailored chairs",
        caption:
          "Formal dining — crisp marble, sculptural black pendants and bronze-edged seating create a polished entertaining space.",
      },
      {
        src: openLiving.url,
        alt: "Open-plan living, sitting and dining room with bronze screen and dark stone floor",
        caption:
          "Open living — a bronze screen gently separates the intimate sitting area from the larger lounge and dining zones.",
      },
      {
        src: scenicLiving.url,
        alt: "High-rise living room with grey lounge chairs, sculptural white shelving and skyline views",
        caption:
          "Skyline lounge — sculptural shelving and tailored grey seating frame a panoramic city view in polished stone and soft light.",
      },
    ],
  },
  {
    number: "02",
    title: "Bedrooms",
    introduction:
      "Six distinct private-room studies respond to different personalities: warm and relaxed, dramatic and urban, sculptural, minimal, classically comfortable, and a rainforest studio retreat.",
    items: [
      {
        src: warmBedroom.url,
        video: warmBedroomMotion.url,
        alt: "Warm modern bedroom with blue upholstered bed, timber floor and diagonal stone wall",
        caption:
          "Warm contemporary — soft blue upholstery and amber accents balance the strong diagonal wall and dark ceiling plane.",
      },
      {
        src: nightBedroom.url,
        video: nightBedroomMotion.url,
        alt: "Dark urban bedroom overlooking a city skyline at night",
        caption:
          "Urban night — dark timber, suspended jewel lights and a panoramic skyline give the room a cinematic character.",
      },
      {
        src: sculpturalBedroom.url,
        video: sculpturalBedroomMotion.url,
        alt: "Daylit bedroom with a faceted geometric feature wall and sea view",
        caption:
          "Sculptural retreat — an illuminated faceted wall becomes the focal point against a calm timber platform and wide coastal view.",
      },
      {
        src: cityBedroom.url,
        video: cityBedroomMotion.url,
        alt: "Minimal master bedroom with timber slat wall and floor-to-ceiling city windows",
        caption:
          "Quiet modernism — vertical timber, integrated shelving and precise light lines frame a restrained master bedroom.",
      },
      {
        src: bedroomSuite.url,
        alt: "Classic contemporary bedroom suite with lounge and mountain view",
        caption:
          "Bedroom suite — rich timber detailing and a private sitting area bring domestic warmth to a bright landscape-facing room.",
      },
      {
        src: jungleBedroom.url,
        alt: "Jungle studio bedroom with exposed brick walls, warm timber ceiling and rainforest views",
        caption:
          "Jungle studio — a compact Costa Rican rainforest retreat where exposed brick, warm timber and clerestory glazing open the room to the surrounding trees.",
      },
    ],
  },
  {
    number: "03",
    title: "Compact living",
    introduction:
      "A smaller home uses continuity of stone, marble and walnut to connect the lounge and kitchen while giving each zone its own atmosphere.",
    items: [
      {
        src: compactLiving.url,
        alt: "Compact sitting room connected to a walnut and marble kitchen",
        caption:
          "Sitting area — textured stone, warm light and an open breakfast counter make the compact plan feel generous and connected.",
      },
      {
        src: compactKitchen.url,
        alt: "Compact walnut kitchen with marble peninsula and metallic mosaic backsplash",
        caption:
          "Kitchen — a marble-wrapped peninsula and metallic mosaic bring richness to an efficient, carefully lit workspace.",
      },
    ],
  },
];

const lightboxItems = groups.flatMap((group) => group.items);

type MotionPreviewProps = {
  image: string;
  video: string;
  alt: string;
  onOpen: () => void;
  featured?: boolean;
};

function MotionPreview({ image, video, alt, onOpen, featured = false }: MotionPreviewProps) {
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
        className={`${featured ? "aspect-[16/9]" : "aspect-[4/3]"} h-auto w-full cursor-zoom-in rounded-[18px] object-cover`}
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
        className="glass absolute bottom-3 right-3 z-10 rounded-full md:opacity-0 md:transition-opacity md:group-hover:opacity-100 md:focus-visible:opacity-100"
      >
        {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
      </Button>
    </div>
  );
}

function ResidentialInteriors() {
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

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-10 pt-14 sm:pb-14 sm:pt-20">
        <p className="eyebrow">Interior design · Private residences</p>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-light leading-[0.98]">
          Residential Interiors Collection
        </h1>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          A collection of homes designed for different clients—not a single residence. Each space responds to its owner&apos;s taste, lifestyle and requirements, moving between restrained contemporary rooms, dramatic urban settings, warm natural palettes and more formal interiors.
        </p>
        <dl className="mt-10 grid max-w-4xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
          <div><dt className="stat-label mt-0">Locations</dt><dd className="mt-2 text-sm text-foreground/90">Dubai · Lebanon · Costa Rica · Saudi Arabia</dd></div>
          <div><dt className="stat-label mt-0">Clients</dt><dd className="mt-2 text-sm text-foreground/90">Independent private residences</dd></div>
          <div><dt className="stat-label mt-0">Spaces</dt><dd className="mt-2 text-sm text-foreground/90">Living · Dining · Bedrooms · Kitchens</dd></div>
        </dl>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
        <div className="group glass relative overflow-hidden rounded-[26px] p-2.5">
          <MotionPreview
            image={livingDining.url}
            video={livingDiningMotion.url}
            alt="Warm residential dining and sitting areas connected through timber screens"
            onOpen={() => setLightboxIndex(0)}
            featured
          />
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
          Different homes, different identities—united by careful planning, material balance and light shaped around the client.
        </p>
      </section>

      {groups.map((group) => {
        const groupOffset = itemOffset;
        itemOffset += group.items.length;

        return (
          <section key={group.number} className="relative z-10 border-t border-border">
            <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
              <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-14">
                <div className="lg:sticky lg:top-8">
                  <p className="section-index">{group.number} — Selected studies</p>
                  <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">{group.title}</h2>
                  <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{group.introduction}</p>
                </div>
                <div className={group.columns === 3 ? "grid grid-cols-1 items-start gap-6 md:grid-cols-3" : "grid grid-cols-1 items-start gap-8 md:grid-cols-2"}>
                  {group.items.map((item, itemIndex) => (
                    <figure key={item.src} className="group glass rounded-[26px] p-2.5">
                      <div className="overflow-hidden rounded-[18px]">
                        {item.video ? (
                          <MotionPreview
                            image={item.src}
                            video={item.video}
                            alt={item.alt}
                            onOpen={() => setLightboxIndex(groupOffset + itemIndex)}
                          />
                        ) : (
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            onClick={() => setLightboxIndex(groupOffset + itemIndex)}
                            className="aspect-[4/3] w-full cursor-zoom-in rounded-[18px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                        )}
                      </div>
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