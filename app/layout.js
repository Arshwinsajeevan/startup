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
  description:
    "Create beautiful, shareable digital invitation websites for weddings, birthdays, and celebrations. Replace traditional cards with interactive event pages your guests will love.",
  keywords: [
    "digital wedding invitation website",
    "online event invitation",
    "wedding website India",
    "digital invitation card",
    "event website creator",
    "online wedding card",
    "shareable wedding invite",
  ],
  authors: [{ name: "InviteUs" }],
  openGraph: {
    title: "InviteUs – Turn Your Special Moments Into Shareable Digital Experiences",
    description:
      "Beautiful, interactive event websites for weddings, birthdays & celebrations. Share a single link instead of traditional invitation cards.",
    url: "https://inviteus.in",
    siteName: "InviteUs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InviteUs – Digital Event Invitation Websites",
    description:
      "Create stunning digital invitation websites for your special events. Share with a single link.",
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
