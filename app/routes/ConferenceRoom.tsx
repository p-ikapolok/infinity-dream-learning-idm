import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";
import { ConferenceCall } from "../types/conference";
import CreateConferenceModal from "../components/CreateConferenceModal";
import { Plus, Users, Video, Zoom, GoogleMeet } from "../components/Icons";

const INITIAL_CALLS: ConferenceCall[] = [
  {
    id: 1,
    title: "Advanced React Patterns Discussion",
    host: "Dr. Emily Chen",
    participants: 24,
    platform: "Zoom",
    link: "https://zoom.us/j/123456789",
    status: "Live"
  },
  {
    id: 2,
    title: "UX/UI Design Weekly Review",
    host: "Michael Torres",
    participants: 8,
    platform: "Google Meet",
    link: "https://meet.google.com/abc-defg-hij",
    status: "Live"
  }
];

export default function ConferenceCalls() {
  const [collapsed, setCollapsed] = useState(false);
  const [calls, setCalls] = useState<ConferenceCall[]>(INITIAL_CALLS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const joinCall = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const endCall = (id: number) => {
    setCalls((prevCalls) => prevCalls.filter((call) => call.id !== id));
  };

  const createCall = (newCall: ConferenceCall) => {
    setCalls((prevCalls) => [newCall, ...prevCalls]);
  };

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full bg-[#f8fafc] font-sans text-[#0f172a] p-6 lg:p-10 overflow-y-auto">
        
        <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[28px] md:text-[32px] font-semibold tracking-tight">Conference Calls</h1>
            <p className="text-[15px] text-[#64748b] mt-1">Join active discussions and live lectures.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-[#2563eb] text-white px-5 py-2.5 rounded-md text-[14px] font-medium hover:bg-[#1d4ed8] transition-all active:scale-[0.98] shadow-sm"
          >
            <Plus className="w-4 h-4" />
            New Conference
          </button>
        </div>

        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calls.map((call) => (
            <div 
              key={call.id} 
              className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col hover:border-[#cbd5e1] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 bg-[#fef2f2] border border-[#fecaca] px-2.5 py-1 rounded-full">
                  <div className="w-2 h-2 bg-[#ef4444] rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <span className="text-[11px] font-bold text-[#ef4444] tracking-widest uppercase">
                    {call.status}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#64748b]">
                  {call.platform === "Zoom" ? <Zoom className="w-4 h-4 text-[#2563eb]" /> : <GoogleMeet className="w-4 h-4 text-[#0f9d58]" />}
                  {call.platform}
                </div>
              </div>

              <div className="flex flex-col gap-1 mb-6 flex-1">
                <h3 className="text-[18px] font-semibold text-[#0f172a] leading-tight line-clamp-2">
                  {call.title}
                </h3>
                <p className="text-[14px] text-[#64748b]">Hosted by {call.host}</p>
                <div className="flex items-center gap-2 mt-3 text-[14px] text-[#64748b] font-medium bg-[#f8fafc] w-fit px-3 py-1.5 rounded-md border border-[#e2e8f0]">
                  <Users className="w-4 h-4" />
                  {call.participants} {call.participants === 1 ? "Participant" : "Participants"}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-[#e2e8f0]">
                <button 
                  onClick={() => endCall(call.id)}
                  className="w-full py-2.5 text-[14px] font-medium text-[#ef4444] bg-white border border-[#fecaca] rounded-md hover:bg-[#fef2f2] transition-colors"
                >
                  End
                </button>
                <button 
                  onClick={() => joinCall(call.link)}
                  className="w-full py-2.5 text-[14px] font-medium text-white bg-[#2563eb] rounded-md hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>

        <CreateConferenceModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onCreate={createCall} 
        />
        
      </div>
    </LearningLayout>
  );
}