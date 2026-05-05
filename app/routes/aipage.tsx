import type { Route } from "./+types/home";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import PublicNavbar from "../components/PublicNavbar";
import FloatingFinley from "../components/FloatingFinley";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI, Data & Tech Programs | Infinity Dream Learning" },
    {
      name: "description",
      content: "Master machine learning, software engineering, and data science with our industry-aligned tech curriculum.",
    },
  ];
}

export default function AITechPage() {
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

  const programs = [
    {
      title: "Applied Machine Learning",
      description: "Build and deploy neural networks using PyTorch and TensorFlow in real-world scenarios.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      level: "Intermediate",
    },
    {
      title: "Full-Stack Web Engineering",
      description: "Master React, Node.js, and cloud databases to build scalable, modern web applications.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800",
      level: "Beginner",
    },
    {
      title: "Data Science & Analytics",
      description: "Learn Python, SQL, and advanced statistical modeling to extract insights from big data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      level: "Beginner",
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      description: "Understand network vulnerabilities, penetration testing, and modern security protocols.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
      level: "Advanced",
    }
  ];

  return (
    <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
       <FloatingFinley />
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-500 font-sans pb-10">
        
        {/* HERO */}
        <div
          className="relative text-white mb-16"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10">
            <PublicNavbar />
            <section className="py-24 px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Track Overview</span>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                  Build the <span className="text-blue-400">future.</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Master the algorithms, languages, and architectures powering tomorrow's technology.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* PROGRAM GRID */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-3xl font-bold">AI & Tech Programs</h2>
            <span className="text-gray-500 dark:text-gray-400 font-medium">{programs.length} Courses</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    AI & Tech
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">{prog.level}</span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{prog.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{prog.description}</p>
                  {/* Funnels to pricing */}
                  <Link to="/CourseViewPage" className="block w-full text-center py-3 bg-gray-50 dark:bg-gray-950 text-blue-600 dark:text-blue-400 font-semibold rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 transition-all">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER (Exact Match) */}
        {/* ... (Footer component code provided below in the final block, assuming same standard structure to save visual space, but I will write it out fully for completeness) ... */}
        <footer className="bg-blue-950 dark:bg-black text-white pt-16 pb-8 px-6">
           {/* Footers are fully duplicated below in the final output instructions */}
           <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Infinity Dream Learning</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Learn tech skills, build real-world projects, and grow your creative career.</p>
              <div className="flex gap-4">
                <span className="cursor-pointer hover:text-blue-400 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a15 15 0 010 18" /></svg></span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2L6 22h2l12-20h-2z" /></svg></span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth="2" /><circle cx="12" cy="12" r="4" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></svg></span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V24h-5v-7.3c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.7V24h-5V8z"/></svg></span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Learning</h4>
              <div className="flex flex-col gap-2 text-gray-300 text-sm">
                <Link to="/programs" className="hover:text-white transition">All Programs</Link>
                <Link to="/ai-data-tech" className="hover:text-white transition">AI Data & Tech</Link>
                <Link to="/creative" className="hover:text-white transition">Creative</Link>
                <Link to="/entrepreneurship" className="hover:text-white transition">Entrepreneurship</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="flex flex-col gap-2 text-gray-300 text-sm">
                <Link to="/learning-login" className="hover:text-white transition">Start Learning</Link>
                <Link to="/ehub-login" className="hover:text-white transition">E-Hub</Link>
                <Link to="/pricing" className="hover:text-white transition">All Access</Link>
                <Link to="/support" className="hover:text-white transition">Support</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-2 text-gray-300 text-sm">
                <Link to="/about" className="hover:text-white transition">About</Link>
                <Link to="/careers" className="hover:text-white transition">Careers</Link>
                <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-3">Get updates on new programs.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 text-sm rounded-l-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button className="bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-r-md text-sm font-semibold">Join</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 Infinity Dream Learning. All rights reserved.</p>
            <div className="relative flex items-center w-14 h-6 bg-gray-700 rounded-full cursor-pointer p-1" onClick={toggleDarkMode}>
              <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-8" : "translate-x-0"}`} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}