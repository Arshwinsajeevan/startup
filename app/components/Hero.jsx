"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh-4rem)] sm:min-h-[85vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-12 sm:pt-32 sm:pb-24 hero-ambient-glow"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach-50 border border-peach-200 mb-6 sm:mb-8 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-peach-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-peach-700">
            India&apos;s Custom Digital Invitation Websites
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-slate-900"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Replace Paper Cards With a
          <br />
          <span className="bg-gradient-to-r from-peach-500 via-rose-500 to-gold-500 bg-clip-text text-transparent">
            Digital Invitation Website
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Create a custom online invitation for your wedding, birthday,
          housewarming, or inauguration. Share one WhatsApp link with 1-tap
          Google Maps venue navigation, program schedule, music, and photo gallery.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 w-full sm:w-auto flex items-center justify-center"
        >
          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-peach-500 to-rose-500 rounded-full hover:from-peach-600 hover:to-rose-600 transition-all duration-300 shadow-lg shadow-peach-200/50 hover:scale-105"
          >
            Get Your Website
            <svg
              className="w-5 h-5"
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
