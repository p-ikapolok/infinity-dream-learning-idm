import { useState, useEffect } from "react";
import { Outlet } from "react-router";

export default function LearningPortalDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Defaulting to premium Dark Mode
  const [activeRoute, setActiveRoute] = useState("dashboard");

  // Sync dark mode class with the root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Mock student data
  const student = {
    name: "Alex Vance",
    progress: 68,
    currentTopic: "Backpropagation Calculus"
  };

  return (
    <div className={`flex h-screen w-full overflow-hidden font-sans transition-colors duration-300 ${isDarkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
      
      {/* 1. Global Sidebar */}
      <aside className={`w-64 border-r flex flex-col justify-between ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
        <div>
          {/* Brand Logo */}
          <div className="h-20 flex items-center px-6 border-b border-inherit">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="font-extrabold tracking-tight text-lg">Infinity Dream</span>
            </div>
          </div>

          {/* Navigation Matrix */}
          <nav className="p-4 space-y-2">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-3">The AI Matrix</div>
            
            {[
              { id: "dashboard", label: "Command Center", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { id: "path", label: "The Navigator", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
              { id: "studio", label: "The Studio", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { id: "evaluator", label: "The Evaluator", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { id: "guardian", label: "The Guardian", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => setActiveRoute(nav.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm ${
                  activeRoute === nav.id 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                    : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={nav.icon} /></svg>
                {nav.label}
              </button>
            ))}
          </nav>
        </div>

        {/* User Footer & Theme Toggle */}
        <div className={`p-4 border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-bold text-gray-500">Theme</span>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-12 h-6 rounded-full relative transition-colors ${isDarkMode ? "bg-blue-600" : "bg-gray-300"}`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? "translate-x-6" : "translate-x-0"}`} />
            </button>
          </div>
          <button className={`w-full flex items-center gap-3 p-2 rounded-xl transition-colors ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-inner">
              AV
            </div>
            <div className="text-left flex-1">
              <div className="text-sm font-bold truncate">{student.name}</div>
              <div className="text-xs text-blue-500 font-medium">Pro Member</div>
            </div>
          </button>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col relative">
        
        {/* Telemetry Header */}
        <header className={`h-20 border-b flex items-center justify-between px-8 z-10 ${isDarkMode ? "bg-gray-950/80 border-gray-800 backdrop-blur-md" : "bg-white/80 border-gray-200 backdrop-blur-md"}`}>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">System Overview</h1>
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>AI Core Status: Optimal</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-bold">Cohort Progress</div>
                <div className="text-xs text-blue-500">{student.progress}% Completed</div>
              </div>
              {/* Progress Ring */}
              <div className="relative w-12 h-12">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className={`${isDarkMode ? "text-gray-800" : "text-gray-200"}`} strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-blue-600" strokeDasharray={`${student.progress}, 100`} strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
              </div>
            </div>
            <button className={`p-2 rounded-full relative transition-colors ${isDarkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}>
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-inherit rounded-full" />
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
          </div>
        </header>

        {/* Dynamic Viewport Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto space-y-8">
   <Outlet />
            
            {/* Hero Welcome Widget */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-white shadow-xl">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl font-extrabold mb-4">Welcome back to the Studio.</h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Your AI Copilot has reviewed yesterday's structural entropy analysis. Today, we are focusing on minimizing the error function mathematically: <br />
                  <span className="inline-block mt-4 font-mono bg-black/20 px-4 py-2 rounded-lg border border-white/10">
                    {"$ \\frac{\\partial E}{\\partial w_{ij}} = \\delta_j o_i $"}
                  </span>
                </p>
                <button className="bg-white text-blue-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-bold transition-colors shadow-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Resume Lesson
                </button>
              </div>
            </div>

            {/* Matrix Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Evaluator Status */}
              <div className={`p-6 rounded-3xl border shadow-sm flex flex-col justify-between ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
                <div>
                  <div className="flex items-center gap-3 mb-4 text-green-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                    <h3 className="font-bold text-sm tracking-widest uppercase">Latest Evaluation</h3>
                  </div>
                  <h4 className="text-xl font-bold mb-1">Predictive Market Engine</h4>
                  <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Scored in the top 5% of your cohort.</p>
                </div>
                <div className="text-4xl font-extrabold text-blue-600">92/100</div>
              </div>

              {/* Card 2: Guardian Integrity */}
              <div className={`p-6 rounded-3xl border shadow-sm flex flex-col justify-between ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
                <div>
                  <div className="flex items-center gap-3 mb-4 text-indigo-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <h3 className="font-bold text-sm tracking-widest uppercase">System Guardian</h3>
                  </div>
                  <h4 className="text-xl font-bold mb-1">Originality Verified</h4>
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Structural entropy `$H(X)$` is well within natural variance limits.</p>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 text-xs font-bold px-3 py-1 rounded-full">Cleared</span>
                </div>
              </div>

              {/* Card 3: Communicator Status */}
              <div className={`p-6 rounded-3xl border shadow-sm flex flex-col justify-between relative overflow-hidden ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-purple-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    <h3 className="font-bold text-sm tracking-widest uppercase">Finley AI</h3>
                  </div>
                  <h4 className="text-xl font-bold mb-1">Mentor Online</h4>
                  <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Context synced with your latest backpropagation module.</p>
                </div>
                <button className="relative z-10 font-bold text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline">
                  Open Voice Link
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* 4. Floating Finley Widget */}
        <div className="absolute bottom-8 right-8 z-50">
          <button className="group relative w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl shadow-blue-600/40 flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 border-2 border-gray-50 dark:border-gray-950 rounded-full" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
              Ask Finley
            </div>
          </button>
        </div>

      </main>
    </div>
  );
}