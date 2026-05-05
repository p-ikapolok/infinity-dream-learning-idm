import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import PublicNavbar from "../components/PublicNavbar";
import FloatingFinley from "../components/FloatingFinley";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Infinity Dream Learning" },
    {
      name: "description",
      content:
        "Learn about our mission, our team, and our commitment to empowering the next generation of builders.",
    },
  ];
}

export default function AboutPage() {
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

  // Mock Data: Core Values
  const coreValues = [
    {
      title: "Real-World Application",
      description: "We don't teach theory in a vacuum. Everything you learn is applied to real industry challenges.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      )
    },
    {
      title: "Unbound Creativity",
      description: "We believe the best technical solutions are born from diverse, creative thinking and design.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-3.879a3 3 0 10-4.242-4.242l-3.879 3.879a15.994 15.994 0 00-4.647 4.764m-1.051 3.205a15.996 15.996 0 00-3.396 1.62m3.396-1.62c.31.284.645.545 1.002.784m0 0c.39.26.804.49 1.238.694m-1.238-.694c-.39-.26-.804-.49-1.238-.694" />
        </svg>
      )
    },
    {
      title: "Always Accessible",
      description: "High-tier education should be accessible anywhere, anytime, aided by intelligent AI support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c2.5 0 4.847 1.006 6.58 2.64" />
        </svg>
      )
    }
  ];

  // Mock Data: Leadership Team
  const team = [
    {
      name: "Sarah Jenkins",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    },
    {
      name: "David Chen",
      role: "Head of AI Curriculum",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Product & Design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
    },
    {
      name: "Marcus Johnson",
      role: "Director of Entrepreneurship",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
    }
  ];

  return (
    <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
       <FloatingFinley />
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-500 font-sans">

        {/* HEADER + HERO (Matches Programs Page) */}
        <div
          className="relative text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10">
            <PublicNavbar />

            {/* HERO */}
            <section className="py-24 px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                  Empowering the next <br className="hidden md:block" />
                  <span className="text-blue-400">generation of builders.</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  We believe education should be dynamic, practical, and deeply aligned with the modern tech industry. Here is our story.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* MISSION & IMPACT SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story */}
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Our Mission</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Bridging the gap between academia and industry.</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                We built Infinity Dream Learning because traditional education wasn't keeping pace with technology. We wanted to create a platform that teaches exactly what top-tier companies are looking for.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Whether you are an aspiring data scientist building neural networks, a creative designer prototyping in Figma, or a future founder raising venture capital, our carefully curated curriculum provides the exact roadmap you need to succeed in a fast-paced world.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-white dark:bg-gray-900 p-10 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Platform Impact</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                  <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">3</p>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-2">Core Disciplines</p>
                </div>
                <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                  <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">100%</p>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-2">Project-Based Learning</p>
                </div>
                <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                  <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">24/7</p>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-2">AI Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">The principles that guide our curriculum, our community, and our engineering.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {coreValues.map((value, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 dark:text-blue-400 mb-6 bg-blue-100 dark:bg-blue-900/30 inline-block p-4 rounded-xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP TEAM */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Our People</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet the Leadership Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Industry veterans from top tech companies dedicated to democratizing elite education.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link to="/careers" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-md">
                View Open Positions
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 h-72">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     {/* Placeholder for LinkedIn SVG icon */}
                     <svg className="w-6 h-6 text-white cursor-pointer hover:text-blue-300 transition" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V24h-5v-7.3c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.7V24h-5V8z"/>
                     </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER (Exact Match to Programs Page) */}
        <footer className="bg-blue-950 dark:bg-black text-white pt-16 pb-8 px-6 mt-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Infinity Dream Learning</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Learn tech skills, build real-world projects, and grow your creative career.
              </p>
              {/* Socials (REAL SVG ICONS) */}
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