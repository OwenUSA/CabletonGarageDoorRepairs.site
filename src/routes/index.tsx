import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import heroImg from "@/assets/hero-garage.jpg";
import springImg from "@/assets/service-spring.jpg";
import installImg from "@/assets/service-install.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import { Reveal } from "@/components/site/Reveal";
import { EstimateSection, MapEmbed } from "@/components/site/Sections";
import { services, site } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = `Garage Door Repair in ${site.city} | ${site.name}`;
const description = `Broken springs, dead openers, off-track doors and new installs in ${site.city}. Open every day 7AM–7PM. Call ${site.phone} for a free estimate.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/` },
      { property: "og:image", content: `${site.url}${heroImg}` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${site.url}${heroImg}` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Garage door repair and installation",
          provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone },
          areaServed: { "@type": "City", name: site.city },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Garage door services",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
            })),
          },
        }),
      },
    ],
  }),
  component: Home,
});

const trust = [
  { icon: Clock, title: "Open 7 days", sub: "7:00 AM – 7:00 PM daily" },
  { icon: Truck, title: "Stocked trucks", sub: "Most repairs same visit" },
  { icon: BadgeCheck, title: "Warrantied parts", sub: "Springs, rollers, openers" },
  { icon: ShieldCheck, title: "Our own crews", sub: "Never subcontracted" },
];

const reasons = [
  {
    n: "01",
    title: "One crew, start to finish",
    body: "The technician who diagnoses your door is the one who fixes it. No handoffs, no second trip charge to finish what was started.",
  },
  {
    n: "02",
    title: "Prices before we start",
    body: "You approve a written price for parts and labor before a single bolt comes off. No change-orders invented halfway through.",
  },
  {
    n: "03",
    title: "Parts that outlast the fix",
    body: "High-cycle springs, sealed-bearing rollers, and name-brand openers — not the cheapest bin part that fails again next winter.",
  },
  {
    n: "04",
    title: "Safety checked every visit",
    body: "Balance, cable tension, force limits, and photo-eye alignment get tested on every call, even when you only booked a small repair.",
  },
];

const steps = [
  { title: "Call or send the form", body: "Tell us what the door is doing and where you are. We book a window that works." },
  { title: "On-site diagnosis", body: "We test balance, springs, cables, and the opener, then show you exactly what failed." },
  { title: "Approve a fixed price", body: "You get a written scope and price. Nothing moves forward until you say go." },
  { title: "Repair and safety test", body: "We complete the work, cycle the door, and walk you through the maintenance." },
];

const numbers = [
  { value: "15+", label: "Years serving the area" },
  { value: "7", label: "Days open per week" },
  { value: "12h", label: "Daily service window" },
  { value: "1yr+", label: "Workmanship warranty" },
];

const faqs = [
  {
    q: "How fast can you get to my house?",
    a: "Most calls placed before mid-afternoon are handled the same day. Doors that are stuck open, off-track, or blocking a vehicle get priority scheduling.",
  },
  {
    q: "My spring broke — can I still use the door?",
    a: "Don't. A door with a broken torsion spring weighs hundreds of pounds unassisted and can damage the opener or injure someone. Leave it down and call us.",
  },
  {
    q: "Do you repair the opener or replace the whole door?",
    a: "Whichever actually solves the problem. Openers, springs, cables, rollers, and single panels are all repairable. We only recommend a full replacement when the door is beyond safe service.",
  },
  {
    q: "Do you work on commercial and rolling steel doors?",
    a: "Yes — sectional, rolling steel, and dock doors, scheduled around your operating hours so your bays keep running.",
  },
  {
    q: "What does a service call cost?",
    a: "You get a firm price after diagnosis and before any work begins. If you decide not to proceed, you owe nothing beyond the quoted diagnostic.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt={`Modern garage door serviced by ${site.name} in ${site.city}`}
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/40" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
              Locally owned · {site.city}
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] text-on-ink sm:text-5xl lg:text-6xl">
              The garage door team {site.city} calls when the door{" "}
              <span className="text-primary italic">won't budge.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-ink-muted sm:text-lg">
              Broken springs, dead openers, doors off their tracks, and full replacements — repaired by our own
              technicians with stocked trucks and honest, up-front pricing. Every day, 7AM to 7PM.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm font-bold tracking-wide text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Call {site.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-7 py-4 font-display text-sm font-bold tracking-wide text-on-ink backdrop-blur transition-colors hover:bg-white/20"
              >
                Schedule a free estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
              {numbers.map((n) => (
                <div key={n.label}>
                  <dt className="font-display text-2xl font-extrabold text-primary sm:text-3xl">{n.value}</dt>
                  <dd className="mt-1 text-[11px] font-semibold tracking-[0.12em] text-on-ink-muted uppercase">
                    {n.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <Reveal
              key={t.title}
              delay={i * 70}
              className="flex items-center gap-4 border-b border-border px-6 py-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
            >
              <t.icon className="h-6 w-6 shrink-0 text-primary" />
              <span className="min-w-0">
                <span className="block font-display text-sm font-bold">{t.title}</span>
                <span className="block text-xs text-muted-foreground">{t.sub}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <span className="eyebrow">Our specialty</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">One team for every kind of door.</h2>
            </div>
            <Link
              to="/services"
              className="font-display text-sm font-bold text-foreground underline decoration-primary decoration-2 underline-offset-8"
            >
              See all services →
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal className="group relative isolate min-h-[420px] overflow-hidden rounded-xl lg:min-h-[560px]">
              <img
                src={springImg}
                alt="Technician replacing a garage door torsion spring"
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
              <span className="absolute top-6 left-6 rounded-md bg-primary px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] text-primary-foreground uppercase">
                ★ Most requested
              </span>
              <div className="flex h-full flex-col justify-end p-6 sm:p-9">
                <h3 className="text-2xl text-on-ink sm:text-3xl">Springs, cables & emergency repair</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-on-ink-muted">
                  The failures that strand a car in the driveway. Torsion and extension springs replaced in pairs,
                  cables re-tensioned, tracks realigned, and the whole system re-balanced before we leave.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={site.phoneHref}
                    className="rounded-md bg-primary px-5 py-3 font-display text-xs font-bold tracking-wide text-primary-foreground"
                  >
                    Call now
                  </a>
                  <Link
                    to="/services"
                    className="rounded-md border border-white/25 px-5 py-3 font-display text-xs font-bold tracking-wide text-on-ink"
                  >
                    Repair services →
                  </Link>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6">
              {[
                {
                  img: installImg,
                  title: "New door installation",
                  body: "Insulated steel, carriage-house, and full-view aluminum doors measured, ordered, and installed with fresh hardware end to end.",
                },
                {
                  img: commercialImg,
                  title: "Commercial & rolling doors",
                  body: "Rolling steel, sectional, and dock doors serviced on a schedule that works around your operating hours.",
                },
              ].map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 120}
                  className="group relative isolate min-h-[260px] overflow-hidden rounded-xl"
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/20" />
                  <div className="flex h-full flex-col justify-end p-6 sm:p-8">
                    <h3 className="text-xl text-on-ink sm:text-2xl">{c.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-on-ink-muted">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SPLIT */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src={springImg}
              alt="Garage door technician at work"
              loading="lazy"
              width={1024}
              height={768}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-ink/35" />
          </div>
          <div className="px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
            <Reveal>
              <span className="eyebrow">Why us</span>
              <h2 className="mt-5 max-w-xl text-3xl text-on-ink sm:text-4xl lg:text-5xl">
                Four things you won't get from a <span className="text-primary">dispatch call center.</span>
              </h2>
            </Reveal>
            <ul className="mt-10 max-w-xl">
              {reasons.map((r, i) => (
                <Reveal
                  key={r.n}
                  as="li"
                  delay={i * 90}
                  className="flex gap-6 border-t border-white/10 py-6 first:border-t-0 first:pt-0"
                >
                  <span className="font-display text-lg font-extrabold text-white/25">{r.n}</span>
                  <span>
                    <span className="block font-display text-lg font-bold text-on-ink">{r.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-on-ink-muted">{r.body}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-display text-sm font-bold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call {site.phone}
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3.5 font-display text-sm font-bold text-on-ink"
              >
                About our shop
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Four steps, no surprises.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.title}
                as="li"
                delay={i * 90}
                className="rounded-xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-primary/12 font-display text-base font-extrabold text-primary">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Everything we handle</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Repairs, openers, and full installations.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={(i % 4) * 80}
                className="group h-full rounded-xl border-t-2 border-primary bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <Wrench className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAP / AREA */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Find us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">One shop, one crew, one neighborhood.</h2>
            <p className="mt-5 text-muted-foreground">
              We run a single location in {site.city} — that's how trucks stay stocked and appointment windows stay
              short. Stop by the shop or have us come to the door.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block font-display font-bold">{site.street}</span>
                  <span className="text-sm text-muted-foreground">
                    {site.city}, {site.state} {site.zip}
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block font-display font-bold">Monday – Sunday</span>
                  <span className="text-sm text-muted-foreground">7:00 AM – 7:00 PM</span>
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href={site.phoneHref} className="font-display font-bold hover:text-primary">
                  {site.phone}
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <MapEmbed />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal className="text-center">
            <span className="eyebrow">Straight answers</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Before you book anything.</h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base font-bold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <EstimateSection />
    </>
  );
}
