"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const eventTypes = ["Wedding", "Birthday", "Anniversary", "Engagement", "Baby Shower", "Other"];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", eventType: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/arshwin619@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          eventType: form.eventType,
          _subject: `New Event Website Inquiry from ${form.name} (${form.eventType})`,
          _captcha: "false"
        })
      });

      if (response.ok) {
        // Create WhatsApp Message
        const whatsappNumber = "917593071195";
        const message = `Hi Occasioo team! 👋\n\nI'm interested in an event website. Here are my details:\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Event Type:* ${form.eventType}\n\nPlease get back to me!`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, "_blank");

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setForm({ name: "", phone: "", eventType: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-peach-100/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rose-100/40 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-400 text-sm font-semibold mb-4">Get Started</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800" style={{ fontFamily: "var(--font-playfair)" }}>
              Ready to Create Your
              <br />
              <span className="bg-gradient-to-r from-peach-400 to-rose-400 bg-clip-text text-transparent">Event Website?</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-lg mx-auto">Tell us about your event and we&apos;ll get back to you within 24 hours with a personalized plan.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl shadow-peach-100/20"
          >
            {submitted ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-peach-400 to-rose-400 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You! 🎉</h3>
                <p className="text-slate-500">We&apos;ll reach out to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-peach-300 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-peach-300 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-event" className="block text-sm font-semibold text-slate-700 mb-2">Event Type</label>
                  <select
                    id="contact-event"
                    required
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-peach-300 focus:border-transparent transition-all duration-200 bg-slate-50/50 appearance-none"
                  >
                    <option value="" disabled>Select your event type</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg text-lg ${isSubmitting
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-peach-400 to-rose-400 hover:from-peach-500 hover:to-rose-500 shadow-peach-200/50 hover:shadow-peach-300/70 hover:scale-[1.02] active:scale-[0.98]"
                    }`}
                >
                  {isSubmitting ? "Sending..." : "Get Your Event Website →"}
                </button>
                <p className="text-center text-xs text-slate-400">
                  We&apos;ll never share your details. Expect a response within 24 hours.
                  <br />
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
