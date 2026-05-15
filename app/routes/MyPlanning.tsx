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
{/* MAIN PLANNING LAYOUT */}
<div className="flex flex-col xl:flex-row gap-8 flex-1">

  {/* =========================================
      LEFT SIDE — TIMELINE
  ========================================= */}
  <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6">

    {/* Section Header */}
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Timeline View
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Your learning schedule and upcoming activities.
        </p>
      </div>

      <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition">
        + Create Schedule
      </button>
    </div>

    {/* Timeline */}
    <div className="relative border-l border-slate-200 ml-3 space-y-10">

      {[
        {
          time: "Today • 10:00 AM",
          title: "Live Math Lecture",
          desc: "Reviewing Bayes' Theorem and probability concepts.",
          type: "lecture"
        },
        {
          time: "Today • 11:30 PM",
          title: "Project Milestone Due",
          desc: "Submit frontend architecture for grading.",
          type: "deadline"
        },
        {
          time: "Tomorrow • 2:00 PM",
          title: "Study Group Session",
          desc: "Algorithms & Data Structures peer review.",
          type: "group"
        }
      ].map((event, i) => (
        <div key={i} className="relative pl-8">

          {/* Dot */}
          <div
            className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white ${
              event.type === "deadline"
                ? "bg-red-500"
                : event.type === "lecture"
                ? "bg-blue-600"
                : "bg-purple-500"
            }`}
          />

          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            {event.time}
          </span>

          <div className="mt-2 pb-6 border-b border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">
              {event.title}
            </h3>

            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              {event.desc}
            </p>
          </div>

        </div>
      ))}
    </div>
  </div>

  {/* =========================================
      DIVIDER
  ========================================= */}
  <div className="hidden xl:flex justify-center">
    <div className="w-px bg-slate-200 h-full"></div>
  </div>

  {/* =========================================
      RIGHT SIDE — CALENDAR
  ========================================= */}
  <div className="xl:w-[420px] w-full bg-white border border-slate-200 rounded-2xl p-6 flex flex-col">

    {/* Calendar Header */}
    <div className="flex items-start justify-between mb-6">

      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Calendar
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Manage schedules and sync your study plans.
        </p>
      </div>

      <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition">
        Sync Google
      </button>
    </div>

    {/* Mini Top Actions */}
    <div className="flex items-center gap-3 mb-6">

      <button className="flex-1 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition">
        + Add Event
      </button>

      <button className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
        Today
      </button>
    </div>

    {/* Calendar Grid */}
    <div className="flex-1">

      {/* Month */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900">
          October 2026
        </h3>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-slate-50">
            ←
          </button>

          <button className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-slate-50">
            →
          </button>
        </div>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 mb-3 text-center text-xs font-semibold text-slate-400 uppercase">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2">

        {[...Array(35)].map((_, i) => (
          <button
            key={i}
            className={`aspect-square rounded-xl text-sm font-medium transition
              ${
                i === 12
                  ? "bg-slate-900 text-white"
                  : "hover:bg-slate-100 text-slate-700"
              }`}
          >
            {i + 1 <= 31 ? i + 1 : ""}
          </button>
        ))}

      </div>

      {/* Upcoming Mini Events */}
      <div className="mt-8 pt-6 border-t border-slate-100">

        <h4 className="text-sm font-semibold text-slate-900 mb-4">
          Upcoming Events
        </h4>

        <div className="flex flex-col gap-4">

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>

            <div>
              <p className="text-sm font-medium text-slate-800">
                Science Quiz
              </p>

              <span className="text-xs text-slate-500">
                Oct 12 • 9:00 AM
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>

            <div>
              <p className="text-sm font-medium text-slate-800">
                Group Discussion
              </p>

              <span className="text-xs text-slate-500">
                Oct 14 • 2:30 PM
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </LearningLayout>
  );
}