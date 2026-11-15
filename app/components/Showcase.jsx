"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const demos = [
  {
    title: "Rahul & Anjali's Kerala Wedding",
    type: "Wedding & Engagement",
    date: "Live Interactive Demo",
    url: "https://wedding-card-demo.vercel.app/",
    iframeUrl: "https://wedding-card-demo.vercel.app/",
    description:
      "A stunning traditional Kerala wedding website with smooth scroll animations, live countdown, Google Maps auditorium route, and real-time RSVP.",
    gradient: "from-peach-300 via-rose-300 to-peach-400",
    accentBg: "bg-peach-50",
    accentText: "text-peach-700",
    badge: "🔴 Live Interactive Preview",
  },
  {
    title: "The Nair Residence – Housewarming",
    type: "Housewarming (Grihapravesham)",
    date: "Available Style",
    url: "https://wedding-card-demo.vercel.app/",
    description:
      "A warm celebration website with auspicious Paalukaachalu ceremony timings, family feast schedule, and direct Google Maps route to the new home.",
    gradient: "from-gold-200 via-peach-200 to-gold-300",
    accentBg: "bg-gold-50",
    accentText: "text-gold-700",
    badge: "Housewarming Style",
  },
  {
    title: "Aarav's 1st Birthday Celebration",
    type: "Birthday & Milestones",
    date: "Available Style",
    url: "https://wedding-card-demo.vercel.app/",
    description:
      "A colorful, playful celebration website with milestone photo timeline, party venue directions, and an interactive guest wishes board.",
    gradient: "from-rose-200 via-peach-200 to-rose-300",
    accentBg: "bg-rose-50",
    accentText: "text-rose-700",
    badge: "Birthday & Party Style",
  },
];

function PhoneMockup({ iframeUrl, title }) {
  return (
    <div className="phone-mockup mx-auto transform group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-5 pt-8 pb-2">
        <span className="text-[10px] font-medium text-slate-400">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-2 rounded-xs bg-slate-300" />
          <div className="w-3 h-2 rounded-xs bg-slate-300" />
          <div className="w-4 h-2 rounded-xs bg-slate-300" />
        </div>
      </div>

      {iframeUrl ? (
        <div className="absolute inset-0 top-[32px] bottom-[16px] left-[0] right-[0] overflow-hidden bg-white pointer-events-none flex justify-center">
          <iframe
            src={iframeUrl}
            className="border-0 origin-top"
            style={{
              transform: "scale(0.597)",
              width: "375px",
              height: "720px",
              minWidth: "375px",
            }}
            title={title}
          />
        </div>
      ) : (
        <div className="px-4 py-8 flex flex-col items-center justify-center text-center h-[380px] bg-gradient-to-b from-white to-slate-50">
          <div className="w-16 h-16 rounded-full bg-peach-100 flex items-center justify-center text-2xl mb-4 text-peach-600">
            ✨
          </div>
          <h4 className="text-sm font-bold text-slate-800 mb-1">{title}</h4>
          <p className="text-xs text-slate-500 max-w-[170px] leading-relaxed mb-4">
            Custom built for your celebration with music, map, and photo gallery.
          </p>
          <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-peach-500 text-white shadow-xs">
            Tap to View Demo
          </span>
        </div>
      )}

      {/* Bottom Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-slate-200" />
    </div>
  );
}

function DemoCard({ demo, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group cursor-pointer"
      onClick={() => demo.url && window.open(demo.url, "_blank")}
    >
      <div className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Phone Preview Header */}
        <div
          className={`relative bg-gradient-to-br ${demo.gradient} p-8 pb-4 flex items-center justify-center`}
        >
          <PhoneMockup iframeUrl={demo.iframeUrl} title={demo.title} />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${demo.accentBg} ${demo.accentText}`}
            >
              {demo.type}
            </span>
            <span className="text-xs font-medium text-slate-400">
              {demo.badge}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-peach-600 transition-colors duration-200">
            {demo.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {demo.description}
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-peach-600 group-hover:gap-3 transition-all duration-200">
            <span>Explore Demo Website</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-sm font-semibold mb-3 border border-peach-200">
            Interactive Showcase
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Experience What Your Guests
            <br />
            <span className="bg-gradient-to-r from-peach-500 via-rose-500 to-gold-500 bg-clip-text text-transparent">
              Will Experience
            </span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Browse examples for weddings, housewarmings, and birthdays. Every website is built mobile-first for seamless loading on any phone.
          </p>
        </motion.div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, i) => (
            <DemoCard key={demo.title} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
