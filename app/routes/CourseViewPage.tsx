import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import PublicNavbar from "../components/PublicNavbar";

// MOCK DATA: You will fetch this based on the URL parameter (e.g., /course/:id) later.
const COURSE_DATA = {
  title: "Data Analytics Engineering",
  category: "AI & Tech",
  description: "Master data pipelines, statistical analysis, and machine learning models to solve complex business problems. Build a portfolio of real-world projects.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  duration: "12 Weeks",
  level: "Intermediate",
  format: "100% Online",
  prerequisites: "Basic Python programming",
  modules: [
    {
      title: "Module 1: Foundations of Data Architecture",
      description: "Learn how to structure databases, write advanced SQL, and build robust ETL pipelines."
    },
    {
      title: "Module 2: Advanced Statistics & Probability",
      description: "Dive into Bayesian inference. Understand conditional probability applications using Bayes' Theorem: $P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$."
    },
    {
      title: "Module 3: Machine Learning Models",
      description: "Implement supervised and unsupervised learning algorithms including linear regression, decision trees, and clustering."
    },
    {
      title: "Module 4: Capstone Project",
      description: "Solve a real-world dataset provided by our industry partners and present your findings."
    }
  ]
};

export default function CourseDetailsPage() {
  const navigate = useNavigate();
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

  return (
    <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-500 font-sans pb-10">
        
        {/* HERO SECTION */}
        <div
          className="relative text-white pt-6"
          style={{
            backgroundImage: `url('${COURSE_DATA.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/80 dark:bg-black/90" />
          <div className="relative z-10">
            <PublicNavbar />

            <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
              <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                  {COURSE_DATA.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                  {COURSE_DATA.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-10">
                  {COURSE_DATA.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => navigate("/apply")}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
                  >
                    Apply for this Track
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <a 
                    href="#syllabus"
                    className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold py-4 px-8 rounded-xl transition-all"
                  >
                    View Syllabus
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">About the Program</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  The modern tech landscape requires a deep understanding of data infrastructure and statistical analysis. In this track, you will move beyond basic tutorials and build production-ready systems. 
                </p>
                <p className="mt-4">
                  Designed by industry experts, this curriculum bridges the gap between theory and real-world application. You will participate in live mentoring sessions, collaborate with peers, and graduate with a robust portfolio demonstrating your analytical prowess.
                </p>
              </div>
            </section>

            <hr className="border-gray-200 dark:border-gray-800" />

            {/* Syllabus Section */}
            <section id="syllabus">
              <h2 className="text-3xl font-bold mb-8">Curriculum Structure</h2>
              <div className="space-y-6">
                {COURSE_DATA.modules.map((mod, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {mod.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Program Details</h3>
              
              <ul className="space-y-6 mb-8">
                {/* Duration */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Duration</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{COURSE_DATA.duration}</p>
                  </div>
                </li>
                {/* Level */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Skill Level</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{COURSE_DATA.level}</p>
                  </div>
                </li>
                {/* Format */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Format</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{COURSE_DATA.format}</p>
                  </div>
                </li>
                {/* Prerequisites */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Prerequisites</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{COURSE_DATA.prerequisites}</p>
                  </div>
                </li>
              </ul>

              <button 
                onClick={() => navigate("/ApplicationPage")}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex justify-center items-center gap-2"
              >
                Start Application
              </button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Takes ~10 minutes. Acceptance is required prior to payment.
              </p>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="bg-blue-950 dark:bg-black text-white pt-16 pb-8 px-6 mt-10">
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