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

  const toggleDarkMode = () => setDarkMode(!darkMode);

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

                  <div className="flex gap-4 mt-8">
                    <Link
                      to="/learning-login"
                      className="bg-coral-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                    >
                      Start Learning
                    </Link>

                    <Link
                      to="/ehub-login"
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

        {/* RESULTS */}
        <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Results Speak</h2>

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

        {/* FAQ */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">FAQ</h2>

          <div className="space-y-4">
            {[
              {
                question: "What courses does Infinity Dream Learning offer?",
                answer: "We offer tech, creative, and entrepreneurship courses, including real-world projects and hands-on learning."
              },
              {
                question: "How do I start learning?",
                answer: "Click the Start Learning button above, sign up, and choose your course."
              },
              {
                question: "Is there a community?",
                answer: "Yes! Our platform includes a community hub where you collaborate."
              },
              {
                question: "Can I switch theme?",
                answer: "Yes! Use the toggle in the footer."
              }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
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

      {/* Socials */}
      <div className="flex gap-4 text-lg">
        <span className="cursor-pointer hover:text-gray-300">🌐</span>
        <span className="cursor-pointer hover:text-gray-300">🐦</span>
        <span className="cursor-pointer hover:text-gray-300">📸</span>
        <span className="cursor-pointer hover:text-gray-300">💼</span>
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