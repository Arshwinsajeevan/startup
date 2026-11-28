import EventLandingPage from "../components/EventLandingPage";

export const metadata = {
  title: "Inauguration Digital Invitation Website | Shop & Office Opening",
  description:
    "Create a professional inauguration digital invitation website for shop openings, showrooms, clinics, and office launches in India. Includes ribbon-cutting timings, Google Maps, and digital brochure.",
  keywords: [
    "inauguration invitation website",
    "shop opening digital invitation",
    "showroom launch invitation india",
    "office opening whatsapp invite",
    "grand opening digital invite link",
  ],
  alternates: {
    canonical: "/inauguration-invitation-website",
  },
};

const features = [
  {
    title: "Ribbon-Cutting & Chief Guest Spotlight",
    description:
      "Present the auspicious opening muhurtham, ribbon-cutting time, chief guests, and host details in a clean, credible layout.",
  },
  {
    title: "Turn-by-Turn Showroom Navigation",
    description:
      "Customers, partners, and well-wishers tap once to open Google Maps directions and parking instructions straight to your storefront or office.",
  },
  {
    title: "Store Highlights & Brochure Link",
    description:
      "Showcase sneak-peek interior photos, service highlights, business hours, and a downloadable digital catalog or brochure.",
  },
  {
    title: "1-Tap Call & WhatsApp Inquiry",
    description:
      "Make it effortless for guests and early customers to contact your team or save your location.",
  },
];

const faqs = [
  {
    q: "What businesses use inauguration invitation websites?",
    a: "Retail showrooms, boutiques, clinics, dental centers, cafes, salons, offices, and franchise launches across India use InviteUs for clean, shareable opening invites.",
  },
  {
    q: "Can we include chief guest names and opening offers?",
    a: "Yes. We can highlight chief guests, ribbon-cutting schedules, launch-day offers, and even link to your product catalog or Instagram page.",
  },
  {
    q: "Can the link stay active after the grand opening?",
    a: "Yes. Your link stays live so visitors can still use it to view your opening highlights, address, and Google Maps directions.",
  },
];

export default function InaugurationInvitationPage() {
  return (
    <EventLandingPage
      badge="Shop Openings • Showrooms • Clinics • Offices"
      headlineLead="Inauguration & Launch"
      headlineAccent="Invitation Website"
      subtitle="Invite clients, partners, and well-wishers to your grand opening with a polished digital link featuring ribbon-cutting timings, chief guests, and 1-tap Google Maps directions."
      whatsappTopic="Inauguration Invitation Website"
      featuresHeading="Built for Business & Commercial Launches"
      featuresSubheading="A modern first impression for your brand from day one."
      features={features}
      faqs={faqs}
      relatedLinks={[
        { label: "Wedding Invitation Websites", href: "/wedding-invitation-website-kerala" },
        { label: "Housewarming Invitation Websites", href: "/housewarming-invitation-website" },
        { label: "Birthday Invitation Websites", href: "/birthday-invitation-website" },
      ]}
    />
  );
}

