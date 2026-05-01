"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: [
                "linear-gradient(135deg, #ffb899, #ff8599)",
                "linear-gradient(135deg, #ffe082, #ffd54f)",
                "linear-gradient(135deg, #d9ccff, #ffc2cc)",
                "linear-gradient(135deg, #ffd1bb, #ffe0e6)",
                "linear-gradient(135deg, #ffecb3, #ffb899)",
                "linear-gradient(135deg, #c4b2ff, #ffa3b3)",
              ][i],
              top: `${15 + i * 14}%`,
              left: `${5 + i * 16}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach-50 border border-peach-200 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-peach-400 to-rose-400 animate-pulse" />
          <span className="text-sm font-medium text-peach-500">
            ✨ The Future of Event Invitations
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Turn Your Special Moments
          <br />
          <span className="bg-gradient-to-r from-peach-400 via-rose-400 to-gold-400 bg-clip-text text-transparent">
            Into Shareable Experiences
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Create beautiful, interactive event websites for weddings, birthdays &
          celebrations. Share a single link — no more paper invites or boring PDFs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#showcase"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-full hover:border-peach-300 hover:text-peach-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-peach-100/50"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            View Demo
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-peach-400 to-rose-400 rounded-full hover:from-peach-500 hover:to-rose-500 transition-all duration-300 shadow-xl shadow-peach-200/50 hover:shadow-peach-300/70 hover:scale-105"
          >
            Get Your Website
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-slate-400"
        >
          {[
            { icon: "🎉", text: "100+ Events Created" },
            { icon: "📱", text: "Mobile-First Design" },
            { icon: "⚡", text: "Ready in 24 Hours" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
