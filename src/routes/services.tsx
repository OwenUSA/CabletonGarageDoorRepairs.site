import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EstimateSection } from "@/components/site/Sections";
import { services, site } from "@/lib/site";
import installImg from "@/assets/service-install.jpg";

const title = `Garage Door Services in ${site.city} | ${site.name}`;
const description = `Spring replacement, opener repair, off-track doors, panel swaps, commercial rolling doors and new installations in ${site.city}. Open daily 7AM–7PM.`;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/services` },
      { property: "og:image", content: `${site.url}${installImg}` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${site.url}${installImg}` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const included = [
  "21-point safety and balance inspection on every call",
  "Written price approved before any work starts",
  "High-cycle springs and sealed-bearing rollers",
  "Opener force, travel, and photo-eye calibration",
  "Cleanup and haul-away of replaced parts",
  "Workmanship warranty on labor and parts we supply",
];

function ServicesPage() {
  return (
    <>
      <section className="bg-ink py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Services</span>
            <h1 className="mt-5 text-4xl text-on-ink sm:text-5xl">
              Every garage door problem, <span className="text-primary">handled in-house.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-on-ink-muted">
              Residential and commercial work across {site.city}. Same crews, same standards, whether it's a snapped
              spring at 7 AM or a full replacement door scheduled for next week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={(i % 2) * 90}
              className="scroll-mt-32 rounded-xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <div id={s.slug} />
              <h2 className="font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              <a
                href={site.phoneHref}
                className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-primary"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={installImg}
              alt="Newly installed full-view aluminum garage door"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={110}>
            <span className="eyebrow">What's always included</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">The parts other companies charge extra for.</h2>
            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <EstimateSection />
    </>
  );
}
