"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const demos = [
  {
    title: "Arjun & Priya's Wedding",
    type: "Wedding",
    date: "March 2025",
    description:
      "A royal-themed wedding website with floral motifs, countdown timer, and an elegant photo gallery.",
    gradient: "from-peach-300 via-rose-300 to-peach-400",
    accentBg: "bg-peach-50",
    accentText: "text-peach-500",
    previewColors: {
      header: "bg-gradient-to-r from-peach-200 to-rose-200",
      accent: "bg-peach-300",
      card1: "bg-peach-100",
      card2: "bg-rose-100",
    },
  },
  {
    title: "Rahul's 1st Birthday",
    type: "Birthday",
    date: "January 2025",
    description:
      "A playful, colorful birthday website with a fun theme, party details, and a vibrant photo collage.",
    gradient: "from-gold-300 via-peach-300 to-gold-400",
    accentBg: "bg-gold-50",
    accentText: "text-gold-500",
    previewColors: {
      header: "bg-gradient-to-r from-gold-200 to-peach-200",
      accent: "bg-gold-300",
      card1: "bg-gold-100",
      card2: "bg-peach-100",
    },
  },
  {
    title: "Anniversary Celebration",
    type: "Anniversary",
    date: "February 2025",
    description:
      "An elegant anniversary website featuring a timeline of memories, love story, and guest wishes wall.",
    gradient: "from-lavender-200 via-rose-200 to-lavender-300",
    accentBg: "bg-lavender-50",
    accentText: "text-lavender-400",
    previewColors: {
      header: "bg-gradient-to-r from-lavender-200 to-rose-200",
      accent: "bg-lavender-300",
      card1: "bg-lavender-100",
      card2: "bg-rose-100",
    },
  },
];

function PhoneMockup({ colors }) {
  return (
    <div className="phone-mockup mx-auto transform group-hover:scale-105 transition-transform duration-500">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-5 pt-8 pb-2">
        <span className="text-[10px] font-medium text-slate-400">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-2 rounded-sm bg-slate-300" />
          <div className="w-3 h-2 rounded-sm bg-slate-300" />
          <div className="w-4 h-2 rounded-sm bg-slate-300" />
        </div>
      </div>
      {/* Header */}
      <div className={`mx-3 h-20 rounded-xl ${colors.header} mb-2 flex items-end p-3`}>
        <div className="space-y-1">
          <div className="w-16 h-1.5 bg-white/60 rounded-full" />
          <div className="w-24 h-2 bg-white/80 rounded-full" />
        </div>
      </div>
      {/* Content */}
      <div className="px-3 space-y-2">
        <div className={`h-8 rounded-lg ${colors.card1}`} />
        <div className="flex gap-2">
          <div className={`h-16 flex-1 rounded-lg ${colors.card2}`} />
          <div className={`h-16 flex-1 rounded-lg ${colors.card1}`} />
        </div>
        <div className={`h-6 rounded-lg ${colors.card2}`} />
        <div className="flex gap-2">
          <div className={`h-10 flex-1 rounded-lg ${colors.card1}`} />
          <div className={`h-10 flex-1 rounded-lg ${colors.card2}`} />
          <div className={`h-10 flex-1 rounded-lg ${colors.card1}`} />
        </div>
        <div className={`h-8 rounded-full ${colors.accent} mx-6`} />
      </div>
      {/* Bottom Bar */}
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="relative bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-peach-100/40 transition-all duration-500 hover:-translate-y-3">
        {/* Phone Preview */}
        <div className={`relative bg-gradient-to-br ${demo.gradient} p-8 pb-4 flex items-center justify-center`}>
          <div className="absolute inset-0 bg-white/10" />
          <PhoneMockup colors={demo.previewColors} />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${demo.accentBg} ${demo.accentText}`}
            >
              {demo.type}
            </span>
            <span className="text-xs text-slate-400">{demo.date}</span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-peach-500 transition-colors duration-300">
            {demo.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            {demo.description}
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-peach-500 group-hover:gap-3 transition-all duration-300">
            <span>View Demo</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
    <section id="showcase" className="py-20 sm:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-50 text-gold-500 text-sm font-semibold mb-4">
            Showcase
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            See What We&apos;ve
            <br />
            <span className="bg-gradient-to-r from-gold-400 to-peach-400 bg-clip-text text-transparent">
              Created for Others
            </span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Browse our recent event websites and imagine what yours could look like.
          </p>
        </motion.div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, i) => (
            <DemoCard key={demo.title} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
