import { createFileRoute } from "@tanstack/react-router";

import { SenegalTower } from "@/components/exterior/senegal-tower";

export const Route = createFileRoute("/projects/senegal-tower")({
  head: () => ({
    meta: [
      { title: "Senegal Tower — Ghazaly" },
      {
        name: "description",
        content:
          "Senegal Tower by Rizk Ghazaly with Jean Deeb — a 2020 proposal combining adaptive reuse with climate-conscious new construction in Senegal.",
      },
      { property: "og:title", content: "Senegal Tower — Ghazaly" },
      {
        property: "og:description",
        content:
          "A planted urban tower that brings adaptive reuse and climate-responsive new construction together in Senegal.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SenegalTower />,
});
