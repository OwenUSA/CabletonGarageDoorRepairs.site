import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, MapPin, Timer, Wrench } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EstimateSection } from "@/components/site/Sections";
import { site } from "@/lib/site";
import commercialImg from "@/assets/service-commercial.jpg";

const title = `About ${site.name} | Local Garage Door Shop in ${site.city}`;
const description = `Meet the ${site.city} garage door crew: one shop, our own technicians, stocked trucks, and up-front pricing. Open every day 7AM–7PM.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/about` },
      { property: "og:image", content: `${site.url}${commercialImg}` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${site.url}${commercialImg}` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/about` }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Wrench,
    title: "Technicians, not salespeople",
    body: "Nobody here works on commission for selling you a door you don't need. The fix that solves the problem is the fix we quote.",
  },
  {
    icon: Timer,
    title: "Windows we actually keep",
    body: "One location and a tight service radius means we show up inside the window and call ahead when we're on the way.",
  },
  {
    icon: HeartHandshake,
    title: "Neighbors, not accounts",
    body: "We live and work in the same ZIP codes we serve. Reputation here travels down the street faster than any ad could.",
  },
  {
    icon: MapPin,
    title: "One shop, fully stocked",
    body: "Springs, rollers, cables, hinges, and common opener parts ride on every truck, so most repairs finish on the first visit.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-ink py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">About us</span>
            <h1 className="mt-5 text-4xl text-on-ink sm:text-5xl">
              A {site.city} garage door shop built on <span className="text-primary">repeat neighbors.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-on-ink-muted">
              {site.name} started with one truck, one technician, and a simple rule: quote the real fix, show the
              customer what failed, and stand behind the work. Fifteen-plus years later that rule still runs the shop.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Why we stayed small on purpose.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Plenty of garage door "companies" are call centers that sell your address to whoever is closest. We
                went the other way: one location in {site.city}, our own employees, and a service radius small enough
                that we can be back tomorrow if something isn't right.
              </p>
              <p>
                That means the person who answers the phone knows the truck inventory, and the technician at your door
                has seen your neighborhood's doors — the same builders, the same hardware, the same failure patterns.
              </p>
              <p>
                We work seven days a week, 7 AM to 7 PM, because doors don't break on a business-hours schedule. If it's
                a safety issue, say so when you call and we'll move you up the list.
              </p>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <img
              src={commercialImg}
              alt="Commercial rolling steel doors serviced by our team"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">The standards we don't bend.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 2) * 90}
                className="rounded-xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
              >
                <v.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EstimateSection />
    </>
  );
}
