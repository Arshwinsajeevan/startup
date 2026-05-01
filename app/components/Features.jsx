"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Mobile-First Design",
    description:
      "Every website is built mobile-first, ensuring a flawless experience on any device your guests use.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-peach-400 to-peach-500",
    bg: "bg-peach-50",
  },
  {
    title: "Shareable Link",
    description:
      "One beautiful link to share on WhatsApp, Instagram, or SMS. No apps to download, no hassle for guests.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    gradient: "from-rose-400 to-rose-500",
    bg: "bg-rose-50",
  },
  {
    title: "Photo & Video Gallery",
    description:
      "Showcase your best moments with a stunning visual gallery. Guests can browse and relive every beautiful memory.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-gold-400 to-gold-500",
    bg: "bg-gold-50",
  },
  {
    title: "Event Details & Map",
    description:
      "Display venue, schedule, dress code, and embedded maps — everything guests need in one place.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-lavender-300 to-lavender-400",
    bg: "bg-lavender-50",
  },
  {
    title: "RSVP Ready",
    description:
      "Let guests confirm their attendance directly from the website. Manage your guest list effortlessly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-peach-400 to-rose-400",
    bg: "bg-peach-50",
  },
  {
    title: "Memory Archive",
    description:
      "Your website lives on as a digital keepsake — revisit your celebration years later, anytime, anywhere.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    gradient: "from-gold-400 to-peach-400",
    bg: "bg-gold-50",
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 hover:border-peach-200 shadow-sm hover:shadow-xl hover:shadow-peach-100/40 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-peach-50/0 to-rose-50/0 group-hover:from-peach-50/50 group-hover:to-rose-50/30 transition-all duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <span className={`bg-gradient-to-r ${feature.gradient} text-white rounded-lg p-2`}>
            {feature.icon}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-peach-500 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-400 text-sm font-semibold mb-4">
            Features
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Everything You Need for a
            <br />
            <span className="bg-gradient-to-r from-rose-400 to-peach-400 bg-clip-text text-transparent">
              Perfect Event Website
            </span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Packed with features that make your event unforgettable and your life easier.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
