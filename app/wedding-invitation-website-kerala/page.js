import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Digital Wedding Invitation Websites in Kerala | InviteUs",
  description:
    "Create premium, interactive digital wedding invitation websites in Kerala. Perfect for WhatsApp sharing with Google Maps navigation, Muhurtham schedule, and music. Plans at ₹1,499 & ₹1,999.",
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
  ],
  alternates: {
    canonical: "/wedding-invitation-website-kerala",
  },
};

const weddingStyles = [
  {
    title: "Traditional Kerala Hindu Wedding",
    description:
      "Kasavu gold accents, auspicious lamp motifs, Guruvayur/temple muhurtham schedules, and Nadaswaram instrumental background music.",
    tag: "Traditional & Auspicious",
    color: "border-gold-300 bg-gold-50/50",
  },
  {
    title: "Elegant Kerala Christian Wedding",
    description:
      "Classic ivory & floral aesthetics, church ceremony details, bridal party introduction, and reception hall navigation.",
    tag: "Graceful & Classic",
    color: "border-rose-200 bg-rose-50/50",
  },
  {
    title: "Royal Kerala Muslim Nikah",
    description:
      "Regal emerald & gold palettes, intricate calligraphy accents, separate Nikah & reception schedule, and guest wishes wall.",
    tag: "Royal & Celebratory",
    color: "border-peach-200 bg-peach-50/50",
  },
  {
    title: "Contemporary Minimalist Celebration",
    description:
      "Modern clean typography, full-screen pre-wedding photo gallery, video highlights, and sleek interactive RSVP.",
    tag: "Modern & Aesthetic",
    color: "border-slate-200 bg-slate-50/60",
  },
];

const reasonsForKerala = [
  {
    title: "No More Explaining Auditorium Routes",
    description:
      "Every Malayali wedding host knows the stress of answering 50+ phone calls on the wedding day asking: 'Which route to the convention centre?'. One tap on InviteUs opens turn-by-turn Google Maps on your guest's phone.",
    icon: "📍",
  },
  {
    title: "Zero Delay with Gulf & Overseas Relatives",
    description:
      "Got family in Dubai, Qatar, Kuwait, or the UK? Send your wedding website instantly on WhatsApp. No international courier fees, no lost paper postal cards.",
    icon: "✈️",
  },
  {
    title: "Atmospheric Background Music",
    description:
      "Add traditional Nadaswaram, soft violin, or your favorite Malayalam song to welcome guests the second they open your wedding link.",
    icon: "🎵",
  },
  {
    title: "Showcase Your Pre-Wedding Shoot",
    description:
      "Instead of letting your beautiful photoshoot sit on a hard drive, present your best pictures in an interactive, mobile-optimized photo gallery.",
    icon: "📸",
  },
];

export default function KeralaWeddingPage() {
  const whatsappNumber = "917593071195";

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-sm font-semibold mb-4 border border-peach-200">
              Made with Love for Kerala Weddings
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Modern Way to Invite for
              <br />
              <span className="bg-gradient-to-r from-peach-500 via-rose-500 to-gold-500 bg-clip-text text-transparent">
                Your Kerala Wedding
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ditch costly paper cards and lifeless PDFs. Send your guests a stunning,
              interactive wedding website with Google Maps auditorium navigation,
              Muhurtham timings, background music, and photo gallery.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'm planning a Kerala wedding and want to create a website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-lg shadow-peach-200 transition-all hover:scale-105"
              >
                Create Your Kerala Wedding Website
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Basic Plan ₹1,499 • Standard Plan ₹1,999 • Ready in 24 Hours
            </p>
          </div>

          {/* Real Kerala Wedding Pain Points Solved */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Why Kerala Couples Are Choosing InviteUs
              </h2>
              <p className="text-slate-500 mt-2">
                Designed specifically around how weddings are celebrated in Kerala.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {reasonsForKerala.map((r) => (
                <div
                  key={r.title}
                  className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:border-peach-200 hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-4">{r.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Wedding Style Collection */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-peach-500">
                Tailored Aesthetics
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Customized for Every Tradition
              </h2>
              <p className="text-slate-500 mt-2 max-w-xl mx-auto">
                Whether an intimate temple wedding or a grand convention center reception, our themes adapt to your unique story.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {weddingStyles.map((style) => (
                <div
                  key={style.title}
                  className={`rounded-2xl p-7 border ${style.color} transition-all duration-300 hover:shadow-lg`}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-800 shadow-xs mb-4">
                    {style.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {style.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {style.description}
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi InviteUs! I'm interested in the ${style.title} design.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-peach-600 hover:text-peach-700"
                  >
                    <span>Request this style</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Quick Summary */}
          <div className="bg-gradient-to-r from-peach-50 via-rose-50 to-gold-50 rounded-3xl p-8 sm:p-12 border border-peach-200 max-w-4xl mx-auto text-center mb-20">
            <h2
              className="text-3xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Affordable Plans for Every Kerala Wedding
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8">
              Transparent one-time pricing with no surprise charges. Delivered ready to forward on WhatsApp within 24 hours.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 uppercase">Basic</span>
                <div className="text-2xl font-bold text-slate-900 my-1">₹1,499</div>
                <p className="text-xs text-slate-500">1-Page site, Muhurtham, Google Maps, Countdown, WhatsApp link.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border-2 border-peach-400">
                <span className="text-xs font-semibold text-peach-600 uppercase">Standard (Popular)</span>
                <div className="text-2xl font-bold text-slate-900 my-1">₹1,999</div>
                <p className="text-xs text-slate-500">Everything in Basic + Photo Gallery, Music Player, Story, RSVP.</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I want to discuss creating my Kerala wedding invitation website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-lg shadow-peach-200 transition-all hover:scale-105"
            >
              Book Your Wedding Website on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

