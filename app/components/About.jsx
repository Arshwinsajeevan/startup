"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-50 text-gold-500 text-sm font-semibold mb-4">Our Story</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800" style={{ fontFamily: "var(--font-playfair)" }}>
              Built with Love,
              <br />
              <span className="bg-gradient-to-r from-gold-400 to-peach-400 bg-clip-text text-transparent">For Love</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm"
          >
            <div className="absolute top-6 left-8 text-6xl text-peach-100 font-serif leading-none">&ldquo;</div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-slate-800">InviteUs</span> was born from a simple observation — traditional invitation cards end up forgotten, and PDF invites feel lifeless. We believed every celebration deserves a digital home as beautiful as the event itself.
              </p>
              <p>
                Founded by two friends who are passionate about design and technology, InviteUs creates interactive, shareable event websites that bring people closer. From intimate birthdays to grand weddings, we turn your vision into a link your guests will love.
              </p>
              <p>
                We&apos;re not just building websites — we&apos;re preserving memories. Every InviteUs website becomes a digital keepsake that you can revisit years later, reliving the joy and warmth of your celebration.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
