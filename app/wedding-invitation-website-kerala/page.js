import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Digital Wedding & Event Invitation Websites in Kerala | InviteUs",
  description:
    "Create clean, interactive digital invitation websites for weddings, housewarmings, birthdays, and store openings in Kerala & India. 1-tap Google Maps directions, schedule, music, and photo gallery. Plans from ₹1,499.",
  keywords: [
    "digital wedding invitation website kerala",
    "online wedding card kerala",
    "kerala marriage invitation website",
    "whatsapp wedding invitation kerala",
    "kerala wedding website maker",
    "wedding website with google map kerala",
    "kerala hindu wedding invitation online",
    "kerala christian wedding website",
    "muslim nikah invitation website kerala",
    "housewarming digital invitation kerala",
    "birthday invitation website india",
    "inauguration invitation website",
    "online invitation card maker",
    "whatsapp invitation website",
  ],
  alternates: {
    canonical: "/wedding-invitation-website-kerala",
  },
};

const eventTypes = [
  {
    title: "Weddings & Engagements",
    description:
      "All your wedding details in one link: exact auditorium directions on Google Maps, muhurtham and reception timings, your photo story, and a background song to welcome guests.",
    highlights: ["Auditorium Navigation", "Muhurtham & Reception Times", "Photo Story", "Custom Music", "RSVP"],
    iconBg: "bg-peach-50 text-peach-600 border-peach-100",
    cardBorder: "border-slate-200 hover:border-peach-300",
    whatsappTopic: "Wedding & Engagement Website",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Housewarmings (Grihapravesham)",
    description:
      "Welcoming family and neighbors to your new home? Share the exact house location on Google Maps, pooja and meal timings, and a few preview photos of the new place.",
    highlights: ["Exact House GPS Pin", "Pooja Timings", "Lunch / Dinner Schedule", "Parking Directions"],
    iconBg: "bg-amber-50 text-amber-700 border-amber-100",
    cardBorder: "border-slate-200 hover:border-amber-300",
    whatsappTopic: "Housewarming Invitation Website",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Store & Office Openings",
    description:
      "Opening a new showroom, clinic, studio, or branch? Send guests the ribbon-cutting time, chief guests, turn-by-turn driving route, parking instructions, and a digital brochure link.",
    highlights: ["Ribbon-Cutting Time", "Showroom Navigation", "Interior Photos", "Brochure Download"],
    iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    cardBorder: "border-slate-200 hover:border-emerald-300",
    whatsappTopic: "Store & Office Opening Website",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Birthdays & Milestone Parties",
    description:
      "Whether it is a child's 1st birthday party or a 60th jubilee celebration, give your guests the resort or party hall location, cake-cutting time, and a milestone photo album.",
    highlights: ["Venue Directions", "Cake-Cutting Time", "Celebration Music", "Memory Album"],
    iconBg: "bg-rose-50 text-rose-700 border-rose-100",
    cardBorder: "border-slate-200 hover:border-rose-300",
    whatsappTopic: "Birthday Party Website",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm-8 4h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Wedding Anniversaries",
    description:
      "Celebrating 10, 25, or 50 years of marriage. Share banquet hall directions, dinner reception times, and a timeline of your favorite photos together.",
    highlights: ["Banquet Hall Route", "Dinner Reception Time", "Story Timeline", "Guest Wishes"],
    iconBg: "bg-purple-50 text-purple-700 border-purple-100",
    cardBorder: "border-slate-200 hover:border-purple-300",
    whatsappTopic: "Anniversary Celebration Website",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
      </svg>
    ),
  },
  {
    title: "Baby Showers & Naming Ceremonies",
    description:
      "Invite close family to celebrate your newborn. Soft pastel designs with ceremony timings, home or hall directions, and a guest count RSVP for catering.",
    highlights: ["Ceremony Timings", "Venue Directions", "Acoustic Melody", "Guest Count RSVP"],
    iconBg: "bg-sky-50 text-sky-700 border-sky-100",
    cardBorder: "border-slate-200 hover:border-sky-300",
    whatsappTopic: "Baby Shower / Naming Ceremony Website",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "1-Tap Google Maps Navigation",
    description:
      "Guests tap one button and Google Maps starts driving directions straight to the hall, house, or showroom. You avoid answering 50 calls on the event morning asking for directions.",
    icon: (
      <svg className="w-6 h-6 text-peach-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Clear Ceremony Timings",
    description:
      "Muhurtham, ribbon-cutting, pooja, or cake-cutting — the program schedule is laid out clearly with a countdown so guests arrive on time.",
    icon: (
      <svg className="w-6 h-6 text-peach-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Music of Your Choice",
    description:
      "Pick any instrumental track, acoustic melody, or favorite celebration song with a simple play/pause button to greet guests when they open your link.",
    icon: (
      <svg className="w-6 h-6 text-peach-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: "A Keepsake That Lasts",
    description:
      "Paper cards end up in the bin after the celebration. Your website stays alive online as a digital memory you and your family can revisit years later.",
    icon: (
      <svg className="w-6 h-6 text-peach-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function WeddingsAndEventsPage() {
  const whatsappNumber = "917593071195";

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-xs font-semibold mb-4 border border-peach-200">
              Weddings, Housewarmings, Openings & Celebrations
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              One Simple Link for
              <br />
              <span className="bg-gradient-to-r from-peach-500 via-rose-500 to-gold-500 bg-clip-text text-transparent">
                Your Special Day
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Instead of passing around paper cards or PDFs that get lost in WhatsApp chats, give your guests a clean website with venue directions, event timings, photos, and music.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'd like to create an event invitation website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-md shadow-peach-200/50 transition-all hover:scale-105 text-sm"
              >
                Chat with Us on WhatsApp →
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Basic Plan ₹1,499 • Standard Plan ₹1,999 • Ready in 24 to 48 Hours
            </p>
          </div>

          {/* Event Categories */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                What We Create
              </h2>
              <p className="text-slate-500 mt-2 max-w-lg mx-auto text-sm sm:text-base">
                Every celebration is different. We tailor each website design, schedule layout, and music track to match your occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {eventTypes.map((evt) => (
                <div
                  key={evt.title}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border ${evt.cardBorder} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 select-none ${evt.iconBg}`}>
                      {evt.icon}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {evt.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {evt.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {evt.highlights.map((h) => (
                          <span
                            key={h}
                            className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-100"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi InviteUs! I'm planning a ${evt.whatsappTopic} and would like to see design options.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-peach-50 hover:text-peach-600 border border-slate-200 hover:border-peach-200 transition-colors"
                  >
                    Ask About This on WhatsApp →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Why a Website Works Better
              </h2>
              <p className="text-slate-500 mt-2 max-w-md mx-auto text-sm sm:text-base">
                Simple, thoughtful details that make attending easy for your guests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-peach-200 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-peach-50 flex items-center justify-center border border-peach-100 mb-4">
                    {r.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Simple Pricing Banner */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Transparent Pricing for Any Event
            </h2>
            <p className="text-slate-600 max-w-lg mx-auto mb-6 text-sm sm:text-base">
              Pay once. Your website is ready to share on WhatsApp within 24 to 48 hours. No subscriptions, no ads.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8 text-left">
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Basic</span>
                <div className="text-2xl font-bold text-slate-900 my-1">₹1,499</div>
                <p className="text-xs text-slate-500">1-Page site, Google Maps, Event Timings, Countdown, WhatsApp share card.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border-2 border-peach-400 shadow-xs">
                <span className="text-xs font-semibold text-peach-600 uppercase tracking-wider">Standard</span>
                <div className="text-2xl font-bold text-slate-900 my-1">₹1,999</div>
                <p className="text-xs text-slate-500">Everything in Basic + Photo Gallery, Background Song, RSVP confirmation.</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'd like to get started with an event invitation website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-md shadow-peach-200/50 transition-all hover:scale-105 text-sm"
            >
              Get Started on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
