import EventLandingPage from "../components/EventLandingPage";

export const metadata = {
  title: "Housewarming Digital Invitation Website | Grihapravesham Invite",
  description:
    "Create a custom housewarming (Grihapravesham / Kudiveppu) digital invitation website in India. Share on WhatsApp with 1-tap Google Maps pin to your new home, pooja timings, and photo gallery.",
  keywords: [
    "housewarming digital invitation",
    "grihapravesham invitation website",
    "online housewarming invitation card india",
    "kudiveppu digital invitation kerala",
    "whatsapp housewarming invite link",
  ],
  alternates: {
    canonical: "/housewarming-invitation-website",
  },
};

const features = [
  {
    title: "Exact Google Maps Pin to Your New Home",
    description:
      "New residential areas and apartments can be hard to find. Guests tap one button to start Google Maps turn-by-turn navigation straight to your doorstep.",
  },
  {
    title: "Pooja & Family Feast Timings",
    description:
      "Clearly display Paalukaachalu, Ganapathi Homam, Gruhapravesha muhurtham, and lunch or dinner timings so guests arrive comfortably.",
  },
  {
    title: "New Home Photo Preview & Gallery",
    description:
      "Share warm photos of your family and new home in crisp quality without WhatsApp image compression.",
  },
  {
    title: "Custom Music & Parking Guidance",
    description:
      "Welcome relatives with soothing instrumental or devotional music of your choice and include clear parking or gate notes.",
  },
];

const faqs = [
  {
    q: "What details can we include on a housewarming invitation website?",
    a: "You can include host names, Grihapravesham / Kudiveppu date, pooja and feast timings, a 1-tap Google Maps pin to your new home, family photos, parking instructions, and background music.",
  },
  {
    q: "How do guests open the location of our new home?",
    a: "We embed your exact Google Maps coordinates or Plus Code so guests simply tap 'Get Directions' and navigate directly to your house without calling for landmarks.",
  },
  {
    q: "How long does it take to prepare the housewarming invite?",
    a: "Once you send your housewarming details and photos on WhatsApp, your custom invitation website is ready within 24 to 48 hours.",
  },
];

export default function HousewarmingInvitationPage() {
  return (
    <EventLandingPage
      badge="Grihapravesham • Kudiveppu • New Home"
      headlineLead="Housewarming Digital"
      headlineAccent="Invitation Website"
      subtitle="Welcome family, friends, and neighbors to your new home with a clean WhatsApp-ready website featuring your exact Google Maps location pin, pooja timings, and feast schedule."
      whatsappTopic="Housewarming Invitation Website"
      featuresHeading="Made for Seamless New Home Invites"
      featuresSubheading="No more sharing pinned locations separately in ten different chats."
      features={features}
      faqs={faqs}
      relatedLinks={[
        { label: "Wedding Invitation Websites", href: "/wedding-invitation-website-kerala" },
        { label: "Birthday Invitation Websites", href: "/birthday-invitation-website" },
        { label: "Inauguration Invitation Websites", href: "/inauguration-invitation-website" },
      ]}
    />
  );
}

