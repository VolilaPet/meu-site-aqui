import { createFileRoute, redirect } from "@tanstack/react-router";

// The imported site is a static export served from public/nuva.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/nuva/index.html" });
  },
  head: () => ({
    meta: [
      { title: "NuvaRest | Nuva" },
      { name: "description", content: "Conheça o Nuva da NuvaRest." },
      { property: "og:title", content: "NuvaRest | Nuva" },
      { property: "og:description", content: "Conheça o Nuva da NuvaRest." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
