import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-luxe flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight md:text-2xl">Mukamana Bespoke</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Cabinetry · Kigali
          </span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-sm border border-foreground bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-transparent hover:text-foreground md:inline-block"
        >
          Request Quote
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container-luxe flex flex-col gap-4 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-sm bg-foreground px-5 py-3 text-center text-xs uppercase tracking-[0.2em] text-background"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
