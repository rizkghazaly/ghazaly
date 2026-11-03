import { createFileRoute } from "@tanstack/react-router";

import { DesertSimulation } from "@/components/exterior/desert-simulation";

export const Route = createFileRoute("/projects/desert-simulation")({
  head: () => ({
    meta: [
      { title: "Desert Simulation — Ghazaly" },
      {
        name: "description",
        content:
          "Parametric desert simulations by Rizk Ghazaly — Master Degree in Biodigital Architecture, UIC Barcelona, 2021.",
      },
      { property: "og:title", content: "Desert Simulation — Ghazaly" },
      {
        property: "og:description",
        content:
          "Parametric studies of desert architecture: rotating petal facades, sand interlocking blocks and crop-circle formations. UIC Barcelona, 2021.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <DesertSimulation />,
});
