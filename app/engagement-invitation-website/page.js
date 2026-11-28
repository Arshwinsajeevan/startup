import EventLandingPage from "../components/EventLandingPage";

export const metadata = {
  title: "Engagement & Save the Date Digital Invitation Website | InviteUs",
  description:
    "Create a custom Engagement, Ring Ceremony, or Save the Date digital invitation website in India. Share on WhatsApp with Google Maps venue navigation, couple story, and RSVP.",
  keywords: [
    "engagement invitation website",
    "save the date digital invitation",
    "ring ceremony invitation website india",
    "nishchayam digital invite",
    "madhuramveppu invitation website",
    "whatsapp engagement invitation link",
  ],
  alternates: {
    canonical: "/engagement-invitation-website",
  },
};

const features = [
  {
    title: "Save the Date & Engagement Announcements",
    description:
      "Announce your wedding date early or invite close family and friends to your Ring Ceremony, Nishchayam, or Madhuramveppu celebration.",
  },
  {
    title: "1-Tap Venue Navigation on Google Maps",
    description:
      "Share exact directions to your hotel, resort, convention center, or residence so out-of-town guests arrive without calling for routes.",
  },
  {
    title: "Couple Story & Pre-Engagement Gallery",
    description:
      "Highlight how you met, share your favorite portraits, and include a live countdown timer to the big day.",
  },
  {
    title: "Custom Romantic Music & RSVP",
    description:
      "Welcome guests with your favorite song or instrumental melody and collect attendance confirmations effortlessly.",
  },
];

const faqs = [
  {
    q: "Can we use the website as a Save the Date first and update it later?",
    a: "Yes. You can launch it as a Save the Date or Engagement invite and update the full wedding schedule and venue details later.",
  },
  {
    q: "Does it work for Ring Ceremonies, Haldi, Mehendi, and Sangeet?",
    a: "Yes. We can create a single multi-event timeline or a dedicated link specifically for your Engagement, Haldi, or Sangeet night.",
  },
  {
    q: "How fast is the website delivered?",
    a: "Your custom Engagement or Save the Date website is ready to share on WhatsApp within 24 to 48 hours.",
  },
];

export default function EngagementInvitationPage() {
  return (
    <EventLandingPage
      badge="Engagement • Ring Ceremony • Save the Date"
      headlineLead="Engagement & Save the Date"
      headlineAccent="Invitation Website"
      subtitle="Announce your commitment and invite loved ones to your engagement or ring ceremony with a clean WhatsApp link featuring venue maps, couple photos, music, and RSVP."
      whatsappTopic="Engagement / Save the Date Website"
      featuresHeading="Made for Modern Engagements & Pre-Wedding Events"
      featuresSubheading="Share your announcement cleanly across family groups and friends."
      features={features}
      faqs={faqs}
      relatedLinks={[
        { label: "Wedding Invitation Websites", href: "/wedding-invitation-website-kerala" },
        { label: "Wedding Anniversaries", href: "/anniversary-invitation-website" },
        { label: "Housewarming Invitations", href: "/housewarming-invitation-website" },
      ]}
    />
  );
}

