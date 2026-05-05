import type { Route } from "./+types/home";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import PublicNavbar from "../components/PublicNavbar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Infinity Dream Learning" },
    {
      name: "description",
      content:
        "Learn tech skills, build real projects, and grow creatively with Infinity Dream Learning.",
    },
  ];
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border rounded-lg p-4 cursor-pointer transition hover:shadow-lg">
      <div
        className="flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold">{question}</h3>
        <span
          className={`text-xl transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
          transition: "max-height 0.3s ease",
          overflow: "hidden",
        }}
      >
        <p className="mt-2 text-gray-600 dark:text-gray-300">{answer}</p>
      </div>
    </div>
  );
}

export default function ProgramsPage() {

  const [darkMode, setDarkMode] = useState(false);

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
  // A reusable SVG Checkmark component for the lists
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-blue-600 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">

        {/* HEADER + HERO */}
        <div
          className="relative text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10">
            <PublicNavbar />

            {/* HERO */}
            <section className="py-20 px-6">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-5xl font-bold leading-tight">
                    Learn Tech Skills <br />
                    Build Real Projects <br />
                    Grow Creatively
                  </h1>

                  <p className="mt-6 text-gray-200">
                    A creative + tech learning platform with real-world programs,
                    community, and career support.
                  </p>
                </div>

                <div className="h-80" />
              </div>
            </section>
          </div>
        </div>

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-24">
        
        {/* AI, Data & Tech Section */}
        <section id="ai" className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl border border-blue-100 p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow">
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">Track 01</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">AI, Data & Tech</h2>
            <p className="text-lg text-slate-600 mb-6">
              Dive into machine learning, data engineering, and generative AI. Build intelligent systems and master the algorithms shaping tomorrow's technology landscape.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700"><CheckIcon /> Machine Learning Foundations</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Large Language Models (LLMs)</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Data Engineering & Python</li>
            </ul>
            <Link href="/pricing">
              <button className="px-6 py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition">Get All Access</button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-72 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
            {/* SVG Microchip / Tech Icon */}
            <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>
          </div>
        </section>

        {/* Creative Section */}
        <section id="creative" className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white rounded-3xl border border-blue-100 p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow">
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">Track 02</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Creative & Design</h2>
            <p className="text-lg text-slate-600 mb-6">
              Design intuitive, beautiful, and user-centric digital experiences. Learn the principles of interaction, typography, and visual storytelling.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700"><CheckIcon /> UI/UX & Figma Mastery</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Design Systems</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Interactive Prototyping</li>
            </ul>
            <Link href="/pricing">
              <button className="px-6 py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition">Get All Access</button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-72 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
            {/* SVG Design / Palette Icon */}
            <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-3.879a3 3 0 10-4.242-4.242l-3.879 3.879a15.994 15.994 0 00-4.647 4.764m-1.051 3.205a15.996 15.996 0 00-3.396 1.62m3.396-1.62c.31.284.645.545 1.002.784m0 0c.39.26.804.49 1.238.694m-1.238-.694c-.39-.26-.804-.49-1.238-.694" />
            </svg>
          </div>
        </section>

        {/* Entrepreneurship Section */}
        <section id="business" className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl border border-blue-100 p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow">
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">Track 03</div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Entrepreneurship</h2>
            <p className="text-lg text-slate-600 mb-6">
              Transform innovative ideas into scalable businesses. Learn market positioning, growth marketing, and how to lead high-performing teams.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700"><CheckIcon /> Startup Fundamentals</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Growth Marketing & SEO</li>
              <li className="flex items-center text-slate-700"><CheckIcon /> Venture Finance & Fundraising</li>
            </ul>
            <Link href="/pricing">
              <button className="px-6 py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition">Get All Access</button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-72 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
            {/* SVG Rocket / Startup Icon */}
            <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.452 15.068 15.068 0 01-.06-.311m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>
        </section>
      {/* FOOTER */}
<footer className="bg-blue-950 dark:bg-black text-white pt-16 pb-8 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

    {/* Brand */}
    <div>
      <h3 className="text-xl font-bold mb-4">
        Infinity Dream Learning
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        Learn tech skills, build real-world projects, and grow your
        creative career with a modern learning experience.
      </p>

      {/* Socials (REAL SVG ICONS) */}
      <div className="flex gap-4">

        {/* Globe */}
        <span className="cursor-pointer hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
            viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              d="M3 12h18M12 3a15 15 0 010 18" />
          </svg>
        </span>

        {/* X (Twitter) */}
        <span className="cursor-pointer hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
            viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2L6 22h2l12-20h-2z" />
          </svg>
        </span>

        {/* Instagram */}
        <span className="cursor-pointer hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
            viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5"
              strokeWidth="2" />
            <circle cx="12" cy="12" r="4" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
          </svg>
        </span>

        {/* Facebook */}
        <span className="cursor-pointer hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
            viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5C10.5 7 11.9 5.8 14.2 5.8c1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2v7A10 10 0 0022 12z"/>
          </svg>
        </span>

        {/* LinkedIn */}
        <span className="cursor-pointer hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
            viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V24h-5v-7.3c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.7V24h-5V8z"/>
          </svg>
        </span>

      </div>
    </div>

    {/* Learning */}
    <div>
      <h4 className="font-semibold mb-4">Learning</h4>
      <div className="flex flex-col gap-2 text-gray-300 text-sm">
        <Link to="/programs">All Programs</Link>
        <Link to="/ai-data-tech">AI Data & Tech</Link>
        <Link to="/creative">Creative</Link>
        <Link to="/entrepreneurship">Entrepreneurship</Link>
      </div>
    </div>

    {/* Platform */}
    <div>
      <h4 className="font-semibold mb-4">Platform</h4>
      <div className="flex flex-col gap-2 text-gray-300 text-sm">
        <Link to="/learning-login">Start Learning</Link>
        <Link to="/ehub-login">E-Hub</Link>
        <Link to="/pricing">All Access</Link>
        <Link to="/support">Support</Link>
      </div>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold mb-4">Company</h4>
      <div className="flex flex-col gap-2 text-gray-300 text-sm">
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>
    </div>

    {/* Newsletter */}
    <div>
      <h4 className="font-semibold mb-4">Stay Updated</h4>
      <p className="text-gray-300 text-sm mb-3">
        Get updates on new programs and opportunities.
      </p>

      <div className="flex">
        <input
          type="email"
          placeholder="Your email"
          className="px-3 py-2 text-sm rounded-l-md w-full text-black"
        />
        <button className="bg-purple-600 px-4 py-2 rounded-r-md text-sm font-semibold">
          Join
        </button>
      </div>

      <p className="text-gray-400 text-xs mt-3">
        support@infinitydreamlearning.com
      </p>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

    <p className="text-gray-400 text-sm">
      © 2026 Infinity Dream Learning. All rights reserved.
    </p>

    {/* Toggle */}
    <div
      className="relative flex items-center w-14 h-5 bg-gray-400 dark:bg-gray-700 rounded-full cursor-pointer"
      onClick={toggleDarkMode}
    >
      <div
        className={`absolute top-0.5 w-4 h-4 bg-white dark:bg-black rounded-full transition-transform ${
          darkMode ? "translate-x-9" : "translate-x-0"
        }`}
      />
    </div>

  </div>
</footer>

      </div>
    </div>
  );
}
