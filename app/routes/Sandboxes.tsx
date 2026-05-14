import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";

export default function Sandboxes() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full p-8 bg-slate-50 flex flex-col items-center justify-center text-center">
        
        <div className="max-w-md w-full bg-white p-10 border-2 border-slate-200 rounded-2xl shadow-sm flex flex-col items-center">
          
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-wide mb-2">Code Sandboxes</h1>
          <p className="text-slate-500 mb-8">
            Launch a secure, browser-based environment to practice React, Python, or Web3 development with real-time AI assistance.
          </p>

          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Create New Sandbox
          </button>
        </div>

      </div>
    </LearningLayout>
  );
}