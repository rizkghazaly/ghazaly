import { createFileRoute } from "@tanstack/react-router";

import { ResidentialCollection } from "@/components/exterior/residential-collection";

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
  component: () => <ResidentialCollection />,
});
