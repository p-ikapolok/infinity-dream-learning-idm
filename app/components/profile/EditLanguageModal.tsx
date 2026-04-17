"use client";

import { X } from "lucide-react";

export default function EditLanguagesModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#1e293b] w-[500px] rounded-xl p-6 text-white relative">

        {/* Close */}
        <X className="absolute top-4 right-4 cursor-pointer" onClick={onClose} />

        <h2 className="text-lg font-semibold mb-4">Languages</h2>

        {/* Inputs */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <select className="flex-1 p-2 rounded bg-[#0f172a]">
              <option>English</option>
            </select>
            <select className="flex-1 p-2 rounded bg-[#0f172a]">
              <option>Advanced</option>
            </select>
          </div>

          <div className="flex gap-2">
            <select className="flex-1 p-2 rounded bg-[#0f172a]">
              <option>Swahili</option>
            </select>
            <select className="flex-1 p-2 rounded bg-[#0f172a]">
              <option>Native</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="border px-4 py-2 rounded-full">Cancel</button>
          <button className="bg-blue-600 px-4 py-2 rounded-full">Save</button>
        </div>
      </div>
    </div>
  );
}