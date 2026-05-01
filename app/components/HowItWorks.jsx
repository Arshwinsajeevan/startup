"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "We Create Your Event Website",
    description:
      "Share your event details, photos, and preferences. Our team crafts a stunning, personalized website for your occasion.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-peach-400 to-peach-500",
    bgLight: "bg-peach-50",
    iconColor: "text-peach-500",
  },
  {
    number: "02",
    title: "Share the Link with Guests",
    description:
      "Get a beautiful, shareable link. Send it via WhatsApp, SMS, or social media — no app downloads needed.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    gradient: "from-rose-400 to-rose-500",
    bgLight: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  {
    number: "03",
    title: "Guests Explore & Engage",
    description:
      "Guests view event details, browse the gallery, get directions with maps, and see live updates — all from one link.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    gradient: "from-gold-400 to-gold-500",
    bgLight: "bg-gold-50",
    iconColor: "text-gold-500",
  },
  {
    number: "04",
    title: "Keep It as a Memory Forever",
    description:
      "Your event website stays live even after the celebration — a digital keepsake of your most precious moments.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: "from-lavender-300 to-lavender-400",
    bgLight: "bg-lavender-50",
    iconColor: "text-lavender-400",
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-0.5 bg-gradient-to-r from-peach-200 to-transparent z-0" />
      )}

      <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-peach-100/30 transition-all duration-500 hover:-translate-y-2 group-hover:border-peach-200">
        {/* Step Number */}
        <div className="absolute -top-3 -right-2 sm:-right-3">
          <span className="text-5xl sm:text-6xl font-bold text-slate-100 group-hover:text-peach-100 transition-colors duration-300">
            {step.number}
          </span>
        </div>

        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl ${step.bgLight} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
        >
          <div className={step.iconColor}>
            {step.icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          {step.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-500 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Four Simple Steps to Your
            <br />
            <span className="bg-gradient-to-r from-peach-400 to-rose-400 bg-clip-text text-transparent">
              Dream Event Website
            </span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            From concept to a live, shareable link — we handle everything so you can focus on celebrating.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
