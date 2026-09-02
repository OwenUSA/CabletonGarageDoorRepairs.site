import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

const title = `Privacy Policy | ${site.name}`;
const description = `How ${site.name} collects, uses, and protects the information you share when requesting garage door service in ${site.city}.`;

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information we collect",
    p: [
      "When you call us or submit a form on this website we collect the information you choose to provide: your name, phone number, email address, service address, the type of service you need, and any details you include in your message.",
      "We also collect basic technical information automatically, such as your browser type, device type, approximate region, and the pages you viewed. This is used to keep the site working and to understand which pages are useful.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "We use your details to respond to your request, schedule and perform service, prepare estimates and invoices, order parts, and follow up about work we performed for you.",
      "We may contact you by phone, text, or email about your specific request. We do not sell your information, and we do not share it with lead-generation networks.",
    ],
  },
  {
    h: "Sharing with third parties",
    p: [
      "We share information only with service providers who help us operate — for example email hosting, website hosting, and mapping providers embedded on this site — and only to the extent needed to deliver those functions. We may also disclose information when required by law.",
    ],
  },
  {
    h: "Cookies and embedded content",
    p: [
      "This site may use essential cookies for basic functionality. Pages that embed a map from a third-party mapping provider may set cookies from that provider; their handling of that data is governed by their own privacy policy.",
    ],
  },
  {
    h: "Data retention and security",
    p: [
      "We keep customer records for as long as needed to service warranties, meet accounting obligations, and support future work on the same property. We use reasonable administrative and technical safeguards to protect the information we hold, though no method of transmission over the internet is completely secure.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "You can ask us to correct or delete the personal information we hold about you, or ask us to stop contacting you, by emailing us. We will respond within a reasonable timeframe. You can also opt out of follow-up messages at any time by replying to any message and telling us to stop.",
    ],
  },
  {
    h: "Children's privacy",
    p: ["This website is not directed to children under 13, and we do not knowingly collect information from them."],
  },
  {
    h: "Changes to this policy",
    p: [
      "We may update this policy as our practices or applicable law change. The revision date below reflects the most recent update.",
    ],
  },
];

function PrivacyPage() {
  return (
    <>
      <section className="bg-ink py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 text-4xl text-on-ink sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-on-ink-muted">
            Last updated: January 2026 · {site.name}, {site.fullAddress}
          </p>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-xl font-bold">{s.h}</h2>
                {s.p.map((para) => (
                  <p key={para} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
            ))}
            <div>
              <h2 className="font-display text-xl font-bold">Contact us</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Questions about this policy? Email{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-foreground">
                  {site.email}
                </a>{" "}
                or call{" "}
                <a href={site.phoneHref} className="font-semibold text-foreground">
                  {site.phone}
                </a>
                , any day between 7:00 AM and 7:00 PM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
