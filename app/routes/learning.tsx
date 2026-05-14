import React from "react";
import LearningLayout from '../components/LearningLayout'; // Adjust import path as needed

// ==========================================
// MOCK DATA (GLOBAL SCOPE ONLY)
// ==========================================
const student = {
  name: "Alex Mercer",
  grade: "Grade 5",
  activeSystem: "CBC System",
};

const systems = {
  cbc: {
    title: "CBC Learning",
    status: "Grade 5 Active",
    progress: 68,
  },
  career: {
    title: "Career Pathways",
    status: "Software Engineering (Explorer)",
    progress: 12,
  }
};

const lastActivity = {
  system: "CBC Learning",
  context: "Science",
  lesson: "Energy Forms & Transfer",
};

const globalStats = [
  { label: "Lessons", value: "142", icon: "book" },
  { label: "Hours", value: "34", icon: "clock" },
  { label: "Streak", value: "14", icon: "flame" },
  { label: "Awards", value: "8", icon: "award" },
];

const upcomingEvents = [
  { id: 1, title: "Mid-Term Science Exam", date: "Oct 15, 09:00 AM", type: "Exam" },
  { id: 2, title: "Intro to Logic Workshop", date: "Oct 18, 02:00 PM", type: "Career" },
];

const aiRecommendations = [
  "Continue CBC Grade 5 to maintain streak.",
  "Revise recent weak areas in assessment.",
  "Explore 'Logic Basics' in Career Pathway.",
];

// ==========================================
// SCALABLE INLINE SVGS (Stroke 1.5 for Pro SaaS Look)
// ==========================================
const Icons: Record<string, React.FC<{ className?: string }>> = {
  play: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>,
  book: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  clock: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  flame: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
  award: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  compass: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  sparkles: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/></svg>,
  settings: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  arrowRight: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
};

// ==========================================
// COMPONENT
// ==========================================
export default function GlobalDashboard() {
     const [collapsed, setCollapsed] = useState(false);
  return (
        <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-5 font-sans text-slate-900 p-4 lg:p-6 h-full justify-center">
        
        {/* ================= 1. HERO & 3. CONTINUE LEARNING (ROW 1) ================= */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Welcome Area */}
          <section className="flex-1 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-slate-50 text-slate-600 text-xs font-semibold px-2 py-1 rounded-md border border-slate-200 uppercase tracking-wide">
                {student.grade}
              </span>
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded-md border border-blue-100 uppercase tracking-wide">
                Active: {student.activeSystem}
              </span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Welcome back, {student.name}.
            </h1>
            <p className="text-sm text-slate-500 mt-1">Here is your global learning overview.</p>
          </section>

          {/* Quick Resume */}
          <section className="md:w-1/3 bg-slate-900 text-white border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-10 translate-x-10 pointer-events-none"></div>
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Last Opened • {lastActivity.system}
              </div>
              <h2 className="text-lg font-semibold leading-tight">{lastActivity.lesson}</h2>
              <p className="text-sm text-slate-400 mt-0.5">{lastActivity.context}</p>
            </div>
            <button className="mt-4 w-full bg-white text-slate-900 py-2 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
              {React.createElement(Icons.play, { className: "w-4 h-4" })} Resume
            </button>
          </section>
        </div>

        {/* ================= 2. SYSTEM OVERVIEW CARDS (ROW 2) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* CBC Pillar */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center border border-blue-100">
                  {React.createElement(Icons.book, { className: "w-5 h-5" })}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{systems.cbc.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{systems.cbc.status}</p>
                </div>
              </div>
            </div>
            <div className="mt-auto space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-600">
                <span>Overall Progress</span>
                <span>{systems.cbc.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${systems.cbc.progress}%` }}></div>
              </div>
            </div>
            <button className="mt-5 w-full bg-white border border-slate-200 text-slate-700 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors flex justify-center items-center gap-2">
              Enter Dashboard {React.createElement(Icons.arrowRight, { className: "w-3 h-3" })}
            </button>
          </div>

          {/* Career Pillar */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center border border-indigo-100">
                  {React.createElement(Icons.compass, { className: "w-5 h-5" })}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{systems.career.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{systems.career.status}</p>
                </div>
              </div>
            </div>
            <div className="mt-auto space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-600">
                <span>Pathway Progress</span>
                <span>{systems.career.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${systems.career.progress}%` }}></div>
              </div>
            </div>
            <button className="mt-5 w-full bg-white border border-slate-200 text-slate-700 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors flex justify-center items-center gap-2">
              Enter Career Path {React.createElement(Icons.arrowRight, { className: "w-3 h-3" })}
            </button>
          </div>
        </div>

        {/* ================= 4. STATS, 5. EVENTS, 6. AI (ROW 3) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Global Progress */}
          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">Global Progress</h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {globalStats.map((stat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex flex-col justify-between">
                  <div className="text-slate-400 mb-1">
                    {React.createElement(Icons[stat.icon], { className: "w-4 h-4" })}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900 leading-tight">{stat.value}</div>
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">Upcoming Schedule</h3>
            <div className="space-y-3 flex-1">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex flex-col pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium text-sm text-slate-900 truncate pr-2">{event.title}</h4>
                    <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded uppercase tracking-wide shrink-0">
                      {event.type}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
                    {React.createElement(Icons.clock, { className: "w-3 h-3" })} {event.date}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Recommendations */}
          <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
            <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-4 flex items-center gap-1.5">
              {React.createElement(Icons.sparkles, { className: "w-3.5 h-3.5" })} Next Steps
            </h3>
            <ul className="space-y-3 flex-1">
              {aiRecommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></div>
                  <p className="text-slate-600 font-medium text-sm leading-snug">{rec}</p>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* ================= 7. QUICK NAVIGATION (ROW 4) ================= */}
        <section className="flex flex-wrap gap-3">
          <button className="flex-1 min-w-[150px] bg-white border border-slate-200 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm text-center">
            CBC Dashboard
          </button>
          <button className="flex-1 min-w-[150px] bg-white border border-slate-200 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm text-center">
            Career Paths
          </button>
          <button className="flex-1 min-w-[150px] bg-white border border-slate-200 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm text-center">
            Full Analytics
          </button>
          <button className="px-4 bg-white border border-slate-200 py-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center shrink-0">
            {React.createElement(Icons.settings, { className: "w-4 h-4" })}
          </button>
        </section>

      </div>
    </LearningLayout>
  );
}