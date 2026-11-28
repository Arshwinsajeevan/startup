import EventLandingPage from "../components/EventLandingPage";

export const metadata = {
  title: "Naming Ceremony, Choroonu & Baptism Digital Invitation Website",
  description:
    "Create a custom digital invitation website for Naming Ceremonies (Noolukettu / Namakarana), Choroonu (Annaprashan), Baby Showers, and Baptism / Christening in India.",
  keywords: [
    "naming ceremony invitation website",
    "noolukettu digital invitation kerala",
    "choroonu invitation website",
    "baptism digital invitation india",
    "baby shower invitation website",
    "annaprashan digital invite link",
  ],
  alternates: {
    canonical: "/naming-ceremony-invitation",
  },
};

const features = [
  {
    title: "Baby Showers, Naming, Choroonu & Baptism",
    description:
      "Tailored pastel designs for Noolukettu, Namakarana, Choroonu / Annaprashan, Valakkappu / Godh Bharai, Baptism, and First Holy Communion.",
  },
  {
    title: "Church, Temple & Hall Google Maps Pin",
    description:
      "Guests tap once to open turn-by-turn Google Maps directions directly to the church, temple, auditorium, or family home.",
  },
  {
    title: "Blessing Timings & Meal Schedule",
    description:
      "Clearly display ceremony rituals, naming or baptism timings, and family lunch or dinner details.",
  },
  {
    title: "Baby Photo Album, Lullaby & RSVP",
    description:
      "Share adorable milestone photos, gentle acoustic background music, and an easy RSVP for catering headcount.",
  },
];

const faqs = [
  {
    q: "Can we include both the church/temple ceremony and the reception hall?",
    a: "Yes. We can add separate Google Maps buttons and timings for both the morning ceremony and the afternoon reception.",
  },
  {
    q: "Is it suitable for Baptism, First Holy Communion, and Choroonu?",
    a: "Yes. We customize the wording, icons, and color palette to match Christian, Hindu, Muslim, or modern family traditions.",
  },
  {
    q: "Can guests RSVP with the number of family members attending?",
    a: "Yes. Our Standard package includes an interactive RSVP form so you can track expected guest counts easily.",
  },
];

export default function NamingCeremonyInvitationPage() {
  return (
    <EventLandingPage
      badge="Naming Ceremony • Choroonu • Baby Shower • Baptism"
      headlineLead="Baby & Naming Ceremony"
      headlineAccent="Invitation Website"
      subtitle="Invite family and friends to celebrate your little one's Noolukettu, Choroonu, Baby Shower, or Baptism with a gentle, mobile-first invitation link."
      whatsappTopic="Naming Ceremony / Baptism Website"
      featuresHeading="Thoughtful Invites for Childhood Milestones"
      featuresSubheading="Easy for elders and busy parents to open with one tap on WhatsApp."
      features={features}
      faqs={faqs}
      relatedLinks={[
        { label: "Birthday Invitations", href: "/birthday-invitation-website" },
        { label: "Half Saree Ceremony", href: "/half-saree-ceremony-invitation" },
        { label: "Housewarming Invitations", href: "/housewarming-invitation-website" },
      ]}
    />
  );
}

