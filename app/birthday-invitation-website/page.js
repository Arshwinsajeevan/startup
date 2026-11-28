import EventLandingPage from "../components/EventLandingPage";

export const metadata = {
  title: "Online Birthday Invitation Website | Digital Birthday Invite India",
  description:
    "Create a custom online birthday invitation website for 1st birthdays, kids parties, or 50th/60th milestone jubilees. Share on WhatsApp with Google Maps venue route, music, and photo timeline.",
  keywords: [
    "online birthday invitation website",
    "digital birthday invitation india",
    "1st birthday invitation website",
    "whatsapp birthday invite link",
    "milestone birthday invitation website",
  ],
  alternates: {
    canonical: "/birthday-invitation-website",
  },
};

const features = [
  {
    title: "Playful Kids or Elegant Milestone Themes",
    description:
      "From colorful 1st birthday party themes to graceful 50th, 60th (Shashtipoorthi), and 70th (Saptathi) celebrations tailored to the guest of honor.",
  },
  {
    title: "Party Hall & Resort Navigation",
    description:
      "Guests tap once to open Google Maps driving directions to your banquet hall, restaurant, resort, or home party.",
  },
  {
    title: "Cake-Cutting Schedule & Countdown",
    description:
      "Display the party start time, cake-cutting moment, games, dinner timings, and a live countdown timer.",
  },
  {
    title: "Photo Timeline, Music & RSVP",
    description:
      "Showcase milestone photos from babyhood or past decades, play any favorite song, and track guest RSVPs for catering.",
  },
];

const faqs = [
  {
    q: "Can we make a website for a 1st birthday or milestone 60th birthday?",
    a: "Yes. We customize the colors, typography, and layout for any age — playful themes for kids' birthdays and classic themes for milestone jubilees.",
  },
  {
    q: "Can guests confirm how many people are attending?",
    a: "Yes. With our Standard package, guests can submit their RSVP directly from the invitation link so you can plan food and seating easily.",
  },
  {
    q: "Can we add any birthday song or background music?",
    a: "Yes. You can pick any song, acoustic track, or instrumental melody to welcome guests when they open your birthday website.",
  },
];

export default function BirthdayInvitationPage() {
  return (
    <EventLandingPage
      badge="1st Birthdays • Kids Parties • Milestone Jubilees"
      headlineLead="Online Birthday"
      headlineAccent="Invitation Website"
      subtitle="Skip static image forwards. Invite friends and family with an interactive birthday link featuring venue directions on Google Maps, cake-cutting timings, music, and milestone photos."
      whatsappTopic="Birthday Invitation Website"
      featuresHeading="Everything for a Memorable Birthday Invite"
      featuresSubheading="One link that works effortlessly on every phone."
      features={features}
      faqs={faqs}
      relatedLinks={[
        { label: "Wedding Invitation Websites", href: "/wedding-invitation-website-kerala" },
        { label: "Housewarming Invitation Websites", href: "/housewarming-invitation-website" },
        { label: "Inauguration Invitation Websites", href: "/inauguration-invitation-website" },
      ]}
    />
  );
}

