import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-foreground text-background">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl">MDF Furniture Rwanda</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-background/60">
            Furniture Maker · Kigali
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/75">
            Hand-crafted kitchen and TV cabinetry for affluent homes across Rwanda.
            Designed and built in Kigali to last generations.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Request a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent">Visit & Call</h4>
          <ul className="mt-5 space-y-3 text-sm text-background/85">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>KG 665 St, Kigali (Plus Code: 33JC+56)</span></li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>0787 240 775</span></li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>Open 24 hours</span></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>hello@mdffurniture.rw</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-background/60 md:flex-row">
          <p>© {new Date().getFullYear()} MDF Furniture Rwanda. All rights reserved.</p>
          <p>Crafted in Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
}
