import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-8xl text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mukamana Bespoke — Luxury Kitchen & TV Cabinets in Kigali" },
      {
        name: "description",
        content:
          "Custom-designed luxury kitchen and TV cabinets in Kigali. Bespoke craftsmanship, premium finishes, and professional installation for discerning homeowners across Rwanda.",
      },
      { name: "author", content: "Mukamana Bespoke Cabinetry" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Mukamana Bespoke — Luxury Kitchen & TV Cabinets in Kigali" },
      { name: "twitter:title", content: "Mukamana Bespoke — Luxury Kitchen & TV Cabinets in Kigali" },
      { name: "description", content: "Generates a premium website plan for a Kigali-based cabinet maker specializing in luxury TV and kitchen cabinets." },
      { property: "og:description", content: "Generates a premium website plan for a Kigali-based cabinet maker specializing in luxury TV and kitchen cabinets." },
      { name: "twitter:description", content: "Generates a premium website plan for a Kigali-based cabinet maker specializing in luxury TV and kitchen cabinets." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6bf8e4c2-f2e1-44ae-ae8e-87d348e80a09/id-preview-b53526c0--a131a275-bdd4-4202-8cbf-8b71080e3ba5.lovable.app-1776435570121.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6bf8e4c2-f2e1-44ae-ae8e-87d348e80a09/id-preview-b53526c0--a131a275-bdd4-4202-8cbf-8b71080e3ba5.lovable.app-1776435570121.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
