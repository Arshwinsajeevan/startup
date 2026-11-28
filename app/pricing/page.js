import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Digital Invitation Website Packages – Basic & Standard",
  description:
    "Simple, one-time packages for custom digital wedding, birthday, housewarming, and event invitation websites in India. Includes Google Maps, background music, photo gallery, and RSVP.",
  keywords: [
    "digital invitation website packages",
    "digital wedding invitation website",
    "motion graphics video pricing",
    "ai video creation packages",
    "logo design and branding packages",
    "poster and invitation card design",
    "business website design packages",
  ],
  alternates: {
    canonical: "/pricing",
  },
};

const faqs = [
  {
    q: "How do I share the website with my guests?",
    a: "We give you a clean, custom link (e.g., inviteus.in/rahul-anjali) with an eye-catching WhatsApp preview card. You can forward it directly to family groups, friends, or post it on Instagram and SMS.",
  },
  {
    q: "How does the Google Maps navigation work?",
    a: "We embed an interactive Google Maps location button directly for your auditorium, convention center, church, or temple. Guests simply tap the button and Google Maps starts turn-by-turn navigation on their phone.",
  },
  {
    q: "Can we add background music to the website?",
    a: "Yes! In the Standard Plan, you can choose any background music, instrumental melody, acoustic tune, or favorite song of your choice with an elegant play/pause button.",
  },
  {
    q: "How fast will my website be ready?",
    a: "Our standard turnaround time is 24 to 48 hours after you share your event details and photos. Priority 24-hour delivery is included with the Standard Plan.",
  },
  {
    q: "Can we make changes after the website is created?",
    a: "Yes! Both plans include revisions to update timings, venue details, or photos if any plans change before your big day.",
  },
];

export default function PricingPage() {
  const whatsappNumber = "917593071195";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-sm font-semibold mb-4 border border-peach-200">
              Clear & Honest Pricing
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Two Simple Packages.
              <br />
              <span className="bg-gradient-to-r from-peach-500 via-rose-500 to-gold-500 bg-clip-text text-transparent">
                Zero Hidden Costs.
              </span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Create a modern digital keepsake for your celebration. Compare our
              straightforward plans and get started in minutes.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-stretch mb-20">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Basic</h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Perfect for essential digital invitations
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    Essential
                  </span>
                </div>

                <div className="mb-8">
                  <p className="text-xs text-slate-400">
                    No subscriptions. Lifetime link access.
                  </p>
                </div>

                <ul className="space-y-3.5 mb-8 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1-Page Elegant Event Website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Event Details & Program Timings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1-Tap Google Maps Venue Navigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Live Event Countdown Timer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>WhatsApp-Ready Rich Share Preview Card</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mobile & Tablet Responsive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ready within 24–48 Hours</span>
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I want to book the Basic Plan for my event.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3.5 px-6 rounded-xl font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Choose Basic
              </a>
            </div>

            {/* Standard Plan (Popular) */}
            <div className="relative bg-gradient-to-b from-peach-500 via-rose-500 to-gold-500 p-[2px] rounded-3xl shadow-xl shadow-peach-200/50 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-peach-500 to-rose-500 shadow-md">
                  ★ Most Popular Choice
                </span>
              </div>

              <div className="bg-white rounded-[22px] p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Standard</h2>
                      <p className="text-sm text-slate-500 mt-1">
                        The complete interactive celebration experience
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-peach-100 text-peach-700">
                      Best Value
                    </span>
                  </div>

                  <div className="mb-8">
                    <p className="text-xs text-peach-600 font-medium">
                      Everything in Basic, plus premium multimedia & RSVP.
                    </p>
                  </div>

                  <ul className="space-y-3.5 mb-8 text-sm text-slate-700">
                    <li className="flex items-start gap-3 font-semibold text-slate-900">
                      <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Everything in Basic Plan +</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Photo Gallery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Background Music Player</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Story, Highlights & Milestone Timeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Interactive Online RSVP System for Guests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom Design Theme (Traditional, Modern, Minimal)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-peach-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold text-peach-600">Priority 24-Hour Express Turnaround</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I want to book the Standard Plan with photo gallery & music.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-lg shadow-peach-200 transition-all duration-300 hover:scale-[1.02]"
                >
                  Book Standard Plan →
                </a>
              </div>
            </div>
          </div>

          {/* 3rd Small Card: Creative Studio & Websites */}
          <div className="max-w-4xl mx-auto -mt-12 mb-16 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-peach-50 text-peach-600 border border-peach-200 mb-2">
                Creative Studio &amp; Web Design
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Also Offering Motion Graphics, AI Videos, Posters, Branding &amp; Websites
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Custom packages for video &amp; photo editing, function posters, invitation cards, logo-to-poster branding, plus portfolio, static, and business websites.
              </p>
            </div>
            <a
              href="#creative-packages"
              className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-peach-600 bg-peach-50 hover:bg-peach-100 border border-peach-200 transition-colors"
            >
              See Creative Packages ↓
            </a>
          </div>

          {/* Feature Comparison Table */}
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 mb-20">
            <h3
              className="text-2xl font-bold text-slate-900 mb-6 text-center"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Detailed Comparison
            </h3>
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <table className="w-full text-left text-sm text-slate-700 min-w-[480px]">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-900 font-semibold">
                    <th className="py-3 px-4">Feature</th>
                    <th className="py-3 px-4 text-center">Basic</th>
                    <th className="py-3 px-4 text-center text-peach-600">Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-3.5 px-4 font-medium">Event Schedule & Program Timings</td>
                    <td className="py-3.5 px-4 text-center">✅ Included</td>
                    <td className="py-3.5 px-4 text-center">✅ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium">Google Maps Venue Navigation</td>
                    <td className="py-3.5 px-4 text-center">✅ Included</td>
                    <td className="py-3.5 px-4 text-center">✅ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium">WhatsApp Rich Card Link</td>
                    <td className="py-3.5 px-4 text-center">✅ Included</td>
                    <td className="py-3.5 px-4 text-center">✅ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium">Live Countdown Timer</td>
                    <td className="py-3.5 px-4 text-center">✅ Included</td>
                    <td className="py-3.5 px-4 text-center">✅ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium">Photo & Moments Gallery</td>
                    <td className="py-3.5 px-4 text-center text-slate-400">❌</td>
                    <td className="py-3.5 px-4 text-center text-peach-600 font-semibold">✅ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium">Background Music Player</td>
                    <td className="py-3.5 px-4 text-center text-slate-400">❌</td>
                    <td className="py-3.5 px-4 text-center text-peach-600 font-semibold">✅ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium">Story, Highlights & Milestone Timeline</td>
                    <td className="py-3.5 px-4 text-center text-slate-400">❌</td>
                    <td className="py-3.5 px-4 text-center text-peach-600 font-semibold">✅ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium">Guest RSVP Tracking</td>
                    <td className="py-3.5 px-4 text-center text-slate-400">❌</td>
                    <td className="py-3.5 px-4 text-center text-peach-600 font-semibold">✅ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium">Delivery Time</td>
                    <td className="py-3.5 px-4 text-center">24 - 48 Hours</td>
                    <td className="py-3.5 px-4 text-center text-peach-600 font-semibold">Priority 24 Hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Creative, Video, Branding & Web Packages */}
          <div id="creative-packages" className="scroll-mt-24 max-w-4xl mx-auto mb-20">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-xs font-semibold mb-3 border border-peach-200">
                Creative Studio &amp; Branding Packages
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Video, Posters, Branding &amp; Custom Websites
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
                Custom quotes tailored to your scope, delivered for clients anywhere in the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Motion Graphics &amp; AI Videos
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Custom Quote • Worldwide Delivery
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li>• Animated invitation videos</li>
                    <li>• AI promotional &amp; ad videos</li>
                    <li>• Reels, Shorts &amp; highlight video editing</li>
                    <li>• Logo reveals &amp; title animations</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'd like a quote for Motion Graphics / AI Video / Video Editing.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-peach-50 hover:text-peach-600 transition-colors"
                >
                  Get Custom Quote →
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Posters, Cards &amp; Photo Editing
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Custom Quote • Fast Turnaround
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li>• All function posters &amp; flyers</li>
                    <li>• Digital invitation &amp; Save the Date cards</li>
                    <li>• Professional photo retouching</li>
                    <li>• Color grading &amp; album prep</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'd like a quote for Function Posters / Invitation Cards / Photo Editing.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-peach-50 hover:text-peach-600 transition-colors"
                >
                  Get Custom Quote →
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Complete Branding Package
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Custom Quote • Full Brand Kit
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li>• Custom logo design &amp; identity</li>
                    <li>• Brand posters &amp; social creatives</li>
                    <li>• Commercial brand video edits</li>
                    <li>• Launch &amp; campaign assets</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'd like a quote for Logo Design & Complete Branding.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-peach-50 hover:text-peach-600 transition-colors"
                >
                  Get Custom Quote →
                </a>
              </div>
            </div>

            {/* Secondary Web Packages */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Portfolio, Static &amp; Business Websites
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Also available on custom quote for personal portfolios, static sites, and small business websites.
                </p>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'd like a quote for a Portfolio, Static, or Business Website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-peach-300 hover:text-peach-600 transition-colors"
              >
                Request Web Quote →
              </a>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="max-w-3xl mx-auto">
            <h3
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
                >
                  <h4 className="font-semibold text-slate-900 text-base mb-2">
                    {f.q}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">Have a custom requirement or question?</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I have a question about your pricing and plans.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-md"
              >
                <span>Chat with us on WhatsApp</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

