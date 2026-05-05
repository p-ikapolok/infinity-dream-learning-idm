import type { Route } from "./+types/home";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import PublicNavbar from "../components/PublicNavbar";
import FloatingFinley from "../components/FloatingFinley";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Infinity Dream Learning | Programs" },
    {
      name: "description",
      content:
        "Learn tech skills, build real projects, and grow creatively with Infinity Dream Learning.",
    },
  ];
}

export default function ProgramsPage() {
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

  // Expanded Data to show the 4-column grid layout
  const programs = [
    {
      id: "ai-ml",
      category: "AI & Tech",
      title: "Machine Learning Foundations",
      description: "Master the core algorithms of ML using Python and build predictive models.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800",
    },
    {
      id: "data-eng",
      category: "AI & Tech",
      title: "Data Engineering Pipeline",
      description: "Learn to design, build, and maintain scalable data architectures.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    },
    {
      id: "ui-ux",
      category: "Creative",
      title: "UI/UX & Figma Mastery",
      description: "Design intuitive digital experiences and learn visual storytelling.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    },
    {
      id: "startup",
      category: "Entrepreneurship",
      title: "Startup Fundamentals",
      description: "From idea validation to MVP. Launch your business with confidence.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800",
    },
    {
      id: "gen-ai",
      category: "AI & Tech",
      title: "Generative AI & LLMs",
      description: "Build applications powered by massive language models and AI.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800",
    },
    {
      id: "web-dev",
      category: "AI & Tech",
      title: "Full-Stack Web Dev",
      description: "Learn React, Node.js, and databases to build modern web applications.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    },
    {
      id: "3d-design",
      category: "Creative",
      title: "3D Motion & Animation",
      description: "Bring your designs to life using industry-standard 3D software.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
    },
    {
      id: "growth",
      category: "Entrepreneurship",
      title: "Growth Marketing & SEO",
      description: "Scale your startup using data-driven marketing and user acquisition.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    }
  ];

  return (
    <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
       <FloatingFinley />
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-500 font-sans pb-10">

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
              <div className="max-w-7xl mx-auto text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Learn Tech Skills <br className="hidden md:block" />
                  Build Real Projects <br className="hidden md:block" />
                  <span className="text-blue-400">Grow Creatively</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Explore our massive catalog of premium programs designed to accelerate your career in AI, Design, and Business.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* DASHBOARD TOOLBAR: NAVIGATION + SEARCH/FILTER */}
        <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left: Category Navigation */}
            <div className="flex flex-wrap gap-6 items-center text-sm font-semibold text-gray-500 dark:text-gray-400">
              <button className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1">All Programs</button>
              <button className="hover:text-gray-900 dark:hover:text-white transition-colors">AI & Tech</button>
              <button className="hover:text-gray-900 dark:hover:text-white transition-colors">Creative</button>
              <button className="hover:text-gray-900 dark:hover:text-white transition-colors">Entrepreneurship</button>
            </div>

            {/* Right: Search & Filter */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              
              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search programs..." 
                  className="w-full pl-9 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white outline-none transition-all"
                />
              </div>

              {/* Filter Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition border border-transparent dark:border-gray-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span className="hidden sm:inline">Filter</span>
              </button>

            </div>
          </div>
        </div>

        {/* PROGRAM GRID SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* 
             Grid Layout Configuration:
             - Mobile: 1 column (grid-cols-1)
             - Small Tablet: 2 columns (sm:grid-cols-2)
             - Desktop: 4 columns (lg:grid-cols-4)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div 
                key={program.id} 
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
              >
                {/* Card Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Category Badge over image */}
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {program.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-3">
                    {program.description}
                  </p>
                  
                  {/* Action Button */}
                  <Link 
                    to="/pricing" 
                    className="block w-full text-center py-2.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm">
              Load More Programs
            </button>
          </div>

        </div>

        {/* FOOTER */}
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