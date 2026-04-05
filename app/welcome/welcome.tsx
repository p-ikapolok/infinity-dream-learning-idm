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

            {/* DARK MODE */}
            <div className="flex justify-end px-6 py-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-semibold transform transition hover:scale-105"
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>

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

                  <div className="flex gap-4 mt-8">
                    <Link
                      to="/marketplace"
                      className="bg-coral-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                    >
                      Start Learning
                    </Link>

                    <Link
                      to="/ehub"
                      className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
                    >
                      Explore Hub
                    </Link>
                  </div>
                </div>

                <div className="h-80" />
              </div>
            </section>
          </div>
        </div>

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
                className="p-6 rounded-lg shadow-md hover:-translate-y-2 hover:shadow-xl transition bg-white dark:bg-gray-800"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 mx-auto rounded-full" />
                <h3 className="mt-4 font-semibold">{item}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Hands-on, creative, and tech-driven.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RESULTS — PENTAGON SVG */}
        <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Results Speak</h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Learners worldwide have transformed their careers and creativity with us.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
            {[
              { stat: "+85%", label: "Career Growth" },
              { stat: "+90%", label: "Creative Confidence" },
              { stat: "+75%", label: "Project Completion" },
              { stat: "+95%", label: "Community Engagement" },
            ].map((res) => (
              <div key={res.label} className="flex flex-col items-center">

                <div className="relative w-40 h-40 hover:scale-110 transition">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <polygon
                      points="50,5 95,38 77,95 23,95 5,38"
                      className="fill-purple-600 dark:fill-purple-500"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {res.stat}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm font-medium text-center">
                  {res.label}
                </p>

              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="bg-purple-100 dark:bg-purple-900 py-20 px-6 text-center">
          <blockquote className="text-xl italic max-w-3xl mx-auto">
            “This platform makes learning tech feel creative and fun,
            while still preparing me for real-world challenges.”
          </blockquote>
          <p className="mt-4 font-semibold">— Learner Testimonial</p>
        </section>

        {/* FOOTER */}
        <footer className="bg-blue-950 dark:bg-black text-white py-10 text-center">
          <h3 className="text-xl font-bold">Infinity Dream Learning</h3>
          <p className="mt-2">© Infinity Dream Learning 2026</p>

          <div className="flex justify-center gap-6 mt-4">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </footer>

      </div>
    </div>
  );
}