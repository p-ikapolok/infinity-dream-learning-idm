import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
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

export default function Welcome() {
  const [darkMode, setDarkMode] = useState(false);

  // Load preference safely (prevents Vercel crash)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "true") {
        setDarkMode(true);
      }
    }
  }, []);

  // Save preference safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", String(darkMode));
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
        <PublicNavbar />

        {/* DARK MODE TOGGLE */}
        <div className="flex justify-end px-6 py-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-semibold transform transition hover:scale-105"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* HERO */}
        <section className="bg-gradient-to-r from-blue-950 via-purple-700 to-pink-500 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight animate-fadeIn">
                Learn Tech Skills <br />
                Build Real Projects <br />
                Grow Creatively
              </h1>
              <p className="mt-6 text-gray-200 dark:text-gray-300 animate-slideUp">
                A creative + tech learning platform with real-world programs,
                community, and career support.
              </p>
              <div className="flex gap-4 mt-8">
                <Link
                  to="/marketplace"
                  className="bg-coral-600 text-white px-6 py-3 rounded-full font-semibold transform transition hover:scale-105 hover:bg-coral-700"
                >
                  Start Learning
                </Link>
                <Link
                  to="/ehub"
                  className="border border-white text-white px-6 py-3 rounded-full font-semibold transform transition hover:scale-105 hover:bg-white hover:text-purple-700"
                >
                  Explore Hub
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 h-80 rounded-xl flex items-center justify-center shadow-lg transform transition hover:scale-105 dark:bg-gray-700">
              <span className="text-gray-400">[Creative Tech Hero Image]</span>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            We merge creativity and technology to help learners build skills,
            projects, and careers that inspire.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {["Learn", "Practice", "Create", "Grow"].map((item) => (
              <div
                key={item}
                className="p-6 rounded-lg shadow-md transform transition hover:-translate-y-2 hover:shadow-xl bg-white dark:bg-gray-800"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 mx-auto rounded-full animate-pulse" />
                <h3 className="mt-4 font-semibold">{item}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Hands-on, creative, and tech-driven.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RESULTS */}
        <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Results Speak</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Learners worldwide have transformed their careers and creativity with us.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "+85%", label: "Career Growth" },
              { stat: "+90%", label: "Creative Confidence" },
              { stat: "+75%", label: "Project Completion" },
              { stat: "+95%", label: "Community Engagement" },
            ].map((res) => (
              <div
                key={res.label}
                className="bg-gradient-to-r from-purple-600 to-coral-600 text-white rounded-lg p-6 shadow-md transform transition hover:scale-105 hover:rotate-1"
              >
                <h3 className="text-2xl font-bold">{res.stat}</h3>
                <p>{res.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="bg-purple-100 dark:bg-purple-900 py-20 px-6 text-center">
          <blockquote className="text-xl italic max-w-3xl mx-auto animate-fadeIn">
            “This platform makes learning tech feel creative and fun,
            while still preparing me for real-world challenges.”
          </blockquote>
          <p className="mt-4 font-semibold">— Learner Testimonial</p>
        </section>

        {/* PROGRAMS */}
        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Popular Programs</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Creative Coding", "AI Projects", "Design Thinking", "Career Hub"].map((program) => (
              <div
                key={program}
                className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 transform transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-gray-300 dark:bg-gray-700 h-40 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">[Thumbnail]</span>
                </div>
                <h3 className="font-semibold">{program}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">8–12 min • Interactive</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            ))}
          </div>
        </section>

        {/* MEMBERSHIP */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Free Membership</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[1,2,3,4].map((i) => (
              <div key={i} className="transform transition hover:scale-105">
                <div className="bg-white w-16 h-16 mx-auto rounded-full mb-4 animate-bounce" />
                <p>Access tutorials, community, and career support.</p>
              </div>
            ))}
          </div>
          <Link
            to="/register"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold transform transition hover:scale-110 hover:bg-gray-100"
          >
            REGISTER FOR FREE
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="bg-blue-950 dark:bg-black text-white py-10 text-center">
          <h3 className="text-xl font-bold">Infinity Dream Learning</h3>
          <p className="mt-2">© Infinity Dream Learning 2026</p>
          <div className="flex justify-center gap-6 mt-4">
            <span className="hover:text-coral-400 transition">Facebook</span>
            <span className="hover:text-coral-400 transition">Twitter</span>
            <span className="hover:text-coral-400 transition">Instagram</span>
          </div>
        </footer>
      </div>
    </div>
  );
}