export const site = {
  name: "Cableton Garage Door Repairs",
  shortName: "Cableton Garage Doors",
  domain: "cabletongaragedoorrepairs.site",
  tagline: "Same-day garage door repair, done right the first time.",
  phone: "(555) 240-1187",
  phoneHref: "tel:+15552401187",
  email: "service@cabletongaragedoorrepairs.site",
  street: "1420 Merrick Avenue",
  city: "Cableton",
  state: "CA",
  zip: "90248",
  hours: "Open every day, 7:00 AM – 7:00 PM",
  yearFounded: 2009,
  get fullAddress() {
    return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
  },
  get mapEmbedUrl() {
    return `https://www.google.com/maps?q=${encodeURIComponent(
      "1420 Merrick Avenue, Cableton, CA 90248",
    )}&output=embed`;
  },
} as const;

export const services = [
  {
    slug: "spring-repair",
    title: "Broken Spring Repair",
    blurb:
      "Torsion and extension springs replaced in pairs with correctly rated cycle counts, so the door balances instead of straining the opener.",
  },
  {
    slug: "opener-repair",
    title: "Opener Repair & Install",
    blurb:
      "Belt, chain, and wall-mount openers diagnosed, repaired, or replaced — including safety sensors, remotes, and keypads.",
  },
  {
    slug: "off-track",
    title: "Off-Track & Cable Repair",
    blurb:
      "Derailed doors, snapped cables, and bent tracks realigned and re-tensioned safely, with rollers and hinges checked end to end.",
  },
  {
    slug: "panel-replacement",
    title: "Panel & Section Replacement",
    blurb:
      "Dented or cracked sections swapped without replacing the entire door, color-matched wherever the manufacturer still supplies stock.",
  },
  {
    slug: "new-doors",
    title: "New Door Installation",
    blurb:
      "Insulated steel, carriage-house, and full-view aluminum doors measured, ordered, and installed with new hardware throughout.",
  },
  {
    slug: "commercial",
    title: "Commercial & Rolling Doors",
    blurb:
      "Rolling steel, sectional, and high-cycle dock doors serviced on schedules that work around your operating hours.",
  },
  {
    slug: "maintenance",
    title: "Tune-Ups & Maintenance",
    blurb:
      "A 21-point inspection: balance, tension, lubrication, fastener torque, sensor alignment, and force limits.",
  },
  {
    slug: "emergency",
    title: "Emergency Service",
    blurb:
      "Door stuck open, stuck shut, or unsafe? We prioritize security-critical calls every day of the week, 7 AM to 7 PM.",
  },
];
