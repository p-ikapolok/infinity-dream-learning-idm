import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";

export default function ConferenceRoom() {
  const [collapsed, setCollapsed] = useState(true); // Auto-collapse sidebar for focus mode
  const [micEnabled, setMicEnabled] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full bg-slate-900 flex flex-col overflow-hidden relative">
        
        {/* Top Information Bar */}
        <div className="h-14 bg-slate-900 border-b border-slate-800 flex justify-between items-center px-6 text-white shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            <h1 className="font-bold tracking-wider">Live: Advanced Data Structures</h1>
            <span className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded font-mono">01:24:05</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              42 Participants
            </span>
          </div>
        </div>

        {/* Main Stage & Chat Container */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Video Grid Stage */}
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            {/* Presenter / Screen Share */}
            <div className="w-full bg-slate-800 rounded-xl border border-slate-700 flex-1 relative overflow-hidden flex items-center justify-center">
              <div className="text-center text-slate-500">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <p className="font-bold tracking-widest uppercase">Instructor Screen Share</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold">
                Prof. Alan Turing
              </div>
            </div>

            {/* Participant Mini-Grid */}
            <div className="h-40 shrink-0 grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((user) => (
                <div key={user} className="bg-slate-800 rounded-xl border border-slate-700 relative overflow-hidden flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded text-white text-[10px] font-bold">
                    Student {user}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar: Live Chat */}
          <div className="w-80 bg-slate-800 border-l border-slate-700 flex flex-col shrink-0">
            <div className="p-4 border-b border-slate-700 font-bold text-white uppercase tracking-widest text-sm">
              Session Chat
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              <div className="bg-slate-700/50 p-3 rounded-lg rounded-tl-none">
                <span className="text-xs text-blue-400 font-bold mb-1 block">Sarah J.</span>
                <p className="text-sm text-slate-200">Could you re-explain how $ O(n \log n) $ works for Merge Sort?</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-lg rounded-tl-none">
                <span className="text-xs text-purple-400 font-bold mb-1 block">Mike T.</span>
                <p className="text-sm text-slate-200">Wait, does that mean $ \Omega(n) $ is the best case?</p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-700 bg-slate-900">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="w-full bg-slate-800 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-lg border border-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

        </div>

        {/* Bottom Control Dock */}
        <div className="h-20 bg-slate-900 border-t border-slate-800 flex items-center justify-center gap-4 shrink-0 px-6">
          
          <button 
            onClick={() => setMicEnabled(!micEnabled)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${micEnabled ? "bg-slate-700 text-white hover:bg-slate-600" : "bg-red-500 text-white hover:bg-red-600"}`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {micEnabled ? (
                <>
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </>
              ) : (
                <>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                  <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                  <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </>
              )}
            </svg>
          </button>

          <button 
            onClick={() => setVideoEnabled(!videoEnabled)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${videoEnabled ? "bg-slate-700 text-white hover:bg-slate-600" : "bg-red-500 text-white hover:bg-red-600"}`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {videoEnabled ? (
                <>
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </>
              ) : (
                <>
                  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </>
              )}
            </svg>
          </button>

          <button className="w-12 h-12 rounded-full bg-slate-700 text-white hover:bg-slate-600 flex items-center justify-center transition-colors ml-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </button>

          <button className="px-6 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm transition-colors ml-auto">
            Leave Session
          </button>

        </div>

      </div>
    </LearningLayout>
  );
}