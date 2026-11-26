import { createFileRoute, redirect } from "@tanstack/react-router";

// The imported site is a static export served from public/bem-materno.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/bem-materno/index.html" });
  },
  head: () => ({
    meta: [
      { title: "MOMMY™ Almofada de Apoio para Amamentação | Bem Materno" },
      {
        name: "description",
        content: "Conheça a MOMMY™, a almofada de apoio para amamentação da Bem Materno.",
      },
      { property: "og:title", content: "MOMMY™ Almofada de Apoio para Amamentação | Bem Materno" },
      {
        property: "og:description",
        content: "Conheça a MOMMY™, a almofada de apoio para amamentação da Bem Materno.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
