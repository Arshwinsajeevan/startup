"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "Modern Alternative",
    description: "Ditch boring PDFs and paper cards. Give your guests a stunning digital experience.",
    icon: "🚀",
    stat: "10x",
    statLabel: "More Engaging",
  },
  {
    title: "Beautiful UI/UX",
    description: "Hand-crafted with premium aesthetics — elegant typography and smooth animations.",
    icon: "🎨",
    stat: "100%",
    statLabel: "Custom Design",
  },
  {
    title: "Fast Delivery",
    description: "Get your event website ready within 24–48 hours without compromising quality.",
    icon: "⚡",
    stat: "24hrs",
    statLabel: "Turnaround",
  },
  {
    title: "Personalized Experience",
    description: "Every detail tailored to your event — colors, layout, and style reflect you.",
    icon: "💎",
    stat: "Unique",
    statLabel: "Every Time",
  },
];

function ReasonCard({ reason, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-100 hover:border-peach-200 shadow-sm hover:shadow-xl hover:shadow-peach-100/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-peach-50/80 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col sm:flex-row gap-5">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-peach-50 to-rose-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {reason.icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-peach-500 transition-colors duration-300">{reason.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">{reason.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-peach-400 to-rose-400 bg-clip-text text-transparent">{reason.stat}</span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{reason.statLabel}</span>
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
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-50 text-lavender-400 text-sm font-semibold mb-4">Why Occasioo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800" style={{ fontFamily: "var(--font-playfair)" }}>
            Why Families & Couples
            <br />
            <span className="bg-gradient-to-r from-lavender-300 to-rose-400 bg-clip-text text-transparent">Choose Occasioo</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} reason={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
