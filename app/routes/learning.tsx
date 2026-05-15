import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LearningLayout from "../components/LearningLayout"; // Adjust import path as needed

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

// Stripped of individual colors to enforce the single accent color rule
const mainSubjects = [
  { id: "Mathematics", name: "Mathematics", progress: 85, lessonsCompleted: 42, totalLessons: 50, icon: "calculator" },
  { id: "English", name: "English Language", progress: 60, lessonsCompleted: 30, totalLessons: 50, icon: "book" },
  { id: "Kiswahili", name: "Kiswahili", progress: 45, lessonsCompleted: 22, totalLessons: 50, icon: "globe" },
  { id: "Science", name: "Science", progress: 75, lessonsCompleted: 38, totalLessons: 50, icon: "atom" },
  { id: "Social Studies", name: "Social Studies", progress: 50, lessonsCompleted: 25, totalLessons: 50, icon: "map" },
  { id: "Agriculture", name: "Agriculture", progress: 30, lessonsCompleted: 15, totalLessons: 50, icon: "leaf" },
  { id: "ICT", name: "ICT", progress: 90, lessonsCompleted: 45, totalLessons: 50, icon: "laptop" },
  { id: "Creative Arts", name: "Creative Arts", progress: 20, lessonsCompleted: 10, totalLessons: 50, icon: "palette" },
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
  { id: 1, title: "Mathematics Mid-Term Exam", date: "Oct 15, 09:00 AM", status: "Exam", priority: "danger" },
  { id: 2, title: "Science Assignment: Ecosystems", date: "Oct 16, 11:59 PM", status: "Homework", priority: "warning" },
  { id: 3, title: "Read Chapter 4: English", date: "Oct 18, 08:00 AM", status: "Reading", priority: "info" },
];

const schoolInfo = {
  motto: "Empowering minds, inspiring futures.",
  mission: "To provide world-class, tech-driven education accessible to every student.",
  vision: "A future where every child can achieve their infinite dreams.",
};

// ==========================================
// SCALABLE INLINE SVGS (Stroke strictly 1.5 - 2 for crispness)
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
  const navigate = useNavigate();

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full bg-[#f6f7f9] font-sans text-[#111827] overflow-y-auto">
        
        {/* Main Constraints: Max-width 1280px, centered, padding standard */}
        <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col gap-6 md:gap-8">  

          {/* ==========================================  
              SECTION 1: TOP HERO  
              ========================================== */}  
<section
  className="relative w-full py-20 px-6 overflow-hidden"
  style={{
    backgroundImage:
  "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Soft overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content wrapper (IMPORTANT FIX) */}
  <div className="relative max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

    {/* LEFT SIDE */}
    <div className="flex-1">
      <span className="inline-block px-3 py-1 bg-white/70 text-white/70 text-xs font-medium rounded-full border border-white/30">
        {student.grade} • {student.stage}
      </span>

      <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-grey">
        Welcome back, {student.name}.
      </h1>

      <p className="mt-4 text-lg text-white/70 max-w-2xl leading-relaxed">
        Your journey in the {student.system} continues. Stay consistent, stay curious, and keep building step by step.
      </p>

      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition flex items-center gap-2 text-sm">
        {React.createElement(Icons.play, { className: "w-4 h-4 fill-white" })}
        Continue Learning: {student.lastSubject}
      </button>
    </div>

    {/* RIGHT SIDE */}
    <div className="w-full lg:w-[320px] flex flex-col gap-6">

      {/* Progress */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-white/60">Overall Progress</span>
          <span className="font-semibold text-white/100">{student.overallProgress}%</span>
        </div>

        <div className="h-2 w-full bg-blue-600 rounded-full overflow-hidden">
          <div
            className="h-full bg-white-900 rounded-full"
            style={{ width: `${student.overallProgress}%` }}
          />
        </div>
      </div>

      {/* Inline stats (NOT cards) */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="text-xs text-white/60">Streak</div>
          <div className="text-2xl font-semibold text-white/100">
            {student.streak}
            <span className="text-sm text-white/60 ml-1">days</span>
          </div>
        </div>

        <div>
          <div className="text-xs text-white/60">XP</div>
          <div className="text-2xl font-semibold text-white/100">
            {student.xpPoints}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>  

          {/* ==========================================  
              SECTION 2: ANALYTICS OVERVIEW  
              ========================================== */}  
          <section className="w-full flex flex-col gap-4">  
        <h2 className="text-[22px] font-semibold text-[#111827]">Analytics Overview</h2>  
              <p className="text-[14px] text-[#6b7280] mt-1">View your overall progress analysis.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">  
              {analytics.map((stat, i) => (  
                <div key={i} className="flex flex-col gap-2 bg-[#ffffff] rounded-lg p-4 md:p-6 border border-[#e5e7eb]">  
                  <div className="text-[#6b7280]">  
                    {React.createElement(Icons[stat.icon], { className: "w-5 h-5" })}  
                  </div>  
                  <div className="mt-1">  
                    <div className="text-[22px] font-semibold text-[#111827] leading-none mb-1">{stat.value}</div>  
                    <div className="text-[12px] font-medium text-[#6b7280]">{stat.label}</div>  
                  </div>  
                </div>  
              ))}  
            </div>  
          </section>  

          {/* ==========================================  
              SECTION 3: SUBJECTS AREA (MAIN SECTION)  
              ========================================== */}  
          <section className="w-full flex flex-col gap-4">  
            <div>  
              <h2 className="text-[22px] font-semibold text-[#111827]">My Subjects</h2>  
              <p className="text-[14px] text-[#6b7280] mt-1">Continue learning your current grade subjects.</p>  
            </div>  

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">  
              {mainSubjects.map((subject) => (  
                <div
                  key={subject.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/subjects/${subject.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") navigate(`/subjects/${subject.id}`);
                  }}
                  className="group flex flex-col p-6 rounded-lg bg-[#ffffff] border border-[#e5e7eb] hover:border-[#d1d5db] transition-colors duration-150 cursor-pointer active:scale-[0.98]"
                > 
                  <div className="flex items-center gap-3 mb-6">  
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#f6f7f9] text-[#6b7280] group-hover:text-[#2563eb] group-hover:bg-[#eff6ff] transition-colors duration-150">  
                      {React.createElement(Icons[subject.icon], { className: "w-5 h-5" })}  
                    </div>  
                    <div>  
                      <h3 className="font-semibold text-[#111827] text-[16px]">{subject.name}</h3>  
                      <p className="text-[12px] font-normal text-[#6b7280]">  
                        {subject.lessonsCompleted} of {subject.totalLessons} lessons  
                      </p>  
                    </div>  
                  </div>  

                  <div className="mt-auto">  
                    <div className="flex justify-between text-[12px] font-medium text-[#6b7280] mb-2">  
                      <span>Progress</span>  
                      <span className="text-[#111827]">{subject.progress}%</span>  
                    </div>  
                    <div className="h-1.5 w-full bg-[#f6f7f9] rounded-full overflow-hidden mb-5">  
                      <div className="h-full bg-[#2563eb] rounded-full" style={{ width: `${subject.progress}%` }}></div>  
                    </div>  
                    
                    {/* Secondary Button format */}
                    <div className="w-full py-2 rounded-md text-[14px] font-medium text-[#2563eb] bg-transparent border border-[#e5e7eb] group-hover:border-[#2563eb] transition-colors duration-150 flex items-center justify-center gap-1">  
                      Continue {React.createElement(Icons.chevronRight, { className: "w-4 h-4" })}  
                    </div>  
                  </div>  
                </div>  
              ))}  
            </div>  
          </section>  

          {/* ==========================================  
              SPLIT ROW: AI INSIGHTS & TASKS  
              ========================================== */}  
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">  

            {/* SECTION 4: AI LEARNING INSIGHTS */}  
            <section className="flex flex-col gap-4">  
              <div className="flex items-center gap-2">  
                {React.createElement(Icons.sparkles, { className: "w-4 h-4 text-[#2563eb]" })}  
                <h2 className="text-[18px] font-semibold text-[#111827]">AI Learning Insights</h2>  
              </div>  
              <div className="flex flex-col gap-3">  
                {aiInsights.map((insight, i) => (  
                  <div key={i} className="p-4 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] flex items-start gap-3">  
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-1.5 shrink-0"></div>  
                    <p className="text-[14px] text-[#1d4ed8] font-medium">{insight}</p>  
                  </div>  
                ))}  
              </div>  
            </section>  

            {/* SECTION 6: UPCOMING TASKS & EXAMS */}  
            <section className="flex flex-col gap-4">  
              <div className="flex items-center gap-2">  
                {React.createElement(Icons.calendar, { className: "w-4 h-4 text-[#6b7280]" })}  
                <h2 className="text-[18px] font-semibold text-[#111827]">Upcoming Schedule</h2>  
              </div>  
              <div className="flex flex-col gap-0 border-l border-[#e5e7eb] ml-2">  
                {upcomingTasks.map((task) => (  
                  <div key={task.id} className="relative pl-6 py-3">  
                    {/* Status Colors: success, warning, danger, info */}
                    <div className={`absolute -left-1 top-5 w-2 h-2 rounded-full ring-4 ring-[#ffffff] ${  
                      task.priority === 'danger' ? 'bg-[#ef4444]' :  
                      task.priority === 'warning' ? 'bg-[#f59e0b]' :  
                      'bg-[#3b82f6]'  
                    }`}></div>  
                    <div className="bg-[#ffffff] rounded-lg p-4 border border-[#e5e7eb] hover:bg-[#f6f7f9] transition-colors duration-150">  
                      <div className="flex justify-between items-start mb-1">  
                        <h4 className="font-medium text-[#111827] text-[14px]">{task.title}</h4>  
                        <span className="text-[12px] font-medium text-[#6b7280]">  
                          {task.status}  
                        </span>  
                      </div>  
                      <p className="text-[12px] text-[#9ca3af]">{task.date}</p>  
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
            <section className="w-full flex flex-col gap-4">  
              <div>  
                <h2 className="text-[18px] font-semibold text-[#111827]">Additional Learning Paths</h2>  
                <p className="text-[14px] text-[#6b7280] mt-1">Short courses outside your main curriculum.</p>  
              </div>  
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">  
                {optionalCourses.map((course) => (  
                  <div key={course.id} className="bg-[#ffffff] p-5 rounded-lg border border-[#e5e7eb] flex flex-col md:flex-row md:items-center gap-5 hover:border-[#d1d5db] transition-colors duration-150 cursor-pointer active:scale-[0.98]">  
                    <div className="flex-1 w-full">  
                      <div className="text-[12px] font-medium text-[#6b7280] mb-1">{course.pathway}</div>  
                      <h3 className="font-semibold text-[#111827] text-[16px] mb-3">{course.name}</h3>  
                      <div className="flex items-center gap-3">  
                        <div className="h-1.5 flex-1 bg-[#f6f7f9] rounded-full overflow-hidden">  
                          <div className="h-full bg-[#111827] rounded-full" style={{ width: `${course.progress}%` }}></div>  
                        </div>  
                        <span className="text-[12px] font-medium text-[#6b7280]">{course.progress}%</span>  
                      </div>  
                    </div>  
                    <button className="w-full md:w-auto px-4 py-2 bg-transparent text-[#111827] border border-[#e5e7eb] text-[14px] font-medium rounded-md hover:bg-[#f6f7f9] shrink-0 transition-colors duration-150">  
                      Resume  
                    </button>  
                  </div>  
                ))}  
              </div>  
            </section>  
          )}
{/* ==========================================
              SECTION 7: SCHOOL MOTTO / MISSION / VISION
              ========================================== */}
          <section className="w-full py-12 mt-4 flex flex-col items-center justify-center text-center border-t border-[#e5e7eb] bg-blue-600">

  <div className="max-w-2xl mx-auto space-y-5">

    <h2 className="text-[18px] font-medium text-white">
      "{schoolInfo.motto}"
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[14px] mt-4">

      <div>
        <h4 className="font-semibold text-white mb-1">Our Mission</h4>
        <p className="text-blue-100">{schoolInfo.mission}</p>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-1">Our Vision</h4>
        <p className="text-blue-100">{schoolInfo.vision}</p>
      </div>

    </div>

  </div>

</section>

        </div>  
      </div>  
    </LearningLayout>
  );
}