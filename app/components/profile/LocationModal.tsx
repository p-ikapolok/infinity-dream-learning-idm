"use client";

import { X } from "lucide-react";

export default function LocationModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] text-white w-[700px] rounded-xl p-6 relative">

        <X className="absolute right-4 top-4 cursor-pointer" onClick={onClose} />

        <h2 className="text-lg font-semibold mb-6">Current Location</h2>

        <div className="grid grid-cols-3 gap-4">

          <Select label="Country of Origin" value="Kenya" />
          <Select label="State of Origin" value="Search" />
          <Select label="City of Origin" value="Search" />

          <Select label="Country of Residence" value="Kenya" />
          <Select label="State of Residence" value="Busia" />
          <Select label="City of Residence" value="Malaba" />

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

function Select({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-sm block mb-1">{label}</label>
      <select className="w-full bg-[#0f172a] p-3 rounded-md">
        <option>{value}</option>
      </select>
    </div>
  );
}