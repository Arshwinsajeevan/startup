"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const creativeHighlights = [
  {
    title: "Motion Graphics Videos",
    description:
      "Animated invitation videos, title reveals, and promo reels built to grab attention on WhatsApp and Instagram.",
    accent: "bg-peach-50 text-peach-600 border-peach-100",
  },
  {
    title: "AI Video Production",
    description:
      "Modern AI promotional videos, creative ad concepts, and product reels for brands, launches, and creators.",
    accent: "bg-purple-50 text-purple-700 border-purple-100",
  },
  {
    title: "Video & Photo Editing",
    description:
      "Reels, YouTube Shorts, event highlight edits, color grading, and crisp portrait or product photo retouching.",
    accent: "bg-rose-50 text-rose-700 border-rose-100",
  },
  {
    title: "Function Posters & Cards",
    description:
      "Custom digital posters, Save the Date flyers, and invitation cards for weddings, birthdays, and all functions.",
    accent: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    title: "Logo Design & Full Branding",
    description:
      "Complete brand identity from custom logos to brand posters, social media creatives, and promotional video edits.",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
];

export default function CreativeServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="creative-services"
      className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-sm font-semibold mb-4 border border-peach-200">
            Creative &amp; Branding Studio
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Beyond Invitations: Video,
            <br />
            <span className="bg-gradient-to-r from-peach-500 to-rose-500 bg-clip-text text-transparent">
              Posters &amp; Brand Design
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            We also craft motion graphics, AI videos, video and photo edits, function posters, invitation cards, and complete branding for clients everywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {creativeHighlights.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-peach-300 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${item.accent}`}>
                Creative Service
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Lower-priority Web Design Card */}
          <div className="bg-slate-50/40 rounded-2xl p-6 border border-dashed border-slate-300 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 mb-4">
                Also Available
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Portfolio, Static &amp; Business Websites
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Need a clean personal portfolio, static site, or small business website? We build fast, responsive web pages on request.
              </p>
            </div>
            <Link
              href="/creative-studio"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-peach-600 hover:text-peach-700"
            >
              <span>Explore Creative &amp; Web Services →</span>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/creative-studio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-md shadow-peach-200/50 transition-all hover:scale-105 text-sm"
          >
            Explore All Creative &amp; Branding Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

