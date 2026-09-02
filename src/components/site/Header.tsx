import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-on-ink-muted">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-[11px] font-semibold tracking-[0.1em] uppercase sm:px-6">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" />
            Locally owned · Warrantied parts · Upfront pricing
          </span>
          <span className="hidden items-center gap-2 md:flex">
            <Clock className="h-3.5 w-3.5 shrink-0 text-primary" />
            Open daily 7AM – 7PM
          </span>
        </div>
      </div>

      <div className="border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto hidden max-w-7xl grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-6 px-6 py-4 lg:grid">
          <Link to="/" className="min-w-0">
            <Logo />
          </Link>
          <div className="flex items-center gap-6">
            <InfoChip icon={<Clock className="h-4 w-4" />} title="7:00 AM – 7:00 PM" sub="Every day of the week" />
            <InfoChip icon={<MapPin className="h-4 w-4" />} title={site.street} sub={`${site.city}, ${site.state} ${site.zip}`} />
          </div>
          <a
            href={site.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm font-bold tracking-wide text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> Call {site.phone}
          </a>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:hidden">
          <Link to="/" className="min-w-0">
            <Logo />
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
              className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-md border border-border bg-card"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden border-b border-border bg-card lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary border-primary" }}
              inactiveProps={{ className: "border-transparent hover:text-primary" }}
              className="border-b-2 py-4 font-display text-sm font-bold tracking-wide transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="ml-auto py-4 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            Serving {site.city} & nearby neighborhoods
          </span>
        </div>
      </nav>

      {open && (
        <nav className="border-b border-border bg-card px-4 pb-5 shadow-card lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3.5 font-display text-base font-bold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            {site.hours} · {site.fullAddress}
          </p>
        </nav>
      )}
    </header>
  );
}

function InfoChip({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <span className="flex min-w-0 items-center gap-3 border-l border-border pl-6">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">{icon}</span>
      <span className="flex min-w-0 flex-col">
        <span className="truncate font-display text-sm font-bold">{title}</span>
        <span className="truncate text-xs text-muted-foreground">{sub}</span>
      </span>
    </span>
  );
}
