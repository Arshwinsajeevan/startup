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
    default: "InviteUs – Digital Invitation Websites for Weddings & Events in India",
    template: "%s | InviteUs",
  },
  description:
    "Create custom, interactive digital invitation websites for weddings, birthdays, housewarmings, and inaugurations in India. Share via WhatsApp with 1-tap Google Maps navigation, RSVP, background music, and photo gallery.",
  keywords: [
    "digital invitation website",
    "online invitation card india",
    "whatsapp invitation website",
    "digital wedding invitation website",
    "digital invitation maker india",
    "housewarming digital invitation",
    "birthday invitation website india",
    "inauguration invitation website",
    "online wedding card kerala",
    "save the date website",
    "interactive event invitation website",
    "motion graphics video maker",
    "ai video production",
    "video and photo editing service",
    "function poster design",
    "logo design and branding",
    "business and portfolio website design",
    "InviteUs",
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
    title: "InviteUs – Digital Invitation Websites for All Celebrations",
    description:
      "Modern, interactive digital invitation websites for weddings, birthdays, housewarmings, and inaugurations in India. Share via WhatsApp with Google Maps navigation, music, and photo gallery.",
    url: "https://inviteus.in",
    siteName: "InviteUs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "InviteUs Digital Invitation Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InviteUs – Digital Invitation Websites for All Celebrations",
    description:
      "Replace paper cards with an interactive digital invitation website on WhatsApp with Google Maps & RSVP.",
    images: ["/logo.png"],
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
    },
    {
      "@type": "FAQPage",
      "@id": "https://inviteus.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a digital invitation website by InviteUs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "InviteUs creates custom, interactive web pages for weddings, housewarmings, birthdays, and inaugurations that you can share via a single WhatsApp link with 1-tap Google Maps navigation, event schedules, photo galleries, and background music."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can InviteUs deliver my invitation website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once you share your event details and photos, your custom invitation website is designed and delivered ready to share on WhatsApp within 24 to 48 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Can guests open Google Maps directions directly from the invitation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every InviteUs website includes a 1-tap Google Maps button that launches turn-by-turn navigation straight to your auditorium, home, resort, or showroom."
          }
        }
      ]
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
