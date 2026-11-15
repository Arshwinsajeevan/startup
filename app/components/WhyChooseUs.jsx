"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "1-Tap Venue Navigation",
    description:
      "Guests never get lost. Embedded Google Maps gives turn-by-turn driving directions to any auditorium, hall, home, or showroom.",
    stat: "Zero",
    statLabel: "Phone Calls for Directions",
    icon: (
      <svg className="w-6 h-6 text-peach-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Effortless WhatsApp Forwarding",
    description:
      "Send in 1 second to family groups, cousins, and friends across Kerala and the Gulf with an elegant rich preview card.",
    stat: "1-Click",
    statLabel: "WhatsApp Sharing",
    icon: (
      <svg className="w-6 h-6 text-peach-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    title: "24-Hour Express Delivery",
    description:
      "No waiting weeks for print shops. Send us your event photos & details, and your website is ready in 24 to 48 hours.",
    stat: "24hrs",
    statLabel: "Express Turnaround",
    icon: (
      <svg className="w-6 h-6 text-peach-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Digital Keepsake",
    description:
      "Save paper and save thousands of rupees. Your website stays live forever as a digital memory of your happiest day.",
    stat: "100%",
    statLabel: "Paperless & Permanent",
    icon: (
      <svg className="w-6 h-6 text-peach-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

function ReasonCard({ reason, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 hover:border-peach-300 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <div className="shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-peach-50 flex items-center justify-center border border-peach-100 group-hover:scale-105 transition-transform duration-300">
            {reason.icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-peach-600 transition-colors duration-200">
            {reason.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {reason.description}
          </p>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xl font-extrabold bg-gradient-to-r from-peach-500 to-rose-500 bg-clip-text text-transparent">
              {reason.stat}
            </span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              {reason.statLabel}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-sm font-semibold mb-3 border border-peach-200">
            Why InviteUs
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Families & Hosts
            <br />
            <span className="bg-gradient-to-r from-peach-500 to-rose-500 bg-clip-text text-transparent">
              Choose Digital Invitations
            </span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Practical benefits that solve real celebration and event day problems for you and your guests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} reason={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
