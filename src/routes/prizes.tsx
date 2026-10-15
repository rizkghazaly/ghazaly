import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Award } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import cyberSirenBadge from "@/assets/prize-cybersiren.jpg.asset.json";
import decentrapepeBadge from "@/assets/prize-decentrapepe-world.jpg.asset.json";
import spaceRaceBadge from "@/assets/prize-space-race.jpg.asset.json";
import daoHqBadge from "@/assets/prize-dao-hq.jpg.asset.json";
import spaceSuitShopBadge from "@/assets/prize-space-suit-shop.jpg.asset.json";
import uglySweaterBadge from "@/assets/prize-ugly-sweater.jpg.asset.json";
import matrixDanceBadge from "@/assets/prize-matrix-dance.jpg.asset.json";
import lostFountainBadge from "@/assets/prize-lost-fountain.jpg.asset.json";
import fordTPickupBadge from "@/assets/prize-ford-t-pickup.jpg.asset.json";
import monArchZoneBadge from "@/assets/prize-monarch-zone.jpg.asset.json";
import cyberPunkBuilderBadge from "@/assets/prize-cyberpunk-builder.jpg.asset.json";
import saveXmasBadge from "@/assets/prize-save-xmas.jpg.asset.json";
import rizkAmusementParkBadge from "@/assets/prize-rizk-amusement-park.jpg.asset.json";
import astronautSuitBadge from "@/assets/prize-astronaut-suit.jpg.asset.json";
import gameCityBadge from "@/assets/prize-game-city.jpg.asset.json";

export const Route = createFileRoute("/prizes")({
  head: () => ({
    meta: [
      { title: "Metaverse Prizes — Ghazaly" },
      {
        name: "description",
        content:
          "Metaverse design awards won by Rizk Ghazaly across Decentraland, Sandstorm, Spatial and Monaverse from 2019 to 2025.",
      },
      { property: "og:title", content: "Metaverse Prizes — Ghazaly" },
      {
        property: "og:description",
        content:
          "A record of award-winning worlds, architecture, wearables and interactive experiences by Rizk Ghazaly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrizesPage,
});

const prizes = [
  {
    date: "Feb 2025",
    title: "DECENTRAPEPE World",
    result: "1st place",
    context: "Community Choice Award · Builders Trail · Decentraland",
    description:
      "Nominated by the Decentraland community for the Builders Trail and selected as the Community Choice Award winner.",
      proof:
        "https://discord.com/channels/417796904760639509/433376431603580970/1344277107995316267",
  },
  {
    date: "Sep 2024",
    title: "CyberSiren",
    result: "6th place",
    context: "Across the Galaxy wearable contest · Decentraland",
    description:
      "A character skin merging two identities—half mermaid and half robot—created for the Across the Galaxy wearable contest.",
    proof:
      "https://twitter.com/decentraland/status/1836910434529452455",
  },
  {
    date: "Aug 2023",
    title: "Space Race",
    result: "2nd prize",
    context: "Spatial contest · Sandstorm",
    description:
      "A cosmic adventure featuring space colonies, a monumental aquarium and a race-car experience, created for a Spatial contest on Sandstorm.",
    proof:
        "https://app.sandstorm.co/collections/9365b72e84b690226004ade5791d4a15",
  },
  {
    date: "Jul 2023",
    title: "Decentraland DAO HQ",
    result: "2nd prize",
    context: "DAO Headquarters contest · Sandstorm",
    description:
      "A headquarters proposal submitted to the Decentraland DAO competition hosted through the Sandstorm platform.",
    proof:
        "https://app.sandstorm.co/collections/9365b72e84b690226004ade5791d4a15",
  },
  {
    date: "Mar 2023",
    title: "Space-Suit Shop",
    result: "1st prize",
    context: "Space Metaverse contest · Sandstorm",
    description:
      "A retail world set within an imagined place and timeline, designed for Sandstorm's Space Metaverse competition.",
    proof:
      "https://app.sandstorm.co/collections/9365b72e84b690226004ade5791d4a15",
  },
  {
    date: "Dec 2022",
    title: "Ugly Sweater Wearable",
    result: "3rd prize",
    context: "Ugly Sweater wearable contest · Decentraland",
    description:
      "A deliberately unconventional holiday wearable translating the playful excess of real-world ugly sweaters into the metaverse.",
    proof:
      "https://twitter.com/decentraland/status/1606402968651456512?s=46&t=cZx5dII5xpfmdCj4gW4Kug",
  },
  {
    date: "Nov 2022",
    title: "The Matrix Dance — Bullet Time",
    result: "9th prize",
    context: "Emotes Contest · Metaverse Music Festival 2022",
    description:
      "A bullet-time movement sequence designed as an emote for the 2022 Metaverse Music Festival.",
    proof:
      "https://twitter.com/decentraland/status/1588578765491548162?s=20&t=tdDAkYqMcwEEoZ2CiTKJZw",
  },
  {
    date: "Oct 2022",
    title: "The Lost Fountain",
    result: "3rd prize",
    context: "DCL Builder Contest #3 · Decentraland",
    description:
      "An atmospheric fountain scene created for the third Decentraland Builder Contest.",
    proof:
      "https://web.archive.org/web/20250620074450/https://www.instagram.com/explore/tags/dclcontest2/",
  },
  {
    date: "Oct 2022",
    title: "Ford T Pickup Model (1908)",
    result: "5th place",
    context: "DCL Builder Contest #2 · Decentraland",
    description:
      "A metaverse-ready model of the historic 1908 Ford Model T pickup, created for the second DCL Builder Contest.",
    proof:
      "https://twitter.com/sandstormmeetup/status/1577781108019699728?s=20&t=mj0ih8SR-YJXTCny4TE-Eg",
  },
  {
    date: "Feb 2022",
    title: "MonArch Zone",
    result: "Finalist winner",
    context: "MonArch · Monaverse",
    description:
      "Selected as a finalist in MonArch, one of the largest metaverse events hosted on the Monaverse platform.",
    proof:
      "https://twitter.com/monaverse/status/1498357405087936515?s=20&t=x2VZBsSFvFes0ZlR8wn25g",
  },
  {
    date: "Apr 2021",
    title: "CyberPunk Builder Contest",
    result: "2nd prize",
    context: "Aetheria Project · Decentraland",
    description:
      "A cyberpunk environment created with the Aetheria Project for a themed Decentraland building competition.",
    proof:
      "https://decentraland.org/blog/announcements/cyberpunk-2021-meet-the-winners",
  },
  {
    date: "Dec 2020",
    title: "Save Xmas Game Jam",
    result: "Community Prize",
    context: "Game Jam · Decentraland",
    description:
      "An interactive holiday scene designed to spread joy and turn the metaverse into a merryverse for Christmas.",
    proof:
      "https://decentraland.org/blog/announcements/game-jam-q4-2020-final-results",
  },
  {
    date: "Sep 2020",
    title: "Rizk Amusement Park",
    result: "1st prize",
    context: "Game Jam · Decentraland",
    description:
      "An amusement-park world designed for a Decentraland Game Jam, combining architecture with interactive play.",
    proof:
      "https://decentraland.org/blog/announcements/game-jam-2020-winners-revealed",
  },
  {
    date: "Feb 2020",
    title: "Decentraland Astronaut Suit",
    result: "Winning wearable",
    context: "Layer One wearables collection · Decentraland",
    description:
      "An astronaut suit selected in a competition to create a new collection of Layer One wearables.",
    proof: "https://opensea.io/bundles/ethereum/decentraland-astronaut-suit-6az",
  },
  {
    date: "Dec 2019",
    title: "Game City + Interactive Stairs Game",
    result: "Two prizes",
    context: "Creator Contest · Decentraland",
    description:
      "Two early Decentraland scenes—Game City and Interactive Stairs Game—both received prizes in the 2019 Creator Contest.",
    proof:
      "https://decentraland.org/blog/announcements/creator-contest-all-the-winners",
  },
];

const prizeBadges: Record<string, { src: string; alt: string }> = {
  "DECENTRAPEPE World": {
    src: decentrapepeBadge.url,
    alt: "DECENTRAPEPE World Community Choice Award badge",
  },
  CyberSiren: {
    src: cyberSirenBadge.url,
    alt: "CyberSiren sixth-place award badge",
  },
  "Space Race": {
    src: spaceRaceBadge.url,
    alt: "Space Race second prize badge",
  },
  "Decentraland DAO HQ": {
    src: daoHqBadge.url,
    alt: "Decentraland DAO HQ second prize badge",
  },
  "Space-Suit Shop": {
    src: spaceSuitShopBadge.url,
    alt: "Space-Suit Shop first prize badge",
  },
  "Ugly Sweater Wearable": {
    src: uglySweaterBadge.url,
    alt: "Ugly Sweater Wearable third prize badge",
  },
  "The Matrix Dance — Bullet Time": {
    src: matrixDanceBadge.url,
    alt: "The Matrix Dance Bullet Time ninth prize badge",
  },
  "The Lost Fountain": {
    src: lostFountainBadge.url,
    alt: "The Lost Fountain third prize badge",
  },
  "Ford T Pickup Model (1908)": {
    src: fordTPickupBadge.url,
    alt: "Ford T Pickup Model 1908 fifth place badge",
  },
  "MonArch Zone": {
    src: monArchZoneBadge.url,
    alt: "MonArch Zone finalist badge",
  },
  "CyberPunk Builder Contest": {
    src: cyberPunkBuilderBadge.url,
    alt: "CyberPunk Builder Contest second prize badge",
  },
  "Save Xmas Game Jam": {
    src: saveXmasBadge.url,
    alt: "Save Xmas Game Jam community prize badge",
  },
  "Rizk Amusement Park": {
    src: rizkAmusementParkBadge.url,
    alt: "Rizk Amusement Park Decentraland World Create Contest badge",
  },
  "Decentraland Astronaut Suit": {
    src: astronautSuitBadge.url,
    alt: "Decentraland Astronaut Suit prize badge",
  },
  "Game City + Interactive Stairs Game": {
    src: gameCityBadge.url,
    alt: "ISG Games City Creator Contest badge",
  },
};

function PrizesPage() {
  return (
    <main className="site-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="relative z-20 mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 sm:pt-7">
        <div className="glass flex min-h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2" aria-label="Ghazaly home">
            <span className="font-serif text-xl font-medium">Ghazaly</span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:inline">
              Architecture
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/about" className="text-link">About</Link>
            <ThemeToggle />
            <Link to="/" className="text-link">
              <ArrowLeft size={14} className="mr-1 inline" aria-hidden="true" /> Portfolio
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="eyebrow"><Award size={13} aria-hidden="true" /> Metaverse recognition</p>
            <h1 className="mt-7 max-w-3xl font-serif text-[clamp(3rem,6vw,5rem)] font-light leading-[0.95]">
              Prizes across<br /><em className="font-medium text-muted-foreground">virtual reality worlds.</em>
            </h1>
          </div>
          <p className="max-w-xl text-[15px] leading-7 text-muted-foreground lg:pb-1">
            A record of awarded architecture, interactive environments, wearables and experiences—spanning Decentraland, Sandstorm, Spatial and Monaverse.
          </p>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-6 border-y border-border py-7 sm:grid-cols-3">
          <div><dt className="stat-label mt-0">Recognition</dt><dd className="mt-2 font-serif text-3xl">15</dd></div>
          <div><dt className="stat-label mt-0">Prize record</dt><dd className="mt-2 font-serif text-3xl">2019—25</dd></div>
          <div className="col-span-2 sm:col-span-1"><dt className="stat-label mt-0">Disciplines</dt><dd className="mt-2 text-sm leading-6">Worlds · Wearables · Games</dd></div>
        </dl>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24 sm:pb-32">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="section-index">Selected recognition</p>
            <h2 className="mt-3 font-serif text-4xl font-light">Awards archive</h2>
          </div>
          <span className="hidden text-sm text-muted-foreground sm:inline">Newest to earliest</span>
        </div>

        <ol className="border-t border-border">
          {prizes.map((prize, index) => {
            const badge = prizeBadges[prize.title];

            return (
              <li
                key={`${prize.date}-${prize.title}`}
                className={`grid gap-5 border-b border-border py-9 sm:items-start sm:gap-8 ${badge ? "sm:grid-cols-[7rem_8rem_1fr_auto]" : "sm:grid-cols-[8rem_1fr_auto]"}`}
              >
                {badge ? (
                  <div className="flex h-30 w-30 items-center justify-center overflow-hidden rounded-full border border-border bg-surface sm:h-35 sm:w-35">
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ) : null}
                <div>
                  <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-sm font-semibold">{prize.date}</p>
                </div>
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-serif text-2xl font-medium">{prize.title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{prize.result}</span>
                  </div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{prize.context}</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{prize.description}</p>
                </div>
                <a href={prize.proof} target="_blank" rel="noreferrer" className="text-link whitespace-nowrap sm:mt-1">
                  View proof <ArrowUpRight size={13} className="ml-1 inline" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ol>
      </section>

      <footer className="relative z-10 border-t border-border bg-surface/50">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-light">Let’s create something memorable.</h2>
            <p className="mt-2 text-sm text-muted-foreground">Open to architecture, visualization and immersive-world opportunities.</p>
          </div>
          <a href="https://www.metarizk.net/contact/" className="button-dark" rel="noreferrer">
            Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}