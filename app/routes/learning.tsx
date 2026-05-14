import React, { useState } from "react";

// ==========================================
// MOCK DATA
// ==========================================
const student = {
  name: "Alex Mercer",
  grade: "Grade 5",
  stage: "Primary Level",
  completion: 68,
  streak: 14,
  xp: 12450,
};

const continueLearning = {
  subject: "Science",
  topic: "Plant Reproduction",
  subtopic: "Pollination",
  progress: 45,
};

const subjects = [
  { id: 1, name: "Mathematics", icon: "calculator", progress: 72, topics: "8/12", color: "text-blue-600", bg: "bg-blue-50", bar: "bg-blue-500" },
  { id: 2, name: "English", icon: "book", progress: 85, topics: "10/12", color: "text-indigo-600", bg: "bg-indigo-50", bar: "bg-indigo-500" },
  { id: 3, name: "Science", icon: "atom", progress: 45, topics: "5/12", color: "text-emerald-600", bg: "bg-emerald-50", bar: "bg-emerald-500" },
  { id: 4, name: "Social Studies", icon: "globe", progress: 90, topics: "11/12", color: "text-amber-600", bg: "bg-amber-50", bar: "bg-amber-500" },
  { id: 5, name: "Creative Arts", icon: "palette", progress: 30, topics: "3/10", color: "text-pink-600", bg: "bg-pink-50", bar: "bg-pink-500" },
  { id: 6, name: "ICT", icon: "computer", progress: 100, topics: "10/10", color: "text-cyan-600", bg: "bg-cyan-50", bar: "bg-cyan-500" },
];

const tasks = [
  { id: 1, subject: "Mathematics", title: "Algebraic Expressions Quiz", due: "Tomorrow, 10:00 AM", priority: "high" },
  { id: 2, subject: "Science", title: "Photosynthesis Essay", due: "Friday, 11:59 PM", priority: "medium" },
  { id: 3, subject: "English", title: "Reading Comprehension", due: "Next Monday", priority: "low" },
];

const revisions = [
  { id: 1, grade: "Grade 4", topic: "Fractions", detail: "Review addition: $ \\frac{a}{b} + \\frac{c}{b} = \\frac{a+c}{b} $" },
  { id: 2, grade: "Grade 3", topic: "Basic Grammar", detail: "Nouns, Verbs, and Adjectives" },
  { id: 3, grade: "Grade 4", topic: "Geometry", detail: "Area of a circle: $ A = \\pi r^2 $" },
];

const aiRecommendations = [
  { id: 1, type: "alert", text: "You are struggling with decimal division.", action: "Revise Decimals" },
  { id: 2, type: "praise", text: "You perform best in Science! Top 5% in your class.", action: "View Analytics" },
];

const achievements = [
  { id: 1, title: "14 Day Streak", icon: "flame" },
  { id: 2, title: "Algebra Master", icon: "award" },
  { id: 3, title: "50 Lessons Done", icon: "check-circle" },
];

const careers = ["Software Engineering", "Medicine", "Data Science", "Cybersecurity"];

// ==========================================
// SVG ICON COMPONENTS (Strictly inline SVGs)
// ==========================================
const Icons: Record<string, React.FC<{ className?: string }>> = {
  dashboard: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>,
  book: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  calculator: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/></svg>,
  atom: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  globe: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  palette: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  computer: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  play: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  clock: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  sparkles: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/></svg>,
  flame: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
  award: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  "check-circle": ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  menu: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  search: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  bell: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  rewind: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/></svg>,
  users: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  target: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  settings: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function InfinityDashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* ================= 11. SIDEBAR NAVIGATION ================= */}
      <aside className={`bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col ${collapsed ? "w-20" : "w-64"}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100 shrink-0">
          {!collapsed && <span className="font-black text-lg tracking-wide text-indigo-900 uppercase">Infinity Dream</span>}
          <button onClick={() => setCollapsed(!collapsed)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors mx-auto">
            {React.createElement(Icons.menu, { className: "w-5 h-5" })}
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-3">
          {[
            { name: "Dashboard", icon: "dashboard", active: true },
            { name: "Subjects", icon: "book" },
            { name: "Assignments", icon: "target" },
            { name: "Exams", icon: "clock" },
            { name: "Revision", icon: "rewind" },
            { name: "Achievements", icon: "award" },
            { name: "Community", icon: "users" },
            { name: "Career Paths", icon: "atom" },
            { name: "Settings", icon: "settings" },
          ].map((item) => (
            <button key={item.name} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all font-semibold ${item.active ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}>
              {React.createElement(Icons[item.icon], { className: "w-5 h-5 shrink-0" })}
              {!collapsed && <span className="text-sm tracking-wide">{item.name}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* ================= 12. TOP NAVBAR ================= */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-10">
          <div className="relative w-96">
            {React.createElement(Icons.search, { className: "w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" })}
            <input type="text" placeholder="Search subjects, topics, or AI help..." className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none" />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-colors">
              {React.createElement(Icons.bell, { className: "w-5 h-5" })}
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white font-bold text-xs">
              AM
            </div>
          </div>
        </header>

        {/* SCROLLABLE DASHBOARD AREA */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            
            {/* ================= 1. TOP WELCOME HERO ================= */}
            <section className="relative overflow-hidden bg-slate-900 rounded-3xl p-8 lg:p-10 shadow-lg text-white">
              {/* Abstract Background Shapes */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-20"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div className="inline-block bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest text-indigo-200 uppercase border border-white/10">
                    {student.grade} — {student.stage}
                  </div>
                  <h1 className="text-4xl font-black tracking-tight">Welcome back, {student.name}!</h1>
                  <p className="text-slate-300 font-medium text-lg max-w-xl">You are crushing it. Ready to dive into your next big discovery?</p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                    <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-md shadow-white/10 flex items-center gap-2">
                      {React.createElement(Icons.play, { className: "w-5 h-5 fill-current" })}
                      Continue Learning
                    </button>
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2">
                        {React.createElement(Icons.flame, { className: "w-5 h-5 text-orange-400" })}
                        <span className="font-bold">{student.streak} Day Streak</span>
                      </div>
                      <div className="w-px h-4 bg-white/20"></div>
                      <div className="font-bold text-indigo-200">{student.xp} XP</div>
                    </div>
                  </div>
                </div>

                {/* Progress Ring */}
                <div className="relative w-40 h-40 shrink-0 flex items-center justify-center bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-indigo-400" strokeDasharray={`${student.completion}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-3xl font-black">{student.completion}%</span>
                    <span className="block text-xs text-indigo-200 font-bold uppercase tracking-widest mt-1">Overall</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= 2. CONTINUE LEARNING & 7. AI RECOMMENDATIONS ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Continue Banner */}
              <div className="lg:col-span-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-6 lg:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  {React.createElement(Icons.atom, { className: "w-32 h-32" })}
                </div>
                <div className="relative z-10">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">Last Opened • {continueLearning.subject}</span>
                  <h2 className="text-3xl font-black mt-4 mb-1">{continueLearning.topic}</h2>
                  <p className="text-emerald-50 font-medium">Subtopic: {continueLearning.subtopic}</p>
                </div>
                <div className="relative z-10 mt-8 flex items-center justify-between">
                  <div className="flex-1 mr-8">
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span>Progress</span>
                      <span>{continueLearning.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: `${continueLearning.progress}%` }}></div>
                    </div>
                  </div>
                  <button className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-sm shrink-0">
                    Resume Lesson
                  </button>
                </div>
              </div>

              {/* AI Assistant Hub */}
              <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 flex flex-col shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                <div className="flex items-center gap-2 mb-6">
                  {React.createElement(Icons.sparkles, { className: "w-5 h-5 text-indigo-500" })}
                  <h3 className="font-black text-slate-900 tracking-wide uppercase">AI Assistant</h3>
                </div>
                <div className="flex flex-col gap-3 flex-1 justify-center">
                  {aiRecommendations.map((rec) => (
                    <div key={rec.id} className={`p-4 rounded-xl border ${rec.type === 'alert' ? 'bg-orange-50 border-orange-200' : 'bg-indigo-50 border-indigo-200'}`}>
                      <p className="text-sm font-semibold text-slate-800 mb-2">{rec.text}</p>
                      <button className={`text-xs font-bold uppercase tracking-wider hover:underline ${rec.type === 'alert' ? 'text-orange-600' : 'text-indigo-600'}`}>
                        {rec.action} →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
{/* ================= 3. CURRENT SUBJECTS GRID ================= */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-wide">Current Subjects</h2>
                <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">View All Curriculum</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {subjects.map((sub) => (
                  <div key={sub.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group cursor-pointer">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${sub.bg} ${sub.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {React.createElement(Icons[sub.icon], { className: "w-6 h-6" })}
                      </div>
                      <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md">{sub.topics} Topics</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{sub.name}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-500">
                        <span>Completion</span>
                        <span>{sub.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${sub.bar} rounded-full transition-all duration-1000`} style={{ width: `${sub.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            