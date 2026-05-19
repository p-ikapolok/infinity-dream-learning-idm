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
  }
];

// ==========================================
// SVG ICONS
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
  ),

  Alert: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),

  Clock: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),

  Calendar: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function ConferenceCalls() {
  const [collapsed, setCollapsed] = useState(false);
  const [calls, setCalls] = useState(initialCalls);

  const [showModal, setShowModal] = useState(false);
  const [callTitle, setCallTitle] = useState("");
  const [platform, setPlatform] = useState("Zoom");
  const [meetingLink, setMeetingLink] = useState("");

  // CREATE CALL
  const createCall = () => {
    if (!callTitle.trim()) return;

    const newCall = {
      id: Date.now(),
      title: callTitle,
      host: "You",
      participants: 1,
      platform,
      link:
        meetingLink ||
        (platform === "Zoom"
          ? "https://zoom.us/"
          : "https://meet.google.com/"),
      status: "Live"
    };

    setCalls([newCall, ...calls]);

    setCallTitle("");
    setMeetingLink("");
    setPlatform("Zoom");
    setShowModal(false);

    window.location.href = newCall.link;
  };

  // END CALL
  const endCall = (id: number) => {
    setCalls(calls.filter((c) => c.id !== id));
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

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold"
          >
            <Icons.Plus className="w-5 h-5" />
            Start Conference
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {calls.map((call) => (
            <div
              key={call.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 hover:border-blue-300 transition"
            >

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                  <Icons.Video className="w-6 h-6" />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">{call.title}</h2>
                  <p className="text-sm text-slate-500">Host: {call.host}</p>

                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                    <Icons.Users className="w-4 h-4" />
                    {call.participants}
                  </div>

                  <p className="text-sm text-blue-600 font-semibold mt-1">
                    {call.platform}
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => (window.location.href = call.link)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm"
                >
                  Join
                  <Icons.External className="w-4 h-4" />
                </button>

                <button
                  onClick={() => endCall(call.id)}
                  className="px-4 py-2 border border-red-200 text-red-600 rounded-xl text-sm"
                >
                  End
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* NEXT UPGRADES */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-6">
          <h2 className="text-xl font-black mb-4">Next Upgrades</h2>

          <ul className="space-y-3 text-sm text-slate-700">

            <li className="flex items-center gap-2">
              <Icons.Alert className="w-4 h-4 text-red-500" />
              Live badge auto detection from Zoom links
            </li>

            <li className="flex items-center gap-2">
              <Icons.Video className="w-4 h-4 text-green-600" />
              Join in browser vs open app
            </li>

            <li className="flex items-center gap-2">
              <Icons.Alert className="w-4 h-4 text-slate-500" />
              Password protected calls
            </li>

            <li className="flex items-center gap-2">
              <Icons.Users className="w-4 h-4 text-blue-500" />
              Real-time participant counter UI
            </li>

            <li className="flex items-center gap-2 border-t pt-3">
              <Icons.Clock className="w-4 h-4 text-purple-500" />
              Live WebSocket real-time calls
            </li>

            <li className="flex items-center gap-2">
              <Icons.Users className="w-4 h-4 text-indigo-500" />
              Participant simulation counter
            </li>

            <li className="flex items-center gap-2">
              <Icons.Video className="w-4 h-4 text-red-500" />
              Private invite links
            </li>

            <li className="flex items-center gap-2">
              <Icons.Calendar className="w-4 h-4 text-green-500" />
              Scheduled meetings (Google Calendar style)
            </li>

          </ul>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

            <div className="w-full max-w-lg bg-white rounded-3xl">

              <div className="p-5 border-b">
                <h2 className="text-xl font-bold">Start Conference</h2>
              </div>

              <div className="p-5 flex flex-col gap-4">

                <input
                  value={callTitle}
                  onChange={(e) => setCallTitle(e.target.value)}
                  placeholder="Title"
                  className="border p-3 rounded-xl"
                />

                <div className="flex gap-3">
                  <button
                    onClick={() => setPlatform("Zoom")}
                    className={`flex-1 p-3 border rounded-xl ${
                      platform === "Zoom" ? "bg-blue-50" : ""
                    }`}
                  >
                    Zoom
                  </button>

                  <button
                    onClick={() => setPlatform("Google Meet")}
                    className={`flex-1 p-3 border rounded-xl ${
                      platform === "Google Meet" ? "bg-green-50" : ""
                    }`}
                  >
                    Meet
                  </button>
                </div>

                <input
                  value={meetingLink}
                  onChange={(e) => setMeetingLink(e.target.value)}
                  placeholder="Paste meeting link"
                  className="border p-3 rounded-xl"
                />

              </div>

              <div className="p-5 flex justify-end gap-3 border-t">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-xl"
                >
                  Cancel
                </button>

                <button
                  onClick={createCall}
                  className="px-5 py-2 bg-blue-600 text-white rounded-xl"
                >
                  Start
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </LearningLayout>
  );
}