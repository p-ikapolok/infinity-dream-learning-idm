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
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
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
    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  // Dashboard List Data
  const programs = [
    {
      id: "ai",
      category: "AI, Data & Tech",
      title: "Artificial Intelligence & Data Engineering",
      description: "Dive into machine learning, data engineering, and generative AI. Build intelligent systems and master the algorithms shaping tomorrow's technology landscape.",
      skills: ["Machine Learning Foundations", "Large Language Models (LLMs)", "Data Engineering & Python"],
    },
    {
      id: "creative",
      category: "Creative",
      title: "Digital Design & UI/UX Mastery",
      description: "Design intuitive, beautiful, and user-centric digital experiences. Learn the principles of interaction, typography, and visual storytelling.",
      skills: ["UI/UX & Figma Mastery", "Design Systems", "Interactive Prototyping"],
    },
    {
      id: "business",
      category: "Entrepreneurship",
      title: "Startup & Venture Fundamentals",
      description: "Transform innovative ideas into scalable businesses. Learn market positioning, growth marketing, and how to lead high-performing teams.",
      skills: ["Startup Fundamentals", "Growth Marketing & SEO", "Venture Finance & Fundraising"],
    }
  ];

  return (
    <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500 font-sans">

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
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10">
            <PublicNavbar />

            {/* HERO */}
            <section className="py-24 px-6">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                    Learn Tech Skills <br />
                    Build Real Projects <br />
                    <span className="text-blue-400">Grow Creatively</span>
                  </h1>

                  <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-lg">
                    A creative and tech learning platform with real-world programs,
                    community, and career support.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* DASHBOARD NAVIGATION HEADER */}
        <div className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-6 items-center text-sm font-semibold text-gray-500 dark:text-gray-400">
            <span className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1">All Programs</span>
            <a href="#ai" className="hover:text-gray-900 dark:hover:text-white transition-colors">AI & Tech</a>
            <a href="#creative" className="hover:text-gray-900 dark:hover:text-white transition-colors">Creative</a>
            <a href="#business" className="hover:text-gray-900 dark:hover:text-white transition-colors">Entrepreneurship</a>
          </div>
        </div>

        {/* PROFESSIONAL DASHBOARD LIST SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Program Directory</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Select a track below to explore the curriculum and get full access.</p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
            {programs.map((program, index) => (
              <div 
                key={program.id} 
                id={program.id}
                className={`p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center hover:bg-blue-50/50 dark:hover:bg-gray-800/50 transition-colors ${
                  index !== programs.length - 1 ? 'border-b border-gray-200 dark:border-gray-800' : ''
                }`}
              >
                {/* Left: Track Info */}
                <div className="lg:w-5/12">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-4 uppercase tracking-wider">
                    {program.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Middle: Skills Included */}
                <div className="lg:w-4/12">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wide mb-4">Core Skills</h4>
                  <ul className="space-y-3">
                    {program.skills.map((skill, i) => (
                      <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                        <CheckIcon /> {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Action */}
                <div className="lg:w-3/12 flex w-full lg:justify-end">
                  <Link to="/pricing" className="w-full lg:w-auto text-center px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                    View Program
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

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
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth="2" />
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
              <p className="text-gray-300 text-sm mb-3">
                Get updates on new programs and opportunities.
              </p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-sm rounded-l-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-r-md text-sm font-semibold">
                  Join
                </button>
              </div>

              <p className="text-gray-400 text-xs mt-3">
                support@infinitydreamlearning.com
              </p>
            </div>

          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm">
              © 2026 Infinity Dream Learning. All rights reserved.
            </p>

            {/* Toggle */}
            <div
              className="relative flex items-center w-14 h-5 bg-gray-600 dark:bg-gray-800 rounded-full cursor-pointer"
              onClick={toggleDarkMode}
            >
              <div
                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
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