import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";

// ================= MOCK DATA =================

const student = {
  name: "Alex Mercer",
  level: "Grade 5 • CBC Curriculum",
  school: "Greenlight Academy",
  progress: 68,
  streak: 14,
  xp: 2450,
  currentSubject: "Science",
};

const stats = [
  { label: "Lessons Completed", value: "142", icon: "check" },
  { label: "Study Hours", value: "34.5", icon: "clock" },
  { label: "Exams Passed", value: "12", icon: "award" },
  { label: "Weekly Progress", value: "+8%", icon: "trend" },
];

const subjects = [
  { id: "math", name: "Mathematics", progress: 85, icon: "calc" },
  { id: "eng", name: "English", progress: 60, icon: "book" },
  { id: "sci", name: "Science", progress: 75, icon: "atom" },
  { id: "ict", name: "ICT", progress: 90, icon: "laptop" },
];

const tasks = [
  { title: "Mathematics Exam", date: "Today 10:00 AM", type: "Exam" },
  { title: "Science Assignment", date: "Tomorrow 11:59 PM", type: "Homework" },
];

// ================= SVG ICONS =================

const Icon = {
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
  calc: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" />
    </svg>
  ),
  book: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19h16V5H6a2 2 0 0 0-2 2z" />
    </svg>
  ),
  atom: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2a20 20 0 0 1 0 20a20 20 0 0 1 0-20z" />
    </svg>
  ),
  laptop: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="12" />
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

// ================= COMPONENT =================

export default function GlobalDashboard() {
  const [collapsed, setCollapsed] = useState(false); // ✅ REQUIRED
  const navigate = useNavigate();

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full min-h-screen bg-white text-slate-900">

        {/* HEADER */}
        <div className="w-full border-b border-slate-200 px-6 py-6">
          <p className="text-xs text-slate-500">{student.level}</p>
          <h1 className="text-2xl font-semibold">
            Welcome, {student.name}
          </h1>
          <p className="text-sm text-slate-500">
            {student.school}
          </p>
        </div>

        <div className="px-6 py-6 space-y-10">

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {stats.map((s, i) => (
              <div key={i} className="border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  {React.createElement(Icon[s.icon], {
                    className: "w-5 h-5 text-slate-600",
                  })}
                  <div>
                    <p className="text-lg font-semibold">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* ================= PROGRESS ================= */}
          <div className="border border-slate-200 p-5">
            <div className="flex justify-between text-sm mb-2">
              <span>Overall Progress</span>
              <span>{student.progress}%</span>
            </div>
            <div className="h-2 bg-slate-100">
              <div
                className="h-full bg-slate-900"
                style={{ width: `${student.progress}%` }}
              />
            </div>
          </div>

          {/* ================= SUBJECTS ================= */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Subjects</h2>

            <div className="grid md:grid-cols-4 gap-4">

              {subjects.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => navigate(`/subjects/${sub.id}`)}
                  className="border border-slate-200 p-4 text-left hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {React.createElement(Icon[sub.icon], {
                      className: "w-5 h-5 text-slate-600",
                    })}
                    <p className="font-medium">{sub.name}</p>
                  </div>

                  <p className="text-xs text-slate-500 mb-2">
                    {sub.progress}% complete
                  </p>

                  <div className="h-1 bg-slate-200">
                    <div
                      className="h-full bg-slate-900"
                      style={{ width: `${sub.progress}%` }}
                    />
                  </div>

                  <div className="mt-3 text-xs text-slate-500 flex items-center gap-1">
                    Continue <Icon.arrow className="w-4 h-4" />
                  </div>
                </button>
              ))}

            </div>
          </div>

          {/* ================= TASKS ================= */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Upcoming Tasks</h2>

            <div className="space-y-3">

              {tasks.map((t, i) => (
                <div key={i} className="border border-slate-200 p-4 flex justify-between">
                  <div>
                    <p className="font-medium">{t.title}</p>
                    <p className="text-xs text-slate-500">{t.date}</p>
                  </div>

                  <span className="text-xs border border-slate-300 px-2 py-1">
                    {t.type}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </LearningLayout>
  );
}