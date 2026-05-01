"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-peach-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-peach-400 to-rose-400 flex items-center justify-center shadow-lg shadow-peach-200/50 group-hover:shadow-peach-300/70 transition-shadow duration-300">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-peach-500 via-rose-400 to-gold-500 bg-clip-text text-transparent">
              Occasioo
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-peach-500 transition-colors duration-200 rounded-lg hover:bg-peach-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#showcase"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-peach-500 transition-colors duration-200"
            >
              View Demo
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-peach-400 to-rose-400 rounded-full hover:from-peach-500 hover:to-rose-500 transition-all duration-300 shadow-lg shadow-peach-200/50 hover:shadow-peach-300/70 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-peach-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-peach-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-peach-500 hover:bg-peach-50 rounded-xl transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3 border-t border-peach-100">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-peach-400 to-rose-400 rounded-xl hover:from-peach-500 hover:to-rose-500 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
