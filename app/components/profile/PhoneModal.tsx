"use client";

import { X } from "lucide-react";

export default function PhoneModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] text-white w-[500px] rounded-xl p-6 relative">

        <X className="absolute right-4 top-4 cursor-pointer" onClick={onClose} />

        <h2 className="text-lg font-semibold mb-4">Phone Number</h2>

        {/* Primary */}
        <div className="mb-4">
          <label className="text-sm mb-1 block">Phone Number*</label>
          <input
            className="w-full bg-[#0f172a] p-3 rounded-md"
            defaultValue="+254739762594"
          />
        </div>

        {/* WhatsApp */}
        <div className="mb-4">
          <label className="text-sm mb-1 block">WhatsApp Number*</label>
          <input
            className="w-full bg-[#0f172a] p-3 rounded-md"
            defaultValue="+254740748621"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 text-sm text-gray-300 mb-6">
          <input type="checkbox" />
          <p>
            The same as primary phone number
            <br />
            <span className="text-xs text-gray-400">
              ALX will use this number for ease of communication with you.
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
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