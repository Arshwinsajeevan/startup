import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Motion Graphics, AI Videos, Posters & Branding Studio | InviteUs",
  description:
    "Custom motion graphics videos, AI promotional videos, Reels & highlight video editing, photo retouching, function posters, digital invitation cards, logo design, and full branding for clients worldwide. Also offering portfolio and business websites.",
  keywords: [
    "motion graphics video maker",
    "animated invitation video",
    "ai video creator",
    "ai promotional video maker",
    "reels video editing service",
    "wedding highlight video editor",
    "professional photo editing and retouching",
    "function poster design",
    "digital invitation card maker",
    "save the date poster design",
    "logo design and branding",
    "brand identity kit",
    "social media brand poster design",
    "business website designer",
    "portfolio website maker",
    "static website development",
  ],
  alternates: {
    canonical: "/creative-studio",
  },
};

const creativeServices = [
  {
    title: "Motion Graphics Videos",
    description:
      "Smooth animated invitation videos, logo reveals, title animations, and promotional explainers crafted for WhatsApp, Instagram, and event screens.",
    tags: ["Animated Invites", "Logo Reveals", "Promo Reels", "2D Motion"],
    iconBg: "bg-peach-50 text-peach-600 border-peach-100",
    whatsappTopic: "Motion Graphics Video",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI Video Production",
    description:
      "Modern AI-powered promotional videos, creative ad concepts, product showcases, and visual storytelling designed to stand out on social feeds.",
    tags: ["AI Promo Ads", "Product Reels", "Concept Videos", "Social Campaigns"],
    iconBg: "bg-purple-50 text-purple-700 border-purple-100",
    whatsappTopic: "AI Video Production",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Video Editing",
    description:
      "Clean, rhythmic editing for Instagram Reels, YouTube Shorts, wedding and event highlights, commercial ads, and creator content for clients everywhere.",
    tags: ["Reels & Shorts", "Event Highlights", "Commercial Cuts", "Color & Audio"],
    iconBg: "bg-rose-50 text-rose-700 border-rose-100",
    whatsappTopic: "Video Editing Service",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Photo Editing & Retouching",
    description:
      "Natural skin retouching, color grading, background cleanup, and high-resolution preparation for family portraits, weddings, and brand shoots.",
    tags: ["Color Grading", "Portrait Retouching", "Background Cleanup", "Print & Web Ready"],
    iconBg: "bg-amber-50 text-amber-700 border-amber-100",
    whatsappTopic: "Photo Editing & Retouching",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "All Function Posters & Invitation Cards",
    description:
      "Custom digital posters, Save the Date flyers, WhatsApp invitation cards, and event banners for weddings, birthdays, housewarmings, and inaugurations.",
    tags: ["Function Posters", "Digital Invite Cards", "Save the Date", "Event Flyers"],
    iconBg: "bg-sky-50 text-sky-700 border-sky-100",
    whatsappTopic: "Function Poster / Invitation Card Design",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "Complete Branding & Logo Design",
    description:
      "End-to-end brand identity from memorable logo design to brand posters, social media creatives, launch visuals, and branded video edits.",
    tags: ["Logo Design", "Brand Posters", "Social Media Kits", "Brand Video Edits"],
    iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    whatsappTopic: "Logo Design & Complete Branding",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Do you work with clients outside Kerala and outside India?",
    a: "Yes. All our motion graphics, AI videos, video and photo editing, function posters, and branding services are delivered online for individuals, creators, and businesses anywhere in the world.",
  },
  {
    q: "What is included in your complete branding service?",
    a: "We handle everything from custom logo design and color/typography systems to ongoing brand posters, social media creatives, product visuals, and promotional video edits.",
  },
  {
    q: "Can we order both an invitation website and a motion graphics video or poster?",
    a: "Yes. Many clients pair a custom digital invitation website with an animated motion graphics invite video or Save the Date poster matching the same theme.",
  },
  {
    q: "Do you also build portfolio, static, and business websites?",
    a: "Yes. In addition to our main invitation and creative studio work, we also design fast, mobile-friendly portfolio websites, static websites, and small business websites on request.",
  },
];

export default function CreativeStudioPage() {
  const whatsappNumber = "917593071195";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "InviteUs Creative & Branding Studio",
        provider: {
          "@type": "Organization",
          name: "InviteUs",
          url: "https://inviteus.in",
        },
        serviceType: [
          "Motion Graphics Video",
          "AI Video Production",
          "Video Editing",
          "Photo Editing",
          "Function Posters & Invitation Cards",
          "Logo Design & Branding",
          "Portfolio & Business Websites",
        ],
        areaServed: "Worldwide",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-xs sm:text-sm font-semibold mb-4 border border-peach-200">
              Video • Posters • Cards • Complete Branding
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Motion Graphics, AI Videos
              <br />
              <span className="bg-gradient-to-r from-peach-500 via-rose-500 to-gold-500 bg-clip-text text-transparent">
                &amp; Brand Design
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From animated event videos, AI promos, and Reels editing to photo
              retouching, function posters, invitation cards, and full logo-to-poster
              branding — crafted for creators, families, and businesses everywhere.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'd like to discuss a video, poster, or branding project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-md shadow-peach-200/50 transition-all hover:scale-105 text-sm"
              >
                Start Your Project on WhatsApp →
              </a>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-slate-700 bg-white border border-slate-200 hover:border-peach-300 hover:bg-peach-50/40 transition-all text-sm"
              >
                View Service Packages
              </Link>
            </div>
          </div>

          {/* Core Creative Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Core Creative Services
              </h2>
              <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm sm:text-base">
                Every visual asset your celebration, personal brand, or business needs under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {creativeServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-peach-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${service.iconBg}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="pt-4 border-t border-slate-100 mb-6 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi InviteUs! I'm interested in ${service.whatsappTopic}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-peach-50 hover:text-peach-600 border border-slate-200 hover:border-peach-200 transition-colors"
                  >
                    Inquire on WhatsApp →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary / Lower-Priority Web Services */}
          <div className="max-w-4xl mx-auto mb-20 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Additional Web Services
              </span>
              <h2
                className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Portfolio, Static &amp; Business Websites
              </h2>
              <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                Alongside our invitation websites and creative studio, we also build clean, fast-loading personal portfolio websites, static websites, and small business websites on request.
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi InviteUs! I'd like to ask about a portfolio, static, or business website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-peach-300 hover:text-peach-600 transition-colors"
            >
              Ask About Web Design →
            </a>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
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
        </div>
      </main>
      <Footer />
    </>
  );
}

