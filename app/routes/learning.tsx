import React, { useState } from "react";
import LearningLayout from '../components/LearningLayout'; // Adjust import path as needed

// ==========================================
// REALISTIC MOCK DATA (ONE PRIMARY SYSTEM)
// ==========================================
const student = {
  name: "Alex Mercer",
  grade: "Grade 5",
  stage: "Primary Level",
  system: "CBC Curriculum",
  overallProgress: 68,
  streak: 14,
  xpPoints: 2450,
  lastSubject: "Science",
};

const analytics = [
  { label: "Lessons Completed", value: "142", icon: "checkCircle" },
  { label: "Study Hours", value: "34.5", icon: "clock" },
  { label: "Exams Passed", value: "12", icon: "award" },
  { label: "Weekly Progress", value: "+8%", icon: "trendingUp" },
];

const mainSubjects = [
  { id: 1, name: "Mathematics", progress: 85, lessonsCompleted: 42, totalLessons: 50, icon: "calculator", color: "text-blue-600", bg: "bg-blue-50" },
  { id: 2, name: "English Language", progress: 60, lessonsCompleted: 30, totalLessons: 50, icon: "book", color: "text-indigo-600", bg: "bg-indigo-50" },
  { id: 3, name: "Kiswahili", progress: 45, lessonsCompleted: 22, totalLessons: 50, icon: "globe", color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: 4, name: "Science", progress: 75, lessonsCompleted: 38, totalLessons: 50, icon: "atom", color: "text-cyan-600", bg: "bg-cyan-50" },
  { id: 5, name: "Social Studies", progress: 50, lessonsCompleted: 25, totalLessons: 50, icon: "map", color: "text-amber-600", bg: "bg-amber-50" },
  { id: 6, name: "Agriculture", progress: 30, lessonsCompleted: 15, totalLessons: 50, icon: "leaf", color: "text-green-600", bg: "bg-green-50" },
  { id: 7, name: "ICT", progress: 90, lessonsCompleted: 45, totalLessons: 50, icon: "laptop", color: "text-violet-600", bg: "bg-violet-50" },
  { id: 8, name: "Creative Arts", progress: 20, lessonsCompleted: 10, totalLessons: 50, icon: "palette", color: "text-rose-600", bg: "bg-rose-50" },
];

const aiInsights = [
  "You are improving remarkably in Mathematics this week.",
  "Recommended revision: Energy Forms in Science.",
  "Your streak is at 14 days. Keep up the momentum!",
];

const optionalCourses = [
  { id: 1, name: "Intro to Logic & Programming", progress: 15, pathway: "Software Engineering" },
  { id: 2, name: "Digital Design Basics", progress: 40, pathway: "Graphic Design" },
];

const upcomingTasks = [
  { id: 1, title: "Mathematics Mid-Term Exam", date: "Oct 15, 09:00 AM", status: "Exam", priority: "high" },
  { id: 2, title: "Science Assignment: Ecosystems", date: "Oct 16, 11:59 PM", status: "Homework", priority: "medium" },
  { id: 3, title: "Read Chapter 4: English", date: "Oct 18, 08:00 AM", status: "Reading", priority: "low" },
];

const schoolInfo = {
  motto: "Empowering minds, inspiring futures.",
  mission: "To provide world-class, tech-driven education accessible to every student.",
  vision: "A future where every child can achieve their infinite dreams.",
};

// ==========================================
// SCALABLE INLINE SVGS
// ==========================================
const Icons: Record<string, React.FC<{ className?: string }>> = {
  play: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>,
  checkCircle: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  clock: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  award: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  trendingUp: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  calculator: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="12" y1="18" x2="12" y2="18"/></svg>,
  book: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  globe: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  atom: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  map: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
  leaf: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><line x1="2" y1="22" x2="11" y2="13"/></svg>,
  laptop: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  palette: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  sparkles: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/></svg>,
  chevronRight: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
  calendar: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function GlobalDashboard() {
         const [collapsed, setCollapsed] = useState(false);
  return (
        <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full bg-[#fcfcfd] font-sans text-slate-900 pb-20 overflow-y-auto">
        
        <div className="w-full px-4 md:px-8 lg:px-12 pt-8 flex flex-col gap-12">
          
          {/* ==========================================
              SECTION 1: TOP HERO
              ========================================== */}
          <section className="w-full rounded-[2rem] bg-gradient-to-br from-[#f0f4f8] via-white to-[#f5f7fa] p-8 md:p-12 relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10">
              
              {/* Left Side: Welcome */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white text-slate-600 text-xs font-semibold rounded-full border border-slate-200">
                    {student.grade} • {student.stage}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
                  Welcome back, {student.name}.
                </h1>
                <p className="text-lg text-slate-500 max-w-xl mb-8">
                  Your journey in the {student.system} continues. Stay curious and keep building your knowledge.
                </p>
                
                <div>
                  <button className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-semibold shadow-sm hover:bg-slate-800 transition-all flex items-center gap-3 text-sm">
                    {React.createElement(Icons.play, { className: "w-4 h-4 fill-white" })}
                    Continue Learning: {student.lastSubject}
                  </button>
                </div>
              </div>

              {/* Right Side: Progress Stats */}
              <div className="lg:w-1/3 flex flex-col justify-center gap-5">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-slate-500">Overall Course Progress</span>
                    <span className="text-blue-600">{student.overallProgress}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200/60 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${student.overallProgress}%` }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-100">
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Current Streak</div>
                    <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                      {student.streak} <span className="text-sm font-medium text-slate-500">days</span>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-100">
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Total XP</div>
                    <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                      {student.xpPoints} <span className="text-sm font-medium text-slate-500">xp</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </section>

          {/* ==========================================
              SECTION 2: ANALYTICS OVERVIEW
              ========================================== */}
          <section className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {analytics.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-50/50 rounded-2xl p-5 border border-slate-100/50">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-500 shadow-sm">
                    {React.createElement(Icons[stat.icon], { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800 leading-none mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==========================================
              SECTION 3: SUBJECTS AREA (MAIN SECTION)
              ========================================== */}
          <section className="w-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">My Subjects</h2>
              <p className="text-slate-500 mt-1">Continue learning your current grade subjects.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
              {mainSubjects.map((subject) => (
                <div 
                  key={subject.id} 
                  className="group flex flex-col p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${subject.bg} ${subject.color}`}>
                      {React.createElement(Icons[subject.icon], { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">{subject.name}</h3>
                      <p className="text-xs font-medium text-slate-500">
                        {subject.lessonsCompleted} of {subject.totalLessons} lessons
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                      <span>Progress</span>
                      <span>{subject.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
                      <div className={`h-full ${subject.color.replace('text', 'bg')} rounded-full`} style={{ width: `${subject.progress}%` }}></div>
                    </div>
                    
                    <button className="w-full py-2.5 rounded-lg text-sm font-semibold text-slate-600 bg-slate-100/50 group-hover:bg-white group-hover:text-slate-900 group-hover:shadow-sm transition-all flex items-center justify-center gap-1.5">
                      Continue {React.createElement(Icons.chevronRight, { className: "w-4 h-4" })}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==========================================
              SPLIT ROW: AI INSIGHTS & TASKS
              ========================================== */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* SECTION 4: AI LEARNING INSIGHTS */}
            <section className="flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                {React.createElement(Icons.sparkles, { className: "w-5 h-5 text-blue-500" })}
                <h2 className="text-xl font-bold text-slate-900">AI Learning Insights</h2>
              </div>
              <div className="flex flex-col gap-3">
                {aiInsights.map((insight, i) => (
                  <div key={i} className="relative overflow-hidden p-4 rounded-xl bg-blue-50/40 border border-blue-100/50 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                    <p className="text-slate-700 font-medium leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 6: UPCOMING TASKS & EXAMS (Moved up for better flow) */}
            <section className="flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                {React.createElement(Icons.calendar, { className: "w-5 h-5 text-slate-500" })}
                <h2 className="text-xl font-bold text-slate-900">Upcoming Schedule</h2>
              </div>
              <div className="flex flex-col gap-0 relative before:absolute before:inset-y-2 before:left-2.5 before:w-px before:bg-slate-200">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="relative pl-8 py-3 group">
                    <div className={`absolute left-1.5 top-5 w-2 h-2 rounded-full border-2 border-white ring-1 ${
                      task.priority === 'high' ? 'bg-rose-500 ring-rose-200' :
                      task.priority === 'medium' ? 'bg-amber-500 ring-amber-200' :
                      'bg-blue-500 ring-blue-200'
                    }`}></div>
                    <div className="bg-white rounded-xl p-4 border border-slate-100 group-hover:border-slate-200 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-slate-800">{task.title}</h4>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {task.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">{task.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ==========================================
              SECTION 5: OPTIONAL CAREER COURSES
              ========================================== */}
          {optionalCourses.length > 0 && (
            <section className="w-full mt-4">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">Additional Learning Paths</h2>
                <p className="text-sm text-slate