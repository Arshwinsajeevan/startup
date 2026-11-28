import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About InviteUs – Digital Invitation Website Maker in India",
  description:
    "Discover the story behind InviteUs. Founded in Kerala to help couples, families, and brands worldwide create interactive digital invitation websites, motion graphics, AI videos, posters, branding, and business websites.",
  keywords: [
    "about inviteus",
    "digital invitation website maker",
    "motion graphics and ai video studio",
    "logo design and branding agency",
    "function poster and invitation card design",
    "business and portfolio website designer",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const whatsappNumber = "917593071195";

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-50 text-gold-600 text-sm font-semibold mb-4 border border-gold-200">
              Our Journey
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Born in Kerala,
              <br />
              <span className="bg-gradient-to-r from-gold-500 via-peach-500 to-rose-500 bg-clip-text text-transparent">
                Built for Meaningful Celebrations
              </span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We started InviteUs with a simple thought: in an age where everything is on our smartphones, why are we still spending tens of thousands of rupees on paper invitation cards that get thrown away the next day?
            </p>
          </div>

          {/* Story Narrative */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-slate-200 shadow-sm mb-20 space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The Frustration That Started It All
              </h2>
              <p>
                During wedding seasons in Kerala, we noticed two common problems in every family:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-slate-600">
                <li>
                  <strong className="text-slate-800">The Direction Chaos:</strong> On the wedding day, the bride and groom&apos;s close relatives are bombarded with dozens of phone calls asking: <em>&ldquo;Which turn after the highway? Where is the parking? Where is the auditorium?&rdquo;</em>
                </li>
                <li>
                  <strong className="text-slate-800">The Impersonal PDF:</strong> People started sending PDF invitation files on WhatsApp, but nobody reads a clunky 5-page PDF on a phone, and you can&apos;t click on it to open Google Maps or play music.
                </li>
              </ul>
            </div>

            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The Solution: A Live, Interactive Wedding Website
              </h2>
              <p>
                We built <strong className="text-peach-600">InviteUs</strong> to give every couple and family a breathtaking digital space for their celebration. A link that looks like a luxury experience, loads instantly on WhatsApp, plays your favorite celebration song, and lets guests start driving directions in Google Maps with a single tap.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A Lifetime Digital Keepsake
              </h2>
              <p>
                Paper cards fade and end up in the dustbin. But your InviteUs website stays alive long after the celebrations are over. You can revisit your proposal story, photos, and guest wishes on your 1st, 5th, or 10th anniversary, reliving the joy anytime, anywhere.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Creative Studio: Video, Posters, Branding &amp; Websites
              </h2>
              <p>
                Beyond digital invitations, our studio crafts <strong className="text-slate-800">motion graphics videos, AI promotional videos, Reels &amp; highlight video editing, professional photo retouching, function posters, and invitation cards</strong> for clients everywhere. We also handle complete <strong className="text-slate-800">branding from logo design to brand posters and video edits</strong>, along with clean portfolio, static, and business websites.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2
              className="text-3xl font-bold text-slate-900 text-center mb-12"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Commitments to You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Eco-Friendly &amp; Sustainable</h3>
                <p className="text-sm text-slate-600">
                  Save thousands of sheets of paper, packaging, and fuel. Every digital invite sent is a step towards a greener celebration.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                <div className="w-11 h-11 rounded-xl bg-peach-50 text-peach-600 border border-peach-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">24–48 Hour Turnaround</h3>
                <p className="text-sm text-slate-600">
                  Celebrations and launches move fast. Once you share your details and media, our team crafts and delivers your personalized project in 24 to 48 hours.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Tailored Craftsmanship</h3>
                <p className="text-sm text-slate-600">
                  Simple, transparent packages with no hidden fees. Custom design accessible to families, creators, and businesses everywhere.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-xl mx-auto">
            <h3
              className="text-2xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Have a celebration coming up?
            </h3>
            <p className="text-slate-600 mb-6">
              Talk directly with our founders on WhatsApp to turn your special day into a digital memory.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'd love to chat about creating an invitation website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-md transition-all hover:scale-105"
            >
              Chat with Our Team on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

