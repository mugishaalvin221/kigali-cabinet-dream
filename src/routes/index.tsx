import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroTv from "@/assets/hero-tv.jpg";
import detailCraft from "@/assets/detail-craft.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import { ArrowRight, Award, Hammer, Ruler, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mukamana Bespoke — Luxury Kitchen & TV Cabinets in Kigali" },
      {
        name: "description",
        content:
          "Bespoke kitchen and TV cabinetry crafted in Kigali for affluent homes. Custom design, premium materials, and white-glove installation across Rwanda.",
      },
      { property: "og:title", content: "Mukamana Bespoke — Luxury Cabinetry in Kigali" },
      {
        property: "og:description",
        content:
          "Custom kitchen and TV cabinets, designed and built in Kigali. Premium materials, master craftsmanship, lifetime quality.",
      },
      { property: "og:image", content: heroKitchen },
      { name: "twitter:image", content: heroKitchen },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroKitchen}
          alt="Luxury walnut kitchen cabinetry overlooking Kigali at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="container-luxe relative z-10 flex h-full flex-col justify-end pb-16 md:pb-24">
          <span className="text-xs uppercase tracking-[0.4em] text-accent fade-in">
            Bespoke Cabinetry · Kigali
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] text-white text-balance md:text-7xl lg:text-8xl fade-in">
            Cabinetry crafted for a life <em className="text-accent">well lived</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl fade-in">
            Hand-built kitchen and TV cabinets, designed around your home and finished
            to the highest standards in Rwanda.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 fade-in">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-white"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Our Philosophy</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl">
              Where Rwandan craft meets European precision.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              For over a decade, Mukamana Bespoke has been the trusted name for
              affluent homeowners, developers, and interior designers across Kigali.
              Every cabinet is drawn, milled, and finished in our atelier — never
              outsourced, never compromised.
            </p>
            <p className="mt-6 leading-relaxed text-foreground/70">
              We work in solid walnut, oak, and premium MDF with matte and high-gloss
              lacquers — pairing local materials with imported German hardware for a
              finish that lasts a lifetime.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat value="120+" label="Homes Delivered" />
              <Stat value="14yr" label="In Kigali" />
              <Stat value="100%" label="In-House Build" />
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-luxe">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Collections</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Two specialities. One standard.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <CollectionCard
              image={portfolio1}
              tag="Kitchen Cabinetry"
              title="The Kitchen Atelier"
              copy="Handleless walnut, fluted oak, and lacquered fronts paired with quartz and marble. Engineered for daily life in Kigali's most beautiful homes."
              href="/portfolio"
            />
            <CollectionCard
              image={heroTv}
              tag="TV & Media Walls"
              title="The Living Room Edit"
              copy="Floor-to-ceiling media walls with concealed storage, integrated lighting, and acoustic panelling. A quiet stage for the moments that matter."
              href="/portfolio"
            />
          </div>
        </div>
      </section>

      {/* CRAFT DETAIL */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <img
            src={detailCraft}
            alt="Close-up of fluted oak cabinet door with matte black handle"
            className="h-full w-full rounded-sm object-cover"
            loading="lazy"
            width={1200}
            height={1500}
          />
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Materials</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-balance">
              The detail you feel before you see.
            </h2>
            <p className="mt-6 leading-relaxed text-foreground/75">
              Solid timber. Soft-close German hinges. Hand-rubbed oil finishes. Each
              cabinet is built from materials chosen to age beautifully in our climate.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                ["Solid walnut & European oak", "Sustainably sourced, kiln-dried."],
                ["Premium lacquered MDF", "Matte, satin, and high-gloss finishes."],
                ["German hardware", "Blum & Hettich hinges and runners."],
                ["Quartz & marble tops", "Sealed and warranted for life."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 border-t border-border pt-4">
                  <span className="font-serif text-2xl text-accent">·</span>
                  <div>
                    <p className="font-medium">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="bg-foreground py-24 text-background md:py-32">
        <div className="container-luxe">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">What We Do</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              An end-to-end service, from sketch to installation.
            </h2>
          </div>
          <div className="grid gap-px bg-background/10 md:grid-cols-4">
            {[
              { icon: Ruler, title: "Design Consultation", body: "On-site measurements, 3D renderings, material selection." },
              { icon: Hammer, title: "Bespoke Manufacturing", body: "Built in our Kigali workshop by master cabinet-makers." },
              { icon: ShieldCheck, title: "Professional Installation", body: "White-glove install with zero disruption to your home." },
              { icon: Award, title: "Renovations & Upgrades", body: "Refresh existing cabinetry with new fronts and hardware." },
            ].map((s) => (
              <div key={s.title} className="bg-foreground p-8 md:p-10">
                <s.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent hover:text-white"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PEEK */}
      <section className="container-luxe py-24 md:py-32">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Selected Work</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Recent installations.</h2>
          </div>
          <Link to="/portfolio" className="hidden text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent md:inline-flex">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[portfolio1, portfolio2, portfolio3].map((src, i) => (
            <figure key={i} className="group overflow-hidden">
              <img
                src={src}
                alt={`Portfolio installation ${i + 1}`}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={1200}
                height={900}
              />
              <figcaption className="mt-3 flex items-baseline justify-between text-sm">
                <span className="font-medium">{["Nyarutarama Residence", "Kacyiru Penthouse", "Kibagabaga Villa"][i]}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">2024</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-luxe">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Clients</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Trusted by Kigali's most particular homeowners.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="border-t border-foreground pt-8">
                <p className="font-serif text-xl leading-relaxed text-foreground/90">
                  "{t.quote}"
                </p>
                <footer className="mt-6 text-sm">
                  <p className="font-medium">{t.author}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxe py-24 md:py-32">
        <div className="rounded-sm bg-foreground px-8 py-20 text-center text-background md:px-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Begin</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight text-balance md:text-6xl">
            Your home deserves cabinetry built only for it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-background/75">
            Book a complimentary consultation. We'll visit your home in Kigali,
            take measurements, and prepare a detailed quotation.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-background"
          >
            Book Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Mukamana transformed our Nyarutarama kitchen into the heart of our home. The walnut work is extraordinary.",
    author: "Aline & David K.",
    role: "Homeowners, Nyarutarama",
  },
  {
    quote:
      "Across three of our developments, their team delivered on time and above spec. Our buyers notice immediately.",
    author: "Jean-Paul R.",
    role: "Real Estate Developer",
  },
  {
    quote:
      "The TV wall they built feels like furniture, not joinery. Pure craft. Worth every franc.",
    author: "Sandrine U.",
    role: "Interior Designer, Kacyiru",
  },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-foreground md:text-4xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

function CollectionCard({
  image,
  tag,
  title,
  copy,
  href,
}: {
  image: string;
  tag: string;
  title: string;
  copy: string;
  href: "/portfolio" | "/services" | "/contact";
}) {
  return (
    <Link to={href} className="group block overflow-hidden bg-background">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width={1200}
          height={1500}
        />
      </div>
      <div className="p-8">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">{tag}</span>
        <h3 className="mt-3 font-serif text-3xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{copy}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground transition-colors group-hover:text-accent">
          Explore <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
