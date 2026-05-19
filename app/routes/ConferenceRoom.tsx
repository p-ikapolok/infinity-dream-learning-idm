import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";
import CreateConferenceModal from "../components/CreateConferenceModal";

// ==========================================
// TYPES
// ==========================================
type Platform = "Zoom" | "Google Meet";

interface ConferenceCall {
  id: number;
  title: string;
  host: string;
  participants: number;
  platform: Platform;
  link: string;
}

// ==========================================
// MOCK DATA
// ==========================================
const initialCalls: ConferenceCall[] = [
  {
    id: 1,
    title: "Advanced Calculus Discussion",
    host: "Mr. James",
    participants: 18,
    platform: "Zoom",
    link: "https://zoom.us/j/123",
  },
  {
    id: 2,
    title: "Physics Revision Group",
    host: "Sarah K.",
    participants: 11,
    platform: "Google Meet",
    link: "https://meet.google.com/abc-defg-hij",
  },
];

// ==========================================
// ICONS (FULL SVG SYSTEM)
// ==========================================
const Icons = {
  Video: (p: any) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <polygon points="16 10 21 7 21 17 16 14" />
    </svg>
  ),

  Users: (p: any) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="7" r="4" />
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    </svg>
  ),

  Plus: (p: any) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),

  External: (p: any) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
};

// ==========================================
// PLATFORM DETECTION (SYSTEM LEVEL)
// ==========================================
function detectPlatform(link: string): Platform {
  if (link.includes("zoom")) return "Zoom";
  return "Google Meet";
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function ConferenceCalls() {
  const [calls, setCalls] = useState(initialCalls);

  // MODAL CONTROL
  const [open, setOpen] = useState(false);

  // ==========================================
  // CREATE CALL HANDLER (FROM MODAL)
  // ==========================================
  const handleCreate = (data: {
    title: string;
    platform: Platform;
    link: string;
  }) => {
    const newCall: ConferenceCall = {
      id: Date.now(),
      title: data.title,
      platform: data.platform,
      link: data.link,
      host: "You",
      participants: 1,
    };

    setCalls((prev) => [newCall, ...prev]);

    // AUTO JOIN AFTER CREATION (optional behavior)
    window.open(data.link, "_blank");
  };

  // ==========================================
  // JOIN CALL
  // ==========================================
  const joinCall = (call: ConferenceCall) => {
    window.open(call.link, "_blank");
  };

  // ==========================================
  // END CALL
  // ==========================================
  const endCall = (id: number) => {
    setCalls((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <LearningLayout>
      <div className="w-full min-h-screen bg-slate-50 p-6 md:p-8 flex flex-col gap-6">

        {/* HEADER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-black text-slate-900">
              Conference Calls
            </h1>
            <p className="text-slate-500 mt-1">
              Live Zoom & Google Meet study rooms
            </p>
          </div>

          {/* OPEN MODAL */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
          >
            <Icons.Plus className="w-5 h-5" />
            Create Call
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {calls.map((call) => (
            <div
              key={call.id}
              className="bg-white border border-slate-200 rounded-2xl p-5"
            >

              <div className="flex gap-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Icons.Video className="w-6 h-6" />
                </div>

                <div>
                  <h2 className="font-bold">{call.title}</h2>

                  <div className="text-sm text-slate-500 flex gap-2 mt-1">
                    <span>{detectPlatform(call.link)}</span>
                    <span>•</span>
                    <span>{call.participants} participants</span>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex justify-between mt-5">

                <button
                  onClick={() => joinCall(call)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold"
                >
                  Join
                </button>

                <button
                  onClick={() => endCall(call.id)}
                  className="px-4 py-2 text-sm border border-red-200 text-red-600 rounded-lg"
                >
                  End
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* ==========================================
            MODAL (CONNECTED PROPERLY)
        ========================================== */}
        <CreateConferenceModal
          open={open}
          onClose={() => setOpen(false)}
          onCreate={handleCreate}
        />

      </div>
    </LearningLayout>
  );
}