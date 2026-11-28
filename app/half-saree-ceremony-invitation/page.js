import EventLandingPage from "../components/EventLandingPage";

export const metadata = {
  title: "Half Saree Ceremony Digital Invitation Website | Langa Voni Invite",
  description:
    "Create a custom Half Saree Ceremony (Langa Voni / Davani / Ritu Kala) digital invitation website in India. Share via WhatsApp with 1-tap Google Maps directions, ceremony schedule, photo gallery, and music.",
  keywords: [
    "half saree ceremony invitation website",
    "digital half saree invitation",
    "langa voni function invitation online",
    "davani ceremony digital invite",
    "manjal neerattu vizha invitation website",
    "whatsapp half saree invitation link",
  ],
  alternates: {
    canonical: "/half-saree-ceremony-invitation",
  },
};

const features = [
  {
    title: "Traditional & Floral Aesthetic Themes",
    description:
      "Warm silk-inspired palettes, floral borders, and graceful typography tailored for Half Saree, Langa Voni, Davani, and coming-of-age ceremonies.",
  },
  {
    title: "1-Tap Auditorium & Hall Directions",
    description:
      "Guests tap once to open Google Maps turn-by-turn navigation straight to the convention center, temple hall, or home venue.",
  },
  {
    title: "Ceremony Muhurtham & Feast Schedule",
    description:
      "Clearly display blessing timings, traditional rituals, photo session hours, and lunch or dinner schedules with a live countdown.",
  },
  {
    title: "Pre-Event Photoshoot Gallery & Music",
    description:
      "Present portrait photos in full clarity alongside custom background music of your choice and an optional guest RSVP.",
  },
];

const faqs = [
  {
    q: "What details can we include on a Half Saree Ceremony website?",
    a: "You can include the celebrant's name, family welcome note, ceremony date and muhurtham timings, 1-tap Google Maps venue directions, a portrait photo gallery, and background music.",
  },
  {
    q: "Can we customize the theme for Langa Voni, Davani, or Manjal Neerattu Vizha?",
    a: "Yes. Every Half Saree invitation website is custom-styled to match your outfit colors, cultural traditions, and preferred language or phrasing.",
  },
  {
    q: "How do relatives abroad open the invitation?",
    a: "You get a single shareable link that opens instantly in any mobile browser via WhatsApp, SMS, or Instagram — no app download required.",
  },
];

export default function HalfSareeInvitationPage() {
  return (
    <EventLandingPage
      badge="Half Saree • Langa Voni • Davani • Coming-of-Age"
      headlineLead="Half Saree Ceremony"
      headlineAccent="Digital Invitation Website"
      subtitle="Celebrate this cherished milestone with a custom WhatsApp-shareable invitation website featuring ceremony timings, 1-tap Google Maps venue directions, portrait gallery, and music."
      whatsappTopic="Half Saree Ceremony Invitation Website"
      featuresHeading="Designed for Traditional Coming-of-Age Celebrations"
      featuresSubheading="A graceful digital invite your family and guests can open in one tap."
      features={features}
      faqs={faqs}
      relatedLinks={[
        { label: "All Weddings & Events", href: "/wedding-invitation-website-kerala" },
        { label: "Engagement Websites", href: "/engagement-invitation-website" },
        { label: "Naming & Baptism Invites", href: "/naming-ceremony-invitation" },
        { label: "Birthday Invitations", href: "/birthday-invitation-website" },
      ]}
    />
  );
}

