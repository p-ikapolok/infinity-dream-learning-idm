import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";

// ==========================================
// MOCK ACTIVE CALLS
// ==========================================
const initialCalls = [
  {
    id: 1,
    title: "Advanced Calculus Discussion",
    host: "Mr. James",
    participants: 18,
    platform: "Zoom",
    link: "https://zoom.us/",
    status: "Live"
  },
  {
    id: 2,
    title: "Physics Revision Group",
    host: "Sarah K.",
    participants: 11,
    platform: "Google Meet",
    link: "https://meet.google.com/",
    status: "Live"
  },
  {
    id: 3,
    title: "AI & Robotics Community",
    host: "Peter",
    participants: 26,
    platform: "Zoom",
    link: "https://zoom.us/",
    status: "Live"
  }
];

// ==========================================
// ICONS
// ==========================================
const Icons: Record<string, React.FC<{ className?: string }>> = {
  Video: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <polygon points="16 10 21 7 21 17 16 14" />
    </svg>
  ),

  Users: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),

  Plus: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),

  External: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function ConferenceCalls() {
  const [collapsed, setCollapsed] = useState(false);

  const [calls, setCalls] = useState(initialCalls);

  // ==========================================
  // CREATE NEW CALL
  // ==========================================
  const createCall = () => {
    const platform = window.confirm(
      "Press OK for Zoom or Cancel for Google Meet"
    )
      ? "Zoom"
      : "Google Meet";

    const newCall = {
      id: Date.now(),
      title: "New Conference Call",
      host: "You",
      participants: 1,
      platform,
      link:
        platform === "Zoom"
          ? "https://zoom.us/"
          : "https://meet.google.com/",
      status: "Live"
    };

    setCalls([newCall, ...calls]);

    // Redirect instantly
    window.location.href = newCall.link;
  };

  // ==========================================
  // END CALL
  // ==========================================
  const endCall = (id: number) => {
    setCalls(calls.filter((call) => call.id !== id));
  };

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>

      <div className="w-full min-h-screen bg-slate-50 p-6 md:p-8 flex flex-col gap-6">

        {/* HEADER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>
            <h1 className="text-3xl font-black text-slate-900">
              Conference Calls
            </h1>

            <p className="text-slate-500 mt-1">
              Join active Zoom or Google Meet study sessions.
            </p>
          </div>

          {/* CREATE BUTTON */}
          <button
            onClick={createCall}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
          >
            <Icons.Plus className="w-5 h-5" />
            Start Conference
          </button>
        </div>

        {/* ACTIVE CALLS */}
        <div className="flex flex-col gap-4">

          {calls.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
              <Icons.Video className="w-12 h-12 mx-auto text-slate-300 mb-4" />

              <h2 className="text-xl font-bold text-slate-700">
                No Active Calls
              </h2>

              <p className="text-slate-500 mt-2">
                Start a new conference call to begin.
              </p>
            </div>
          ) : (
            calls.map((call) => (
              <div
                key={call.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 hover:border-blue-300 transition-colors"
              >

                {/* LEFT INFO */}
                <div className="flex items-start gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Icons.Video className="w-7 h-7" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3 flex-wrap">

                      <h2 className="text-xl font-bold text-slate-900">
                        {call.title}
                      </h2>

                      <span className="px-2 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wide animate-pulse">
                        LIVE
                      </span>

                    </div>

                    <div className="flex flex-wrap items-center gap-5 mt-3 text-sm text-slate-500">

                      <span>
                        Host:{" "}
                        <span className="font-semibold text-slate-700">
                          {call.host}
                        </span>
                      </span>

                      <span className="flex items-center gap-1">
                        <Icons.Users className="w-4 h-4" />
                        {call.participants} participants
                      </span>

                      <span className="font-medium text-blue-600">
                        {call.platform}
                      </span>

                    </div>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-3">

                  {/* JOIN */}
                  <button
                    onClick={() => {
                      window.location.href = call.link;
                    }}
                    className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
                  >
                    Join Call
                    <Icons.External className="w-4 h-4" />
                  </button>

                  {/* END */}
                  <button
                    onClick={() => endCall(call.id)}
                    className="px-5 py-3 border border-red-200 text-red-600 hover:bg-red-50 rounded-xl font-semibold transition-colors"
                  >
                    End
                  </button>

                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </LearningLayout>
  );
}