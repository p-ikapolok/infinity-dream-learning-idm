import React, { useEffect, useRef, useState } from "react";
import LearningLayout from "../components/LearningLayout";

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
  status: "Live" | "Ended";
}

// ==========================================
// MOCK INITIAL DATA
// ==========================================
const initialCalls: ConferenceCall[] = [
  {
    id: 1,
    title: "Advanced Calculus Discussion",
    host: "Mr. James",
    participants: 18,
    platform: "Zoom",
    link: "https://zoom.us/",
    status: "Live",
  },
  {
    id: 2,
    title: "Physics Revision Group",
    host: "Sarah K.",
    participants: 11,
    platform: "Google Meet",
    link: "https://meet.google.com/",
    status: "Live",
  },
];

// ==========================================
// ICONS (FULL SVG)
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
// FAKE WEBSOCKET ENGINE (CLIENT ONLY)
// ==========================================
class FakeWebSocketEngine {
  private listeners: ((data: any) => void)[] = [];

  connect(callback: (data: any) => void) {
    this.listeners.push(callback);
  }

  emit(data: any) {
    this.listeners.forEach((fn) => fn(data));
  }

  simulateRandomActivity() {
    // Simulate participant changes every few seconds
    setInterval(() => {
      const callId = Math.floor(Math.random() * 2) + 1;
      const change = Math.random() > 0.5 ? 1 : -1;

      this.emit({
        type: "PARTICIPANT_UPDATE",
        callId,
        change,
      });
    }, 2500);
  }
}

const ws = new FakeWebSocketEngine();

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function ConferenceCalls() {
  const [calls, setCalls] = useState<ConferenceCall[]>(initialCalls);

  const callsRef = useRef(calls);
  callsRef.current = calls;

  // ==========================================
  // REAL-TIME SYSTEM SIMULATION
  // ==========================================
  useEffect(() => {
    ws.connect((event) => {
      if (event.type === "PARTICIPANT_UPDATE") {
        setCalls((prev) =>
          prev.map((call) =>
            call.id === event.callId
              ? {
                  ...call,
                  participants: Math.max(
                    0,
                    call.participants + event.change
                  ),
                }
              : call
          )
        );
      }
    });

    ws.simulateRandomActivity();
  }, []);

  // ==========================================
  // CREATE CALL
  // ==========================================
  const createCall = () => {
    const newCall: ConferenceCall = {
      id: Date.now(),
      title: "New Live Session",
      host: "You",
      participants: 1,
      platform: "Zoom",
      link: "https://zoom.us/",
      status: "Live",
    };

    setCalls((prev) => [newCall, ...prev]);

    // simulate "broadcast to websocket"
    ws.emit({
      type: "CALL_CREATED",
      call: newCall,
    });
  };

  // ==========================================
  // JOIN CALL
  // ==========================================
  const joinCall = (call: ConferenceCall) => {
    window.open(call.link, "_blank");

    // simulate participant increase
    ws.emit({
      type: "PARTICIPANT_UPDATE",
      callId: call.id,
      change: 1,
    });
  };

  // ==========================================
  // END CALL
  // ==========================================
  const endCall = (id: number) => {
    setCalls((prev) => prev.filter((c) => c.id !== id));
  };

  // ==========================================
  // UI
  // ==========================================
  return (
    <LearningLayout>
      <div className="w-full min-h-screen bg-slate-50 p-6 md:p-8 flex flex-col gap-6">

        {/* HEADER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-black text-slate-900">
              Live Conference System
            </h1>
            <p className="text-slate-500 mt-1">
              WebSocket simulation (frontend-only)
            </p>
          </div>

          <button
            onClick={createCall}
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
              className="bg-white border border-slate-200 rounded-2xl p-5 transition hover:shadow-md"
            >

              <div className="flex gap-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Icons.Video className="w-6 h-6" />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    {call.title}
                  </h2>

                  <div className="text-sm text-slate-500 flex gap-2 mt-1">
                    <span>{call.platform}</span>
                    <span>•</span>
                    <span>{call.participants} live</span>
                  </div>
                </div>
              </div>

              {/* REAL-TIME INDICATOR */}
              <div className="mt-4 flex items-center gap-2 text-red-600 text-xs font-bold">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                LIVE • REAL TIME
              </div>

              {/* ACTIONS */}
              <div className="flex justify-between mt-5">

                <button
                  onClick={() => joinCall(call)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
                >
                  Join
                </button>

                <button
                  onClick={() => endCall(call.id)}
                  className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm hover:bg-red-50"
                >
                  End
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </LearningLayout>
  );
}