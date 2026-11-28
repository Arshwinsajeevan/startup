import EventLandingPage from "../components/EventLandingPage";

export const metadata = {
  title: "Wedding Anniversary Digital Invitation Website | Silver & Golden Jubilee",
  description:
    "Create a custom wedding anniversary digital invitation website for 1st, 10th, 25th Silver, or 50th Golden Jubilee celebrations in India. Includes photo timeline, Google Maps, music, and RSVP.",
  keywords: [
    "wedding anniversary invitation website",
    "25th anniversary digital invitation",
    "50th golden jubilee invitation online",
    "silver jubilee whatsapp invitation",
    "anniversary party invite link india",
  ],
  alternates: {
    canonical: "/anniversary-invitation-website",
  },
};

const features = [
  {
    title: "Decades of Love Photo Timeline",
    description:
      "Celebrate 10, 25, or 50 years together by showcasing cherished family photos from the wedding day through the years.",
  },
  {
    title: "Banquet & Dinner Venue Navigation",
    description:
      "Guests tap once to open Google Maps directions straight to your hotel banquet hall, club, resort, or home celebration.",
  },
  {
    title: "Reception Schedule & Dress Code",
    description:
      "Share vow renewal timings, cake cutting, dinner schedule, and optional theme or dress code notes clearly.",
  },
  {
    title: "Favorite Song & Guest Wishes",
    description:
      "Greet relatives with a meaningful song from your journey and let guests confirm attendance via online RSVP.",
  },
];

const faqs = [
  {
    q: "Can children surprise their parents with a 25th or 50th anniversary website?",
    a: "Yes. Many families book InviteUs as a surprise Silver or Golden Jubilee gift — just share old and recent family photos and we craft the timeline.",
  },
  {
    q: "Does the website stay online after the anniversary dinner?",
    a: "Yes. It stays live as a permanent digital memory album that family members around the world can revisit anytime.",
  },
  {
    q: "Can we also use this for Shashtipoorthi (60th) or Saptathi (70th) celebrations?",
    a: "Yes. We customize the layout for milestone wedding anniversaries as well as 60th, 70th, and 80th family celebrations.",
  },
];

export default function AnniversaryInvitationPage() {
  return (
    <EventLandingPage
      badge="Silver 25th • Golden 50th • Milestone Anniversaries"
      headlineLead="Wedding Anniversary"
      headlineAccent="Invitation Website"
      subtitle="Honor years of togetherness with a warm, shareable invitation website featuring your family photo timeline, banquet directions on Google Maps, music, and RSVP."
      whatsappTopic="Wedding Anniversary Website"
      featuresHeading="Crafted for Milestone Family Celebrations"
      featuresSubheading="A digital keepsake your whole family can share and treasure."
      features={features}
      faqs={faqs}
      relatedLinks={[
        { label: "All Weddings & Events", href: "/wedding-invitation-website-kerala" },
        { label: "Engagement Websites", href: "/engagement-invitation-website" },
        { label: "Birthday Invitations", href: "/birthday-invitation-website" },
      ]}
    />
  );
}

