import React, { useState } from "react";
import LearningLayout from '../components/LearningLayout'; // Adjust import path as needed

// ==========================================
// MOCK DATA
// ==========================================
const student = {
  name: "Alex Mercer",
  grade: "Grade 5",
  activeSystem: "CBC System",
  overallProgress: 68,
};

const systems = {
  cbc: {
    title: "CBC Learning",
    status: "Grade 5 Active",
    progress: 72,
  },
  career: {
    title: "Career Pathways",
    status: "Software Engineering (Explorer)",
    progress: 15,
  }
};

const lastActivity = {
  system: "CBC Learning",
  context: "Science Module",
  lesson: "Energy Forms & Transfer",
  progress: 45,
};

const globalStats = [
  { label: "Lessons", value: "142", icon: "book" },
  { label: "Study Hours", value: "34.5", icon: "clock" },
  { label: "Day Streak", value: "14", icon: "flame" },
  { label: "Achievements", value: "8", icon: "award" },
];

const upcomingEvents = [
  { id: 1, title: "Mid-Term Science Exam", date: "Oct 15 • 09:00 AM", type: "Exam" },
  { id: 2, title: "Intro to Logic Workshop", date: "Oct 18 • 02:00 PM", type: "Career" },
  { id: 3, title: "Mathematics Quiz", date: "Oct 20 • 10:00 AM", type: "Quiz" },
];

const aiRecommendations = [
  "Continue CBC Grade 5 Science to maintain your 14-day streak.",
  "Revise algebraic expressions based on recent assessment data.",
  "Explore 'Logic Basics' in your Career Pathway.",
];

// ==========================================
// SCALABLE ICONS
// ==========================================
const Icons: Record<string, React.FC<{ className?: string }>> = {
  play: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>,
  book: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  compass: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  clock: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  flame: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
  award: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  sparkles: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/></svg>,
  arrowRight: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  barChart: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  settings: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
};

// ==========================================
// INNER DASHBOARD COMPONENT
// ==========================================
export default function GlobalDashboardContent() {
       const [collapsed, setCollapsed] = useState(false);
  return (
        <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
    <div className="w-full h-full flex flex-col gap-6 p-4 md:p-6 lg:p-8 bg-slate-50 overflow-y-auto font-sans text-slate-900">
      
      {/* ==========================================
          ROW 1: HERO + CONTINUE LEARNING
          ========================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* LEFT: HERO CARD (Spans 2 columns on large screens) */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="flex-1 z-10 w-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase tracking-widest border border-slate-200">
                {student.grade}
              </span>
              <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded uppercase tracking-widest border border-blue-100">
                {student.activeSystem}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
              Welcome back, {student.name}.
            </h1>
            <p className="text-sm text-slate-500 mb-8 max-w-md">
              You are making excellent progress this week. Review your global standing or jump right back into your primary studies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2">
                Continue Learning {React.createElement(Icons.arrowRight, { className: "w-4 h-4" })}
              </button>
              <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm flex items-center justify-center gap-2">
                View Progress
              </button>
            </div>
          </div>

          {/* Right: Modern Analytics Visualization */}
          <div className="w-full md:w-64 bg-slate-50 rounded-xl p-5 border border-slate-100 z-10 shrink-0">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Global Progress</div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-700">Curriculum</span>
                  <span className="text-slate-900">{systems.cbc.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: `${systems.cbc.progress}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-700">Career Paths</span>
                  <span className="text-slate-900">{systems.career.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${systems.career.progress}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTINUE LEARNING CARD */}
        <div className="xl:col-span-1 bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-4 translate-x-4 pointer-events-none"></div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Last Opened</span>
            </div>
            
            <div className="mb-2">
              <span className="text-xs text-slate-400 font-medium">{lastActivity.context}</span>
            </div>
            <h2 className="text-xl font-bold leading-tight mb-6">{lastActivity.lesson}</h2>
          </div>

          <div className="space-y-4 mt-auto">
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-400 mb-1.5">
                <span>Session Progress</span>
                <span>{lastActivity.progress}%</span>
              </div>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: `${lastActivity.progress}%` }}></div>
              </div>
            </div>
            
            <button className="w-full bg-white text-slate-900 py-3 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
              {React.createElement(Icons.play, { className: "w-4 h-4" })} Resume Session
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          ROW 2: LEARNING SYSTEMS
          ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* CBC LEARNING CARD */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100">
                {React.createElement(Icons.book, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{systems.cbc.title}</h3>
                <p className="text-sm text-slate-500 font-medium mt-0.5">{systems.cbc.status}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-auto space-y-5">
            <div>
              <div className="flex justify-between text-sm font-semibold text-slate-700 mb-2">
                <span>Stage Completion</span>
                <span>{systems.cbc.progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${systems.cbc.progress}%` }}></div>
              </div>
            </div>
            <button className="w-full bg-white border border-slate-200 text-slate-700 py-2.5 rounded-lg text-sm font-semibold group-hover:border-blue-200 group-hover:text-blue-700 transition-colors flex justify-center items-center gap-2">
              Enter Dashboard {React.createElement(Icons.arrowRight, { className: "w-4 h-4" })}
            </button>
          </div>
        </div>

        {/* CAREER LEARNING CARD */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center border border-indigo-100">
                {React.createElement(Icons.compass, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{systems.career.title}</h3>
                <p className="text-sm text-slate-500 font-medium mt-0.5">{systems.career.status}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-auto space-y-5">
            <div>
              <div className="flex justify-between text-sm font-semibold text-slate-700 mb-2">
                <span>Pathway Progress</span>
                <span>{systems.career.progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full transition-all duration-500" style={{ width: `${systems.career.progress}%` }}></div>
              </div>
            </div>
            <button className="w-full bg-white border border-slate-200 text-slate-700 py-2.5 rounded-lg text-sm font-semibold group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors flex justify-center items-center gap-2">
              Explore Career Learning {React.createElement(Icons.arrowRight, { className: "w-4 h-4" })}
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          ROW 3: ANALYTICS + EVENTS + AI
          ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* GLOBAL ANALYTICS */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            {React.createElement(Icons.barChart, { className: "w-4 h-4 text-slate-400" })}
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Analytics</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {globalStats.map((stat, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg p-4 flex flex-col justify-between">
                <div className="text-slate-400 mb-2">
                  {React.createElement(Icons[stat.icon], { className: "w-4 h-4" })}
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900 leading-none mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UPCOMING EVENTS */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            {React.createElement(Icons.clock, { className: "w-4 h-4 text-slate-400" })}
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Upcoming Events</h3>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex flex-col pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-semibold text-sm text-slate-900 truncate pr-4">{event.title}</h4>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                    {event.type}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {event.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI RECOMMENDATIONS */}
        <div className="bg-[#f8fafc] rounded-xl border border-blue-100 p-6 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -translate-y-10 translate-x-10 pointer-events-none"></div>
          
          <div className="flex items-center gap-2 mb-5 z-10">
            {React.createElement(Icons.sparkles, { className: "w-4 h-4 text-blue-600" })}
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">AI Recommendations</h3>
          </div>
          <div className="flex flex-col gap-3 flex-1 z-10">
            {aiRecommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-blue-50 p-3 rounded-lg shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{rec}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ==========================================
          ROW 4: QUICK ACTIONS
          ========================================== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        <button className="bg-white border border-slate-200 py-3.5 px-4 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2 w-full">
          Enter CBC Learning
        </button>
        <button className="bg-white border border-slate-200 py-3.5 px-4 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2 w-full">
          Career Pathways
        </button>
        <button className="bg-white border border-slate-200 py-3.5 px-4 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2 w-full">
          Full Analytics
        </button>
        <button className="bg-white border border-slate-200 py-3.5 px-4 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2 w-full">
          {React.createElement(Icons.settings, { className: "w-4 h-4" })} Global Settings
        </button>
      </div>

    </div>
   </LearningLayout>
  );
}