import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Custom Cabinets in Kigali | Mukamana Bespoke" },
      {
        name: "description",
        content:
          "Request a quote for bespoke kitchen or TV cabinets in Kigali. WhatsApp, phone, email, or fill out our project form for a detailed proposal.",
      },
      { property: "og:title", content: "Contact — Mukamana Bespoke Cabinetry, Kigali" },
      {
        property: "og:description",
        content: "Book a complimentary in-home consultation in Kigali.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Kitchen Cabinets",
    size: "",
    budget: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Quote Request%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AProject: ${form.type}%0ASize: ${form.size}%0ABudget: ${form.budget}%0ALocation: ${form.location}%0A%0A${form.message}`;
    window.open(`https://wa.me/250787240775?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section className="container-luxe pt-20 pb-12 md:pt-32 md:pb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Contact</span>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] text-balance md:text-7xl">
          Let's design your space.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75">
          Tell us a little about your project. We respond within one business day with
          next steps and an in-home consultation booking.
        </p>
      </section>

      <section className="container-luxe pb-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="rounded-sm border border-accent bg-accent/10 p-12 text-center">
                <Check className="mx-auto h-10 w-10 text-accent" />
                <h2 className="mt-6 font-serif text-3xl">Thank you.</h2>
                <p className="mt-3 text-foreground/75">
                  Your request has been opened in WhatsApp. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Full name" required>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                  </Field>
                  <Field label="Phone (WhatsApp)" required>
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
                  </Field>
                </div>
                <Field label="Email">
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                </Field>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Project type" required>
                    <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={inputCls}>
                      <option>Kitchen Cabinets</option>
                      <option>TV / Media Wall</option>
                      <option>Wardrobes</option>
                      <option>Full Home Joinery</option>
                      <option>Renovation / Upgrade</option>
                    </select>
                  </Field>
                  <Field label="Approx. size">
                    <input placeholder="e.g. 4m kitchen run" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className={inputCls} />
                  </Field>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Budget range">
                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputCls}>
                      <option value="">Select…</option>
                      <option>Under 3M RWF</option>
                      <option>3M – 7M RWF</option>
                      <option>7M – 15M RWF</option>
                      <option>15M+ RWF</option>
                      <option>Not sure yet</option>
                    </select>
                  </Field>
                  <Field label="Location in Kigali" required>
                    <input required placeholder="e.g. Nyarutarama" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputCls} />
                  </Field>
                </div>
                <Field label="Tell us about your project">
                  <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} />
                </Field>
                <button type="submit" className="w-full rounded-sm bg-foreground px-7 py-4 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90 md:w-auto">
                  Send Request
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <aside className="md:col-span-5">
            <div className="rounded-sm bg-foreground p-8 text-background md:p-10">
              <h2 className="font-serif text-2xl">Speak with us directly</h2>
              <ul className="mt-8 space-y-6 text-sm">
                <ContactItem icon={MessageCircle} title="WhatsApp" detail="+250 787 240 775" href="https://wa.me/250787240775" />
                <ContactItem icon={Phone} title="Call" detail="0787 240 775" href="tel:+250787240775" />
                <ContactItem icon={Mail} title="Email" detail="hello@mdffurniture.rw" href="mailto:hello@mdffurniture.rw" />
                <ContactItem icon={MapPin} title="Workshop" detail={"KG 665 St, Kigali\nPlus Code: 33JC+56"} href="https://www.google.com/maps/search/?api=1&query=33JC%2B56+Kigali" />
              </ul>
              <div className="mt-10 border-t border-background/15 pt-6 text-xs text-background/70">
                <p className="uppercase tracking-[0.25em] text-accent">Hours</p>
                <p className="mt-3">Open 24 hours · 7 days a week</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-sm border border-border">
              <iframe
                title="MDF Furniture Rwanda — KG 665 St, Kigali"
                src="https://www.google.com/maps?q=33JC%2B56+Kigali&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-foreground/70">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ContactItem({ icon: Icon, title, detail, href }: { icon: typeof Phone; title: string; detail: string; href?: string }) {
  const content = (
    <>
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-background/60">{title}</p>
        <p className="mt-1 whitespace-pre-line text-background">{detail}</p>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:text-accent">{content}</a>
      ) : (
        <div className="flex items-start gap-4">{content}</div>
      )}
    </li>
  );
}
