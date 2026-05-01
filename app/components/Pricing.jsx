"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "₹1,999",
    period: "one-time",
    description: "Perfect for small gatherings and intimate celebrations",
    features: ["Single page event website", "Mobile responsive", "Shareable link", "Event details & schedule", "Up to 10 photos", "7 days live"],
    gradient: "from-slate-600 to-slate-700",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹4,999",
    period: "one-time",
    description: "Ideal for weddings and large celebrations",
    features: ["Multi-section website", "Photo & video gallery", "Google Maps integration", "WhatsApp share button", "Up to 50 photos", "RSVP feature", "30 days live", "Custom domain support"],
    gradient: "from-peach-400 to-rose-400",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹9,999",
    period: "one-time",
    description: "The ultimate event experience for those who want it all",
    features: ["Everything in Standard", "Unlimited photos & videos", "Custom animations", "Guest book / wishes wall", "Live event updates", "Memory archive (forever)", "Priority support", "Multiple event pages"],
    gradient: "from-slate-800 to-slate-900",
    popular: false,
  },
];

function PricingCard({ plan, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const card = (
    <div className={`relative h-full flex flex-col ${plan.popular ? "pricing-card-popular-inner p-7 sm:p-8" : "bg-white rounded-3xl p-7 sm:p-8 border border-slate-100"}`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-peach-400 to-rose-400 shadow-lg shadow-peach-200/50">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800">{plan.name}</h3>
        <p className="text-sm text-slate-400 mt-1">{plan.description}</p>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
        <span className="text-sm text-slate-400 ml-1">/ {plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
            <svg className="w-5 h-5 text-peach-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`block text-center py-3.5 rounded-xl font-semibold transition-all duration-300 ${
          plan.popular
            ? "text-white bg-gradient-to-r from-peach-400 to-rose-400 hover:from-peach-500 hover:to-rose-500 shadow-lg shadow-peach-200/50 hover:shadow-peach-300/70 hover:scale-105"
            : "text-slate-700 bg-slate-100 hover:bg-slate-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`${plan.popular ? "pricing-card-popular" : "hover:shadow-xl hover:shadow-peach-100/30 hover:-translate-y-2 rounded-3xl"} transition-all duration-500`}
    >
      {card}
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-500 text-sm font-semibold mb-4">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800" style={{ fontFamily: "var(--font-playfair)" }}>
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-peach-400 to-rose-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">No hidden fees. No subscriptions. Just one-time pricing for your perfect event website.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
