import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact & Book Your Event Website | InviteUs Kerala",
  description:
    "Contact InviteUs to create your digital wedding or event invitation website. Fast 24-48hr delivery in Kerala. Call or message us on WhatsApp.",
  keywords: [
    "contact inviteus",
    "book wedding website kerala",
    "digital invitation contact kerala",
    "whatsapp inviteus kerala",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-peach-50 text-peach-600 text-sm font-semibold mb-3 border border-peach-200">
            Let&apos;s Create Something Beautiful
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get In Touch With InviteUs
          </h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Ready to build your digital wedding or celebration website? Message us directly on WhatsApp or fill out the form below.
          </p>
        </div>

        <Contact />

        {/* Direct Contact Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-bold text-slate-900 mb-1">WhatsApp Us</h3>
              <p className="text-xs text-slate-500 mb-3">Fastest response (Usually in 15 mins)</p>
              <a
                href="https://wa.me/917593071195"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-peach-600 hover:text-peach-700 underline"
              >
                +91 75930 71195
              </a>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-bold text-slate-900 mb-1">Call Us Directly</h3>
              <p className="text-xs text-slate-500 mb-3">Mon – Sun, 9 AM – 9 PM IST</p>
              <div className="space-y-1">
                <a href="tel:+917593071195" className="block text-sm font-semibold text-slate-700 hover:text-peach-600">
                  +91 75930 71195
                </a>
                <a href="tel:+919946664218" className="block text-sm font-semibold text-slate-700 hover:text-peach-600">
                  +91 99466 64218
                </a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-bold text-slate-900 mb-1">Email</h3>
              <p className="text-xs text-slate-500 mb-3">For business inquiries</p>
              <a
                href="mailto:inviteus2026@gmail.com"
                className="text-sm font-semibold text-slate-700 hover:text-peach-600 break-all"
              >
                inviteus2026@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

