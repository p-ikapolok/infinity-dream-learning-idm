import React from "react";
import { useNavigate } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";

// =======================
// MOCK DATA
// =======================

const student = {
  name: "Alex Mercer",
  level: "Grade 5 • CBC Curriculum",
  school: "Greenlight Academy",
  overallProgress: 74,
  weeklyGoal: 82,
  streak: 14,
  hours: 36,
  xp: 2450,
  currentSubject: "Science",
};

const stats = [
  { title: "Lessons Completed", value: "142", icon: "check" },
  { title: "Study Hours", value: "36h", icon: "clock" },
  { title: "Exams Passed", value: "12", icon: "award" },
  { title: "Weekly Growth", value: "+8%", icon: "trend" },
];

const subjects = [
  { id: "mathematics", name: "Mathematics", progress: 84, icon: "calculator" },
  { id: "english", name: "English", progress: 68, icon: "book" },
  { id: "science", name: "Science", progress: 76, icon: "science" },
  { id: "kiswahili", name: "Kiswahili", progress: 52, icon: "globe" },
  { id: "social-studies", name: "Social Studies", progress: 48, icon: "map" },
  { id: "ict", name: "ICT", progress: 90, icon: "laptop" },
];

const tasks = [
  { title: "Mathematics CAT", time: "Today • 2:00 PM", status: "Exam" },
  { title: "Science Assignment", time: "Tomorrow • 11:59 PM", status: "Homework" },
  { title: "Read English Chapter 4", time: "Friday • 8:00 AM", status: "Reading" },
];

const insights = [
  "You improved by 12% in Mathematics this week.",
  "Science revision recommended: Energy & Ecosystems.",
  "You are close to reaching your weekly goal.",
];

// =======================
// ICONS (SVG)
// =======================

const Icons = {
  check: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  clock: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  award: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="7" />
      <path d="M8 21l4-3 4 3" />
    </svg>
  ),
  trend: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l6-6 4 4 7-7" />
    </svg>
  ),
  calculator: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" />
      <path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01" />
    </svg>
  ),
  book: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  science: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 2v7l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V2" />
    </svg>
  ),
  globe: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
    </svg>
  ),
  map: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
    </svg>
  ),
  laptop: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="12" />
      <path d="M2 20h20" />
    </svg>
  ),
  arrow: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  ),
};

// =======================
// COMPONENT
// =======================

export default function GlobalDashboard() {
  const navigate = useNavigate();

  return (
    <LearningLayout>
      <div className="w-full min-h-screen bg-slate-100">

        <div className="w-full px-4 md:px-8 py-6 space-y-6">

          {/* ================= HERO (FLAT PROFESSIONAL) ================= */}
          <section className="w-full bg-slate-900 text-white px-6 py-10 border border-slate-800">
            <div className="flex flex-col lg:flex-row justify-between gap-10">

              <div className="flex-1">
                <p className="text-xs text-slate-300 uppercase tracking-wide">
                  {student.level} • {student.school}
                </p>

                <h1 className="text-3xl md:text-5xl font-semibold mt-3">
                  Welcome back, {student.name}
                </h1>

                <p className="text-slate-300 mt-4 max-w-xl">
                  Continue your learning journey with structured progress tracking and academic consistency.
                </p>

                <button className="mt-6 bg-white text-slate-900 px-5 py-3 font-semibold flex items-center gap-2">
                  <Icons.arrow className="w-5 h-5" />
                  Continue {student.currentSubject}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full lg:w-[360px] text-sm">

                <div className="border border-slate-700 p-4">
                  <p className="text-slate-400">Progress</p>
                  <p className="text-2xl font-semibold">{student.overallProgress}%</p>
                </div>

                <div className="border border-slate-700 p-4">
                  <p className="text-slate-400">Weekly Goal</p>
                  <p className="text-2xl font-semibold">{student.weeklyGoal}%</p>
                </div>

                <div className="border border-slate-700 p-4">
                  <p className="text-slate-400">Streak</p>
                  <p className="text-2xl font-semibold">{student.streak} days</p>
                </div>

                <div className="border border-slate-700 p-4">
                  <p className="text-slate-400">XP</p>
                  <p className="text-2xl font-semibold">{student.xp}</p>
                </div>

              </div>
            </div>
          </section>

          {/* ================= STATS (MINIMAL) ================= */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3">
                  <Icons[s.icon] className="w-5 h-5 text-slate-600" />
                  <div>
                    <p className="text-xl font-semibold">{s.value}</p>
                    <p className="text-sm text-slate-500">{s.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* ================= SUBJECTS ================= */}
          <section className="bg-white border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Subjects</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {subjects.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => navigate(`/subjects/${sub.id}`)}
                  className="border border-slate-200 p-4 text-left hover:bg-slate-50"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{sub.name}</p>
                    <Icons.arrow className="w-4 h-4 text-slate-500" />
                  </div>

                  <p className="text-sm text-slate-500 mt-1">
                    Progress: {sub.progress}%
                  </p>

                  <div className="h-1 bg-slate-200 mt-3">
                    <div
                      className="h-1 bg-slate-900"
                      style={{ width: `${sub.progress}%` }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* ================= INSIGHTS + TASKS ================= */}
          <section className="grid md:grid-cols-2 gap-4">

            <div className="bg-white border border-slate-200 p-6">
              <h2 className="font-semibold mb-4">AI Insights</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                {insights.map((i, idx) => (
                  <li key={idx} className="border-l-2 border-slate-300 pl-3">
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-6">
              <h2 className="font-semibold mb-4">Tasks</h2>

              <div className="space-y-3">
                {tasks.map((t, i) => (
                  <div key={i} className="border border-slate-200 p-3">
                    <p className="font-medium">{t.title}</p>
                    <p className="text-sm text-slate-500">{t.time}</p>
                    <span className="text-xs text-slate-600">{t.status}</span>
                  </div>
                ))}
              </div>
            </div>

          </section>

        </div>
      </div>
    </LearningLayout>
  );
}