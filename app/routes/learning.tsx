import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";

// ==========================================
// STUDENT DATA
// ==========================================
const student = {
  name: "Alex Mercer",
  grade: "Grade 5",
  stage: "Primary → Advanced Pathway",
  system: "CBC Curriculum + Skill Tracks",
  overallProgress: 68,
  streak: 14,
  xpPoints: 2450,
  lastSubject: "Science",
};

// ==========================================
// ANALYTICS
// ==========================================
const analytics = [
  { label: "Lessons Completed", value: "142", icon: "checkCircle" },
  { label: "Study Hours", value: "34.5", icon: "clock" },
  { label: "Exams Passed", value: "12", icon: "award" },
  { label: "Weekly Progress", value: "+8%", icon: "trendingUp" },
];

// ==========================================
// SUBJECTS (EXPANDED: PRIMARY + SECONDARY + COLLEGE)
// ==========================================
const mainSubjects = [
  { id: "mathematics", name: "Mathematics", progress: 85, icon: "calculator", color: "text-blue-600", bg: "bg-blue-50" },
  { id: "english", name: "English Language", progress: 60, icon: "book", color: "text-indigo-600", bg: "bg-indigo-50" },
  { id: "kiswahili", name: "Kiswahili", progress: 45, icon: "globe", color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "science", name: "General Science", progress: 75, icon: "atom", color: "text-cyan-600", bg: "bg-cyan-50" },
  { id: "social-studies", name: "Social Studies", progress: 50, icon: "map", color: "text-amber-600", bg: "bg-amber-50" },
  { id: "agriculture", name: "Agriculture", progress: 30, icon: "leaf", color: "text-green-600", bg: "bg-green-50" },
  { id: "ict", name: "ICT / Computer Studies", progress: 90, icon: "laptop", color: "text-violet-600", bg: "bg-violet-50" },
  { id: "creative-arts", name: "Creative Arts", progress: 20, icon: "palette", color: "text-rose-600", bg: "bg-rose-50" },

  // Secondary level expansion
  { id: "physics", name: "Physics", progress: 55, icon: "atom", color: "text-sky-600", bg: "bg-sky-50" },
  { id: "chemistry", name: "Chemistry", progress: 40, icon: "atom", color: "text-teal-600", bg: "bg-teal-50" },
  { id: "biology", name: "Biology", progress: 62, icon: "leaf", color: "text-green-700", bg: "bg-green-50" },
  { id: "history", name: "History", progress: 48, icon: "map", color: "text-orange-600", bg: "bg-orange-50" },
  { id: "geography", name: "Geography", progress: 70, icon: "map", color: "text-amber-700", bg: "bg-amber-50" },
  { id: "business", name: "Business Studies", progress: 38, icon: "calculator", color: "text-gray-600", bg: "bg-gray-50" },

  // College / advanced pathways
  { id: "programming", name: "Programming Basics", progress: 50, icon: "laptop", color: "text-violet-700", bg: "bg-violet-50" },
  { id: "data-science", name: "Intro to Data Science", progress: 35, icon: "calculator", color: "text-blue-700", bg: "bg-blue-50" },
];

// ==========================================
// INSIGHTS / TASKS
// ==========================================
const aiInsights = [
  "You are improving strongly in Mathematics.",
  "Revise ecosystems in Science for better retention.",
  "Your 14-day streak shows strong consistency.",
];

const upcomingTasks = [
  { id: 1, title: "Mathematics Mid-Term Exam", date: "Oct 15, 09:00 AM", status: "Exam", priority: "high" },
  { id: 2, title: "Science Assignment", date: "Oct 16, 11:59 PM", status: "Homework", priority: "medium" },
  { id: 3, title: "English Reading Task", date: "Oct 18, 08:00 AM", status: "Reading", priority: "low" },
];

// ==========================================
// ICONS (UNCHANGED)
// ==========================================
const Icons = {
  play: (p) => <svg {...p} viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21" fill="currentColor" /></svg>,
  checkCircle: (p) => <svg {...p} viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /></svg>,
  clock: (p) => <svg {...p} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>,
  award: (p) => <svg {...p} viewBox="0 0 24 24"><circle cx="12" cy="8" r="7" /></svg>,
  trendingUp: (p) => <svg {...p} viewBox="0 0 24 24"><polyline points="23 6 13 15 8 10 1 18" /></svg>,
  calculator: (p) => <svg {...p} viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" /></svg>,
  book: (p) => <svg {...p} viewBox="0 0 24 24"><path d="M4 19h16V2H4z" /></svg>,
  globe: (p) => <svg {...p} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>,
  atom: (p) => <svg {...p} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /></svg>,
  map: (p) => <svg {...p} viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2" /></svg>,
  leaf: (p) => <svg {...p} viewBox="0 0 24 24"><path d="M12 2C6 6 6 18 12 22" /></svg>,
  laptop: (p) => <svg {...p} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" /></svg>,
  palette: (p) => <svg {...p} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>,
};

// ==========================================
// COMPONENT
// ==========================================
export default function GlobalDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full min-h-screen bg-slate-50 text-slate-900 px-4 md:px-10 py-8 space-y-10">

        {/* HERO */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome back, {student.name}
          </h1>
          <p className="text-slate-500 mt-2">
            {student.system} • {student.stage}
          </p>

          <button className="mt-6 bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 flex items-center gap-2">
            <Icons.play className="w-4 h-4" />
            Continue {student.lastSubject}
          </button>
        </section>

        {/* ANALYTICS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {analytics.map((a, i) => (
            <div key={i} className="bg-white border p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <Icons[a.icon] className="w-4 h-4" />
                <span className="text-sm">{a.label}</span>
              </div>
              <div className="text-xl font-bold mt-2">{a.value}</div>
            </div>
          ))}
        </section>

        {/* SUBJECTS */}
        <section>
          <h2 className="text-xl font-bold mb-4">All Subjects</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mainSubjects.map((s) => (
              <div
                key={s.id}
                onClick={() => navigate(`/subjects/${s.id}`)}
                className="bg-white border p-4 cursor-pointer hover:shadow-sm transition"
              >
                <div className="flex items-center gap-3">
                  <div className={`${s.bg} ${s.color} p-2`}>
                    <Icons[s.icon] className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-xs text-slate-500">{s.progress}% complete</div>
                  </div>
                </div>

                <div className="h-1 bg-slate-100 mt-3">
                  <div className="h-1 bg-slate-900" style={{ width: `${s.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INSIGHTS + TASKS */}
        <div className="grid md:grid-cols-2 gap-6">

          <section className="bg-white border p-5">
            <h3 className="font-bold mb-3">AI Insights</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {aiInsights.map((i, idx) => (
                <li key={idx}>• {i}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white border p-5">
            <h3 className="font-bold mb-3">Upcoming Tasks</h3>
            <ul className="space-y-3 text-sm">
              {upcomingTasks.map((t) => (
                <li key={t.id} className="border-b pb-2">
                  <div className="font-medium">{t.title}</div>
                  <div className="text-slate-500 text-xs">{t.date}</div>
                </li>
              ))}
            </ul>
          </section>

        </div>

      </div>
    </LearningLayout>
  );
}