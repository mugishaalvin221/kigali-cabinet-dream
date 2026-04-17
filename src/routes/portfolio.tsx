import { createFileRoute, Link } from "@tanstack/react-router";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroTv from "@/assets/hero-tv.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Kitchen & TV Cabinet Projects in Kigali | Mukamana Bespoke" },
      {
        name: "description",
        content:
          "A selection of bespoke kitchen and TV cabinet installations in Kigali — Nyarutarama, Kacyiru, Kibagabaga, and beyond.",
      },
      { property: "og:title", content: "Portfolio — Mukamana Bespoke Cabinetry" },
      {
        property: "og:description",
        content: "Bespoke kitchen and TV cabinet installations across Kigali.",
      },
      { property: "og:image", content: portfolio1 },
      { name: "twitter:image", content: portfolio1 },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { src: heroKitchen, title: "Nyarutarama Penthouse Kitchen", type: "Kitchen", year: "2024", span: "row-span-2" },
  { src: portfolio4, title: "Kacyiru Media Wall", type: "TV Cabinet", year: "2024", span: "" },
  { src: portfolio2, title: "Gacuriro Minimalist Kitchen", type: "Kitchen", year: "2023", span: "" },
  { src: heroTv, title: "Kimihurura Living Room", type: "TV Cabinet", year: "2024", span: "row-span-2" },
  { src: portfolio1, title: "Kibagabaga Family Villa", type: "Kitchen", year: "2023", span: "" },
  { src: portfolio3, title: "Rebero Master Suite", type: "Wardrobe & TV", year: "2024", span: "" },
];

function PortfolioPage() {
  return (
    <>
      <section className="container-luxe pt-20 pb-16 md:pt-32 md:pb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Portfolio</span>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] text-balance md:text-7xl">
          Recent work, in homes you may know.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75">
          A small selection of kitchen and TV cabinet projects delivered for homeowners,
          developers, and interior designers across Kigali.
        </p>
      </section>

      <section className="container-luxe pb-24">
        <div className="grid auto-rows-[280px] gap-6 md:grid-cols-3 md:auto-rows-[320px]">
          {projects.map((p) => (
            <figure key={p.title} className={`group relative overflow-hidden ${p.span}`}>
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.type} · {p.year}</p>
                <p className="mt-1 font-serif text-xl">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-luxe py-20">
        <div className="rounded-sm border border-border p-12 text-center md:p-16">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl md:text-4xl text-balance">
            Have a project in mind? Let's design something memorable.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-sm bg-foreground px-7 py-4 text-xs uppercase tracking-[0.2em] text-background hover:bg-foreground/90"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
