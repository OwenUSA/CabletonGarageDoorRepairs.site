import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border shadow-card ${className}`}>
      <iframe
        title={`Map showing ${site.name} in ${site.city}`}
        src={site.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[320px] w-full border-0 sm:h-[420px]"
      />
    </div>
  );
}

export function EstimateSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <span className="eyebrow">Free estimate</span>
          <h2 className="mt-5 text-3xl text-on-ink sm:text-4xl lg:text-5xl">
            Tell us what your door is doing.
          </h2>
          <p className="mt-5 max-w-lg text-on-ink-muted">
            Repair, replacement, or a quick tune-up — send the details and a {site.shortName} technician gets back to
            you with a straight answer and a real price. No pressure, no upsell scripts.
          </p>
          <ul className="mt-8 space-y-4 text-on-ink-muted">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <a href={site.phoneHref} className="font-display text-lg font-bold text-on-ink">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <a href={`mailto:${site.email}`} className="break-all">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{site.hours}</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{site.fullAddress}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-xl border-t-4 border-primary bg-card p-5 shadow-lift sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
