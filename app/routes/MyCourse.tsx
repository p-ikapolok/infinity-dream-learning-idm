import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";

export default function MyCourses() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full p-8 bg-slate-50 flex flex-col gap-6 overflow-y-auto">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border-2 border-slate-200">
          <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-wide">My Courses</h1>
            <p className="text-slate-500 text-sm">Manage and track your enrolled curriculum.</p>
          </div>
          <div className="flex gap-2">
            {["All", "Active", "Completed"].map((filter, i) => (
              <button key={i} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${i === 0 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            { title: "Advanced Machine Learning", topic: "AI Engine", progress: 60 },
            { title: "React Architecture Patterns", topic: "Frontend", progress: 100 },
            { title: "Calculus Foundations", topic: "Mathematics", progress: 15 },
            { title: "System Design Prep", topic: "Engineering", progress: 0 },
          ].map((course, i) => (
            <div key={i} className="flex flex-col sm:flex-row bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Thumbnail Placeholder */}
              <div className="bg-slate-100 sm:w-48 h-32 sm:h-auto flex items-center justify-center border-b-2 sm:border-b-0 sm:border-r-2 border-slate-200">
                <svg className="w-12 h-12 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              
              {/* Info */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{course.topic}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{course.title}</h3>
                
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-100 rounded-full h-2">
                    <div className={`h-2 rounded-full ${course.progress === 100 ? "bg-green-500" : "bg-blue-600"}`} style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 w-8">{course.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LearningLayout>
  );
}