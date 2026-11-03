import { createFileRoute } from "@tanstack/react-router";

import { CryptoBusinessCenter } from "@/components/exterior/crypto-business-center";

export const Route = createFileRoute("/projects/crypto-business-center")({
  head: () => ({
    meta: [
      { title: "Crypto Business Center — Ghazaly" },
      {
        name: "description",
        content:
          "Crypto Business Center by Rizk Ghazaly — three parametric towers above an underwater aquarium, Master Degree in Biodigital Architecture, UIC Barcelona, 2021.",
      },
      { property: "og:title", content: "Crypto Business Center — Ghazaly" },
      {
        property: "og:description",
        content:
          "A proposal to improve Barcelona's visitor experience: three towers above sea level, an aquarium below. UIC Barcelona, 2021.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CryptoBusinessCenter />,
});
