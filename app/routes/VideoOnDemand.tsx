import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";

export default function VideoOnDemand() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full p-8 bg-slate-50 flex flex-col gap-6 overflow-y-auto">
        
        {/* Featured Video */}
        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="w-full aspect-video bg-slate-900 flex items-center justify-center relative group cursor-pointer">
            <svg className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-bold tracking-widest uppercase">
              Featured Lecture
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wide">Advanced React Patterns</h2>
            <p className="text-slate-500 mt-2">Recorded live • Oct 14, 2025 • Instructor: Sarah Jenkins</p>
          </div>
        </div>

        {/* Video Grid */}
        <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest mt-4">Library</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((vid) => (
            <div key={vid} className="flex flex-col gap-3 group cursor-pointer">
              <div className="w-full aspect-video bg-slate-200 rounded-xl border-2 border-slate-200 group-hover:border-blue-500 transition-colors relative flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <div className="absolute bottom-2 right-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  45:00
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  Module {vid}: State Management
                </h4>
                <p className="text-xs text-slate-500 mt-1">1.2k views • 2 days ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LearningLayout>
  );
}