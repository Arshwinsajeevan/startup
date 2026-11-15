"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "one-time",
    description: "Essential, elegant digital invitation",
    features: [
      "1-Page Custom Event Website",
      "Event Schedule & Program Timings",
      "1-Tap Google Maps Venue Navigation",
      "Live Event Countdown Timer",
      "WhatsApp Rich Thumbnail Card",
      "Mobile & Tablet Responsive",
      "24–48 Hours Fast Turnaround",
    ],
    whatsappMsg: "Hi InviteUs! I'd like to book the Basic Plan (₹1,499).",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹1,999",
    period: "one-time",
    description: "Complete celebration & memory experience",
    features: [
      "Everything in Basic Plan +",
      "Photo Gallery",
      "Background Music Player",
      "Story, Highlights & Milestone Timeline",
      "Interactive Guest RSVP Tracker",
      "Custom Theme (Traditional / Modern)",
      "Priority 24-Hour Express Delivery",
    ],
    whatsappMsg: "Hi InviteUs! I'd like to book the Standard Plan (₹1,999) with music and gallery.",
    popular: true,
  },
];

function PricingCard({ plan, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const whatsappNumber = "917593071195";

  const card = (
    <div
      className={`relative h-full flex flex-col justify-between ${
        plan.popular
          ? "pricing-card-popular-inner p-7 sm:p-9"
          : "bg-white rounded-3xl p-7 sm:p-9 border border-slate-200"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-peach-500 to-rose-500 shadow-md">
            ★ Most Popular Choice
          </span>
        </div>
      )}

      <div>
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                plan.popular
                  ? "bg-peach-100 text-peach-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {plan.popular ? "Best Value" : "Essential"}
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">{plan.description}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
              {plan.price}
            </span>
            <span className="text-sm font-medium text-slate-500">
              / {plan.period}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">No monthly fees. Lifetime link.</p>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((f, i) => (
            <li
              key={f}
              className={`flex items-start gap-3 text-sm ${
                i === 0 && plan.popular
                  ? "font-semibold text-slate-900"
                  : "text-slate-600"
              }`}
            >
              <svg
                className="w-5 h-5 text-peach-500 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.whatsappMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all duration-300 ${
          plan.popular
            ? "text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-md shadow-peach-200 hover:scale-[1.02]"
            : "text-slate-800 bg-slate-100 hover:bg-slate-200"
        }`}
      >
        Choose {plan.name} ({plan.price}) →
      </a>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`h-full ${
        plan.popular
          ? "pricing-card-popular shadow-xl shadow-peach-100/50"
          : "hover:shadow-xl hover:-translate-y-1 rounded-3xl"
      } transition-all duration-300`}
    >
      {card}
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-sm font-semibold mb-3 border border-peach-200">
            Clear & Transparent Pricing
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Two Affordable Packages.
            <br />
            <span className="bg-gradient-to-r from-peach-500 to-rose-500 bg-clip-text text-transparent">
              Built for Every Celebration.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Fixed prices with zero hidden charges. We create and deliver your custom link in 24 hours.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-stretch mb-10">
          {plans.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} />
          ))}
        </div>

        {/* Link to full comparison */}
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-peach-600 hover:text-peach-700 underline"
          >
            <span>View Full Feature Comparison Table & FAQs →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
