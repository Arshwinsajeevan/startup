"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const eventTypes = [
  "Wedding & Reception",
  "Engagement / Betrothal",
  "Housewarming / Grihapravesham",
  "Shop / Office Inauguration",
  "Birthday Party (1st & Milestones)",
  "Wedding Anniversary",
  "Baby Shower / Naming Ceremony",
  "Other Celebration",
];

const planOptions = [
  "Standard Plan – Popular with Music & Gallery",
  "Basic Plan – Essential 1-Page Invite",
  "I need advice on which plan to choose",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "",
    selectedPlan: "Standard Plan – Popular with Music & Gallery",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const whatsappNumber = "917593071195";
      const message = `Hi InviteUs! 👋\n\nI want to create an event website. Here are my details:\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Event:* ${form.eventType}\n*Plan Interest:* ${form.selectedPlan}\n\nPlease share details on getting started!`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      setLastWhatsappUrl(whatsappUrl);

      const formData = new URLSearchParams();
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("eventType", form.eventType);
      formData.append("plan", form.selectedPlan);
      formData.append(
        "_subject",
        `New Event Website Booking from ${form.name} (${form.eventType})`
      );
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      // Post to FormSubmit in background
      fetch("https://formsubmit.co/ajax/inviteus2026@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: formData.toString(),
      }).catch((err) => console.log("Form backup logged:", err));

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. You can chat with us directly on WhatsApp!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-sm font-semibold mb-3 border border-peach-200">
              Start Your Invitation
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Create Your
              <br />
              <span className="bg-gradient-to-r from-peach-500 to-rose-500 bg-clip-text text-transparent">
                Event Website?
              </span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-lg mx-auto">
              Share your details and choose your package. We will get your website ready within 24 to 48 hours.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl shadow-slate-100"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 rounded-full bg-peach-50 flex items-center justify-center mx-auto mb-6 text-4xl">
                  🎉
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Thank You, {form.name}!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                  Your inquiry has been received. Tap the button below to connect directly with our team on WhatsApp and send your event details.
                </p>

                <a
                  href={lastWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-lg shadow-peach-200 transition-all hover:scale-105 text-lg"
                >
                  <span>Continue on WhatsApp Now</span>
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="e.g. Rahul Sajeev"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      WhatsApp Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-event"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Type of Celebration
                  </label>
                  <select
                    id="contact-event"
                    required
                    value={form.eventType}
                    onChange={(e) =>
                      setForm({ ...form, eventType: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all bg-slate-50/50"
                  >
                    <option value="" disabled>
                      Select your event type
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-plan"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Preferred Plan
                  </label>
                  <select
                    id="contact-plan"
                    value={form.selectedPlan}
                    onChange={(e) =>
                      setForm({ ...form, selectedPlan: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all bg-slate-50/50"
                  >
                    {planOptions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-md text-base sm:text-lg ${
                    isSubmitting
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600 shadow-peach-200 hover:scale-[1.01]"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Get Your Event Website →"}
                </button>

                <p className="text-center text-xs text-slate-400">
                  🔒 We respect your privacy. No spam. You will be connected directly with our team.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
