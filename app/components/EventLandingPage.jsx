import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

/**
 * Shared layout for dedicated high-intent event landing pages.
 */
export default function EventLandingPage({
  badge,
  headlineLead,
  headlineAccent,
  subtitle,
  whatsappTopic,
  featuresHeading,
  featuresSubheading,
  features,
  faqs,
  relatedLinks,
}) {
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
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-xs sm:text-sm font-semibold mb-4 border border-peach-200">
              {badge}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {headlineLead}
              <br />
              <span className="bg-gradient-to-r from-peach-500 via-rose-500 to-gold-500 bg-clip-text text-transparent">
                {headlineAccent}
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi InviteUs! I'd like to create a ${whatsappTopic}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-md shadow-peach-200/50 transition-all hover:scale-105 text-sm"
              >
                Create Your Website on WhatsApp →
              </a>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-slate-700 bg-white border border-slate-200 hover:border-peach-300 hover:bg-peach-50/40 transition-all text-sm"
              >
                Explore Packages
              </Link>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Custom designed • Ready in 24 to 48 hours • Shareable anywhere
            </p>
          </div>

          {/* Features */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {featuresHeading}
              </h2>
              <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm sm:text-base">
                {featuresSubheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-peach-200 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-peach-50 text-peach-600 border border-peach-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Celebrations */}
          {relatedLinks?.length > 0 && (
            <div className="max-w-4xl mx-auto text-center pt-8 border-t border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Other Invitation Websites We Build
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white border border-slate-200 text-slate-700 hover:border-peach-300 hover:text-peach-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

