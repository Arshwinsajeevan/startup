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
  title: "InviteUs – Digital Wedding & Event Invitation Websites",
  description: "Create premium, interactive digital invitation websites for your weddings, birthdays, and special events. Shareable via WhatsApp with maps, RSVP, and more.",
  keywords: ["digital wedding card", "online invitation website", "whatsapp invitation", "event website keral", "InviteUs"],
  authors: [{ name: "InviteUs" }],
  openGraph: {
    title: "InviteUs – Turn Your Special Moments Into Shareable Digital Experiences",
    description: "Elegant and modern digital invitations for your most memorable days.",
    url: "https://inviteus.in",
    siteName: "InviteUs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InviteUs – Digital Event Invitation Websites",
    description: "Transform your special events into beautiful digital memories.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
