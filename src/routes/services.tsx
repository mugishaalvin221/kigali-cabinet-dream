import { createFileRoute, Link } from "@tanstack/react-router";
import { Ruler, PenTool, Hammer, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import detailCraft from "@/assets/detail-craft.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Custom Cabinet Design, Build & Installation | Kigali" },
      {
        name: "description",
        content:
          "Custom cabinet design, in-home measurement, bespoke manufacturing, professional installation, and renovations across Kigali and Rwanda.",
      },
      { property: "og:title", content: "Cabinet Services in Kigali — Mukamana Bespoke" },
      {
        property: "og:description",
        content: "End-to-end cabinet services: design, build, install, renovate.",
      },
      { property: "og:image", content: detailCraft },
      { name: "twitter:image", content: detailCraft },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: PenTool,
    title: "Custom Cabinet Design",
    body: "We begin with your space, your habits, and your aesthetic. Our designers produce 3D renderings and material samples so you see — and touch — the result before a single board is cut.",
  },
  {
    icon: Ruler,
    title: "Measurement & Consultation",
    body: "An on-site visit anywhere in Kigali. We measure to the millimetre, discuss layouts, materials, and budget, and deliver a detailed proposal within 5 working days.",
  },
  {
    icon: Hammer,
    title: "Bespoke Manufacturing",
    body: "Every cabinet is built in our Kigali atelier by master cabinet-makers using premium timber, MDF, and German hardware. No outsourcing, no compromises.",
  },
  {
    icon: Truck,
    title: "Professional Installation",
    body: "White-glove delivery and installation by our own crew. Clean site, protected floors, and a final walkthrough to ensure every detail meets our standard.",
  },
  {
    icon: RefreshCw,
    title: "Renovations & Upgrades",
    body: "Refresh existing kitchens with new cabinet fronts, hardware, and worktops — a fraction of the cost of a full rebuild, with all the impact.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Quality Guarantee",
    body: "Our cabinetry is warranted for 10 years on materials and workmanship. Hardware is covered by manufacturer guarantees of up to 25 years.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="container-luxe pt-20 pb-16 md:pt-32 md:pb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Services</span>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] text-balance md:text-7xl">
          Everything from first sketch to final reveal.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75">
          A single team, a single standard. We design, build, and install every project
          ourselves — so the experience is as refined as the result.
        </p>
      </section>

      <section className="container-luxe pb-24">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="bg-background p-8 md:p-10">
              <s.icon className="h-7 w-7 text-accent" />
              <h2 className="mt-6 font-serif text-2xl">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-foreground/70">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-luxe">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">The Process</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">From idea to installed.</h2>
          </div>
          <ol className="space-y-12">
            {[
              ["01", "Discovery", "A conversation about your home, your taste, and your timeline."],
              ["02", "Design & Quote", "On-site measurement, 3D renders, material samples, fixed quotation."],
              ["03", "Craft", "Manufacturing in our Kigali workshop — typically 4–8 weeks."],
              ["04", "Install & Reveal", "Professional installation in 1–3 days. Final walkthrough."],
            ].map(([n, t, d]) => (
              <li key={n} className="grid grid-cols-12 items-baseline gap-6 border-t border-foreground/15 pt-8">
                <span className="col-span-2 font-serif text-3xl text-accent md:col-span-1 md:text-4xl">{n}</span>
                <h3 className="col-span-10 font-serif text-2xl md:col-span-3 md:text-3xl">{t}</h3>
                <p className="col-span-12 text-foreground/75 md:col-span-8">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16">
            <Link
              to="/contact"
              className="inline-block rounded-sm bg-foreground px-7 py-4 text-xs uppercase tracking-[0.2em] text-background hover:bg-foreground/90"
            >
              Begin Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
