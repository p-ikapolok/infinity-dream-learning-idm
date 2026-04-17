"use client";

import { X } from "lucide-react";

export default function SocialModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] text-white w-[600px] rounded-xl p-6 relative">

        <X className="absolute right-4 top-4 cursor-pointer" onClick={onClose} />

        <h2 className="text-lg font-semibold mb-4">Social Profile</h2>
        <p className="text-sm text-gray-400 mb-4">
          Add your social links
        </p>

        <div className="space-y-3">
          {[
            "LinkedIn",
            "Facebook",
            "X (Twitter)",
            "Youtube",
            "TikTok",
            "GitHub",
          ].map((label) => (
            <div key={label}>
              <label className="text-sm">{label}</label>
              <input
                className="w-full bg-[#0f172a] p-3 rounded-md mt-1"
                placeholder="https://"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="border border-blue-500 px-4 py-2 rounded-full">
            Cancel
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded-full">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}