import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";

export default function Projects() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full p-8 bg-slate-50 flex flex-col gap-6 overflow-y-auto">
        
        {/* HEADER */}
<div className="flex flex-col gap-5">

  {/* TITLE */}
  <h1 className="text-3xl font-black text-slate-900 tracking-tight">
    Projects
  </h1>

  {/* NAV + SEARCH */}
  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">

    {/* LEFT SIDE */}
    <div className="flex items-center gap-2 overflow-x-auto pb-1">

      {["Active", "Completed", "Archived", "Drafts"].map((item, i) => (
        <button
          key={i}
          className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
            i === 0
              ? "bg-slate-900 text-white"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-3 w-full xl:w-auto">

      {/* SEARCH */}
      <div className="relative flex-1 xl:w-[320px]">

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search projects..."
          className="w-full h-12 rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm font-medium outline-none focus:ring-4 focus:ring-slate-200"
        />
      </div>

      {/* FILTER */}
      <button className="h-12 w-12 rounded-2xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-100 transition">

        <svg
          className="w-5 h-5 text-slate-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <circle cx="9" cy="6" r="2" fill="currentColor" stroke="none" />

          <line x1="4" y1="12" x2="20" y2="12" />
          <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />

          <line x1="4" y1="18" x2="20" y2="18" />
          <circle cx="11" cy="18" r="2" fill="currentColor" stroke="none" />
        </svg>
      </button>
    </div>
  </div>
</div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {[
            { title: "Build a Neural Network", tag: "AI Engine", status: "In Progress", daysLeft: 3 },
            { title: "E-Commerce Database", tag: "Backend", status: "Not Started", daysLeft: 7 },
          ].map((project, i) => (
            <div key={i} className="bg-white border-2 border-slate-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">
                  {project.tag}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {project.daysLeft} Days Left
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-sm text-slate-500 mb-6 flex-1">
  {"Implement a strict requirement using standard functions like f(x) = 1 / (1 + e^(-x)) for the activation layer."}
</p>
              
              <div className="flex items-center gap-3 mt-auto pt-4 border-t-2 border-slate-100">
                <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg font-bold transition-colors">
                  Open Workspace
                </button>
                <button className="px-4 py-2 border-2 border-slate-200 text-slate-600 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LearningLayout>
  );
}