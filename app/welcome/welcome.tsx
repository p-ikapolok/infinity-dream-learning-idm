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

// FAQ Item component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border rounded-lg p-4 cursor-pointer transition hover:shadow-lg"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{question}</h3>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </div>
      {open && (
        <p className="mt-2 text-gray-600 dark:text-gray-300">{answer}</p>
      )}
    </div>
  );
}

export default function Welcome() {
  const [darkMode, setDarkMode] = useState(false);
  const [bounce, setBounce] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setBounce(true);
    setTimeout(() => setBounce(false), 300);
  };

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
                    <span className="text-white text-2xl font-bold">{res.stat}</span>
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

        {/* FAQ SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                question: "What courses does Infinity Dream Learning offer?",
                answer: "We offer tech, creative, and entrepreneurship courses, including real-world projects and hands-on learning."
              },
              {
                question: "How do I start learning?",
                answer: "Click the 'Start Learning' button above, sign up, and choose your course to begin."
              },
              {
                question: "Is there a community to interact with other learners?",
                answer: "Yes! Our platform includes a community hub where you can collaborate and get support."
              },
              {
                question: "Can I switch between dark and light mode?",
                answer: "Yes! Use the toggle switch in the footer to switch anytime. Your preference will be saved."
              }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-blue-950 dark:bg-black text-white py-10 text-center flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold">Infinity Dream Learning</h3>
          <p className="mt-2">© Infinity Dream Learning 2026</p>

          <div className="flex justify-center gap-6 mt-4">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>

          {/* Glow + Bounce + Pulse Dark/Light Mode Toggle */}
          <div
            className="relative flex items-center mt-6 w-36 h-8 rounded-full cursor-pointer select-none overflow-hidden"
            onClick={toggleDarkMode}
          >
            <div
              className={`absolute left-0 top-0 bottom-0 w-1/2 rounded-l-full transition-all duration-300 ${
                darkMode ? "bg-white/50" : "bg-white shadow-inner shadow-white/50 animate-pulse-half"
              }`}
            />
            <div
              className={`absolute right-0 top-0 bottom-0 w-1/2 rounded-r-full transition-all duration-300 ${
                darkMode ? "bg-black shadow-inner shadow-black/50 animate-pulse-half" : "bg-black/50"
              }`}
            />

            {/* Labels */}
            <span className="absolute left-2 text-sm font-semibold text-black z-10">
              Light
            </span>
            <span className="absolute right-2 text-sm font-semibold text-white z-10">
              Dark
            </span>

            {/* Round switch with bounce */}
            <div
              className={`absolute top-0.5 w-7 h-7 bg-gray-50 dark:bg-gray-900 rounded-full shadow-md z-20 transform transition-all duration-300 ${
                darkMode ? "translate-x-16" : "translate-x-0"
              } ${bounce ? "animate-bounce-short" : ""}`}
            ></div>
          </div>
        </footer>

        {/* Tailwind custom animations */}
        <style>
          {`
            @keyframes bounce-short {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-4px); }
            }
            .animate-bounce-short {
              animation: bounce-short 0.3s ease;
            }

            @keyframes pulse-half {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.6; }
            }
            .animate-pulse-half {
              animation: pulse-half 1.5s ease-in-out infinite;
            }
          `}
        </style>

      </div>
    </div>
  );
}