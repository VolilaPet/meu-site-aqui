import { createFileRoute, redirect } from "@tanstack/react-router";

// The imported site is a static export served from public/bem-materno.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/bem-materno/index.html" });
  },
  head: () => ({
    meta: [
      { title: "Almofada de Apoio para Amamentação MOMMY™ | Bem Materno" },
      {
        name: "description",
        content: "Conheça a MOMMY™, a almofada de apoio para amamentação da Bem Materno.",
      },
      { property: "og:title", content: "Almofada de Apoio para Amamentação MOMMY™ | Bem Materno" },
      {
        property: "og:description",
        content: "Conheça a MOMMY™, a almofada de apoio para amamentação da Bem Materno.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
