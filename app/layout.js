import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://inviteus.in"),
  title: {
    default: "InviteUs – Digital Invitation Websites for Weddings, Birthdays & Events in Kerala",
    template: "%s | InviteUs",
  },
  description:
    "Create premium, interactive digital invitation websites for weddings, birthdays, housewarmings, inaugurations, and celebrations. Share on WhatsApp with Google Maps navigation, RSVP, audio music player, and countdown timer.",
  keywords: [
    "digital invitation website kerala",
    "online invitation card kerala",
    "digital wedding invitation website kerala",
    "housewarming digital invitation kerala",
    "inauguration invitation website",
    "birthday invitation website india",
    "whatsapp invitation website",
    "kerala event website maker",
    "save the date website kerala",
    "interactive event invitation website",
    "InviteUs",
    "inviteus kerala",
  ],
  authors: [{ name: "InviteUs", url: "https://inviteus.in" }],
  creator: "InviteUs",
  publisher: "InviteUs",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "InviteUs – Kerala's Premier Digital Invitation Websites",
    description:
      "Modern, interactive digital invitation websites for weddings, birthdays, housewarmings, and celebrations. Share via WhatsApp with Google Maps navigation, music, and photo gallery.",
    url: "https://inviteus.in",
    siteName: "InviteUs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InviteUs – Digital Invitation Websites for All Celebrations",
    description:
      "Ditch paper cards! Send stunning interactive invitation websites on WhatsApp with Google Maps & RSVP.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://inviteus.in/#organization",
      "name": "InviteUs",
      "url": "https://inviteus.in",
      "logo": "https://inviteus.in/logo.png",
      "sameAs": ["https://www.instagram.com/inviteus.in/"],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-75930-71195",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "ml"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://inviteus.in/#website",
      "url": "https://inviteus.in",
      "name": "InviteUs",
      "publisher": { "@id": "https://inviteus.in/#organization" }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://inviteus.in/#service",
      "name": "InviteUs Digital Invitations",
      "image": "https://inviteus.in/logo.png",
      "telephone": "+91-75930-71195",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.8505",
        "longitude": "76.2711"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
