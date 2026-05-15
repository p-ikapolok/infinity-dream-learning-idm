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

{/* MAIN PLANNING LAYOUT */}
<div className="flex flex-col flex-1">

    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Planning Calendar
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Organize your study schedule, sync events, and manage upcoming activities.
        </p>
      </div>

      <div className="flex items-center gap-3">

        <button className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition">
          + Create Schedule
        </button>

        <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-blue-600 hover:bg-slate-50 transition">
          Sync Google Calendar
        </button>

      </div>
    </div>

    {/* Top Action Row */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

      {/* Navigation */}
      <div className="flex items-center gap-3">

        <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50 transition">
          ←
        </button>

        <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50 transition">
          →
        </button>

        <button className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
          Today
        </button>
      </div>

      {/* Current Month */}
      <h3 className="text-lg font-semibold text-slate-900">
        October 2026
      </h3>

    </div>

    {/* Calendar */}
    <div className="border border-slate-200 rounded-2xl overflow-hidden">

      {/* Week Days */}
      <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">

        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-400"
          >
            {day}
          </div>
        ))}

      </div>

      {/* Calendar Dates */}
      <div className="grid grid-cols-7">

        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="min-h-[130px] border-b border-r border-slate-100 p-3 hover:bg-slate-50 transition"
          >

            {/* Date */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium mb-3
                ${
                  i === 12
                    ? "bg-slate-900 text-white"
                    : "text-slate-700"
                }`}
            >
              {i + 1 <= 31 ? i + 1 : ""}
            </div>

            {/* Events */}
            {i === 12 && (
              <div className="flex flex-col gap-2">

                <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
                  Math Lecture • 10AM
                </div>

                <div className="px-2 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium">
                  Study Group • 2PM
                </div>

              </div>
            )}

            {i === 15 && (
              <div className="px-2 py-1 rounded-md bg-red-50 text-red-700 text-xs font-medium">
                Project Deadline
              </div>
            )}

          </div>
        ))}

      </div>
    </div>

    {/* Bottom Section */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

      {/* Upcoming Events */}
      <div className="border border-slate-200 rounded-2xl p-5">

        <h4 className="text-base font-semibold text-slate-900 mb-5">
          Upcoming Events
        </h4>

        <div className="flex flex-col gap-5">

          <div className="flex items-start gap-4">

            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2"></div>

            <div>
              <p className="text-sm font-medium text-slate-800">
                Science Quiz
              </p>

              <span className="text-xs text-slate-500">
                Oct 12 • 9:00 AM
              </span>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2"></div>

            <div>
              <p className="text-sm font-medium text-slate-800">
                Group Discussion
              </p>

              <span className="text-xs text-slate-500">
                Oct 14 • 2:30 PM
              </span>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-2"></div>

            <div>
              <p className="text-sm font-medium text-slate-800">
                Frontend Project Deadline
              </p>

              <span className="text-xs text-slate-500">
                Oct 15 • 11:59 PM
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Quick Schedule Creator */}
      <div className="border border-slate-200 rounded-2xl p-5">

        <h4 className="text-base font-semibold text-slate-900 mb-5">
          Quick Schedule
        </h4>

        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Event title"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-400"
          />

          <input
            type="date"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-400"
          />

          <input
            type="time"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-400"
          />

          <textarea
            rows={4}
            placeholder="Schedule description..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm resize-none focus:outline-none focus:border-slate-400"
          />

          <button className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition">
            Save Schedule
          </button>

        </div>
      </div>
  </div>
</div>
      </div>        
      </div>
    </LearningLayout>
  );
}