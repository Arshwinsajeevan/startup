"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-sm font-semibold mb-3 border border-peach-200">
              Our Story
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Born in Kerala,
              <br />
              <span className="bg-gradient-to-r from-peach-500 to-rose-500 bg-clip-text text-transparent">
                Crafted for Celebrations
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-peach-50 to-rose-50 text-peach-500 border border-peach-100 mb-6 shadow-xs select-none">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900">InviteUs</strong> was born from a very real observation in Kerala — expensive paper invitation cards end up discarded, and flat PDF invites feel lifeless. More importantly, guests spend hours on the wedding day calling family members asking for auditorium directions!
              </p>
              <p>
                Founded by passionate designers and technologists from Kerala, InviteUs crafts interactive, shareable event websites that bring guests together. From traditional temple and church weddings to milestone birthdays, we turn your special day into a single link with 1-tap Google Maps directions, music, and your photo gallery.
              </p>
              <p>
                We are not just designing web pages — we are preserving memories. Every InviteUs website stays alive as a digital keepsake you can revisit years later.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-sm text-slate-500 font-medium">
                Fast 24–48h Delivery across India
              </span>
              <Link
                href="/about"
                className="text-sm font-bold text-peach-600 hover:text-peach-700 underline"
              >
                Read Our Story & Values →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
