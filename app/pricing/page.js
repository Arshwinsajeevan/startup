import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Pricing Plans – Transparent ₹1,499 & ₹1,999 Packages",
  description:
    "Simple, transparent pricing for digital wedding & event invitation websites in Kerala. Choose Basic at ₹1,499 or Standard at ₹1,999 with music, gallery, and RSVP.",
  keywords: [
    "digital wedding invitation price kerala",
    "wedding website cost kerala",
    "online invitation pricing india",
    "kerala digital card packages",
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
    a: "Yes! In the Standard Plan (₹1,999), you can choose any background music or instrumental song (like traditional Nadaswaram, romantic violin, or your favorite track) with an elegant play/pause button.",
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

  return (
    <>
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
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-slate-900">
                      ₹1,499
                    </span>
                    <span className="text-slate-500 text-sm font-medium">
                      / one-time
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">
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
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I want to book the Basic Plan (₹1,499) for my event.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3.5 px-6 rounded-xl font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Choose Basic (₹1,499)
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
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold text-slate-900">
                        ₹1,999
                      </span>
                      <span className="text-slate-500 text-sm font-medium">
                        / one-time
                      </span>
                    </div>
                    <p className="text-xs text-peach-600 font-medium mt-1.5">
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
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I want to book the Standard Plan (₹1,999) with photo gallery & music.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-lg shadow-peach-200 transition-all duration-300 hover:scale-[1.02]"
                >
                  Book Standard Plan (₹1,999) →
                </a>
              </div>
            </div>
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
                    <th className="py-3 px-4 text-center">Basic (₹1,499)</th>
                    <th className="py-3 px-4 text-center text-peach-600">Standard (₹1,999)</th>
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

