import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { MapEmbed } from "@/components/site/Sections";
import { ContactForm } from "@/components/site/ContactForm";
import { site } from "@/lib/site";
import heroImg from "@/assets/hero-garage.jpg";

const title = `Contact ${site.name} | ${site.city} Garage Door Repair`;
const description = `Call ${site.phone} or send a message for garage door repair in ${site.city}. Open every day, 7:00 AM to 7:00 PM.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/contact` },
      { property: "og:image", content: `${site.url}${heroImg}` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${site.url}${heroImg}` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${site.name}`,
          mainEntity: {
            "@type": "LocalBusiness",
            name: site.name,
            telephone: site.phone,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.street,
              addressLocality: site.city,
              addressRegion: site.state,
              postalCode: site.zip,
              addressCountry: "US",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Contact us</span>
            <h1 className="mt-5 text-4xl text-on-ink sm:text-5xl">
              Talk to a technician, <span className="text-primary">not a call center.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-on-ink-muted">
              Call for anything urgent — a stuck or unsafe door gets priority. For estimates, panel orders, or
              scheduling, the form works just as well.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="grid gap-5">
              <InfoCard icon={<Phone className="h-5 w-5" />} label="Phone">
                <a href={site.phoneHref} className="font-display text-lg font-bold hover:text-primary">
                  {site.phone}
                </a>
              </InfoCard>
              <InfoCard icon={<Mail className="h-5 w-5" />} label="Email">
                <a href={`mailto:${site.email}`} className="break-all text-sm hover:text-primary">
                  {site.email}
                </a>
              </InfoCard>
              <InfoCard icon={<MapPin className="h-5 w-5" />} label="Shop address">
                <span className="text-sm">
                  {site.street}
                  <br />
                  {site.city}, {site.state} {site.zip}
                </span>
              </InfoCard>
              <InfoCard icon={<Clock className="h-5 w-5" />} label="Hours">
                <span className="text-sm">Monday – Sunday: 7:00 AM – 7:00 PM</span>
              </InfoCard>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="rounded-xl border-t-4 border-primary bg-card p-5 shadow-lift sm:p-8">
              <h2 className="font-display text-xl font-bold">Request a free estimate</h2>
              <p className="mt-1 mb-5 text-sm text-muted-foreground">
                Fields marked * are required. We reply during business hours, seven days a week.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
          <Reveal>
            <MapEmbed />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/12 text-primary">{icon}</span>
      <span className="min-w-0">
        <span className="block text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">{label}</span>
        <span className="mt-1 block">{children}</span>
      </span>
    </div>
  );
}
