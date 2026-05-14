import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";

export default function MyPlanning() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full p-8 bg-slate-50 flex flex-col gap-6 overflow-y-auto">
        
        <div className="bg-white p-6 rounded-xl border-2 border-slate-200 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-wide">My Planning</h1>
            <p className="text-slate-500 text-sm">Your upcoming schedule and deadlines.</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Sync Calendar
          </button>
        </div>

        {/* Timeline View */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-6 flex-1">
          <div className="relative border-l-2 border-slate-100 ml-3 md:ml-6 space-y-8">
            
            {[
              { time: "Today, 10:00 AM", title: "Live Math Lecture", desc: "Reviewing Bayes' Theorem: $ P(A|B) = \\frac{P(B|A)P(A)}{P(B)} $", type: "lecture" },
              { time: "Today, 11:30 PM", title: "Project Milestone Due", desc: "Submit frontend architecture for grading.", type: "deadline" },
              { time: "Tomorrow, 2:00 PM", title: "Study Group", desc: "Algorithms & Data Structures peer review.", type: "group" }
            ].map((event, i) => (
              <div key={i} className="relative pl-8">
                {/* Timeline Dot */}
                <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white ${
                  event.type === "deadline" ? "bg-red-500" : event.type === "lecture" ? "bg-blue-600" : "bg-purple-500"
                }`}></div>
                
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{event.time}</span>
                <div className="mt-2 p-4 border-2 border-slate-100 rounded-lg hover:border-slate-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                  <p className="text-sm text-slate-600 mt-1 font-medium">{event.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </LearningLayout>
  );
}