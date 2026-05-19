import React, { useState, useEffect } from "react";
import { ConferenceCall } from "../types/conference";
import { X, Zoom, GoogleMeet } from "./Icons";

interface CreateConferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (call: ConferenceCall) => void;
}

const detectPlatform = (link: string): "Zoom" | "Google Meet" => {
  if (link.toLowerCase().includes("zoom.us")) return "Zoom";
  return "Google Meet";
};

export default function CreateConferenceModal({ isOpen, onClose, onCreate }: CreateConferenceModalProps) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState<"Zoom" | "Google Meet">("Zoom");
  const [error, setError] = useState("");

  useEffect(() => {
    if (link) setPlatform(detectPlatform(link));
  }, [link]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !link.trim()) {
      setError("Both title and link are required.");
      return;
    }

    const newCall: ConferenceCall = {
      id: Date.now(),
      title: title.trim(),
      host: "Current User",
      participants: 1,
      platform,
      link: link.trim(),
      status: "Live",
    };

    onCreate(newCall);
    setTitle("");
    setLink("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0f172a]/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg border border-[#e2e8f0] w-full max-w-md overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0]">
          <h2 className="text-[18px] font-semibold text-[#0f172a]">Create Conference Call</h2>
          <button onClick={onClose} className="text-[#64748b] hover:text-[#0f172a] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
          {error && <div className="text-[13px] text-[#ef4444] bg-[#fef2f2] p-3 rounded-md border border-[#fca5a5]">{error}</div>}
          
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#0f172a]">Conference Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Weekly Design Sync"
              className="w-full px-4 py-2 border border-[#e2e8f0] rounded-md text-[14px] focus:outline-none focus:border-[#2563eb] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#0f172a]">Meeting Link (Zoom or Google Meet)</label>
            <input 
              type="url" 
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2 border border-[#e2e8f0] rounded-md text-[14px] focus:outline-none focus:border-[#2563eb] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#0f172a]">Platform</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPlatform("Zoom")}
                className={`py-2 border rounded-md text-[14px] font-medium transition-all flex items-center justify-center gap-2 ${
                  platform === "Zoom" ? "bg-[#eff6ff] border-[#2563eb] text-[#2563eb]" : "bg-white border-[#e2e8f0] text-[#64748b] hover:bg-[#f8fafc]"
                }`}
              >
                <Zoom className="w-4 h-4" /> Zoom
              </button>
              <button
                type="button"
                onClick={() => setPlatform("Google Meet")}
                className={`py-2 border rounded-md text-[14px] font-medium transition-all flex items-center justify-center gap-2 ${
                  platform === "Google Meet" ? "bg-[#eff6ff] border-[#2563eb] text-[#2563eb]" : "bg-white border-[#e2e8f0] text-[#64748b] hover:bg-[#f8fafc]"
                }`}
              >
                <GoogleMeet className="w-4 h-4" /> Google Meet
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-[#e2e8f0]">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 text-[14px] font-medium text-[#64748b] hover:bg-[#f8fafc] border border-transparent rounded-md transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-[#2563eb] text-white text-[14px] font-medium rounded-md hover:bg-[#1d4ed8] transition-colors active:scale-[0.98]"
            >
              Create Call
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}