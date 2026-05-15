import React from "react";
import { useNavigate } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";

// ======================================================
// PROFESSIONAL REALISTIC MOCK DATA
// ======================================================

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
  {
    title: "Lessons Completed",
    value: "142",
    color: "bg-blue-50 text-blue-600",
    icon: "check",
  },
  {
    title: "Study Hours",
    value: "36h",
    color: "bg-violet-50 text-violet-600",
    icon: "clock",
  },
  {
    title: "Exams Passed",
    value: "12",
    color: "bg-emerald-50 text-emerald-600",
    icon: "award",
  },
  {
    title: "Weekly Growth",
    value: "+8%",
    color: "bg-orange-50 text-orange-600",
    icon: "trend",
  },
];

const subjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    lessons: 42,
    total: 50,
    progress: 84,
    color: "bg-blue-600",
    light: "bg-blue-50",
    text: "text-blue-600",
    icon: "calculator",
  },
  {
    id: "english",
    name: "English",
    lessons: 34,
    total: 50,
    progress: 68,
    color: "bg-indigo-600",
    light: "bg-indigo-50",
    text: "text-indigo-600",
    icon: "book",
  },
  {
    id: "science",
    name: "Science",
    lessons: 38,
    total: 50,
    progress: 76,
    color: "bg-cyan-600",
    light: "bg-cyan-50",
    text: "text-cyan-600",
    icon: "science",
  },
  {
    id: "kiswahili",
    name: "Kiswahili",
    lessons: 26,
    total: 50,
    progress: 52,
    color: "bg-green-600",
    light: "bg-green-50",
    text: "text-green-600",
    icon: "globe",
  },
  {
    id: "social-studies",
    name: "Social Studies",
    lessons: 24,
    total: 50,
    progress: 48,
    color: "bg-amber-600",
    light: "bg-amber-50",
    text: "text-amber-600",
    icon: "map",
  },
  {
    id: "ict",
    name: "ICT",
    lessons: 45,
    total: 50,
    progress: 90,
    color: "bg-violet-600",
    light: "bg-violet-50",
    text: "text-violet-600",
    icon: "laptop",
  },
];

const tasks = [
  {
    title: "Mathematics CAT",
    time: "Today • 2:00 PM",
    status: "Exam",
  },
  {
    title: "Science Assignment",
    time: "Tomorrow • 11:59 PM",
    status: "Homework",
  },
  {
    title: "Read English Chapter 4",
    time: "Friday • 8:00 AM",
    status: "Reading",
  },
];

const aiInsights = [
  "You improved by 12% in Mathematics this week.",
  "Science revision recommended: Energy & Ecosystems.",
  "You are close to reaching your weekly goal.",
];

// ======================================================
// SVG ICONS
// ======================================================

const Icons = {
  check: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),

  clock: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),

  award: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="7" />
      <path d="M8 21l4-3 4 3" />
    </svg>
  ),

  trend: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  ),

  play: ({ className }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  ),

  calculator: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M8 6h8" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
      <path d="M8 15h.01M12 15h.01M16 15h.01" />
      <path d="M8 19h.01M12 19h.01M16 19h.01" />
    </svg>
  ),

  book: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),

  science: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M10 2v7l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V2" />
      <path d="M8 12h8" />
    </svg>
  ),

  globe: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 010 20a15 15 0 010-20z" />
    </svg>
  ),

  map: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </svg>
  ),

  laptop: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="4" width="20" height="12" rx="2" />
      <path d="M2 20h20" />
    </svg>
  ),

  arrow: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  ),
};

// ======================================================
// COMPONENT
// ======================================================

export default function GlobalDashboard() {
  const navigate = useNavigate();

  return (
    <LearningLayout>
      <div className="w-full min-h-screen bg-slate-100 overflow-x-hidden">

        {/* MAIN CONTAINER */}
        <div className="w-full px-3 md:px-5 lg:px-6 py-3 space-y-4">

          {/* HERO */}
          <section className="w-full rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
            <div className="w-full p-5 md:p-8 lg:p-10">

              <div className="flex flex-col xl:flex-row gap-8 justify-between">

                {/* LEFT */}
                <div className="flex-1">

                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold mb-5">
                    {student.level}
                  </div>

                  <h1 className="text-3xl md:text-5xl font-black leading-tight">
                    Welcome back,
                    <br />
                    {student.name}
                  </h1>

                  <p className="text-slate-300 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
                    Continue your learning journey at {student.school}.
                    Stay consistent, complete your lessons, and improve your performance every day.
                  </p>

                  <button className="mt-7 h-12 px-6 rounded-xl bg-white text-slate-900 font-bold flex items-center gap-3 hover:scale-[1.02] transition-all">
                    <Icons.play className="w-5 h-5" />
                    Continue {student.currentSubject}
                  </button>
                </div>

                {/* RIGHT */}
                <div className="w-full xl:w-[340px] grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                    <p className="text-xs text-slate-300 mb-2">
                      Overall Progress
                    </p>

                    <h2 className="text-3xl font-black">
                      {student.overallProgress}%
                    </h2>

                    <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-400 rounded-full"
                        style={{
                          width: `${student.overallProgress}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                    <p className="text-xs text-slate-300 mb-2">
                      Weekly Goal
                    </p>

                    <h2 className="text-3xl font-black">
                      {student.weeklyGoal}%
                    </h2>

                    <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full"
                        style={{
                          width: `${student.weeklyGoal}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                    <p className="text-xs text-slate-300">
                      Study Streak
                    </p>

                    <h2 className="text-3xl font-black mt-2">
                      {student.streak}
                    </h2>

                    <p className="text-sm text-slate-300 mt-1">
                      days active
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                    <p className="text-xs text-slate-300">
                      XP Points
                    </p>

                    <h2 className="text-3xl font-black mt-2">
                      {student.xp}
                    </h2>

                    <p className="text-sm text-slate-300 mt-1">
                      total earned
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* STATS */}
          <section className="grid grid-cols-2 xl:grid-cols-4 gap-3">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
                >
                  {React.createElement(Icons[item.icon], {
                    className: "w-6 h-6",
                  })}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {item.value}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

          </section>

          {/* SUBJECTS */}
          <section className="bg-white rounded-3xl border border-slate-200 p-4 md:p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  My Subjects
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                  Continue learning your active subjects.
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

              {subjects.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => navigate(`/subjects/${subject.id}`)}
                  className="group bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl p-5 text-left transition-all"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-4">

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${subject.light} ${subject.text}`}
                      >
                        {React.createElement(Icons[subject.icon], {
                          className: "w-7 h-7",
                        })}
                      </div>

                      <div>
                        <h3 className="font-black text-lg text-slate-900">
                          {subject.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {subject.lessons}/{subject.total} lessons
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="mt-5">

                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-slate-500">
                        Progress
                      </span>

                      <span className="text-slate-900">
                        {subject.progress}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${subject.color}`}
                        style={{
                          width: `${subject.progress}%`,
                        }}
                      />
                    </div>

                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-sm font-bold text-slate-700">
                        Continue Learning
                      </span>

                      <Icons.arrow className="w-5 h-5 text-slate-500 group-hover:translate-x-1 transition-all" />

                    </div>

                  </div>

                </button>
              ))}

            </div>
          </section>

          {/* INSIGHTS + TASKS */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">

            {/* AI INSIGHTS */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6">

              <h2 className="text-2xl font-black text-slate-900 mb-6">
                AI Learning Insights
              </h2>

              <div className="space-y-4">

                {aiInsights.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-blue-50 border border-blue-100 p-4"
                  >
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

            {/* TASKS */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6">

              <h2 className="text-2xl font-black text-slate-900 mb-6">
                Upcoming Tasks
              </h2>

              <div className="space-y-4">

                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 p-4 flex items-center justify-between"
                  >

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {task.title}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        {task.time}
                      </p>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                      {task.status}
                    </div>

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