import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import PublicNavbar from "../components/PublicNavbar";
import FloatingFinley from "../components/FloatingFinley";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pricing & All Access | Infinity Dream Learning" },
    {
      name: "description",
      content:
        "Get unlimited access to our AI, Creative, and Entrepreneurship programs for one simple price.",
    },
  ];
}

export default function PricingPage() {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode persistence
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "true") setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", String(darkMode));
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Mock Data: FAQs
  const faqs = [
    {
      q: "Can I cancel my subscription at any time?",
      a: "Yes. There are no long-term contracts or cancellation fees. You can cancel your monthly subscription directly from your dashboard."
    },
    {
      q: "Do I get verified certificates?",
      a: "Absolutely. Every time you complete a track and its final project, you receive a digital certificate you can add directly to your LinkedIn profile."
    },
    {
      q: "How does the AI-driven support work?",
      a: "Our custom AI tutor is trained directly on our curriculum. If you get stuck on a coding bug or a design concept, the AI will guide you to the solution 24/7."
    },
    {
      q: "Is there a refund policy?",
      a: "We offer a 7-day money-back guarantee. If you realize the All Access pass isn't the right fit within your first week, we will issue a full refund."
    }
  ];

  return (
    <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
       <FloatingFinley />
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-500 font-sans">
        
        {/* HEADER + HERO (Matches Global Format) */}
        <div
          className="relative text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10">
            <PublicNavbar />

            {/* HERO */}
            <section className="py-24 px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                  Invest in your <span className="text-blue-400">career.</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Get unlimited access to our AI, Creative, and Entrepreneurship programs for one simple, transparent price.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* PRICING CARD SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-20 -mt-10 relative z-20">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col md:flex-row">

            {/* Features Side */}
            <div className="p-10 md:p-14 md:w-3/5">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">All Access Pass Includes:</h2>
              <ul className="space-y-6">
                {[
                  "Unlimited access to AI, Creative, & Business tracks",
                  "Full access to interactive projects and case studies",
                  "Private community network access",
                  "Verified digital certificates of completion",
                  "Priority 24/7 AI-driven support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-lg">
                    <div className="mt-1 bg-blue-100 dark:bg-blue-900/40 p-1.5 rounded-full mr-4 shrink-0">
                      {/* SVG Checkmark */}
                      <svg className="w-5 h-5 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Side */}
            <div className="p-10 md:p-14 md:w-2/5 bg-blue-950 dark:bg-blue-950 text-white flex flex-col justify-center text-center relative overflow-hidden">
              {/* Decorative Blur Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>

              <div className="relative z-10">
                <p className="text-blue-300 font-bold tracking-widest text-sm uppercase mb-4">Premium Membership</p>
                <div className="flex justify-center items-baseline mb-6">
                  <span className="text-7xl font-extrabold text-white">$49</span>
                  <span className="text-xl text-blue-300 ml-2 font-medium">/mo</span>
                </div>
                <p className="text-blue-200 mb-10 text-lg">Billed monthly. Cancel anytime.</p>
                <button className="w-full py-4 bg-white text-blue-900 text-lg font-extrabold rounded-xl hover:bg-blue-50 transition shadow-lg shadow-black/20">
                  Get All Access Now
                </button>
                <p className="mt-4 text-sm text-blue-300/80 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  Secure SSL Checkout
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Everything you need to know about the All Access Pass.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER (Exact Match) */}
        <footer className="bg-blue-950 dark:bg-black text-white pt-16 pb-8 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Infinity Dream Learning</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Learn tech skills, build real-world projects, and grow your creative career.
              </p>
              {/* Socials */}
              <div className="flex gap-4">
                <span className="cursor-pointer hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a15 15 0 010 18" /></svg>
                </span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2L6 22h2l12-20h-2z" /></svg>
                </span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth="2" /><circle cx="12" cy="12" r="4" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></svg>
                </span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V24h-5v-7.3c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.7V24h-5V8z"/></svg>
                </span>
              </div>
            </div>

            {/* Learning */}
            <div>
              <h4 className="font-semibold mb-4">Learning</h4>
              <div className="flex flex-col gap-2 text-gray-300 text-sm">
                <Link to="/programs" className="hover:text-white transition">All Programs</Link>
                <Link to="/ai-data-tech" className="hover:text-white transition">AI Data & Tech</Link>
                <Link to="/creative" className="hover:text-white transition">Creative</Link>
                <Link to="/entrepreneurship" className="hover:text-white transition">Entrepreneurship</Link>
              </div>
            </div>

            {/* Platform */}
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="flex flex-col gap-2 text-gray-300 text-sm">
                <Link to="/learning-login" className="hover:text-white transition">Start Learning</Link>
                <Link to="/ehub-login" className="hover:text-white transition">E-Hub</Link>
                <Link to="/pricing" className="hover:text-white transition">All Access</Link>
                <Link to="/support" className="hover:text-white transition">Support</Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-2 text-gray-300 text-sm">
                <Link to="/about" className="hover:text-white transition">About</Link>
                <Link to="/careers" className="hover:text-white transition">Careers</Link>
                <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-3">Get updates on new programs.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 text-sm rounded-l-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button className="bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-r-md text-sm font-semibold">Join</button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 Infinity Dream Learning. All rights reserved.</p>
            {/* Dark Mode Toggle */}
            <div className="relative flex items-center w-14 h-6 bg-gray-700 rounded-full cursor-pointer p-1" onClick={toggleDarkMode}>
              <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-8" : "translate-x-0"}`} />
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}